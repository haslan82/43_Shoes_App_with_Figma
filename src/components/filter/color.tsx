import { useEffect } from "react";
import { FilterProps } from "./size"
import { useSearchParams } from "react-router-dom";
import { colors } from "../../utils/constants";


const Color = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();
 
  // state her değiştiğinde url' deki parametreleri güncelle

  useEffect(() => {
    if (selected.length > 0) {
      // seçili eleman varsa aralarına , koyup urle ekle
      params.set("color", selected.join(","));
      setParams(params);
    } else {
      // seçili eleman yoksa urldeki parametreyi kaldır
      params.delete("color");
      setParams(params);
    
    }
    setParams(params);
  }, [selected]);

  // Üzerine tıklanan numara state' te yoksa ekle varsa kaldır
  const toggle = (color: string) => {
    //! console.log(i)
    const found = selected.includes(color);
    console.log(found);
    if (!found) {
      setSelected([...selected, color]);
    } else {
      setSelected(selected.filter((i) => i !== color));
    }
    //!console.log(selected);
  };


  console.log(selected);

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4">Renkler</h2>
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color) => {

          // numara seçili mi?
          const found = selected.includes(color.id)


          return <div 
          onClick={()=> toggle(color.id)}
          style={{background:color.code}} 
          className={`py-2 px-4 rounded-md cursor-pointer transition 
            hover:bg-zinc-400 text-transparent select-none ring-orange-300 ${found ? "ring-[5px]" : "" }  `} 
          >.</div>
          
            
           
          
        })}
      </div>
    </div>
  );
}

export default Color
