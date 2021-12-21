import React from 'react';

import './header.scss';

function Header() {

    const headerComponents: string[] =[ 'Sobre', 'Experiências', 'Projetos', 'Contato'];

    function toggleMenu() {
        let menuComponent = document.querySelector(".header-menu");
        // console.log();
        if ( !(menuComponent?.classList.value.split(" ").includes("active")) ) {
            menuComponent?.classList.add("active");
            document.querySelector(".header-bottom-container")?.classList.add("active");
        }
        else {
            menuComponent?.classList.remove("active");
            document.querySelector(".header-bottom-container")?.classList.remove("active");
        }
        console.log(menuComponent?.classList);
    }

    return (
        <header>
            <div className="header-top-container">
                <div className="header-logo">
                    <span>xXG4briel</span>
                </div>

                <section className="header-menu">
                    <button onClick={ toggleMenu }>
                        <div id="menu"></div>
                    </button>
                </section>

                <section className="header-aboutme">
                    <nav>
                        <ul>
                            {headerComponents.map( headerComponent => 
                            <li key={headerComponent}>{ headerComponent }</li>
                            )}
                        </ul>
                    </nav>
                    <button>Contrate-me</button>
                </section>
            </div>

            <div className="header-bottom-container">
                <section className="header-aboutme-mobile">
                    <nav>
                        <ul>
                            {headerComponents.map( headerComponent => 
                            <li key={headerComponent}>{ headerComponent }</li>
                            )}
                        </ul>
                    </nav>
                </section>
            </div>


        </header>
    );
}

export default Header;