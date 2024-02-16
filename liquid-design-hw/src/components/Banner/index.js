import { bannerData } from "@/data/banner";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <button className="banner__button">
          <Image src={bannerData.icon} width="auto" height="auto" alt="close" />
        </button>
      </div>
    </section>
  );
};

export default Banner;
