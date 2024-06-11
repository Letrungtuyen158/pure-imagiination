import Image from "next/image";
import PlayImg from "../../../../public/play.png";

export default function Play() {
  return <Image src={PlayImg} placeholder="blur" alt="Play" />;
}

