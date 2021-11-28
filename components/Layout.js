import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Layout = ({ children, title = "Indonesia Crypto Tracker" }) => {
  return (
    <div className="layout bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 flex flex-col items-center justify-center md:p-12 p-3 -mb-20">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header md:h-48 flex items-start justify-start p-4 mb-10">
        <Tilt>
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <h2 className="text-gray-50 text-3xl text-center md:mb-2 -mb-20 ">
                HOME
              </h2>
              <div className="hidden md:block">
                <a className="">
                  <Image
                    src="/bitcoin.png"
                    alt="logo bitcoin"
                    width="150"
                    height="150"
                    className="transform hover:translate-y-2 duration-1000"
                  />
                  <Image
                    src="/ethereum.png"
                    alt="logo ethereum"
                    width="150"
                    height="150"
                    className="transform hover:translate-y-2 duration-1000"
                  />
                  <Image
                    src="/tether.png"
                    alt="logo tether"
                    width="150"
                    height="150"
                    className="transform hover:translate-y-2 duration-1000"
                  />
                  <Image
                    src="/litecoin.png"
                    alt="logo litecoin"
                    width="150"
                    height="150"
                    className="transform hover:translate-y-2 duration-1000"
                  />
                </a>
              </div>
            </div>
          </Link>
        </Tilt>
      </header>
      <main className="flex flex-col bg-green-50 w-11/12 p-12 bg-opacity-10 rounded-2xl shadow-2xl m-2 justify-center items-center">
        {children}
      </main>
      <footer className="w-full p-16 flex flex-col items-center justify-center">
        <div>
          <p className="text-center md:text-lg text-xs">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a href="https://feyber.online" className="underline text-gray-800">
              Christhi Feyber
            </a>
          </p>
          <p className="text-center md:text-lg text-xs">
            Original Contributors:{" "}
            <a
              href="https://medium.com/geekculture/cryptocurrency-price-tracker-in-nextjs-b38789dcbd92"
              className="underline text-gray-800"
            >
              Nabendu Biswas
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
