import { services } from "@/data/services";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const renderServices = () =>
    services.map((service) => (
      <div key={service.id} className="col-12 col-lg-4">
        <ServicesCard
          image={service.image}
          altImage="rectangle"
          title={service.title}
          time={service.time}
          description={service.description}
          clasicPrice={service.clasicPrice}
          elitePrice={service.elitePrice}
        />
      </div>
    ));
  return (
    <section className="services">
      <div className="container services__container">
        <div className="services__content">
          <div className="row services__list">{renderServices()}</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
