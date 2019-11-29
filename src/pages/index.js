import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
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
        <title>Phucie and Oanh 2020</title>
      </Helmet>
      <h1>Phucie and Oanh 2020</h1>
      <h2>
        Date idea #{dateIdea ? dateIdea.number + 1 : '0'}: {dateIdea ? dateIdea.idea : 'Loading date idea...'}
      </h2>
      <p>
        {/*Beskrivning*/}
      </p>
      <br />
    </main>
  );
}

export default Index;
