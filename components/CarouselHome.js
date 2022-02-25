import Image from "next/image";

export default function CarouselHome({heros}) {
    return (
        <>
            <style jsx>{`
                .carousel-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 99%;
                    background-color: rgba(0, 0, 0, 0.4);
                }
                .carousel-caption {
                    bottom: 17em;
                }
                .carousel-text {
                    font-weight: 400;
                    font-size: 20px;
                }
                @media (max-width: 575.98px) {
                    .carousel-caption h1 {
                        font-size: 24px !important;
                    }
                    .carousel-caption {
                        bottom: 5em !important;
                    }
                    .carousel-text {
                        font-size: 16px !important;
                    }
                    .carousel-overlay {
                        height: 98% !important;
                    }
                }
                @media (min-width: 576px) and (max-width: 767.98px) {
                    .carousel-caption h1 {
                        font-size: 32px !important;
                    }
                    .carousel-caption {
                        bottom: 8em !important;
                    }
                    .carousel-overlay {
                        height: 98% !important;
                    }
                }
                @media (min-width: 768px) and (max-width: 991.98px) {
                    .carousel-caption {
                        bottom: 10em !important;
                    }
                    .carousel-overlay {
                        height: 98% !important;
                    }
                }
                @media (min-width: 992px) and (max-width: 1199.98px) {
                    .carousel-caption {
                        bottom: 10em !important;
                    }
                    .carousel-overlay {
                        height: 98%;
                    }
                }
                @media (min-width: 1600px) {
                    .carousel-caption {
                        bottom: 24em !important;
                    }
                }
            `}</style>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                            alt="Carousel"
                            src={heros[0].image}
                            width="1920"
                            height="960"
                            className="d-block w-100 carousel-zoom"
                        />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption">
                            <h1>{heros[0].title}</h1>
                            <p className="carousel-text">{heros[0].subtitle}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image
                            alt="Carousel"
                            src={heros[1].image}
                            width="1920"
                            height="960"
                            className="d-block w-100 carousel-zoom"
                        />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption">
                            <h1>{heros[1].title}</h1>
                            <p className="carousel-text">{heros[1].subtitle}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image
                            alt="Carousel"
                            src={heros[2].image}
                            width="1920"
                            height="960"
                            className="d-block w-100 carousel-zoom"
                        />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption">
                            <h1>{heros[2].title}</h1>
                            <p className="carousel-text">{heros[2].subtitle}</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}