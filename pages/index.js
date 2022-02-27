import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Seo from "@components/Seo";
import NavBarTop from '@components/NavBarTop';
import CarouselHome from '@components/CarouselHome';
import Footer from '@components/Footer';
import PostCard from "@components/PostCard";
import SinglePostCard from "@components/SinglePostCard";
import AgendaCard from '@components/AgendaCard';
import SingleAgendaCard from '@components/SingleAgendaCard';
import VideoCard from '@components/VideoCard';
import BackToTop from "@components/BackToTop";
import StatisticLink from "@components/StatisticLink";
import SistemDesa from "@components/SistemDesa";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { FaArrowRight } from "react-icons/fa";
// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/autoplay";
// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
// install Swiper modules
// SwiperCore.use([Autoplay]);
SwiperCore.use([Autoplay, Pagination]);

export default function Home({ profiles, settings, beritas, agendas, videos, photos }) {

    useEffect(() => {
        AOS.init({
            once: true,
        });
    });

    // the GALLERY lIBRARY need "width", "height" and "src" property.
    let newFotos = []
    photos.forEach(foto => {
        newFotos.push({
            src: foto.photo,
            title: foto.title,
            width: 4,
            height: 3
        })
    })
    // console.log(beritas)
    // Take only 3 item as featured
    const featuredBerita = beritas.data.slice(0, 4);
    const featuredAgenda = agendas.data.slice(0, 4);
    const featuredVideo = videos.slice(0, 2);
    const featuredPhotos = newFotos.slice(0, 6);

    // For Image Lightbox & Carousel 
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
    };

    return (
        <>

            <Seo
                title={`Beranda - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>

                <CarouselHome heros={settings.hero} />

                <section className="py-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-5" data-aos="fade-up" data-aos-duration="750">
                                <div className="d-flex justify-content-center">
                                    <Image alt="Logo" src={profiles.logo} height={250} width={250} />
                                </div>
                            </div>
                            <div className="col-md-7" data-aos="fade-up" data-aos-duration="1500">
                                <div className="text-center text-md-start mt-3 mt-md-0">
                                    <h3 className="pb-2">Website Desa {profiles.nama_desa}</h3>
                                    <p className="text-color-secondary" id="scroll-to-statistic">
                                        {settings.setting.pesan_selamat_datang}
                                    </p>
                                    <Link href="/sejarah">
                                        <a className="btn btn-primary shadow rounded px-3 scroll-to">Profil Desa
                                            <i className="ms-2"><FaArrowRight /></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <StatisticLink />

                <div className="container my-5 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Agenda</h3>
                        <Link href="/agenda">
                            <a className="text-decoration-none">Semua Agenda
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        {featuredAgenda.length > 2 ?
                            // if agenda length > 2 show slider
                            <Swiper className="swiper-custom"
                                spaceBetween={24}
                                slidesPerView={3}
                                breakpoints={{
                                    "320": {
                                        "slidesPerView": 1,
                                        "spaceBetween": 24
                                    },
                                    "480": {
                                        "slidesPerView": 1,
                                        "spaceBetween": 24
                                    },
                                    "640": {
                                        "slidesPerView": 1,
                                        "spaceBetween": 24
                                    },
                                    "768": {
                                        "slidesPerView": 1,
                                        "spaceBetween": 24
                                    },
                                    "1024": {
                                        "slidesPerView": 2,
                                        "spaceBetween": 24
                                    }
                                }}
                                autoplay={{
                                    "delay": 6000,
                                    "disableOnInteraction": false
                                }}
                                pagination={{
                                    "clickable": true
                                }}
                                // navigation={false}
                                loop={true}
                            >
                                {featuredAgenda.map(agenda =>
                                    <SwiperSlide key={agenda.id}>
                                        <AgendaCard
                                            slug={agenda.slug}
                                            image={agenda.cover}
                                            title={agenda.title}
                                            date={agenda.created_at}
                                            description={agenda.description}
                                        />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                            :
                            featuredAgenda.map(agenda =>
                                <SingleAgendaCard key={agenda.id}
                                    slug={agenda.slug}
                                    image={agenda.cover}
                                    title={agenda.title}
                                    date={agenda.created_at}
                                    description={agenda.description}
                                />
                            )
                        }
                    </div>
                </div>

                <div className="container my-5 py-4" id="scroll-to">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Berita</h3>
                        <Link href="/berita">
                            <a className="text-decoration-none">Semua Berita
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        {featuredBerita.length > 2 ?
                            // if berita length > 2 show slider
                            <Swiper className="swiper-custom"
                                spaceBetween={24}
                                slidesPerView={3}
                                breakpoints={{
                                    "320": {
                                        "slidesPerView": 1,
                                        "spaceBetween": 24
                                    },
                                    "480": {
                                        "slidesPerView": 1,
                                        "spaceBetween": 24
                                    },
                                    "640": {
                                        "slidesPerView": 2,
                                        "spaceBetween": 24
                                    },
                                    "768": {
                                        "slidesPerView": 2,
                                        "spaceBetween": 24
                                    },
                                    "1024": {
                                        "slidesPerView": 3,
                                        "spaceBetween": 24
                                    }
                                }}
                                autoplay={{
                                    "delay": 4000,
                                    "disableOnInteraction": false
                                }}
                                pagination={{
                                    "clickable": true
                                }}
                                // navigation={false}
                                loop={true}
                            >
                                {featuredBerita.map(berita =>
                                    <SwiperSlide key={berita.id}>
                                        <PostCard
                                            image={berita.cover}
                                            title={berita.title}
                                            slug={berita.slug}
                                            date={berita.created_at}
                                            description={berita.description}
                                        />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                            :
                            featuredBerita.map(berita =>
                                <SinglePostCard key={berita.id}
                                    image={berita.cover}
                                    title={berita.title}
                                    slug={berita.slug}
                                    date={berita.created_at}
                                    description={berita.description}
                                />
                            )
                        }
                    </div>
                </div>

                <div className="container my-5 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Foto</h3>
                        <Link href="/foto">
                            <a className="text-decoration-none">Semua Foto
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        <Gallery photos={featuredPhotos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        styles={lightboxStyles}
                                        showNavigationOnTouchDevice={true}
                                        currentIndex={currentImage}
                                        views={featuredPhotos.map(x => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                </div>

                <div className="container my-5 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Video</h3>
                        <Link href="/video">
                            <a className="text-decoration-none">Semua Video
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        {featuredVideo.map((video, index) =>
                            <div className="col-md-6" key={index}>
                                <VideoCard link={video.link} />
                            </div>
                        )}
                    </div>
                </div>

                <SistemDesa links={settings.setting} />

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
    const getAllBerita = await fetch(`${process.env.API_ROUTE}/news`);
    const beritas = await getAllBerita.json();
    const getAllAgenda = await fetch(`${process.env.API_ROUTE}/agenda`);
    const agendas = await getAllAgenda.json();
    const getAllVideos = await fetch(`${process.env.API_ROUTE}/gallery/video`);
    const videos = await getAllVideos.json();
    const getAllPhotos = await fetch(`${process.env.API_ROUTE}/gallery/photo`);
    const photos = await getAllPhotos.json();
    return {
        // will be passed to the page component as props
        props: { profiles, settings, beritas, agendas, videos, photos },
    };
};