import Head from "next/head"
import React from "react"

const Page = ({font, children, seoTitle, seoDescription, seoIcon, centered, pageStyle}) =>{


    return <div style={pageStyle} className={`container ${centered?'centered': ''} ` }>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={seoIcon} />
      </Head>

{children}
        <style jsx>{`
        .container {
            display:flex;
            flex-direction: column;
            min-height: 100vh;
            padding: 10px;
    
        }

        .centered{
            align-items: center;
        }
        `}</style>
    </div>
}


export default Page