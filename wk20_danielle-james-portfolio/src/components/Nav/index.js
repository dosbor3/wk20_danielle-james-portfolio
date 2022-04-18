import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import image from '../../assets/cover/devPhoto.jpg';

function Nav(props) {
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;    

      return (
        <header>
            <h2>
                <a href="/">
                <span role="img" aria-label="laptop"> 💻</span> Danielle James
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                {categories.map((category) => (
                    <li className={`mx-1 ${
                        currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                    <span
                        onClick={() => {
                        setCurrentCategory(category)
                        }}
                    >
                        {capitalizeFirstLetter(category.name)}
                    </span>
                    </li>
                ))}
                </ul>               
            </nav>
      <img src={image} className="my-2" alt="cover" />
    </header>
    )
}

export default Nav;