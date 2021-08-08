import Head from 'next/head'

export const Seo = ({pageName}) => {
    return (
        <Head>
            <title> Full Stack • Software Development • Diego Muñoz • DMcoder </title>
            <meta name="title" content="Diego Muñoz | Portfolio" />
            <meta name='description' content="Hi! I'm a Software Engineering student and also a Full Stack developer. Check out my portfolio!" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dmcoder.dev/" />
            <meta property="og:title" content="Diego Muñoz | Portfolio" />
            <meta property="og:description" content="Hi! I'm a Software Engineering student and also a Full Stack developer. Check out my portfolio!" />
            <meta property="og:image" content="https://dmcoder.dev/assets/seo.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://dmcoder.dev/" />
            <meta property="twitter:title" content="Diego Muñoz | Portfolio" />
            <meta property="twitter:description" content="Hi! I'm a Software Engineering student and also a Full Stack developer. Check out my portfolio!" />
            <meta property="twitter:image" content="https://dmcoder.dev/assets/seo.png" />

            <meta charSet='UTF-8' />
            <meta name='theme-color' content='#0c1621' />
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            <meta name="google-site-verification" content="-4-ZEOZaWlUamZGBl_h_WYtGNmtpyYEdi1ZV9CPbEKU" />
            <link rel='icon' href='/assets/favicon.png' />
            <link rel="apple-touch-icon" href="/assets/favicon.png" />
        </Head>
    )
}