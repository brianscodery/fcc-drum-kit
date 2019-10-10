import React, { SyntheticEvent } from 'react';
import { Key } from './App';
import CSS from 'csstype';

interface DrumPadProps {
  handleClick: (key: string) => void;
  keydownHandler: (event: any) => void;
  keyName: Key;
  play: boolean;
  soundInfo: {
    clipUrl: string;
    display: string;
  }
}

class DrumPad extends React.Component<DrumPadProps, {}>  {
  player: any;

  handleClick = () => {
    this.props.handleClick(this.props.keyName);
  }


  handleKeydown = (event: any) => {
    console.log(event)
  }

  componentDidUpdate(prevProps: DrumPadProps) {
    if (this.props.play && !prevProps.play) {
      this.player.play();
    }
  }

  getPadStyle = (): CSS.Properties => {
    return {
      width: '100px',
      height: '100px',
      border: '1px solid black',
      background: `${ this.props.play ? '#161b33' : '#a69cac'  }`,
      color: '#161b33',
      borderRadius: '30%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Notable, sans-serif',
      fontSize: '2rem',
      transform: 'skew(-5grad, -5grad)'
}
  };

  render() {
    return (
      <div
        className="drum-pad"
        id={ this.props.keyName }
        onClick={ this.handleClick }
        style={ this.getPadStyle() }
      >
        <audio
          src={ this.props.soundInfo.clipUrl }
          ref={ audio => this.player = audio }
          className="clip"
          id={ this.props.keyName.toUpperCase() }
        ></audio>


        { this.props.keyName.toUpperCase() }

      </div>
    );
  }
}
export default DrumPad;


