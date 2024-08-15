import { useState } from "react";
import Filter from "../../components/filter";
import Hero from "./hero";
import List from "./list";
import Buttons from "./buttons";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Hero />
      <Buttons open={()=> setIsOpen(true)}  />
      <h1 className="text-[20px] md-[text-36px] font-semibold my-[32px]">
        Sana uygun seçenekler
      </h1>
      <div className="grid grid-cols-4 gap-5">
        <Filter isOpen={isOpen} close={() => setIsOpen(false)}/>
        <List />
      </div>
    </div>
  );
};

export default Home;
