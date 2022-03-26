import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function ProdukHukum({ profiles, settings, produkHukum }) {

    return (
        <>
            <style jsx>
                {`
					.shadow-custom {
						box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
					}
				`}
            </style>

            <Seo
                title={`Produk Hukum - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main className="h-100">
                <div className="bg-light">
                    <Breadcrumb pageName="Hukum" currentPage="Produk Hukum" />
                </div>

                <div className="container my-5">
                    {produkHukum.length > 0 ?
                        <div className="card border-0 shadow-custom px-3 pt-3">
                            <h4>Produk Hukum</h4>
                            <div className="table-responsive mt-3">
                                <table className="table table-borderless table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-medium">No</th>
                                            <th className="fw-medium">Dokumen</th>
                                            <th className="fw-medium">Tahun</th>
                                            <th className="fw-medium">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {produkHukum.map((item, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.produk}</td>
                                                <td>{item.tahun}</td>
                                                <td>
                                                    <a href={item.attachment} className="text-decoration-none">
                                                        Download
                                                    </a>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        // jika tidak ada produk hukum, tampilkan eror
                        <div className="my-5 py-4 d-flex justify-content-center">
                            <div className="col col-md-8 col-lg-6 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                                <div className="text-center">
                                    <p className="mb-0">Tidak Ada Data Produk Hukum</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </main>

            <Footer profiles={profiles} links={settings.setting} />

            <BackToTop />
        </>
    );
}

// This gets called on every request to this page
export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    const getProdukHukum = await fetch(`${process.env.API_ROUTE}/produk-hukum`);
    const produkHukum = await getProdukHukum.json();
    return {
        props: { profiles, settings, produkHukum }, // will be passed to the page component as props
    };
};
