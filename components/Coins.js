import Link from "next/link";

const Coins = ({
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Link href={`/coin/${id}`}>
      <a className="w-full  items-center justify-center place-content-stretch text-black bg-white transform hover:scale-105 md:hover:scale-100 md:hover:translate-x-5 duration-700 bg-opacity-50 hover:bg-indigo-500 hover:bg-opacity-50 shadow-2xl mb-1 rounded">
        <div className="w-11/12 text-center md:grid md:grid-cols-7 md:-rows-2 items-center justify-center md:gap-1 md:h-20 md:p-4">
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <img
              src={image}
              alt={name}
              width="50"
              height="50"
              className="w-14"
            />
          </div>
          <h1>{name}</h1>
          <p>{symbol}</p>
          <p className="md:-ml-8">
            <span className="">Rp.</span>
            {price.toLocaleString()}
          </p>
          <p className="md:w-36 md:-ml-4 text-center">
            Stock change($){volume.toLocaleString}
          </p>
          {priceChange < 0 ? (
            <p className="text-red-500" ml-2>
              {priceChange.toFixed(2)} %
            </p>
          ) : (
            <p className="text-green-700 ml-2">{priceChange.toFixed(2)}</p>
          )}
          <p className="">
            <span className="">Rp.</span>
            {marketcap.toLocaleString()}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
