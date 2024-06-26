// hooks
import { useState } from "react";

// Components
// import { Register } from "./auth/Register";
// import { Login } from "./auth/Login";
import { Logo } from "../Logo";
import { Link } from "../Link";
import { Icon } from "../Icon";
import { Modal } from "./cart/CartModal";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="flex justify-items-center p-10 bg-gray-950">
      <section className="flex justify-between mx-auto w-full max-w-screen-xl">
        <Logo icon="icons/Fuxion.png" width="w-8" size="m-0 text-2xl text-white" text="MamáAlNatural" />
        <nav className="flex flex-row items-center gap-x-10 text-xl">
          <Link text="Inicio" url="/" />
          <Link text="Productos" url="/catalogo" />
          <Link text="Contacto" url="/contact" />
        </nav>
        <section className="flex items-center gap-x-8">
          <Icon icon="/icons/lupa.svg" />
          <Icon onClick={handleShow} icon="/icons/shopingCart.svg" />
          {show && <Modal handleClose={handleClose} />}
        </section>
      </section>
    </header>
  );
};
