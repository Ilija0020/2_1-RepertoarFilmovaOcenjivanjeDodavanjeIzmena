import React from "react";

const AppInfo = () => {
    return (
        <>
            <h2>O aplikaciji</h2>
            <p>
                Ova web aplikacija je razvijena sa ciljem da korisnicima omoguci brz i jednostavan pregled 
                aktuelnog bioskopskog repertoara. Pored pregleda dostupnih filmova, informacija o salama i cenama karata, 
                sistem omogucava i osnovnu interakciju kroz ostavljanje utisaka (Like/Dislike).
            </p>
            <p>
                Projekat je izgradjen kao <strong>Single Page Application (SPA)</strong>. 
                Za razvoj korisničkog interfejsa koriscena je <strong>React.js</strong> biblioteka, 
                dok se za navigaciju bez osvezavanja stranice brine <code>react-router-dom</code>. 
                Dizajn je prilagodjen korisniku kroz moderni SCSS pristup i Flexbox arhitekturu.
            </p>
        </>
    )
}
export default AppInfo;