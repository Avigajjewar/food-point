import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";

const Exploremenu = ({category,setcategory}) => {
  return (
    <div id="exploremenu" className="exploremenu">
      <h1>Explore our menu </h1>
      <p className="exploremenu-text">
        choose from a diverse featuring a delectable array of dishes crafted
        with the finest ingredients and culinary expertise. Our mission is
        satisfy your cravings and elevate your dining experience, one delicious
        at a time.
      </p>
      <div className="exploremenu-list">
        {menu_list.map((itms, index) => {
          return (
            <div onClick={()=>setcategory(prev=>prev===itms.menu_name?"All" :itms.menu_name)} className="exploremenu-list-itms">
              <img className={category===itms.menu_name?"active" : ""}  src={itms.menu_image} alt="" />
              <p>{itms.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
