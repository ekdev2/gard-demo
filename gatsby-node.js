const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// exports.onCreatePage = ({ page, actions }) => {
//   const { deletePage, createPage } = actions

//   return new Promise(resolve => {
//     // if the page component is the index page component
//     if (page.componentPath === `${__dirname}/src/pages/index/index.js`) {
//       deletePage(page)

//       // create a new page but with '/' as path
//       createPage({
//         ...page,
//         path: "/",
//       })
//     }

//     resolve()
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDiseaseDetailJson {
        edges {
          node {
            Id
            Name
            Synonyms_List__c
            Disease_Description__c
            Description_URL__c
            Disease_Name_Full__c
          }
        }
      }
    }
  `)

  const diseaseTemplate = path.resolve(`./src/templates/disease.tsx`)

  result.data.allDiseaseDetailJson.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: `disease-detail/${edge.node.Id}`,
      // specify the component template of your choice
      component: slash(diseaseTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
        diseaseData: edge.node,
      },
    })
  })
}
