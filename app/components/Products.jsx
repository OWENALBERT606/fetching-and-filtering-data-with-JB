import Image from 'next/image';
import Link from 'next/link'
import React from 'react';

export default function Products({data,title,headerbg}) {
  return (
    <div className='products'>
      <div className="header" style={{background:headerbg}}>
      <h2>{title}</h2>
      </div>
      <div className="col-card-4">
        {
          data.map((product)=>{
            return(
              <Link href="#" className="cat" key={product.id} >
          <div className="image">
            <Image src={product.image} fill alt={product.title}/>
          </div>
          <div className="title">
            <h3>{product.title}</h3>
            <p>{product.detailed_description}</p>
            <p>initial price = {product.initialPrice}</p>
            <p> current price = {product.currentPrice}</p>
          </div>
        </Link>
            )
          })
        }
      </div>
    </div>
  )
}
