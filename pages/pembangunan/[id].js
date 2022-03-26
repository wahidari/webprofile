import Image from "next/image";
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function pembangunanDetail({ profiles, settings, pembangunan }) {

  return (
    <>
      <style jsx>
        {`
          .shadow-custom {
            box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
          }
          .w-13 {
            width: 13rem;
          }
          .w-2 {
            width: 2rem;
          }
          @media (min-width: 768px) {
            .border-top-md{
              border-top: 1px solid #dee2e6!important;
            }
            .border-start-md{
              border-left: 1px solid #dee2e6!important;
            }
          }
          @media (max-width: 767px) {
            .border-top-md{
              border-top: 0px;
            }
            .border-start-md{
              border-left: 0px;
            }
          }
        `}
      </style>

      <Seo
        title={`${pembangunan.nama_pembangunan} - Pembangunan Desa ${profiles.nama_desa}`}
        description={pembangunan.nama_pembangunan}
        siteName={profiles.nama_desa}
      />

      <NavBarTop profile={profiles} />

      <main>

        <div className="container py-5">
          <h4 className="pb-2 fs-24">Detail Pembangunan</h4>
          <div className="card border-0 shadow-custom px-3 pt-3 text-nowrap">
            <div className="table-responsive">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="w-13">Nama Pembangunan</td>
                    <td className="w-2">:</td>
                    <td>{pembangunan.nama_pembangunan}</td>
                  </tr>
                  <tr>
                    <td className="w-13">Sumber Pendanaan</td>
                    <td className="w-2">:</td>
                    <td>{pembangunan.sumber_dana}</td>
                  </tr>
                  <tr>
                    <td className="w-13">Tahun Pembangunan</td>
                    <td className="w-2">:</td>
                    <td>{pembangunan.tahun}</td>
                  </tr>
                  <tr>
                    <td className="w-13">Dusun</td>
                    <td className="w-2">:</td>
                    <td>{pembangunan.dusun.nama_dusun}</td>
                  </tr>
                  <tr>
                    <td className="w-13">RW</td>
                    <td className="w-2">:</td>
                    <td>{pembangunan.rw.rw_nama}</td>
                  </tr>
                  <tr>
                    <td className="w-13">RT</td>
                    <td className="w-2">:</td>
                    <td>{pembangunan.rt.rt_nama}</td>
                  </tr>
                  <tr>
                    <td className="w-13">Progress</td>
                    <td className="w-2">:</td>
                    <td>
                      {pembangunan.progress ?
                        <div className="progress rounded-pill">
                          <div className="progress-bar bg-blue rounded-pill fw-600" aria-label="Progress" role="progressbar"
                            style={{ width: pembangunan.progress + "%" }}
                            aria-valuenow={pembangunan.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {pembangunan.progress}%
                          </div>
                        </div>
                        :
                        <div className="progress rounded-pill">
                          <span className="ps-2 fw-600">0%</span>
                        </div>
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <h4 className="pb-2 fs-24">Progress Pembangunan</h4>
          {pembangunan.pembangunan_item.length > 0 ?
            pembangunan.pembangunan_item.map((item, index) =>
              <div key={index} className="card mb-4 border-0 shadow-custom px-3 py-3">
                <div className="d-md-flex justify-content-between mb-3 mb-md-3">
                  <div className="pe-md-3">
                    <h5 className="fs-20">Deskripsi</h5>
                    <p className="fs-15 mb-md-1">{item.deskripsi}</p>
                  </div>
                  <div className="border-start-md ps-md-3 text-nowrap d-flex align-items-center">
                    <h5 className="fs-20 mb-md-0">Progress : {item.progress} %</h5>
                  </div>
                </div>
                <div className="border-top-md">
                  <h5 className="fs-20 pt-md-4 pb-2">Foto Progress</h5>
                  <div className="row">
                    {item.photos.map((photo, index) =>
                      <div key={index} className="col-sm-6 col-md-4">
                        <Image
                          alt="Image Progress"
                          src={photo}
                          width="470"
                          height="350"
                          quality={90}
                          className="img-fluid rounded"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
            :
            // jika tidak ada data, tampilkan eror
            <div className="my-5 py-4 d-flex justify-content-center">
              <div className="col col-md-8 col-lg-6 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                <div className="text-center">
                  <p className="mb-0">Tidak Ada Data Progress</p>
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
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  // console.log(params.slug)
  const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
  const profiles = await getAllProfiles.json();
  const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
  const settings = await getAllSettings.json();
  // For single detail berita
  const getSinglePembangunan = await fetch(`${process.env.API_ROUTE}/pembangunan/${params.id}`);
  // handle detail not found to 404 page
  if (getSinglePembangunan.status == 404) {
    return {
      notFound: true,
    };
  }
  const pembangunan = await getSinglePembangunan.json();

  return {
    props: { profiles, settings, pembangunan },
  };
};