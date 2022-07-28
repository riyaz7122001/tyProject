import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "./Carousel";
function Bottom() {
  return (
    <div className="home">
      <div className="home_container">
        <Carousel />

        <div className="home_row">
          <Product
            id="1"
            title="Dell New XPS 9305 Intel i7-1165G7 13.3 inches FHD Display Laptop, 16GB LPDDR4, 512Gb SSD, Windows 10 + MS Office'19, Platinum Silver Color, FPR + Backlit KB (ICC-C786501WIN8), 1.16Kgs"
            dollar="$"
            price={100.67}
            image="https://m.media-amazon.com/images/I/51PvPQ-8xgL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Zajkac Designer Multicolor Skin / Decal Compatible forAmazon Echo Dot Gen 3 (100percentDesi_Amazon-Echo-Dot-Gen-3)"
            dollar="$"
            price={29.44}
            image="https://m.media-amazon.com/images/I/716+qgJwodS._AC_UL480_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Dress Chronograph Men's Watch (Black Dial Black Colored Strap)"
            dollar="$"
            price={19.7}
            image="https://m.media-amazon.com/images/I/71fLBOQZmcL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Whirlpool 190 L 3 Star Direct-Cool Single Door Refrigerator (WDE 205 CLS 3S, Blue)"
            dollar="$"
            price={80.67}
            image="https://images-eu.ssl-images-amazon.com/images/I/31qC5aShOLL._SX342_SY445_QL70_FMwebp_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)"
            dollar="$"
            price={120.58}
            image="https://images-eu.ssl-images-amazon.com/images/I/41pQ4gJMwEL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black) (2021 Model)"
            dollar="$"
            price={105}
            image="https://m.media-amazon.com/images/I/61GwJAhftvS._AC_UL480_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Bottom;
