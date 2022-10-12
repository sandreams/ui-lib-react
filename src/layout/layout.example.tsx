import React from 'react';
import Layout from './index';
import Header from './header';
import Content from './content';
import Footer from './footer';

const LayoutExample: React.FC = () => {
  return (
    <>
      <div>
        <h1>Example1</h1>
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </div>
      <div>
        <h1>Example2</h1>
      </div>
    </>
  );
};

export default LayoutExample;
