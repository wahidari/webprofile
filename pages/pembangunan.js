import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import PembangunanCard from "@components/PembangunanCard";
import Seo from "@components/Seo";

export default function Pembangunan({ profiles, settings, covid }) {

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
                title={`Pembangunan - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Pembangunan" currentPage="Pembangunan" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        <PembangunanCard />
                    </div>
                </div>

                <div className="container my-5">
                    <div className="card border-0 shadow-custom px-3 pt-3">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th className="fw-medium">No</th>
                                        <th className="fw-medium">Program</th>
                                        <th className="fw-medium">Lokasi</th>
                                        <th className="fw-medium">Anggaran</th>
                                        <th className="fw-medium">Sumber Dana</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Pembangunan Jembatan Penghubung Persawahan</td>
                                        <td>RT 01</td>
                                        <td>Rp. 119.655,-</td>
                                        <td>Dana Desa</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Pembangunan MCK dan Tempat Wudhu Masjid</td>
                                        <td>RT 02</td>
                                        <td>Rp. 219.655,-</td>
                                        <td>Dana Desa</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Peningkatan Jalan Usaha Tani</td>
                                        <td>RT 03</td>
                                        <td>Rp. 319.655,-</td>
                                        <td>Dana Desa</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Pembangunan Gorong-Gorong</td>
                                        <td>RT 04</td>
                                        <td>Rp. 419.655,-</td>
                                        <td>Dana Desa</td>
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
export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    return {
        // will be passed to the page component as props
        props: { profiles, settings },
    };
};