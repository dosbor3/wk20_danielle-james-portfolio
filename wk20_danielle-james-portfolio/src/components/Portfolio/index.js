import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/tracker/tracker1.png'


function Portfolio(screenshots) {
    const currentScreen = {
        name: 'AA Budget Tracker',
        description: 'PWA app that allows users to track finances with little to no internet connection',
        deployedLink: 'https://pure-fjord-98425.herokuapp.com/',
        gitHubLink: 'https://github.com/dosbor3/AA-Budget-Tracker'
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentScreen.name)}</h1>
            <p>Deployed Link: <a href='https://pure-fjord-98425.herokuapp.com/'> {currentScreen.deployedLink}</a></p>
            <p>GitHub Link: <a href='https://github.com/dosbor3/AA-Budget-Tracker'>{currentScreen.gitHubLink}</a></p>
            <div>
                <img
                src={photo}
                alt='Homescreen for Tracker App'
                className='img-thumbnail mx-1'
                />
            </div>
        </section>
    );
}

export default Portfolio;