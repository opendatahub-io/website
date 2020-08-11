import React from 'react'

import Header from './header'
import Nav from "./navbar"
import '../styles/_home.scss'
import '../styles/_index.scss'
import Footer from './footer'
const LayoutWithoutParticles = (props) => {

    return(
        <React.Fragment>
            <head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
            </head>
            <Header />
            <Nav />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default LayoutWithoutParticles