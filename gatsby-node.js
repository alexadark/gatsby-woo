const createProducts = require(`./create/createProducts`)

exports.createPages = async ({ actions, graphql }) => {
  await createProducts({ actions, graphql })
}
