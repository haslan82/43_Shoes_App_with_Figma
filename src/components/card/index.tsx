import { Link } from "react-router-dom";
import { Shoe } from "../../type";
import Badge from "./Badge";
import calcDiscount from "../../utils/calcDiscount";

const Card = ({ item }: { item: Shoe }) => {
  
  
  
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="bg-white rounded-[16px] lg:rounded-[28px] p-[8px] relative">
          <Badge discount={item.discount} />
          <img src={item.picture[1]} alt="" />
        </div>
        <h2 className="font-bold line-clamp-2 mt-5 mb-4 lg:text-[20px]">
          {item.name}{" "}
        </h2>
      </div>
      <Link
        to={"/"}
        className="text-white bg-gray-dark font-medium 
     px-4 py-2 rounded-[8px] transition
    hover:bg-black"
      >
        Ürünü Görüntüle -{" "}
        <span className={item.discount ? "text-yellow" : "text-white"}>
          ${calcDiscount(item.price, item.discount)}
        </span>
      </Link>
    </div>
  );
};

export default Card;
