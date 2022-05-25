import Image from "next/image";
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function BlogDetail({ profiles, settings }) {

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
        title={`Detail BumDes - Berita Desa ${profiles.nama_desa}`}
        description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
        siteName={profiles.nama_desa}
      />

      <NavBarTop profile={profiles} />

      <main>
        <div className="container py-5">
          <div className="card shadow-blog border-0 p-3">
            <div className="row g-2">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="img-wrapper position-relative">
                  <Image
                    alt="Image Berita"
                    src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=492&height=364&q=60"
                    layout="fill"
                    quality={90}
                    className="card-img-top img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="img-wrapper position-relative">
                  <Image
                    alt="Image Berita"
                    src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=492&height=364&q=60"
                    layout="fill"
                    quality={90}
                    className="card-img-top img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="img-wrapper position-relative">
                  <Image
                    alt="Image Berita"
                    src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=492&height=364&q=60"
                    layout="fill"
                    quality={90}
                    className="card-img-top img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="img-wrapper position-relative">
                  <Image
                    alt="Image Berita"
                    src="https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=492&height=364&q=60"
                    layout="fill"
                    quality={90}
                    className="card-img-top img-fluid rounded"
                  />
                </div>
              </div>
            </div>
            <h4 className="fw-medium mt-3">Produk</h4>
            <h6 className="fw-medium fs-18 text-color-secondary ">BumDes</h6>
            <p className="mb-0 mt-2">Deskripsi</p>
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
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  // console.log(params.slug)
  const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
  const profiles = await getAllProfiles.json();
  const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
  const settings = await getAllSettings.json();

  return {
    props: { profiles, settings },
  };
};