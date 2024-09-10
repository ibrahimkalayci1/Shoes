import Hero from "./Hero"
import List from "../../components/list"
import Filter from "../../components/filter"
import { useState } from "react"
import Buttons from "./buttons"

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div>
      <Hero />

      <h1 className="text-[20px] md:text-[26px] lg:text-[30px]
      xl:text-[36px] font-semibold mt-[24px] mb-4 md:mt-[28px] xl:mt-[32px] ">
        Sana Uygun Seçenekler
      </h1>
      
<Buttons open={() => setIsOpen(true) }/>
      <div className="grid grid-cols-4 gap-5">
        <Filter isOpen ={isOpen} close = {() => setIsOpen(false)} />
        <List />
      </div>
      </div>
  )
}

export default Home