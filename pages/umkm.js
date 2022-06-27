import { useState } from "react";
import axios from "axios"
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import Link from "next/link";

export default function Umkm({ profiles, settings, umkm }) {
    const [dataUmkm, setDataUmkm] = useState(umkm.data);
    const [offset, setOffset] = useState(0)
    const [showLoadMore, setShowLoadMore] = useState(true)
    const [showSpinner, setShowSpinner] = useState(false)

    async function loadMore() {
        setShowSpinner(true)
        setOffset(offset + 5)
        try {
            const res = await axios.get(`${process.env.API_ROUTE}/umkm?limit=5&offset=${offset + 5}`)
            // tambahkan hasil get data umkm baru ke data umkm lama 
            setDataUmkm(dataUmkm.concat(res.data.data))
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
                title={`UMKM - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="UMKM" currentPage="UMKM" />
                </div>

                <div className="container my-5">

                    {dataUmkm.length > 0 ?
                        <div className="card border-0 shadow-custom px-3 pt-3">
                            <h4>Daftar UMKM</h4>
                            <div className="table-responsive mt-3">
                                <table className="table table-borderless table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-medium">No</th>
                                            <th className="fw-medium">Nama UMKM</th>
                                            <th className="fw-medium">Nama Pemilik</th>
                                            <th className="fw-medium">Nomor WA</th>
                                            <th className="fw-medium">Produk</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataUmkm.map((item, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.nama_umkm}</td>
                                                <td>{item.nama_pemilik}</td>
                                                <td>{item.nomor_wa}</td>
                                                <td>
                                                    <Link href={`/umkm/${item.id}`}>
                                                        <a className="text-decoration-none">
                                                            Lihat Produk
                                                        </a>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        // jika tidak ada umkm, tampilkan eror
                        <div className="my-5 py-4 d-flex justify-content-center">
                            <div className="col col-md-8 col-lg-6 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                                <div className="text-center">
                                    <p className="mb-0">Tidak Ada UMKM</p>
                                </div>
                            </div>
                        </div>
                    }

                    {umkm.data.length > 0 ?
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
                                        <p className="mb-0">Semua umkm sudah ditampilkan.</p>
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
    const getAllUmkm = await fetch(`${process.env.API_ROUTE}/umkm`);
    const umkm = await getAllUmkm.json();
    return {
        props: { profiles, settings, umkm }, // will be passed to the page component as props
    };
};