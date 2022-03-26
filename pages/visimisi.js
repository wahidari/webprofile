import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import BreadcrumbArea from "@components/BreadcrumbArea";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function Sejarah({ profiles, settings, visimisi }) {
	
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
				title={`Visi Misi - Desa ${profiles.nama_desa}`}
				description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
				siteName={profiles.nama_desa}
			/>

			<NavBarTop profile={profiles} />

			<main>

				<BreadcrumbArea pageName="Visi Misi" currentPage="Visi Misi"/>

				<div className="container my-5">
					<div className="col-lg-10 mx-auto">
						<div className="card border-0 shadow-custom px-4 py-4 bg-white mb-4">
							<h3>Visi Dan Misi</h3>
							<h5 className="mt-4">Visi</h5>
							<div
								className="text-color-secondary"
								dangerouslySetInnerHTML={{ __html: visimisi.visi }}
							></div>
							<h5 className="mt-3">Misi</h5>
							<div
								className="text-color-secondary"
								dangerouslySetInnerHTML={{ __html: visimisi.misi }}
							></div>
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
	const getVisiMisi = await fetch(`${process.env.API_ROUTE}/profil/visi-misi`);
	const visimisi = await getVisiMisi.json();
	const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
	const profiles = await getAllProfiles.json();
	const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
	const settings = await getAllSettings.json();
	return {
		// will be passed to the page component as props
		props: { profiles, settings, visimisi },
	};
};