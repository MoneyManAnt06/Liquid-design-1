import Banner from "@/components/Banner";
import TabGender from "@/components/TabGender";
import TabServices from "@/components/TabServices";

export default function Home() {
  return (
    <>
      <Banner />
      <TabServices />
      <TabGender />
    </>
  );
}
