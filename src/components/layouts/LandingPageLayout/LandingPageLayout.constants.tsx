import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore",
    href: "/event",
  },
];

const BUTTON_ITEMS = [
  {
    label: "Register",
    href: "/auth/register",
    variant: "bordered",
  },
  {
    label: "Login",
    href: "/auth/login",
    variant: "solid",
  },
];

const SOCIAL_ITEMS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    label: "TikTok",
    href: "https://Tiktok.com",
    icon: <FaTiktok />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <FaTwitter />,
  },
  {
    label: "Youtube",
    href: "https://youtube.com",
    icon: <FaYoutube />,
  },
];

export { NAV_ITEMS, BUTTON_ITEMS, SOCIAL_ITEMS };
