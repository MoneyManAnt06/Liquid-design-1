"use client";
import { tabServicesData } from "@/data/tabServices";
import { useState } from "react";

const TabServices = () => {
  const [active, setActive] = useState(tabServicesData[0].text);

  const renderTabs = () =>
    tabServicesData.map((service) => {
      const handleActive = () => setActive(() => service.text);
      return (
        <div
          key={service.id}
          className={`col-2 tab--services__item ${
            active === service.text && "tab--services-active"
          }`}
        >
          <button className="tab--services__button" onClick={handleActive}>
            <span>{service.text}</span>
          </button>
        </div>
      );
    });

  return (
    <div className="tab tab--services">
      <div className="tab--services__container">
        <div className="tab--services__text">
          <span className>{active}</span>
        </div>
        <div className="row tab--services__row">{renderTabs()}</div>
      </div>
    </div>
  );
};

export default TabServices;
