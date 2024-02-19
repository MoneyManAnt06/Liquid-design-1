"use client";
import { tabCategoriesData } from "@/data/tabServices";
import { useState } from "react";

const TabCategories = () => {
  const [active, setActive] = useState(tabCategoriesData[0].text);

  const renderTabs = () =>
    tabCategoriesData.map((service) => {
      const handleActive = () => setActive(() => service.text);
      return (
        <div
          key={service.id}
          className={`col-2 tab__item tab--categories__item ${
            active === service.text && "tab-active tab--categories-active"
          }`}
        >
          <button
            className="tab__button tab--categories__button"
            onClick={handleActive}
          >
            <span>{service.text}</span>
          </button>
        </div>
      );
    });

  return (
    <div className="tab tab--categories">
      <div className="tab__container tab--categories__container">
        <div className="tab__text tab--categories__text">
          <span className>{active}</span>
        </div>
        <div className="row tab__row tab--categories__row">{renderTabs()}</div>
      </div>
    </div>
  );
};

export default TabCategories;
