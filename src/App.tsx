import React from 'react';
import './App.css';
import CSS from 'csstype';

import drumInfo from './drumInfo';
import DrumPad from './drumPad';
import Display from './display';
interface AppState {
  display: string;
  playingKey: Key | null;
};
export type Key = 'q' | 'w' | 'e' | 'a' | 's' | 'd' | 'z' | 'x' | 'c';
class App extends React.Component<{}, AppState> {
  keys: Key[] = [ 'q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c' ];
  player: any;
  state: AppState = {
    display: '',
    playingKey: null
  }

  handleClick(key: Key) {
    this.setState({ display: drumInfo[ key ].display, playingKey: key });
    setTimeout(() => {
      this.setState({ display: '', playingKey: null });
    }, 100);
  }

  keydownHandler = (event: any) => {
    console.log(event.key);
    const key: Key = event.key.toLowerCase();
    if (this.keys.includes(key)) {
      this.setState({ display: drumInfo[ key ].display, playingKey: key });
      setTimeout(() => {
        this.setState({ display: '', playingKey: null });
      }, 100);
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.keydownHandler);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownHandler);
  }

  drumMachineStyle: CSS.Properties = {
    background: '#474973',
    width: '700px',
    height: '500px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    border: '3px solid #a69cac11',
    boxSizing: 'border-box',

  }
  wrapperStyle: CSS.Properties = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#565656',
   
  }


  render() {
    return (
      <div style={ this.wrapperStyle }>

        <div id="drum-machine" style={ this.drumMachineStyle }>
          <Display display={ this.state.display } />

          { this.keys.map(key => {
            return (
              <DrumPad
                key={ key }
                keyName={ key }
                play={ this.state.playingKey === key }
                handleClick={ this.handleClick.bind(this, key) }
                keydownHandler={ this.keydownHandler }
                soundInfo={ drumInfo[ key ] }
              />

            )
          }) }
        </div>
      </div>
    );
  }
}
export default App;
