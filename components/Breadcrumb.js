import Link from "next/link"

export default function Breadcrumb({ pageName, currentPage }) {

	return (
		<>
			<style jsx>
				{`
					.breadcrumb {
						margin-bottom: 0;
					}
					.breadcrumb a {
						font-size: 15px;
						text-decoration: none;
					}
				`}
			</style>

			<div className="pt-3 d-flex justify-content-between align-items-center bg-white">
				<div className="container">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb me-2">
							<li className="breadcrumb-item">
								<Link href="/">
									<a>Beranda</a>
								</Link>
							</li>
							<li className="breadcrumb-item active fs-15" aria-current="page">{currentPage}</li>
						</ol>
					</nav>
				</div>
			</div>
		</>
	);
}