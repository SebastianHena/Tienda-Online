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
    <header className="flex justify-items-center p-4 top-0 bg-body-color w-full z-50 shadow-md fixed">
      <section className="mx-14 w-full">
        <nav className="flex flex-col justify-between items-center md:flex-row gap-6">
          <article>
            <h2 className="text-black text-xl">
              <a href="#home"><strong>MAMÁAL</strong>
                <span className="text-gray-600">NATURAL</span></a>
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
            <Icon onClick={handleShow} icon="/icons/shopingCart.svg" />
            <MenuHeader />
            {show && <Modal handleClose={handleClose} />}
          </article>
        </nav>
      </section>
    </header>
  );
};
