import { FC } from "react";

import style from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Header: FC = () => {
  const navigation = [
    { id: 1, name: "Home", path: ROUTES.HOME },
    { id: 2, name: "Marketplace", path: ROUTES.MARKETPLACE },
    { id: 3, name: "Rankings", path: ROUTES.RANKINGS },
    { id: 4, name: "Connect a wallet", path: ROUTES.PAYMENT },

    // Connect a wallet
    // { id: 2, name: "REGISTER", path: ROUTES.REGISTER },
  ];
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link className={style.logoImg} to={ROUTES.HOME}>
          <img src={"logo/Storefront.svg"} alt="Logo" />
          <img src={"logo/NFTMarketplace.svg"} alt="Logo" />
        </Link>
      </div>
      <nav>
        {navigation.map(({ id, name, path }) => (
          <NavLink
            key={id}
            className={({ isActive }) =>
              `${style.navLink} ${isActive ? style.active : ""}`
            }
            to={path}
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
