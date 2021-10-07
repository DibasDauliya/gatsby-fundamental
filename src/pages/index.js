import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hello world</h1>
      <Link to="/about">About</Link>
    </Layout>
  );
}
