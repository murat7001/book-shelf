
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/DashboardLayout';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <style>{`
    body {
      margin: 0;
      padding: 0;
      background-color: #F4E3B2;
    }
    a:-webkit-any-link {
      text-decoration: none; /* Corrected syntax */
    }
  `}</style>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>



    </>
  );
}

export default MyApp;
