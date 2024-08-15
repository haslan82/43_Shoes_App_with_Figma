import { useEffect } from "react";
import { FilterProps } from "./size";
import { useSearchParams } from "react-router-dom";

const Gender = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();

  // state her değiştiğinde url' deki parametreleri güncelle

  useEffect(() => {
    if (selected.length > 0) {
      // seçili eleman varsa aralarına , koyup urle ekle
      params.set("gender", selected.join(","));
      setParams(params);
    } else {
      // seçili eleman yoksa urldeki parametreyi kaldır
      params.delete("gender");
      setParams(params);
    }
    setParams(params);
  }, [selected]);

  // Üzerine tıklanan numara state' te yoksa ekle varsa kaldır
  const toggle = (gender: string) => {
    //! console.log(i)
    const found = selected.includes(gender);
    console.log(found);
    if (!found) {
      setSelected([...selected, gender]);
    } else {
      setSelected(selected.filter((i) => i !== gender));
    }
    //!console.log(selected);
  };
  //! console.log(selected);

  return (
    <div>
      <h2 className="mb-4">Cinsiyet</h2>

      <div className="flex items-center gap-4">
        <input 
        checked={selected.includes("men")}
        onChange={()=> toggle ("men")} 
        id="men" 
        type="checkbox"/>

        <label htmlFor="men" className="select-none">Erkek</label>
      </div>
      <div className="flex items-center gap-4">
        <input 
        checked={selected.includes("women")}
        onChange={()=> toggle ("women")} 
        id="women"  
        type="checkbox"/>

        <label htmlFor="women" className="select-none">Kadın</label>
      </div>
    </div>
  );
};

export default Gender;
