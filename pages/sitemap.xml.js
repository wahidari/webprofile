const BASE_URL = `${process.env.BASE_URL}`

function generateSiteMap(agendas, beritas, pembangunan, bumdes, umkm) {

    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        
            <!-- Manually set the URLs we know already-->
            <url>
                <loc>${BASE_URL}</loc>
            </url>
            <url>
                <loc>${BASE_URL}/administrasi</loc>
            </url>
            <url>
                <loc>${BASE_URL}/agenda</loc>
            </url>
            <url>
                <loc>${BASE_URL}/berita</loc>
            </url>
            <url>
                <loc>${BASE_URL}/covid</loc>
            </url>
            <url>
                <loc>${BASE_URL}/dana-desa</loc>
            </url>
            <url>
                <loc>${BASE_URL}/foto</loc>
            </url>
            <url>
                <loc>${BASE_URL}/informasi-publik</loc>
            </url>
            <url>
                <loc>${BASE_URL}/lapak</loc>
            </url>
            <url>
                <loc>${BASE_URL}/pembangunan</loc>
            </url>
            <url>
                <loc>${BASE_URL}/penduduk</loc>
            </url>
            <url>
                <loc>${BASE_URL}/produk-hukum</loc>
            </url>
            <url>
                <loc>${BASE_URL}/sejarah</loc>
            </url>
            <url>
                <loc>${BASE_URL}/struktur</loc>
            </url>
            <url>
                <loc>${BASE_URL}/video</loc>
            </url>
            <url>
                <loc>${BASE_URL}/visimisi</loc>
            </url>
            <url>
                <loc>${BASE_URL}/wilayah</loc>
            </url>
            <url>
                <loc>${BASE_URL}/bumdes</loc>
            </url>
            <url>
                <loc>${BASE_URL}/umkm</loc>
            </url>

            <!-- Automatically generate dynamic agenda page -->
            ${agendas.data.map(({ slug }) => {
        return `
                    <url>
                        <loc>${`${BASE_URL}/agenda/${slug}`}</loc>
                    </url>
                `
    }).join('')}

            <!-- Automatically generate dynamic berita page -->
            ${beritas.data.map(({ slug }) => {
        return `
                    <url>
                        <loc>${`${BASE_URL}/berita/${slug}`}</loc>
                    </url>
                `
    }).join('')}

            <!-- Automatically generate dynamic pembangunan page -->
            ${pembangunan.data.map(({ id }) => {
        return `
                    <url>
                        <loc>${`${BASE_URL}/pembangunan/${id}`}</loc>
                    </url>
                `
    }).join('')}

            <!-- Automatically generate dynamic bumdes page -->
            ${bumdes.data.map(({ id }) => {
        return `
                    <url>
                        <loc>${`${BASE_URL}/bumdes/${id}`}</loc>
                    </url>
                `
    }).join('')}

            <!-- Automatically generate dynamic umkm page -->
            ${umkm.data.map(({ id }) => {
        return `
                    <url>
                        <loc>${`${BASE_URL}/umkm/${id}`}</loc>
                    </url>
                `
    }).join('')}

        </urlset>
        `
}

export default function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const getAllAgenda = await fetch(`${process.env.API_ROUTE}/agenda`);
    const agendas = await getAllAgenda.json();
    const getAllBerita = await fetch(`${process.env.API_ROUTE}/news`);
    const beritas = await getAllBerita.json();
    const getAllPembangunan = await fetch(`${process.env.API_ROUTE}/pembangunan`);
    const pembangunan = await getAllPembangunan.json();
    const getAllBumdes = await fetch(`${process.env.API_ROUTE}/bumdes`);
    const bumdes = await getAllBumdes.json();
    const getAllUmkm = await fetch(`${process.env.API_ROUTE}/umkm`);
    const umkm = await getAllUmkm.json();

    // We generate the XML sitemap with the data
    const sitemap = generateSiteMap(agendas, beritas, pembangunan, bumdes, umkm)

    res.setHeader('Content-Type', 'text/xml')
    // we send the XML to the browser
    res.write(sitemap)
    res.end()

    return {
        props: {}
    }
}