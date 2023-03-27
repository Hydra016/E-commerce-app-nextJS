import React from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'

function index({data}) {  
  return (
    <div>      
      <Header />
      <h1 className='category-heading'>All Products</h1>
      <Content items={data} />
      <Footer />
    </div>
  )
}

export default index

export const getStaticProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json()

  return {
    props: {
      data: data,
    },
  };
};