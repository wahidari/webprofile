import { useRouter } from 'next/router';
import Head from "next/head";

export default function Seo({
    title = "Desa Digital",
    description = "Desa Digital",
    url = `${process.env.BASE_URL}`,
    image = `${process.env.BASE_URL}/metalogo.webp`,
    siteName= "Digital"
}) {
    const router = useRouter();
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={`${url}${router.asPath}`} />
            <meta name="robots" content="follow, index" />
            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`${url}${router.asPath}`} />
            <meta property="og:site_name" content={`Website Desa ${siteName}`} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            {/* Twitter */}
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:url" content={`${url}${router.asPath}`} />
            <meta property="twitter:image" content={image} />
            <meta property="twitter:card" content="summary_large_image" />
            {/* Favicon */}
            <link rel="icon" href="favicon/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
            <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
            <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="manifest" href="/favicon/manifest.json" />
        </Head>
    )
}