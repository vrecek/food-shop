import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MAIN_PAGE from './components/Main Page/MAIN_PAGE';
import PRODUCT_PAGE from './components/Product Page/PRODUCT_PAGE';
import SEARCH_PAGE from './components/Search Page/SEARCH_PAGE';
import './css/index.css'
import { ProductType } from './interfaces/OtherInterfaces';
import Products from './data/Products';
import BasketContext from './data/BasketFunc';
import FINALIZE_ORDER from './components/Finalize Page/FINALIZE_ORDER';
import Arrow from './components/REUSABLE/Arrow';
import TERMS_AND_COND from './components/Misc Pages/Terms and Conditions/TERMS_AND_COND';
import CONTACT_PAGE from './components/Misc Pages/Contact/CONTACT_PAGE';

const ProductContext = React.createContext<ProductType[]>(Products)

function App() {
  const [basket, setBasket] = React.useState<ProductType[]>([])

  return (
    <div className="App">
      
      {/* <Router> */}

        <ProductContext.Provider value={ Products }>
        <BasketContext.Provider value={{ basket, setBasket }}>

          <Routes>        

            <Route path='/' element={ <MAIN_PAGE /> } />
            <Route path='/product/:id' element={ <PRODUCT_PAGE /> } />
            <Route path='/search'>
              <Route path=':query' element={ <SEARCH_PAGE /> } />
              <Route path='' element={ <SEARCH_PAGE /> } />
            </Route>
            <Route path='/finalize-order' element={ <FINALIZE_ORDER /> } />
            <Route path='/terms-and-conditions' element={ <TERMS_AND_COND /> } />
            <Route path='/contact' element={ <CONTACT_PAGE /> } />

          </Routes>

          <Arrow />

        </BasketContext.Provider>
        </ProductContext.Provider>

      {/* </Router> */}

    </div>
  )
}

export { ProductContext }
export default App;
