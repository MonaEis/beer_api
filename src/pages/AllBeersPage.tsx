import { useEffect, useState } from "react";
import { Beer } from "../types/BeerTypes";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState<Beer[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true)
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setBeers(data);
            })
            .catch((error) => console.log(error)).finally(()=>setIsLoading(false));
    },[]);

    return (
        <section className="allbeers">
          {isLoading && <p>Is Loading...</p>}

            {!isLoading &&
            beers.map((singleBeer) => (
                <div key={singleBeer._id}>
                    <img src={singleBeer.image_url} alt={singleBeer.name} />
                    <div>
                        <h3>{singleBeer.name}</h3>
                        <h4>{singleBeer.tagline}</h4>
                        <h5>{`Created by: ` + singleBeer.contributed_by}</h5>
                        <Link to={`/beers/` + singleBeer._id} className="yellow-btn">Details</Link>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default AllBeersPage;
