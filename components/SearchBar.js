import styles from "../styles/Searchbar.module.css";

const Searchbar = ({ ...rest }) => {
  return (
    <div className="relative flex w-full justify-around">
      <div className="transform hover:translate-x-2 duration-300">
        <h1 className="text-3xl font-bold text-gray-100 ">
          Realtime Indonesia Crypto Update
        </h1>
      </div>
      <div className={styles.coin__search}>
        <input className={styles.coin__input} {...rest} />
      </div>
      <div></div>
    </div>
  );
};

export default Searchbar;
