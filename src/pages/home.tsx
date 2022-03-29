import React from 'react';
import withHelmet from '../hocs/helmet';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="p-4">
          <h1 className="text-center">Ecommerce App</h1>
        </div>
      </>
    );
  }
}

const helmetAttributes = {
  title: 'Ecom - Home'
};

export default withHelmet(Home)(helmetAttributes);
