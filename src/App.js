import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<Landingpage/>}/>

        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
