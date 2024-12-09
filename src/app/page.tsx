import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bảo Tường Honey Bee Shop</title>
        <meta name="description" content="Chuyên cung cấp các sản phẩm từ ong chất lượng cao" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Overview />
        <Products />
        <Contact />
        <Footer />
      </main>
    </>
  )
}