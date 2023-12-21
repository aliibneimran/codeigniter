import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import About from './pages/About';
import Account from './pages/Account';
import AddListing from './pages/AddListing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Card from './pages/Card';
import Checkout from './pages/Checkout';
import Faq from './pages/Faq';
import History from './pages/History';
import Login from './pages/Login';
import Locations from './pages/Locations';
import OrderTracking from './pages/OrderTracking';
import Portfolio from './pages/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import Register from './pages/Register';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import Wishlist from './pages/Wishlist';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='*' element={<NoPage></NoPage>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/account' element={<Account></Account>}></Route>
            <Route path='/add-listing' element={<AddListing></AddListing>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/cart' element={<Card></Card>}></Route>
            <Route path='/checkout' element={<Checkout></Checkout>}></Route>
            <Route path='/faq' element={<Faq></Faq>}></Route>
            <Route path='/history' element={<History></History>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/locations' element={<Locations></Locations>}></Route>
            <Route path='/order-tracking' element={<OrderTracking></OrderTracking>}></Route>
            <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
            <Route path='/portfolio-details' element={<PortfolioDetails></PortfolioDetails>}></Route>
            <Route path='/product-details' element={<ProductDetails></ProductDetails>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/service' element={<Service></Service>}></Route>
            <Route path='/service-details' element={<ServiceDetails></ServiceDetails>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/team' element={<Team></Team>}></Route>
            <Route path='/team-details' element={<TeamDetails></TeamDetails>}></Route>
            <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>         
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
