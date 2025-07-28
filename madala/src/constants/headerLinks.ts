export const HEADER_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PRODUCTS: "/products",
  NEWS: "/news",
  MAP: "/map",
  CONTACT: "/contact",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register"
  },
  ACCOUNT: {
    WISHLIST: "/account/wishlist",
    CART: "/cart"
  }
} as const;

export const userMenuItems = [
  {
    href: HEADER_ROUTES.AUTH.LOGIN,
    text: "Đăng nhập"
  },
  {
    href: HEADER_ROUTES.AUTH.REGISTER,
    text: "Đăng ký"
  }
];

export const navigationItems = [
  {
    href: HEADER_ROUTES.HOME,
    text: "TRANG CHỦ",
    hasDropdown: false
  },
  {
    href: HEADER_ROUTES.ABOUT,
    text: "GIỚI THIỆU",
    hasDropdown: false
  },
  {
    href: HEADER_ROUTES.PRODUCTS,
    text: "SẢN PHẨM",
    hasDropdown: true
  },
  {
    href: HEADER_ROUTES.NEWS,
    text: "TIN TỨC",
    hasDropdown: false
  },
  {
    href: HEADER_ROUTES.MAP,
    text: "BẢN ĐỒ",
    hasDropdown: false
  },
  {
    href: HEADER_ROUTES.CONTACT,
    text: "LIÊN HỆ",
    hasDropdown: false
  }
];
