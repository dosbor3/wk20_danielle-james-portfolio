import React from 'react';
import gitHub from '../../assets/large/gitHub.jpg';
import linked from '../../assets/large/linked.png';

function Footer() {
    return(
        <footer className='footer'>
            <div className='footer-div'>
                <a href='https://github.com/dosbor3'><img src ={gitHub} alt='GitHub Icon' className='mx-1'/></a>
                <a href='https://www.linkedin.com/in/danielle-james-99052115b/'><img src ={linked} alt='LinkedIn Icon' className=' mx-1' /></a>
            </div>

        </footer>
    )
}

export default Footer;