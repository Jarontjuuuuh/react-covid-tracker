import React from "react"
import { fetchCountries } from "../../util/api";
import './CountryPicker.css';

const Picker = ({ handleCountryChange }) => {
    const [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        const fetchApi = async () => {
            setCountries(await fetchCountries());
        }

        fetchApi();
    }, []);

    return (
        <select className="select" onChange={ handleCountryChange }>
            <option value="">United States</option>
            { countries.map((country, i) => <option key={i} value={country}>{country}</option>) }
        </select>
    );
}

export default Picker;