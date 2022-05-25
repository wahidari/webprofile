import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

export default function ProductCard({ id, slug, name, category, price, image, phone, seller, description }) {

	return (
		<>
			<style jsx>
				{`
					.shadow-custom {
						box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
					}
				`}
			</style>

			<div className="card card-img-hover-zoom h-100 shadow-custom border-0 rounded-3">
				<Image
					alt={name}
					src={image}
					width={270}
					height={200}
					quality={90}
					className="img-fluid rounded-top"
				/>
				<div className="card-body">
					<h5 className="fw-medium">{name}</h5>
					<p className="mb-0 fs-15 text-secondary">{description}</p>
				</div>
				<div className="card-footer bg-white">
					<a href={`https://wa.me/${phone}?text=Saya%20ingin%20memesan%20${name}`} className="btn btn-sm btn-success" rel="noreferrer" target="_blank"><i className="me-2"><FaWhatsapp /></i>Whatsapp</a>
				</div>
			</div>
		</>
	);
}