
// export default function index() {
    

//     return(
//         <div className="flex">
//             <img src={"../../../img/monuments/Podgaric/podgaric.jpg"} alt="podgaric"        className="sm:w-1/6 md:w-1/6 lg:w-1/12 h-20 " />
//             <img src={"../../../img/monuments/Kosmaj/kosmaj.png"} alt="kosmaj"              className="sm:w-1/6 md:w-1/6 lg:w-1/12 h-20 "/>
//             <img src={"../../../img/monuments/Tjentiste/Tjentiste.png"} alt="tjentiste"     className="sm:w-1/6 md:w-1/6 lg:w-1/12 h-20 "/>
//             <img src={"../../../img/monuments/Kozara/kozara.png"} alt="kozara"              className="sm:w-1/6 md:w-1/6 lg:w-1/12 h-20 "/>
//             <img src={"../../../img/monuments/Ilirska Bistrica/ilirskaBistrica.png"}        className="sm:w-1/6 md:w-1/6 lg:w-1/12 h-20 " alt="ilirskaBistrica"/>
//             <img src={"../../../img/monuments/Sisak/sisak.png"} alt="sisak"                 className="sm:w-1/6 md:w-1/6 lg:w-1/12 h-20 "/>
//             {/* <img src={"../../../img/monuments/Lepoglava/lepoglava.jpg"} alt="lepoglava"     className="md:1/6 lg:w-1/12  h-20 invisible sm:visible" />
//             <img src={"../../../img/monuments/Kragujevac/sumarice.jpg"} alt="sumarice"      className="md:1/6 lg:w-1/12  h-20 invisible sm:visible"/>
//             <img src={"../../../img/monuments/Botun/botun.jpg"} alt="botun"                 className="md:1/6 lg:w-1/12  h-20 invisible sm:visible"/>
//             <img src={"../../../img/monuments/Belcista/belcista.jpg"} alt="belcista"        className="md:1/6 lg:w-1/12  h-20 invisible sm:visible "/>
//             <img src={"../../../img/monuments/Lukovdol/lukovDol.jpg"} alt="lukovdol"        className="md:1/6 lg:w-1/12  h-20 invisible sm:visible" />
//             <img src={"../../../img/monuments/Obadov Brijeg/obadovBrijeg1.jpg"}             className="md:1/6 lg:w-1/12  h-20 invisible sm:visible" alt="obadov brijeg"/> */}
//             <img src={"../../../img/monuments/Lepoglava/lepoglava.jpg"} alt="lepoglava"     className="md:1/6 lg:w-1/12  h-20 sm:hidden md:inline xl:inline" />
//             <img src={"../../../img/monuments/Kragujevac/sumarice.jpg"} alt="sumarice"      className="md:1/6 lg:w-1/12  h-20 sm:hidden md:inline xl:inline"/>
//             <img src={"../../../img/monuments/Botun/botun.jpg"} alt="botun"                 className="md:1/6 lg:w-1/12  h-20 sm:hidden md:inline xl:inline"/>
//             <img src={"../../../img/monuments/Belcista/belcista.jpg"} alt="belcista"        className="md:1/6 lg:w-1/12  h-20 sm:hidden md:inline xl:inline"/>
//             <img src={"../../../img/monuments/Lukovdol/lukovDol.jpg"} alt="lukovdol"        className="md:1/6 lg:w-1/12  h-20 sm:hidden md:inline xl:inline" />
//             <img src={"../../../img/monuments/Obadov Brijeg/obadovBrijeg1.jpg"}             className="md:1/6 lg:w-1/12  h-20 sm:hidden md:inline xl:inline" alt="obadov brijeg"/>
//         </div>
//     )
// };









 import Image from "next/image"
export default function index() {
                                                   // lg 1024px       md 768px        sm 640px

    return(
        <div className="flex">
             <Image src={"/img/monuments/Podgaric/podgaric.jpg"} alt="podgaric"  width={500} height={500}        className="       sm:w-1/4 md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Kosmaj/kosmaj.png"} alt="kosmaj"  width={500}  height={500}             className="       sm:w-1/4 md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Tjentiste/Tjentiste.png"} alt="tjentiste" width={500} height={500}      className="       sm:w-1/4 md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Ilirska Bistrica/ilirskaBistrica.png"}  width={500} height={500}        className="       sm:w-1/4 md:w-1/12 lg:w-1/12  h-20 "      alt="ilirskaBistrica"/>
             <Image src={"/img/monuments/Sisak/sisak.png"} alt="sisak" width={500}   height={500}                className="hidden sm:block md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Lepoglava/lepoglava.jpg"} alt="lepoglava" width={500}   height={500}    className="hidden sm:block md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Kozara/kozara.png"} alt="kozara" width={500}  height={500}              className="hidden sm:block md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Kragujevac/sumarice.jpg"} alt="sumarice" width={500}  height={500}      className="hidden sm:block md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Botun/botun.jpg"} alt="botun" width={500}   height={500}                className="hidden sm:block md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Belcista/belcista.jpg"} alt="belcista" width={500}   height={500}       className="hidden sm:block md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Lukovdol/lukovDol.jpg"} alt="lukovdol" width={500}   height={500}       className="hidden sm:block md:w-1/12 lg:w-1/12  h-20 "/>
             <Image src={"/img/monuments/Obadov Brijeg/obadovBrijeg1.jpg"}  width={500}  height={500}            className="hidden sm:block md:w-1/12 lg:w-1/12  h-20 " alt="obadov brijeg"/>
        </div>
            )
        };


//md:invisible