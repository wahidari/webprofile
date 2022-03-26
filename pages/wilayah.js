import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function Wilayah({ profiles, settings, area }) {

	const dataArea = populateData(area);
	const [totalRT, totalKK, totalMale, totalFemale, totalCount] = getTotalData(area);

	return (
		<>
			<style jsx>
				{`
					.shadow-card {
							box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
					}
				`}
			</style>

			<Seo
				title={`Wilayah - Desa ${profiles.nama_desa}`}
				description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
				siteName={profiles.nama_desa}
			/>

			<NavBarTop profile={profiles} />

			<main>
				<div className="bg-light">
					<Breadcrumb pageName="Wilayah" currentPage="Wilayah" />
				</div>

				<div className="container my-5">
					<div className="card rounded shadow-card border-0 my-5">
						<div className="card-header py-3">
							<h5 className="m-0 font-weight-bold">Demografi Berdasarkan Wilayah</h5>
						</div>
						<div className="card-body">
							<h5>Grafik</h5>
							<div className="col-md-8 col-lg-6 mx-auto">
								<Bar
									data={dataArea}
									width={400}
									height={250}
								/>
							</div>
							<h5 className="mt-5">Tabel Data</h5>
							<div className="table-responsive mt-3">
								<table className="table table-bordered table-hover">
									<thead>
										<tr>
											<th className="fw-medium">No</th>
											<th className="fw-medium">Nama Dusun</th>
											<th className="fw-medium">Jumlah RT</th>
											<th className="fw-medium">Jumlah KK</th>
											<th className="fw-medium">Laki Laki</th>
											<th className="fw-medium">Perempuan</th>
											<th className="fw-medium">Jumlah Jiwa</th>
										</tr>
									</thead>
									<tbody>
										{area.map(item =>
											<tr key={item.id}>
												<td>{item.id}</td>
												<td>{item.name}</td>
												<td>{item.rt}</td>
												<td>{item.kk}</td>
												<td>{item.male}</td>
												<td>{item.female}</td>
												<td>{item.total}</td>
											</tr>
										)}
										<tr>
											<td colSpan="2" className="text-center fw-medium">Jumlah</td>
											<td className="fw-medium">{totalRT}</td>
											<td className="fw-medium">{totalKK}</td>
											<td className="fw-medium">{totalMale}</td>
											<td className="fw-medium">{totalFemale}</td>
											<td className="fw-medium">{totalCount}</td>
										</tr>
									</tbody>
								</table>
							</div>
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
	const getDataArea = await fetch(`${process.env.BASE_URL}/api/wilayah`);
	const area = await getDataArea.json();
	return {
		props: { profiles, settings, area }, // will be passed to the page component as props
	};
};

// Populate Data for ChartJS 
function populateData(param) {
	const labels = [], male = [], female = [], total = [];
	param.map(item =>
		labels.push(item.name)
	);
	param.map(item =>
		male.push(item.male)
	);
	param.map(item =>
		female.push(item.female)
	);
	param.map(item =>
		total.push(item.total)
	);
	const data = {
		labels: labels,
		datasets: [
			{
				label: "Laki-Laki",
				backgroundColor: "#10b981",
				data: male,
			},
			{
				label: "Perempuan",
				backgroundColor: "#ff5b5c",
				data: female,
			},
			{
				label: "Total Jiwa",
				backgroundColor: "#fdac41",
				data: total,
			},
		],
	};
	return (data);
}

// Count each row value for total row
function getTotalData(param) {
	const rt = [], kk = [], male = [], female = [], total = [];
	let totalRT = 0, totalKK = 0, totalMale = 0, totalFemale = 0, totalCount = 0;

	param.map(item =>
		rt.push(item.rt)
	);
	param.map(item =>
		kk.push(item.kk)
	);
	param.map(item =>
		male.push(item.male)
	);
	param.map(item =>
		female.push(item.female)
	);
	param.map(item =>
		total.push(item.total)
	);

	for (let i = 0; i < rt.length; i++) {
		totalRT += parseInt(rt[i]);
		totalKK += parseInt(kk[i]);
		totalMale += parseInt(male[i]);
		totalFemale += parseInt(female[i]);
		totalCount += parseInt(total[i]);
	}

	return [totalRT, totalKK, totalMale, totalFemale, totalCount];
}