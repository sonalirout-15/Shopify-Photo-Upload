import { Route, Router } from 'react-router-dom';
import './App.css';
import PhotoUpload from './Component/PhotoUpload';
import FileUpload from './Component/FileUpload';
import Footer from './Component/Footer';
import Header from './Component/Header';
import ProductStatusPage from './Component/ProductStatusPage';

function App() {
  // http://localhost:3000?id=5&name="Sejal"
  return (
    <>
      <Header />
        <Route exact path='' component={PhotoUpload}/>
        <Route path='/productstatus' component={ProductStatusPage}/>
      <Footer />
    </>
  );
}

export default App;
