import { bannerData } from "@/data/banner";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container banner__container">
        <div className="banner__content">
          <button className="banner__button">
            <Image
              src={bannerData.icon}
              width="auto"
              height="auto"
              alt="close"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
