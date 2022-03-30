import React from "react";
import { fetchData } from "../util/api";
import CountryPicker from './Dropdown/CountryPicker';
import Cards from './Card/Cards'
import './Card.css';

const Card = () => {

    const [covid, setCovid] = React.useState({});
    const [isLoading, setLoading] = React.useState(true);

    const acceptData = async () => {
        const data = await fetchData();
        setCovid({ data });
    }

    React.useEffect(() => {
        acceptData().then(() => setLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading..</div>
    }

    const handleCountryChange = async (country) => {
        const data = await fetchData(country);
  
        setCovid({ data, country: country });
    }


    const handleMenuChange = function (event) {
        event.preventDefault();
        handleCountryChange(event.target.value);
    }

    return (
        <div className="card_body">
            <div className="card_body_extension">
                <div className="spacing">
                    <div className="spacing_header">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="card_title">COVID-19 Tracker</h4>
                        </div>
                    </div>

                    <div className="spacing_header">
                        <CountryPicker handleCountryChange={ handleMenuChange }/>
                    </div>

                    <div className="spacing_header">
                        <h1>Covid-19 In { covid.country ? covid.country : "Global" }</h1>
                    </div>

                    <div className="cards_grid">
                        <Cards
                            title="Confirmed"
                            value={ covid.data.confirmed.value }
                            lastUpdated={ new Date().toLocaleDateString() }
                        />

                        <Cards
                            title="Recovered"
                            value={ covid.data.recovered.value }
                            lastUpdated={ new Date().toLocaleDateString() }
                        />

                        <Cards
                            title="Deaths"
                            value={ covid.data.deaths.value }
                            lastUpdated={ new Date().toLocaleDateString() }
                        />
                    </div>
                </div>

                <div className="spacing">
                    <hr className="hr_border" />
                    <div className="cards_grid_2">
                        <div className="footer_positioning">
                            <div className="footer_text">
                                Created By Jaron.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card