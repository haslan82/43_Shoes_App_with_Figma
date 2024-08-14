import React from 'react'
import Size from './size'
import Color from './Color'
import Gender from './gender'
import Price from './Price'

const Filter = () => {
  return (
    <div className='max-lg:fixed max-lg:inset-0 max-lg:grid 
    max-lg:place-items-center max-lg:bg-zinc-900 
    max-lg:bg-opacity-60 z-10'>
      <div  className='max-lg:max-w-lg max-lg:mx-auto max-lg:h-[80vh] min-w-[350px] '>
        <div className='max-lg:bg-white max-lg:flex justify-between max-lg:p-4 rounded-t-md'>
        <h2 className='text-xl font-semibold '>Filtreler</h2>
        <button className='lg:hidden'>X</button>
      </div>
      <form className='max-lg:p-5 bg-gray h-full flex flex-col gap-6 rounded-b-md'>
        <Size/>
        <Color/>
        <Gender/>
        <Price/>
        <button type='reset' className='border border-gray-dark p-2 rounded-lg hover:bg-gray-dark hover:text-white trannsition'>Sıfırla</button>
      </form>
      </div>
    </div>
  )
}

export default Filter
