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
        Date idea #26: Attend an Outdoor Concert
      </h2>
      <p>
      This one's a definite time commitment, so you might want to get to know each other over a drink or meal before going for this option. But the perks of an outdoor show, especially if you both love the band, are the good vibes. If there's space on
      </p>
      <br />
      <h2>The date is:</h2>
      <p>{dateIdea ? dateIdea : 'Loading date idea...'}</p>
    </main>
  );
}

export default Index;
