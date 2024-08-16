import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Price = ({value, setValue}:Props) => {
const [params, setParams] = useSearchParams();
// performans için debounce uyguladık
const debounceValue = useDebounce(value, 300)


useEffect(()=> {

  if(+value >0){

  
  params.set("price", value)
  
}else{
  params.delete("price");
 
}

setParams(params);

}, [debounceValue]);

  return (
    <div>
      <h2 className="mb-4">Fiyat</h2>
      <input 
      value={value}
      onChange={(e)=> setValue(e.target.value)} 
      type="range" 
      min={0} 
      max={1000} 
      className="w-full"/>

<div className="flex justify-between font-open font-semibold">
  <span>${value} </span>
  <span>$1000</span>
</div>

    </div>
  )
}

export default Price
