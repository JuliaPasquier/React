import { useState } from "react";
import { Checkbox } from "./components/forms/checkbox";
import { Input } from "./components/forms/input";
import { ProductCategoryRow } from "./components/products/productCategoryRow";
import { ProductRow } from "./components/products/ProductRow";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: false, name: "Dragonfruit" },
  { category: "fruits", price: "$2", stocked: true, name: "PassionFruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: true, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState("");
  
  const visibleProduct = PRODUCTS.filter(product => {

    if(showStockedOnly && !product.stocked){
      return false
    }

    if(search && !product.name.includes(search)){
      return false 
    }

    return true
  })



  return (
    <div className="container my-3">
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}
      />
      <ProductTable products={visibleProduct} />
    </div>
  );
}

function SearchBar({
  showStockedOnly,
  onStockedOnlyChange,
  search,
  onSearchChange,
}) {
  return (
    <div>
      <div className="mb-3">
        <Input
          value={search}
          onChange={onSearchChange}
          placeholder="Rechercher..."
        />

        <Checkbox
          id="stocked"
          checked={showStockedOnly}
          onChange={onStockedOnlyChange}
          label="n'afficher que les produits en stock"
        />
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;
  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default App;

// INCREMENTER

// import {useState} from "react";

// function App() {

// const [person, setPerson] = useState({
//   firstName: 'John',
//   lastName:'Doe',
//   age: 18
// })
//   const [count, setCount] = useState(0)

// const incrementAge = () => {
//   setPerson({...person, age: person.age +1})
// }

//   return <>
//       <p>Age de {person.firstName} : {person.age}</p>
//       <button onClick={incrementAge}>gagner une année</button>

//     </>

//   }

// export default App;
