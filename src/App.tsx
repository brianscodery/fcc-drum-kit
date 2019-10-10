import React from 'react';
import './App.css';
import drumInfo from './drumInfo';
import DrumPad from './drumPad';
import Display from './display';
interface AppState {
  display: string;
  playingKey: Key | null;
};
export type Key = 'q'| 'w'| 'e'| 'a'| 's'| 'd'| 'z'| 'x'| 'c';
class App extends React.Component<{}, AppState> {
  keys: Key[] = [ 'q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c' ];
  player: any;
  state: AppState = {
    display: '',
    playingKey: null
  }

  handleClick(key: Key) {
    this.setState({display: drumInfo[key].display, playingKey: key});
    setTimeout(() => {
      this.setState({display: '', playingKey: null});
    }, 0);
  }

keydownHandler = (event: any) => {
console.log(event.key);
const key: Key = event.key.toLowerCase();
if(this.keys.includes(key)){
  this.setState({ display: drumInfo[ key ].display, playingKey: key });
  setTimeout(() => {
    this.setState({ display: '', playingKey: null });
  }, 0);
}
}

  componentWillMount(){
    document.addEventListener('keydown', this.keydownHandler);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.keydownHandler);
  }

  render() {
    return (
      <div id="drum-machine">
        <Display display={this.state.display}/>
        { this.keys.map(key => {
          return (
            <DrumPad
              key={ key }
              keyName={key}
              play={this.state.playingKey === key}
              handleClick={ this.handleClick.bind(this, key) }
              keydownHandler={this.keydownHandler}
              soundInfo={drumInfo[key]}
            />
            
          )
        }) }
      </div>
    );
  }
}
export default App;
