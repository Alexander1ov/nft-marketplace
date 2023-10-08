import { FC } from "react";

import style from "./StartingBlock.module.scss";

const StartingBlock: FC = () => {
  return (
    <section className={style.home}>
      <div className={style.firstColum}>
        <div className={style.tagline}>
          <h1>Discover digital art & Collect NFTs</h1>
          <p>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>
        <button className={style.started}>
          <img src="" alt="" />
          Get Started
        </button>
        <div className={style.statistic}>{/* статистика */}</div>
      </div>
      <div className={style.secondColum}>
        <div className={style.wrapperImg}>
          <figure></figure>
          <figcaption></figcaption>
        </div>
      </div>
    </section>
  );
};

export default StartingBlock;
