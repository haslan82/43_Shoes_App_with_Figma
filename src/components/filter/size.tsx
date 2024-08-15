import { useEffect} from "react";
import { numbers } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

export type FilterProps = {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const Size = ({ selected, setSelected }: FilterProps) => {
 
 const [params, setParams] = useSearchParams();
 
  // state her değiştiğinde url' deki parametreleri güncelle

  useEffect(() => {
    if (selected.length > 0) {
      // seçili eleman varsa aralarına , koyup urle ekle
      params.set("size", selected.join(","));
      setParams(params);
    } else {
      // seçili eleman yoksa urldeki parametreyi kaldır
      params.delete("size");
      setParams(params);
    
    }
    setParams(params);
  }, [selected]);

  // Üzerine tıklanan numara state' te yoksa ekle varsa kaldır
  const toggle = (num: string) => {
    //! console.log(i)
    const found = selected.includes(num);
    console.log(found);
    if (!found) {
      setSelected([...selected, num]);
    } else {
      setSelected(selected.filter((i) => i !== num));
    }
    console.log(selected);
  };




  return (
    <div className="lg:mt-5">
      <h2 className="mb-4">Numara</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num) => {

          // numara seçili mi?
          const found = selected.includes(num);

          return (
            <p
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-4 text-center rounded-md 
        cursor-pointer transition  hover:bg-zinc-400 ${
          found ? 
          "bg-gray-dark text-white" : 
          " bg-white text-gray-dark"
        } `}
            >
              <span>{num} </span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
