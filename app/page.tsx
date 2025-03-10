import { Commentssec, Distancesec, Herosec, Moresec, NumBoxessec, Projectssec, Servicesec } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Herosec />
      <Moresec />
      <div className="flex w-full justify-center items-center bg-white pt-20 ">
        <h1 className="text-[50px] " id="Servicessecid" >
          خدماتنا و منتجاتنا
        </h1>
      </div>
      <Servicesec />
      <div className="flex w-full justify-center items-center bg-black pt-10 ">
        <h1 className="text-[50px] text-white " >
          من أعمالنا
        </h1>
      </div>
      <Projectssec />
      <Distancesec />
      <NumBoxessec />
      <Commentssec />
      
    </>
  );
}

