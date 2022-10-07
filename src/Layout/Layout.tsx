import React, { ReactElement } from "react";
import Head from "next/head";
import Script from "next/script";




export default function Layout({children}:any,{ title="PomodoroTimer"}) {
    return (
        <>
            
            
            <Script data-ad-client="ca-pub-2195476899902528" async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script>
            <Head>
                <link rel="shortcut icon" href={"/public/tomato-icon.ico"}/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="cgoulart01"/>
                <title>{title}</title>
            </Head>
            {children}
        </>
    );
}