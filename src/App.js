import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import DataContextProvider from './context/dataContext';

// import Submit__button from './components/Submit--button';

function App() {

  return (  
    <>
      <DataContextProvider>
      
        <Navbar/>

        <Main/>
        
      </DataContextProvider>
      {/* <Submit__button/> */}
    </>
  );
}


export default App;
