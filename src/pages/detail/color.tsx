import { colors } from "../../utils/constants";

colors

const Color = ({data}:{data:string}) => {
    //! console.log(data)
const arr = data.split(",");
//! console.log(arr)


  return (
    <div>
   <h2 className='mb-3'>Renkler</h2>
   <div className="flex gap-4">{arr.map((item)=>  {

    // id2 sinden yola çıkarak renk kodunu bul
    const color = colors.find((i)=> i.id === item);
    return <div style={{background:color?.code || "gray"}} className='h-8 w-8 rounded-full cursor-pointer
    '/>
})} 
    </div>
    </div>
  )
}

export default Color
