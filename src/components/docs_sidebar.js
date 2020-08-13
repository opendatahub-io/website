import React from "react"
import { graphql } from 'gatsby'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { StaticQuery } from "gatsby"
import '../styles/_docs.scss'
import '../styles/codestyle.css'

export default function DocsSidebar() {
  return (
    <StaticQuery
      query={graphql`
      query MySideBarQuery {
        allDataYaml(filter: {toc: {elemMatch: {title: {ne: "null"}, children: {elemMatch: {children: {elemMatch: {title: {ne: "null"}}}, title: {ne: "null"}}}}}}) {
          nodes {
            toc {
              title
              url
              children {
                title
                url
                children {
                  title
                  url
                }
              }
            }
          }
        }
        allMarkdownRemark(filter: {frontmatter: {permalink: {regex: "/docs/i"}}}) {
          nodes {
            frontmatter {
              permalink
              title
            }
            html
          }
        }
      }
    `}

      render={data => (
      <Router>  
      <nav className="sidebar"> 
         {data.allDataYaml.nodes.map(({toc}) =>(
            <div>
                {toc.map(({title,url,children}) =>(
                    <div>
                        <h4 className="arch-nav-item">
                        <Link
                            to={url}>{title} 
                        </Link>  
                        </h4>
                        {children? children.map(({title,url,children}) =>(
                            <div>
                            <h5 className="arch-nav-sub-item">
                            <Link
                            to={url}>{title} 
                            </Link>
                            </h5>
                            <CheckChildren children={children}></CheckChildren>
                            </div>
                                 
                    )): null   
                }                      
                    </div>
                        
                    ))
                }
            <br />                                    
            </div>
        ))
        }
      </nav>  
      
      <main role="main" className="main-content">
      <br /><br /><br />
        <Switch>  
        <Route exact path="/:folder" component={(props) => <YAMLRootPage {...props} markdown={data.allMarkdownRemark} />} />
        
        <Route exact path="/:folder/:subfolder" component={(props) => <YAMLChildPage {...props} markdown={data.allMarkdownRemark} />} /> 
        
        <Route exact path="/:folder/:subfolder/:file" component={(props) => <YAMLSubChildPage {...props} markdown={data.allMarkdownRemark} />} />

        <Route exact path="/:folder/:subfolder/:file/:id" component={(props) => <YAMLSubChildItem {...props} markdown={data.allMarkdownRemark} />} />
        </Switch>
        {/* <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.nodes.html }} /> */}
      </main>
      </Router>
      )}
    />
  )
}

function YAMLRootPage(props) {
    
      let match = '/' + props.match.params.folder

    return (
      <div class="docs-article">
            {props.markdown.nodes.map(({frontmatter,html}) => {
              if (frontmatter.permalink === match) {
                return (
                <div>
                <h1>{frontmatter.title}</h1>  
                <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                );
              }
            })}
      </div>
    )
  }

  function YAMLChildPage(props) {
    
    let match = '/' + props.match.params.folder + '/' +  props.match.params.subfolder
  
  return (
    <div class="docs-article">
          {props.markdown.nodes.map(({frontmatter,html}) => {
            if (frontmatter.permalink === match) {
              return (
              <div>
              <h1>{frontmatter.title}</h1>  
              <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
              );
            }
          })}
    </div>
  )
}

function YAMLSubChildPage(props) {
    
  let match = '/' + props.match.params.folder + '/' +  props.match.params.subfolder + '/' + props.match.params.file

return (
  <div class="docs-article">
        {props.markdown.nodes.map(({frontmatter,html}) => {
          if (frontmatter.permalink === match) {
            return (
            <div>
            <h1>{frontmatter.title}</h1>  
            <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            );
          }
        })}
  </div>
)
}

function YAMLSubChildItem(props) {
    
  let match = '/' + props.match.params.folder + '/' +  props.match.params.subfolder + '/' + props.match.params.file + '/' + props.match.params.id

return (
  <div class="docs-article">
        {props.markdown.nodes.map(({frontmatter,html}) => {
          if (frontmatter.permalink === match) {
            return (
            <div>
            <h1>{frontmatter.title}</h1>  
            <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            );
          }
        })}
  </div>
)
}

  function CheckChildren(props) {
    let child = props.children;
    if (child != null) {
      return (
        child.map(({title,url}) =>(
          <h6 className="docs-nav-sub3-item">
          <Link to={url}>{title}</Link>  
          </h6>
                    
    ))
      )
    }
    else{
    return(
        <p></p>
    )
    }
  }
