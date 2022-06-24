import Image from "next/image"
import Link from "next/link";

export default function ProductCard({ id, umkm, name, price, image, description, link }) {
	return (
		<>
			<style jsx>
				{`
					.card-link {
						color: #212529;
						text-decoration: none !important;
						font-weight: 500;
					}
					.card-link:hover {
						color: #0d6efd;
						transition-duration: 0.3s;
					}
					.shadow-custom {
						box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
					}
				`}
			</style>

			<div className="card card-img-hover-zoom h-100 shadow-custom border-0 rounded-3">
				<Image
					alt={name}
					src={image?.photo ? image.photo : process.env.API_ROUTE + "/media/produk.png"}
					width={270}
					height={200}
					quality={90}
					className="img-fluid rounded-top"
				/>
				<div className="card-body">
					<Link href={`/umkm/${umkm}/produk/${id}`}>
						<a className="text-decoration-none"><h5 className="card-link lh-sm mb-2">{name}</h5></a>
					</Link>
					<h6 className="fw-medium">Rp. {price}</h6>
					<p className="mb-0 fs-15 text-secondary">{description}</p>
				</div>
				<div className="card-footer bg-white">
					<a href={link} className="btn btn-sm btn-success" rel="noreferrer" target="_blank">Link Pembelian</a>
				</div>
			</div>
		</>
	);
}