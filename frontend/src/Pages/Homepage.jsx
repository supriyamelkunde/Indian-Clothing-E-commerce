import React, { useEffect, useState } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import api from "../config/api";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  var mens_kurta = [];
  var tshirt = [];
  var lengha_choli = [];
  var Dress = [];
  var Saree = [];
  var top = [];
  var shirt = [];

  const getData = async () => {
    try {
      const response = await api.get("/api/products");
      console.log("all data from products page", response.data.content);
      setData(response.data.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />
      <div className="space-y-10 py-20">
        <HomeProductSection
          data={
            (lengha_choli = data.filter(
              (e) => e.category.name === "lengha_choli"
            ))
          }
          section={"Lehenga Choli"}
          navigationurl={"/women/clothing/lengha_choli"}
        />
        <HomeProductSection
          data={(Saree = data.filter((e) => e.category.name === "saree"))}
          section={"Saree"}
          navigationurl={"/women/clothing/saree"}
        />

        <HomeProductSection
          data={(Dress = data.filter((e) => e.category.name === "dress"))}
          section={"Stylish Dresses"}
          navigationurl={"/women/clothing/dress"}
        />

        <HomeProductSection
          data={(top = data.filter((e) => e.category.name === "top"))}
          section={"Trendy Tops"}
          navigationurl={"/women/clothing/top"}
        />

        <HomeProductSection
          data={
            (mens_kurta = data.filter((e) => e.category.name === "mens_kurta"))
          }
          section={"Men's Kurta"}
          navigationurl={"/men/clothing/mens_kurta"}
        />

        <HomeProductSection
          data={(tshirt = data.filter((e) => e.category.name === "t-shirts"))}
          section={"Men's t-shirts"}
          navigationurl={"/men/clothing/t-shirts"}
        />

         <HomeProductSection
          data={(shirt = data.filter((e) => e.category.name === "shirt"))}
          section={"Men's shirts"}
          navigationurl={"/men/clothing/shirt"}
        />
      </div>
    </div>
  );
};

export default Homepage;
