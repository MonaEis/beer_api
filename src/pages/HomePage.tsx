import { Link } from "react-router-dom"
import BarImg from "../assets/christin-hume-08tX2fsuSLg-unsplash.jpg"
import GlassesImg from "../assets/proriat-hospitality-flENqflm6xU-unsplash.png"

function HomePage() {
  return (
    <section className="homepage">
        <article>
            <Link to="/beers">
            <img src={BarImg} alt="Bar" />
            <h2>All Beers 🍻</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae hic beatae est quos nobis.</p>
            </Link>
        </article>
        <article>
            <Link to="/beers/randombeer">
            <img src={GlassesImg} alt="Beer Glasses" />
            <h2>Random Beer 🍺</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae hic beatae est quos nobis.</p>
            </Link>
        </article>
      
    </section>
  )
}

export default HomePage
