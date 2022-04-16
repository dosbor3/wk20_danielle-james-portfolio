import React from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    const categories = [
        {name: "Portfolio"},
        {name: "Contact"},
        {name: "Resume"}
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
      }

    return (
        <header>
            <h2>
                <a href="/">
                <span role="img" aria-label="laptop"> 💻</span> Danielle James
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                    About me
                    </a>
                </li>
                {categories.map((category) => (
                <li
                className="mx-1"
                key={category.name}
                >
                <span onClick={() => categorySelected(category.name)}>
                    {category.name}
                </span>
                </li>
              ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;