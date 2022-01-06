// ----- IMPORT -----
import React from 'react';
import './Return.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
// ------------------


const Return = () => {
    return(
        <section className="return">
            <Link to={'/'} className="text-return">
                <FontAwesomeIcon icon={faChevronLeft} size="sm" />
                Previous page
            </Link>
        </section>
    )
}

export default Return;