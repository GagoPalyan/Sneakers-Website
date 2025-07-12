import NotFound from "../components/404NotFound/404NotFound";
import BuyPage from "../components/BuyPage/BuyPage";
import CartPage from "../components/CartPage/CartPage";
import ContactUsPage from "../components/ContactUsPage/ContactUsPage";
import FavoritePage from "../components/FavoritePage/FavoritePage";
import Home from "../components/Home/Home";
import CookiePolicy from "../components/Security/CookiePolicy/CookiePolicy";
import DeliveryPolicy from "../components/Security/DeliveryPolicy/DeliveryPolicy";
import ExchangePolicy from "../components/Security/ExchangePolicy/ExchangePolicy";
import PrivacyPolicy from "../components/Security/PrivacyPolicy/PrivacyPolicy";
import TermsOfSale from "../components/Security/TermsOfSale/TermsOfSale";
import TermsOfUse from "../components/Security/TermsOfUse/TermsOfUse";
import ShopingPage from "../components/ShopingPage/ShopingPage";
import SignIn from "../components/SignIn/SignIn";
import SneakersPage from "../components/SneakersPage/SneakersPage";
import { filterList } from "./filterList";
import {
  ADIDAS_PAGE,
  BUY_PAGE,
  CART_PAGE,
  CONTACT_US_PAGE,
  COOKIE_POLICY,
  DELIVERY_POLICY,
  FAVORITE_PAGE,
  HOME_PAGE,
  MEN_PAGE,
  NIKE_PAGE,
  PAGE_NOT_FOUND,
  PRIVACY_POLICY,
  RETURN_AND_EXCHANGE_POLICY,
  SIGNIN_PAGE,
  SNEAKERS_PAGE,
  TERMS_OF_SALE,
  TERMS_OF_USE,
  WOMEN_PAGE,
} from "./paths";
import { sneakersList } from "./productList";

export const routes = {
  infoPages: [
    { id: 1, path: HOME_PAGE, element: <Home />, name: "Home" },
    {
      id: 2,
      path: SIGNIN_PAGE,
      element: <SignIn />,
      name: "Sign-in",
    },
    {
      id: 3,
      path: CONTACT_US_PAGE,
      element: <ContactUsPage />,
      name: "Contact-us",
    },
    {
      id: 4,
      path: PAGE_NOT_FOUND,
      element: <NotFound />,
      name: "404-page-not-found",
    },
  ],
  shopPages: [
    {
      id: 5,
      path: MEN_PAGE,
      element: (
        <ShopingPage
          filterList={filterList.men}
          page={sneakersList.filter(
            (item) => item.gender == "Men's Shoes" || item.gender == "Uni"
          )}
        />
      ),
      name: "header.navBar.men",
    },
    {
      id: 6,
      path: WOMEN_PAGE,
      element: (
        <ShopingPage
          filterList={filterList.women}
          page={sneakersList.filter(
            (item) => item.gender == "Women's Shoes" || item.gender == "Uni"
          )}
        />
      ),
      name: "header.navBar.women",
    },
    {
      id: 7,
      path: ADIDAS_PAGE,
      element: (
        <ShopingPage
          filterList={filterList.adidas}
          page={sneakersList.filter((item) => item.brand == "ADIDAS")}
        />
      ),
      name: "header.navBar.adidas",
    },
    {
      id: 8,
      path: NIKE_PAGE,
      element: (
        <ShopingPage
          filterList={filterList.nike}
          page={sneakersList.filter((item) => item.brand == "NIKE")}
        />
      ),
      name: "header.navBar.nike",
    },
  ],
  userTools: [
    {
      id: 9,
      path: FAVORITE_PAGE,
      element: <FavoritePage />,
      name: "Favorite",
      icon: (
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="24px"
          height="24px"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
          ></path>
        </svg>
      ),
    },
    {
      id: 10,
      path: CART_PAGE,
      element: <CartPage />,
      name: "Cart",
      icon: (
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="24px"
          height="24px"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
          ></path>
        </svg>
      ),
    },
  ],
  securityPages: [
    {
      id: 11,
      path: PRIVACY_POLICY,
      element: <PrivacyPolicy />,
      name: "Privacy policy",
    },
    {
      id: 12,
      path: TERMS_OF_USE,
      element: <TermsOfUse />,
      name: "Terms of Use",
    },
    {
      id: 15,
      path: COOKIE_POLICY,
      element: <CookiePolicy />,
      name: "Cookie policy",
    },
    {
      id: 16,
      path: RETURN_AND_EXCHANGE_POLICY,
      element: <ExchangePolicy />,
      name: "Return and Exchange Policy",
    },
    {
      id: 17,
      path: DELIVERY_POLICY,
      element: <DeliveryPolicy />,
      name: "Delivery Policy",
    },
    {
      id: 18,
      path: TERMS_OF_SALE,
      element: <TermsOfSale />,
      name: "Terms of Sale",
    },
  ],
  sneakersPage: {
    id: 13,
    path: SNEAKERS_PAGE,
    element: <SneakersPage />,
    name: "sneakers-page",
  },
  buyPage: {
    id: 14,
    path: BUY_PAGE,
    element: <BuyPage />,
    name: "buy-page",
  },
};

export default routes;
