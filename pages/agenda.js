import { useState } from "react";
import axios from "axios"
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import AgendaCard from "@components/AgendaCard";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function Agenda({ profiles, settings, agendas }) {
    const [dataAgendas, setDataAgendas] = useState(agendas.data);
    const [offset, setOffset] = useState(0)
    const [showLoadMore, setShowLoadMore] = useState(true)
    const [showSpinner, setShowSpinner] = useState(false)
    // console.log(dataAgendas)
    // console.log(offset)

    async function loadMore () {
        setShowSpinner(true)
        setOffset(offset+5)
        try {
            const res = await axios.get(`${process.env.API_ROUTE}/agenda?limit=5&offset=${offset+5}`)
            // tambahkan hasil get data agenda baru ke data agenda lama 
            setDataAgendas(dataAgendas.concat(res.data.data))
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
                title={`Agenda - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Agenda" currentPage="Agenda" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {agendas.data.length > 0 ?
                            // jika agenda ditemukan, tampilkan agenda
                            dataAgendas.map(agenda =>
                                <div className="col-lg-6" key={agenda.id}>
                                    <AgendaCard
                                        slug={agenda.slug}
                                        image={agenda.cover}
                                        title={agenda.title}
                                        date={agenda.created_at}   
                                        description={agenda.description}   
                                    />
                                </div>
                            )
                            :
                            // jika tidak ada agenda, tampilkan eror
                            <div className="my-5 py-4 d-flex justify-content-center">
                                <div className="col col-md-4 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                                    <div className="text-center">
                                        <p className="mb-0">Agenda tidak ditemukan.</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {agendas.data.length > 0 ?
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
                                        <p className="mb-0">Semua agenda sudah ditampilkan.</p>
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
export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    const getAllAgenda = await fetch(`${process.env.API_ROUTE}/agenda`);
    const agendas = await getAllAgenda.json();
    return {
        props: { profiles, settings, agendas }, // will be passed to the page component as props
    };
};