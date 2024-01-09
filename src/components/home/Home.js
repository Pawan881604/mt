import React from "react";
import { Aside } from "../layout/aside/Aside";
import Header from "../layout/header/Header";
import PageHeader from "../layout/pageHeader/PageHeader";
import './home.css'

const Home = () => {
  const title = 'Dashboard';
  return (
    <>
      <div className="containor">
        <div className="containor-col">
          <Aside />
        </div>
        <div className="containor-col">
          <Header />
          <PageHeader title={title}/>
        </div>
      </div>
    </>
  );
};

export default Home;
