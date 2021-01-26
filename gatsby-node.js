const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const debug = require(`debug`);
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { urlResolve, createContentDigest, slash } = require(`gatsby-core-utils`);
const { info } = require("console");

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, `content/posts`),
    path.join(program.directory, `content/assets`),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

const mdxResolverPassthrough = (fieldName) => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({ id: source.parent });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, { fieldName });
  return result;
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  createTypes(`interface BlogPost @nodeInterface {
    id: ID!
    title: String!
    body: String!
    slug: String!
    date: Date! @dateformat
    tags: [String]!
    excerpt: String!
    image: File
    imageAlt: String
    socialImage: File
  }`);

  createTypes(
    schema.buildObjectType({
      name: `MdxBlogPost`,
      fields: {
        id: { type: `ID!` },
        title: { type: `String!` },
        slug: { type: `String!` },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        tags: { type: `[String]!` },
        excerpt: {
          type: `String!`,
          args: { pruneLength: { type: `Int`, defaultValue: 140 } },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        image: {
          type: `File`,
          resolve: async (source, args, context, info) => {
            if (source.image__NODE) {
              return context.nodeModel.getNodeById({ id: source.image__NODE });
            } else if (source.image) {
              return processRelativeImage(source, context, `image`);
            }
          },
        },
        imageAlt: { type: `String` },
        socialImage: {
          type: `File`,
          resolve: async (source, args, context, info) => {
            if (source.socialImage__NODE) {
              return context.nodeModel.getNodeById({ id: source.socialImage__NODE });
            } else if (source.socialImage) {
              return processRelativeImage(source, context, `socialImage`);
            }
          },
        },
        body: { type: `String!`, resolve: mdxResolverPassthrough(`body`) },
      },
      interfaces: [`Node`, `BlogPost`],
      extensions: { infer: false },
    })
  );
};

function processRelativeImage(source, context, type) {
  const mdxFileNode = context.nodeModel.findRootNodeAncestor(
    source,
    (node) => node.internal && node.internal.type === `File`
  );
  if (!mdxFileNode) {
    return;
  }
  const imagePath = slash(path.join(mdxFileNode.dir, source[type]));
  const fileNodes = context.nodeModel.getAllNodes({ type: `File` });
  for (const file of fileNodes) {
    if (file.absolutePath === imagePath) {
      return file;
    }
  }
}
