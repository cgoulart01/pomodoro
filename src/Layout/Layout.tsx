import React, { ReactElement } from "react";
import Head from "next/head";
import Script from "next/script";




export default function Layout({children}:any,{ title="Next JS App"}) {
    return (
        <>
            
            
            <Script data-ad-client="ca-pub-2195476899902528" async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script>
            <Head>
                <link rel="shortcut icon" href={"/static/favicon.svg"}/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Author Name"/>
                <title>{title}</title>
            </Head>
            {children}
        </>
    );
}