import React, { useState, useEffect } from "react";
import CarCards from "../CarCards/CarCards";
import "./DataFetch.css";
import axios from "axios";
import { CARMAKES } from "../../data/carmakes";
import { YEARS } from "../../data/years";
import { TYPES } from "../../data/types";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    // Clean up!
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function DataFetch() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState([]);
  const [make, setMake] = useState("Toyota");
  const [year, setYear] = useState("2015");
  const [type, setType] = useState("car");
  const [searchNames, setSearchNames] = useState("");
  const [displayMenuIcon, setDisplayMenuIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [height, width] = useWindowSize();

  useEffect(() => {
    axios
      .get(
        "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/" +
          make +
          "/modelyear/" +
          year +
          "/vehicletype/" +
          type +
          "?format=json"
      )
      .then((res) => {
        // console.log(res);
        setData(res.data.Results);
        setCount(res.data.Count);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(make);
  }, [make, year, type]);

  const hamburgerMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  useEffect(() => {
    if (width < 451) {
      setShowMenu(false);
      setDisplayMenuIcon(true);
    } else {
      setShowMenu(true);
      setDisplayMenuIcon(false);
    }
  }, [width]);

  return (
    <div className="FetchData">
      <>
        {showMenu ? (
          <>
            {displayMenuIcon ? (
              <CgClose className="MenuIcon" onClick={hamburgerMenu} />
            ) : null}
          </>
        ) : (
          <>
            {displayMenuIcon ? (
              <GiHamburgerMenu className="MenuIcon" onClick={hamburgerMenu} />
            ) : null}
          </>
        )}
      </>
      {showMenu ? (
        <div className="EntryForm">
          <form className="Form">
            <label>
              MAKE:
              <select
                id="cars"
                name="cars"
                onChange={(e) => setMake(e.target.value)}
              >
                {CARMAKES.map((items, index) => (
                  <option value={items.name} selected={items.selected}>
                    {items.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              YEAR:
              <select
                id="years"
                name="years"
                onChange={(e) => setYear(e.target.value)}
              >
                {YEARS.map((items, index) => (
                  <option value={items.year} selected={items.selected}>
                    {items.year}
                  </option>
                ))}
              </select>
            </label>
            <label>
              TYPE:
              <select
                id="type"
                name="type"
                onChange={(e) => setType(e.target.value)}
              >
                {TYPES.map((items, index) => (
                  <option value={items.type} selected={items.selected}>
                    {items.type}
                  </option>
                ))}
              </select>
            </label>
          </form>
          <input
            type="text"
            className="Search"
            placeholder="Search by name"
            onChange={(event) => setSearchNames(event.target.value)}
          />
        </div>
      ) : null}
      <div>
        <CarCards
          year={year}
          data={data}
          searchNames={searchNames}
          count={count}
          make={make}
          type={type}
        />
      </div>
    </div>
  );
}

export default DataFetch;
