import React from 'react'

import Header from './header'
import Nav from "./navbar"
import '../styles/_home.scss'
import '../styles/_index.scss'
import Footer from './footer'
const LayoutWithoutParticles = (props) => {

    return(
        <React.Fragment>
            <Header />
            <Nav />
            {props.children}

            <br /><br />
            <Footer />
        </React.Fragment>
    )
}

export default LayoutWithoutParticles