/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const compound = /* GraphQL */ `
  query GetPost($id: ID!) {
   listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        createdAt
        updatedAt
      }
      nextToken
    }
    getPost(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
 
  }
`;
