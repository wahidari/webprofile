import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer({profiles, links}) {
    return (
        <>
            <style jsx>{`
                footer a:hover {
                    color: #0d6efd;
                    transition: all 1s ease;
                }
                .text-white-80 {
                    color: rgb(206, 205, 205);
                }
                .border-top-dark {
                    border-top: 1px solid #4141417c !important;
                }
                .icon {
                    font-size: 18px;
                }
            `}</style>

            <footer className="bg-dark text-white">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-8 col-lg-4 my-2 my-md-0">
                            <h5>Tentang Web</h5>
                            <Image src={profiles.logo} className="img-fluid mt-1" alt="logo" height={100} width={100} />
                            <p className="text-white-80 mt-2">
                                Website Resmi Desa {profiles.nama_desa}, 
                                Kecamatan {profiles.nama_kecamatan}, 
                                Kabupaten {profiles.nama_kabupaten}, 
                                {" "}{profiles.nama_provinsi}. 
                                Media komunikasi dan transparansi Pemerintah Desa
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3 my-2 my-md-0">
                            <h5 className="mb-3">Kontak Desa</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none">
                                <li className="my-2 pt-1">
                                    <div className="d-flex">
                                        <i className="me-2"><FaMapMarkerAlt/></i>
                                        Jl. Raya {profiles.nama_desa} Kec. {profiles.nama_kecamatan}, {profiles.kode_pos}
                                    </div>
                                </li>
                                <li className="my-2 pt-1">
                                    <i className="me-2"><FaPhoneAlt/></i>
                                    {profiles.phone_kantor}
                                </li>
                                <li className="my-2 pt-1">
                                    <i className="me-2"><FaEnvelope/></i>
                                    {profiles.email_desa}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 my-2 my-md-0">
                            <h5 className="mb-3">Kontak Penting</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none">
                                <li className="my-2 pt-1">
                                    Puskesmas - {profiles.phone_rs}
                                </li>
                                <li className="my-2 pt-1">
                                    Polsek - {profiles.phone_polisi}
                                </li>
                                <li className="my-2 pt-1">
                                    Damkar - {profiles.phone_pemadam}
                                </li>
                                <li className="my-2 pt-1">
                                    PLN - {profiles.phone_pln}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-2 my-2 my-md-0">
                            <h5 className="mb-3">Aplikasi Desa</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none">
                                <li className="my-2 pt-1">
                                    <a href="https://web-anjungan-desa.vercel.app" className="text-decoration-none text-white-80" rel="noreferrer" target="_blank">Sistem Desa</a>
                                </li>
                                <li className="my-2 pt-1">
                                    <a href={links.link_ecommerce || ""} className="text-decoration-none text-white-80" rel="noreferrer" target="_blank">BumDes</a>
                                </li>
                                <li className="my-2 pt-1">
                                    <a href={links.link_ereport || ""} className="text-decoration-none text-white-80" rel="noreferrer" target="_blank">Pengaduan Online</a>
                                </li>
                                <li className="my-2 pt-1">
                                    <a href={links.link_eletter || ""} className="text-decoration-none text-white-80" rel="noreferrer" target="_blank">Pengajuan Surat</a>
                                </li>
                                <li className="my-2 pt-1">
                                    <a href={links.link_ehealth || ""} className="text-decoration-none text-white-80" rel="noreferrer" target="_blank">Info Kesehatan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pt-3 pb-md-0 mt-4 border-top-dark">
                        <div className="col-md-8  text-center text-md-start">
                            <p className="text-white-80">Copyright © 
                                <a href={profiles.website || ""} className="text-decoration-none text-white-80"> Desa {profiles.nama_desa}</a> 2022. 
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 text-center text-md-end ">
                            <a href="https://web.facebook.com/" className="mx-2 text-white-80" aria-label="Facebook" rel="noreferrer" target="_blank">
                                <i className="icon"><FaFacebook /></i>
                            </a>
                            <a href="https://twitter.com/" className="mx-2 text-white-80" aria-label="Twitter" rel="noreferrer" target="_blank">
                                <i className="icon"><FaTwitter /></i>
                            </a>
                            <a href="https://www.youtube.com/" className="mx-2 text-white-80" aria-label="Youtube" rel="noreferrer" target="_blank">
                                <i className="icon"><FaYoutube /></i>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-2 text-white-80" aria-label="Instagram" rel="noreferrer" target="_blank">
                                <i className="icon"><FaInstagram /></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}