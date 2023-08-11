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
        <div className="w-1/2">
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
        {/* left Accordion*/}
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

        {/* right Accordion*/}
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
              Heroes with starting letter M
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
              <a href="https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_P">
                https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_P
              </a>
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
              <a href="https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_R">
                https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_R
              </a>
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
              <a href="https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_S">
                https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_S
              </a>
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
              <a href="https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_V">
                https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije:_V
              </a>
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
      <div className="m-5 shadow-xl shadow-slate-500 bg-gray-300 p-2 rounded-lg w-1/3 mx-auto">
        <p>
          Source: 
          <a
            href="https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije"
            className="text-black text-bold"
          >
             https://www.wikiwand.com/bs/Spisak_narodnih_heroja_Jugoslavije
          </a>
        </p>
      </div>
    </>
  );
}
