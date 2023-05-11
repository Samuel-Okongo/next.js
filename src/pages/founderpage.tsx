import React from 'react';

const pageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fafafa',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  minHeight: '100vh',
};

const headerStyle = {
  backgroundColor: '#0070f3',
  width: '100%',
  padding: '20px 0',
  color: 'white',
  fontSize: '1.5em',
  textAlign: 'center',
  fontWeight: 'bold',
  position: 'sticky',
  top: '0',
  zIndex: '10',
};

const founderCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '5px',
  margin: '20px',
  padding: '20px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
  maxWidth: '800px',
  width: '90%',
};

const founderNameStyle = {
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: '#0070f3',
};

const founderDescriptionStyle = {
  marginTop: '10px',
  fontSize: '1.2em',
  textAlign: 'center',
};

const footerStyle = {
  backgroundColor: '#0070f3',
  width: '100%',
  padding: '20px 0',
  color: 'white',
  fontSize: '1em',
  textAlign: 'center',
  fontWeight: 'bold',
  position: 'sticky',
  bottom: '0',
};

const FounderPage = () => {
  const founders = [
    {
      name: 'Samuel Okongo',
      description:
        'Samuel is a software engineer with a passion for AI and education. He believes that every teacher should have access to the latest AI tools to make their job easier and more effective.',
    },
    {
      name: 'Devendra Pitam',
      description:
        'Devendra is an enthusiastic and talented web developer who is thrilled to be working on a project that will help teachers incorporate AI in their classrooms. With his dedication and expertise, the resulting product is sure to be of exceptional quality and value.',
    },
    {
      name: 'Christopher Rameirez',
      description:
        'Christopher is a full-stack developer who has always been fascinated by AI. He believes that AI has the potential to revolutionize teaching and learning.',
    },
  ];

  return (
    <div style={pageContainerStyle}>
      <header style={headerStyle}>Our Founders</header>
      {founders.map((founder, index) => (
        <div key={index} style={founderCardStyle}>
          <div style={founderNameStyle}>{founder.name}</div>
          <div style={founderDescriptionStyle}>{founder.description}</div>
        </div>
      ))}
      <footer style={footerStyle}>© 2023 AI For Teachers. All rights reserved.</footer>
    </div>
  );
};

export default FounderPage;
