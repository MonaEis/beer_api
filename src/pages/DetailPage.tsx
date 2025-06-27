import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Beer } from "../types/BeerTypes";
import BackImg from "../assets/Back.png"

function DetailPage() {
    const { id } = useParams();
    // console.log(id);

    const [singleBeer, setSingleBeer] = useState<Beer | null>(null);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setSingleBeer(data);
            })
            .catch((error) => console.log(error));
    }, [id]);

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
            <Link to="/beers">
            <img src={BackImg} alt="Back Icon" />
            </Link>
        </div>
    );
}

export default DetailPage;
