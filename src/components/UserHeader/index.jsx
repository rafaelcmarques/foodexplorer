import { useState, useEffect } from "react";

import logoAdminDesktop from "../../assets/logoAdminDesktop.png";
import logoAdminMobile from "../../assets/logoAdminMobile.png";

import { DesktopContainer, MobileContainer } from "./styles";
import { Button } from "../Button";
import { RxExit, RxHamburgerMenu, RxCross1, RxReader } from "react-icons/rx";
import { TbReceipt } from "react-icons/tb";

export function Header({ children, isHide = false }) {
  const [isScreenMobile, setIsScreenMobile] = useState(window.innerWidth < 820);

  const [showMenu, setShowMenu] = useState(false);
  const [hideNavBar, setHideNaveBar] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsScreenMobile(window.innerWidth < 820);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const handleHideNavBar = () => {
      setHideNaveBar(scrollY < 170);
    };
    handleHideNavBar();
    window.addEventListener("scroll", handleHideNavBar);
    return () => window.removeEventListener("scroll", handleHideNavBar);
  }, []);

  console.log(hideNavBar);

  return isScreenMobile ? (
    <MobileContainer>
      <div className="nav">
        <button onClick={handleShowMenu}>
          {showMenu ? (
            <RxCross1 size={24}></RxCross1>
          ) : (
            <RxHamburgerMenu size={24}></RxHamburgerMenu>
          )}
        </button>

        {showMenu ? (
          <h1>Menu</h1>
        ) : (
          <img src={logoAdminMobile} alt="FoodExplorer" />
        )}
      </div>

      <div className={`nav-elements ${showMenu && "active"}`}>
        {children}

        <ul>
          <li>
            <a href="">Pedidos(0)</a>
          </li>
          <li>
            <a href="">Sair</a>
          </li>
        </ul>
      </div>
    </MobileContainer>
  ) : (
    <DesktopContainer>
      <img src={logoAdminDesktop} alt="" />

      {children}

      <div className="wrapper">
        <div className="buttonWrapper">
          <Button icon={TbReceipt} title={`Pedidos(0)`}></Button>
        </div>
        <button>
          <RxExit />
        </button>
      </div>
    </DesktopContainer>
  );
}
