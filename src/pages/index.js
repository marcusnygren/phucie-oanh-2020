import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from "gatsby"
import '../styles/index.css';

import Img from "gatsby-image";

function Index() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "leafs.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  
  const [dateIdea, setDateIdea] = useState(null);
  useEffect(() => {
    async function getDateIdea() {
      const res = await fetch('/api/dateIdea');
      const newDateIdea = await res.text();
      setDateIdea(newDateIdea);
    }
    getDateIdea();
  }, []);

  return (
    <main>
      <Helmet>
        <title>Phuc and Oanh</title>
      </Helmet>
      <h1>for Phuc and Oanh</h1>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Leafs"
      />
      <h2>
        Date idea #{dateIdea ? dateIdea : '#0: Creating memories...'}
      </h2>
      <p>Refresh the site for a new idea</p>
      <br />
      <pre>from Marcus and Linnea</pre>
    </main>
  );
}

export default Index;
