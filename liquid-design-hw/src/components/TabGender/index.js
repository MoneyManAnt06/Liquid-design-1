"use client";
import { tabGenderData } from "@/data/tabServices";
import { useState } from "react";

const TabGender = () => {
  const [active, setActive] = useState(tabGenderData[0].text);

  const renderTabs = () =>
    tabGenderData.map((service) => {
      const handleActive = () => setActive(() => service.text);
      return (
        <div
          key={service.id}
          className={`col-4 tab__item tab--gender__item ${
            active === service.text && "tab-active tab--gender-active"
          }`}
        >
          <button
            className="tab__button tab--gender__button"
            onClick={handleActive}
          >
            <span>{service.text}</span>
          </button>
        </div>
      );
    });

  return (
    <div className="tab">
      <div className="tab__container">
        <div className="tab__text">
          <span className>{active}</span>
        </div>
        <div className="row tab--gender__row">{renderTabs()}</div>
      </div>
    </div>
  );
};

export default TabGender;
