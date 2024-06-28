import React from "react";
import Sidebar from "../SideBar";
import Header from "../../Header/HeaderPart";
import Table from "./EmpTable/Table";

const Employ = () => {
  return (
    <div style={{ background: "", width: "100vw" }}>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Employ;
