import Link from "next/link";

export default function SistemDesa({ links }) {
    return (
        <>
            <style jsx>{`
                .icon-shape {
                    width: 4rem;
                    height: 4rem;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .icon-shape .icon-sm {
                    width: 3.275rem;
                    height: 3.275rem;
                }
                .icon-shape-red {
                    color: #ff5b5c;
                    background-color: rgba(225, 29, 72, 0.3);
                }
                .icon-shape-blue {
                    color: #5a8dee;
                    background-color: rgba(0, 58, 237, 0.3);
                }
                .icon-shape-green {
                    color: #10b981;
                    background-color: rgba(16, 185, 129, 0.3);
                }
                .icon-shape-yellow {
                    color: #fba918;
                    background-color: rgba(251, 169, 24, 0.3);
                }
                .card-link:hover {
                    transition: all 1s ease;
                }
                .card-link:hover {
                    transition: box-shadow 1s ease; /* Animation */
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
                }
                .card-link:hover .card-title {
                    color: #0d6efd;
                    transition: color 0.7s ease-out;
                }
                .shadow-custom {
                    box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
                }
            `}</style>

            <section>
                <div className="container-fluid py-5 my-5">
                    <h2 className="text-center">Aplikasi Desa</h2>
                    <p className="text-center text-color-secondary text-subtitle">Berikut Adalah Beberapa Aplikasi di Desa Kami</p>
                    <div className="container mt-5">
                        <div className="row gx-4 gy-4">
                            <div className="col-12 col-sm-6 col-xl-3">
                                <div className="card border-0 shadow-custom card-link h-100" data-aos="fade-up" data-aos-duration="500">
                                    <a href={links.link_ecommerce || ""} className="stretched-link" aria-label="Pengaduan" rel="noreferrer" target="_blank"></a>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-shape icon-sm icon-shape-blue rounded me-3 p-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <div className="d-block">
                                                <h5 className="mb-0">BUMDES</h5>
                                                <label className="mb-0 text-color-secondary">Usaha Desa</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3">
                                <div className="card border-0 shadow-custom card-link h-100" data-aos="fade-up" data-aos-duration="1000">
                                    <a href={links.link_ereport || ""} className="stretched-link" aria-label="Pengaduan" rel="noreferrer" target="_blank"></a>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-shape icon-sm icon-shape-red rounded me-3 p-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                                </svg>
                                            </div>
                                            <div className="d-block">
                                                <h4 className="mb-0">E-ADUAN</h4>
                                                <label className="mb-0 text-color-secondary">Pengaduan Online</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3">
                                <div className="card border-0 shadow-custom card-link h-100" data-aos="fade-up" data-aos-duration="1500">
                                    <a href={links.link_eletter || ""} className="stretched-link" aria-label="Surat" rel="noreferrer" target="_blank"></a>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center align-center">
                                            <div className="icon-shape icon-sm icon-shape-green rounded me-3 p-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <div className="d-block">
                                                <h4 className="mb-0">E-LETTER</h4>
                                                <label className="mb-0 text-color-secondary">Pengajuan Surat</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3">
                                <div className="card border-0 shadow-custom card-link h-100" data-aos="fade-up" data-aos-duration="2000">
                                    <a href={links.link_ehealth || ""} className="stretched-link" aria-label="Kesehatan" rel="noreferrer" target="_blank"></a>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-shape icon-sm icon-shape-yellow rounded me-3 p-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="d-block">
                                                <h4 className="mb-0">E-HEALTH</h4>
                                                <label className="mb-0 text-color-secondary">Info Kesehatan</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}