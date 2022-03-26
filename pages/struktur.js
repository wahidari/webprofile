import Image from "next/image";
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import BreadcrumbArea from "@components/BreadcrumbArea";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function Struktur({ profiles, settings, struktur }) {

	const kepalaDesa = struktur.filter((item) => item.jabatan.jabatan.toLowerCase() == "kepala desa");
	// console.log(kepalaDesa)
	const perangkatDesa = struktur.filter((item) => item.jabatan.jabatan.toLowerCase() != "kepala desa");
	// console.log(perangkatDesa)

	return (
		<>

			<style jsx>
				{`
					.shadow-custom {
						box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
					}
				`}
			</style>

			<Seo
				title={`Struktur Organisasi - Desa ${profiles.nama_desa}`}
				description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
				siteName={profiles.nama_desa}
			/>

			<NavBarTop profile={profiles} />

			<main>

				<BreadcrumbArea pageName="Struktur Organisasi" currentPage="Struktur" />

				<div className="container my-5">
					{kepalaDesa.length > 0 ?
						kepalaDesa.map((item, index) =>
							<div className="row g-4 my-3" key={index}>
								<div className="col-sm-3">
									<div className="card bg-white shadow-custom rounded border-0">
										<Image
											alt="Kepala Desa"
											src={item.photo}
											width={200}
											height={200}
											className="img-fluid mx-auto rounded"
										/>
									</div>
								</div>
								<div className="col-sm-9">
									<div className="card bg-white shadow-custom rounded border-0 px-2 pt-2 px-lg-3 pt-lg-3">

										<h4>{item.name}</h4>
										<div className="table-responsive mt-3">
											<table className="table table-bordered table-hover">
												<tbody>
													<tr>
														<td>Jabatan</td>
														<td>Kepala Desa</td>
													</tr>
													<tr>
														<td>Alamat</td>
														<td>{item.alamat}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						)
						:
						""
					}

					<div className="row g-4 my-3">
						{perangkatDesa.length > 0 ?
							perangkatDesa.map((item, index) =>
								<div className="col-lg-6" key={index}>
									<div className="row g-4">
										<div className="col-sm-3">
											<div className="card bg-white shadow-custom rounded border-0">
												<Image
													alt="Perangkat Desa"
													src={item.photo}
													width={200}
													height={200}
													quality={90}
													className="img-fluid mx-auto rounded"
												/>
											</div>
										</div>
										<div className="col-sm-9">
											<div className="card bg-white shadow-custom rounded border-0 px-2 pt-2">
												<h5>{item.name}</h5>
												<div className="table-responsive mt-2">
													<table className="table table-bordered table-hover">
														<tbody>
															<tr>
																<td>Jabatan</td>
																<td>{item.jabatan.jabatan}</td>
															</tr>
															<tr>
																<td>Alamat</td>
																<td>{item.alamat}</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
							:
							// jika tidak ada struktur, tampilkan eror
							<div className="my-5 py-4 d-flex justify-content-center">
								<div className="col col-md-8 col-lg-6 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
									<div className="text-center">
										<p className="mb-0">Tidak Ada Data Perangkat Desa</p>
									</div>
								</div>
							</div>
						}
					</div>
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
	const getAllStruktur = await fetch(`${process.env.API_ROUTE}/struktur`);
	const struktur = await getAllStruktur.json();
	return {
		// will be passed to the page component as props
		props: { profiles, settings, struktur },
	};
};