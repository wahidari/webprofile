import Image from "next/image"
import Link from "next/link"
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";

export default function SinglePostCard({ image, title, slug, date, description }) {

    const excerpt = description.replace(/(<([^>]+)>)/ig, '');

    return (
        <>
            <style jsx>{`
                .card-link:hover {
                    transition: box-shadow 0.5s ease; /* Animation */
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 20px 0px !important;
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
                .card-text {
                    color: #495057;
                }
                .mt-n1 {
                    margin-top: -2px;
                }
            `}</style>

            <div className="col-12 col-md-6 col-lg-4 pt-1">
                <article className="card card-link shadow-card border-0 h-100">
                    <Image
                        alt="Post Image"
                        src={image}
                        width="350"
                        height="200"
                        quality={90}
                        className="img-fluid rounded"
                    />
                    <div className="card-body">
                        <Link href={`/berita/${slug}`}>
                            <a className="stretched-link"><h5 className="card-title lh-sm">{title}</h5></a>
                        </Link>
                        <div className="d-flex fs-14 py-2 text-muted">
                            <div className="me-3 d-flex">
                                <i className="me-2 mt-n1"><FaRegUser /></i>
                                Admin
                            </div>
                            <div className="d-flex">
                                <i className="me-2 mt-n1"><FaRegCalendarAlt /></i>
                                {date}
                            </div>
                        </div>
                        <p className="card-text fs-15 mt-2">{excerpt}</p>
                    </div>
                </article>
            </div>
        </>
    );
}