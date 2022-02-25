import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement );
const colors = ["#5a8dee", "#10b981", "#6f42c1", "#ff5b5c", "#fd7e14", "#394c62", "#fdac41"];
const options = {
    plugins: {
        legend: {
            display: false
        }
    }
};

export default function Penduduk({ profiles, settings, gender, education, religion, pekerjaan, status, usia }) {
    
    const dataGender = populateData(gender);
    const totalDataGender = getTotalData(gender);

    const dataEducation = populateData(education);
    const totalDataEducation = getTotalData(education);

    const dataReligion = populateData(religion);
    const totalDataReligion = getTotalData(religion);

    const dataPekerjaan = populateData(pekerjaan);
    const totalDataPekerjaan = getTotalData(pekerjaan);

    const dataStatus = populateData(status);
    const totalDataStatus = getTotalData(status);

    const dataUsia = populateData(usia);
    const totalDataUsia = getTotalData(usia);
    
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
                title={`Penduduk - Desa ${profiles.nama_desa}`}
                description={`Media komunikasi dan transparansi Pemerintah Desa ${profiles.nama_desa}`}
                siteName={profiles.nama_desa}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Penduduk" currentPage="Penduduk" />
                </div>

                <div className="container my-5" id="jenis-kelamin">
                    <div className="card rounded shadow-card border-0 my-5">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Jenis Kelamin</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Doughnut
                                    data={dataGender}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-medium">No</th>
                                            <th className="fw-medium">Kelompok</th>
                                            <th className="fw-medium">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gender.map(item => 
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )} 
                                        
                                        <tr>
                                            <td colSpan="2" className="text-center fw-medium">Jumlah</td>
                                            <td className="fw-medium">{totalDataGender}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded shadow-card border-0 my-5" id="pendidikan">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Pendidikan</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Doughnut
                                    data={dataEducation}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-medium">No</th>
                                            <th className="fw-medium">Kelompok</th>
                                            <th className="fw-medium">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {education.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-medium">Jumlah</td>
                                            <td className="fw-medium">{totalDataEducation}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded shadow-card border-0 my-5" id="agama">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Agama</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Pie
                                    data={dataReligion}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-medium">No</th>
                                            <th className="fw-medium">Kelompok</th>
                                            <th className="fw-medium">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {religion.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-medium">Jumlah</td>
                                            <td className="fw-medium">{totalDataReligion}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded shadow-card border-0 my-5" id="pekerjaan">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Pekerjaan</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Pie
                                    data={dataPekerjaan}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-medium">No</th>
                                            <th className="fw-medium">Kelompok</th>
                                            <th className="fw-medium">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pekerjaan.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-medium">Jumlah</td>
                                            <td className="fw-medium">{totalDataPekerjaan}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded shadow-card border-0 my-5" id="usia">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Usia</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-6 mx-auto">
                                <Bar
                                    options={options}
                                    data={dataUsia}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-medium">No</th>
                                            <th className="fw-medium">Kelompok</th>
                                            <th className="fw-medium">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usia.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-medium">Jumlah</td>
                                            <td className="fw-medium">{totalDataUsia}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded shadow-card border-0 my-5" id="status">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Status</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Pie
                                    data={dataStatus}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-medium">No</th>
                                            <th className="fw-medium">Kelompok</th>
                                            <th className="fw-medium">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {status.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-medium">Jumlah</td>
                                            <td className="fw-medium">{totalDataStatus}</td>
                                        </tr>
                                    </tbody>
                                </table>
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
export async function getServerSideProps() {
    const getAllProfiles = await fetch(`${process.env.API_ROUTE}/profil`);
    const profiles = await getAllProfiles.json();
    const getAllSettings = await fetch(`${process.env.API_ROUTE}/web/setting`);
    const settings = await getAllSettings.json();
    const getDataGender = await fetch(`${process.env.BASE_URL}/api/gender`);
    const gender = await getDataGender.json();
    const getDataEducation = await fetch(`${process.env.BASE_URL}/api/education`);
    const education = await getDataEducation.json();
    const getDataReligion = await fetch(`${process.env.BASE_URL}/api/religion`);
    const religion = await getDataReligion.json();
    const getDataPekerjaan = await fetch(`${process.env.BASE_URL}/api/pekerjaan`);
    const pekerjaan = await getDataPekerjaan.json();
    const getDataStatus = await fetch(`${process.env.BASE_URL}/api/status`);
    const status = await getDataStatus.json();
    const getDataUsia = await fetch(`${process.env.BASE_URL}/api/usia`);
    const usia = await getDataUsia.json();
    return {
        props: { profiles, settings, gender, education, religion, pekerjaan, status, usia }, // will be passed to the page component as props
    };
};

// Populate Data for ChartJS 
function populateData(param) {
    const labels = [];
    const totals = [];
    param.map(item =>
        labels.push(item.name)
    );
    param.map(item =>
        totals.push(item.total)
    );
    const data = {
        labels: labels,
        datasets: [{
            data: totals,
            backgroundColor: colors
        }],
    };
    return (data);
}

// Count each row value for total row
function getTotalData(param) {
    const totals = [];
    param.map(item =>
        totals.push(item.total)
    );

    let total = 0;
    for (let index = 0; index < totals.length; index++) {
        total += parseInt(totals[index])
    }

    return (total);
}