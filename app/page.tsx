import { Commentssec, Distancesec, Herosec, Mapsec, Moresec, NumBoxessec, Projectssec, Servicesec, Whatsicon } from "@/components";

export default function Home() {
  return (
    <>
      <Herosec />
      <Moresec />
      <div className="flex w-full justify-center items-center bg-white pt-20 mb-5 ">
        <h1 className="md:text-[50px] text-[38px] " id="Servicessecid" >
          خدماتنا و منتجاتنا
        </h1>
      </div>
      <Servicesec />
      <div className="flex w-full justify-center items-center bg-black pt-10 ">
        <h1 className="md:text-[50px] text-[38px] text-white border-white border-2 border-solid px-6 rounded-xl " >
          من أعمالنا
        </h1>
      </div>
      <Projectssec />
      <Distancesec />
      <NumBoxessec />
      <Commentssec />
      <Whatsicon />
      <Mapsec />
      
    </>
  );
}

