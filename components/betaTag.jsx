import React from 'react';

class BetaTag extends React.Component {

  render() {
    if (this.props.display) {
      return (
        <div className='betaTag'>
          · BETA ·
        </div>
      );
    }
    return null;
  }
}

export default BetaTag;