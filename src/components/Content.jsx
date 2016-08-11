import React from 'react';
import Productions from '../components/Productions';
import Alphabet from '../components/Alphabet';

class Content extends React.Component {
  render () {
    return (
    <div>
     <Alphabet />
     <Productions />
    </div>
    );
  }
}

export default Content;
