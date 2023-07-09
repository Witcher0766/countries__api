import React, { useEffect, useState } from "react";
// import CountryCard from "./CountryCard";
import arrow from "../assets/arrow.svg"
import dArrow from "../assets/d-arrow.svg"
import close from "../assets/close.svg"
import dClose from "../assets/d-close.svg"
import userEvent from "@testing-library/user-event";
import CountryCard from "./CountryCard";



const Catalogue = (props) => {

    // console.log(props.countryData);

    const [searchValue, setSearchValue] = useState("");

    // state keeping your search request 
    function handleSearch(event) {
        setSearchValue(event.target.value)
    }

    // const toggleSelect = () => {

    // }


    // state keeping data of the country to show 

    const [countryToShow, setCountriesToShow] = useState(props.countryData);
    useEffect(() => {
        if (searchValue === "") {
            setCountriesToShow(props.countryData)
            // console.log(countryToShow);
        } else {
            fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
                .then(res => res.json())
                .then(data => setCountriesToShow(data))
        }
    }, [searchValue])

    function filterRegion (region) {
        fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => res.json())
            .then(data => setCountriesToShow(data))
    }

    let countryCards;
    let dataToShow;

    let notFound = false;

    if(!countryToShow.length) {
        if(searchValue !== "") {
            notFound = true;
        }
        dataToShow = props.countryData;
    } 
    else {
        dataToShow = countryToShow;
    }

    // console.log(dataToShow);
    

    countryCards = dataToShow.map(country => {
        return (
           <CountryCard 
                key={country.cca3}
                flag={country.flags.svg}
                id={country.cca3}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
           />
        )
    })

    return (
        <>
        <div className="main-container">
            <div className="sub-container">
                    <div className="input-wrap">
                        <input 
                        type="text" 
                         placeholder="country search"   
                         className="country-search"
                         onChange={handleSearch}
                         value={searchValue}
                        />
                    </div>

                    <div className="select-wrapper">
                        {/* <div className="select" id="select" onClick={toggleSelect}> */}
                        <div className="select">
                        <p>Filter by Region</p>  
                      <select name="Slect Country" id="select__options">
                            <option >All</option>
                            <option onClick={() => filterRegion("Asia")} className="select__option"  >Asia</option>
                            <option onClick={() => filterRegion("Africa")} className="select__option" >Africa</option>
                            <option onClick={() => filterRegion("America")} className="select__option" >America</option>
                            <option onClick={() => filterRegion("Europe")} className="select__option" >Europe</option>
                            <option onClick={() => filterRegion("Oceania")} className="select__option" >Oceania</option>
                        </select>
                        </div>

                    </div>
               
            </div>

            <div className="countrycards-wrapper">
                    {notFound ? <h2>Not Found</h2> : countryCards}
                </div>

            </div>
       
        </>
    )
}


export default Catalogue;