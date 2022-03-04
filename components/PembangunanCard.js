import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";

export default function PembangunanCard({ id, image, title, slug, author, date, excerpt }) {

    return (
        <>
            <style jsx>{`
                .shadow-custom {
                    box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
                }
            `}</style>

            <div className="col-md-6 col-lg-4">
                <div className="card shadow-custom border-0 h-100">
                    <div className="card-body">
                        <h6 className="mb-3 fs-18">Pembangunan Jembatan Penghubung Persawahan</h6>
                        <div className="d-flex">
                            <p className="text-muted mb-0 me-4">
                                <i className="me-2"><FaMapMarkerAlt /></i>
                                RT 01
                            </p>
                            <p className="text-muted mb-3">
                                <i className="me-2"><FaMoneyBillAlt /></i>
                                Rp. 119.655,-
                            </p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-25 bg-red" aria-label="Progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-custom border-0 h-100">
                    <div className="card-body">
                        <h6 className="mb-3 fs-18">Pembangunan MCK dan Tempat Wudhu Masjid</h6>
                        <div className="d-flex">
                            <p className="text-muted mb-0 me-4">
                                <i className="me-2"><FaMapMarkerAlt /></i>
                                RT 02
                            </p>
                            <p className="text-muted mb-3">
                                <i className="me-2"><FaMoneyBillAlt /></i>
                                Rp. 219.655,-
                            </p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-50 bg-yellow" aria-label="Progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-custom border-0 h-100">
                    <div className="card-body">
                        <h6 className="mb-3 fs-18">Pembangunan Jalan Usaha Pertanian</h6>
                        <div className="d-flex">
                            <p className="text-muted mb-0 me-4">
                                <i className="me-2"><FaMapMarkerAlt /></i>
                                RT 03
                            </p>
                            <p className="text-muted mb-3">
                                <i className="me-2"><FaMoneyBillAlt /></i>
                                Rp. 319.655,-
                            </p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-75 bg-blue" aria-label="Progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-custom border-0 h-100">
                    <div className="card-body">
                        <h6 className="mb-3 fs-18">Pembangunan Gorong-Gorong Jalan</h6>
                        <div className="d-flex">
                            <p className="text-muted mb-0 me-4">
                                <i className="me-2"><FaMapMarkerAlt /></i>
                                RT 04
                            </p>
                            <p className="text-muted mb-3">
                                <i className="me-2"><FaMoneyBillAlt /></i>
                                Rp. 419.655,-
                            </p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-100 bg-green" aria-label="Progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}