import Link from "next/link";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegMoneyBillAlt, FaRegTimesCircle, FaTimesCircle } from "react-icons/fa";

export default function PembangunanCard({ id, nama, sumber, tahun, dusun, rw, rt, updated, pembangunan_item }) {

	return (
		<>
			<style jsx>
				{`
					.card-link:hover {
						transition: box-shadow 0.5s ease; /* Animation */
						box-shadow: rgba(100, 100, 111, 0.2) 0px 4px 20px 0px !important;
						transition: all 0.7s ease-out;
					}
					.card-link:hover .card-title {
						color: #0d6efd !important;
						transition: color 0.7s ease-out;
					}
					.stretched-link {
						color: #212529;
						text-decoration: none;
						font-weight: 500;
					}
					.shadow-card {
						box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
					}
					.mt-n1 {
						margin-top: -0.1rem !important;
					}
				`}
			</style>

			<div className="col-md-6 col-lg-4">
				<div className="card card-link shadow-card border-0 h-100">
					<div className="card-body">
						<Link href={`/pembangunan/${id}`}>
							<a className="stretched-link">
								<h5 className="card-title mb-3">
									{nama}
								</h5>
							</a>
						</Link>
						<div className="text-muted fs-15 d-flex mb-2 fw-medium">
							<i className="me-2 mt-n1"><FaMapMarkerAlt /></i>
							{dusun} - RW {rw} - RT {rt}
						</div>
						<div className="text-muted fs-15 d-flex mb-2 fw-medium">
							<i className="me-2 mt-n1"><FaRegMoneyBillAlt /></i>
							{sumber}
						</div>
						<div className="text-muted fs-15 d-flex mb-2 fw-medium">
							<i className="me-2 mt-n1"><FaRegCalendarAlt /></i>
							{tahun}
						</div>
						<div className="text-muted fs-14 d-flex mt-3">
							update terakhir : {pembangunan_item.length > 0 ? pembangunan_item[0].progress_date : "-"}
						</div>
						{/* <div className="text-muted fs-15 d-flex">
							<i className="me-2 mt-n1"><FaTimesCircle /></i>
							{updated}
						</div> */}
						{pembangunan_item.length > 0 ?
							<div className="progress rounded-pill mt-2">
								{pembangunan_item[0].progress > 0 && pembangunan_item[0].progress < 25 ?
									<div className="progress-bar bg-red rounded-pill fw-600" aria-label="Progress" role="progressbar"
										style={{ width: pembangunan_item[0].progress + "%" }}
										aria-valuenow={pembangunan_item[0].progress}
										aria-valuemin="0"
										aria-valuemax="100"
									>
										{pembangunan_item[0].progress}%
									</div>
									: pembangunan_item[0].progress > 24 && pembangunan_item[0].progress < 50 ?
										<div className="progress-bar bg-orange rounded-pill fw-600" aria-label="Progress" role="progressbar"
											style={{ width: pembangunan_item[0].progress + "%" }}
											aria-valuenow={pembangunan_item[0].progress}
											aria-valuemin="0"
											aria-valuemax="100"
										>
											{pembangunan_item[0].progress}%
										</div>
									: pembangunan_item[0].progress > 49 && pembangunan_item[0].progress < 75 ?
										<div className="progress-bar bg-blue rounded-pill fw-600" aria-label="Progress" role="progressbar"
											style={{ width: pembangunan_item[0].progress + "%" }}
											aria-valuenow={pembangunan_item[0].progress}
											aria-valuemin="0"
											aria-valuemax="100"
										>
											{pembangunan_item[0].progress}%
										</div>
									: <div className="progress-bar bg-green rounded-pill fw-600" aria-label="Progress" role="progressbar"
											style={{ width: pembangunan_item[0].progress + "%" }}
											aria-valuenow={pembangunan_item[0].progress}
											aria-valuemin="0"
											aria-valuemax="100"
										>
											{pembangunan_item[0].progress}%
										</div>
								}
							</div>
							:
							<div className="progress rounded-pill mt-2">
								<span className="ps-2 fw-600">0%</span>
							</div>
						}
					</div>
				</div>
			</div>
		</>
	);
}