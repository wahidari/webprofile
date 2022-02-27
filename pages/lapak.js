import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import ProductCard from "@components/ProductCard";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function Lapak({ profiles, settings, products }) {

    return (
        <>

            <Seo
                title={`Lapak - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Lapak" currentPage="Lapak" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {products.map(product =>
                            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    slug={product.slug}
                                    name={product.name}
                                    category={product.category}
                                    price={product.price}
                                    image={product.image}
                                    phone={product.phone}
                                    seller={product.seller}
                                    description={product.description} />
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