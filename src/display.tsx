import React from 'react';
import CSS from 'csstype';

interface DisplayProps {
  display: string
  }


const Display: React.SFC<DisplayProps> = (props) => {

  
  const displayStyle: CSS.Properties = {
    width: '100%',
    height: '100%',
   gridArea: '1 / span 3',
    boxSizing: 'border-box',
    color: '#a69cac',
    display: 'flex',
    borderBottom: '3px solid #a69cac11',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px',
    alignItems: 'center',
    fontFamily: 'Notable, sans-serif',
    fontSize: '2rem',

  };

  return (
    <div style={displayStyle}>
      <div>Drum Machine</div>
    <div
    id="display"
      >
     {props.display}
    </div>
    </div>
  );
}

export default Display;


