import Seo from "@components/Seo";
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";

export default function InformasiPublik({ profiles, settings, }) {

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
				title={`Administrasi - Desa ${profiles.nama_desa}`}
				description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
				siteName={profiles.nama_desa}
			/>

			<NavBarTop profile={profiles} />

			<main>
				<div className="bg-light">
					<Breadcrumb pageName="Administrasi" currentPage="Administrasi" />
				</div>

				<div className="container my-5">
					<div className=" card border-0 shadow-custom px-3 pt-3">
						<h4 className="mb-4">Wilayah Administrasi</h4>
						<h5>Topografi Desa</h5>
						<p>
							Luas wilayah di Desa {profiles.nama_desa} ± 965 Ha, dengan topografi
							bergelombang, peruntukan lahan sebagian besar untuk lahan perkebunan
							Masyarakat, kemudian untuk pemukiman, sarana umum, pemerintahan dan
							lainnya. Iklim Desa {profiles.nama_desa} sebagai mana desa-desa lainnya di wilayah
							Indonesia yaitu iklim tropis (musim penghujan dan musim kemarau), hal
							tersebut mempunyai pengaruh langsung terhadap pala tanam terhadap lahan
							pertanian yang ada di Desa {profiles.nama_desa} Kecamatan {profiles.nama_kecamatan}.
						</p>
						<h5 className="mt-3">Detail Wilayah</h5>
						<div className="table-responsive col-lg-5">
							<table className="table table-hover table-borderless">
								<tbody>
									<tr>
										<td>Luas Wilayah</td>
										<td>: 1.056 ha</td>
									</tr>
									<tr>
										<td>Batas Wilayah</td>
									</tr>
									<tr>
										<td>Utara</td>
										<td>: Desa Banjarsari</td>
									</tr>
									<tr>
										<td>Selatan</td>
										<td>: Desa gajah Mati</td>
									</tr>
									<tr>
										<td>Barat</td>
										<td>: Desa Mekarsari</td>
									</tr>
									<tr>
										<td>Timur</td>
										<td>: Desa Retak Mudik</td>
									</tr>
									<tr>
										<td>Klimatologi</td>
									</tr>
									<tr>
										<td>Suhu</td>
										<td>: 30ºC</td>
									</tr>
									<tr>
										<td>Curah Hujan</td>
										<td>: 43 %</td>
									</tr>
									<tr>
										<td>Kelembaban Udara</td>
										<td>: 83 %</td>
									</tr>
									<tr>
										<td>Kecepatan Angin</td>
										<td>: 20 km/h</td>
									</tr>
									<tr>
										<td>Luas Lahan Pertanian</td>
									</tr>
									<tr>
										<td>Ladang Sawit</td>
										<td>: 2 Ha</td>
									</tr>

									<tr>
										<td>Luas Lahan Perkebunan</td>
									</tr>
									<tr>
										<td>Perkebunan Rakyat </td>
										<td>: 5 Ha</td>
									</tr>
									<tr>
										<td>Perkebunan Swasta</td>
										<td>: 4 Ha</td>
									</tr>
									<tr>
										<td>Perkebunan Perorangan</td>
										<td>: 3 Ha</td>
									</tr>
									<tr>
										<td>Luas Lahan Pemukiman</td>
										<td>: 2 Ha/m2</td>
									</tr>
								</tbody>
							</table>
						</div>
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
	return {
		props: { profiles, settings }, // will be passed to the page component as props
	};
};