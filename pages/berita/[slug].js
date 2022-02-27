import Image from "next/image";
import Link from "next/link";
import NavBarTop from "@components/NavBarTop";
import Footer from "@components/Footer";
import PostList from "@components/PostList";
import AgendaList from "@components/AgendaList";
import BackToTop from "@components/BackToTop";
import Seo from "@components/Seo";
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";

export default function BlogDetail({ profiles, settings, berita, randomBeritas, randomAgendas, kategori }) {

    // Get 3 berita
    const someRandomBeritas = randomBeritas.data.slice(0, 3);
    // Get 3 agenda
    const someRandomAgendas = randomAgendas.data.slice(0, 3);
    // SEO meta description
    const seoDescription = berita.short_desc.replace(/(<([^>]+)>)/ig, '');

    return (
        <>
            <style jsx>
                {`
                .shadow-blog {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
                }
            `}
            </style>

            <Seo
                title={`${berita.title} - Berita Desa ${profiles.nama_desa}`}
                description={seoDescription}
                image={berita.cover}
            />

            <NavBarTop profile={profiles} />

            <main>
                <div className="container py-5">
                    <div className="row g-4 g-lg-5">

                        {/* Start Main Content */}
                        <div className="col-lg-8">
                            <div className="card shadow-blog border-0">
                                <Image
                                    alt="Image"
                                    src={berita.cover}
                                    width="450"
                                    height="400"
                                    quality={90}
                                    className="card-img-top img-fluid"
                                />
                                <div className="card-body">
                                    {berita.kategori.map((kategori, id) =>
                                        <span key={id} className="badge rounded border border-primary text-blue me-3 mb-4 fw-medium">{kategori.kategori}</span>
                                    )}

                                    <h3 className="fw-medium">{berita.title}</h3>
                                    <div className="d-flex pt-1 text-muted">
                                        <div className="d-flex mb-1 me-3">
                                            <FaRegUser />
                                            <p className="fs-14 ms-2 mb-0">Admin</p>
                                        </div>
                                        <div className="d-flex mb-1">
                                            <FaRegCalendarAlt />
                                            <p className="fs-14 ms-2 mb-0">{berita.created_at}</p>
                                        </div>
                                    </div>
                                    <div className="mt-3"
                                        dangerouslySetInnerHTML={{ __html: berita.description }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        {/* End Main Content */}

                        {/* Start Right Content */}
                        <div className="col-lg-4">
                            <div className="card shadow-blog border-0 px-3 py-2">
                                <h5 className="mb-3">Berita Lain</h5>
                                {someRandomBeritas.map(item =>
                                    <div key={item.id}>
                                        <PostList
                                            image={item.cover}
                                            title={item.title}
                                            slug={item.slug}
                                            date={item.created_at}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="card shadow-blog border-0 px-3 py-2 mt-4">
                                <h5 className="mb-3">Kategori Berita</h5>
                                <ul className="list-group border-0">
                                    {kategori.map((item, index) =>
                                        <li key={index} className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                                            <Link href={`/berita/kategori/${item.id}-${item.kategori}`}>
                                                <a className="text-decoration-none">{item.kategori}</a>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div className="card shadow-blog border-0 px-3 py-2 mt-4">
                                <h5 className="mb-3">Agenda Lain</h5>
                                {someRandomAgendas.map(item =>
                                    <div key={item.id}>
                                        <AgendaList
                                            id={item.id}
                                            image={item.cover}
                                            title={item.title}
                                            slug={item.slug}
                                            date={item.created_at}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* End Right Content */}
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
    // For single detail berita
    const getSingleBerita = await fetch(`${process.env.API_ROUTE}/news/${params.slug}`);
    // handle detail not found to 404 page
    if (getSingleBerita.status == 404) {
        return {
            notFound: true,
        };
    }
    const berita = await getSingleBerita.json();
    // For random berita
    const getRandomBerita = await fetch(`${process.env.API_ROUTE}/news`);
    const randomBeritas = await getRandomBerita.json();
    // For random agenda
    const getRandomAgenda = await fetch(`${process.env.API_ROUTE}/agenda`);
    const randomAgendas = await getRandomAgenda.json();
    // For kategori agenda
    const getKategori = await fetch(`${process.env.API_ROUTE}/web/setting/post/category`);
    const kategori = await getKategori.json();

    return {
        props: { profiles, settings, berita, randomBeritas, randomAgendas, kategori },
    };
};