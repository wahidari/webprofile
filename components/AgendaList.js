import Image from "next/image"
import Link from "next/link"
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AgendaList({ image, title, slug, date }) {

    return (
        <>
            <style jsx>{`
                .random-post a {
                    font-weight: 500;
                    text-decoration: none;
                    color: #212529;
                }
                .random-post a:hover {
                    color: #0d6efd;
                    transition: color 0.7s ease-out;
                }
            `}</style>

            <div className="card border-0 my-2">
                <div className="row random-post">
                    <div className="col-4">
                        <Image
                            alt="Image post"
                            src={image}
                            width="200"
                            height="160"
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-8 px-0">
                        <Link href={`/agenda/${slug}`}>
                            <a className="stretched-link">{title}</a>
                        </Link>
                        <div className="d-flex align-items-center">
                            <i className="text-muted me-2 fs-13"><FaRegCalendarAlt /></i>
                            <p className="text-muted small mb-0 pt-1">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}