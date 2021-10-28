import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CarCards.css";

function CarCards({ year, data, searchNames, count, make }) {
  const [vehicleImage, setVehicleImage] = useState([]);

  const clientId = "3dWLZXzv94Cd8ah_dwT3TqMB3MtfaW_fqxVvDLlSNng";

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?page=1&per_page=" +
          count +
          "&query=cars&client_id=" +
          clientId
      )
      .then((res) => {
        // console.log(res);
        setVehicleImage(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count, clientId]);

  const vehicleData = vehicleImage.map((f, index) => {
    return { ...f, index };
  });

  const imageData = data.map((z, index) => {
    return { ...z, index };
  });

  let finalData = vehicleData.map((item, i) =>
    Object.assign({}, item, imageData[i])
  );

  console.log(finalData);
  return (
    <>
      {count > 0 ? (
        <div className="CarCard">
          <div className="CarCardContainer">
            {finalData
              .filter((items) => {
                if (searchNames === "") {
                  return items;
                } else if (
                  items.Model_Name.toLowerCase().includes(
                    searchNames.toLowerCase()
                  )
                ) {
                  return items;
                }
              })
              .map((items, index) => (
                <div className="CarCardInfo">
                  <div className="CarCardImage">
                    <img src={items.urls.small} alt="Images" />
                  </div>
                  <div className="CarCardText">
                    <h2>Name&nbsp;:&nbsp;</h2>
                    {items.Model_Name}
                  </div>
                  <div className="CarCardText">
                    <h2>Make&nbsp;:&nbsp;</h2>
                    {items.Make_Name}
                  </div>
                  <div className="CarCardText">
                    <h2>Type&nbsp;:&nbsp;</h2>
                    {items.VehicleTypeName}
                  </div>
                  <div className="CarCardText">
                    <h2>Year&nbsp;:&nbsp;</h2>
                    {year}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="NoResults">No results found!</div>
      )}
    </>
  );
}

export default CarCards;
