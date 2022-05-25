import Image from "next/image"
import Link from "next/link";

export default function BumdesCard({ slug, name, image, description, bumdes }) {

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
					.shadow-custom {
						box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
					}
				`}
			</style>

			<div className="card card-img-hover-zoom card-link h-100 shadow-custom border-0 rounded-3">
				<Image
					alt={name}
					src={image}
					width={270}
					height={200}
					quality={90}
					className="img-fluid rounded-top"
				/>
				<div className="card-body">
					<Link href={`/bumdes/slug`}>
						<a className="stretched-link"><h5 className="card-title lh-sm mb-2">{name}</h5></a>
					</Link>
					<p className="mb-0 text-14 text-secondary small">{description}</p>
				</div>
				<div className="card-footer bg-white">
					<p className="mb-0 fs-15 fw-medium text-color-muted">{bumdes}</p>
				</div>
			</div>
		</>
	);
}