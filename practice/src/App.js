import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductsScreen from "./screens/ProductsScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import Contactus from "./screens/Contactus";


function App() {
  return (
    <Router>
      <Route path='/product-details/:id' component={ProductDetailsScreen} />
      <Route path='/products' component={ProductsScreen} exact />
      <Route path='/contactus' component={Contactus} exact />

      <Route path='/cart' component={CartScreen} exact />
      <Route path='/' component={HomeScreen} exact />
      <Footer />
    </Router>
  );
}

export default App;
