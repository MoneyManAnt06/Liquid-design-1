
import Banner from "@/components/Banner";
import Extras from "@/components/Extras";
import Services from "@/components/Services";
import TabCategories from "@/components/TabCategories";
import TabGender from "@/components/TabGender";
import TabServices from "@/components/TabServices";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <Banner />
    <TabCategories />
    <TabGender />
    <TabServices />
    <Services />
    <Extras />
    <Footer/>
  </>
  );
}
