import { useState } from "react";
import axios from "axios"
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import PostCard from "@components/PostCard";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function Berita({ profiles, settings, beritas}) {
    const [dataBeritas, setDataBeritas] = useState(beritas.data);
    const [offset, setOffset] = useState(0)
    const [showLoadMore, setShowLoadMore] = useState(true)
    const [showSpinner, setShowSpinner] = useState(false)

    async function loadMore() {
        setShowSpinner(true)
        setOffset(offset + 5)
        try {
            const res = await axios.get(`${process.env.API_ROUTE}/news?limit=5&offset=${offset + 5}`)
            // tambahkan hasil get data berita baru ke data berita lama 
            setDataBeritas(dataBeritas.concat(res.data.data))
            // console.log("data length : ", res.data.data.length)
            if (res.data.data.length == 0) {
                setShowLoadMore(false)
            }
            setShowSpinner(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <Seo
                title={`Berita - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Berita" currentPage="Berita" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {beritas.data.length > 0 ?
                            // jika berita ditemukan, tampilkan berita
                            dataBeritas.map(berita =>
                                <div className="col-sm-6 col-md-6 col-lg-4" key={berita.id}>
                                    <PostCard
                                        image={berita.cover}
                                        title={berita.title}
                                        slug={berita.slug} 
                                        date={berita.created_at}
                                        description={berita.description}
                                    />
                                </div>
                            )
                            :
                            // jika tidak ada berita, tampilkan eror
                            <div className="my-5 py-4 d-flex justify-content-center">
                                <div className="col col-md-4 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                                    <div className="text-center">
                                        <p className="mb-0">Berita tidak ditemukan.</p>
                                    </div>
                                </div>
                            </div>
                            
                        }
                    </div>

                    {beritas.data.length > 0 ?
                        // jika ada agenda, tampilkan
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
export async function getServerSideProps() {
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    const getAllBerita = await fetch(`${process.env.API_ROUTE}/news`);
    const beritas = await getAllBerita.json();
    return {
        props: { profiles, settings, beritas }, // will be passed to the page component as props
    };
};