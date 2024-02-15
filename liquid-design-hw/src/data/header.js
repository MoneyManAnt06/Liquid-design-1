import { v4 } from "uuid";
import headerLogo from "@/assets/images/header-logo.png";
import heart from "@/assets/images/heart.png";
import bag from "@/assets/images/bag.png";

export const headerData = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  logo: headerLogo,
  options: [
    {
      id: v4(),
      text: "Servicios",
      url: "/",
    },
    {
      id: v4(),
      text: "Productos",
      url: "/",
    },
    {
      id: v4(),
      text: "Bodas",
      url: "/",
    },
    {
      id: v4(),
      text: "Estilos",
      url: "/",
    },
    {
      id: v4(),
      text: "Blog",
      url: "/",
    },
  ],

  secondaryOptions: [
    {
      id: v4(),
      text: "Iniciar sesion",
    },
    {
      id: v4(),
      text: "Reserva",
    },
    {
      id: v4(),
      text: "ES",
    },
    {
      id: v4(),
      image: heart,
    },
    {
      id: v4(),
      image: bag,
    },
  ],
};
