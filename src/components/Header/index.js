import { useState } from "react";
import AppImage from "../AppImage";
import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "../MobilenavBar";
import AppModal from "../AppModal";

import "./style.css";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function onOpenModal() {
    setIsOpen(true);
  }
  function onCloseModal() {
    setIsOpen(false);
  }
  return (
    <>
      <header className="app-header">
        <div>
          <AppImage
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="logo"
          />
        </div>
        <DesktopNavbar className="desktp-nav" />
        <div>
          <AppImage
            src={`${process.env.PUBLIC_URL}/assets/svgs/light.svg`}
            alt="light"
          />
        </div>
        <div className="app-mobile-menu" onClick={onOpenModal}>
          <AppImage
            src={`${process.env.PUBLIC_URL}/assets/svgs/menu.svg`}
            alt="menu"
          />
        </div>
      </header>

      <AppModal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        contentLabel="Example Modal"
      >
        <header className="app-header">
          <div>
            <AppImage
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              alt="Logo"
            />
          </div>

          <div>
            <AppImage
              src={`${process.env.PUBLIC_URL}/assets/svgs/light.svg`}
              alt="Light"
            />
          </div>

          <div className="app-mobile-close" onClick={onCloseModal}>
            <AppImage
              src={`${process.env.PUBLIC_URL}/assets/svgs/close.svg`}
              alt="Menu Close"
            />
          </div>
        </header>

        <MobileNavbar />
      </AppModal>
    </>
  );
}

export default Header;
