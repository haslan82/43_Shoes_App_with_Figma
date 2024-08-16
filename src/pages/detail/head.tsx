import React from 'react'
import { Shoe } from '../../type'
import Badge from '../../components/card/badge'
import calcDiscount from '../../utils/calcDiscount'

const Head = ({data}:{data:Shoe}) => {
    const lastPrice = calcDiscount(data.price, data.discount)
  return (
    <div>
     <Badge discount={data.discount}/>
     <h2 className='text-3xl mt-[60px]'>{data.name} </h2>
     <p className='text-[24px] mt-4'>
        <span className='text-blue'>${lastPrice} </span>

        {data.discount && (<span className='line-through ps-3'>${data.price} </span>)}
        
     </p>

    </div>
  )
}

export default Head
