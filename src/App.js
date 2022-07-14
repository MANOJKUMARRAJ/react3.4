
import './App.css';
import Products from './products.json';
import Product from './component/Product';
import {useState} from 'react';

function App() {
  const [query, setQuery] = useState("")
  return (
    <div className="App">
      <input className='manin' placeholder="enter product title to search" onKeyDown={event => setQuery(event.target.value)} />
      <input className='manin' placeholder="enter product category to search" onKeyDown={event => setQuery(event.target.value)} />
      <Product />
      {
      Products.filter(Product=> {
        if (query === '') {
          return Product;
        } else if (Product.title.toLowerCase().includes(query.toLowerCase())) {
          return Product;
        } else if (Product.category.toLowerCase().includes(query.toLowerCase())) {
          return Product;
        }
      }).map( Product =>{
        return(
          <tr className="man" key={Product.id}>
            
            <td>{Product.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{Product.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{Product.category}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{Product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{Product.rating.rate}</td>
          </tr>
        )
      })
    }
    
     
   
     
    </div>
  );
}

export default App;
