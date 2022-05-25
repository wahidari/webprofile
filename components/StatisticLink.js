import Link from "next/link";
import { FaBriefcase, FaGraduationCap, FaMoon, FaPeopleArrows } from "react-icons/fa";

export default function StatisticLink() {

	return (
		<>
			<style jsx>
				{`
					.statistic .card:hover {
						transform: scale(1.02);
						transition: all 1s ease-in-out;
						box-shadow: 0 3px 16px rgb(0 0 0 / 10%);
					}
					.statistic .stretched-link {
						color: #212529;
						text-decoration: none;
						transition: all 1s;
					}
					.statistic .stretched-link:hover {
						color: #0d6efd;
						transition: all 1s ease-in-out;
					}
					.icon {
						font-size: 32px;
					}
					.masthead-followup-icon {
						width: 30%;
						padding: 0.55rem;
						background-image: linear-gradient(
							to bottom right,
							rgba(255, 255, 255, 0.2),
							rgba(255, 255, 255, 0.01)
						);
						border-radius: 0.9rem;
						box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 10%);
					}
					@media (max-width: 575.98px) {
						.masthead-followup-icon {
							width: 38%;
							padding: 0.55rem;
						}
					}
					.shadow-custom {
						box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
					}
				`}
			</style>

			<section className="statistic my-5 py-5 text-center container">
				<h3>Statistik Desa</h3>
				<p className="text-color-secondary text-subtitle">Berikut Adalah Statistik Demografi Desa Kami</p>
				<div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
					<div className="col-6 col-md-6 col-lg-3 mx-0 px-lg-4">
						<div className="card h-100 border-0 shadow-custom" data-aos="fade-up" data-aos-duration="500">
							<div className="masthead-followup-icon mb-2 text-white bg-red mx-auto mt-4">
								<i className="icon">
									<FaBriefcase />
								</i>
							</div>
							<div className="card-body">
								<h5 className="card-title">
									<Link href="/penduduk#pekerjaan">
										<a className="stretched-link">Pekerjaan</a>
									</Link>
								</h5>
							</div>
						</div>
					</div>
					<div className="col-6 col-md-6 col-lg-3 mx-0 px-lg-4">
						<div className="card h-100 border-0 shadow-custom" data-aos="fade-up" data-aos-duration="1000">
							<div className="masthead-followup-icon mb-2 text-white bg-blue mx-auto mt-4">
								<i className="icon">
									<FaGraduationCap />
								</i>
							</div>
							<div className="card-body">
								<h5 className="card-title">
									<Link href="/penduduk#pendidikan">
										<a className="stretched-link">Pendidikan</a>
									</Link>
								</h5>
							</div>
						</div>
					</div>
					<div className="col-6 col-md-6 col-lg-3 mx-0 px-lg-4">
						<div className="card h-100 border-0 shadow-custom" data-aos="fade-up" data-aos-duration="1500">
							<div className="masthead-followup-icon mb-2 text-white bg-green mx-auto mt-4">
								<i className="icon">
									<FaMoon />
								</i>
							</div>
							<div className="card-body">
								<h5 className="card-title">
									<Link href="/penduduk#agama">
										<a className="stretched-link">Agama</a>
									</Link>
								</h5>
							</div>
						</div>
					</div>
					<div className="col-6 col-md-6 col-lg-3 mx-0 px-lg-4">
						<div className="card h-100 border-0 shadow-custom" data-aos="fade-up" data-aos-duration="2000">
							<div className="masthead-followup-icon mb-2 text-white bg-yellow mx-auto mt-4">
								<i className="icon">
									<FaPeopleArrows />
								</i>
							</div>
							<div className="card-body">
								<h5 className="card-title">
									<Link href="/penduduk#usia">
										<a className="stretched-link">Usia</a>
									</Link>
								</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>

	);
}