import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Page from "../components/Page"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<Page pageStyle={{paddingTop:50}} centered font={inter} seoTitle={'Niching Strategies for JS Developers'}>

  <h1>Javscript Developers need to Niche Down</h1>


  {/* <h2>Step 1: Pick your city+industry combination</h2>
  <p>Where you live is more important then who you marry. It will determine your partner, your friends, your job, your hobbies.</p>
  <p>As a web developer you can literally choose any city in the world and set up shop.</p>
  <a href='https://nomadlist.com/'>nomadlist.com to pick your city</a>
  <h2>Popular choices:</h2>
   */}

  </Page>
  )
}
