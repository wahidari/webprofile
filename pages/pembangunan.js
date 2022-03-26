import { useState } from "react";
import axios from "axios"
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import PembangunanCard from "@components/PembangunanCard";
import Seo from "@components/Seo";

export default function Pembangunan({ profiles, settings, pembangunan }) {
    const [dataPembangunan, setDataPembangunan] = useState(pembangunan.data);
    const [offset, setOffset] = useState(0)
    const [showLoadMore, setShowLoadMore] = useState(true)
    const [showSpinner, setShowSpinner] = useState(false)

    async function loadMore() {
        setShowSpinner(true)
        setOffset(offset + 5)
        try {
            const res = await axios.get(`${process.env.API_ROUTE}/pembangunan?limit=5&offset=${offset + 5}`)
            // tambahkan hasil get data pembangunan baru ke data pembangunan lama 
            setDataPembangunan(dataPembangunan.concat(res.data.data))
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

                {pembangunan.data.length > 0 ?
                    // jika pembangunan ditemukan, tampilkan pembangunan
                    <>
                        <div className="container my-5">
                            <div className="row g-4">

                                {dataPembangunan.map((item, index) =>
                                    <PembangunanCard key={index}
                                        id={item.id}
                                        nama={item.nama_pembangunan}
                                        sumber={item.sumber_dana}
                                        tahun={item.tahun}
                                        dusun={item.dusun.nama_dusun}
                                        rw={item.rw.rw_nama}
                                        rt={item.rt.rt_nama}
                                        updated={item.updated_at}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="container my-5">
                            <div className="card border-0 shadow-custom px-3 pt-3">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th className="fw-medium">No</th>
                                                <th className="fw-medium">Nama</th>
                                                <th className="fw-medium">Lokasi</th>
                                                <th className="fw-medium">Sumber Dana</th>
                                                <th className="fw-medium">Tahun</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataPembangunan.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.nama_pembangunan}</td>
                                                    <td>{item.dusun.nama_dusun}</td>
                                                    <td>{item.sumber_dana}</td>
                                                    <td>{item.tahun}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className="my-5 py-4 d-flex justify-content-center">
                        <div className="col col-md-8 col-lg-6 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                            <div className="text-center">
                                <p className="mb-0">Tidak Ada Data Pembangunan</p>
                            </div>
                        </div>
                    </div>
                }

                {pembangunan.data.length > 0 ?
                    // jika ada agenda, tampilkan
                    showLoadMore ?
                        // jika ada data selanjutnya, tampilkan tombol load more 
                        <div className="my-5 text-center">
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
                        <div className="my-5 d-flex justify-content-center">
                            <div className="col col-md-4 alert text-green border-green d-flex align-items-center justify-content-center" role="alert">
                                <div className="text-center">
                                    <p className="mb-0">Semua pembangunan sudah ditampilkan.</p>
                                </div>
                            </div>
                        </div>
                    :
                    ""
                }

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
    const getAllPembangunan = await fetch(`${process.env.API_ROUTE}/pembangunan`);
    const pembangunan = await getAllPembangunan.json();
    return {
        // will be passed to the page component as props
        props: { profiles, settings, pembangunan },
    };
};