import Image from "next/image";
import { Homecontainer, Product } from "../styles/pages/home";

import camiseta1 from "../assets/camisetas/1.png"
import camiseta2 from "../assets/camisetas/2.png"
import camiseta3 from "../assets/camisetas/3.png"
import camiseta4 from "../assets/camisetas/4.png"

export default function Home() {
  return (
    <Homecontainer>
      <Product>
        <Image src={camiseta1} alt="" width={420} height={380}/>

        <footer>
          <strong>camiseta A</strong>
          <span>R$ 50,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} alt="" width={420} height={380}/>

        <footer>
          <strong>camiseta B</strong>
          <span>R$ 55,00</span>
        </footer>
      </Product>
    </Homecontainer>
  )
}
