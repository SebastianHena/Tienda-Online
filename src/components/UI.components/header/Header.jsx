// hooks
import { useState } from "react";

// Components
import { MenuHeader } from "./MenuHeader.jsx"
import { Icon } from "../Icon";
import { Modal } from "./cart/CartModal";
import { LinkHeader } from "./LinkHeader.jsx";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="flex justify-items-center p-7 sticky top-0 bg-body-color">
      <section className="mx-14 w-full">
        <nav className="flex flex-row justify-between items-center">
          <article>
            <h2 className="text-black text-xl">
              <strong>MAMÁAL</strong>
              <span className="text-gray-600">NATURAL</span>
            </h2>
          </article>
          <article>
            <ul className="flex flex-row gap-24">
              <LinkHeader url="#home" name="Inicio" />
              <LinkHeader url="#products" name="Productos" />
              <LinkHeader url="#contact" name="Contacto" />
            </ul>
          </article>
          <article className="flex items-center gap-x-8 mr-4">
            <Icon icon="/icons/lupa.svg" />
            <Icon onClick={handleShow} icon="/icons/shopingCart.svg" />
            <MenuHeader />
            {show && <Modal handleClose={handleClose} />}
          </article>
        </nav>
      </section>
    </header>
  );
};
