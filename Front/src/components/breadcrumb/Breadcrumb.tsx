import React, { useContext } from "react";
import "./breadcrumb.scss";
import { BreadcrumbContext } from "../../context/BreadcrumbContext";

export const Breadcrumb = () => {
  const { categories } = useContext(BreadcrumbContext);

  return (
    <ul className="breadcrumb">
      {categories.map((br: string, index: number) => {
        if (index < categories.length - 1) {
          return <li key={index}>{`${br} `} </li>;
        }
        return (
          <li key={index}>
            <strong>{br}</strong>
          </li>
        );
      })}
    </ul>
  );
};
