import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CountryDetails() {

    const { countryId } = useParams()
    const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;
    const [countriesDetails, setcountriesDetails] = useState([]);


    useEffect(() => {
        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.borders);
                setcountriesDetails(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [apiURL])

    if (!countriesDetails) {
        return <p> Loading...</p>
    }



    return (


        <div>
            <div>

                <div>
                    <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

                    <h1>{countriesDetails.name && countriesDetails.name.common}</h1>

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>{countriesDetails.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {countriesDetails.area} km<sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {countriesDetails.borders?.map(borderCountry => {
                                            return <li key={borderCountry}><Link to={`/${borderCountry}`}>{borderCountry}</Link></li>
                                        })}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default CountryDetails;
