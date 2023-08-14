import React from 'react';
import { getCategories } from './api/categories/route';
import { getProducts } from './api/products/route';
import Categories from './components/Categories';
import Products from './components/Products';


export default async function Page() {
  const categories = await getCategories();
  const products = await getProducts();
  const allTelevisions = products.filter((product)=>product.category_id==1);
  const allFridges = products.filter((product)=>product.category_id==2)
  const allMicrowave = products.filter((product)=>product.category_id==3);
  const allLaundry = products.filter((product)=>product.category_id==4);
  // console.log(products);
  return (
    <div>
      <Categories data={categories} />
      <Products data={products} title="All Products" headerbg="blue" />
      <Products data={allTelevisions} title="All televisions" headerbg="brown" />
      <Products data={allFridges} title="All Fridges" headerbg="red" />
      <Products data={allMicrowave} title="All Microwave" headerbg="black" />
      <Products data={allLaundry} title="All Laundry" headerbg="gray" />
    </div>
  )
}
