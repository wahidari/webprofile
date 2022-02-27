import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import BreadcrumbArea from "@components/BreadcrumbArea";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function Sejarah({ profiles, settings, sejarah }) {

    return (
        <>
            <style jsx>
                {`
                .shadow-custom {
                    box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
                }
                .maps {
                    height: 450px;
                }
            `}
            </style>

            <Seo
                title={`Sejarah - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>

                <BreadcrumbArea pageName="Sejarah Singkat" currentPage="Sejarah"/>

                <div className="container my-5">
                    <div className="col-lg-10 mx-auto">
                        <div className="card border-0 shadow-custom px-4 py-4 bg-white mb-5">
                            <h3>Sejarah Singkat</h3>
                            <div
                                className="text-color-secondary"
                                dangerouslySetInnerHTML={{ __html: sejarah.sejarah }}
                            ></div>
                        </div>
                        <div className="card border-0 shadow-custom px-4 py-4 bg-white mb-5">
                            <h3>Peta Desa</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55025.830477406416!2d112.70216338981292!3d-7.023406162641918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd80f60554b1adf%3A0xe181faf130f4decf!2sBangakalan%2C%20Kec.%20Bangkalan%2C%20Kabupaten%20Bangkalan%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1639908491736!5m2!1sid!2sid"
                                className="rounded mt-3 maps" allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>
                        <div className="card border-0 shadow-custom px-4 py-4 bg-white mb-5">
                            <h3>Peta Geospatial</h3>
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=14LgEJiY6STWUfRxSVHHUMmqKFqsWdZyc&ehbc=2E312F"
                                className="rounded mt-3 maps" allowFullScreen=""
                                loading="lazy"></iframe>
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
    const getSejarah = await fetch(`${process.env.API_ROUTE}/profil/sejarah`);
    const sejarah = await getSejarah.json();
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    return {
        // will be passed to the page component as props
        props: { profiles, settings, sejarah },
    };
};