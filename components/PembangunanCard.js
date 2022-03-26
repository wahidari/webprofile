import Link from "next/link";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegMoneyBillAlt } from "react-icons/fa";

export default function PembangunanCard({ id, nama, sumber, tahun, dusun, rw, rt, updated }) {

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
						<div className="text-muted fs-15 d-flex mb-1">
							<i className="me-2 mt-n1"><FaMapMarkerAlt /></i>
							{dusun} - RW {rw} - RT {rt}
						</div>
						<div className="text-muted fs-15 d-flex mb-1">
							<i className="me-2 mt-n1"><FaRegMoneyBillAlt /></i>
							{sumber}
						</div>
						<div className="text-muted fs-15 d-flex">
							<i className="me-2 mt-n1"><FaRegCalendarAlt /></i>
							{tahun}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}