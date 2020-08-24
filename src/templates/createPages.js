import React from "react"
import { graphql } from "gatsby"
import LayoutWithoutParticles from '../components/layout_without_particles'

const PageTemplate = ({ data }) =>( 
    <LayoutWithoutParticles>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </LayoutWithoutParticles>
)

export default PageTemplate

export const pageTemplateQuery = graphql`
query MarkdownPages($path: String!) {
    markdownRemark(frontmatter: {permalink: {eq: $path}}) {
      html
    }
  }
`
