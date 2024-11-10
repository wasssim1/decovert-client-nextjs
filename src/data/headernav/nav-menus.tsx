import { NavMenuItem } from "@/interFace/interFace";

const NAV_MENU_DECOR = "Décor";
const NAV_MENU_POTTERY = "Poteries";
const NAV_MENU_ACCESSORIES = "Accessoires";
const NAV_MENU_CERAMIC = "Céramiques";

const NAV_MENU_GREEN = "Vert";
const NAV_MENU_GREEN_PLANTS = "Plantes Vertes";
const NAV_MENU_FLOWERS = "Fleurs";
const NAV_MENU_FRUITY = "Fruitiers";
const NAV_MENU_MEDICAL_PLANTS = "Plantes Médicales";

const NAV_MENU_DISCOVER = "Découvrir";

const nav_menus_list: NavMenuItem[] = [
  {
    id: 1,
    link: "/shop/c/decor",
    title: NAV_MENU_DECOR,
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: "/shop/c/pottery", title: NAV_MENU_POTTERY },
      { link: "/shop/c/accessories", title: NAV_MENU_ACCESSORIES },
      { link: "/shop/c/ceramic", title: NAV_MENU_CERAMIC },
    ],
  },
  {
    id: 2,
    link: "/shop/c/green",
    title: NAV_MENU_GREEN,
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: "/shop/c/green-plants", title: NAV_MENU_GREEN_PLANTS },
      { link: "/shop/c/flowers", title: NAV_MENU_FLOWERS },
      { link: "/shop/c/fruity", title: NAV_MENU_FRUITY },
      { link: "/shop/c/medical-plants", title: NAV_MENU_MEDICAL_PLANTS },
    ],
  },
  { id: 3, link: "/discover", title: NAV_MENU_DISCOVER },
];

export default nav_menus_list;
