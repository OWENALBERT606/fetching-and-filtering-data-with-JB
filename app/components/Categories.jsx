import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Categories({data}) {
  return (
    <div className='categories'>
      <div className="header">
      <h2>shop by categories</h2>
      </div>
      <div className="col-card-4">
        {
          data.map((category)=>{
            return(
              <Link href="#" className="cat" key={category.id} >
          <div className="image">
            <Image src={category.image} fill alt={category.title}/>
          </div>
          <div className="title">
            <h3>{category.title}</h3>
          </div>
        </Link>
            )
          })
        }
      </div>
    </div>
  )
}
