import { StaticImageData } from "next/image";
import EllyAvatar from "../../../public/creators/ely.png";
import ChikaAvatar from "../../../public/creators/EMtrai.jpg";
import KhumCanCoAvatar from "../../../public/creators/khumcanco.jpg";

type Creator = {
  name: string;
  position: string;
  introduce: string;
  avatar: StaticImageData;
  href_fb: string;
  href_ins: string;
  href_tik: string;
  href_ytb?: string;
};

export const creators: Creator[] = [
  {
    name: "Ely It Clean",
    href_fb: "https://www.facebook.com/elyitclean",
    href_ins: "https://www.instagram.com/elynguyenx",
    href_tik: "https://www.tiktok.com/@elyitclean",
    href_ytb: "https://www.youtube.com/@elyitclean",
    avatar: EllyAvatar,
    position: "Food Vlogger",
    introduce:
      "Ely It Clean aka Ely Nguyen is a beloved creator known for her captivating charm and innovative culinary content. Her delightful personality and fresh approach to cooking have resonated with a wide audience. We have proudly supported Ely since her early days, and in just one year, she has achieved remarkable success with 1 million followers, while making a positive impact on her community.",
  },
  {
    name: "Khum Can Co",
    href_fb: "https://www.facebook.com/antikhumcanco",
    href_ins: "https://www.instagram.com/hng_oanh/",
    href_tik: "https://www.tiktok.com/@khumcanco",
    href_ytb: "https://www.youtube.com/@khumcanco",
    avatar: KhumCanCoAvatar,
    position: "Lifestyle Vlogger",
    introduce:
      "Khum Can Co aka Hoang Oanh, is a beloved content creator sharing her vibrant life in Korea with nearly 2 million followers. Her infectious energy, unwavering positivity, and inspiring stories have captivated audiences worldwide. We are truly honored to be among the first to earn her trust and stand beside her as she embarks on an exciting new chapter of growth and development. We can't wait to see where her incredible journey takes her!",
  },
  {
    name: "Ellm Zai Chi Nguyet",
    href_fb: "https://www.facebook.com/profile.php?id=100029081566450",
    href_ins: "https://www.instagram.com/pureimagination.network/",
    href_tik: "https://www.tiktok.com/@d.dragon1712",
    // href_ytb: "https://www.youtube.com/@chikakakay",
    avatar: ChikaAvatar,
    position: "Comedy Creator",
    introduce: "Do Dinh Long, under the alias Elm Zai Chi Nguyet, is a standout creator known for his high-energy performances, in-depth knowledge of chemistry, and charming personality.",
  },
];

export default creators;
