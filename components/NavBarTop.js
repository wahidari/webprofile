import React, { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import ActiveLink from './ActiveLink'
import { FaPhoneAlt, FaRegEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function NavBarTop({ profile }) {

	const [fixedNavbar, setFixedNavbar] = useState("false");

	useEffect(() => {
		setFixedNavbar(false);
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 35) {
				setFixedNavbar(true);
			} else {
				setFixedNavbar(false);
			}
		});
	}, []);

	return (
		<>
			<style jsx>
				{`
					.nav-item a.active {
						color: #0d6efd;
					}
					.text-white-80 {
						color: #6c757d;
					}
					.dropdown-menu {
						min-width: 13rem; 
					}
					.top-of-navbar a:hover {
						color: #0d6efd;
						transition: all 1s ease;
					}
					.navbar {
						padding: 2.5px 0px;
					}
				`}
			</style>

			<div className="d-none d-md-block bg-light py-2 top-of-navbar">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-sm-8">
							<div>
								<a href={`https://wa.me/${profile.phone_kantor}`} rel="noreferrer" target="_blank" className="text-decoration-none fs-14 text-white-80">
									<i className="me-2"><FaPhoneAlt /></i>
									{profile.phone_kantor}
								</a>
								<span className="mx-2 text-black-50">|</span>
								<a href={profile.email_desa ? `mailto:${profile.email_desa}` : "#"} aria-label="Email" rel="noreferrer" target="_blank" className="text-decoration-none fs-14 text-white-80">
									<i className="me-2"><FaRegEnvelope /></i>
									{profile.email_desa}
								</a>
							</div>
						</div>
						<div className="col-lg-6 col-sm-4">
							<div className="float-end">
								<a href="https://web.facebook.com/" className="mx-2 text-white-80" aria-label="Facebook" rel="noreferrer" target="_blank">
									<i><FaFacebook /></i>
								</a>
								<a href="https://twitter.com/" className="mx-2 text-white-80" aria-label="Twitter" rel="noreferrer" target="_blank">
									<i><FaTwitter /></i>
								</a>
								<a href="https://www.youtube.com/" className="mx-2 text-white-80" aria-label="Youtube" rel="noreferrer" target="_blank">
									<i><FaYoutube /></i>
								</a>
								<a href="https://www.instagram.com/" className="mx-2 text-white-80" aria-label="Instagram" rel="noreferrer" target="_blank">
									<i><FaInstagram /></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav className={`navbar navbar-expand-xl navbar-light bg-white shadow-sm ${fixedNavbar ? "fixed-top" : ""}`}>
				<div className="container">
					<Link href="/">
						<a className="navbar-brand d-flex align-items-center">
							<Image
								alt="Logo Desa"
								src={profile.logo}
								height="50"
								width="50"
								className="img-fluid"
							/>{" "}
							<div>
								<h5 className="ms-1 my-0">Desa {profile.nama_desa}</h5>
								<p className="ms-1 text-muted mb-0 fs-15">Kabupaten {profile.nama_kabupaten}</p>
							</div>
						</a>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarToggler">
						{/* <hr className="d-lg-none mt-2 mb-0"></hr> */}
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item mt-2 mt-xl-0 ms-lg-1">
								<ActiveLink activeClassName="active" href="/">
									<a className="nav-link">Beranda</a>
								</ActiveLink>
							</li>
							{/* <hr className="d-lg-none my-1"></hr> */}
							<li className="nav-item dropdown ms-lg-1">
								<a className="nav-link dropdown-toggle" href="#" id="profilDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Profil
								</a>
								<ul className="dropdown-menu" aria-labelledby="profilDropdown">
									<li>
										<ActiveLink activeClassName="active" href="/sejarah">
											<a className="nav-link ms-3 ms-md-2">Sejarah</a>
										</ActiveLink>
									</li>
									<li>
										<ActiveLink activeClassName="active" href="/visimisi">
											<a className="nav-link ms-3 ms-md-2">Visi Misi</a>
										</ActiveLink>
									</li>
									<li>
										<ActiveLink activeClassName="active" href="/struktur">
											<a className="nav-link ms-3 ms-md-2">Struktur Organisasi</a>
										</ActiveLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown ms-lg-1">
								<a className="nav-link dropdown-toggle" href="#" id="informasiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Informasi
								</a>
								<ul className="dropdown-menu" aria-labelledby="informasiDropdown">
									<li>
										<ActiveLink activeClassName="active" href="/berita">
											<a className="nav-link ms-3 ms-md-2">Berita</a>
										</ActiveLink>
									</li>
									<li>
										<ActiveLink activeClassName="active" href="/agenda">
											<a className="nav-link ms-3 ms-md-2">Agenda</a>
										</ActiveLink>
									</li>
									<li>
										<ActiveLink activeClassName="active" href="/produk-hukum">
											<a className="nav-link ms-3 ms-md-2">Produk Hukum</a>
										</ActiveLink>
									</li>
									<li>
										<ActiveLink activeClassName="active" href="/informasi-publik">
											<a className="nav-link ms-3 ms-md-2">Informasi Publik</a>
										</ActiveLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown ms-lg-1">
								<a className="nav-link dropdown-toggle" href="#" id="chartDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Demografis
								</a>
								<ul className="dropdown-menu" aria-labelledby="chartDropdown">
									<li>
										<ActiveLink activeClassName="active" href="/administrasi">
											<a className="nav-link ms-3 ms-md-2">Administrasi</a>
										</ActiveLink>
									</li>
									<li>
										<ActiveLink activeClassName="active" href="/penduduk">
											<a className="nav-link ms-3 ms-md-2">Penduduk</a>
										</ActiveLink>
									</li>
									<li>
										<ActiveLink activeClassName="active" href="/wilayah">
											<a className="nav-link ms-3 ms-md-2">Wilayah</a>
										</ActiveLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown ms-lg-1">
								<a className="nav-link dropdown-toggle" href="#" id="galeriDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Media
								</a>
								<ul className="dropdown-menu" aria-labelledby="galeriDropdown">
									<li>
										<ActiveLink activeClassName="active" href="/foto">
											<a className="nav-link ms-3 ms-md-2">Galeri Foto</a>
										</ActiveLink>
									</li>
									<li>
										<ActiveLink activeClassName="active" href="/video">
											<a className="nav-link ms-3 ms-md-2">Galeri Video</a>
										</ActiveLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown ms-lg-1">
								<a className="nav-link dropdown-toggle" href="#" id="publikasiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Publikasi
								</a>
								<ul className="dropdown-menu" aria-labelledby="publikasiDropdown">
									<li>
										<ActiveLink activeClassName="active" href="/pembangunan">
											<a className="nav-link ms-3 ms-md-2">Pembangunan Desa</a>
										</ActiveLink>
									</li>
									<li>
										<ActiveLink activeClassName="active" href="/dana-desa">
											<a className="nav-link ms-3 ms-md-2">Dana Desa</a>
										</ActiveLink>
									</li>
								</ul>
							</li>
							<li className="nav-item ms-lg-1">
								<ActiveLink activeClassName="active" href="/lapak">
									<a className="nav-link">Lapak</a>
								</ActiveLink>
							</li>
							<li className="nav-item ms-lg-1">
								<ActiveLink activeClassName="active" href="/covid">
									<a className="nav-link">Covid</a>
								</ActiveLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}