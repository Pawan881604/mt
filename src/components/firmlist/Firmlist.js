import React from "react";
import { Aside } from "../layout/aside/Aside";
import Header from "../layout/header/Header";
import PageHeader from "../layout/pageHeader/PageHeader";
import { DataGrid } from "react-data-grid";
import FList from "./assets/FList";
import "./firm.css";
import { useNavigate } from "react-router-dom";

const Firmlist = () => {
  const navigate = useNavigate();
    const title = "FIRM LIST";
  const subTitle = "Firm list";
  const handleAddFirm = ()=>{
    navigate('/firmadd')
  }
  return (
    <>
      <div className="containor">
        <div className="containor-col">
          <Aside />
        </div>
        <div className="containor-col">
          <Header />
          <PageHeader title={title} subTitle={subTitle} />
          <div className="firm-containor">
            <div className="add-firm-btn">
            <button onClick={handleAddFirm}>Add Firm</button>
            </div >
            <div  className="firm-list-search">
              <div className="firm-list-input">
                <input type="search" placeholder="Firm Name" />
              </div>
              <div className="firm-list-btn">
                <button>Search</button>
              </div>
            </div>
            <div className="firm-table">
              <FList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Firmlist;
