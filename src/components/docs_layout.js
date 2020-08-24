import React from 'react'

import Header from './header'
import Nav from "./navbar"
import DocsSidebar from './docs_sidebar'

const DocsLayout = (props) => {

    return(
        <React.Fragment>
            <Header />
            <Nav />
            <div class="docs docs-container">
            <DocsSidebar />
            {props.children}
            </div>
        </React.Fragment>

    )


}

export default DocsLayout