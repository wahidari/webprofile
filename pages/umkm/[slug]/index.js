import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import ProductCard from "@components/ProductCard";

export default function UmkmDetail({ profiles, settings, slug, umkm }) {

  return (
    <>
      <style jsx>
        {`
          .shadow-blog {
            box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
          }
          .img-wrapper {
            min-height: 200px;
          }
          .shadow-custom {
						box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
					}
        `}
      </style>

      <Seo
        title={`Detail UMKM - ${profiles.nama_desa}`}
        description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
        siteName={profiles.nama_desa}
      />

      <NavBarTop profile={profiles} />

      <main>
        <div className="container py-5">

          <h5>Detail {umkm.nama_umkm}</h5>
          <div className="table-responsive mt-3 shadow-custom">
            <table className="table table-borderless table-hover">
              <tbody>
                <tr>
                  <td className="w-25">Nama UMKM</td>
                  <td>: {umkm.nama_umkm}</td>
                </tr>
                <tr>
                  <td className="w-25">Nama Pemilik</td>
                  <td>: {umkm.nama_pemilik}</td>
                </tr>
                <tr>
                  <td className="w-25">Nomor WA</td>
                  <td>: {umkm.nomor_wa}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="mt-5 mb-3">Daftar Produk {umkm.nama_umkm}</h5>
          {umkm.produk.length > 0 ?
            <div className="row g-4">
              {umkm.produk.map(product =>
                <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                  <ProductCard
                    umkm={slug}
                    id={product.id}
                    name={product.nama_produk}
                    image={umkm.photo.filter(item => item.umkm_produk_id === product.id)[0]}
                    phone={product.phone}
                    price={product.harga}
                    link={product.link_pembelian}
                    description={product.deskripsi} />
                </div>
              )}
            </div>
            :
            // jika tidak ada produk, tampilkan eror
            <div className="my-5 py-4 d-flex justify-content-center">
              <div className="col col-md-8 col-lg-6 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                <div className="text-center">
                  <p className="mb-0">Tidak Ada Produk</p>
                </div>
              </div>
            </div>
           }

        </div>
      </main>

      <Footer profiles={profiles} links={settings.setting} />

      <BackToTop />
    </>
  );
};

// This gets called on every request to this page
export async function getServerSideProps({ params, res }) {
  const { slug } = params;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  // console.log(params.slug)
  const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
  const profiles = await getAllProfiles.json();
  const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
  const settings = await getAllSettings.json();
  const getDetailUmkm = await fetch(`${process.env.API_ROUTE}/umkm/${slug}`);
  const umkm = await getDetailUmkm.json();

  return {
    props: { profiles, settings, slug, umkm },
  };
};