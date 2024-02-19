import Banner from "@/components/Banner";
import TabCategories from "@/components/TabCategories";
import TabGender from "@/components/TabGender";
import TabServices from "@/components/TabServices";

export default function Home() {
  return (
    <>
      <Banner />
      <TabCategories />
      <TabGender />
      <TabServices />
    </>
  );
}
