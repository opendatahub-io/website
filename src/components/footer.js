import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


const Footer = () => {
    
    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            email_list
            repo
          }
        }
      }`)

  return(
    <div>
    <a href={data.site.siteMetadata.repo} target="_blank" title="GitLab Repo"><i className="fab fa-gitlab"></i></a>
    <a href={data.site.siteMetadata.email_list} target="_blank" title="Mailing List"><i className="far fa-envelope fa-fw"></i></a>
    </div>
)
  }


export default Footer