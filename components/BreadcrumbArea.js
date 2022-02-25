import Link from "next/link"

export default function BreadcrumbArea({pageName, currentPage}) {

    return (
        <> 
            <style jsx>{`
                .breadcrumb-area {
                    padding: 150px 0;
                    background-image: url(bkl2.webp); height: 350px; background-repeat: no-repeat; background-position: top; background-size: 1667px 560px;
                }
                .bg-fixed {
                    background-attachment: fixed;
                    background-position: center center;
                    background-size: cover;
                }
                .overlay {
                    position: relative;
                    z-index: 1;
                }
                .bg-fixed {
                    background-attachment: fixed;
                    background-position: center top;
                    background-size: cover;
                }
                .overlay.dark::after {
                    background: #000 none repeat scroll 0 0;
                    content: "";
                    height: 100%;
                    left: 0;
                    opacity: 0.5;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    z-index: -1;
                }
                .breadcrumb-item {
                    font-size: 18px;
                }
                .breadcrumb-item + .breadcrumb-item::before {
                    color: #cccccc;
                }
                .text-white-80 {
                    color: #ced4da;
                }
            `}</style>

            <div className="breadcrumb-area overlay dark bg-fixed text-center text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1>{pageName}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb d-flex justify-content-center">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                            <a className="text-decoration-none">Beranda</a>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item text-white-80" aria-current="page">{currentPage}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}