import React from 'react';

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="laptop">💻</span>Danielle James
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#">
                            <span>Portfolio</span>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#">
                            <span>Contact</span>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#">
                            <span>Resume</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;