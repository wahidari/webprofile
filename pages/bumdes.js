import { useState } from "react";
import axios from "axios"
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import BumdesCard from "@components/BumdesCard";

export default function Bumdes({ profiles, settings, bumdes }) {
	const [dataBumdes, setDataBumdes] = useState(bumdes.data);
	const [offset, setOffset] = useState(0)
	const [showLoadMore, setShowLoadMore] = useState(true)
	const [showSpinner, setShowSpinner] = useState(false)

	async function loadMore() {
		setShowSpinner(true)
		setOffset(offset + 5)
		try {
			const res = await axios.get(`${process.env.API_ROUTE}/bumdes?limit=5&offset=${offset + 5}`)
			// tambahkan hasil get data bumdes baru ke data bumdes lama 
			setDataBumdes(dataBumdes.concat(res.data.data))
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
				title={`BumDes - Desa ${profiles.nama_desa}`}
				description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
				siteName={profiles.nama_desa}
			/>

			<NavBarTop profile={profiles} />

			<main>
				<div className="bg-light">
					<Breadcrumb pageName="BumDes" currentPage="BumDes" />
				</div>

				{/* <div className="container my-5">
                    <div className="card border-0 shadow-custom px-3 pt-3">
                        <h5 className="mb-3 ms-2">Informasi Umum Bumdes</h5>
                        <div className="table-responsive text-nowrap">
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td>Nama Bumdes</td>
                                        <td>: BUM DESA TANI MAKMU GAMPONG BARO</td>
                                    </tr>
                                    <tr>
                                        <td>Desa</td>
                                        <td>: Mlajah</td>
                                    </tr>
                                    <tr>
                                        <td>Kecamatan</td>
                                        <td>: Bangkalan</td>
                                    </tr>
                                    <tr>
                                        <td>Kabupaten</td>
                                        <td>: Bangkalan</td>
                                    </tr>
                                    <tr>
                                        <td>Provinsi</td>
                                        <td>: Jawa Timur</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive text-nowrap">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th className="fw-medium">Nama BumDes</th>
                                        <th className="fw-medium">Desa</th>
                                        <th className="fw-medium">Kecamatan</th>
                                        <th className="fw-medium">Kabupaten</th>
                                        <th className="fw-medium">Provinsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BUM DESA TANI MAKMU GAMPONG BARO</td>
                                        <td>Mlajah</td>
                                        <td>Bangkalan</td>
                                        <td>Bangkalan</td>
                                        <td>Jawa Timur</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}

				<div className="container my-5">
					<div className="row g-4">
						{bumdes.data.length > 0 ?
							// jika agenda ditemukan, tampilkan agenda
							dataBumdes.map(item =>
								<div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
									<BumdesCard
										slug={item.id}
										name={item.nama_produk}
										description={item.deskripsi}
										harga={item.harga}
										image={item.photo} />
								</div>
							)
							:
							// jika tidak ada agenda, tampilkan eror
							<div className="my-5 py-4 d-flex justify-content-center">
								<div className="col col-md-8 col-lg-6 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
									<div className="text-center">
										<p className="mb-0">Tidak Ada Bumdes</p>
									</div>
								</div>
							</div>
						}
					</div>

					{bumdes.data.length > 0 ?
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
										<p className="mb-0">Semua bumdes sudah ditampilkan.</p>
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
	const getAllBumdes = await fetch(`${process.env.API_ROUTE}/bumdes`);
	const bumdes = await getAllBumdes.json();
	return {
		props: { profiles, settings, bumdes }, // will be passed to the page component as props
	};
};