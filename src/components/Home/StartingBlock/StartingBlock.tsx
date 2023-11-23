import { FC } from "react";

import style from "./StartingBlock.module.scss";
import MyButton from "../../UI/MyButton/MyButton";

const StartingBlock: FC = () => {
  const data = [
    { id: 1, name: "sale", count: "240k+" },
    { id: 2, name: "auctions", count: "100k+" },
    { id: 3, name: "artists", count: "240K+" },
  ];
  return (
    <section className={style.section}>
      <div className={style.firstColum}>
        <div className={style.tagline}>
          <h1>Discover digital art & Collect NFTs</h1>
          <p>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>
        <MyButton />
        <div className={style.statistic}>
          {data.map(({ id, name, count }) => (
            <div key={id} className={style.info}>
              <h4>{count}</h4>
              <span>{name}</span>
            </div>
          ))}
        </div>
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
