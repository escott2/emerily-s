import React from "react";
import candleSconce from "../img/candleSconce.svg";

function Header() {
    return (
        <header>
            <div class="candle-wrapper">
                <div class="candle-light"></div>
                <img class="candle-img" src={candleSconce}></img>
            </div>
            <h1 class="site-title">Emerily's</h1>
            <div class="candle-wrapper">
                <div class="candle-light"></div>
                <img class="candle-img" src={candleSconce}></img>
            </div>
        </header>
    );
}

export default Header;