import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo';

export default function IndexPage() {
  //  && - xa vane and ?? - xaina vane
  // const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo />
      <main>
        <h1>Hello world</h1>
        <Link to="/about">About</Link>
      </main>
    </>
  );
}
