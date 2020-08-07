import React from 'react'

import Header from './header'
import Nav from "./navbar"
import '../styles/_home.scss'

const Layout = (props) => {

    return(
        <div>
        <head>   
        </head>
            <Header />
            <Nav />
            {props.children}
        </div>

    )


}

export default Layout