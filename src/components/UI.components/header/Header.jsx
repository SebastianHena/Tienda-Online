// hooks
import { useState } from "react";

// Components
import { Logo } from "../Logo";
import {MenuHeader} from "./MenuHeader.jsx"
import { Icon } from "../Icon";
import { Modal } from "./cart/CartModal";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="flex justify-items-center p-7 bg-black">
      <section className="flex justify-between mx-auto w-full">
        <nav className="flex flex-row items-center">
          <Logo icon="icons/Fuxion.png" width="w-8 " size="m-0 text-2xl" text="MamáAlNatural" />
        </nav>
        <section className="flex items-center gap-x-8 mr-4">
          <Icon icon="/icons/lupa.svg" />
          <Icon onClick={handleShow} icon="/icons/shopingCart.svg" />
          <MenuHeader/>
          {show && <Modal handleClose={handleClose} />}
        </section>
      </section>
    </header>
  );
};
