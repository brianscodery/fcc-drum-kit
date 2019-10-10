import React from 'react';

interface DisplayProps {
  display: string
  }


const Display: React.SFC<DisplayProps> = (props) => {

  
  const displayStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid black'
  };

  return (
    <div
    id="display"
      style={ displayStyle }
    >
     {props.display}
    </div>
  );
}

export default Display;


