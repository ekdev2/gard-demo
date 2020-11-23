import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`

const PostTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.diseaseData.Name} />
      <h1>{pageContext.diseaseData.Name}</h1>

      <FieldWrapper>
        <b>Full Name: </b>
        {pageContext.diseaseData.Disease_Name_Full__c}
      </FieldWrapper>

      <FieldWrapper>
        <b>Synonyms: </b>
        {pageContext.diseaseData.Synonyms_List__c}
      </FieldWrapper>

      <FieldWrapper>
        <b>Source Url: </b>
        <a href={pageContext.diseaseData.Description_URL__c}>
          {pageContext.diseaseData.Description_URL__c}
        </a>
      </FieldWrapper>

      <p>{pageContext.diseaseData.Disease_Description__c}</p>
    </Layout>
  )
}

export default PostTemplate
