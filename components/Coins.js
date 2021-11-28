import styles from "../styles/Coins.module.css";
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
      <a className="flex mx-auto items-center justify-center h-20 text-center text-black bg-white transform hover:translate-x-5 duration-700 bg-opacity-50 hover:bg-indigo-500 hover:bg-opacity-50 shadow-2xl mb-1 rounded">
        <div className={styles.coin__container}>
          <div className={styles.coin__row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin__img} />
              <h1 className={styles.coin__h1}>{name}</h1>
              <p className={styles.coin__symbol}>{symbol}</p>
            </div>
            <div className={styles.coin__data}>
              <p className={styles.coin__price}>
                <span className="p-1">Rp.</span>
                {price.toLocaleString()}
              </p>
              <p className={styles.coin__volume}>
                Price change($){volume.toLocaleString}
              </p>
              {priceChange < 0 ? (
                <p className={(styles.coin__percent, styles.red)}>
                  {priceChange.toFixed(2)} %
                </p>
              ) : (
                <p className={(styles.coin__percent, styles.green)}>
                  {priceChange.toFixed(2)}
                </p>
              )}
              <p className={styles.coin__marketcap}>
                <span className="p-1">Rp.</span>
                {marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
