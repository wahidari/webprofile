import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import ProductCard from "@components/ProductCard";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import BumdesCard from "@components/BumdesCard";

export default function Bumdes({ profiles, settings, products }) {

    return (
        <>
            <style jsx>
                {`
                .shadow-custom {
                    box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
                }
            `}
            </style>

            <Seo
                title={`BumDes - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="BumDes" currentPage="BumDes" />
                </div>

                <div className="container my-5">
                    <div className="card border-0 shadow-custom px-3 pt-3">
                        <h5 className="mb-3 ms-2">Informasi Umum Bumdes</h5>
                        <div className="table-responsive text-nowrap">
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td>Nama Bumdes</td>
                                        <td>: BUM DESA TANI MAKMU GAMPONG BARO</td>
                                    </tr>
                                    <tr>
                                        <td>Desa</td>
                                        <td>: Mlajah</td>
                                    </tr>
                                    <tr>
                                        <td>Kecamatan</td>
                                        <td>: Bangkalan</td>
                                    </tr>
                                    <tr>
                                        <td>Kabupaten</td>
                                        <td>: Bangkalan</td>
                                    </tr>
                                    <tr>
                                        <td>Provinsi</td>
                                        <td>: Jawa Timur</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive text-nowrap">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th className="fw-medium">Nama BumDes</th>
                                        <th className="fw-medium">Desa</th>
                                        <th className="fw-medium">Kecamatan</th>
                                        <th className="fw-medium">Kabupaten</th>
                                        <th className="fw-medium">Provinsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BUM DESA TANI MAKMU GAMPONG BARO</td>
                                        <td>Mlajah</td>
                                        <td>Bangkalan</td>
                                        <td>Bangkalan</td>
                                        <td>Jawa Timur</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {products.map(product =>
                            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                                <BumdesCard
                                    name={product.name}
                                    image={product.image}
                                    phone={product.phone}
                                    description={product.description}
                                    bumdes={product.bumdes} />
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer profiles={profiles} links={settings.setting} />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    const getAllProducts = await fetch(`${process.env.BASE_URL}/api/product`);
    const products = await getAllProducts.json();
    return {
        props: { profiles, settings, products }, // will be passed to the page component as props
    };
};