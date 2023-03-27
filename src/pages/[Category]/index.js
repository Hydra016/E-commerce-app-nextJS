import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";

function Category({ data, category }) {
  return (
    <div>
      <Header/>
      <h1 className='category-heading'>{category}</h1>
      <Content items={data} category={category} />
    </div>
  )
}

export default Category;

export const getStaticPaths = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const allPaths = data.map((cat) => {
    return {
      params: {
        Category: cat.category.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const category = context?.params.Category;
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const foundResults = data.filter((cat) => cat.category === category);

  return {
    props: {
      data: foundResults,
      category
    },
  };
};
