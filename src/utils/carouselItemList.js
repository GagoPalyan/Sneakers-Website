import { ADIDAS_PAGE, NIKE_PAGE, SIGNIN_PAGE } from "./paths";
import img1 from "../assets/Home/а1.webp";
import img2 from "../assets/Home/б2.webp";
import img3 from "../assets/Home/б3.webp";
import img4 from "../assets/Home/b4.webp";
import img5 from "../assets/Home/b5.webp";
import img6 from "../assets/Home/b6.webp";
import img7 from "../assets/Home/b7.webp";

const carouselItemList = [
  {
    id: 1,
    title: "home.content1.carousel1.title",
    text: "home.content1.carousel1.text",
    img: img4,
    path: SIGNIN_PAGE,
    button: "home.content1.carousel1.button",
  },
  {
    id: 2,
    title: "home.content1.carousel2.title",
    text: "home.content1.carousel2.text",
    img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/image_2024_10_03_16_41_d_99dc31639a.jpg",
    path: ADIDAS_PAGE,
    button: "home.content1.carousel2.button",
  },
  {
    id: 3,
    title: "home.content1.carousel3.title",
    text: "home.content1.carousel3.text",
    img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_822,c_limit/ab544cf6-a4a4-4bd2-b5cb-a11aec6a367f/men-s-shoes-clothing-accessories.jpg",
    path: NIKE_PAGE,
    button: "home.content1.carousel3.button",
  },
  {
    id: 4,
    title: "home.content1.carousel4.title",
    text: "home.content1.carousel4.text",
    img: img1,
  },
  {
    id: 5,
    title: "home.content1.carousel5.title",
    text: "home.content1.carousel5.text",
    img: img2,
  },
  {
    id: 6,
    title: "home.content1.carousel6.title",
    text: "home.content1.carousel6.text",
    img: img3,
  },
  {
    id: 7,
    title: "home.content1.carousel7.title",
    text: "home.content1.carousel7.text",
    img: img5,
  },
  {
    id: 8,
    title: "home.content1.carousel8.title",
    text: "home.content1.carousel8.text",
    img: img6,
  },
  {
    id: 9,
    title: "home.content1.carousel9.title",
    text: "home.content1.carousel9.text",
    img: img7,
  },
];

export default carouselItemList;
