import tower from "./assets/tower.png";
import Activities from "./components/Activities/index.jsx";
import Header from "./components/Header/index.jsx";
import Navigation from "./components/Navigation/index.jsx";
import Weather from "./components/Weather/index.jsx";

export default function Div() {

    return (
        <>
            <section className="top">
                <Header/>

                <Weather />

                <img src={tower} alt="" className="tower" loading="lazy" height="220px" width="110" />

                <Navigation />
            </section>

            <Activities/>
        </>
    )
}