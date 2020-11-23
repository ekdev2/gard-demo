import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Diseases: React.FC = () => {
  const diseses = useStaticQuery(graphql`
    query DiseasesQuery {
      allDiseasesJson {
        edges {
          node {
            Id
            Name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="GARD Diseases" />
      <h1>Disease List</h1>
      <p>Below is a list of rare diseases in the GARD database:</p>
      <ul>
        {diseses.allDiseasesJson.edges.map(({ node }, index: number) => (
          <li key={index}>
            <Link to={`disease-detail/${node.Id}`}>{node.Name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Diseases
