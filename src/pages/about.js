import { Link } from 'gatsby';
import * as React from 'react';
import { Seo } from '../components/seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About this site"
        description="More information about this site"
      />
      <main>
        <h1>About Page</h1>
        <Link to="/">Back to home</Link>
      </main>
    </>
  );
}
