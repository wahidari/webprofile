import Image from "next/image";
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function BumdesDetail({ profiles, settings, produk }) {

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
        `}
      </style>

      <Seo
        title={`Detail BumDes - ${profiles.nama_desa}`}
        description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
        siteName={profiles.nama_desa}
      />

      <NavBarTop profile={profiles} />

      <main>
        <div className="container py-5">
          <div className="card shadow-blog border-0 p-3">
            <div className="row g-2">
              {produk.photo.length > 0 ?
                produk.photo.map((item, index) => (
                  <div key={index + 1} className="col-12 col-sm-6 col-lg-3">
                    <div className="img-wrapper position-relative">
                      <Image
                        alt="Image Berita"
                        src={item.photo}
                        layout="fill"
                        quality={90}
                        className="card-img-top img-fluid rounded"
                      />
                    </div>
                  </div>
                ))
                :
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="img-wrapper position-relative">
                    <Image
                      alt="Image Berita"
                      src={`${process.env.API_ROUTE}/media/produk.png`}
                      layout="fill"
                      quality={90}
                      className="card-img-top img-fluid rounded"
                    />
                  </div>
                </div>
              }
            </div>

            <h4 className="fw-medium mt-3">{produk.nama_produk}</h4>
            <h6 className="fw-medium fs-18 text-color-secondary ">Rp. {produk.harga}</h6>
            <p className="mb-0 mt-2">{produk.deskripsi}</p>
          </div>
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
  const getProdukBumdes = await fetch(`${process.env.API_ROUTE}/bumdes/${slug}`);
  const produk = await getProdukBumdes.json();

  return {
    props: { profiles, settings, produk },
  };
};