import React from 'react'
import Tables from "./CompTable/Tables"
import Sidebar from '../SideBar'
import Header from "../../Header/HeaderPart"

const Company = () => {
  return (
    <div style={{ background: "", width: "100vw" }}>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Company
