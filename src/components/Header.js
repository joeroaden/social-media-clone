import React from "react";
import Navbar from "./Navbar"
import SearchBox from "./SearchBox"

function Header(){
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-6">
          <Navbar/>
        </div>
        <div className="col-6">
          <SearchBox/>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default Header;