import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import 'github-markdown-css/github-markdown.css';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout current={frontmatter.name} hasSider>
      <div
        className="markdown-body markdown-container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        name
      }
    }
  }
`