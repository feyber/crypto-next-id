import styles from "../styles/Searchbar.module.css";
import TextyAnim from "rc-texty";

const Searchbar = ({ ...rest }) => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-around items-center lg:p-4 md:mb-16 p-8">
      <TextyAnim className="text-md mb-5 md:mb-0 lg:text-3xl font-bold text-white ">
        Realtime Indonesia Cryptocurrency
      </TextyAnim>
      <div className="flex w-64 md:w-80 border-0 md:px-3">
        <input className={styles.coin__input} {...rest} />
      </div>
      <div></div>
    </div>
  );
};

export default Searchbar;
