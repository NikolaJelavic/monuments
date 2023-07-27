import Header from "../../src/components/Header";
import Navbar from "../pages/navbar/navbar.js";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <div className="h-full flex flex-col items-center justify-center m-5">
        <div className="w-3/4">
          <h2 className="text-center text-4xl m-5">
            Why was this web presentation made?
          </h2>
          <p className="text-center m-1 text-xl">
            Welcome to this website, crafted by a passionate IT student from the
            Western Balkans. Embracing the cherished principles of the National
            Liberation Struggle that profoundly shaped the region during the
            dramatic Second World War, the creator endeavors to uphold the
            historical significance and enduring values of this era.
          </p>
          <p className="text-center m-1 text-xl">
            With a firm belief in the importance of preserving cultural
            heritage, this website is made as a heartfelt contribution to
            society. Its primary objective is to serve as a digital sanctuary,
            dedicated to safeguarding the memories enshrined within the
            monuments of the Western Balkans, ensuring they are not forgotten or
            lost to the passage of time.
          </p>
          <p className="text-center m-1 text-xl">
            With an unwavering dedication to cherishing the past, this website
            strives to serve as a bastion of remembrance, kindling a collective
            effort to protect and revere the exceptional architectural marvels
            and memorial sites dotting the Western Balkans. Together, we embark
            on a journey of preservation, breathing new life into these tangible
            echoes of history and embarking on a mission to ensure that the
            legacy of the National Liberation Struggle endures for generations
            to come.
          </p>
          <div className="text-center m-4 text-xl">
            This website was made by a student of IT bootcamp
            <SocialIcon
              url="https://www.spiced-academy.com/en/program/full-stack-web-development"
              target="_blank"
              className="mx-1 "
            />
            in Berlin and is part of final project. Powered by React, Next.js,
            JavaScript, and Tailwind CSS, this website stands as a testament to
            the student&apos;s skills in the world of modern web development.
          </div>
        </div>
        <div className="w-3/4">
          <h2 className="text-center text-4xl m-5">Special thanks</h2>
          <p className="text-center m-4 text-2xl">
            Special thanks goes to Donald Niebyl which is creator and owner of
            <a
              href="https://www.spomenikdatabase.org/"
              className="bg-red-400 rounded-xl m-1 p-1"
            >
              spomenikdatabase
            </a>
            .
          </p>
          <div className="text-center m-4 text-2xl">
            His work is also visible on Social networks
            <SocialIcon
              url="https://www.instagram.com/spomenikdatabase/"
              target="_blank"
              className="m-2"
            />
            <SocialIcon
              url="https://twitter.com/SpomenikDatabse"
              target="_blank"
              className="m-2"
            />
            <SocialIcon
              url="https://www.facebook.com/SpomenikDatabase"
              target="_blank"
              className="m-2"
            />
            <SocialIcon
              url="https://www.flickr.com/photos/149875687@N06/"
              target="_blank"
              className="m-2"
            />
          </div>
          <div className="text-center m-4 text-xl">
            And, you can buy his book on Amazon
            <SocialIcon
              url="https://www.amazon.com/Spomenik-Monument-Database-Donald-Niebyl/dp/0995745536/"
              target="_blank"
              className="m-2"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
