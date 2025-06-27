import { useEffect, useState } from "react";
import { Beer } from "../types/BeerTypes";
import { Link } from "react-router-dom";
import BackImg from "../assets/Back.png"


function RandomBeerPage() {

    const [singleBeer, setSingleBeer] = useState<Beer | null>(null);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setSingleBeer(data);
            })
            .catch((error) => console.log(error));
    }, []);

    if (!singleBeer) {
        return (
            <div className="error-msg">
                <p>Loading...</p>
                <Link to="/beers" className="yellow-btn">
                    Show me all Beers
                </Link>
            </div>
        );
    }



  return (
    <div className="detail">
            <img src={singleBeer.image_url} alt={singleBeer.name} />
            <h3>{singleBeer.name}</h3>
            <h4>{singleBeer.tagline}</h4>
            <div className="detailed-details">
                <p>First brewed:</p>
                <p>{singleBeer.first_brewed}</p>
            </div>
            <div className="detailed-details">
                <p>Attenuation level:</p>
                <p>{singleBeer.attenuation_level}</p>
            </div>
            <p>{singleBeer.description}</p>
            <h5>{singleBeer.contributed_by}</h5>
            <Link to="/">
            <img src={BackImg} alt="Back Icon" />
            </Link>
        </div>
  )
}

export default RandomBeerPage
