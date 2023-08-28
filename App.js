import './App.css';
import Header from './header';
import Articles from './articles';
import Tutorials from './tutorial';
import Subscribes from './subscribe';
import Footer from './footer'

function App() {
  return (
    <div>
      <Header/>
      <Articles/>
      <Tutorials/>
      <Subscribes/>
      <Footer/>
    </div>
  );
}

export default App;