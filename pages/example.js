import React from 'react';
import Map from '../src/components/Map';

class Page extends React.Component {
  // static async getInitialProps ({query}) {
  //   // query.slug
  // }
  render() {
    return (
        <div>
          <style jsx global>{`
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
          `}</style>
          {/* // this.props.url.query.slug */}
          Example goes here!
          <Map>
            Map guts
          </Map>
        </div>
    );
  }
}

export default Page;
