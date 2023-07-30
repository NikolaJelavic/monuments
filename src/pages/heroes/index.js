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
      <p className="text-center m-8 text-2xl">
        List of National Heroes of Yugoslavia
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
                128. <strong>Stjepan Bubanić</strong> (1913–43), proclaimed a
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter Č{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter E{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter F{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter H{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter I{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter J{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter K{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* right Accordion*/}
        <Accordion
          defaultActiveKey="16"
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
                1. <strong>Stjepan Abrlić</strong> (1914-43), declared a
                national hero on October 9, 1953.
              </p>
              <p>
                2. Mirče Acev (1915-44), declared a national hero on July 29,
                1945.
              </p>
              <p>
                3. Vera Aceva (1919-2006), awarded the Order of the National
                Hero on November 27, 1953.
              </p>
              <p>
                4. Božidar Adžija (1890-1941), declared a national hero on July
                26, 1945.
              </p>
              <p>
                5. Niko Anđus (1912-44), declared a national hero on November
                27, 1953.
              </p>
              <p>
                6. Vlada Aksentijević (1916-42), declared a national hero on
                December 14, 1949.
              </p>
              <p>
                7. Nisim Albahari (1916-92), awarded the Order of the National
                Hero on November 27, 1953.
              </p>
              <p>
                8. Veljko Aleksić (1913-43), declared a national hero on
                December 20, 1951.
              </p>
              <p>
                9. Jelisaveta Andrejević Aneta (1923-43), declared a national
                hero on October 9, 1953.
              </p>
              <p>
                10. Tadija Andrić (1917-42), declared a national hero on
                November 27, 1953.
              </p>
              <p>
                11. Vicko Antić (1912-99), awarded the Order of the National
                Hero on November 27, 1953.
              </p>
              <p>
                12. Josip Antolović (1916-99), awarded the Order of the National
                Hero on December 20, 1951.
              </p>
              <p>
                13. Milan Antončić Velebit (1918-97), awarded the Order of the
                National Hero on December 20, 1951.
              </p>
              <p>
                14. Ilija Antunović (1919-2005), awarded the Order of the
                National Hero on July 23, 1952.
              </p>
              <p>
                15. Rista Antunović Baja (1917-98), awarded the Order of the
                National Hero on July 6, 1953.
              </p>
              <p>
                16. Tadija Anušić (1896-42), declared a national hero on
                December 20, 1951.
              </p>
              <p>
                16. Mihailo Apostolski (1906-87), awarded the Order of the
                National Hero on October 9, 1953.
              </p>
              <p>
                17. Mirko Arsenijević (1915-44), declared a national hero on
                October 9, 1953.
              </p>
              <p>
                18. Borko Arsenić (1917-81), awarded the Order of the National
                Hero on November 27, 1953.
              </p>
              <p>
                19. Ljupčo Arsov (1910-86), awarded the Order of the National
                Hero on November 27, 1953.
              </p>
              <p>
                20. Muharem Asović (1912-43), declared a national hero on July
                10, 1953.
              </p>
              <p>
                21. Kiro Atanasovski (1923-44), declared a national hero on
                December 20, 1951.
              </p>
              <p>
                22. Viktor Avbelj (1914-93), awarded the Order of the National
                Hero on December 20, 1951.
              </p>
              <p>
                23. Franc Avbelj (1914-91), awarded the Order of the National
                Hero on September 13, 1952.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter M
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter Nj{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter P{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter S{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter T{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter U{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter V{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter Z{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Heroes with starting letter Ž{" "}
            </Accordion.Header>
            <Accordion.Body className="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
