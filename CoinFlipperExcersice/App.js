import './App.css';
import CoinFlip from './CoinFlip/CoinFlip'

function App() {
  return (
    <div className="App">

      {/* For this part, create a coin flipping counter.

      The user should be able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. The app should also keep track of how many times heads and tails have shown up.

      Before building anything, think about the structure of your React app. Don’t build this application with a single component: think about how to break your app up into at least two separate components!

      Here’s some inspiration: */}

      <CoinFlip />

    </div>
  );
}

export default App;
