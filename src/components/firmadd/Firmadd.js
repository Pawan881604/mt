import React from "react";
import { Aside } from "../layout/aside/Aside";
import Header from "../layout/header/Header";
import PageHeader from "../layout/pageHeader/PageHeader";

const Firmadd = () => {
  const title = "ADD FIRM";
  const subTitle = "Firm list";
  return (
    <>
      <div className="containor">
        <div className="containor-col">
          <Aside />
        </div>
        <div className="containor-col">
          <Header />
          <PageHeader title={title} subTitle={subTitle} />
        </div>
      </div>
    </>
  );
};

export default Firmadd;
