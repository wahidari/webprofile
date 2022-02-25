import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
const colors = ["#10b981", "#ff5b5c", "#fdac41"];
const options = {
    plugins: {
        legend: {
            display: false
        }
    }
};

export default function DanaDesa({ profiles, settings, danadesa }) {

    // filter dana desa berdasarkan jenis (1 = pendapatan, 2 = belanja, 3 = pembiayaan)
    const pendapatan = danadesa.filter((danadesa) => danadesa.jenis == 1)
    const belanja = danadesa.filter((danadesa) => danadesa.jenis == 2)
    const pembiayaan = danadesa.filter((danadesa) => danadesa.jenis == 3)

    // hitung masing-masing data setiap baris berdasarkan jenis dana desa
    const [totalPendapatanAnggaran, totalPendapatanRealisasi] = getTotalData(pendapatan);
    const [totalBelanjaAnggaran, totalBelanjaRealisasi] = getTotalData(belanja);
    const [totalPembiayaanAnggaran, totalPembiayaanRealisasi] = getTotalData(pembiayaan);

    const dataDanaDesa = {
        labels: ["Pendapatan", "Belanja", "Pembiayaan"],
        datasets: [{
            data: [totalPendapatanRealisasi, totalBelanjaRealisasi, totalPembiayaanRealisasi],
            backgroundColor: colors
        }]
    };

    return (
        <>
            <style jsx>
                {`
                .shadow-card {
                    box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
                }
            `}
            </style>

            <Seo
                title={`Dana Desa - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Dana Desa" currentPage="Dana Desa" />
                </div>

                <div className="container my-5">
                    {danadesa.length > 0 ?
                        <div className="card rounded shadow-card border-0 my-5">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold">Dana Desa</h5>
                            </div>
                            <div className="card-body">
                                <h5>Grafik Realisasi</h5>
                                <div className="col-md-8 col-lg-5 mx-auto">
                                    <Doughnut
                                        data={dataDanaDesa}
                                        width={400}
                                        height={250}
                                    />
                                    {/* <Bar
                                        options={options}
                                        data={dataDanaDesa}
                                        width={400}
                                        height={250}
                                    /> */}
                                </div>
                                <h5 className="mt-5">Data Dana Desa</h5>
                                <div className="table-responsive mt-3">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th className="fw-medium">Tahun</th>
                                                <th className="fw-medium">Jenis</th>
                                                <th className="fw-medium">Uraian</th>
                                                <th className="fw-medium">Anggaran (Rp.)</th>
                                                <th className="fw-medium">Realisasi (Rp.)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {danadesa.map(item =>
                                                <tr key={item.id}>
                                                    <td>{item.tahun}</td>
                                                    <td>
                                                        {item.jenis == 1 ? (
                                                            <span className="badge rounded-pill border-green text-green fs-13 fw-medium">Pendapatan</span>
                                                        ) : item.jenis == 2 ? (
                                                            <span className="badge rounded-pill border-red text-red fs-13 fw-medium">Belanja</span>
                                                        ) : (
                                                            <span className="badge rounded-pill border-yellow text-yellow fs-13 fw-medium">Pembiayaan</span>
                                                        )
                                                        }
                                                    </td>
                                                    <td>{item.uraian}</td>
                                                    {/* Convert 1000 to 1,000 | 100000 to 100,000 */}
                                                    <td>{item.anggaran.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                                    <td>{item.realisasi.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        :
                        // jika tidak ada data, tampilkan eror
                        <div className="my-5 py-4 d-flex justify-content-center">
                            <div className="col col-md-4 my-5 alert text-red border-red d-flex align-items-center justify-content-center" role="alert">
                                <div className="text-center">
                                    <p className="mb-0">Data tidak ditemukan.</p>
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
export async function getServerSideProps() {
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    const getDataDanaDesa = await fetch(`${process.env.API_ROUTE}/dana-desa`);
    const danadesa = await getDataDanaDesa.json();
    return {
        props: { profiles, settings, danadesa }, // will be passed to the page component as props
    };
};

// Count each row value for total row
function getTotalData(param) {
    const anggaran = [], realisasi = [];
    let totalAnggaran = 0, totalRealisasi = 0;
    
    param.map(item =>
        anggaran.push(item.anggaran)
    );
    param.map(item =>
        realisasi.push(item.realisasi)
    );

    for (let index = 0; index < anggaran.length; index++) {
        totalAnggaran += parseInt(anggaran[index]);
        totalRealisasi += parseInt(realisasi[index]);
    }

    return [totalAnggaran, totalRealisasi];
}