import style from "./MyButton.module.scss";
const MyButton = () => {
  return (
    <button className={style.myBtn}>
      <img src="icon/RocketLaunch.svg" alt="" />
      Get Started
    </button>
  );
};

export default MyButton;
