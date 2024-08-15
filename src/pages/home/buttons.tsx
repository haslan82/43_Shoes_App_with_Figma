

const Buttons = ({open} :{open:()=> void }) => {
  return (
    <div className='flex mt-5 gap-5 lg:hidden'>
     <button 
     onClick={open}  
     className='flex-1 bg-white px-4 py-2 rounded-md gap-4 
     flex justify-between'>Filtreler
        <img src="/lines.svg" alt="" />
     </button>
     <button className='flex-1 bg-white px-4 py-2 rounded-md gap-4 flex justify-between'>Sırala
        <img src="/down.svg" alt="" />
     </button>
    </div>
  )
}

export default Buttons
