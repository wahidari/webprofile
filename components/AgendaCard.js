import Image from "next/image"
import Link from "next/link"
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AgendaCard({ slug, image, title, date, description }) {

	return (
		<>
			<style jsx>
				{`
					.card-link:hover {
						transition: box-shadow 0.5s ease; /* Animation */
						box-shadow: rgba(100, 100, 111, 0.2) 0px 4px 16px 0px !important;
						transition: all 0.7s ease-out;
					}
					.card-link:hover .card-title {
						color: #0d6efd;
						transition: color 0.7s ease-out;
					}
					.stretched-link {
						color: #212529;
						text-decoration: none;
						font-weight: 500;
					}
					.shadow-card {
						box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
					}
				`}
			</style>

			<article className="card h-100 card-link shadow-card agenda border-0">
				<div className="row g-0">
					<div className="col-sm-4 d-flex align-items-center">
						<Image
							alt="Image Agenda"
							src={image}
							width="200"
							height="160"
							quality={90}
							className="img-fluid rounded"
						/>
					</div>
					<div className="col-sm-8">
						<div className="card-body">
							<Link href={`/agenda/${slug}`}>
								<a className="stretched-link"><h5 className="card-title lh-sm mb-2">{title}</h5></a>
							</Link>
							<div className="d-flex mb-2 fs-15 align-items-center text-muted">
								<FaRegCalendarAlt />
								<p className="ms-2 mb-0 mt-1">{date}</p>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}