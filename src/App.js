import { PropTypes } from 'prop-types';
import logo from './logo.svg';
import './App.css';

function Title({ name, children }) {
  return (
    <div>
      {name}
      {children}
    </div>
  );
}
Title.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title name="Learn React">
            <div>312452353425345</div>
          </Title>
        </a>
      </header>
    </div>
  );
}

export default App;
