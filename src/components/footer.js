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

  return (
    <div className="container-fluid social-icons">
    <a href={data.site.siteMetadata.repo} target="_blank" data-toggle="tooltip" title="GitLab Repo"><i className="fab fa-gitlab"></i></a>
    <a href={data.site.siteMetadata.email_list} target="_blank" data-toggle="tooltip" title="Mailing List"><i className="far fa-envelope fa-fw"></i></a>
    </div>
)
  }


export default Footer