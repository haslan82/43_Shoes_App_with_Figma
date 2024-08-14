
import Filter from "../../components/filter"
import Hero from "./hero"
import List from "./list"


const Home = () => {
  return (
    <div >
     <Hero/>
     <h1 className="text-[20px] md-[text-36px] font-semibold my-[32px]">Sana uygun seçenekler</h1>
     <div className="grid grid-cols-4 gap-5">
      <Filter/>
      <List/>
     </div>
    </div>
  )
}

export default Home
