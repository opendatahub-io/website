import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import '../styles/_index.scss'

const Footer = () => {
    
    const data = useStaticQuery(graphql`
    query MyFooter {
        site {
          siteMetadata {
            email_list
            repo
          }
        }
      }`)

  return(
    <footer class="footer">
    <div class="container-fluid social-icons">
    <a href={data.site.siteMetadata.repo} target="_blank" title="GitLab Repo"><i className="fab fa-gitlab"></i></a>
    <a href={data.site.siteMetadata.email_list} target="_blank" title="Mailing List"><i className="far fa-envelope fa-fw"></i></a>
    </div>
    </footer>
)
  }


export default Footer