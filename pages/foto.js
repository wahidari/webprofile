import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import Gallery from "react-photo-gallery";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useState, useCallback } from "react";

export default function Foto({ profiles, settings, fotos }) {
    let newFotos = []
    // the GALLERY lIBRARY need "width" and "height" property. 
    // also GALLERY LIBRARY image source using "src" property
    // gallery docs : https://neptunian.github.io/react-photo-gallery/examples/lightbox.html

    // converting array of object into a new array of object 
    // to change image source property from "photo" to "src"
    // also add "width" and "height" property
    // ex original array of object :
    // [
    //     {
    //         "slug": "Foto-A-le3e9A1",
    //         "title": "Foto A",
    //         "description": null,
    //         "photo": "http://localhost:8000/media/photo-le3e9A1.jpeg"
    //     },
    //     {...}
    // ]
    // ex new array of object after convert :
    // [
    //     {
    //         "slug": "Foto-A-le3e9A1",
    //         "title": "Foto A",
    //         "description": null,
    //         "src": "http://localhost:8000/media/photo-le3e9A1.jpeg",
    //         "width": 4,
    //         "height": 3
    //     },
    //     {...}
    // ]
    fotos.forEach(foto => {
        // push object to array
        newFotos.push({
            src: foto.photo,
            title: foto.title,
            width: 4,
            height: 3
        })
    })

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const lightboxStyles = {
        header: (base, state) => {
            const opacity = 1;
            const transform = "translateY(10px)";
            const top = "-10";
            return { ...base, opacity, transform, top };
        },
        navigation: (base, state) => {
            const opacity = 1;
            const background = "rgba(0, 0, 0, 0.8)";
            return { ...base, opacity, background };
        },
        navigationPrev: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        navigationNext: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        footer: (base, state) => {
            const opacity = 1;
            const transform = "translateY(-10px)";
            const bottom = "-10";
            return { ...base, opacity, transform, bottom };
        }
    }

    return (
        <>

            <Seo
                title={`Foto - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Galeri" currentPage="Foto" />
                </div>

                <div className="container my-5">
                    {newFotos.length > 0 ?
                        <>
                            <Gallery photos={newFotos} onClick={openLightbox} />
                            <ModalGateway>
                                {viewerIsOpen ? (
                                    <Modal onClose={closeLightbox}>
                                        <Carousel
                                            styles={lightboxStyles}
                                            showNavigationOnTouchDevice={true}
                                            currentIndex={currentImage}
                                            views={newFotos.map(x => ({
                                                ...x,
                                                srcset: x.srcSet,
                                                caption: x.title
                                            }))}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                        </>
                        :
                        // jika tidak ada foto, tampilkan eror
                        <div className="my-5 py-4 d-flex justify-content-center">
                            <div className="col col-md-4 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                                <div className="text-center">
                                    <p className="mb-0">Foto tidak ditemukan.</p>
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
};

// This gets called on every request to this page
export async function getServerSideProps() {
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    const getDataFotos = await fetch(`${process.env.API_ROUTE}/gallery/photo`);
    const fotos = await getDataFotos.json();
    return {
        props: { profiles, settings, fotos }, // will be passed to the page component as props
    };
};