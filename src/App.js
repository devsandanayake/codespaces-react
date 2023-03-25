import './App.css';
import Typical from 'react-typical'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="container">
          <h1>Hello I'm</h1> <h4>Devin Sandanayake.</h4>
          I'm a {'  '}
          <Typical
            loop={1}
            wrapper = 'b'
            steps={['developer💻.',
                   1000,
                    'photographer📷.',
                    1000,
                    'Guitarist🎸.',
                    1000,
                    'Singer🎙️.',
                    1000,
                    'App designer📱.',
                    1000,
             ]}
             />         
         </p>
         <p>
        
         <i className='small'>Undergraduate Full-Stack Developer based in Sri Lanka 
          </i><br/>
                  <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
