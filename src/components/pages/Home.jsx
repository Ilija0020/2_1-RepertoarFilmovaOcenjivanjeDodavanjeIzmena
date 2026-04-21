import React from "react";

const Home = () => {
    return (
        <div className="home-page">
            <h1>Dobrodosli u Vas bioskop</h1>
            <p className="subtitle">Mesto gde magija pokretnih slika ozivljava. Uzivajte u najnovijim
                filmskim hitovima, vrhunskom 3D ozvucenju i najudobnijim sedistima u gradu. Pregledajte nas 
                aktuelni repertoar, pronadjite svoj omiljeni zanr i rezervisite karte na vreme 
                za nezaboravno filmsko iskustvo.
            </p>
            <div className="features">
                <div className="feature-card">
                    <h3>🍿 Najnoviji hitovi</h3>
                    <p>Redovno osvežavamo repertoar svetskim premijerama.</p>
                </div>
                <div className="feature-card">
                    <h3>🎟️ Laka rezervacija</h3>
                    <p>Pronađite salu, proverite cene i osigurajte svoje mesto u par klikova.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;