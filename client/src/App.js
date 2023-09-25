import "./App.css";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import { ProductProvider } from "./context/providers/ProductsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProductForm from "./pages/products/ProductForm";

import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container App">
        <Switch>
          <ProductProvider>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/products/new" component={ProductForm}></Route>
          </ProductProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
