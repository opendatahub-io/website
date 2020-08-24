import React from "react"
import { graphql } from 'gatsby'
import LayoutWithoutParticles from '../components/layout_without_particles'

function PreviewCheck(props) {
    let preview = props.node.frontmatter.preview;
    if (preview != null) {
      return (
        <p class="news-content">
            {preview}
        </p>
      )
    }
    else{
    return(
    <div dangerouslySetInnerHTML={{ __html: props.node.html }} />    
    )
    }
  }

const news = ({ data }) =>
<LayoutWithoutParticles>
<main role="main" class="main news">
    <div class="container main-content">
    <h1 class="page-title">NEWS</h1>
        {data.allMarkdownRemark.edges.map(({node}) =>(
            <div class="row">
                <div class="news-section col-lg-8">
                    <h3 class="news-title">{node.frontmatter.title}</h3>
                    <h5 class="news-date">{node.frontmatter.date}</h5>
                    <PreviewCheck node={node} />
                    
                </div>
                <div class="next-link">
                    <a class="btn btn-light" href={node.frontmatter.permalink}> Read <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
        ))
        }
    </div>
</main>
</LayoutWithoutParticles>
    


export const query = graphql`
query MyNewsQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {permalink: {regex: "/news/i"}}}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            preview
            permalink
          }
          html
        }
      }
    }
  }`

export default news