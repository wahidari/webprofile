import { useState } from "react";
import axios from "axios"
import NavBarTop from "@components/NavBarTop";
import PostCard from "@components/PostCard";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import Link from "next/link";

export default function Kategori({ profiles, settings, beritas, idKategori, namaKategori }) {

    const categoryName = capitalizeString(namaKategori);
    const [dataBeritas, setDataBeritas] = useState(beritas.data);
    const [offset, setOffset] = useState(0)
    const [showLoadMore, setShowLoadMore] = useState(true)
    const [showSpinner, setShowSpinner] = useState(false)

    async function loadMore() {
        setShowSpinner(true)
        setOffset(offset + 5)
        try {
            const res = await axios.get(`${process.env.API_ROUTE}/news?limit=5&offset=${offset + 5}&kategori=${idKategori}`)
            // tambahkan hasil get data agenda baru ke data agenda lama 
            setDataBeritas(dataBeritas.concat(res.data.data))
            // console.log("data length : ", res.data.data.length)
            if (res.data.data.length == 0) {
                setShowLoadMore(false)
            }
            // console.log("new agenda : ", dataAgendas)
            setShowSpinner(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <Seo
                title={`Kategori "${categoryName}" - Berita Desa ${profiles.nama_desa}`}
                description={`Kategori "${categoryName}" - Berita Desa ${profiles.nama_desa}`}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-white">
                    <div className="container py-3">
                        <p className="mb-0 fs-15 text-color-muted">Berita dengan kategori : <span className="fw-medium">{`"${categoryName}"`}</span> </p>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {beritas.data.length > 0 ?
                            // jika berita dengan suatu kategori ditemukan, tampilkan berita
                            dataBeritas.map(berita =>
                                <div className="col-sm-6 col-md-6 col-lg-4" key={berita.id}>
                                    <PostCard
                                        slug={berita.slug}
                                        image={berita.cover}
                                        title={berita.title}
                                        date={berita.created_at}
                                        description={berita.description}
                                    />
                                </div>
                            )
                            :
                            // jika berita dengan suatu kategori tidak ditemukan, tampilkan eror
                            <div className="my-5 py-4 d-flex justify-content-center">
                                <div className="col col-md-12 col-lg-6 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                                    <div className="text-center">
                                        <p>Tidak ada Berita dengan kategori <span className="fw-medium">{`"${namaKategori}"`}</span>.</p>
                                        <p className="mb-0">Kembali ke halaman {" "}
                                            <Link href="/berita">
                                                <a className="text-decoration-none">Berita</a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {beritas.data.length > 0 ?
                        /* jika ada berita, tampilkan  */
                        showLoadMore ?
                            // jika ada data selanjutnya, tampilkan tombol load more 
                            <div className="mt-5 text-center">
                                <button onClick={loadMore} className="btn btn-primary">
                                    {showSpinner ?
                                        <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                        :
                                        ""
                                    }
                                    {" "}Selanjutnya
                                </button>
                            </div>
                            :
                            // jika tidak ditemukan data selanjutnya, tampilkan alert
                            <div className="mt-5 d-flex justify-content-center">
                                <div className="col col-md-4 alert text-green border-green d-flex align-items-center justify-content-center" role="alert">
                                    <div className="text-center">
                                        <p className="mb-0">Semua berita sudah ditampilkan.</p>
                                    </div>
                                </div>
                            </div>
                        :
                        ""
                    }
                </div>
            </main>

            <Footer profiles={profiles} links={settings.setting} />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps({ params, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    // console.log(params)
    const paramSplit = params.id.split("-");
    // get kategori id 
    const idKategori = paramSplit[0]
    // get kategori name
    const namaKategori = paramSplit[1]
    // console.log(paramSplit)
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    // For get berita by category 
    const getBeritaByCategory = await fetch(`${process.env.API_ROUTE}/news?kategori=${idKategori}`);
    const beritas = await getBeritaByCategory.json();
    // will be passed to the page component as props
    return {
        props: { profiles, settings, beritas, idKategori, namaKategori }
    };
};

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};