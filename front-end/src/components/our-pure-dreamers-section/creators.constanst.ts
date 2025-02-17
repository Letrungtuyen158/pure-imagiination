import { StaticImageData } from "next/image";
import EllyAvatar from "../../../public/creators/ely.png";
import ChikaAvatar from "../../../public/creators/EMtrai.jpg";
import KhumCanCoAvatar from "../../../public/creators/khumcanco.jpg";
import NgoisaoNamAvatar from "../../../public/creators/ngoisaopnam-01.png";
import GiaocunAvatar from "../../../public/creators/giaocun-02.png";

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
    name: "Elm Zai Chi Nguyet",
    href_fb: "https://www.facebook.com/profile.php?id=100029081566450",
    href_ins: "https://www.instagram.com/pureimagination.network/",
    href_tik: "https://www.tiktok.com/@d.dragon1712",
    // href_ytb: "https://www.youtube.com/@chikakakay",
    avatar: ChikaAvatar,
    position: "Comedy Creator",
    introduce:
      "Do Dinh Long, under the alias Elm Zai Chị Nguyet, is a standout creator known for his high-energy performances, deep chemistry expertise, and charismatic personality. His engaging teaching style makes complex concepts easy to grasp, sparking curiosity and enthusiasm among students. With his unique blend of humor, passion, and creativity, he has become one of the most inspiring and influential educational TikTokers in Vietnam.",
  },

  {
    name: "Ngoi Sao Phuong Nam",
    href_fb: "https://www.facebook.com/profile.php?id=100092008495117",
    href_ins: "https://www.instagram.com/chusnamday/",
    href_tik: "https://www.tiktok.com/@_namnamnamm",
    href_ytb: "https://www.youtube.com/@chusnamday",
    avatar: NgoisaoNamAvatar,
    position: "Lifestyle Vlogger",
    introduce:
      "Ngoi Sao Phuong Nam, also known as Nguyễn Phuong Nam, is a talented and charismatic Vietnamese TikToker famous for his humorous and creative content. His TikTok account, @_namnamnamm, has gained nearly 500,000 followers and 28 million likes. With his sharp wit, engaging storytelling, and natural charm, Phương Nam consistently captivates his audience, making him one of Vietnam’s most promising and beloved TikTok stars.",
  },

  {
    name: "Giao Cun",
    href_fb: "https://www.facebook.com/profile.php?id=100086920787571",
    href_ins: "https://www.instagram.com/pureimagination.network",
    href_tik: "https://www.tiktok.com/@quynhgiao1270?lang=en",
    // href_ytb: "https://www.youtube.com/@chikakakay",
    avatar: GiaocunAvatar,
    position: "Education Vlogger",
    introduce:
      "Giao Cùn, whose real name is Ngô Quỳnh Giao, is a talented content creator known for her captivating history videos. Her TikTok account, @quynhgiao1270, has nearly 800,000 followers. With brilliant storytelling, humor, and deep passion, she makes history fun and engaging. Her unique ability to simplify complex events and spark curiosity has made her one of Vietnam’s most inspiring TikTok educators.",
  },
];

export default creators;
