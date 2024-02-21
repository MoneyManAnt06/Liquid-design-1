import { extrasData } from "@/data/extras";
import ExtrasCard from "./ExtrasCard";

const Extras = () => {
  const renderExtras = () =>
    extrasData.extras.map((extra) => (
      <div key={extra.id} className="col-12 col-lg-4">
        <ExtrasCard
          title={extra.title}
          time={extra.time}
          clasicPrice={extra.clasicPrice}
          elitePrice={extra.elitePrice}
          customClass="card--extra"
        />
      </div>
    ));

  return (
    <section className="extras">
      <div className="container">
        <div className="extras__content">
          <h2 className="extras__title">{extrasData.title}</h2>
          <div className="row extras__list">{renderExtras()}</div>
        </div>
      </div>
    </section>
  );
};

export default Extras;
