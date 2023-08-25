import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function HomePage() {

    const apiURL = "https://ih-countries-api.herokuapp.com/countries";
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCountries(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div>
                <h1>WikiCountries: Your Guide to the World</h1>
                <div className="container" style={{ maxHeight: "90vh", overflow: scroll }}>
                    <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
                    <div className="list-group">
                        {countries.map((country) => (
                           <Link
                           key={country.alpha3Code}
                           to={`/${country.alpha3Code}`}    
                           className="list-group-item list-group-item-action"
                         >
                           <img
                             src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                             alt={`${country.name.common} Flag`}
                             style={{ marginRight: "10px" }}
                           />
                           {country.name.common}
                         </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};



export default HomePage;

