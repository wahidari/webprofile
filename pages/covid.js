import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";

export default function Covid({ profiles, settings, covid }) {

    const [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal] = getTotalData(covid);
    
    return (
        <>
            <style jsx>
                {`
                .shadow-custom {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
                }
                @media (max-width: 767.98px) {
                    .border-start {
                        border-left-color: #ffffff00 !important;
                    }
                }
            `}
            </style>

            <Seo
                title={`Covid - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Covid-19" currentPage="Covid-19" />
                </div>

                <div className="container my-5 pb-4">
                    <h4 className="text-center">Statistik Covid-19</h4>
                    <p className="text-center text-muted mb-4 pb-2">Update {covid.lastUpdate}</p>
                    <div className="row g-4">
                        <div className="col-sm-6 col-md-3">
                            <div className="card shadow-custom rounded px-3 py-3 border-blue">
                                <h5 className="mb-3">Konfirmasi</h5>
                                <h6 className="fs-18 text-color-secondary pb-1">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-konfirmasi" className="text-blue fw-medium mb-0">{covid.konfirmasi}</h5>
                                    <span className="badge rounded-pill bg-blue fs-14 fw-light ms-2">+ {covid.konfirmasiHarian}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="card shadow-custom rounded px-3 py-3 border-yellow">
                                <h5 className="mb-3">Aktif</h5>
                                <h6 className="fs-18 text-color-secondary pb-1">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-aktif" className="text-yellow fw-medium mb-0">{covid.aktif}</h5>
                                    <span className="badge rounded-pill bg-yellow fs-14 fw-light ms-2">+ {covid.aktifHarian}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="card shadow-custom rounded px-3 py-3 border-green">
                                <h5 className="mb-3">Sembuh</h5>
                                <h6 className="fs-18 text-color-secondary pb-1">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-sembuh" className="text-green fw-medium mb-0">{covid.sembuh}</h5>
                                    <span className="badge rounded-pill bg-green fs-14 fw-light ms-2">+ {covid.sembuhHarian}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="card shadow-custom rounded px-3 py-3 border-red">
                                <h5 className="mb-3">Meninggal</h5>
                                <h6 className="fs-18 text-color-secondary pb-1">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-meninggal" className="text-red fw-medium mb-0">{covid.meninggal}</h5>
                                    <span className="badge rounded-pill bg-red fs-14 fw-light ms-2">+ {covid.meninggalHarian}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5 pb-4">
                    <h4 className="mt-5 mb-4 pt-2 text-center pb-2">Tabel Sebaran Covid-19</h4>
                    <div className="table-responsive mt-3">
                        <table id="tabel-sebaran" className="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th className="fw-medium">Kecamatan</th>
                                    <th className="fw-medium">Konfirmasi</th>
                                    <th className="fw-medium">Aktif</th>
                                    <th className="fw-medium">Sembuh</th>
                                    <th className="fw-medium">Meninggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {covid.dataKecamatan.map(item => 
                                    <tr key={item.id}>
                                        <td>{item.kecamatan}</td>
                                        <td>{item.konfirmasi}</td>
                                        <td>{item.aktif}</td>
                                        <td>{item.sembuh}</td>
                                        <td>{item.meninggal}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="text-center fw-medium">Jumlah</td>
                                    <td className="text-center fw-medium">{totalKonfirmasi}</td>
                                    <td className="text-center fw-medium">{totalAktif}</td>
                                    <td className="text-center fw-medium">{totalSembuh}</td>
                                    <td className="text-center fw-medium">{totalMeninggal}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="container my-5">
                    <h4 className="mt-5 mb-4 text-center pb-2">Tentang Covid-19</h4>
                    <div className="card rounded-3 shadow-sm my-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="py-0 py-md-4 px-0 px-md-4">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                        aria-orientation="vertical">
                                        <button className="nav-link active text-start" id="v-pills-apa-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-apa" type="button" role="tab" aria-controls="v-pills-apa"
                                            aria-selected="true">Apa itu Covid-19 ?</button>
                                        <button className="nav-link text-start" id="v-pills-bagaimana-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-bagaimana" type="button" role="tab"
                                            aria-controls="v-pills-bagaimana" aria-selected="true">Bagaimana Covid-19 Menular
                                            ?</button>
                                        <button className="nav-link text-start" id="v-pills-gejala-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-gejala" type="button" role="tab"
                                            aria-controls="v-pills-gejala" aria-selected="true">Apa Saja Gejala Covid-19
                                            ?</button>
                                        <button className="nav-link text-start" id="v-pills-mencegah-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-mencegah" type="button" role="tab"
                                            aria-controls="v-pills-mencegah" aria-selected="true">Bagaimana Mencegah Penyebaran
                                            Covid-19 ?</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 pt-4 px-4 border-start">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-apa" role="tabpanel"
                                        aria-labelledby="v-pills-apa-tab">
                                        <h6 className="fs-18 mb-3">Pengertian Covid-19</h6>
                                        <p className="text-color-secondary">Coronavirus Disease 2019 atau COVID-19 adalah
                                            penyakit baru yang dapat menyebabkan gangguan
                                            pernapasan dan radang paru.
                                            Penyakit ini disebabkan oleh infeksi Severe Acute Respiratory Syndrome
                                            Coronavirus 2 (SARS-CoV-2). Gejala
                                            klinis yang
                                            muncul beragam, mulai dari seperti gejala flu biasa (batuk, pilek, nyeri
                                            tenggorok, nyeri otot, nyeri
                                            kepala) sampai
                                            yang berkomplikasi berat (pneumonia atau sepsis).</p>
                                    </div>
                                    <div className="tab-pane fade show" id="v-pills-bagaimana" role="tabpanel"
                                        aria-labelledby="v-pills-bagaimana-tab">
                                        <h6 className="fs-18 mb-3">Covid-19 Menular Dengan Cara</h6>
                                        <p className="text-color-secondary">COVID-19 adalah penyakit baru dan para peneliti masih
                                            mempelajari bagaimana cara penularannya. Dari berbagai penelitian,
                                            metode penyebaran utama penyakit ini diduga adalah melalui droplet saluran
                                            pernapasan dan kontak dekat dengan penderita.
                                            Droplet merupakan partikel kecil dari mulut penderita yang dapat mengandung
                                            virus penyakit, yang dihasilkan pada saat
                                            batuk, bersin, atau berbicara. Droplet dapat melewati sampai jarak tertentu
                                            (biasanya 1 meter).</p>
                                        <p className="text-color-secondary">Droplet bisa menempel di pakaian atau benda di
                                            sekitar penderita pada saat batuk atau bersin. Namun, partikel droplet
                                            cukup besar sehingga tidak akan bertahan atau mengendap di udara dalam waktu
                                            yang lama. Oleh karena itu, orang yang
                                            sedang sakit, diwajibkan untuk menggunakan masker untuk mencegah penyebaran
                                            droplet. Untuk penularan melalui makanan,
                                            sampai saat ini belum ada bukti ilmiahnya.</p>
                                    </div>
                                    <div className="tab-pane fade show" id="v-pills-gejala" role="tabpanel"
                                        aria-labelledby="v-pills-gejala-tab">
                                        <h6 className="fs-18 mb-3">Gejala Covid-19</h6>
                                        <p className="text-color-secondary">Gejala umum berupa demam ≥380C, batuk kering, dan
                                            sesak napas. Jika ada orang yang dalam 14 hari sebelum muncul gejala
                                            tersebut pernah melakukan perjalanan ke negara terjangkit, atau pernah
                                            merawat/kontak erat dengan penderita COVID-19,
                                            maka terhadap orang tersebut akan dilakukan pemeriksaan laboratorium lebih
                                            lanjut untuk memastikan diagnosisnya.</p>
                                    </div>
                                    <div className="tab-pane fade show" id="v-pills-mencegah" role="tabpanel"
                                        aria-labelledby="v-pills-mencegah-tab">
                                        <h6 className="fs-18 mb-3">Pencegahan Penyebaran Covid-19</h6>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">1. Cuci Tangan Sesering Mungkin</li>
                                            <li className="mb-2">2. Jaga Jarak</li>
                                            <li className="mb-2">3. Hindari menyentuh mata, hidung, dan mulut</li>
                                            <li className="mb-2">4. Lakukan Kebersihan Pernapasan</li>
                                            <li className="mb-2">5. Jika Mengalami Demam, Batuk, dan Kesulitan
                                                Bernapas, Cari Perawatan Medis Sejak Dini</li>
                                            <li className="mb-2">6. Update Informasi dan Ikuti Saran Tenaga Medis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    const getDataCovid = await fetch(`${process.env.BASE_URL}/api/covid`);
    const covid = await getDataCovid.json();
    return {
        props: { profiles, settings, covid }, // will be passed to the page component as props
    };
};

// Count each row value for total row
function getTotalData(param) {
    const konfirmasi = [], aktif = [], sembuh = [], meninggal = [];
    let totalKonfirmasi = 0, totalAktif = 0, totalSembuh = 0, totalMeninggal = 0;
    param.dataKecamatan.map(item =>
        konfirmasi.push(item.konfirmasi)
    );
    param.dataKecamatan.map(item =>
        aktif.push(item.aktif)
    );
    param.dataKecamatan.map(item =>
        sembuh.push(item.sembuh)
    );
    param.dataKecamatan.map(item =>
        meninggal.push(item.meninggal)
    );

    for (let index = 0; index < konfirmasi.length; index++) {
        totalKonfirmasi += parseInt(konfirmasi[index]);
        totalAktif += parseInt(aktif[index]);
        totalSembuh += parseInt(sembuh[index]);
        totalMeninggal += parseInt(meninggal[index]);
    }

    return [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal];
}