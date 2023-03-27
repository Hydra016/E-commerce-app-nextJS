import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

function Item({data}) {
  return (
    <div>
      <Header dontShowHeaderImg={true} />
      <div className='single-item-container'>
        <img className='single-item-image' src={data.image} />
        <div className='single-item-details-container'>
          <span className='single-item-heading'>{data.title}</span>
          <span className='single-item-description'>{data.description}</span>
          <span className='single-item-price'>$ {data.price}</span>
          <Link className='single-item-button' href='/'>
          Buy Now
        </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Item

export const getStaticPaths = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const allPaths = data.map((cat) => {
    return {
      params: {
        Category: cat.category.toString(),
        id: cat.id.toString()
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context?.params.id;
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  const foundResult = data.find((cat) => cat.id == id);
  console.log(foundResult)
  return {
    props: {
      data: foundResult
    },
  };
};
