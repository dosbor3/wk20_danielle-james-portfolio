import React from 'react';
import gitHub from '../../assets/large/gitHub.jpg';
import linked from '../../assets/large/linked.png';

function Footer() {
    return(
        <footer>
            <div>
                <img src ={gitHub} alt='GitHub Icon' />
                <img src ={linked} alt='LinkedIn Icon'/>
            </div>

        </footer>
    )
}

export default Footer;