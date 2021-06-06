import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import 'github-markdown-css/github-markdown.css';
import styled from 'styled-components';

const MarkdownContainer = styled.div`
  h1, h2 {
    border-bottom: none;
  }

  h1, h2, h3, h4, h5, h6 {
    padding-bottom: 8px;
  }
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout current={frontmatter.name} hasSider={frontmatter.hasSider}>
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
        hasSider
        name
      }
    }
  }
`