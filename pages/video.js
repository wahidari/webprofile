import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import VideoCard from "@components/VideoCard";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function Video({ profiles, settings, videos }) {

    return (
        <>

            <Seo
                title={`Video - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Galeri" currentPage="Video" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {videos.length > 0 ?
                            videos.map((video, index) =>
                                <div className="col-md-6" key={index}>
                                    <VideoCard link={video.link} />
                                </div>
                            )
                            :
                            // jika tidak ada video, tampilkan eror
                            <div className="my-5 d-flex justify-content-center">
                                <div className="col col-md-4 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                                    <div className="text-center">
                                        <p className="mb-0">Video tidak ditemukan.</p>
                                    </div>
                                </div>
                            </div>
                        }
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
    const getDataVideos = await fetch(`${process.env.API_ROUTE}/gallery/video`);
    const videos = await getDataVideos.json();
    return {
        props: { profiles, settings, videos }, // will be passed to the page component as props
    };
};