//App.js
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <p>Answer all 10 questions for a <strong>special</strong> prize</p>
      <>
        <button>Let's Play</button>
        <button>High Scores</button>
      </>
      <Footer />
    </div>
  );
}

export default App;
