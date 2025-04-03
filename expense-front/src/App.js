import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import LoginPage from './components/LoginComponent/LoginPage';
import RegisterUser from './components/LoginComponent/RegisterUser';
import AdminMenu from './components/LoginComponent/AdminMenu';
import CustomerMenu from './components/LoginComponent/CustomerMenu';
import CategoryAddition from './components/CategoryComponent/CategoryAddition';
import CategoryList from './components/CategoryComponent/CategoryList';
import CategoryUpdate from './components/CategoryComponent/CategoryUpdate';
import CustomerAddition from './components/CustomerComponent/CustomerAddition';
import CustomerList from './components/CustomerComponent/CustomerList';
import CustomerUpdation from './components/CustomerComponent/CustomerUpdation';
import CurrentCustomer from './components/CustomerComponent/CurrentCustomer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/Register' element={<RegisterUser /> }/>
        <Route path='/AdminMenu' exact element={<AdminMenu/>}/>
        <Route path='/CustomerMenu' element={<CustomerMenu/>}/>
        <Route path='/CategoryAddition' element={<CategoryAddition/>}/>
        <Route path='/CategoryList' element={<CategoryList/>}/>
        <Route path='/CategoryUpdate/:id' element={<CategoryUpdate/>}/>
        <Route path='/CustomerAddition' element={<CustomerAddition/>}/>
        <Route path='/CustomerList' element={<CustomerList/>}/>
        <Route path="/customer-update/:id" element={<CustomerUpdation />} />
        <Route path='/current-customer' element={<CurrentCustomer/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
