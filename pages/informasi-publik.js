import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function InformasiPublik({ profiles, settings, }) {
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
                title={`Informasi Publik - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Informasi" currentPage="Informasi Publik" />
                </div>

                <div className="container my-5">
                    <div className="card border-0 shadow-custom px-3 pt-3">
                        <h4>Informasi Publik</h4>
                        <div className="table-responsive mt-3">
                            <table className="table table-borderless table-hover">
                                <thead>
                                    <tr>
                                        <th className="fw-medium">No</th>
                                        <th className="fw-medium">Informasi</th>
                                        <th className="fw-medium">Jenis</th>
                                        <th className="fw-medium">Tahun</th>
                                        <th className="fw-medium">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Formulir Pengajuan Keberatan Informasi</td>
                                        <td>Informasi Umum</td>
                                        <td>2017</td>
                                        <td><a href="#" className="text-decoration-none">Download</a></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Formulir Pengajuan Beasiswa Masyarakata Desa</td>
                                        <td>Informasi Berkala</td>
                                        <td>2017</td>
                                        <td><a href="#" className="text-decoration-none">Download</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </main>

            <Footer profiles={profiles} links={settings.setting} />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps() {
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    return {
        props: { profiles, settings }, // will be passed to the page component as props
    };
};