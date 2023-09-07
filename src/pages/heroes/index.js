import Header from "../../../src/components/Header";
import Navbar from "../navbar/navbar";
import { useRouter } from "next/router";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";

export default function News() {
  const router = useRouter();

  // Function to handle dropdown item click
  const handleItemClick = (url) => {
    router.push(url);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center">
        <div className="w-11/12 md:w-1/2">
          <p className="text-xl my-2 ">
            The Order of the People&apos;s Hero was a decoration bestowed by the
            Federal People&apos;s Republic of Yugoslavia and later the Socialist
            Federal Republic of Yugoslavia, primarily awarded to individuals who
            were deemed to have shown exceptional valor during World War II.
            This Order was often awarded posthumously.
          </p>
          <p className="text-lg mt-4 mb-1">
            The Order of the People&apos;s Hero was conferred upon:
          </p>
          <ul className="text-md m-3">
            <li>
              - 1,322 fighters and leaders of the National Liberation War of
              Yugoslavia,
            </li>
            <li>- 22 foreign nationals,</li>
            <li>
              - 27 military units and institutions of the National Liberation
              War of Yugoslavia,
            </li>
            <li>
              - 8 cities in the Socialist Federal Republic of Yugoslavia, and
            </li>
            <li>- 4 organizations.</li>
          </ul>
        </div>
      </div>
      <p className="text-center m-8 text-2xl">
        List of 1322 Volk Heroes of Yugoslavia
      </p>

      <div className="flex flex-col lg:flex-row justify-evenly">
        {/* left Accordion YU heroes*/}
        <Accordion
          defaultActiveKey="6"
          className="w-full lg:w-2/5 mb-4 lg:mb-0"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter A
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Stjepan Abrlić</strong> (1914-43), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                2. <strong>Mirče Acev</strong> (1915-44), declared a national
                hero on July 29, 1945.
              </p>
              <p>
                3. <strong>Vera Aceva</strong> (1919-2006), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                4. <strong>Božidar Adžija</strong> (1890-1941), declared a
                national hero on July 26, 1945.
              </p>
              <p>
                5. <strong>Niko Anđus</strong> (1912-44), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                6. <strong>Vlada Aksentijević</strong> (1916-42), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                7. <strong>Nisim Albahari</strong> (1916-92), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Veljko Aleksić</strong> (1913-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                9. <strong>Jelisaveta Andrejević Aneta</strong> (1923-43),
                declared a national hero on October 9, 1953.
              </p>
              <p>
                10. <strong>Tadija Andrić</strong> (1917-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                11. <strong>Vicko Antić</strong> (1912-99), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                12. <strong>Josip Antolović</strong> (1916-99), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                13. <strong>Milan Antončić Velebit</strong> (1918-97), awarded
                the Order of the National Hero on December 20, 1951.
              </p>
              <p>
                14. <strong>Ilija Antunović</strong> (1919-2005), awarded the
                Order of the National Hero on July 23, 1952.
              </p>
              <p>
                15. <strong>Rista Antunović Baja</strong> (1917-98), awarded the
                Order of the National Hero on July 6, 1953.
              </p>
              <p>
                16. <strong>Tadija Anušić</strong> (1896-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                16. <strong>Mihailo Apostolski</strong> (1906-87), awarded the
                Order of the National Hero on October 9, 1953.
              </p>
              <p>
                17. <strong>Mirko Arsenijević</strong> (1915-44), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                18. <strong>Borko Arsenić</strong> (1917-81), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                19. <strong>Ljupčo Arsov</strong> (1910-86), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                20. <strong>Muharem Asović</strong> (1912-43), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                21. <strong>Kiro Atanasovski</strong> (1923-44), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                22. <strong>Viktor Avbelj</strong> (1914-93), awarded the Order
                of the National Hero on December 20, 1951.
              </p>
              <p>
                23. <strong>Franc Avbelj</strong> (1914-91), awarded the Order
                of the National Hero on September 13, 1952.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="visible">
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />{" "}
              Heroes with starting letter B
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Ilija Babić</strong> (1911-1976), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                2. <strong>Nikola Babić Mika</strong> (1917-41), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                3. <strong>Petar Babić</strong> (1919-2006),awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                4. <strong>Radomir Babić</strong> (1909-96), declared a national
                hero on July 10, 1953.
              </p>
              <p>
                5. <strong>Spasenija Cana Babović</strong> (1908-77), declared a
                national hero on July 5, 1952.
              </p>
              <p>
                6. <strong>Aleksa Backović</strong> (1912-44), proclaimed a
                National Hero on December 20, 1951.
              </p>
              <p>
                7. <strong>Maksimilijan Baće</strong> (1914-2005), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                8. <strong>Vlado Bagat</strong> (1915-44), declared a national
                hero on September 10, 1948.
              </p>
              <p>
                9. <strong>Marijan Badel</strong> (1920-44), declared a national
                hero on July 6, 1944.
              </p>
              <p>
                10. <strong>Ilija Badovinac</strong> (1917-44), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                11. <strong>Đuro Baić</strong> (1921-42), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                12. <strong>Vlado Bajić</strong> (1915-2004), awarded the Order
                of the National Hero on July 23, 1952.
              </p>
              <p>
                13. <strong>Krsto Bajić</strong> (1920-44), proclaimed a
                National Hero on March 13, 1945.
              </p>
              <p>
                14. <strong>Simo Bajić</strong> (1906-42), proclaimed a National
                Hero on December 20, 1951.
              </p>
              <p>
                15.<strong> Slobodan Bajić Paja</strong> (1916-43), declared a
                national hero on July 5, 1952.
              </p>
              <p>
                16. <strong>Filip Bajković</strong> (1910-85), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                17. <strong>Miloš Bajović</strong> (1925-44), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                18. <strong>Dr. Vladimir Bakarić</strong> (1912-83), declared a
                national hero on July 23, 1952.
              </p>
              <p>
                19. <strong>Mustafa Bakija</strong> (1920-44), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                20. <strong>Mitar Bakić</strong> (1908-60), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                21. <strong>Rajka Baković</strong> (1920-41),declared a national
                hero on July 24, 1953.
              </p>
              <p>
                22. <strong>Ljubo Bakoč</strong> (1897-1942), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                23. <strong>Đuro Bakrač</strong> (1915-96), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                24. <strong>Marko Baletić</strong> (1917-43), proclaimed a
                national hero on July 10, 1952.
              </p>
              <p>
                25. <strong>Janko Balorda</strong> (1917-42), proclaimed a
                national hero on July 23, 1952.
              </p>
              <p>
                26. <strong>Mladen Balorda</strong> (1921-43), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                27. <strong>Milutin Baltić</strong> (1920-2013), awarded the
                Order of the National Hero on November 29, 1953.
              </p>
              <p>
                28. <strong>Olga Ban</strong> (1926-43), proclaimed a national
                hero on September 26, 1973.
              </p>
              <p>
                29. <strong>Ante Banina</strong> (1915-77), awarded the Order of
                the National Hero on December 20, 1951.
              </p>
              <p>
                30. <strong>Meto Barjaktari</strong> (1916-43), proclaimed a
                national hero on December 26, 1973.
              </p>
              <p>
                31.<strong>Nedeljko Barnić Žarki</strong> (1922-44), proclaimed
                a national hero on July 7, 1953.
              </p>
              <p>
                32. <strong>Simo Barović</strong> (1914-43), awarded the Order
                of the National Hero on December 20, 1951.
              </p>
              <p>
                33. <strong>Isidor Baruh</strong> (1910-41), proclaimed a
                national hero on July 6, 1953.
              </p>
              <p>
                34. <strong>Karlo Batko</strong> (1907-43), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                35. <strong>Ignjo Batrnek Mali</strong> (1923-45), proclaimed a
                national hero on July 24, 1953.
              </p>
              <p>
                36. <strong>Rade Bašić</strong> (1919-91), awarded the Order of
                the National Hero on December 20, 1951.
              </p>
              <p>
                37. <strong>dr. Aleš Bebler</strong> (1907-81), awarded the
                Order of the National Hero on July 22, 1953.
              </p>
              <p>
                38. <strong>Muharem Bekteši</strong> (1922-44), proclaimed a
                national hero on July 5, 1952.
              </p>
              <p>
                39. <strong>Marko Belinić</strong> (1911-2004), awarded the
                Order of the National Hero on July 24, 1953.
              </p>
              <p>
                40. <strong>Malči Belič</strong> (1908-43), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                41. <strong>Savo Belović</strong> (1904-42), proclaimed a
                national hero on August 7, 1942.
              </p>
              <p>
                42. <strong>Jovan Beljanski</strong> (1901-82), awarded the
                Order of the National Hero on July 7, 1953.
              </p>
              <p>
                43. <strong>Manojlo Benderać Majo</strong> (1912-42), proclaimed
                a national hero on December 20, 1951.
              </p>
              <p>
                44. <strong>Mijo Benić</strong> (1916-42), proclaimed a national
                hero on July 24, 1953.
              </p>
              <p>
                45. <strong>Mateo Benusi Cio</strong> (1906-51), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                46. <strong>Dragomir Benčić</strong> (1911-67), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                47. <strong>Jakob Bernard</strong> (1909-42), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                48. <strong>Anka Berus</strong> (1903-91), awarded the Order of
                the National Hero on July 24, 1953.
              </p>
              <p>
                49. <strong>Angel Besednjak</strong> (1914-41), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                50. <strong>Hamid Beširević</strong> (1919-43), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                51. <strong>Refik Bešlagić</strong> (1919-42), proclaimed a
                national hero on July 24, 1953.
              </p>
              <p>
                <strong>Antun Biber</strong> (1910-95), awarded the Order of the
                National Hero on November 27, 1953.
              </p>
              <p>
                52. <strong>Janez Bizjak</strong> (1911-41), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                53. <strong>Jovo Bijelić</strong> (1914-86), awarded the Order
                of the National Hero on July 23, 1952.
              </p>
              <p>
                54. <strong>Božo Bilić Marjan</strong> (1913-42), proclaimed a
                national hero on December 20, 1951.
              </p>
              <p>
                55. <strong>Ante Bilobrk</strong> (1919-43), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                56. <strong>Vojislav Biljanović</strong> (1914-72), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                57. <strong>Zlatko Biljanovski</strong> (1920-2009), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                58. <strong>Mojica Birta Zec</strong> (1916-44), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                59. <strong>Petar Biškup Veno</strong> (1918-45), proclaimed a
                national hero on December 14, 1949.
              </p>
              <p>
                60. <strong>Stanko Bjelajac</strong> (1912-2001), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                61. <strong>Mihajlo Bjelaković</strong> (1912-44), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                62. <strong>Krsto Bjeletić Krcun</strong> (1917-42), proclaimed
                a national hero on July 24, 1953.
              </p>
              <p>
                63. <strong>Nikola Bjelica</strong> (1919-44), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                64. <strong>Kosta Bjelogrlić</strong> (1900-46), proclaimed a
                national hero on July 24, 1953.
              </p>
              <p>
                65. <strong>Vera Blagojević</strong> (1920-42), proclaimed a
                national hero on July 6, 1953.
              </p>
              <p>
                66. <strong>Milan Blagojević Španac</strong> (1905-41),
                proclaimed a national hero on May 9, 1945.
              </p>
              <p>
                67. <strong>Jakov Blažević</strong> (1912-96), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                68. <strong>Edo Blažek</strong> (1920-42), proclaimed a national
                hero on November 27, 1953.
              </p>
              <p>
                69. <strong>Mate Blažina</strong> (1925-45), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                70. <strong>Antun Blažić</strong> (1916-43), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                71. <strong>Matija Blejc</strong> (1914-42), proclaimed a
                national hero on July 22, 1953.
              </p>
              <p>
                72. <strong>Stjepan Bobinec Šumski</strong> (1919-44),
                proclaimed a national hero on November 27, 1953.
              </p>
              <p>
                73. <strong>Florijan Bobić</strong> (1913-42), proclaimed a
                national hero on December 20, 1951.
              </p>
              <p>
                74. <strong>Miloš Bobičić</strong> (1914-42), proclaimed a
                national hero on December 20, 1951.
              </p>
              <p>
                75. <strong>Stane Bobnar</strong> (1912-86), awarded the Order
                of the National Hero on September 4, 1953.
              </p>
              <p>
                76. <strong>Jovan Bobot</strong> (1908-45), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                77. <strong>Vid Bodiroža Vicuka</strong> (1919-45), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                <strong>
                  78. Dragoslav Bogavac (1910-42), proclaimed a national hero on
                  July 6, 1953.
                </strong>
              </p>
              <p>
                79. <strong>Petar Bogdan Peko</strong> (1915-), awarded the
                Order of the National Hero on September 27, 1953.
              </p>
              <p>
                80. <strong>Vojislav Bogdanović Seljo</strong> (1903-43),
                proclaimed a national hero on November 27, 1953.
              </p>
              <p>
                81. <strong>Gedeon Bogdanović</strong> (1912-87), awarded the
                Order of the National Hero on July 24, 1953.
              </p>
              <p>
                82. <strong>Dimitar Bogoevski</strong> (1919-42), proclaimed a
                national hero on August 1, 1949.
              </p>
              <p>
                83. <strong>Uroš Bogunović</strong> (1914-2006), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                84. <strong>Aleksa Bojović Brko</strong> (1906-43), proclaimed a
                national hero on December 20, 1951.
              </p>
              <p>
                85. <strong>Danilo Bojović</strong> (1909-43), proclaimed a
                national hero on July 11, 1945.
              </p>
              <p>
                86. <strong>Dušan Bojović</strong> (1914-43), proclaimed a
                national hero on December 20, 1951.
              </p>
              <p>
                87. <strong>Radoš Bojović</strong> (1919-43), proclaimed a
                national hero on July 7, 1953.
              </p>
              <p>
                88. <strong>Nikola Bokan</strong> (1918-44), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                89. <strong>Jože Boldan Silni</strong> (1915-94), awarded the
                Order of the National Hero on July 21, 1953.
              </p>
              <p>
                90. <strong>Bogdan Bolta</strong> (1923-44), proclaimed a
                national hero on March 13, 1945.
              </p>
              <p>
                91. <strong>Stevo Boljević</strong> (1918-43), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                92. <strong>Miodrag Bondžulić</strong> (1919-43), proclaimed a
                national hero on March 13, 1945.
              </p>
              <p>
                93. <strong>Petar Borojević</strong> (1916-82), awarded the
                Order of the National Hero on February 27, 1948.
              </p>
              <p>
                94. <strong>Jože Borštnar</strong> (1915-92), awarded the Order
                of the National Hero on July 15, 1952.
              </p>
              <p>
                95. <strong>Persa Bosanac</strong> (1922-43), proclaimed a
                national hero on July 23, 1952.
              </p>
              <p>
                96. <strong>Pero Bosić</strong> (1922-45), proclaimed a national
                hero on November 27, 1953.
              </p>
              <p>
                97. <strong>Kosta Bosnić</strong> (1922-44), proclaimed a
                national hero on December 20, 1951.
              </p>
              <p>
                98. <strong>Milka Bosnić</strong> (1928-44), proclaimed a
                national hero on May 17, 1974.
              </p>
              <p>
                99. <strong>Rajko Bosnić</strong> (1920-42), proclaimed a
                national hero on July 24, 1953.
              </p>
              <p>
                100. <strong>Dr. Milo Bošković</strong> (1911-44), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                101. <strong>Jefto Bošnjak</strong> (1918-42), proclaimed a
                national hero on July 24, 1953.
              </p>
              <p>
                102. <strong>Andrija Božanić</strong> (1906-89), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                103. <strong>Petar Božinovski</strong> (1920-70), awarded the
                Order of the National Hero on July 30, 1952.
              </p>
              <p>
                104. <strong>Nikola Božić</strong> (1910-42), proclaimed a
                national hero on July 24, 1953.
              </p>
              <p>
                105. <strong>Božo Božović</strong> (1907-93), awarded the Order
                of the National Hero on July 10, 1953.
              </p>
              <p>
                106. <strong>Vlado Božović</strong> (1915-2010), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                107. <strong>Vukosav Božović</strong> (1916-43), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                108. <strong>Dragoljub Božović Žuća</strong> (1922-43),
                proclaimed a national hero on December 20, 1951.
              </p>
              <p>
                109. <strong>Radislav Božović Raško</strong> (1910-42),
                proclaimed a national hero on December 20, 1951.
              </p>
              <p>
                110. <strong>Radomir Božović Raco</strong> (1915-2000), awarded
                the Order of the National Hero on November 27, 1953.
              </p>
              <p>
                111. <strong>Edo Brajnik Štefan</strong> (1922-83), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                112. <strong>Petar Brajović</strong> (1915-91), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                113. <strong>Mirko Bračič</strong> (1915-43), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                114. <strong>Mašo Brguljan</strong> (1911-42), proclaimed a
                national hero on July 13, 1953.
              </p>
              <p>
                115. <strong>Marijan Brecelj Miha</strong> (1910-89), awarded
                the Order of the National Hero on November 27, 1953.
              </p>
              <p>
                116. <strong>Toma Breulj Vuja</strong> (1916-85), awarded the
                Order of the National Hero on October 9, 1953.
              </p>
              <p>
                117. <strong>Ljubo Brešan Feđa</strong> (1913-43), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                118. <strong>Zvonko Brkić</strong> (1912-77), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                119. <strong>Rade Brkić</strong> (1913-92), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                120. <strong>Hasan Brkić</strong> (1913-65), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                121. <strong>Milenko Brković Crni</strong> (1912-41), proclaimed
                a national hero on July 5, 1951.
              </p>
              <p>
                122. <strong>Savo Brković</strong> (1906-91), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                123. <strong>Janko Brodarič</strong> (1922-43), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                124. <strong>Živko Bronzić</strong> (1921-43), proclaimed a
                national hero on April 30, 1943.
              </p>
              <p>
                125. <strong>Josip Broz Tito</strong> (1892-1980), awarded the
                Order of the National Hero three times: on November 18, 1944,
                May 15, 1972, and May 16, 1976.
              </p>
              <p>
                126. <strong>Leo Bruk</strong> (1910-43), proclaimed a national
                hero on July 24, 1953.
              </p>
              <p>
                127. <strong>Nikola Bubalo</strong> (1921-43), proclaimed a
                national hero on December 20, 1951.
              </p>
              <p>
                128. <strong>Stjepan Bubanić</strong> (1913-43), proclaimed a
                national hero on July 24, 1953.
              </p>
              <p>
                129. <strong>Viktor Bubanj</strong> (1918-72), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                130. <strong>Dragan Bubić</strong> (1911-41), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                131. <strong>Adem Buć</strong> (1914-43), proclaimed a national
                hero on July 26, 1949.
              </p>
              <p>
                132. <strong>Divko Budak</strong> (1897-41), proclaimed a
                national hero on July 24, 1953.
              </p>
              <p>
                133. <strong>Đuzepe Budicin Pino</strong> (1911-44), proclaimed
                a national hero on September 26, 1973.
              </p>
              <p>
                134. <strong>Boško Buha</strong> (1926 - 1943), proclaimed a
                national hero on December 20, 1951.
              </p>
              <p>
                135. <strong>Ivica Bujić</strong> (1913-42), proclaimed a
                national hero on November 20,1951.
              </p>
              <p>
                136. <strong>Vladimir Bukilić Pop Mićo</strong> (1919-44),
                proclaimed a national hero on October 9, 1953.
              </p>
              <p>
                137. <strong>Franc Bukovec</strong> (1910-42), proclaimed a
                national hero on July 15, 1952.
              </p>
              <p>
                138. <strong>Miroslav Bukumirović Bukum</strong> (1914-42),
                proclaimed a national hero on July 7, 1953.
              </p>
              <p>
                139. <strong>Rade Bulat</strong> (1920-2013), awarded the Order
                of the National Hero on July 24, 1953.
              </p>
              <p>
                140. <strong>Uroš Bulatović</strong> (1918-88), awarded the
                Order of the National Hero on October 9, 1953.
              </p>
              <p>
                141. <strong>Savo Burić</strong> (1915-63), awarded the Order of
                the National Hero on December 20, 1951.
              </p>
              <p>
                142. <strong>Stanko Burić</strong> (1920-43), proclaimed a
                national hero on July 7, 1953.
              </p>
              <p>
                143. <strong>Marija Bursać</strong> (1920-43), proclaimed a
                national hero on October 15, 1943.
              </p>
              <p>
                144. <strong>Rifat Burdžević Tršo</strong> (1913-42), proclaimed
                a national hero on September 25, 1944.
              </p>
              <p>
                145. <strong>Mahmut Bušatlija Buš</strong> (1914-41), proclaimed
                a national hero on July 26, 1945.
              </p>
              <p>
                146. <strong>Anka Butorac</strong> (1905-42), proclaimed a
                national hero on December 14, 1949.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter C
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Nikola Car Crni</strong> (1910-42), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                2. <strong>Pero Car</strong> (1920-85), awarded the Order of the
                National Hero on July 23, 1953.
              </p>
              <p>
                3. <strong>Dragan Cerović</strong> (1919-42), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                4. <strong>Komnen Cerović</strong> (1916-2000), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                5. <strong>Andrej Cetinski</strong> (1921-98), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                6. <strong>Todor Cipovski</strong> (1920-44), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                7. <strong>Krste Crvenkovski</strong> (1921-2001), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Vjećeslav Cvetko Flores</strong> (1917-41), declared
                a national hero on July 16, 1951.
              </p>
              <p>
                9. <strong>Marijan Cvetković</strong> (1920-90), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                10. <strong>Nikola Cvijetić</strong> (1913-91), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                11. <strong>Miljenko Cvitković</strong> (1914-43), declared a
                national hero on July 22, 1949.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter Č
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Marijan Čavić</strong> (1915-41), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                2. <strong>Miloš Čavić</strong> (1918-42), declared a national
                hero on July 5, 1952.
              </p>
              <p>
                3. <strong>Đuro Čagorović</strong> (1904-87), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                4. <strong>Rudi Čajavec</strong> (1911-42), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                5. <strong>Miodrag Čajetinac Čajka</strong> (1921-43), declared
                a national hero on July 7, 1953.
              </p>
              <p>
                6. <strong>Milan Čakširan</strong> (1908-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                7. <strong>Dušan Čalić</strong> (1918-93), awarded the Order of
                the National Hero on July 23, 1952.
              </p>
              <p>
                8. <strong>Jusuf Čevro</strong> (1914-41), declared a national
                hero on July 23, 1952.
              </p>
              <p>
                9. <strong>Zdravko Čelar</strong> (1917-42), declared a national
                hero on August 7, 1942.
              </p>
              <p>
                10. <strong>Milovan Čelebić</strong> (1914-43), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                11. <strong>Milan Česnik</strong> (1920-42), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                12. <strong>Tončka Čeč Olga</strong> (1896-1943), declared a
                national hero on July 21, 1953.
              </p>
              <p>
                13. <strong>Jandro Čipor</strong> (1902-41), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                14. <strong>Janko Čmelik</strong> (1905-42), declared a national
                hero on October 25, 1943.
              </p>
              <p>
                15. <strong>Rodoljub Čolaković</strong> (1900-83), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                16. <strong>Savo Čolović</strong> (1911-44), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                17. <strong>Stevan Čolović</strong> (1910-41), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                18. <strong>Jordan Čopela</strong> (1912-42), declared a
                national hero on August 1, 1949.
              </p>
              <p>
                19. <strong>Bogoljub Čukić</strong> (1913-43), declared a
                national hero on March 13, 1945.
              </p>
              <p>
                20. <strong>Čedomir Čupić Ljubo</strong> (1913-42), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                21. <strong>Mihajlo Čvoro</strong> (1907-42), declared a
                national hero on December 20, 1951.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter Ć
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Mujo Ćemalović Ćimba</strong> (1919-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                2. <strong>Vlado Ćetković</strong> (1909-44), declared a
                national hero on August 13, 1945.
              </p>
              <p>
                3. <strong>Jelena Ćetković</strong> (1916-43), declared a
                national hero on July 5, 1952.
              </p>
              <p>
                4. <strong>Petar Pero Ćetković</strong> (1907-43), declared a
                national hero on April 30, 1943.
              </p>
              <p>
                5. <strong>Janko Ćirović</strong> (1904-70), awarded the Order
                of the National Hero on July 13, 1953.
              </p>
              <p>
                6. <strong>Radivoj Ćirpanov</strong> (1909-41), declared a
                national hero on October 25, 1943.
              </p>
              <p>
                7. <strong>Dušan Ćorković</strong> (1921-80), awarded the Order
                of the National Hero on July 23, 1952.
              </p>
              <p>
                8. <strong>Jovan Ćorović</strong> (1913-42), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                9. <strong>Dušan Ćubić</strong> (1919-45), declared a national
                hero on July 5, 1951.
              </p>
              <p>
                10. <strong>Avdo Ćuk</strong> (1920-43), declared a national
                hero on July 23, 1952.
              </p>
              <p>
                11. <strong>Milan Ćup</strong> (1917-44), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                12. <strong>Pero Ćuskić</strong> (1914-42), declared a national
                hero on December 20, 1951.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter D
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Božidar Dakić</strong> (1909-41), declared a national
                hero on April 27, 1946.
              </p>
              <p>
                2. <strong>Makso Dakić</strong> (1913-86), awarded the Order of
                the National Hero on July 24, 1953.
              </p>
              <p>
                3. <strong>Milisav Dakić</strong> (1912-43), declared a national
                hero on July 12, 1949.
              </p>
              <p>
                4. <strong>Radoje Dakić</strong> (1911-46), declared a national
                hero on July 12, 1949.
              </p>
              <p>
                5. <strong>Đore Damevski</strong> (1922-95), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                6. <strong>Danilo Damjanović</strong> (1915-90), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                7. <strong>Božidarka Damnjanović-Marković Kika</strong>
                (1920-96), awarded the Order of the National Hero on October 9,
                1953.
              </p>
              <p>
                8. <strong>Uglješa Danilović</strong> (1913-), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                9. <strong>Peko Dapčević</strong> (1913-99), awarded the Order
                of the National Hero on October 22, 1945.
              </p>
              <p>
                10. <strong>Stjepan Debeljak Bil</strong> (1908-68), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                11. <strong>Boško Dedejić Pop</strong> (1907-44), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                12. <strong>Anton Dežman Tonček</strong> (1920-77), awarded the
                Order of the National Hero on July 15, 1952.
              </p>
              <p>
                13. <strong>Aleksa Dejović</strong> (1922-43), declared a
                national hero on April 30, 1943.
              </p>
              <p>
                14. <strong>Branko Deletić</strong> (1915-42), declared a
                national hero on July 12, 1949.
              </p>
              <p>
                15. <strong>Rastislav Delpin</strong> (1920-56), awarded the
                Order of the National Hero on September 5, 1953.
              </p>
              <p>
                16. <strong>Nikola Demonja</strong> (1919-44), declared a
                national hero on June 19, 1945.
              </p>
              <p>
                17. <strong>Ivan Denac</strong> (1917-), awarded the Order of
                the National Hero on July 24, 1953.
              </p>
              <p>
                18. <strong>Karel Destovnik Kajuh</strong> (1922-44), declared a
                national hero on July 21, 1953.
              </p>
              <p>
                19. <strong>Stevan Divnin</strong> (1895-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                20. <strong>Milorad Dimanić</strong> (1912-44), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                21. <strong>Božidar Dimitrijević Kozica</strong> (1914-44),
                declared a national hero on July 6, 1953.
              </p>
              <p>
                22. <strong>Đura Dimitrijević</strong> (1920-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                23. <strong>Nada Dimić</strong> (1923-42), declared a national
                hero on July 7, 1951.
              </p>
              <p>
                24. <strong>Cvetan Dimov</strong> (1910-42), declared a national
                hero on July 29, 1945.
              </p>
              <p>
                25. <strong>Đurđelina Đuka Dinić</strong> (1913-43), declared a
                national hero on July 6, 1945.
              </p>
              <p>
                26. <strong>Mustafa Dovadžija</strong> (1921-42), declared a
                national hero on July 27, 1951.
              </p>
              <p>
                27. <strong>Xhevdet Doda</strong> (1906-44), declared a national
                hero on December 26, 1973.
              </p>
              <p>
                28. <strong>Petar Dokić</strong> (1917-42), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                29. <strong>Vladimir Dolničar</strong> (1919-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                30. <strong>Novica Domazet</strong> (1913-43), declared a
                national hero on July 26, 1945.
              </p>
              <p>
                31. <strong>Robert Domani</strong> (1918-42), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                32. <strong>Ilija Došen</strong> (1914-), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                33. <strong>Stevo Došen</strong> (1919-44), declared a national
                hero on December 20, 1950.
              </p>
              <p>
                34. <strong>Rezeka Dragar</strong> (1913-41), declared a
                national hero on July 15, 1952.
              </p>
              <p>
                35. <strong>Simica Dragić</strong> (1911-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                36. <strong>Dara Dragišić</strong> (1921-44), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                37. <strong>Vojin Dragović</strong> (1914-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                38. <strong>Svetozar Dragović Toza</strong> (1910-41), declared
                a national hero on July 5, 1951.
              </p>
              <p>
                39. <strong>Spasoje Dragović</strong> (1919-43), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                40. <strong>Dragomir Dražević</strong> (1887-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                41. <strong>Spaso Drakić</strong> (1904-84), awarded the Order
                of the National Hero on July 10, 1952.
              </p>
              <p>
                42. <strong>Petar Drapšin</strong> (1914-45), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                43. <strong>Savo Drljević</strong> (1912-94), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                44. <strong>Andreana Družina</strong> (1920-), awarded the Order
                of the National Hero on July 22, 1953.
              </p>
              <p>
                45. <strong>Gojko Drulović</strong> (1912-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                46. <strong>Čedomir Drulović</strong> (1912-92), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                47. <strong>Dušan Dugalić</strong> (1910-42), declared a
                national hero on March 13, 1945.
              </p>
              <p>
                48. <strong>Momčilo Dugalić</strong> (1918-2014), awarded the
                Order of the National Hero on July 5, 1952.
              </p>
              <p>
                49. <strong>Jakov Dugandžić</strong> (1905-41), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                50. <strong>Ratko Dugonjić</strong> (1916-87), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                51. <strong>Veljko Dugošević</strong> (1910-41), declared a
                national hero on May 9, 1945.
              </p>
              <p>
                52. <strong>Branko Dude</strong> (1913-97), awarded the Order of
                the National Hero on December 20, 1951.
              </p>
              <p>
                53. <strong>Dragojlo Dudić</strong> (1887-41), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                54. <strong>Miloš Dudić</strong> (1915-44), declared a national
                hero on September 25, 1944.
              </p>
              <p>
                55. <strong>Miloš Dujić</strong> (1913-42), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                56. <strong>Stevan Dukić</strong> (1920-42), declared a national
                hero on July 6, 1953.
              </p>
              <p>
                57. <strong>Đuro Dulić</strong> (1912-2006), awarded the Order
                of the National Hero on July 24, 1953.
              </p>
              <p>
                58. <strong>Kata Dumbović-Kovačić</strong> (1903-41), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                59. <strong>Ljubo Dumičić</strong> (1920-43), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                60. <strong>Emin Duraku</strong> (1917-42), declared a national
                hero on July 7, 1952.
              </p>
              <p>
                61. <strong>Jošo Durbaba</strong> (1920-2012), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                62. <strong>Hajdar Dushi</strong> (1916-44), declared a national
                hero on December 27, 1973.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />{" "}
              Heroes with starting letter Dž
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Pavle Džever</strong> (1919-43), proclaimed a
                national hero on November 27, 1953.
              </p>
              <p>
                2. <strong>Ragib Džindo</strong> (1923-44), proclaimed a
                national hero on July 5, 1951.
              </p>
              <p>
                3. <strong>Jusuf Džonlić</strong> (1920-44), proclaimed a
                national hero on December 20, 1951.
              </p>
              <p>
                4. <strong>Živko Džuver</strong> (1912-44), proclaimed a
                national hero on July 13, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter Đ
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Djuro Djapic</strong> (1920-43), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                2. <strong>Stipe Djerek</strong> (1912-42), declared a national
                hero on July 27, 1953.
              </p>
              <p>
                3. <strong>Alexa Djilas Bećo</strong> (1906-41), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                4. <strong>Milovan Djilas</strong> (1911-95), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                5. <strong>Danilo Djokic</strong> (1909-41), declared a national
                hero on November 6, 1942.
              </p>
              <p>
                6. <strong>Branko Djonović</strong> (1916-44), declared a
                national hero on April 30, 1946.
              </p>
              <p>
                7. <strong>Vladimir Djordjević</strong> (1905-41), declared a
                national hero on May 9, 1945.
              </p>
              <p>
                8. <strong>Dragoslav Djordjević Gosa</strong> (1919-49),
                declared a national hero on November 26, 1955.
              </p>
              <p>
                9. <strong>Dragutin Djordjević Alija</strong> (1920-2008),
                awarded the Order of the National Hero on November 27, 1953.
              </p>
              <p>
                10. <strong>Stevan Djordjević Novak</strong> (1919-43), declared
                a national hero on November 27, 1953.
              </p>
              <p>
                11. <strong>Vuksan Djukic</strong> (1916-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                12. <strong>Drago Djukic</strong> (1920-81), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                13. <strong>Pane Djukic Limar</strong> (1922-52), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                14. <strong>Šćepan Djukic</strong> (1914-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                15. <strong>Radomir Djurakic</strong> (1920-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                16. <strong>Vladan Djuranović</strong> (1924-44), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                17. <strong>Vojin Djurasinović</strong> (1919-82), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                18. <strong>Vaso Djurdjević Turčin</strong> (1923-44), declared
                a national hero on December 20, 1951.
              </p>
              <p>
                19. <strong>Živan Djurdjević</strong> (1891-1943), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                20. <strong>Želimir Djuric Željo</strong> (1919-41), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                21. <strong>Mihailo Djuric</strong> (1917-42), declared a
                national hero on September 9, 1942.
              </p>
              <p>
                22. <strong>Blazo Djuricic</strong> (1914-91), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                23. <strong>Bosko Djurickovic</strong> (1914-2003), awarded the
                Order of the National Hero on July 10, 1952.
              </p>
              <p>
                24. <strong>Nikola Djurković</strong> (1908-43), declared a
                national hero on July 11, 1945.
              </p>
              <p>
                25. <strong>Vasilije Đ. Djurović Vako</strong> (1915-43),
                declared a national hero on July 11, 1945.
              </p>
              <p>
                26. <strong>Vasilije S. Đurović Žarki</strong> (1921-44),
                declared a national hero on July 6, 1953.
              </p>
              <p>
                27. <strong>Veselin Đurović</strong> (1924-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                28. <strong>Vidoje Đurović</strong> (1912-42), declared a
                national hero on July 5, 1952.
              </p>
              <p>
                29. <strong>Marko Đurović</strong> (1920-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                30. <strong>Milinko Đurović</strong> (1915-88), awarded the
                Order of the National Hero on July 10, 1952.
              </p>
              <p>
                31. <strong>Milisav Đurović</strong> (1914-44), declared a
                national hero on December 20, 1951.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter E
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Marko Ećimović</strong> (1909-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                2. <strong>Dušan Egić</strong> (1916-85), awarded the Order of
                the National Hero on July 24, 1953.
              </p>
              <p>
                3. <strong>Milan Egić</strong> (1911-43), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                4. <strong>Obrad Egić</strong> (1908-86), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                5. <strong>Ernest Ejper</strong> (1914-42), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                6. <strong>Ilija Engel</strong> (1912-44), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                7. <strong>Savo Eraković Strahinja</strong> (1921-44), declared
                a national hero on September 9, 1953.
              </p>
              <p>
                8. <strong>Ovadija Estreja Mara</strong> (1922-44), declared a
                national hero on October 11, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter F
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Anton Ferijančič Zvonko</strong> (1915-.), awarded
                the Order of the National Hero on November 27, 1953.
              </p>
              <p>
                2. <strong>Ahmet Fetahagić</strong> (1913-44.), declared a
                national hero on September 10, 1944.
              </p>
              <p>
                3. <strong>Mirko Fiket</strong> (1899-1976.), awarded the Order
                of the National Hero on July 24, 1953.
              </p>
              <p>
                4. <strong>Mirko Filipović</strong> (1912-44.), declared a
                national hero on July 26, 1949.
              </p>
              <p>
                5. <strong>Stjepan Stevo Filipović</strong> (1916-42.), declared
                a national hero on December 14, 1949.
              </p>
              <p>
                6. <strong>Čede Filipovski Dame</strong> (1923-45.), declared a
                national hero on August 1, 1949.
              </p>
              <p>
                7. <strong>Drago Flis Strela</strong> (1921-.), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Rifat Frenjo</strong> (1922-43.), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                9. <strong>Stjepan Funarić</strong> (1921-79.), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter H
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Mithat Haćam</strong> (1917-42), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                2. <strong>Halil Hadžimurtezić</strong> (1915-2007), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                3. <strong>Kasim Hadžić</strong> (1904-42), declared a national
                hero on July 26, 1949.
              </p>
              <p>
                4. <strong>Milenko Hadžić</strong> (1902-41), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                5. <strong>Zenel Hajdini</strong> (1910-42), declared a national
                hero on October 9, 1953.
              </p>
              <p>
                6. <strong>Hamzo Hamzić</strong> (1924-44), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                7. <strong>Rade Hamović</strong> (1916-2009), awarded the Order
                of the National Hero on July 23, 1952.
              </p>
              <p>
                8. <strong>Ivan Hariš</strong> (1903-89), awarded the Order of
                the National Hero on September 25, 1944.
              </p>
              <p>
                9. <strong>Albin Herljević</strong> (1916-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                10. <strong>Franjo Herljević</strong> (1915-98), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                11. <strong>Jože Hermanko</strong> (1901-41), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                12. <strong>Nikola Hećimović Bracija</strong> (1920-44),
                declared a national hero on December 20, 1951.
              </p>
              <p>
                13. <strong>Avdo Hodžić</strong> (1921-43), declared a national
                hero on July 5, 1951.
              </p>
              <p>
                14. <strong>Husein Hodžić</strong> (1914-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                15. <strong>Većeslav Holjevac</strong> (1917-70), awarded the
                Order of the National Hero on July 23, 1951.
              </p>
              <p>
                16. <strong>Alojz Hohkraut</strong> (1901-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                17. <strong>Fadil Hoxha</strong> (1916-2001), awarded the Order
                of the National Hero on July 6, 1953.
              </p>
              <p>
                18. <strong>Janez Hribar</strong> (1918-78), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                19. <strong>Janez Hribar Tone</strong> (1909-67), awarded the
                Order of the National Hero on July 21, 1953.
              </p>
              <p>
                20. <strong>Rudolf Hribernik</strong> (1921-2002), awarded the
                Order of the National Hero on July 21, 1953.
              </p>
              <p>
                21. <strong>Ivan Hrovat</strong> (1915-70), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                22. <strong>Avdo Humo</strong> (1914-83), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter I
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Mahmut Ibrahimpašić Mašo</strong> (1922-44.),
                declared a national hero on November 15, 1944.
              </p>
              <p>
                2. <strong>Ljubo Ilić</strong> (1905-94.), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                3. <strong>Milan Ilić Čiča</strong> (1886-42.), declared a
                national hero on September 25, 1944.
              </p>
              <p>
                4. <strong>Milan S. Ilić</strong> (1921-42.), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                5. <strong>Savo Ilić</strong> (1914-43.), declared a national
                hero on July 10, 1953.
              </p>
              <p>
                6. <strong>Rade Iršič</strong> (1910-41.), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                7. <strong>Vojo Ivanović</strong> (1914-80.), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Dr. Dragiša Ivanović</strong> (1914-2001.), awarded
                the Order of the National Hero on November 27, 1953.
              </p>
              <p>
                9. <strong>Milun Ivanović</strong> (1910-43.), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                10. <strong>Petar Ivanović Perica</strong> (1925-45.), declared
                a national hero on December 20, 1951.
              </p>
              <p>
                11. <strong>Toma Ivanović Mačkatovac</strong> (1923-43.),
                declared a national hero on October 9, 1953.
              </p>
              <p>
                12. <strong>Vojislav Ivetić</strong> (1920-43.), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                13. <strong>Antonije Ivić</strong> (1919-44.), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                14. <strong>Ljubomir Ivković Šuca</strong> (1910-83.), awarded
                the Order of the National Hero on October 9, 1953.
              </p>
              <p>
                15. <strong>Obren Ivković</strong> (1911-72.), awarded the Order
                of the National Hero on July 24, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter J
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Savka Javorina-Vujović</strong> (1918-2002), was
                awarded the Order of the People&apos;s Hero on October 9, 1953.
              </p>
              <p>
                2. <strong>Ante Jakić</strong> (1914-1942), was proclaimed a
                People&apos;s Hero on July 27, 1953.
              </p>
              <p>
                3. <strong>Velimir Jakić</strong> (1911-1946), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                4. <strong>Albert Jakopič</strong> (1914-1996), was awarded the
                Order of the People&apos;s Hero on July 6, 1945.
              </p>
              <p>
                5. <strong>Pavle Jakšić</strong> (1913-2005), was awarded the
                Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                6. <strong>Vida Janežić Vilma Lučka</strong> (1914-1944), was
                proclaimed a People&apos;s Hero on July 22, 1953.
              </p>
              <p>
                7. <strong>Vlado Janić Capo</strong> (1904-1991), was awarded
                the Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                8. <strong>Grga Jankes</strong> (1906-1974), was awarded the
                Order of the People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                9. <strong>Blagoja Jankov Mučeto</strong> (1911-1944), was
                proclaimed a People&apos;s Hero on October 11, 1951.
              </p>
              <p>
                10. <strong>Blažo Janković</strong> (1910-1996), was awarded the
                Order of the People&apos;s Hero on July 10, 1953.
              </p>
              <p>
                11. <strong>Boško Janković</strong> (1910-1943), was proclaimed
                a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                12. <strong>Veljko Janković</strong> (1911-1974), was awarded
                the Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                13. <strong>Gliša Janković</strong> (1913-1944), was proclaimed
                a People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                14. <strong>Jovo Janković</strong> (1919-1942), was proclaimed a
                People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                15. <strong>Ravijojla Janković Rava</strong> (1919-1944), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                16. <strong>Filip Janković</strong> (1886-1942), was proclaimed
                a People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                17. <strong>Lizika Jančar Majda</strong> (1919-1943), was
                proclaimed a People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                18. <strong>Rade Janjanin</strong> (1919-1943), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                19. <strong>Radislav Janjićijević</strong> (1917-1943), was
                proclaimed a People&apos;s Hero on July 6, 1953.
              </p>
              <p>
                20. <strong>Obren Janjušević</strong> (1923-1944), was
                proclaimed a People&apos;s Hero on July 7, 1953.
              </p>
              <p>
                21. <strong>Danilo Jauković</strong> (1918-1977), was awarded
                the Order of the People&apos;s Hero on March 13, 1945.
              </p>
              <p>
                22. <strong>Suljo Jahić</strong> (1922-1942), was proclaimed a
                People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                23. <strong>Fadil Jahić Španac</strong> (1910-1942), was
                proclaimed a People&apos;s Hero on March 13, 1945.
              </p>
              <p>
                24. <strong>Radule Jevrić</strong> (1911-1942), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                25. <strong>Mašo Jelić</strong> (1908-1944), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                26. <strong>Milovan Jelić</strong> (1914-1942), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                27. <strong>Dušan Jereb</strong> (1908-1943), was proclaimed a
                People&apos;s Hero on July 21, 1953.
              </p>
              <p>
                28. <strong>Dušan Jerković</strong> (1914-1941), was proclaimed
                a People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                29. <strong>Mate Jerković</strong> (1915-1980), was awarded the
                Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                30. <strong>Drago Jerman</strong> (1919-1998), was awarded the
                Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                31. <strong>Mirko Jerman</strong> (1912-1987), was awarded the
                Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                32. <strong>Predrag Jeftić</strong> (1913-1943), was proclaimed
                a People&apos;s Hero on October 25, 1943.
              </p>
              <p>
                33. <strong>Dušan Ječmenić</strong> (1911-1943), was proclaimed
                a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                34. <strong>Milan Ješić Ibra</strong> (1914-1986), was awarded
                the Order of the People&apos;s Hero on October 2, 1953.
              </p>
              <p>
                35. <strong>Đoko Jovanić</strong> (1917-2000), was awarded the
                Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                36. <strong>Rade Jovanić</strong> (1913-1943), was proclaimed a
                People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                37. <strong>Blažo Jovanović</strong> (1907-1976), was awarded
                the Order of the People&apos;s Hero on July 10, 1952.
              </p>
              <p>
                38. <strong>Božidar Jovanović</strong> (1919-1998), was awarded
                the Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                39. <strong>Žikica Jovanović Španac</strong> (1914-1942), was
                proclaimed a People&apos;s Hero on July 6, 1945.
              </p>

              <p>
                40.<strong> Zdravko Jovanović</strong> (1909-1943), was
                proclaimed a People&apos;s Hero on July 6, 1953.
              </p>
              <p>
                41.<strong> Isa Jovanović</strong> (1906-1983), was awarded the
                Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                42.<strong> Josip Jovanović</strong> (1917-1942), was proclaimed
                a People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                43.<strong> Mirko Jovanović</strong> (1923-1977), was awarded
                the Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                44.<strong> Miroslav Jovanović</strong> (1915-1943), was
                proclaimed a People&apos;s Hero on December 6, 1953.
              </p>
              <p>
                45.<strong> Petar V. Jovanović</strong> (1911-1944), was
                proclaimed a People&apos;s Hero on July 6, 1953.
              </p>
              <p>
                46.<strong> Petar M. Jovanović</strong> (1917-1943), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                47.<strong> Rade Jovanović</strong> (1904-1941), was proclaimed
                a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                48.<strong> Radivoje Jovanović Bradonja</strong> (1918-2000),
                was awarded the Order of the People&apos;s Hero on December 15,
                1949.
              </p>
              <p>
                49.<strong> Radovan Jovanović</strong> (1917-1944), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                50.<strong> Radoje Jovanović</strong> (1916-1943), was
                proclaimed a People&apos;s Hero on July 10, 1951.
              </p>
              <p>
                51.<strong> Sava Jovanović Sirogojno</strong> (1926-1944), was
                proclaimed a People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                52.<strong> Stevan Jovanović Stevica</strong> (1916-1941), was
                proclaimed a People&apos;s Hero on December 14, 1949.
              </p>
              <p>
                53.<strong> Ilija Jovanovski Cvetan</strong> (1921-1944), was
                proclaimed a People&apos;s Hero on August 2, 1952.
              </p>
              <p>
                54.<strong> Milorad Jovančević</strong> (1916-1942), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                55.<strong> Ratomir Jović</strong> (1915-1944), was proclaimed a
                People&apos;s Hero on October 9, 1953.
              </p>
              <p>
                56.<strong> Slobodan Jović</strong> (1918-1944), was proclaimed
                a People&apos;s Hero on April 30, 1946.
              </p>
              <p>
                57.<strong> Pavle Jovićević</strong> (1910-1985), was awarded
                the Order of the People&apos;s Hero on July 7, 1953.
              </p>
              <p>
                58.<strong> Petar Jovićević</strong> (1913-1941), was proclaimed
                a People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                59.<strong> Olga Jovičić</strong> (1920-1942), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                60.<strong> Ratko Jovičić</strong> (1919-1991), was awarded the
                Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                61.<strong> Desimir Jovović</strong> (1905-1985), was awarded
                the Order of the People&apos;s Hero on July 7, 1953.
              </p>
              <p>
                62.<strong> Rade Jovčevski</strong> (1919-1943), was proclaimed
                a People&apos;s Hero on October 8, 1953.
              </p>
              <p>
                63.<strong> Milan Joka</strong> (1922-1991), was awarded the
                Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                64.<strong> Marko Jokić</strong> (1914-1944), was proclaimed a
                People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                65.<strong> Savo Joksimović</strong> (1913-1980), was awarded
                the Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                66.<strong> Ante Jonić</strong> (1918-1942), was proclaimed a
                People&apos;s Hero on August 7, 1942.
              </p>
              <p>
                67.<strong> Josif Josifovski Sveštarot</strong> (1915-1943), was
                proclaimed a People&apos;s Hero on October 11, 1951.
              </p>
              <p>
                68.<strong> Kuzman Josifovski Pitu</strong> (1915-1944), was
                proclaimed a People&apos;s Hero on August 2, 1945.
              </p>
              <p>
                69.<strong> Vera Jocić</strong> (1923-1944), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                70.<strong> Radislav Jugović</strong> (1915-1943), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                71.<strong> Martin Južna</strong> (1919-1943), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                72.<strong> Ante Jurjević Baja</strong> (1913-1994), was awarded
                the Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                73.<strong> Josip Jutriša</strong> (1920-1944), was proclaimed a
                People&apos;s Hero on February 9, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter K
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1.<strong> Svetko Kačar Kačo</strong> (1917-1944), was
                proclaimed a People&apos;s Hero on July 5, 1951.
              </p>
              <p>
                2.<strong> Savo Kadović</strong> (1919-1944), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                3.<strong> Jože Kadunc</strong> (1925-1944), was proclaimed a
                People&apos;s Hero on September 13, 1952.
              </p>
              <p>
                4.<strong> Petar Kalanja</strong> (1915-1995), was awarded the
                Order of the People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                5.<strong> Juraj Kalc</strong> (1908-1942), was proclaimed a
                People&apos;s Hero on September 26, 1973.
              </p>
              <p>
                6.<strong> Bogdan Kapelan</strong> (1914-1941), was proclaimed a
                People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                7.<strong> Ismet Kapetanović</strong> (1921-1942), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                8.<strong> Jovo Kapičić</strong> (1919-2013), was awarded the
                Order of the People&apos;s Hero on July 10, 1950.
              </p>
              <p>
                9.<strong> Osman Karabegović</strong> (1911-1996), was awarded
                the Order of the People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                10.<strong> Boško Karalić</strong> (1919-1987), was awarded the
                Order of the People&apos;s Hero on September 25, 1944.
              </p>
              <p>
                11.<strong> Elpida Karamandi</strong> (1920-1942), was
                proclaimed a People&apos;s Hero on October 11, 1951.
              </p>
              <p>
                12.<strong> Vasko Karangeleski</strong> (1921-1977), was awarded
                the Order of the People&apos;s Hero on November 29, 1953.
              </p>
              <p>
                13.<strong> Nikola Karanović</strong> (1914-1991), was awarded
                the Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                14.<strong> Edvard Kardelj</strong> (1910-1979), was awarded the
                Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                15.<strong> Petar Kasapović</strong> (1914-1995), was awarded
                the Order of the People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                <strong>16. Vojin Katnić</strong> (1915-1943), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                17.<strong> Ivan Kavčič Nande</strong> (1913-1943), was
                proclaimed a People&apos;s Hero on October 25, 1943.
              </p>
              <p>
                18.<strong> Dušan Kveder</strong> (1915-1966), was awarded the
                Order of the People&apos;s Hero on July 15, 1952.
              </p>
              <p>
                19.<strong> Lojze Kebe</strong> (1908-1942), was proclaimed a
                People&apos;s Hero on July 5, 1951.
              </p>
              <p>
                20.<strong> Ante Kelava</strong> (1916-1943), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                21.<strong> Vaso Kelečević</strong> (1904-1941), was proclaimed
                a People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                22.<strong> Milić Keljanović</strong> (1915-1942), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                23.<strong> Jože Kerenčič</strong> (1915-1941), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                24.<strong> Milka Kerin Pohorska</strong> (1923-1944), was
                proclaimed a People&apos;s Hero on July 21, 1953.
              </p>
              <p>
                25.<strong> Mijo Kerošević</strong> (1920-1946), was proclaimed
                a People&apos;s Hero on July 5, 1951.
              </p>
              <p>
                26.<strong> Fric Keršič</strong> (1908-1942), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                27.<strong> Mirko Kesić</strong> (1923-1944), was proclaimed a
                People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                28.<strong> Petar Kesić</strong> (1918-1942), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                29.<strong> Jovo Kecman</strong> (1914-1942), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                30.<strong> Pero Kecman</strong> (1921-1943), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                31.<strong> Boris Kidrič</strong> (1912-1953), was awarded the
                Order of the People&apos;s Hero on July 15, 1952.
              </p>
              <p>
                32.<strong> Milo Kilibarda</strong> (1913-1983), was awarded the
                Order of the People&apos;s Hero on July 21, 1953.
              </p>
              <p>
                33.<strong> Slava Klavora</strong> (1921-1941), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                34.<strong> Đuro Kladarin</strong> (1916-1987), was awarded the
                Order of the Peoples Hero on July 23, 1952.
              </p>
              <p>
                35.<strong> Jože Klanjšek Vasja</strong> (1917-1965), was
                awarded the Order of the People&apos;s Hero on December 20,
                1951.
              </p>
              <p>
                36.<strong> Vjekoslav Klobučar</strong> (1919-1942), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                37.<strong> Franjo Kluz</strong> (1912-1944), was proclaimed a
                People&apos;s Hero on May 18, 1948.
              </p>
              <p>
                38.<strong> Milanka Kljajić</strong> (1924-1943), was proclaimed
                a People&apos;s Hero on November 27, 1953.
              </p>

              <p>
                39. <strong>Miloš Kljajić</strong> (1916-1944), was proclaimed a
                People&apos;s Hero on December 6, 1944.
              </p>
              <p>
                40. <strong>Mirko Kljajić Stari</strong> (1912-1942), was
                proclaimed a People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                41. <strong>Filip Kljajić Fića</strong> (1913-1943), was
                proclaimed a People&apos;s Hero on September 25, 1944.
              </p>
              <p>
                42. <strong>Franjo Knebl</strong> (1915*-2006), was awarded the
                Order of the People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                43. <strong>Vladimir Knežević Volođa</strong> (1915-1942), was
                proclaimed a People&apos;s Hero on September 25, 1944.
              </p>
              <p>
                44. <strong>Vuk Knežević</strong> (1912-1941), was proclaimed a
                People&apos;s Hero on July 5, 1951.
              </p>
              <p>
                45. <strong>Radovan Knežević Tihi</strong> (1916-1988), was
                awarded the Order of the People&apos;s Hero on November 27,
                1953.
              </p>
              <p>
                46. <strong>Marko Kovač Šnajder</strong> (1910-1944), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                47. <strong>Slavko Kovač</strong> (1919-1942), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                48. <strong>Štefan Kovač</strong> (1910-1941), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                49. <strong>Boriša Kovačević Šćepan</strong> (1908-1943), was
                proclaimed a People&apos;s Hero on July 22, 1949.
              </p>
              <p>
                50. <strong>Branko Kovačević Žika Mornar</strong> (1924-1996),
                was awarded the Order of the People&apos;s Hero on July 5, 1952.
              </p>
              <p>
                51. <strong>Vasilije Kovačević Čile</strong> (1911-1961), was
                awarded the Order of the People&apos;s Hero on November 27,
                1953.
              </p>
              <p>
                52. <strong>Veljko Kovačević</strong> (1912-1994), was awarded
                the Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                53. <strong>Vojin Kovačević</strong> (1913-1941), was proclaimed
                a People&apos;s Hero on December 14, 1949.
              </p>
              <p>
                54. <strong>Vojo Kovačević</strong> (1912-1997), was awarded the
                Order of the People&apos;s Hero on July 10, 1952.
              </p>
              <p>
                55. <strong>Đuran Kovačević</strong> (1916*-2007), was awarded
                the Order of the People&apos;s Hero on March 13, 1945.
              </p>
              <p>
                56. <strong>Miloš Kovačević</strong> (1910-1943), was proclaimed
                a People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                57. <strong>Mirko Kovačević</strong> (1916-1941), was proclaimed
                a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                58. <strong>Mitar Kovačević</strong> (1916-1979), was awarded
                the Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                59. <strong>Radoslav Kovačević</strong> (1919-1942), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                60. <strong>Radovan Kovačević Maksim</strong> (1919-1943), was
                proclaimed a People&apos;s Hero on July 5, 1952.
              </p>

              <p>
                61.<strong> Sava Kovačević</strong> (1905-1943), was proclaimed
                a People&apos;s Hero on July 6, 1943.
              </p>
              <p>
                62.<strong> Ivan Kovačič Efenka</strong> (1921-1963), was
                awarded the Order of the People&apos;s Hero on July 21, 1953.
              </p>
              <p>
                63.<strong> Jože Kovačič</strong> (1916-1942), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                64.<strong> Oskar Kovačič</strong> (1908-1944), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                65.<strong> Lazo Kolevski</strong> (1918-1942), was proclaimed a
                People&apos;s Hero on October 9, 1953.
              </p>
              <p>
                66.<strong> Lazar Koliševski</strong> (1914-2000), was awarded
                the Order of the People&apos;s Hero on July 30, 1952.
              </p>
              <p>
                67.<strong> Alojz Kolman Marok</strong> (1911-1944), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                68.<strong> Slavko Komar</strong> (1918-2012), was awarded the
                Order of the People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                69.<strong> Miloš Komatina</strong> (1885-1943), was proclaimed
                a People&apos;s Hero on July 10, 1953.
              </p>
              <p>
                70.<strong> Stojan Komljenović Čoka</strong> (1920-1943), was
                proclaimed a People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                71.<strong> Danilo Komnenović</strong> (1915-2001), was awarded
                the Order of the People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                72.<strong> Rade Kondić</strong> (1916-1944), was proclaimed a
                People&apos;s Hero on March 13, 1945.
              </p>
              <p>
                73.<strong> Radoje Kontić</strong> (1919-1943), was proclaimed a
                People&apos;s Hero on July 13, 1953.
              </p>
              <p>
                74.<strong> Dragica Končar</strong> (1915-1942), was proclaimed
                a People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                75.<strong> Marko Končar Bura</strong> (1919-1942), was
                proclaimed a People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                76.<strong> Rade Končar</strong> (1911-1942), was proclaimed a
                People&apos;s Hero on August 7, 1942.
              </p>
              <p>
                77.<strong> Vasilije Koprivica</strong> (1919-1943), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                78.<strong> Dušan Korać</strong> (1920-1998), was awarded the
                Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                79.<strong> Milan Korica Kovač</strong> (1919-1987), was awarded
                the Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                80.<strong> Stevan Korica</strong> (1916-1942), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                81.<strong> Đuro Kosanović</strong> (1917-1943), was proclaimed
                a People&apos;s Hero on July 5, 1951.
              </p>
              <p>
                82.<strong> Stane Kosec</strong> (1913-1941), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                83.<strong> Ivan Kosovel</strong> (1912-1943), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                84.<strong> Pero Kosorić</strong> (1918-1969), was awarded the
                Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                85.<strong> Svetozar Kosorić</strong> (1913-1943), was
                proclaimed a People&apos;s Hero on July 5, 1951.
              </p>
              <p>
                86.<strong> Blagoje Kostić Crni</strong> (1920-1943), was
                proclaimed a People&apos;s Hero on July 5, 1952.
              </p>
              <p>
                87.<strong> Ilija Kostića</strong> (1911-1992), was awarded the
                Order of the People&apos;s Hero on July 27, 1953.
              </p>
              <p>
                88.<strong> Martin Kotar</strong> (1922-1944), was proclaimed a
                People&apos;s Hero on September 13, 1952.
              </p>
              <p>
                89.<strong> Bogdan Kotlica</strong> (1909-1942), was proclaimed
                a People&apos;s Hero on July 13, 1953.
              </p>
              <p>
                90.<strong> Franc Kočevar</strong> (1918-2005), was awarded the
                Order of the People&apos;s Hero on July 15, 1952.
              </p>

              <p>
                91.<strong> Fana Kočovska-Cvetković</strong> (1927-2004), was
                awarded the Order of the People&apos;s Hero on October 9, 1953.
              </p>
              <p>
                92.<strong> Dušan Košutić</strong> (1912-1945), was proclaimed a
                People&apos;s Hero on February 1, 1946.
              </p>
              <p>
                93.<strong> Ivan Stevo Krajačić</strong> (1906-1986), was
                awarded the Order of the People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                94.<strong> Boris Krajger</strong> (1914-1967), was awarded the
                Order of the People&apos;s Hero on September 5, 1953.
              </p>
              <p>
                95.<strong> Dušan Krajger</strong> (1908-1943), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                96.<strong> Josip Kraš</strong> (1900-1941), was proclaimed a
                People&apos;s Hero on July 26, 1945.
              </p>
              <p>
                97.<strong> Otmar Kreačić</strong> (1913-1992), was awarded the
                Order of the People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                98.<strong> Franc Krese</strong> (1919-1980), was awarded the
                Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                99.<strong> Ivan Krkač</strong> (1911-1942), was proclaimed a
                People&apos;s Hero on February 9, 1952.
              </p>
              <p>
                100.<strong> Maks Krmelj</strong> (1910-2004), was awarded the
                Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                101.<strong> Rudolf Kroflin</strong> (1916-1941), was proclaimed
                a People&apos;s Hero on December 14, 1949.
              </p>
              <p>
                102.<strong> Branko Krsmanović</strong> (1915-1941), was
                proclaimed a People&apos;s Hero on May 9, 1945.
              </p>
              <p>
                103.<strong> Vicko Krstulović</strong> (1905-1988), was awarded
                the Order of the People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                104.<strong> Uroš Krunić</strong> (1914-1973), was awarded the
                Order of the People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                105.<strong> Gojko Kruška</strong> (1922-1944), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                106.<strong> Vukman Kruščić</strong> (1909-1942), was proclaimed
                a People&apos;s Hero on July 12, 1949.
              </p>
              <p>
                107.<strong> Antonija Kuclar</strong> (1896-1942), was
                proclaimed a People&apos;s Hero on July 21, 1953.
              </p>
              <p>
                108.<strong> Milan Kuč</strong> (1906-1943), was proclaimed a
                People&apos;s Hero on July 11, 1945.
              </p>
              <p>
                109.<strong> Milka Kufrin</strong> (1921-2000), was awarded the
                Order of the People&apos;s Hero on July 23, 1953.
              </p>
              <p>
                110.<strong> Maksim Kujundžić</strong> (1923-1944), was
                proclaimed a People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                111.<strong> Milan Kukić</strong> (1914-1943), was proclaimed a
                People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                112.<strong> Nikola Kukić</strong> (1914-1941), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                113.<strong> Cvijo Kukolj</strong> (1917-1944), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                114.<strong> Marko Kulić</strong> (1914-1941), was proclaimed a
                People&apos;s Hero on November 27, 1953.
              </p>
              <p>
                115.<strong> Danila Kumar</strong> (1921-1944), was proclaimed a
                People&apos;s Hero on December 20, 1951.
              </p>
              <p>
                116.<strong> Miloš Kupres</strong> (1920-1942), was proclaimed a
                People&apos;s Hero on July 24, 1953.
              </p>
              <p>
                117.<strong> Milan Kuprešanin</strong> (1911-2005), was awarded
                the Order of the People&apos;s Hero on July 23, 1952.
              </p>
              <p>
                118.<strong> Milinko Kušić</strong> (1912-1943), was proclaimed
                a People&apos;s Hero on May 9, 1945.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* right Accordion Yu heroes*/}
        <Accordion
          defaultActiveKey="4"
          className="w-full lg:w-2/5 mb-4 lg:mb-0"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter L
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Milorad Labudović</strong> (1911-43), declared a
                national hero on November 26, 1955.
              </p>
              <p>
                2. <strong>Obrad Lazović Živko</strong> (1924-91), awarded the
                Order of the National Hero on July 6, 1953.
              </p>
              <p>
                3. <strong>Jože Lacko</strong> (1894-42), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                4. <strong>Radojka Lakić</strong> (1917-41), declared a national
                hero on June 8, 1945.
              </p>
              <p>
                5. <strong>Milutin Lakićević</strong> (1912-42), declared a
                national hero on July 10, 1952.
              </p>
              <p>
                6. <strong>Vojislav Lakčević Boro</strong> (1913-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                7. <strong>Drago Lang</strong> (1921-42), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Mile Latinović</strong> (1919-42), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                9. <strong>Trivo Latinović</strong> (1914-43), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                10.<strong>Mustafa Latifić</strong> (1915-42), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                11. <strong>Ivan Lavčević-Lučić</strong> (1905-42), declared a
                national hero on December 5, 1944.
              </p>
              <p>
                12. <strong>Božo Lazarević</strong> (1909-2007), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                13. <strong>Dimitrije Lazarov Raša</strong> (1926-48), awarded
                the Order of the National Hero on July 29, 1945.
              </p>
              <p>
                14. <strong>Danilo Lekić Španac</strong> (1913-86), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                15. <strong>Risto Lekić</strong> (1909-43), declared a national
                hero on July 10, 1953.
              </p>
              <p>
                16. <strong>Voja Leković</strong> (1912-97), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                17. <strong>Petar Leković</strong> (1893-42), declared the first
                national hero in February 1942.
              </p>
              <p>
                18. <strong>Ivan Lenac</strong> (1906-45), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                19. <strong>Franc Leskošek Luka</strong> (1897-83), awarded the
                Order of the National Hero on July 15, 1952.
              </p>
              <p>
                20. <strong>Rampo Levkov</strong> (1909-42), declared a national
                hero on July 5, 1951.
              </p>
              <p>
                21. <strong>Milan Ličina</strong> (1917-42), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                22. <strong>Rade Ličina</strong> (1913-42), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                23. <strong>Ivan Likar</strong> (1921-91), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                24. <strong>Kaba Limani</strong> (1924-45), declared a national
                hero on October 9, 1953.
              </p>
              <p>
                25. <strong>Janko Lisjak</strong> (1914-43), declared a national
                hero on July 5, 1952.
              </p>
              <p>
                26. <strong>Šerif Lojo</strong> (1920-43), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                27. <strong>Đuro Lončarević</strong> (1920-87), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                28. <strong>Lazar Lopičić</strong> (1922-78), awarded the Order
                of the National Hero on March 13, 1945.
              </p>
              <p>
                29. <strong>Ivica Lovinčić</strong> (1911-42), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                30. <strong>Jezdimir Lović</strong> (1919-43), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                31. <strong>Josip Lozovina</strong> (1919-46), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                32. <strong>Veljko Lukić Kurjak</strong> (1917-44), declared a
                national hero on January 12, 1945.
              </p>
              <p>
                33. <strong>Mirko Lučić</strong> (1917-43), declared a national
                hero on July 10, 1952.
              </p>
              <p>
                34. <strong>Dojčin Lukić</strong> (1912-53), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                35. <strong>Simo Lukić</strong> (1916-42), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                36. <strong>Milutin Luković</strong> (1919-75), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="visible">
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter Lj
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Nikola Lješković</strong> (1916-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                2. <strong>Nikola Ljubibratić</strong> (1912-76), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                3. <strong>Stojan Ljubić</strong> (1919-43), declared a national
                hero on May 9, 1945.
              </p>
              <p>
                4. <strong>Nikola Ljubičić</strong> (1916-2005), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                5. <strong>Radoje Ljubičić</strong> (1919-72), awarded the Order
                of the National Hero on July 5, 1952.
              </p>
              <p>
                6. <strong>Živko Ljujić</strong> (1923-42), declared a national
                hero on December 20, 1951.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter M (170 Heroes will be added)
            </Accordion.Header>
            <Accordion.Body className="visible">
              <a href="https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_M">
                https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_M
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter N
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Kiro Nacev</strong> (1918-42.), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                2. <strong>Mara Naceva</strong> (1920-2013.), awarded the Order
                of the National Hero on November 29, 1953.
              </p>
              <p>
                3. <strong>Kosta Nađ</strong> (1911-.), awarded the Order of the
                National Hero on December 20, 1951.
              </p>
              <p>
                4. <strong>Stevan Naumov Stiv</strong> (1920-42.), declared a
                national hero on July 29, 1945.
              </p>
              <p>
                5. <strong>Nada Naumović</strong> (1922-41.), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                6. <strong>Naum Naumovski</strong> (1920-60.), awarded the Order
                of the National Hero on December 20, 1951.
              </p>
              <p>
                7. <strong>Vangel Nečevski</strong> (1922-2006.), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                8. <strong>Radisav Nedeljković Raja</strong> (1911-96.), awarded
                the Order of the National Hero on July 6, 1953.
              </p>
              <p>
                9. <strong>Vladimir Nemet Braco</strong> (1918-44.), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                10. <strong>Dragomir Nenadović</strong> (1915-42.), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                11. <strong>Radojica Nenezić</strong> (1921-95.), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                12. <strong>Đorđe Nešić</strong> (1924-92.), awarded the Order
                of the National Hero on July 7, 1953.
              </p>
              <p>
                13. <strong>Ljubomir Nešić</strong> (1918-41.), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                14. <strong>Slobodan Nikačević</strong> (1912-41.), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                15. <strong>Radislav Nikčević</strong> (1917-41.), declared a
                national hero on July 7, 1953.
              </p>
              <p>
                16. <strong>Siniša Nikolajević</strong> (1914-43.), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                17. <strong>Vojin Nikolić</strong> (1914-99.), awarded the Order
                of the National Hero on July 10, 1952.
              </p>
              <p>
                18. <strong>Živojin Nikolić Brka</strong> (1911-90.), awarded
                the Order of the National Hero on July 6, 1953.
              </p>
              <p>
                19. <strong>Gojko Nikoliš</strong> (1911-95.), awarded the Order
                of the National Hero on December 20, 1951.
              </p>
              <p>
                20. <strong>Jordan Nikolov Orce</strong> (1916-42.), declared a
                national hero on July 29, 1945.
              </p>
              <p>
                21. <strong>Đorđe Nikšić</strong> (1922-86.), awarded the Order
                of the National Hero on September 26, 1953.
              </p>
              <p>
                22. <strong>Grujo Novaković</strong> (1913-75.), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                23. <strong>Miodrag Novaković Džudža</strong> (1919-55.),
                awarded the Order of the National Hero on November 27, 1953.
              </p>
              <p>
                24. <strong>Momčilo Novković</strong> (1916-88.), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                25. <strong>Mirko Novović</strong> (1917-97.), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter Nj
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Vid Nježić</strong> (1903-45.), declared a national
                hero on July 23, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter O
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Šefik Obad</strong> (1922-43), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                2. <strong>Branislav Obradović Džambo</strong> (1920-42),
                declared a national hero on July 7, 1953.
              </p>
              <p>
                3. <strong>Dušan Obradović</strong> (1913-41), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                4. <strong>Vlada Obradović Kameni</strong> (1920-44), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                5. <strong>Franjo Ogulinac Seljo</strong> (1904-42), declared a
                national hero on July 11, 1945.
              </p>
              <p>
                6. <strong>Ljubica Odadžić</strong> (1913-42), declared a
                national hero on September 26, 1953.
              </p>
              <p>
                7. <strong>Dobrila Ojdanić</strong> (1920-95), awarded the Order
                of the National Hero on July 10, 1953.
              </p>
              <p>
                8. <strong>Mileta Okiljević</strong> (1921-44), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                9. <strong>Anton Okrogar</strong> (1923-55), awarded the Order
                of the National Hero on July 22, 1953.
              </p>
              <p>
                10. <strong>Ivan Omerza Johan</strong> (1921-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                11. <strong>Sulejman Omerović</strong> (1923-45), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                12. <strong>Stevo G. Opačić</strong> (1923-), awarded the Order
                of the National Hero on July 23, 1953.
              </p>
              <p>
                13. <strong>Stevo J. Opačić</strong> (1921-2005), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                14. <strong>Stevo S. Opačić</strong> (1923-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                15. <strong>Stanko Opsenica</strong> (1907-43), declared a
                national hero on September 16, 1945.
              </p>
              <p>
                16. <strong>Stevan Opsenica</strong> (1913-2002), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                17. <strong>Marko Orešković</strong> (1896-1941), declared a
                national hero on July 26, 1945.
              </p>
              <p>
                18. <strong>Bogdan Oreščanin</strong> (1916-78), awarded the
                Order of the National Hero on July 23, 1952.
              </p>
              <p>
                19. <strong>Blažo Joka Orlandić</strong> (1914-43), declared a
                national hero on July 15, 1949.
              </p>
              <p>
                20. <strong>Blažo Joša Orlandić</strong> (1912-43), declared a
                national hero on July 10, 1952.
              </p>
              <p>
                21. <strong>Enes Orman</strong> (1921-44), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                22. <strong>Pajo Orozović Brko</strong> (1914-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                23. <strong>Jakov Ostojić</strong> (1878-1942), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                24. <strong>Jože Ožbolt</strong> (1922-), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter P
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Đoko Pavićević</strong> (1872-70), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                2. <strong>Stjepan Pavlić</strong> (1916-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                3. <strong>Miladin Pavličić</strong> (1920-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                4. <strong>Dragan Pavlović Šilja</strong> (1908-42), declared a
                national hero on December 21, 1951.
              </p>
              <p>
                5. <strong>Drinka Pavlović</strong> (1919-43), declared a
                national hero on July 6, 1953.
              </p>
              <p>
                6. <strong>Milica Pavlović Dara</strong> (1915-44), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                7. <strong>Miloje Pavlović</strong> (1887-1941), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Ratko Pavlović Ćićko</strong> (1913-43), declared a
                national hero on October 9, 1945.
              </p>
              <p>
                9. <strong>Vinko Paderšič</strong> (1916-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                10. <strong>Anka Pađen</strong> (1924-45), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                11. <strong>Vinko Pajić</strong> (1912-41), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                12. <strong>David Pajić</strong> (1911-41), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                13. <strong>Dušan Pajić-Dašić</strong> (1912-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                14. <strong>Đorđije Đoko Pajković</strong> (1917-80), awarded
                the Order of National Hero on July 10, 1953.
              </p>
              <p>
                15. <strong>Ibe Palikuća</strong> (1927-44), declared a national
                hero on October 8, 1953.
              </p>
              <p>
                16. <strong>Boško Palkovljević Pinki</strong> (1920-42),
                declared a national hero on October 25, 1943.
              </p>
              <p>
                17. <strong>Todor Panić</strong> (1911-42), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                18. <strong>Pavle Pap Šilja</strong> (1914-41), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                19. <strong>Žarko Papić</strong> (1920-44), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                20. <strong>Branislav Parać Relja</strong> (1922-43), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                21. <strong>Ph.D. Nenad Parenta</strong> (1913-41), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                22. <strong>Stanko Parmać</strong> (1913-82), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                23. <strong>Franz Pasterk Lenart</strong> (1912-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                24. <strong>Katarina Patrnogić</strong> (1921-71), awarded the
                Order of National Hero on November 27, 1953.
              </p>
              <p>
                25. <strong>Stanko Paunović Veljko</strong> (1907-42), declared
                a national hero on October 25, 1943.
              </p>
              <p>
                26. <strong>Slavko Pejak</strong> (1919-92), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                27. <strong>Kata Pejnović</strong> (1899-1966), declared a
                national hero on June 3, 1968.
              </p>
              <p>
                28. <strong>Andrija Pejović</strong> (1911-97), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                29. <strong>Vasilije Pejović</strong> (1911-44), declared a
                national hero on July 13, 1953.
              </p>
              <p>
                30. <strong>Dušan Pekić</strong> (1921-2007), awarded the Order
                of National Hero on December 6, 1944.
              </p>
              <p>
                31. <strong>Vuksan Pekiša</strong> (1905-41), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                32. <strong>Bogdan Peko</strong> (1915-), awarded the Order of
                National Hero on November 27, 1953.
              </p>
              <p>
                33. <strong>Slobodan Penezić Krcun</strong> (1918-64), declared
                a national hero on July 5, 1952.
              </p>
              <p>
                34. <strong>Vladimir Peran Živko</strong> (1922-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                35. <strong>Ibrahim Perviz</strong> (1902-41), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                36. <strong>Branko Perić</strong> (1913-42), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                37. <strong>Vladimir Perić Valter</strong> (1919-45), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                38. <strong>Ratko Perić</strong> (1914-85), awarded the Order of
                National Hero on July 24, 1953.
              </p>
              <p>
                39. <strong>Marko Peričin Kamenjar</strong> (1912-82), awarded
                the Order of National Hero on December 20, 1951.
              </p>
              <p>
                40. <strong>Branko Perišić Badža</strong> (1923-43), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                41. <strong>Puniša Perović</strong> (1911-85), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                42. <strong>Mirko Perc Max</strong> (1912-45), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                43. <strong>Zdenko Petranović Jastreb</strong> (1919-42),
                declared a national hero on December 20, 1951.
              </p>
              <p>
                44. <strong>Olga Petrov</strong> (1921-42), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                45. <strong>Adam Petrović</strong> (1913-84), awarded the Order
                of National Hero on July 24, 1953.
              </p>
              <p>
                46. <strong>Dragoljub Petrović Rade</strong> (1919-94), awarded
                the Order of National Hero on December 20, 1951.
              </p>
              <p>
                47. <strong>Dragoslav Petrović Gorski</strong> (1919-96),
                awarded the Order of National Hero on November 27, 1953.
              </p>
              <p>
                48. <strong>Dušan Petrović Šane</strong> (1914-77), declared a
                national hero on July 5, 1952.
              </p>
              <p>
                49. <strong>Đuro Petrović</strong> (1914-42), declared a
                national hero on August 7, 1942.
              </p>
              <p>
                50. <strong>Milorad Petrović</strong> (1903-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                51. <strong>Radovan Petrović</strong> (1916-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                52. <strong>Stevan Petrović Brile</strong> (1921-43), declared a
                national hero on December 22, 1951.
              </p>
              <p>
                53. <strong>Boro Petruševski</strong> (1920-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                54. <strong>Đuro Pećanac Đurekan</strong> (1916-42), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                55. <strong>Rado Pehaček</strong> (1913-83), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                56. <strong>Bogdan Pecotić</strong> (1912-98), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                57. <strong>Max Pečar</strong> (1907-41), declared a national
                hero on July 22, 1953.
              </p>
              <p>
                58. <strong>Novak Pivašević</strong> (1904-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                59. <strong>Moša Pijade</strong> (1890-1957), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                60. <strong>Milan Pilipović</strong> (1919-41), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                61. <strong>Miha Pintar Toledo</strong> (1913-42), declared a
                national hero on July 21, 1953.
              </p>
              <p>
                62. <strong>Ahmed Pintul</strong> (1923-43), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                63. <strong>Strahil Pindžur</strong> (1915-43), declared a
                national hero on July 29, 1945.
              </p>
              <p>
                64. <strong>Dimitrije Pisković Trnavac</strong> (1914-87),
                awarded the Order of National Hero on July 6, 1953.
              </p>
              <p>
                65. <strong>Sima Pogačarević</strong> (1908-41), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                66. <strong>Franc Poglajen Kranjc</strong> (1916-99), awarded
                the Order of National Hero on November 27, 1953.
              </p>
              <p>
                67. <strong>Franz Pokovec</strong> (1921-91), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                68. <strong>Smilja Pokrajac</strong> (1920-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                69. <strong>Bojan Polak Stjenka</strong> (1919-2004), awarded
                the Order of National Hero on September 13, 1952.
              </p>
              <p>
                70. <strong>Vojin Poleksić</strong> (1923-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                71. <strong>Miro Popara</strong> (1916-42), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                72. <strong>Alojz Popek Vandek</strong> (1920-43), declared a
                national hero on September 13, 1952.
              </p>
              <p>
                73. <strong>Blažo Popivoda</strong> (1911-44), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                74. <strong>Krsto Popivoda</strong> (1910-88), awarded the Order
                of National Hero on July 10, 1952.
              </p>
              <p>
                75. <strong>Branko Popović</strong> (1917-44), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                76. <strong>Vlado Popović</strong> (1914-72), awarded the Order
                of National Hero on July 10, 1952.
              </p>
              <p>
                77. <strong>Ilija Popović</strong> (1917-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                78. <strong>Jevrem Popović</strong> (1914-97), awarded the Order
                of National Hero on July 6, 1953.
              </p>
              <p>
                79. <strong>Koča Popović</strong> (1908-92), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                80. <strong>Ljubica Popović</strong> (1921-42), declared a
                national hero on July 12, 1949.
              </p>
              <p>
                81. <strong>Miladin Popović</strong> (1910-45), declared a
                national hero on March 12, 1946.
              </p>
              <p>
                82. <strong>Momčilo Popović</strong> (1919-62), declared a
                national hero on December 15, 1962.
              </p>
              <p>
                83. <strong>Momčilo Popović Ozren</strong> (1909-43), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                84. <strong>Nikola Popović</strong> (1916-2005), awarded the
                Order of National Hero on November 27, 1953.
              </p>
              <p>
                85. <strong>Radoslav Popović</strong> (1909-42), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                86. <strong>Svetozar Popović Milić</strong> (1901-44), declared
                a national hero on October 9, 1953.
              </p>
              <p>
                87. <strong>Sekule Popović</strong> (1911-42), declared a
                national hero on July 13, 1953.
              </p>
              <p>
                88. <strong>Tomica Popović</strong> (1915-72), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                89. <strong>Panče Popovski</strong> (1924-44), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                90. <strong>Stane Potočar</strong> (1919-97), awarded the Order
                of National Hero on September 4, 1953.
              </p>
              <p>
                91. <strong>Mile Počuča</strong> (1899-1980), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                92. <strong>Mirko Poštić</strong> (1913-42), declared a national
                hero on December 6, 1944.
              </p>
              <p>
                93. <strong>Dragica Pravica</strong> (1919-42), declared a
                national hero on June 8, 1945.
              </p>
              <p>
                94. <strong>Đurađ Predojević Đurin</strong> (1915-2000), awarded
                the Order of National Hero on December 20, 1951.
              </p>
              <p>
                95. <strong>Božina Prelevic Bojo</strong> (1919-43), declared a
                national hero on July 10, 1953.
              </p>
              <p>
                96. <strong>Đoko Prelevic</strong> (1916-43), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                97. <strong>Đorđe Premović</strong> (1910-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                98. <strong>Janko Premrl Vojko</strong> (1920-43), declared a
                national hero on April 18, 1944.
              </p>
              <p>
                99. <strong>Josip Preskar</strong> (1920-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                100. <strong>Marijan Primorac</strong> (1921-46), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                101. <strong>Rudolf Primorac</strong> (1904-79), awarded the
                Order of National Hero on November 27, 1953.
              </p>
              <p>
                102. <strong>Slobodan Princip Seljo</strong> (1914-42), declared
                a national hero on September 6, 1942.
              </p>
              <p>
                103. <strong>Ognjen Prica</strong> (1899-1941), declared a
                national hero on July 26, 1945.
              </p>
              <p>
                104. <strong>Vančo Prkev</strong> (1921-43), declared a national
                hero on August 1, 1949.
              </p>
              <p>
                105. <strong>Petar Prlja</strong> (1911-43), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                106. <strong>Josip Prša</strong> (1922-43), declared a national
                hero on July 27, 1953.
              </p>
              <p>
                107. <strong>Dako Puač</strong> (1919-94), awarded the Order of
                National Hero on December 20, 1951.
              </p>
              <p>
                108. <strong>Nada Purić</strong> (1903-41), declared a national
                hero on July 6, 1953.
              </p>
              <p>
                109. <strong>Đuro Pucar Stari</strong> (1899-1979), awarded the
                Order of National Hero on March 11, 1951.
              </p>
              <p>
                110. <strong>Momir Pucarević</strong> (1918-42), declared a
                national hero on December 20, 1951.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter R
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                {" "}
                1. <strong>Franc Ravbar</strong> (1913-43), declared a national
                hero on July 5, 1951.{" "}
              </p>
              <p>
                {" "}
                2. <strong>Ilija Radaković</strong> (1923-2015), awarded the
                Order of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                3. <strong>Lazo Radaković</strong> (1913-2014), awarded the
                Order of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                4. <strong>Mićo Radaković</strong> (1912-41), declared a
                national hero on December 14, 1949.{" "}
              </p>
              <p>
                {" "}
                5. <strong>Luka Radetić</strong> (1918-82), awarded the Order of
                the National Hero on July 23, 1952.{" "}
              </p>
              <p>
                {" "}
                6. <strong>Petar Radetić</strong> (1918-2003), awarded the Order
                of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                7. <strong>Jovanka Radivojević</strong> (1922-43), declared a
                national hero on July 6, 1953.{" "}
              </p>
              <p>
                {" "}
                8. <strong>Voja Radić</strong> (1902-77), awarded the Order of
                the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                9. <strong>Lepa Radić</strong> (1925-43), declared a national
                hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                10. <strong>Velimir Radičević</strong> (1914-), declared a
                national hero on July 10, 1953.{" "}
              </p>
              <p>
                {" "}
                11. <strong>Vladimir Radovanović</strong> (1903-43), declared a
                national hero on March 13, 1945.{" "}
              </p>
              <p>
                {" "}
                12. <strong>Jovo Radovanović Jovaš</strong> (1915-2004), awarded
                the Order of the National Hero on July 26, 1945.{" "}
              </p>
              <p>
                {" "}
                13. <strong>Milić Radovanović Mladen</strong> (1920-44),
                declared a national hero on July 5, 1951.{" "}
              </p>
              <p>
                {" "}
                14. <strong>Gojko Radović</strong> (1911-71), awarded the Order
                of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                15. <strong>Darinka Radović</strong> (1896-43), declared a
                national hero on October 9, 1953.{" "}
              </p>
              <p>
                {" "}
                16. <strong>Lazar Radojević</strong> (1916-41), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                17. <strong>Milutin Radojević</strong> (1914-41), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                18. <strong>Vera Radosavljević Nada</strong> (1922-43), declared
                a national hero on July 5, 1951.{" "}
              </p>
              <p>
                {" "}
                19. <strong>Dobrivoje Radosavljević Bobi</strong> (1915-84),
                awarded the Order of the National Hero on July 6, 1953.{" "}
              </p>
              <p>
                {" "}
                20. <strong>Dobrosav Radosavljević Narod</strong> (1920-42),
                declared a national hero on July 5, 1952.{" "}
              </p>
              <p>
                {" "}
                21. <strong>Dragoljub Radosavljević Toplica</strong> (1919-43),
                declared a national hero on July 5, 1951.{" "}
              </p>
              <p>
                {" "}
                22. <strong>Radiša Radosavljević Šoša</strong> (1919-42),
                declared a national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                23. <strong>Veljko Radulović Mijo</strong> (1915-42), declared a
                national hero on July 13, 1953.{" "}
              </p>
              <p>
                {" "}
                24. <strong>Jovan Radulović Jovo</strong> (1906-43), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                25. <strong>Milosav Radulović</strong> (1915-43), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                26. <strong>Nikola Radulović</strong> (1915-84), awarded the
                Order of the National Hero on July 24, 1953.{" "}
              </p>
              <p>
                {" "}
                27. <strong>Radule Radulović Ruso</strong> (1919-42), declared a
                national hero on July 10, 1953.{" "}
              </p>
              <p>
                {" "}
                28. <strong>Mitar Radusinović</strong> (1912-75), awarded the
                Order of the National Hero on October 9, 1953.{" "}
              </p>
              <p>
                {" "}
                29. <strong>Vladimir Raičević</strong> (1922-44), declared a
                national hero on October 9, 1953.{" "}
              </p>
              <p>
                {" "}
                30. <strong>Dušan Rakita</strong> (1900-42), declared a national
                hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                31. <strong>Dragan Rakić</strong> (1914-59), awarded the Order
                of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                32. <strong>Krešo Rakić</strong> (1919-41), declared a national
                hero on July 23, 1952.{" "}
              </p>
              <p>
                {" "}
                33. <strong>Milić Rakić</strong> (1912-43), declared a national
                hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                34. <strong>Joakim Rakovac</strong> (1914-45), declared a
                national hero on December 9, 1952.{" "}
              </p>
              <p>
                {" "}
                35. <strong>Nenad Rakočević</strong> (1914-43), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                36. <strong>Radomir Rakočević</strong> (1914-44), declared a
                national hero on July 13, 1953.{" "}
              </p>
              <p>
                {" "}
                37. <strong>Aleksandar Ranković Marko</strong> (1909-83),
                awarded the Order of the National Hero on July 4, 1945.{" "}
              </p>
              <p>
                {" "}
                38. <strong>Anđa Ranković</strong> (1909-42), declared a
                national hero on July 6, 1953.{" "}
              </p>
              <p>
                {" "}
                39. <strong>Milan Raspopović</strong> (1915-42), declared a
                national hero on May 17, 1945.{" "}
              </p>
              <p>
                {" "}
                40. <strong>Stevo Rauš</strong> (1916-98), awarded the Order of
                the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                41. <strong>Nikola Rački</strong> (1914-94), awarded the Order
                of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                42. <strong>Milija Rašović</strong> (1915-43), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                43. <strong>Miloš Rastović</strong> (1921-42), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                44. <strong>Ante Raštegorac</strong> (1923-86), awarded the
                Order of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                45. <strong>Zorka Regancin-Dolničar</strong> (1921-44), declared
                a national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                46. <strong>Marko Redelongi Benečan</strong> (1912-44), declared
                a national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                47. <strong>Srećko Reić</strong> (1914-87), awarded the Order of
                the National Hero on July 24, 1953.{" "}
              </p>
              <p>
                {" "}
                48. <strong>Petar Relić</strong> (1913-90), awarded the Order of
                the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                49. <strong>Dušan Remih</strong> (1922-44), declared a national
                hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                50. <strong>Ivo Lola Ribar</strong> (1916-43), declared a
                national hero on November 18, 1944.{" "}
              </p>
              <p>
                {" "}
                51. <strong>Dujo Rikić</strong> (1918-43), declared a national
                hero on July 5, 1951.{" "}
              </p>
              <p>
                {" "}
                52. <strong>Sofija Ristić</strong> (1900-44), declared a
                national hero on October 9, 1953.{" "}
              </p>
              <p>
                {" "}
                53. <strong>Vinko Robek</strong> (1915-86), awarded the Order of
                the National Hero on July 21, 1953.{" "}
              </p>
              <p>
                {" "}
                54. <strong>Radivoj Rodić</strong> (1920-42), declared a
                national hero on July 24, 1953.{" "}
              </p>
              <p>
                {" "}
                55. <strong>Slavko Rodić</strong> (1916-49), declared a national
                hero on December 14, 1949.{" "}
              </p>
              <p>
                {" "}
                56. <strong>Valentin Rožanc</strong> (1895-42), declared a
                national hero on July 21, 1953.{" "}
              </p>
              <p>
                {" "}
                57. <strong>Franc Rozman Stane</strong> (1911-44), declared a
                national hero on November 11, 1944.{" "}
              </p>
              <p>
                {" "}
                58. <strong>Ante Roje</strong> (1914-82), declared a national
                hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                59. <strong>Karlo Rojc</strong> (1915-42), declared a national
                hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                60. <strong>Franc Rojšek</strong> (1914-75), awarded the Order
                of the National Hero on September 13, 1952.{" "}
              </p>
              <p>
                {" "}
                61. <strong>Mirko Rokvić Šoša</strong> (1922-2004), awarded the
                Order of the National Hero on March 13, 1945.{" "}
              </p>
              <p>
                {" "}
                62. <strong>Vladimir Rolović</strong> (1916-71), declared a
                national hero on April 9, 1971.{" "}
              </p>
              <p>
                {" "}
                63. <strong>Niko Rolović</strong> (1910-41), declared a national
                hero on July 10, 1953.{" "}
              </p>
              <p>
                {" "}
                64. <strong>Paško Romac</strong> (1913-82), awarded the Order of
                the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                65. <strong>Janko Rudolf</strong> (1914-97), awarded the Order
                of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                66. <strong>Josip Ružička</strong> (1919-45), declared a
                national hero on July 24, 1953.{" "}
              </p>
              <p>
                {" "}
                67. <strong>Ante Rukavina</strong> (1922-43), declared a
                national hero on July 5, 1951.{" "}
              </p>
              <p>
                {" "}
                68. <strong>Ivan Rukavina</strong> (1912-92), awarded the Order
                of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                69. <strong>Ivan Rukavina Siđo</strong> (1901-43), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                70. <strong>Zvonimir Runko</strong> (1920-42), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                71. <strong>Milan Rustanbeg</strong> (1914-44), declared a
                national hero on November 27, 1953.{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter S
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Ivan Sabljak</strong> (1919-44), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                2. <strong>Lazar Savatić</strong> (1914-50), declared a national
                hero on October 2, 1953.
              </p>
              <p>
                3. <strong>Ante Savin</strong> (1916-42), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                4. <strong>Ramiz Sadik</strong> (1915-43), declared a national
                hero on March 6, 1945.
              </p>
              <p>
                5. <strong>Himzo Salihagić</strong> (1917-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                6. <strong>Mira Svetina</strong> (1915-2007), awarded the Order
                of National Hero on November 27, 1953.
              </p>
              <p>
                7. <strong>Nikola Severović</strong> (1919-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Janko Sekirnik Simon</strong> (1921-96), awarded the
                Order of National Hero on December 20, 1951.
              </p>
              <p>
                9. <strong>Bajo Sekulić</strong> (1913-42), declared a national
                hero on July 11, 1945.
              </p>
              <p>
                10. <strong>Nikola Sekulić</strong> (1911-2002), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                11. <strong>Stjepan Sekulić</strong> (1922-44), declared a
                national hero on July 26, 1945.
              </p>
              <p>
                12. <strong>Stane Semič Daki</strong> (1915-85), awarded the
                Order of National Hero on October 20, 1944.
              </p>
              <p>
                13. <strong>Đermano Senjanović</strong> (1923-42), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                14. <strong>Ivan Senjug Ujak</strong> (1920-44), declared a
                national hero on June 19, 1945.
              </p>
              <p>
                15. <strong>Mihalj Servo</strong> (1900-41), declared a national
                hero on July 5, 1951.
              </p>
              <p>
                16. <strong>Đorđe Simeonović</strong> (1915-41), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                17. <strong>Sima Simić</strong> (1920-43), declared a national
                hero on July 6, 1953.
              </p>
              <p>
                18. <strong>Milan Simović</strong> (1909-42), declared a
                national hero on September 6, 1942.
              </p>
              <p>
                19. <strong>Vinko Simončič</strong> (1914-44), declared a
                national hero on May 9, 1945.
              </p>
              <p>
                20. <strong>Ivan Skvarča</strong> (1915-43), declared a national
                hero on July 15, 1951.
              </p>
              <p>
                21. <strong>Josip Skočilić</strong> (1915-2001), awarded the
                Order of National Hero on November 27, 1953.
              </p>
              <p>
                22. <strong>Ivo Slavec Jokl</strong> (1916-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                23. <strong>Jože Slak Silvo</strong> (1902-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                24. <strong>Vidoje Smilevski</strong> (1915-79), awarded the
                Order of National Hero on July 6, 1953.
              </p>
              <p>
                25. <strong>Nikola Sovilj Nina</strong> (1919-44), declared a
                national hero on March 13, 1945.
              </p>
              <p>
                26. <strong>Sava Sogić</strong> (1915-81), awarded the Order of
                National Hero on October 2, 1953.
              </p>
              <p>
                27. <strong>Danilo Soldatić</strong> (1911-42), declared a
                national hero on August 7, 1942.
              </p>
              <p>
                28. <strong>Mirko Sotirović Sotir</strong> (1916-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                29. <strong>Ratko Sofijanić</strong> (1915-68), awarded the
                Order of National Hero on December 20, 1951.
              </p>
              <p>
                30. <strong>Milan Spasić</strong> (1909-41), declared a national
                hero on September 10, 1973.
              </p>
              <p>
                31. <strong>Luka Spasojević</strong> (1916-43), declared a
                national hero on October 8, 1953.
              </p>
              <p>
                32. <strong>Jože Srebrnič</strong> (1884-1944), declared a
                national hero on September 4, 1953.
              </p>
              <p>
                33. <strong>Stanislav Sremčević</strong> (1910-43), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                34. <strong>Dragoslav Srnić</strong> (1914-41), declared a
                national hero on July 7, 1953.
              </p>
              <p>
                35. <strong>Franz Stadler Pepe</strong> (1915-2000), awarded the
                Order of National Hero on July 15, 1952.
              </p>
              <p>
                36. <strong>Petar Stambolić</strong> (1912-2007), awarded the
                Order of National Hero on November 27, 1953.
              </p>
              <p>
                37. <strong>Dragi Stamenković</strong> (1920-2004), awarded the
                Order of National Hero on July 6, 1953.
              </p>
              <p>
                38. <strong>Kosta Stamenković</strong> (1893-42), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                39. <strong>Trajko Stamenković</strong> (1909-42), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                40. <strong>Milan Stanivuković</strong> (1912-44), declared a
                national hero on March 13, 1945.
              </p>
              <p>
                41. <strong>Miodrag Stanimirović Mija</strong> (1919-43),
                declared a national hero on July 5, 1951.
              </p>
              <p>
                42. <strong>Dragutin Stanić</strong> (1913-96), awarded the
                Order of National Hero on December 20, 1951.
              </p>
              <p>
                43. <strong>Mate Staničić</strong> (1920-85), awarded the Order
                of National Hero on July 24, 1953.
              </p>
              <p>
                44. <strong>Marko Stanišić</strong> (1920-83), awarded the Order
                of National Hero on July 10, 1953.
              </p>
              <p>
                45. <strong>Aleksandar Stanković Lala</strong> (1906-41),
                declared a national hero on November 27, 1953.
              </p>
              <p>
                46. <strong>Velizar Stanković Veca</strong> (1922-42), declared
                a national hero on November 27, 1953.
              </p>
              <p>
                47. <strong>Petar Stanković Ljuba</strong> (1923-83), awarded
                the Order of National Hero on October 9, 1953.
              </p>
              <p>
                48. <strong>Savo Stanojević</strong>, decorated with the Order
                of National Hero on December 6, 1944. The order was taken away
                from him in 1952.
              </p>
              <p>
                49. <strong>Milorad Mića Stanojlović</strong> (1919-42),
                declared a national hero on July 7, 1953.
              </p>
              <p>
                50. <strong>Momčilo Moma Stanojlović</strong> (1916-43),
                declared a national hero on June 23, 1948.
              </p>
              <p>
                51. <strong>Petar Stante Skala</strong> (1914-80), awarded the
                Order of National Hero on July 15, 1952.
              </p>
              <p>
                52. <strong>Slavko Stančir</strong> (1925-44), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                53. <strong>Ivan Stariha Janko</strong> (1922-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                54. <strong>Rodoljub Stevović</strong> (1917-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                55. <strong>Ivan Stefanović of Srba</strong> (1912-48), declared
                a national hero on October 8, 1953.
              </p>
              <p>
                56. <strong>Svetislav Stefanović Ćeća</strong> (1910-80),
                awarded the Order of National Hero on November 27, 1953.
              </p>
              <p>
                57. <strong>Milosav Stiković</strong> (1914-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                58. <strong>Božidar Stojanović</strong> (1914-44), declared a
                national hero on October 8, 1953.
              </p>
              <p>
                59. <strong>Branko Stojanović</strong> (1923-81), awarded the
                Order of National Hero on July 24, 1953.
              </p>
              <p>
                60. <strong>Jovan Stojanović</strong> (1923-43), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                61. <strong>Lazar Stojanović</strong> (1904-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                62. <strong>Mihailo Stojanović Puljo</strong> (1918-42),
                declared a national hero on November 27, 1953.
              </p>
              <p>
                63. <strong>Ph.D. Mladen Stojanović</strong> (1896-42), declared
                a national hero on August 7, 1942.
              </p>
              <p>
                64. <strong>Lazo Stojanović-Lazić</strong> (1912-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                65. <strong>Nikodije Stojanović Tatko</strong> (1912-42),
                declared a national hero on December 14, 1949.
              </p>
              <p>
                66. <strong>Milivoje Stojković Mića</strong> (1919-43), declared
                a national hero on October 8, 1953.
              </p>
              <p>
                67. <strong>Trajko Stojkovski</strong> (1923-2005), awarded the
                Order of National Hero on December 20, 1951.
              </p>
              <p>
                68. <strong>Slavčo Stojmenski</strong> (1921-43), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                69. <strong>Velimir Stojnić</strong> (1916-90), awarded the
                Order of National Hero on July 24, 1953.
              </p>
              <p>
                70. <strong>Goce Stojčevski</strong> (1919-44), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                71. <strong>Blagoja Stračkovski</strong> (1922-42), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                72. <strong>Tomo Strizić</strong> (1906-44), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                73. <strong>Dušan Strugar</strong> (1922-43), declared a
                national hero on July 10, 1952.
              </p>
              <p>
                74. <strong>Đuro Strugar</strong> (1912-41), declared a national
                hero on May 9, 1945.
              </p>
              <p>
                75. <strong>Niko Strugar</strong> (1901-62), awarded the Order
                of National Hero on December 20, 1951.
              </p>
              <p>
                76. <strong>Miloš Suzić</strong> (1903-45), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                77. <strong>Ivan Sulič</strong> (1923-44), declared a national
                hero on July 22, 1953.
              </p>
              <p>
                78. <strong>Branko Surla</strong> (1922-44), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                79. <strong>Slobodan Surčević Boro</strong> (1919-44), declared
                a national hero on October 9, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter T
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Borko Taleski</strong> (1921-42), declared a national
                hero on July 5, 1951.
              </p>
              <p>
                2. <strong>Joco Tarabić</strong> (1916-95), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                3. <strong>Franc Tavčar</strong> (1920-2002), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                4. <strong>Borko Temelkovski</strong> (1919-2001), awarded the
                Order of the National Hero on October 9, 1953.
              </p>
              <p>
                5. <strong>Peko Tepavčević</strong> (1912-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                6. <strong>Milan Tepić</strong> (1957-91), declared a national
                hero on November 19, 1991.
              </p>
              <p>
                7. <strong>Milan Tešić</strong> (1893-44), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Miloš Tica</strong> (1907-42), declared a national
                hero on July 24, 1953.
              </p>
              <p>
                9. <strong>Veljko Todorović</strong> (1914-44), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                10. <strong>Vojo Todorović Lerer</strong> (1914-90), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                11. <strong>Vojin Todorović Vojo</strong> (1912-61), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                12. <strong>Dimitrije Todorović Kaplar</strong> (1917-42),
                declared a national hero on July 5, 1952.
              </p>
              <p>
                13. <strong>Mijalko Todorović Plavi</strong> (1913-99), awarded
                the Order of the National Hero on July 5, 1952.
              </p>
              <p>
                14. <strong>Blažo Todorovski</strong> (1902-43), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                15. <strong>Vangel Todorovski</strong> (1920-42), declared a
                national hero on July 30, 1952.
              </p>
              <p>
                16. <strong>Hristijan Todorovski Karpoš</strong> (1921-44),
                declared a national hero on July 29, 1945.
              </p>
              <p>
                17. <strong>Silvira Tomazini</strong> (1913-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                18. <strong>Josip Tomažič</strong> (1915-41), declared a
                national hero on December 15, 1949.
              </p>
              <p>
                19. <strong>Vlado Tomanović</strong> (1907-43), declared a
                national hero on July 26, 1945.
              </p>
              <p>
                20. <strong>Dušan Tomašević Ćirko</strong> (1920-44), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                21. <strong>Božo Tomić</strong> (1917-44), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                22. <strong>Jandrija Tomić Ćić</strong> (1888-44), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                23. <strong>Milan Tomić</strong> (1921-44), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                24. <strong>Mirko Tomić</strong> (1904-42), declared a national
                hero on July 6, 1945.
              </p>
              <p>
                25. <strong>Budo Tomović</strong> (1914-42), declared a national
                hero on July 11, 1945.
              </p>
              <p>
                26. <strong>Anton Tone Tomšič</strong> (1910-42), declared a
                national hero on October 25, 1943.
              </p>
              <p>
                27. <strong>Vida Tomšič</strong> (1913-98), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                28. <strong>Vuko Torović</strong> (1926-43), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                29. <strong>Đuro Trbović</strong> (1913-44), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                30. <strong>Rajko Trbović</strong> (1921-42), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                31. <strong>Mehmed Trbonja</strong> (1915-2002), awarded the
                Order of the National Hero on July 24, 1953.
              </p>
              <p>
                32. <strong>Mitar Trifunović Učo</strong> (1880-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                33. <strong>Radmila Trifunović</strong> (1919-43), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                34. <strong>Radovan Trnić Popa</strong> (1912-41), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                35. <strong>Ivanka Trohar</strong> (1923-44), declared a
                national hero on July 24, 1953.
              </p>
              <p>
                36. <strong>Tone Trtnik</strong> (1908-42), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                37. <strong>Ljubo Truta</strong> (1915-91), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                38. <strong>Branko Tubić Jelin</strong> (1921-42), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                39. <strong>Mile Tubić</strong> (1920-42), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                40. <strong>Ivan Turšič</strong> (1922-44), declared a national
                hero on December 20, 1951.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter U
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Janez Učakar</strong> (1918-95.), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                2. <strong>Gojko Ujdurović</strong> (1918-43.), declared a
                national hero on December 14, 1949.
              </p>
              <p>
                3. <strong>Mate Ujević</strong> (1920-2002.), awarded the Order
                of the National Hero on December 20, 1951.
              </p>
              <p>
                4. <strong>Milorad Umjenović</strong> (1920-43.), declared a
                national hero on March 13, 1945.
              </p>
              <p>
                5. <strong>Aleksandar Urdarevski</strong> (1920-43.), declared a
                national hero on July 20, 1951.
              </p>
              <p>
                6. <strong>Miodrag Urošević Artem</strong> (1922-42.), declared
                a national hero on December 20, 1951.
              </p>
              <p>
                7. <strong>Sredoje Urošević</strong> (1917-2007.), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Mile Uzelac</strong> (1913-87.), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                9. <strong>Srđan Uzelac</strong> (1913-44.), declared a national
                hero on July 5, 1951.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter V
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                {" "}
                1. <strong>Slaviša Vajner Čiča</strong> (1903-1942.), declared a
                national hero on September 25, 1944.{" "}
              </p>
              <p>
                {" "}
                2. <strong>Čedomir Vasović</strong> (1910-1942.), declared a
                national hero on May 5, 1951.{" "}
              </p>
              <p>
                {" "}
                3. <strong>Mirko Vejinović</strong> (1920-1944.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                4. <strong>Borko Velevski</strong> (1912-1942.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                5. <strong>Antun Velušček Matevž</strong> (1917-1944.), declared
                a national hero on July 4, 1953.{" "}
              </p>
              <p>
                {" "}
                6. <strong>Stanimir Veljković Zele</strong> (1919-1942.),
                declared a national hero on December 14, 1949.{" "}
              </p>
              <p>
                {" "}
                7. <strong>Dušan Vergaš</strong> (1909-1942.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                8. <strong>Matija Verdnik Tomaž</strong> (1916-1944.), declared
                a national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                9. <strong>Milenko Verkić</strong> (1912-1942.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                10. <strong>Jovan Veselinov Žarko</strong> (1906-1982.), awarded
                the Order of the National Hero on July 5, 1952.{" "}
              </p>
              <p>
                {" "}
                11. <strong>Arsen Vivoda</strong> (1917—1943.), declared a
                national hero on September 26, 1973.{" "}
              </p>
              <p>
                {" "}
                12. <strong>Ivan Videković Pavel</strong> (1908-1943.), declared
                a national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                13. <strong>Anton Vidmar Luka</strong> (1917-1999.), awarded the
                Order of the National Hero on May 9, 1945.{" "}
              </p>
              <p>
                {" "}
                14. <strong>Žarko Vidović</strong> (1913-1999.), awarded the
                Order of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                15. <strong>Marija Vidović Abesinka</strong> (1924-1942.),
                declared a national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                16. <strong>Nikola Vidović</strong> (1917-2000.), awarded the
                Order of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                17. <strong>Rade Vilotijević Vića</strong> (1910-1943.),
                declared a national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                18. <strong>Trivun Vitasović</strong> (1922-1944.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                19. <strong>Milenko Vitomir</strong> (1916-1941.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                20. <strong>Miro Višić</strong> (1919-1943.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                21. <strong>Branko Vladušić</strong> (1917-1942.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                22. <strong>Milosav Vlajić</strong> (1921-1943.), declared a
                national hero on July 6, 1945.{" "}
              </p>
              <p>
                {" "}
                23. <strong>Veljko Vlahović</strong> (1914-1975.), awarded the
                Order of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                24. <strong>Joža Vlahović</strong> (1916-1941.), declared a
                national hero on December 14, 1949.{" "}
              </p>
              <p>
                {" "}
                25. <strong>Dimitrije Vojvodić Zeko</strong> (1908-1987.),
                awarded the Order of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                26. <strong>Đoko Vojvodić</strong> (1914-1942.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                27. <strong>Nikola Vojvodić</strong> (1911-1943.), declared a
                national hero on July 24, 1953.{" "}
              </p>
              <p>
                {" "}
                28. <strong>Petar Vojvodić</strong> (1914-1974.), awarded the
                Order of the National Hero on July 10, 1952.{" "}
              </p>
              <p>
                {" "}
                29. <strong>Aleksandar Vojinović</strong> (1922-1999.), awarded
                the Order of the National Hero on October 9, 1953.{" "}
              </p>
              <p>
                {" "}
                30. <strong>Krume Volnarovski</strong> (1919-1944.), declared a
                national hero on October 9, 1953.{" "}
              </p>
              <p>
                {" "}
                31. <strong>Ignac Voljč Fric</strong> (1904-1944.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                32. <strong>Vaclav Vostrel</strong> (1904-1942.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                33. <strong>Rada Vranješević</strong> (1918-1944.), declared a
                national hero on July 5, 1951.{" "}
              </p>
              <p>
                {" "}
                34. <strong>Anton Vratanar Antonesko</strong> (1919-1993.),
                awarded the Order of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                35. <strong>Đina Vrbica</strong> (1913-1943.), declared a
                national hero on July 24, 1953.{" "}
              </p>
              <p>
                {" "}
                36. <strong>Boško Vrebalov</strong> (1912-1943.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                37. <strong>Franc Vresk Gustl</strong> (1910-1943.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                38. <strong>Risto Vreća</strong> (1920-1943.), declared a
                national hero on July 24, 1953.{" "}
              </p>
              <p>
                {" "}
                39. <strong>Majda Vrhovnik</strong> (1922-1945.), declared a
                national hero on July 5, 1951.{" "}
              </p>
              <p>
                {" "}
                40. <strong>Franjo Vrunč</strong> (1910-1941.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                41. <strong>Sava Vujanović Žuća</strong> (1923-1941.), declared
                a national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                42. <strong>Vasilije Vujačić Vajo</strong> (1917-1943.),
                declared a national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                43. <strong>Dušan Vujačić</strong> (1917-1943.), declared a
                national hero on July 13, 1953.{" "}
              </p>
              <p>
                {" "}
                44. <strong>Dušan Vujović</strong> (1909-1943.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                45. <strong>Đuro Vujović</strong> (1901-1943.), declared a
                national hero on July 4, 1946.{" "}
              </p>
              <p>
                {" "}
                46. <strong>Ratko Vujović Čoče</strong> (1916-1977.), awarded
                the Order of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                47. <strong>Špiro Vujović</strong> (1918-1943.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                48. <strong>Bogdan Vujošević</strong> (1912-1981.), awarded the
                Order of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                49. <strong>Dušan Vujošević</strong> (1912-1943.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                50. <strong>Zarija Vujošević</strong> (1903-1943.), declared a
                national hero on April 30, 1943.{" "}
              </p>
              <p>
                {" "}
                51. <strong>Radoje Vujošević Risto</strong> (1910-1942.),
                declared a national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                52. <strong>Vukadin Vukadinović</strong> (1915-1943.), declared
                a national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                53. <strong>Bogoljub Vukajlović Lala</strong> (1911-1943.),
                declared a national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                54. <strong>Mihajlo Vukajlović Crni</strong> (1919-1989.),
                awarded the Order of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                55. <strong>Jovan Vukanović</strong> (1912-1943.), declared a
                national hero on July 10, 1953.{" "}
              </p>
              <p>
                {" "}
                56. <strong>Radovan Vukanović</strong> (1906-1987.), awarded the
                Order of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                57. <strong>Dušan Vukasović</strong> (1909-1945.), declared a
                national hero on July 6, 1953.{" "}
              </p>
              <p>
                {" "}
                58. <strong>Stanko Vukašinović</strong> (1923-1944.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                59. <strong>Savo Vukelić</strong> (1917-1974.), awarded the
                Order of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                60. <strong>Đoko Vukićević</strong> (1914-2002.), awarded the
                Order of the National Hero on July 10, 1953.{" "}
              </p>
              <p>
                {" "}
                61. <strong>Svetozar Vukmanović Tempo</strong> (1912-2000.),
                awarded the Order of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                62. <strong>Boro Vukmirović</strong> (1912-1943.), declared a
                national hero on March 6, 1945.{" "}
              </p>
              <p>
                {" "}
                63. <strong>Dušan Vuković Zećo</strong> (1910-1993.), awarded
                the Order of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                64. <strong>Žarko Vuković Pucar</strong> (1911-1943.), declared
                a national hero on July 26, 1945.{" "}
              </p>
              <p>
                {" "}
                65. <strong>Pavle Vukoje</strong> (1908-1943.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                66. <strong>Pavle Vukomanović</strong> (1903-1977.), awarded the
                Order of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                67. <strong>Jovan Vukotić</strong> (1907-1982.), awarded the
                Order of the National Hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                68. <strong>Slavoljub Vuksanović</strong> (1922-1943.), declared
                a national hero on October 9, 1953.{" "}
              </p>
              <p>
                {" "}
                69. <strong>Milica Vučetić</strong> (1920-1944.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                70. <strong>Vlado Vučinić</strong> (1907-1942.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                71. <strong>Luka Vučinić</strong> (1922-1992.), awarded the
                Order of the National Hero on July 10, 1953.{" "}
              </p>
              <p>
                {" "}
                72. <strong>Milica Vučinić</strong> (1921-1943.), declared a
                national hero on July 13, 1953.{" "}
              </p>
              <p>
                {" "}
                73. <strong>Simo Vučinić</strong> (1916-1943.), declared a
                national hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                74. <strong>Ante Vučić</strong> (1913-1942.), declared a
                national hero on July 5, 1951.{" "}
              </p>
              <p>
                {" "}
                75. <strong>Jovan Vučković</strong> (1913-1944.), declared a
                national hero on November 27, 1953.{" "}
              </p>
              <p>
                {" "}
                76. <strong>Ljubo Vučković</strong> (1915-1976.), awarded the
                Order of the National Hero on December 20, 1951.{" "}
              </p>
              <p>
                {" "}
                77. <strong>Miloš Vučković</strong> (1914-1992.), awarded the
                Order of the National Hero on December 20, 1951.{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter Z
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Atanas Zabaznovski</strong> (1925-2013.), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                2. <strong>Milan Zabukovec</strong> (1923-97.), awarded the
                Order of the National Hero on December 20, 1951.
              </p>
              <p>
                3. <strong>Miloje Zakić</strong> (1912-42.), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                4. <strong>Dmitar Zaklan</strong> (1915-88.), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                5. <strong>Ivan Zafred</strong> (1908-43.), declared a national
                hero on October 8, 1953.
              </p>
              <p>
                6. <strong>Hasan Zahirović Laca</strong> (1920-43.), declared a
                national hero on July 26, 1945.
              </p>
              <p>
                7. <strong>Jovo Zvicer</strong> (1914-43.), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                8. <strong>Vinko Zevnik Viktor</strong> (1914-43.), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                9. <strong>Miloš Zekić</strong> (1915-84.), awarded the Order of
                the National Hero on December 20, 1951.
              </p>
              <p>
                10. <strong>Veljko Zeković</strong> (1906-85.), awarded the
                Order of the National Hero on November 27, 1953.
              </p>
              <p>
                11. <strong>Milan Zečar</strong> (1906-44.), declared a national
                hero on July 5, 1951.
              </p>
              <p>
                12. <strong>Miloš Zidanšek</strong> (1909-42.), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                13. <strong>Vojin Zirojević</strong> (1901-42.), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                14. <strong>Đorđe Zličić Ciga</strong> (1920-42.), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                15. <strong>Vujadin Zogović</strong> (1914-43.), declared a
                national hero on July 13, 1953.
              </p>
              <p>
                16. <strong>Miladin Zorić</strong> (1920-45.), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                17. <strong>Milan Zorić</strong> (1912-2006.), awarded the Order
                of the National Hero on November 27, 1953.
              </p>
              <p>
                18. <strong>Rade Zorić</strong> (1914-96.), awarded the Order of
                the National Hero on November 27, 1953.
              </p>
              <p>
                19. <strong>Žarko Zrenjanin Uča</strong> (1902-42.), declared a
                national hero on December 5, 1944.
              </p>
              <p>
                20. <strong>Đurađ Zrilić</strong> (1917-44.), declared a
                national hero on December 20, 1951.
              </p>
              <p>
                21. <strong>Asim Zupčević</strong> (1917-42.), declared a
                national hero on December 20, 1951.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Heroes with starting letter Ž
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>
                1. <strong>Stane Žagar</strong> (1896-1942.), declared a
                national hero on July 5, 1951.
              </p>
              <p>
                2. <strong>Miloš Ždero</strong> (1912-44.), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                3. <strong>Tone Žerjal Tonček</strong> (1915-42.), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                4. <strong>Milan Žeželj</strong> (1917-95.), awarded the Order
                of the National Hero on January 12, 1945.
              </p>
              <p>
                5. <strong>Slobodan Žilnik</strong> (1919-44.), declared a
                national hero on July 6, 1953.
              </p>
              <p>
                6. <strong>Živko Živković</strong> (1912-90.), awarded the Order
                of the National Hero on July 5, 1952.
              </p>
              <p>
                7. <strong>Ljubomir Živković Španac</strong> (1918-42.),
                declared a national hero on December 20, 1951.
              </p>
              <p>
                8. <strong>Tomaš Žižić</strong> (1909-42.), declared a national
                hero on December 20, 1951.
              </p>
              <p>
                9. <strong>Batrić Žugić</strong> (1912-42.), declared a national
                hero on November 27, 1953.
              </p>
              <p>
                10. <strong>Komnen Žugić</strong> (1923-46.), declared a
                national hero on November 27, 1953.
              </p>
              <p>
                11. <strong>Boško Žunić</strong> (1920-43.), declared a national
                hero on July 23, 1952.
              </p>
              <p>
                12. <strong>Andrej Žvan Boris</strong> (1915-45.), declared a
                national hero on November 27, 1953.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <p className="text-center m-8 text-2xl">
        List of 22 Foreign Heroes of Yugoslavia
      </p>
      <div className="flex flex-col lg:flex-row justify-evenly">
        {/* left Accordion foreign heroes*/}
        <Accordion
          defaultActiveKey="12"
          className="w-full lg:w-2/5 mb-4 lg:mb-0"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Sergey Biryuzov
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1691845815/Heroji%20-%20Strani/Sergey_Biryuzov_sghshl.jpg"
                }
                width={200}
                height={200}
                alt="Biryuzov"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Sergey Semyonovich Biryuzov </strong>(Russian: Серге́й
                Семёнович Бирюзо́в; 21 August 1904 - 19 October 1964) was a
                Marshal of the Soviet Union and Chief of the General Staff.
              </p>
              <p className="text-2xl text-bold">
                Early life and prewar service
              </p>
              <p className="m-2">
                Biryuzov was born in Skopin, in the Ryazan Governorate of the
                Russian Empire, in a working-class family of Russian ethnicity.
                He joined the Red Army in September 1922, studying at the 48th
                Rostov Infantry and Machine Gun and the 10th Vladikavkaz Courses
                in the North Caucasus Military District before transferring to
                the VTsIK Combined Military School in Moscow in October 1923.
                After graduating from the latter, Biryuzov returned to the North
                Caucasus Military District in September 1926 to command a
                platoon of the 65th Rifle Regiment of the 22nd Rifle Division.
                In the same year he became a member of the Communist Party of
                the Soviet Union. From December 1929 he served as commander of
                an airfield company of the 36th Aircraft Fleet in the district.
                After completing studies at the Military Faculty of the Moscow
                Zootechnical Institute between June 1930 and February 1931,
                Biryuzov served with the 3rd Rifle Regiment of the Moscow
                Proletarian Rifle Division, rising from company commander to
                chief of staff of the training battalion to rifle battalion
                commander during his service with the regiment. Entering the
                Frunze Military Academy in June 1934, Biryuzov became chief of
                staff of the 30th Rifle Division following his graduation in
                October 1937. He was acting division commander until February
                1938 and in April of that year became chief of the operations
                department Kharkov Military District staff. Biryuzov held this
                position until August 1939, when he became the commanding
                officer of the 132nd Rifle Division.
              </p>
              <p className="text-2xl text-bold">World War II</p>
              <p className="m-2">
                Biryuzov commanded this unit for the next three years, a rarity
                among Soviet generals, especially during World War II-as Soviet
                generals rarely held command positions for longer than a few
                months at most.[citation needed] Biryuzov&apos;s division was a
                part of Southwestern and Bryansk Fronts. Biryuzov was a fine
                division commander, often leading his division personally into
                battle. Within the first year of Operation Barbarossa (June
                1941), Biryuzov had been wounded five times, two times rather
                severely. In April 1942, he was made the Chief of Staff of the
                48th Army, which was a part of Bryansk Front. He commanded this
                unit until November 1942, when he was made the Chief of Staff of
                the 2nd Guards Army. He was in this position until April 1943,
                helping to lead this unit during Operation Saturn, when 2nd
                Guards Army helped crush the German 6th Army after the Germans
                had been surrounded during the Battle of Stalingrad. In April
                1943, he was made the Chief of Staff of the Southern Front,
                where he was a valuable aide to the Southern Front commander,
                Fyodor Tolbukhin. On October 20, 1943, Southern Front was
                renamed 4th Ukrainian Front. Biryuzov remained the Chief of
                Staff until May 1944 when he was transferred to 3rd Ukrainian
                Front, along with Tolbukhin. In October 1944, Biryuzov was
                transferred to command the 37th Army, which was a part of 3rd
                Ukrainian Front. He held this position through the end of the
                war, until May 1945. In these command positions, Biriuzov helped
                plan and carry out the expulsion of all German forces from the
                Ukraine, and then helped plan and carry out the liberation of
                Bulgaria and Yugoslavia.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                On October 19, 1964, Biryuzov and 32 others were killed when
                their{" "}
                <a
                  href="https://sr.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%BE%D0%BD%D1%81%D0%BA%D0%B0_%D0%BD%D0%B5%D1%81%D1%80%D0%B5%D1%9B%D0%B0_%D0%BD%D0%B0_%D0%90%D0%B2%D0%B0%D0%BB%D0%B8_1964."
                  className="underline"
                >
                  Ilyushin Il-18 crashed
                </a>{" "}
                against mount Avala near Belgrade. The urn containing his ashes
                is buried in the Kremlin.
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Sergey_Biryuzov"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Sergey_Biryuzov
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Ivan Bulkin
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1691848344/Heroji%20-%20Strani/Ivan_Bulkin_ycmgvr.jpg"
                }
                width={200}
                height={200}
                alt="Bulkin"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Ivan Antonovich Bulkin </strong>(Russian: Ivan
                Antonovich Bulkin; 1920 — 1974), a Soviet aviation major and a
                People&apos;s Hero of Yugoslavia.
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born on June 20, 1920, in the village of Tovtrud,
                Ukraine. He came from a peasant family. After completing
                secondary school in 1936, he enrolled in a Higher Pedagogical
                School, and upon its completion in 1939, he became a teacher in
                a village school. In 1940, he was drafted into the Red Army and
                sent to the War Aviation School, which he graduated from in
                1942. From 1942 onwards, as a lieutenant and later a senior
                lieutenant, Bulkin served on the front as a navigator in
                long-range aviation units that targeted enemy troop
                concentrations, machinery, railway junctions, and more. In early
                1944, the long-range aviation corps where Bulkin served received
                a task from the Soviet government to supply the Yugoslav
                People&apos;s Liberation Army with weapons, ammunition,
                communication equipment, medicine, and other supplies. Night
                flights to Yugoslavia soon began. In these flights, the crew
                consisted of three comrades: aircraft commander Captain
                Alexander Managadze, navigator Lieutenant Ivan Bulkin, and
                gunner-radio operator Corporal Petar Boltarchuk. Night after
                night, they took off from an airfield in the newly liberated
                territory of Ukraine, heading southwest. Bulkin&apos;s
                exceptional skill was demanded in these flights. He needed to
                precisely navigate the plane to the target, deep in the
                mountains of Yugoslavia. For hours, navigator Bulkin surveyed
                the terrain covered in nighttime darkness, searching for barely
                visible landmarks. The crew, in which Bulkin served, flew to
                various parts of Yugoslavia, delivering cargoes of 1.5 to 2 tons
                to the Yugoslav partisans. The crew successfully accomplished
                all tasks. Acknowledging the significant contribution of Soviet
                pilots in aiding the Yugoslav People&apos;s Liberation Army, the
                Presidency of AVNOJ (Anti-Fascist Council for the National
                Liberation of Yugoslavia) awarded the navigator Senior
                Lieutenant Ivan Antonovich Bulkin with the Order of the
                People&apos;s Hero of Yugoslavia on June 21, 1945. After the
                war, Bulkin remained in the military aviation. As a major in
                aviation, he was transferred to the reserve in 1960. In his
                later years, Bulkin lived in the Ukrainian city of Bila Tserkva,
                where he was elected as a deputy of the City Council six times
                by its residents. As a member of the Soviet Committee of War
                Veterans, Ivan Antonovich Bulkin visited Yugoslavia in 1961.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                He passed away on September 16, 1974, and was buried in a
                cemetery in Bila Tserkva, Ukraine.
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%98%D0%B2%D0%B0%D0%BD_%D0%91%D1%83%D0%BB%D0%BA%D0%B8%D0%BD"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Sergey_Biryuzov
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Andrej Vitruk
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1691872615/Heroji%20-%20Strani/Andrej_Vitruk_biksc6.jpg"
                }
                width={200}
                height={200}
                alt="Bulkin"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Andrei Nikiforovich Vitruk</strong> (Ukrainian: Andrii
                Nykyforovych Vitruk; Russian: Andrei Nikiforovich Vitruk;
                Zhytomyr, July 8, 1902 - Kiev, June 2, 1946) was a Soviet Major
                General of Aviation, a Hero of the Soviet Union, and a
                People&apos;s Hero of Yugoslavia.
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born on July 8, 1902, in the village of Andrushky, near
                Zhytomyr, on the territory of present-day Ukraine, into a poor
                peasant family. At the age of 13, he began working as a hired
                laborer in a sugar factory, and he joined the Red Army in 1924.
                He served for eight years in artillery units, and in 1934, he
                decided to become a pilot and enrolled in the Military Aviation
                School in Borisoglebsk. As a fighter-bomber pilot, he
                participated in the Battle of Khalkhin Gol against Japan, and
                later in the German and Soviet invasions of Poland in 1939 and
                the Winter War against Finland. In 1941, he underwent officer
                training and became the commander of the Soviet 65th Air
                Regiment in the Leningrad Military District. He remained in that
                position until the beginning of the German invasion of the
                Soviet Union. On July 6, 1941, he was wounded but did not
                withdraw, and he was promoted to the rank of colonel. During
                this time, his regiment replaced outdated Polikarpov I-15
                aircraft with more modern Ilyushin Il-2 aircraft. After
                training, the regiment was divided, and Vitruk remained the
                commander of one part of the regiment. In October, he was
                transferred to the Soviet Western Front near Moscow. In early
                1942, he completed his 21st flight but did not shoot down any
                enemy planes. Nevertheless, due to his excellent command of the
                regiment, he was awarded the title Hero of the Soviet Union on
                February 24, 1942. In July 1942, Vitruk became the commander of
                the 291st Division, which was later transformed into the 10th
                Guards Aviation Division of the Soviet Air Force. In this role,
                he commanded during the battles for Voronezh, Kyiv, and Targu
                Frumos. He later participated in battles that led to the capture
                of Ploiești, Bucharest, and Craiova in Romania, as well as in
                the Belgrade Offensive. After the liberation of Belgrade,
                Vitruk&apos;s group was placed at the disposal of the Yugoslav
                Partisans (NOVJ), which later fought on the Srem Front.
                Vitruk&apos;s group also participated in the capture of the
                Hungarian city of Székesfehérvár. For his contributions to the
                fights in Yugoslavia, the Presidency of the AVNOJ (Anti-Fascist
                Council for the National Liberation of Yugoslavia) awarded him
                the title of People&apos;s Hero on January 29, 1945, based on a
                proposal by Supreme Commander of the Yugoslav Army Marshal Josip
                Broz Tito.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                Andrei Vitruk passed away on June 2, 1946, after a serious
                illness, and he was buried in Kyiv.
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D1%98_%D0%92%D0%B8%D1%82%D1%80%D1%83%D0%BA"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Andrej_Vitruk
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Pavel Dmitrijenko
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1691849268/Heroji%20-%20Strani/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D1%94%D0%BD%D0%BA%D0%BE_uhk9ym.jpg"
                }
                width={200}
                height={200}
                alt="Bulkin"
                className="rounded-xl float-right w-24 md:w-48 m-2"
              ></Image>
              <p className="m-2">
                <strong>Pavel Ignatievich Dmitriyenko</strong> (Russian: Pavel
                Ignatievich Dmitrienko; Dnepropetrovsk, 1920 — Ukrainian SSR,
                January 1951), a Soviet pilot and a People&apos;s Hero of
                Yugoslavia.
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born in 1920 in Dnepropetrovsk. After completing
                secondary school, he enrolled in an aviation school. In 1942, as
                a navigator, he was assigned to long-range bomber aviation,
                where he served until the end of the war, participating in
                bombing enemy military targets. In 1944, the aviation regiment
                he served in was tasked with providing assistance to the
                Yugoslav People&apos;s Liberation Army. The crew, consisting of
                P.D. Petrov, the aircraft commander, Pavel Dmitriyenko, the
                navigator, A. Shcherbakov, the co-pilot, V. Vinogradov, the
                radio-telegraphist, and A. Lekomchev, the gunner, was one of the
                best in the regiment. Since the flights were conducted at night,
                over unfamiliar territory, without radio-navigation equipment to
                locate the drop-off point for supplies to the NOVJ (National
                Liberation Army of Yugoslavia), a special flight system with a
                leader was developed. As the leader, the first aircraft flew
                with one of the most experienced crews, which located the
                target, dropped the cargo, and circled above it while
                simultaneously transmitting prearranged radio signals. Other
                aircraft oriented themselves to these signals as if they were
                radio beacons and accurately hit the target. The crew of P.
                Petrov, with Pavel Dmitriyenko as the navigator, routinely
                conducted reconnaissance flights and took on the role of the
                leader. Navigator Dmitriyenko always brought the aircraft
                precisely to the target. The Presidency of the Anti-Fascist
                Council for the National Liberation of Yugoslavia awarded him
                the Order of the People&apos;s Hero of Yugoslavia on June 21,
                1945.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                After the war, Pavel Dmitriyenko continued to serve in aviation.
                He passed away in January 1951.
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D1%98%D0%B5%D0%BD%D0%BA%D0%BE"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Pavel_Dmitrijenko
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Vladimir Zdanov
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1691873965/Heroji%20-%20Strani/Vladimir_Zhdanov_nbug1d.jpg"
                }
                width={200}
                height={200}
                alt="Biryuzov"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Vladimir Ivanovich Zhdanov </strong>( Russian: Влади́мир
                Ива́нович Жда́нов ; Kyiv , April 29 , 1902 — Belgrade , October
                19, 1964 ) was a participant in the Russian Civil War and the
                Great Patriotic War , a colonel-general of the Red Army , a Hero
                of the Soviet Union and a national hero of Yugoslavia .
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born on April 29, 1902 in Kiev . After completing his
                education, he worked at the power plant in Yesentuky , Stavropol
                Territory. In August 1920, during the final battles of the civil
                war in Russia , he joined the worker-peasant Red Army as a
                volunteer . He fought in the North Caucasus and participated in
                the battles for Kislovodsk , Pyatigorsk , Nalchik , Grozny and
                others. He was wounded in September 1920, and a year later he
                was released on a long leave. In August 1923, he was returned to
                active military service. In 1926, he graduated from the Infantry
                School in Kiev, where he gained extensive command experience. In
                September of the same year, he was appointed as the platoon
                commander of the 70th Infantry Regiment, 24th Infantry Division,
                17th Rifle Corps of the Ukrainian Military District. From
                September 1928, he was the commander of the city of Vinnytsia in
                the Ukrainian SSR , and from September 1931, the commander of
                the machine gun company of the 70th Infantry Regiment. In 1932,
                he completed a training course for officers of armored units of
                the Red Army in Leningrad and then transferred to tank units.
                From March 1932, he was the commander of the tank company, and
                then the head of the workshop of the 32nd separate tank
                battalion. In August of the same year, he was appointed head of
                the workshop of the Fifth Tank Regiment of the Volga Military
                Region. In April 1933, he transferred to the 11th Mechanized
                Regiment of the 11th Cavalry Division in Orenburg , where he was
                the head of the workshop, assistant chief of staff and head of
                the regimental school. In March 1936, he transferred to the
                Infantry School in Kazan , where he taught tactics and
                automotive technology, and from October 1938 he was the head of
                the school&apos;s armored service. In 1940, he graduated with
                honors from the Frunze Military Academy , after which from April
                of the same year he was a university inspector at the Staff of
                the Volga Military Region. Immediately before the attack of the
                Axis Powers on the Soviet Union , on June 3, 1941, he was
                appointed deputy head of the Tank School in Sizranje . He was in
                this position during the first months of the Great Patriotic War
                . He was admitted to the Communist Party of the Soviet Union
                (CPSU) in 1941. At the beginning of 1942, he completed the
                accelerated course at the Voroshilov Higher Military Academy ,
                after which he was sent to the front in May of the same year. He
                was the Chief of Staff of the 13th Tank Corps (the corps was
                renamed the 4th Guards Mechanized Corps in January 1943 ) and
                participated in the defensive battles on the Don and near
                Stalingrad , as well as in the offensive of Soviet troops near
                Stalingrad , in Rostov , Donbass and Ph.D. For his merits in the
                previous battles, on June 7, 1943, by Decree of the Council of
                People&apos;s Commissars of the USSR, he was promoted to the
                rank of Major General, and he was appointed commander of the 4th
                Guards Mechanized Corps (then part of the Second, and then part
                of the Third Ukrainian Front) on March 31, 1944, and he remained
                in this position until the end of the war. For a long time, the
                mechanized corps was part of the cavalry-mechanized group of the
                Third Ukrainian Front, which repeatedly participated in deep
                penetrations into enemy rears and was surrounded by strong enemy
                forces. He demonstrated his commanding abilities in particular
                in August 1944 in the battles in the south of Ukraine, in the
                Jaško-Kishniev operation , which opened the way for Soviet
                troops to the Balkans .. He skilfully led the combat formations
                of the corps when breaking through the enemy&apos;s defenses on
                the Dniester and during the encirclement of the enemy&apos;s
                Kishinev group, when around 14,000 enemy soldiers and officers
                were captured. For his merits in these battles, on September 13,
                1944, by Decree of the Presidium of the Supreme Soviet of the
                USSR, he was declared a Hero of the Soviet Union and awarded the
                Order of Lenin, and by Decree of the Council of People&apos;s
                Commissars of the USSR, he was promoted to the rank of
                lieutenant general .
              </p>
              <p className="text-2xl text-bold">World War II</p>
              <p className="m-2">
                After the liberation of Bulgaria , in September 1944, his corps
                moved to Yugoslavia, where he participated in the battles for
                the liberation of its eastern parts. During the Belgrade
                operation , in October 1944, the fighters of the 4th Guards
                Mechanized Corps fought together with the fighters of the
                People&apos;s Liberation Army of Yugoslavia (NOVJ). On November
                6, 1944, he was awarded the Order of National Hero for his
                merits in the fight against the common enemy and his
                contribution to the liberation of Belgrade by Decree of the
                Presidency of AVNOJ . His mechanized corps stood out during the
                Budapest operation , when near Esztergom he managed to close the
                environment around the Budapest enemy group. He then captured
                the cities of Kunsentmiklos , Hatvan and Balašadjarmat in the
                vicinity of Budapest and repelled enemy counterattacks. In
                February 1945, the mechanized corps fought to hold and expand
                the bridgehead on the Hron River in southern Czechoslovakia ,
                after which it was in reserve.After the end of World War II, he
                continued to command the 4th Guards Mechanized Corps until its
                disbandment, and then the 5th Guards Mechanized Division. From
                June 1947 to April 1949, he was the commander of the 6th Guards
                Mechanized Army in the Transbaikal Military District. In 1950,
                he completed the course at the Voroshilov Higher Military
                Academy and from March 1951 he was the Chief of Staff, and then
                the Deputy Commander of the Far Eastern Military District. From
                August 1953, he was the assistant commander of the South Ural
                Military District, and from April 1954, the assistant commander
                of the Central Group of Forces. From July of the same year, he
                was the head of the Directorate for Combat Training of the
                Central Group of Forces. From September 1955, he was the first
                deputy commander of the Transbaikal Military District. In
                September 1961, he was appointed a senior military advisor to a
                military district unit of the People&apos;s Army of the German
                Democratic Republic (GDR). By decree of the Council of Ministers
                of the USSR on April 13, 1964, he was promoted to the rank of
                colonel-general, and in June of the same year he was appointed
                head of the Military Academy of Armored Forces.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                In October 1964, he was designated as a member of the Soviet
                military delegation that was supposed to come to the celebration
                of the 20th anniversary of the liberation of Belgrade. Together
                with him, the delegation included, among others, Marshal of the
                Soviet Union Sergei Biryuzov , Major General Nikolai Mironov,
                Lieutenant General Nikolai Shkodunovich, retired Lieutenant
                General Ivan Kravtsov and retired Major General Leonid Bocharov.
                When arriving in Belgrade, on October 19, 1964,{" "}
                <a
                  href="https://sr.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%BE%D0%BD%D1%81%D0%BA%D0%B0_%D0%BD%D0%B5%D1%81%D1%80%D0%B5%D1%9B%D0%B0_%D0%BD%D0%B0_%D0%90%D0%B2%D0%B0%D0%BB%D0%B8_1964."
                  className="underline"
                >
                  the Ilyushin Il-18 plane crashed{" "}
                </a>
                into the peak of Avala due to poor visibility , and all 18
                members of the delegation and the plane&apos;s crew died in this
                plane crash . All those who died in the plane crash were buried
                in a common grave in the Novodevichy cemetery in Moscow . A
                monument to Soviet war veterans was erected at the place of his
                death in 1965 , and one of the main streets in Belgrade bore the
                name of General Zhdanov for many years, but in 1997 the old name
                of Resavska was returned. Since 2017, another street in New
                Belgrade has been named after him.
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Vladimir_Zhdanov"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Vladimir_Zhdanov
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Michał Rola-Żymierski
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1691875937/Heroji%20-%20Strani/Michal_rola_zymierski_imasqr.jpg"
                }
                width={200}
                height={200}
                alt="Biryuzov"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Michał Rola-Żymierski </strong> (pronounced [`mixaw
                `rɔla ʐɨ`mjɛrskʲi]; 4 September 1890 - 15 October 1989) was a
                Polish high-ranking Communist Party leader, communist military
                commander and NKVD secret agent. He was appointed as Marshal of
                Poland by Joseph Stalin, and served in this position from 1945
                until his death. He supported the 1981 imposition of Martial law
                in Poland.
              </p>
              <p className="text-2xl text-bold">Early life</p>
              <p className="m-2">
                Rola-Żymierski was born Michał Łyżwiński in Kraków under the
                Austrian Partition, to the family of railway clerk, Wojciech
                Łyżwiński. He joined the Zarzewie and later joined the Polish
                Rifle Squads. At the age of 20, he enrolled at the law faculty
                of the Jagiellonian University in 1910, but was drafted a year
                later. In the years 1911-1912, he served compulsory service in
                the Austro-Hungarian Army, where he graduated from the school of
                reserve officers. After his brother committed a widely
                publicised murder-robbery in Kraków, he began to call himself
                Żymierski around 1913.
              </p>
              <p className="text-2xl text-bold">World War II</p>
              <p className="m-2">
                Żymierski returned to Poland shortly before the Nazi-Soviet
                invasion of Poland at the onset of World War II, and soon
                resumed his clandestine work for the NKVD (as revealed first by
                Józef Światło). He unsuccessfully applied for return to the
                army. In the fall of 1939, he obtained false documents in the
                name of Zwoliński which he used it during the German occupation
                of Poland. According to the official biography of Żymierski,
                published anonymously in 1986, in February 1940 an underground
                civil court composed of anti-Piłsudski activists considered the
                1927 arrest and sentencing of Żymierski as unjust and
                rehabilitated him. The civil court was probably unaware that
                Żymierski was then an agent of the NKVD, and the court&apos;s
                decision had no legal significance and force in the light of the
                applicable criminal law of the Second Polish Republic, as the
                only judicial authorities that could acquit Żymierski under the
                conditions of the occupation was the judicial system operating
                from May 1940. Under the pseudonym &ldquo;Rola&ldquo;, he
                engaged in the Soviet dealings with Nazi German Gestapo secret
                police. In 1943, by Soviet executive order, he was named the
                deputy commander of the Communist and Soviet-backed Gwardia
                Ludowa, and from 1944, the commander of Armia Ludowa. He was
                promoted by the Communist-backed Polish Committee of National
                Liberation back to the rank of General and became the
                commander-in-chief of the Polish Army fighting alongside the
                Soviet Union (the Polish Armed Forces in the East). He was
                Minister of Defence in the Provisional Government of the
                Republic of Poland (Rząd Tymczasowy Rzeczypospolitej Polskiej,
                January-June 1945). On 3 May 1945, by order of Stalin, he was
                promoted to the rank of Marshal of Poland.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                He died in Warsaw on 15 October 1989 and was the last person to
                hold the rank of Marshal of Poland. He was buried with full
                military honors at Powązki Military Cemetery in Warsaw.
                Żymierski&apos;s grave was desecrated twice by unknown
                perpetrators.
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Micha%C5%82_Rola-%C5%BBymierski"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Michal_Rola-Zymierski
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Pavel Jakimov
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1692275115/Heroji%20-%20Strani/Pavel_Jakimov_g8mv0k.jpg"
                }
                width={200}
                height={200}
                alt="Jakimov"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Pavel Nikitovich Yakimov</strong> ( June 30 [ July 13 ]
                , 1910 , St. Petersburg - March 5 , 1968 ) - Soviet pilot, Hero
                of the Soviet Union (1944), participant in the Great Patriotic
                War , navigator of the aircraft of the 1st transport aviation
                division of the main command of the Air Force of the Red Army ,
                People&apos;s Hero of Yugoslavia , guard captain .
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                Born in St. Petersburg in a working class family. He graduated
                from the Leningrad Aviation College in 1931 . He worked at the
                Batayskaya Aviation School of the Civil Air Fleet, where he
                completed a military training course. Since 1939, he worked as a
                navigator at the Rostov Aviation Enterprise. On the fronts of
                the Great Patriotic War since October 1941 . In January 1943, P.
                N. Yakimov, as part of a group of Soviet pilots and aviation
                specialists of the 1st transport aviation division, was sent to
                the UK to master and distill 200 Armstrong Whitworth AW41
                Albermarle bombers in the USSR . In the summer and autumn of
                1943, he participated in preparing the Tehran Conference of the
                Heads of the USSR, Great Britain and the USA ( November 28 -
                December 1 , 1943), transporting to Iran a large number of
                officers and soldiers of the Red Army, representatives of
                embassies, intelligence officers, support groups, translators,
                as well as various cargoes necessary for this purpose. He
                especially distinguished himself in the performance of special
                tasks of the command for the delivery of weapons, ammunition,
                food, medicine to the location of the People&apos;s Liberation
                Army of Yugoslavia (NOAU) from the air base in the city of Bari
                (Italy) in 1944, the removal of the wounded and the rescue of
                the Supreme Headquarters of the NOAU, led by Marshal Josip Broz
                TitoJune 4, 1944. For this operation, on June 20, 1944, he was
                awarded the title of Hero of the Soviet Union and the title of
                People&apos;s Hero of Yugoslavia. Since 1947, P.N. Yakimov has
                been in reserve. Lived in Moscow . He worked as a flag-navigator
                of the detachment of the Separate Aviation Group of
                International Air Communications, and as the chief of staff of
                the aviation enterprise. Then he moved to Estonia, lived in the
                city of Kingisepp (now the city of Kuressaare, Saaremaa island),
                worked as the head of the airport .
              </p>

              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                The last years he lived in the city of Tallinn . He died in
                Tallinn on March 5, 1968
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://ru.wikipedia.org/wiki/%D0%AF%D0%BA%D0%B8%D0%BC%D0%BE%D0%B2,_%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%BE%D0%B2%D0%B8%D1%87"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Pavel_Yakimov
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Boris Kalinkin
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1692350892/Heroji%20-%20Strani/Boris_Kalikin_q6dkve.jpg"
                }
                width={200}
                height={200}
                alt="Kalikin"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Boris Tikhonovich Kalinkin</strong> ( Russian: Кали́нкин
                Бори́с Ти́хонович ; Dubasovo , Saratov Province , April 19 , 1913
                - June 10, 1945 ) was a guard captain of the Red Army , a Hero
                of the Soviet Union and a volk hero of Yugoslavia .
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born on April 19 1913 . year in Dubasovo , Saratov
                province . In 1915, he moved with his family to the village of
                Rtiščevo . After the end of 1928 . year of schooling, Boris got
                a job at the Meat Processing Plant. There he studied in the
                Komsomol ( Communist Youth League ) . In 1931 _ he was sent to
                the aviation school, which he graduated in 1932 . and became a
                pilot. In the period from 1933 . until 1941 . He worked in civil
                aviation as a pilot-instructor, unit commander, and flew in the
                Caucasus . Since the beginning of the Patriotic War , Kalinkin,
                as the second pilot of a military transport plane, flew to the
                Soviet partisans, participated in the execution of air landings,
                the delivery of weapons and military equipment to units at the
                front. From July 1943 . he was the second pilot in the crew of
                Alexander Shornikov . He was admitted to the membership of the
                Communist Party of the Soviet Union in January 1941. In the
                winter of 1944 . , Boris, as a second pilot, participated in the
                transfer of the Soviet Military Mission to Yugoslavia , and flew
                to the airport in Medeno polje. According to the memories of the
                commander of this plane, Alexander Shornikov, Hero of the Soviet
                Union and national hero of Yugoslavia , English and American
                aviation experts and pilots, who were at the airbase in Bari (
                Italy ), claimed that the landing of the plane at such an
                improvised airport in hills, such as Medeno polje, impossible,
                let alone take off from it with loaded cargo, in winter. In
                order for the &ldquo;non-believers&ldquo; to be convinced that
                the Soviet plane had successfully landed on Medeno Polje ,
                &ldquo;material evidence&ldquo; had to be brought. Soviet pilots
                bought several woven baskets in an Italian store, filled them
                with snow in the Yugoslav hills, and after a regular night
                flight brought them to Bari and showed them to their Western
                allies. The Soviet plane, which was flown by guard captain Boris
                Kalinkin, made, in the winter of 1944, a series of flights,
                being at the disposal of units of the People&lsquo;s Liberation
                Army of Yugoslavia, delivering them Soviet military equipment
                and transferring, on the way back, wounded Yugoslav fighters and
                elders to hospitals in Italy. Boris Kalinkin was the second
                pilot of the Soviet plane that, on the order of the Soviet
                Command, flew from Bari to Kupreško Polje , in order to transfer
                the highest leadership of the NOVJ , led by Marshal Tito , to a
                safer place . The flight was carried out in extremely difficult
                weather conditions, the route led over an area where the
                occupier had strong anti-aircraft defenses. In addition, the
                crew was left without an experienced navigator, Pavel Yakimov
                (he was at Kupreshko Polje), Boris Kalinkin was ready to take
                control of the plane at any moment, if anything happened to the
                commander Aaleksandr Shornikov. Thanks to the courage and skill
                of the Soviet pilots, two complex and dangerous night flights
                were successfully completed. On June 20, 1944, the Presidium of
                the Supreme Council of the Soviet Union proclaimed Guards
                Captain Boris Kalinkin a Hero of the Soviet Union for the
                performance of a special task by the Soviet Command . And on
                September 25, 1944, the Presidency of the Anti-Fascist Council
                of the People&lsquo;s Liberation of Yugoslavia declared him a
                national hero of Yugoslavia . He was also awarded the Order of
                Lenin and the Medal for the Defense of the Caucasus.
              </p>

              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                Boris Tikhonovich Kalinkin tragically lost his life in a traffic
                accident, one month after the end of the war against fascist
                Germany , on June 10, 1945 . years. He was buried at the
                Novodevichy Cemetery in Moscow , in Heroes Alley. A street in
                his birthplace, Rštičevo, bears his name.
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%BA%D0%B8%D0%BD"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Boris_Kalinkin
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Semyon Kozak
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1692367324/Heroji%20-%20Strani/Semyon_Antonovich_Kozak_xbddzr.jpg"
                }
                width={200}
                height={200}
                alt="Kalikin"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Semyon Antonovich Kozak</strong> (Russian: Семён
                Антонович Козак; 23 May [O.S. 10 May] 1902 - 24 December 1953)
                was a Ukrainian Soviet Army lieutenant general who was twice
                awarded the title Hero of the Soviet Union for his command of a
                division during World War II.
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born on May 23, 1902 . in a village near Korosten in
                Ukraine . As a nineteen-year-old young man, he participated in
                the Civil War in the Soviet Union and served in special task
                forces. He joined the Communist Party of the Soviet Union in
                1923 . years. Since 1924 . In 1990 he was the chief of staff of
                the Red Army , and from the beginning of the Great Patriotic War
                he was in charge of training reserve military units in the rear.
                In October 1942 . In 1998 he was sent to the active army and
                fought on the Stalingrad, Voronezh, Seventh and Third Ukrainian
                fronts. Under his command, the 73rd Guards Rifle Division
                crossed the road from the Volga to the middle course of the
                Danube . For its participation in the destruction of German
                troops near Stalingrad , the division received the honorary name
                &ldquo;Stalingradska&ldquo;. For the successful forcing of the
                Dnieper River and securing the staging area for the advance of
                the Red Army, by Decree of the Presidium of the Supreme Soviet
                of the Soviet Union , Major General Semyon Kozak was declared a
                Hero of the Soviet Union . October 1943 . he was contused, but
                continued to fight. He was awarded for his war merits in 1943 .
                in 1944 , with the Order of Kutuzov and the Medal for the
                Defense of Stalingrad . orders of Suvorov , Bogdan Khmeljnicki
                and the red flag. In October 1944 . , the 73rd Stalingrad Guards
                Rifle Division, part of the troops of the Third Ukrainian Front,
                participated together with units of the People&apos;s Liberation
                Army of Yugoslavia in the Belgrade operation and the liberation
                of the capital of Yugoslavia . During the battle for Belgrade, a
                fierce battle was fought in the area of the Main Railway
                Station, a group of Ministry buildings, in Nemanja Street , and
                on Čukarica , where the fascists defended themselves
                tenaciously. In that part of the city, the brigades of the Sixth
                Proletarian , 16th Vojvodina and 28th Strike Divisions of the
                NOVJ , the Fourth Guards Mechanized Corps , the 73rd Guards and
                the 236th Divisions of the Red Army fought together . The
                Presidency of the Anti-Fascist Council of the Peopl&apos;s
                Liberation of Yugoslavia awarded orders and medals to more than
                two thousand Soviet soldiers and officers for their bravery and
                courage in the battles for the liberation of Belgrade . Semyon
                Kozak died on October 20, 1944 . awarded with the Order of the
                National Hero of Yugoslavia . After the Belgrade operation, the
                division under his command continued combat operations, and
                among the first units of the Third Ukrainian Front, forced the
                Danube . For excellent management of the combat actions of the
                73rd Guards Rifle Division during the forcing and expansion of
                the staging area on the right bank of the Danube, and the
                bravery and heroism shown at that time, by decree of the
                Presidium of the Supreme Council of the Soviet Union dated April
                28 , 1945 . Major General Semyon Antonovich Kozak was declared a
                double Hero of the Soviet Union .
              </p>

              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                After the end of the war, he remained in the Soviet Army . He
                died on December 23 , 1953 . in South-Sakhalinsk . He was buried
                at the Novodevichy cemetery in Moscow .
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BC%D1%98%D0%BE%D0%BD_%D0%9A%D0%BE%D0%B7%D0%B0%D0%BA"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Semyon_Kozak
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Ivan Konstantinov
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1691007065/No-Image_bjme29.jpg"
                }
                width={200}
                height={200}
                alt="Konstantinov"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Ivan Nikiforovich Konstantinov</strong> ( Russian: Иван
                Никифорович Константинов ; Siberia , 1920 ), pilot, guard
                captain of the Red Army and national hero of Yugoslavia .
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born in 1920 . in Siberia . On the eve of the war, he
                graduated from flight school and became a medium bomber pilot.
                During 1941-1943. In 1998, he participated in the combat actions
                of long-range bomber aviation - bombing enemy troops and
                equipment in the enemy&apos;s rear, railway junctions in the
                Soviet territory, which was temporarily occupied by the enemy,
                and in the territory of Germany. Since the spring of 1944 .
                Guard captain, deputy squadron commander Ivan Konstantinov
                participated in the delivery of military equipment for the
                People&apos;s Liberation Army of Yugoslavia . Together with his
                wartime comrades - navigator Nikolaj Abramov and aviation
                technician Arkady Cirkov, he made about fifty night combat
                flights in Yugoslavia - in Serbia , Montenegro , Croatia and
                Dalmatia . The crew performed all tasks excellently. After the
                end of the war, Ivan Nikiforovich Konstantinov was transferred
                to the reserve, and worked in civil aviation.
              </p>
              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%98%D0%B2%D0%B0%D0%BD_%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD%D0%BE%D0%B2"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Ivan_Konstantinov
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Vojo Kušić
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1692793497/Heroji%20-%20Strani/Vojo_Kushi_qhbtjl.jpg"
                }
                width={200}
                height={200}
                alt="Kushi"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Vojo Kushi</strong> (Serbian Cyrillic: Bojo Кушић,
                August 3, 1918 - October 10, 1942) was an Albanian and Yugoslav
                communist guerilla fighter (partisan) and one of the founders of
                the Communist group based in Shkodër, following the Italian
                occupation of Albania in April 1939. He was proclaimed a
                National Hero of Yugoslavia by the Yugoslav communist government
                on February 12, 1945, and then a Hero of Albania by the Albanian
                communist government in 1946.
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                Kushi was born in 1918, in Vrakë, near Shkodër. He belonged to
                either the Serb-Montenegrin or the Aromanian minority of
                Albania. His original surname may have been Kušić (Serbian
                Cyrillic: Кушић); due to King Zog&apos;s state persecution of
                Serbs following 1920, surnames with obvious Slavic suffixes such
                as &apos;-ić&apos; and &apos;-vić&apos; were removed, as were
                Slavic-speaking schools. Following the Italian occupation of
                Albania in April 1939, the first communist revolutionary
                organization was established in Shkodër (Shkodër group), which
                included minority members brothers Vaso and Branko Kadija, Vojo
                Kushi, Jordan Misja, Ivo Jovanov, Vojin Dragović, Petar
                Bulatović and Vasil Shanto. The Shkodër group was led by Shanto
                and Qemal Stafa. The other organization, established in Korçë
                (Korçë group), was united into one on November 8, 1941, in
                Tirana, at the house of Bojko Lazarov, hence forming the
                Communist Party of Albania. In 1942, he was chosen as a member
                of the regional committee for Tirana and appointed commander of
                guerilla units. Enver Hoxha was appointed the Party leader in
                order to include the majority Muslim population. Kushi was sent
                by the Albanian government for education at the Military Academy
                in Belgrade, in the Kingdom of Yugoslavia. Before his return to
                Albania, he joined the Yugoslav Partisans and became a member of
                the Communist Party of Yugoslavia. One of the discussions of
                Partisans in Prokletije, including Kushi, was included in Đurica
                Labović&apos;s Lučonoša sa Prokletija (1985).
              </p>

              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                The Albanian fascist regime sentenced communist fighters to
                death for treachery and unrest. In Tirana, Qemal Stafa, and
                later Kushi, Sadik Stavileci and Xoxi Martini were surrounded
                and killed by carabinieri on 10 October 1942. Their house on the
                Kodra Kuqe quarter was surrounded and a fight ensued for 6
                hours, with tanks forcing them out; Kushi stormed out and killed
                several carabinieri, then ran out of bullets and jumped onto the
                tank and was killed
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Vojo_Kushi"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      en.wikipedia.org/wiki/Vojo_Kushi
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* right Accordion foreign heroes*/}
        <Accordion
          defaultActiveKey="1"
          className="w-full lg:w-2/5 mb-4 lg:mb-0"
        >
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Luigi Longo
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1692795355/Heroji%20-%20Strani/Luigi_Longo_oudqey.jpg"
                }
                width={200}
                height={200}
                alt="luigi longo"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Luigi Longo</strong> (15 March 1900 - 16 October 1980),
                also known as Gallo, was an Italian communist politician and
                general secretary of the Italian Communist Party from 1964 to
                1972. He was also the first foreigner to be awarded an Order of
                Lenin.
              </p>
              <p className="text-2xl text-bold">Early life</p>
              <p className="m-2">
                Longo was born in Fubine, in the province of Alessandria,
                Piedmont. As a student at the Politecnico di Torino, he became
                active in the youth wing of the Italian Socialist Party (PSI),
                and engaged in political propaganda from a Marxist perspective.
                He was a regular visitor to the offices of L&apos;Ordine Nuovo,
                the newspaper founded by Antonio Gramsci, and became acquainted
                with Gramsci and Palmiro Togliatti. In 1921, at the Livorno
                Congress of the PSI, he was one of the instigators of the split
                in the party, when supporters of Vladimir Lenin&apos;s Bolshevik
                line left to form the Italian Communist Party (PCI). He became a
                leading figure in the new PCI along with Togliatti, Gramsci and
                others. Longo was a fervent anti-fascist, and, when Benito
                Mussolini established his Fascist regime in Italy in 1922, he
                emigrated to France where he became one of the principal leaders
                of the PCI. In the same year he was a member of a delegation to
                the Comintern Congress in Moscow, where he met Lenin. He would
                return to Moscow several times in the years to come, with a
                specific expertise in political ideology, and was to meet Joseph
                Stalin and other members of the Soviet Union leadership. In 1933
                he became a member of the Comintern&apos;s political commission.
                In 1934 he signed a joint action agreement between the PCI and
                the PSI.
              </p>
              <p className="text-2xl text-bold">
                Spanish Civil War and Resistance
              </p>
              <p className="m-2">
                Longo took part in the Spanish Civil War as an inspector of the
                Republican troops in the International Brigades under the
                leadership of Randolfo Pacciardi, and took the nom de guerre
                Gallo. After the defeat of the Second Spanish Republic by
                General Franco, he returned to France. Following the 1940
                invasion of France, the Vichy-based collaborationist government
                was established under Philippe Pétain. Longo was arrested and
                detained in an internment camp at Vernet from 1939 to 1941.
                There he made the acquaintance of Leo Valiani, among other
                left-wing radicals. In 1941 he was handed over to the Italian
                fascist authorities and interned at Ventotene. When Mussolini
                fell from power on 25 July 1943, Longo was released. After
                Mussolini regained control of Northern Italy (which he led as
                the Italian Social Republic), Longo took command of the
                Garibaldi Brigades, the communist forces in the Italian partisan
                resistance. Longo became deputy commander of the Gruppo
                volontari per la liberta (&apos;Group of Volunteers for
                Freedom&apos;), and a close collaborator of Ferruccio Parri; in
                April 1945 Longo was one of the leading figures of the uprising
                in northern Italy. It was at Dongo on Lake Como on 28 April 1945
                and whilst being escorted by the Garibaldi Brigade partisans
                that Mussolini and his mistress Claretta Petacci were executed;
                the extent to which Longo took part in the killings has been the
                subject of dispute by historians.
              </p>

              <p className="text-2xl text-bold">Post-war</p>
              <p className="m-2">
                After the war he was a member of the National Congress and in
                1946 was elected to the Constituent Assembly. Also in 1946,
                Teresa Mattei chose the mimosa as the symbol of International
                Women&apos;s Day at the request of Longo. He was subsequently
                elected, and repeatedly re-elected, to the Italian Chamber of
                Deputies on the PCI list and was a member of the party
                leadership. In 1964, after the death of Palmiro Togliatti, he
                became secretary of the PCI, declaring that he was &ldquo;a
                secretary, not a boss&ldquo;. In this role, he continued
                Togliatti&apos;s line, known as the &ldquo;Italian road to
                Socialism&ldquo;, playing down the alliance between the Italian
                Communist Party and the Soviet Union. He reacted without
                hostility to the new left movements that sprang up in 1968 and,
                among the leaders of the PCI, was one of those most disposed to
                engage with the new activists, although he did not condone their
                excesses.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                In late 1968 Longo suffered a stroke; although he partially
                recovered in the subsequent months, from February 1969 he was
                assisted in most decisions by Enrico Berlinguer acting as
                vice-secretary. In 1972 Longo resigned the position of party
                secretary, supporting the choice of Berlinguer as his successor.
                From that year until his death, eight years later in Rome, he
                was honorary president of the PCI. In that capacity, he
                expressed his opposition to the &ldquo;national
                solidarity&ldquo; line the PCI was later to espouse.
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Luigi_Longo"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      en.wikipedia.org/wiki/Luigi_Longo
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="12">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Rodion Malinovsky
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1693425820/Heroji%20-%20Strani/Rodion_Malinovsky_rhzmcw.jpg"
                }
                width={200}
                height={200}
                alt="Malinovsky"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Rodion Yakovlevich Malinovsky </strong> (Russian: Родио́н
                Я́ковлевич Малино́вский, Ukrainian: Родіо́н Я́кович Малино́вський ;
                23 November [O.S. 11 November] 1898 - 31 March 1967) was a
                Soviet military commander and Marshal of the Soviet Union.
                During World War II, he took part in several of the Red
                Army&apos;s key victories over Nazi Germany, including the
                Battle of Stalingrad and the Siege of Budapest. As Minister of
                Defence of the Soviet Union from 1957 to 1967, Malinovsky
                oversaw the strengthening of the Soviet Army and helped build up
                the image of the Soviet Union as a military superpower.
              </p>
              <p className="text-2xl text-bold">Early life</p>
              <p className="m-2">
                A Ukrainian, Malinovsky was born in Odesa to a single mother (a
                version has Malinovsky being born after the death of his father,
                others simply have the father as unknown). Malinovsky&apos;s
                mother soon left the city for the rural areas of Southern
                Russia, and married. Her husband, a poverty-stricken peasant,
                refused to adopt her son and expelled him when Malinovsky was
                only 13 years old. The homeless boy survived by working as a
                farmhand, and eventually received shelter from his aunt&apos;s
                family in Odesa, where he worked as an errand boy in a general
                store. After the start of World War I in July 1914, Malinovsky,
                who was only 15 years old at the time (too young for military
                service), hid on the military train heading for the German
                front, but was discovered. He nevertheless convinced the
                commanding officers to enlist him as a volunteer, and served in
                a machine-gun detachment in the frontline trenches. In October
                1915, as a reward for repelling a German attack, he received his
                first military award, the Cross of St. George of the 4th class,
                and was promoted to the rank of corporal. Soon afterwards, he
                was badly wounded and spent several months in the hospital.
                After his recovery, he was sent to France in 1916 as a member of
                the Western Front Russian Expeditionary Corps. Malinovsky fought
                in a hotly contested sector of the front near Fort Brion and was
                promoted to sergeant. He suffered a serious wound in his left
                arm, and received a decoration from the French government. After
                the Bolshevik Revolution in Russia, the French government
                disbanded some Russian units, but others were transferred to a
                newly created unit called the Russian Legion, which was attached
                to the Moroccan Division. Malinovsky fought against the Germans
                until the end of the war. During this time, he was awarded the
                French Croix de guerre and promoted to senior NCO.
              </p>
              <p className="text-2xl text-bold">World War II</p>
              <p className="m-2">
                The Red Army was hard-pressed by Germans in the Battle of
                Stalingrad, and Stalin entrusted Malinovsky with the command of
                the hastily formed 66th Army to hold positions north-east of
                Stalingrad. At the same time Stalin ordered Nikita Khrushchev,
                who served as his top political officer in Stalingrad, to
                &ldquo;keep an eye&ldquo; on Malinovsky.[citation needed] The
                66th Army had no combat experience, but this was the first time
                in the war Malinovsky had commanded a unit that was near full
                strength in both troops and equipment. In September and October
                1942, he went on the offensive. His territorial gains were
                marginal, but he denied the Germans an opportunity to encircle
                Stalingrad from the north, and, slowed down, they decided to
                push into the city. Later that month, Stavka dispatched
                Malinovsky to the Voronezh Front as its deputy commander; in
                December 1942, he was sent back to Stalingrad. There the Red
                Army achieved its greatest success to that point in the war: on
                22 November the Red Army fronts encircled the German Sixth Army.
                The German Army Group Don, commanded by Field Marshal Erich von
                Manstein, gathered its Panzer troops in the town of Kotelnikovo
                150 kilometres (93 mi) west of Stalingrad and launched a
                desperate counterattack to save the Sixth Army. Malinovsky led
                the powerful Soviet Second Guards Army against Hoth. In vicious
                fighting he forced the Germans to retreat, breached deeply
                echeloned and well-prepared German defenses, and destroyed the
                Kotelnikovo army grouping. It was the first World War II
                large-scale clash of armor to be lost by Germany. Malinovskywith
                `&apos;s victory sealed the fate of 250,000 German and other
                Axis Powers soldiers trapped in the Stalingrad pocket. Stalin
                promoted Malinovsky to colonel general, and awarded him with the
                highest Soviet decoration for outstanding generalship — the
                Order of Suvorov of the 1st degree. In February 1943, Malinovsky
                resumed his command of Southern Front, and in less than two
                weeks he expelled Manstein from Rostov-on-Don, opening the road
                to Ukraine to the Red Army. In March 1943, Stalin elevated him
                to rank of Army General and gave him command of Southwestern
                Front, tasked to drive German troops away from the industrially
                rich Donbas. Through a sudden attack in mid-October, Malinovsky
                managed to surprise a large German force in the regionwith
                `&apos;s key city of Zaporizhia and captured it. The campaign
                split German forces in the South and isolated German forces in
                Crimea from the rest of the German Eastern Front. On 20 October,
                the Southwestern Front was renamed 3rd Ukrainian Front. From
                December 1943 to April 1944, Malinovsky smashed the German Army
                Group South, and liberated much of the southern Ukraine,
                including Kherson, Mykolaiv and his home city of Odessa. By that
                time, according to Khrushchevwith `&apos;s opinion, Stalin grew
                much more confident of Malinovskywith `&apos;s loyalty.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                Malinovsky died on 31 March 1967 after an illness. Official
                medical report mentions metastatic pancreatic cancer. He was
                honoured with a state funeral and cremated. His urn was placed
                in the Kremlin Wall Necropolis. The government gave his name to
                the leading Soviet Military Academy of Tank Troops in Moscow and
                to the 10th Guards Uralsko-Lvovskaya Tank Division. Malinovsky
                continued to be regarded as one of the most important military
                leaders in the history of Russia even after the dissolution of
                the Soviet Union.
              </p>
              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Rodion_Malinovsky"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      en.wikipedia.org/wiki/Rodion_Malinovsky
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="13">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Aleksandar Managadze
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Accordion.Body className="visible">
                <Image
                  src={
                    "https://res.cloudinary.com/dvwnqprsp/image/upload/v1693429456/Heroji%20-%20Strani/Aleksandar_Managadze_lxsofi.jpg"
                  }
                  width={200}
                  height={200}
                  alt="Malinovsky"
                  className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
                ></Image>
                <p className="m-2">
                  <strong>Aleksandar Teopanovič Managadze </strong> ( Russian:
                  Alksendar Teopanovíč Managdze ; Georgia , October 23, 1919 )
                  major of the Soviet Red Army and national hero of Yugoslavia .
                </p>
                <p className="text-2xl text-bold">Biography</p>
                <p className="m-2">
                  He was born in 1919 . in Georgia . Just before the war,
                  Aleksandar graduated from the school of war aviators and
                  became a medium bomber pilot. Aleksandar Managadze, with his
                  crewmates - navigator Ivan Bulkin and gunner radio-telegrapher
                  Peter Boltarchuk , flew, due to the bombing of enemy troops
                  and equipment, into the deep enemy rear and into the Soviet
                  territory, which was occupied by the Germans , and into
                  Germany itself . Since 1944 _ In 2008, the Guards Aviation
                  Regiment, in which the Guards Senior Lieutenant Aleksandar
                  Managadze served as the company commander, began to carry out
                  the tasks of the Soviet government and the Red Army command -
                  to deliver arms and ammunition, medicines and medical
                  supplies, food and clothing to the People&apos;s Liberation
                  Army of Yugoslavia . Aleksandar Teopanovic and his crew flew
                  in the direction of thirty points in different areas of
                  Yugoslavia , delivering military equipment to the Yugoslav
                  partisans, and they completed all tasks successfully. After
                  the end of the war, Alexander was demobilized, in the rank of
                  major , and worked for a long time in civil aviation.{" "}
                </p>
                <p className="text-2xl text-bold">Decorations</p>
                <p className="m-2">
                  For his combat activity during the Great Patriotic War ,
                  Aleksandar Managadze was awarded three Orders of the Red
                  Banner , the Order of the Patriotic War of the second class,
                  two Orders of the Red Star and many medals. On June 21, 1945 ,
                  the Presidency of the Anti-Fascist Council for the
                  People&apos;s Liberation of Yugoslavia honored him . year,
                  with the Order of the National Hero of Yugoslavia .
                </p>

                <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                  <ul>
                    Source:{" "}
                    <li>
                      <a
                        href="https://sr.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D0%B0%D1%80_%D0%9C%D0%B0%D0%BD%D0%B0%D0%B3%D0%B0%D0%B4%D0%B7%D0%B5"
                        className="text-black text-bold"
                        target="_blank"
                      >
                        en.wikipedia.org/wiki/Alexander_Managadze
                      </a>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="14">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Grigoriy Ohrimenko
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1693520198/Heroji%20-%20Strani/Grigorij_Nikolajevic_Ohrimenko_crbwfp.jpg"
                }
                width={200}
                height={200}
                alt="Jakimov"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Grigoriy Nikolayevich Ohrimenko</strong> ( Russian:
                Grigoriy Nikolaevich Ohrimenko ; Gaivoron , near Chernigov ,
                Russian Empire , April 15, 1915 — Feodosia , Ukraine , March 31,
                1996 ), participant of the Great Patriotic War , rear admiral of
                the Soviet Navy and national hero of Yugoslavia .
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born in 1915 in Ukraine . He finished primary school in
                his native village. He graduated from the Navy School and became
                a miner. Since then, he has continuously served in the Navy of
                the Soviet Union . Since the beginning of the Great Patriotic
                War , Ohrimenko was in the active fleet. They are fascists ,
                1941 . year, made great efforts to conquer Sevastopol , which
                successfully resisted the attacks. To hinder the work of the
                Soviet fleet, they laid thousands of mines in the coastal
                waters, using a technical novelty, magnetic mines. Ohrimenko
                discovered the secret of these mines. He dismantled one such
                mine and studied its mechanism. In cooperation with scientists
                from the Academy of Sciences of the USSR, an effective means of
                defense against magnetic mines was found. Second class captain
                Grigory Nikolayevich Ohrimenko was in charge in 1943 . In 2008,
                the minesweeper brigade, which was part of the Danube War Fleet
                and cooperated with the units of the Third Ukrainian Front , and
                despite fierce clashes, the fleet managed to cross more than two
                thousand kilometers along the Danube , upstream. The large
                amount of mines placed in the Danube was one of the main
                obstacles. The minesweeper brigade had the extremely dangerous
                duty of clearing the Danube of mines. This task, under the
                command of Grigory Nikolayevich Ohrimenko, was successfully
                completed. By decree of the Presidency of the Anti-Fascist
                Council of People&apos;s Liberation of Yugoslavia on April 30,
                1945, he was awarded the Order of National Hero. Emphasizing his
                merits, during the presentation of the Order on June 21, 1945 ,
                the president of the AVNOJ Presidency, Dr. Ivan Ribar , said:
                For Yugoslavia, the Danube represents life. By clearing it of
                mines, you gave us life back . After the end of the war,
                Ohrimenko continued to serve in the navy. He was demobilized in
                1970 . in the rank of rear admiral. He lived in Feodosia , in
                Crimea . He died on March 31, 1996
              </p>

              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B8%D1%98_%D0%9E%D1%85%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      wikipedia.org/wiki/Grigoriy_Nikolayevich_Ohrimenko
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="15">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Ludvík Svoboda (bio will be added)
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>https://en.wikipedia.org/wiki/Ludv%C3%ADk_Svoboda</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="16">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Vladimir Sudets
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1693948382/Heroji%20-%20Strani/Vladimir_Sudets_xycbbk.jpg"
                }
                width={200}
                height={200}
                alt="Sudets"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Vladimir Alexandrovich Sudets</strong> (Russian:
                Владимир Александрович Судец; 23 October 1904 - 6 May 1981) was
                a Soviet air commander during World War II, commanding the 17th
                Air Army, and later became Marshal of the aviation after the
                war.
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                Vladimir was born into a working-class family in the village of
                Nizhnedneprovsk, formerly part of Ekaterinoslav Governorate, but
                is now part of the city Dnipro in Ukraine. In 1924, he joined
                the Communist Party of the Soviet Union, and the following year
                in September joined the Red Army. In 1927 he graduated from an
                air force technical school, and from a pilot school in 1929. He
                served in Kiev Military District afterwards. From 1933 to 1937,
                he served in Mongolia and took part in the Soviet-Japanese
                border conflicts. He participated in the Winter War from
                February to March 1940 as the deputy commander of the 27th Heavy
                Bomber Air Brigade. In November he took command of the 4th Long
                Range Air Corps, and was commanding it when Germany invaded the
                Soviet Union in June 1941. In October 1941, he became the
                commander of the Volga Military District&apos;s Air Force, which
                he commanded till June 1942. From September 1942 to March 1943,
                he commanded the 1st Bomber Air Corps. In March 1943, he took
                command of the 17th Air Army, which he commanded till the end of
                World War II. The 17th Air Army took part in the Battle of
                Kursk, the Dnieper-Carpathian, Jassy-Kishinev, and Prague
                Offensives. On 28 April 1945, he was awarded Hero of the Soviet
                Union, the Order of Lenin and the Gold Star. From 1946 to 1949,
                he served as both the Chief of Staff and Deputy
                Commander-in-Chief of the Soviet Air Force. On 11 March 1955, he
                became Marshal of Aviation. From 1955 to 1962 he was Commanding
                General of Long-Range Aviation, and from 1962 to 1966, he was
                Commander-in-Chief of the Air Defense of the Country and a
                Deputy Minister of Defense.
              </p>
              <p className="text-2xl text-bold">Awards</p>
              <p className="m-2">
                Throughout his military career, he was awarded four Orders of
                Lenin, an Order of October Revolution, five Orders of the Red
                Banner, an Order of Suvorov First Class, an Order of Suvorov
                Second Class, an Order of Kutuzov First Class, an Order of
                Kutuzov Second Class, and an Order of the Red Star. His foreign
                awards included: People&apos;s Hero of Yugoslavia (October
                1964), Hero of the Mongolian People&apos;s Republic (7 May
                1971), the Order of the British Empire Knight Commander, the
                Partisan Star First Class, and the Order of Sukhbaatar.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                He died in Moscow on 6 May 1981 and was buried at the
                Novodevichy Cemetery.
              </p>
              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Vladimir_Sudets"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      en.wikipedia.org/wiki/Vladimir_Sudets
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="17">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Fyodor Tolbukhin
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1694119035/Heroji%20-%20Strani/Fyodor_Tolbukhin_odfq1t.jpg"
                }
                width={200}
                height={200}
                alt="Tolbukhin"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Fyodor Ivanovich Tolbukhin</strong> (Russian: Фёдор
                Ива́нович Толбу́хин; 16 June 1894 - 17 October 1949) was a Soviet
                military commander and Marshal of the Soviet Union. He is
                regarded as one of the finest Soviet generals of World War II.
                Born into a peasant family in Yaroslavl, Tolbukhin volunteered
                for the Imperial Russian Army during the First World War and
                served with distinction. He joined the Red Army in 1918 and
                fought in the Russian Civil War. After graduating from the
                Frunze Military Academy, he held a succession of commands,
                rising to the post of chief of staff of the Transcaucasian
                Military District by 1938. Tolbukhin rose further through the
                ranks following the German invasion of the Soviet Union, and was
                involved in the Battle of Stalingrad. As commander of the 4th
                Ukrainian Front, he assisted Rodion Malinovsky in the Lower
                Dnieper and Dnieper-Carpathian offensives. He then contributed
                to the Soviet drive into the Balkans and forced Romania&apos;s
                defection to the Allies, for which he was named a Marshal of the
                Soviet Union. Afterwards, Tolbukhin took part in the occupation
                of Bulgaria and liberated much of Yugoslavia after the Belgrade
                offensive. He commanded the Vienna offensive in May 1945 and
                helped set up the new Austrian government under Karl Renner.
              </p>
              <p className="text-2xl text-bold">World War II</p>
              <p className="m-2">
                Tolbukhin remained in this position through the opening phases
                of Operation Barbarossa until August 1941, when he was made the
                chief of staff of the Crimean Front, which he held until March
                1942. From May to July 1942, he was the assistant commander of
                the Stalingrad Military District. After that, he was the
                commander of the 57th Army until March 1943. The 57th was
                involved in the Battle of Stalingrad, where Tolbukhin&apos;s
                superior, Colonel-General Andrei Yeremenko, praised his command
                organization and military prowess. After his command of the
                57th, Tolbukhin was placed in command of the Southern Front. In
                October 1943 the Southern Front was renamed 4th Ukrainian Front.
                Tolbukhin assisted Rodion Malinovsky&apos;s 3rd Ukrainian Front
                in the Lower Dnieper Offensive and Dnieper-Carpathian Offensive.
                In May 1944, Tolbukhin was transferred to control of 3rd
                Ukrainian Front. During the Summer Campaign, from June to
                October 1944, Tolbukhin and Malinovsky launched their invasion
                of the Balkans and were able to conquer most of Romania. On
                September 12, 1944, two days after Malinovsky was promoted to
                Marshal of the Soviet Union, Tolbukhin was promoted to the same
                rank. While Malinovsky moved northwest, towards Hungary and
                Yugoslavia, Tolbukhin occupied Bulgaria. Starting in the Winter
                Campaign, Tolbukhin shifted his army to the northwest axis,
                thereby liberating much of Yugoslavia and invading southern
                Hungary. In late April 1945, at the end of the Battle of Vienna,
                Tolbukhin acted on Stalin&apos;s order to entrust Karl Renner
                with foundation of a new provisional Austrian government in
                order to prepare democratic elections. On 27 April, Renner was
                appointed provisional government leader, at Tolbukhin&apos;s
                authority, which renders the latter an important role in the
                foundation of a new Austrian republic that had been integrated
                into the Third Reich (1938-1945). Tolbukhin gave the go-ahead at
                the location, for this important step towards an independent
                Austria in the formation of the Second Republic (1945-present).
                After the war, Tolbukhin was commander-in-chief of the Southern
                Group of Forces, which comprised the Balkan region. In January
                1947, Tolbukhin was made the commander of the Transcaucasus
                Military District, a post he held until his death on October 17,
                1949, due to complication from diabetes. Tolbukhin is generally
                regarded as one of the finest Soviet generals of World War II.
                Meticulous, careful, and not overly ambitious like some Soviet
                commanders, Tolbukhin was well respected by fellow commanders
                and also his men, especially since he had a dedication to
                keeping casualty rates low. Tolbukhin was the recipient of
                numerous awards and medals including the highest Soviet medal
                and rank, the Order of Victory and Hero of the Soviet Union,
                respectively. Tolbukhin was also People&apos;s Hero of
                Yugoslavia, whose capital Belgrade he liberated. The urn
                containing his ashes is buried in the Kremlin Wall Necropolis,
                and there is a monument to him in his native Yaroslavl. The city
                of Dobrich in Bulgaria was renamed to Tolbukhin in his honor in
                1949.
              </p>
              <p className="text-2xl text-bold">Memorials</p>
              <p className="m-2">
                The Bulgarian city of Dobrich was renamed Tolbukhin, a name it
                held until the fall of communism in 1989. In Ukraine a Prospect
                (street) in Odesa holds his name. In December 2022 the Fyodor
                Tolbukhin street in Kyiv was renamed to Vasyl Danylevych street
                and the Fyodor Tolbukhin lane was renamed to Mykhailo Yalovy
                lane. One of the main streets in Belgrade, the capital of
                Serbia, was named Marshal Tolbukhin Street (in Serbian: Улица
                маршала Толбухина / Ulica maršala Tolbuhina). The street was
                originally named Макензијева / Makenzijeva, after Scottish
                missionary Francis Mackenzie who purchased and developed this
                part of the city in the late 19th century. After the fall of
                Communism in Serbia and democratic changes in 2000, the name of
                the street was reverted to its original name. Instead, Goce
                Delčeva Street, in the new section of the city (New Belgrade)
                was renamed Boulevard of Marshal Tolbukhin (Булевар маршала
                Толбухина / Bulevar maršala Tolbuhina) in 2016. Budapest, the
                capital of Hungary also had one of its streets named after
                Tolbukhin, as he was one of the major Soviet commanders in the
                Hungarian war theatre. The previous Mészáros utca
                (Butchers&apos; Street) was renamed Vámház körút (Custom House
                Boulevard) during the (re)construction of the area in 1875. The
                road was renamed after the Tsar of Bulgaria, Ferdinand in 1915,
                when Bulgaria joined the Central Powers in the First World War.
                In 1919 the road got back its old name, Vámház körút, which it
                bore until 1942, when it was once more renamed, this time after
                son of Regent of Hungary, Admiral Miklós Horthy, István Horthy.
                In 1945, the road was named after Marshal Tolbukhin (Tolbuhin
                Boulevard), and it held this name until 1990 with the fall of
                communism. A Monument to Fyodor Tolbukhin was installed in 1960
                in Moscow in the square on Samotychnaya Street. The authors of
                the monument are the sculptor L. E. Kerbel and the architect G.
                A. Zakharov.
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                After the war, Tolbukhin received command of the Southern Group
                of Forces in the Balkans before returning to the Transcaucasus.
                He held the post until his death in October 1949 from diabetes.
              </p>
              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Fyodor_Tolbukhin"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      en.wikipedia.org/wiki/Fyodor_Tolbukhin
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="18">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Васиљ Улиско
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1693850930/Heroji%20-%20Strani/Resid_Cholaku_zcr0pv.jpg"
                }
                width={200}
                height={200}
                alt="Cholaku"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Vasyl Andriyovych Ulisko</strong> (Ukrainian: Василь
                Андрієвич Улиско; Василий Андрейевич Улиско, Russian: Василий
                Андреевич Улиско; Ukraine, January 18, 1915 - Ukrainian SSR,
                April 26, 1956) was a guard major of the Red Army and a national
                hero of Yugoslavia.
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born in 1915 in Ukraine. Before the war, he graduated
                from aviation school, and then he was assigned to bomber
                aviation. From the beginning of the Great Patriotic War, in June
                1941, he was a navigator in bomber aviation. He flew in the
                enemy&apos;s rear, bringing the plane to the target - to
                concentrations of enemy troops and equipment, railway junctions,
                warehouses of weapons and ammunition, airfields of enemy
                aviation and other military facilities. In 1944, as a deputy
                navigator of the Guards Aviation Regiment, Guards Major Vasilj
                Ulisko participated in air operations to assist the
                People&apos;s Liberation Army of Yugoslavia. As one of the most
                experienced navigators, Vasilj Ulisko traced the routes of up to
                30 fields for dropping loads in different areas of Yugoslavia.
                Given that the planes were flying at night, over unknown
                territory and without radio-navigation devices, a special guided
                flight system was developed to find the target. First, as the
                leader, the plane took off, with one of the most experienced
                crews finding the target and ejecting and circling over it,
                simultaneously giving the contracted signals. The other planes
                followed these signals, like radio beacons, and hit the target
                accurately. One of such leaders in the aviator group was the
                plane in which Vasilj Andreyevich Ulisko flew as a navigator.
                After the end of the war, Ulisko continued to serve in the air
                force of the armed forces of the Soviet Union. He died in April
                1956. On June 21, 1945, the Presidency of the Anti-Fascist
                Council of the People&apos;s Liberation of Yugoslavia awarded
                him the Order of the National Hero of Yugoslavia.
              </p>
              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%92%D0%B0%D1%81%D0%B8%D1%99_%D0%A3%D0%BB%D0%B8%D1%81%D0%BA%D0%BE"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      en.wikipedia.org/wiki/Vasyl_Ulisko
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="19">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Enver Hoxha (bio will be added)
            </Accordion.Header>
            <Accordion.Body className="visible">
              <p>https://en.wikipedia.org/wiki/Enver_Hoxha</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="20">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Reshid Cholaku
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1693850930/Heroji%20-%20Strani/Resid_Cholaku_zcr0pv.jpg"
                }
                width={200}
                height={200}
                alt="Cholaku"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Reshit Çollaku</strong> ( Alb. Reshit Çollaku ; Pogradec
                , 1914 — 1943 ), participant of the National Liberation Struggle
                of Albania , national hero of Albania and national hero of
                Yugoslavia .
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born in 1914 . in Pogradec , in the southeastern part of
                Albania , next to Lake Ohrid . He finished primary and secondary
                school in his hometown, and then studied in Tirana . In 1939 ,
                after the occupation of the Kingdom of Albania by the fascist
                Kingdom of Italy , he left his studies and returned to his
                hometown. There he connected with other patriotic people and
                worked to spread patriotic awareness and resistance to the
                occupation. Later, he formed the first partisan group and was
                its commander. In the summer of 1943, he was at the head of the
                Pogradec partisan battalion. He was killed in the battle with
                the Italians near Pogradec on July 16, 1943. Ten other partisans
                died together with him, and a monumental monument was erected at
                the place of their death. By decree of the Presidium of the
                National Assembly of the People&lsquo;s Republic of Albania , he
                was awarded the Order of the National Hero of Albania , among
                the first members of the National Liberation Army of Albania .
                By decree of the Presidency of the Anti-Fascist Council of
                People&lsquo;s Liberation of Yugoslavia (AVNOJ), on the proposal
                of Marshal Josip Broz Tito , on February 12, 1945 . together
                with Voj Kušić , he was declared a national hero of Yugoslavia .
                In addition to those two, he was also awarded the Order of the
                National Hero of Yugoslavia in 1946 . Enver Hoxha , Albanian
                president. In 1948 _ due to the cooling of relations between
                Yugoslavia and Albania , after the adoption of the Resolution of
                the Informburo , the decisions on the adoption of these
                decorations were abolished.
              </p>
              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%A0%D0%B5%D1%88%D0%B8%D0%B4_%D0%A7%D0%BE%D0%BB%D0%B0%D0%BA%D1%83"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      en.wikipedia.org/wiki/Reshit_Çollaku
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="21">
            <Accordion.Header>
              <Image
                src="/img/orden.jpg"
                alt="text"
                width="25"
                height="25"
                className="-ml-2 mr-2 -mb-2 -mt-2"
              />
              Aleksander Shornikov
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Image
                src={
                  "https://res.cloudinary.com/dvwnqprsp/image/upload/v1693750969/Heroji%20-%20Strani/Sornikov_Aleksandar_lqq5ou.jpg"
                }
                width={200}
                height={200}
                alt="Malinovsky"
                className="rounded-xl float-right w-24 md:w-48 m-2  border-red-600 border-2"
              ></Image>
              <p className="m-2">
                <strong>Alexander Sergeevich Shornikov </strong> ( Russian:
                Aleksandr Sergeevich Shornikov ; Vyazhnik , Vladimir province ,
                October 31, 1912 — Moscow , November 18, 1983 ), pilot,
                lieutenant colonel of the Red Army , Hero of the Soviet Union
                and national hero of Yugoslavia .
              </p>
              <p className="text-2xl text-bold">Biography</p>
              <p className="m-2">
                He was born on October 31, 1912 . in the working-class
                settlement of Jarčevo, near Vjaznik in the Vladimir region . He
                comes from a working family. Since 1928 _ until 1930 . In 1998,
                he attended the school of apprentices in the economy, and got a
                job as a journeyman in a textile factory. In 1931 _ as a member
                of the Komsomol, he was sent to the aviator school of the civil
                aviation , which he graduated in 1933 , earning the title of
                pilot. Until the beginning of the Second World War, he flew on
                civil aviation lines in Transcaucasia , and later in Georgia.
                There, in the capacity of pilot-captain and then commander of
                the training squad, he gained extensive flying experience in
                hilly areas. Since the beginning of the Great Patriotic War , in
                June 1941 . Alexander Shornikov was in the Air Transport
                Division of the Air Force of the Red Army and successfully
                performed all the complex tasks in command. In 1943 _ a combat
                crew of a military transport plane was formed, consisting of:
                Aleksandar Shornikov - pilot-captain; Boris Kalinkin - second
                pilot; Pavel Yakimov - navigator; Ivan Galaktionov - engineer;
                Nikolay Verderevsky - radio-telegrapher. January 1944 . year,
                this crew was given the task of transferring to Yugoslavia , by
                air,The Soviet military mission in NOVJ , headed by Lieutenant
                General Nikolay Korneev . Then the flight from Moscow to Tehran
                had to be made , and then, over the mountain ranges of Asia ,
                the deserts of North Africa and the Mediterranean Sea to Bari (
                Italy ), from where the members of the mission were transferred
                by gliders to Medeno polje , near Bosanski Petrovac . In March
                1944, a plane piloted by Guards Major Aleksandar Shornikov
                landed for the first time during the National Liberation War on
                a snow-covered meadow, high in the hills, in the area of Honey
                Field. During 1944, Aleksandar and his crew made a total of more
                than forty night flights to Yugoslavia. He delivered Soviet
                weapons, ammunition, food to the fighters of the People`&apos;s
                Liberation Army and partisan units of Yugoslavia and transported
                the wounded from the area of war operations to Italy. After the
                landing on Drvar , on May 25, 1944, the Soviet Command entrusted
                Alexander Shornikov with the task of transferring the leadership
                of the People`&apos;s Liberation Movement of Yugoslavia , headed
                by Marshal Josip Broz Tito , to Bara. On the night of June 4,
                1944, after a storm, Aleksandar and the crew of his plane,
                evading the German coastal anti-aircraft defense, landed at the
                improvised airport in Kupreško Polje , boarded a group of
                members of the Central Committee of the KPJ , the Supreme
                Headquarters of the NOV and POJ , the National Committee for the
                Liberation of Yugoslavia , AVNOJ presiden, leadershipSoviet and
                Anglo-American missions , and transferred them to Bari. On the
                same night, on the orders of the head of the Soviet military
                mission, Shornikov landed on Kupreško polje for the second time,
                and transferred twenty more people. By decree of the Presidium
                of the Supreme Soviet of the Soviet Union , dated June 20, 1944,
                for exemplary performance of a special task of the Soviet
                command, Guards Major Alexander Shornikov and members of the
                crew of his plane, Guards Captains Boris Kalinkin and Pavel
                Yakimov, were declared Heroes of the Soviet Union . Guards
                Engineering Captain Ivan Galaktionov and Guards Ober-Lieutenant
                Nikolai Verderevsky were awarded the Order of Lenin . At one of
                its regular sessions on the island of Vis , on September 25,
                1944, the Presidium of the Anti-Fascist Council of the
                People`&apos;s Liberation of Yugoslavia issued a Decree awarding
                Alexander Shornikov, Boris Kalinkin and Pavel Yakimov with the
                Order of National Hero . By the same decree, Ivan Galaktionov
                and Nikolay Verderevsky were awarded the Order of the Partisan
                Star of the second class . The orders were presented to them in
                liberated Belgrade in October 1944. From the liberation of
                Belgrade in October 1944 until the definitive victory over
                fascism in May 1945 . year, Alexander Shornikov`&apos;s plane
                was availableTo the Supreme Headquarters of NOV and POJ and to
                the leadership of the National Liberation Movement .
              </p>
              <p className="text-2xl text-bold">Death</p>
              <p className="m-2">
                After the end of the war, Alexander Shornikov remained in the
                Air Force of the Soviet Union. In 1953. completed the Senior
                Officer Aviation-Tactical Course, and in 1958 was promoted to
                the rank of lieutenant colonel. In 1959, he was demobilized and
                joined the civil aviation. After that, he worked in the Ministry
                of Civil Aviation. He died in Moscow on November 18, 1983 .
                years. He was buried at the Novodevichy Cemetery in Moscow , in
                Heroes Alley. In addition to the title of Hero of the Soviet
                Union and National Hero of Yugoslavia, Aleksandar Shornikov was
                awarded the Order of Lenin, three Orders of the Red Banner and
                the Order of the Red Star.
              </p>
              <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto mt-2">
                <ul>
                  Source:{" "}
                  <li>
                    <a
                      href="https://sr.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D0%B0%D1%80_%D0%A8%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2"
                      className="text-black text-bold"
                      target="_blank"
                    >
                      en.wikipedia.org/wiki/Alexander_Shornikov
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg  mx-auto">
        <ul>
          Source:{" "}
          <li>
            {" "}
            <a
              href="https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije"
              className="text-black text-bold"
            >
              wikiwand.com/Spisak_heroja
            </a>
          </li>
          <li>
            <a
              href="https://sr.wikipedia.org/sr-el/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%98%D0%B0:%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8_%D1%85%D0%B5%D1%80%D0%BE%D1%98%D0%B8_%D0%88%D1%83%D0%B3%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B8%D1%98%D0%B5_(%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%86%D0%B8)"
              className="text-black text-bold"
            >
              wikipedia.com/Spisak_Heroja_Stranci
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
