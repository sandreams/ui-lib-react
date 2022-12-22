import React from 'react';
import Layout from './index';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

const LayoutExample: React.FC = () => {
  return (
    <>
      <div>
        <h1>Example1</h1>
        <Layout style={{ width: '1000px', height: '500px' }} className="aaa">
          <Header />
          <Content />
          <Footer />
        </Layout>
      </div>
      <div>
        <h1>Example2</h1>
        <Layout style={{ width: '1000px', height: '500px' }}>
          <Header>Header</Header>
          <Layout>
            <Aside>Aside</Aside>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Example3</h1>
        <Layout style={{ width: '1000px', height: '500px' }}>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Aside>Aside</Aside>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Example4</h1>
        <Layout style={{ width: '1000px', height: '500px' }}>
          <Aside>Aside</Aside>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default LayoutExample;
