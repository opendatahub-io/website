import React from 'react'

import Header from './header'
import Nav from "./navbar"
import '../styles/_home.scss'
import ParticleScript from './scripts'
import Footer from './footer'
const Layout = (props) => {

    return(
        <div>
            <Header />
            
            <Nav />
            {props.children}
            <Footer />
            <ParticleScript />
            
        </div>

    )


}

export default Layout