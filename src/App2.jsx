// const List = (props) =>(
//     <li style={{ listStyleType: 'none', display: 'flex', alignItems: "center"}}>
//         <input type='checkbox' checked={props.checked}/>
//         <p>{props.title}</p>
//         <button style={{ marginLeft: 'auto'}}>Delete</button>
//     </li>
// );

// const taskList = [
//     {
//         id: 1,
//         text: 'title',
//         checked: true,
//     },
//     {
//         id: 2,
//         text: 'title',
//         checked: false,
//     },
//     {
//         id: 3,
//         text: 'title',
//         checked: false,
//     },
//     {
//         id: 4,
//         text: 'title',
//         checked: false,
//     },
//     {
//         id: 5,
//         text: 'title',
//         checked: false,
//     },
//     {
//         id: 6,
//         text: 'title',
//         checked: false,
//     },
//     {
//         id: 7,
//         text: 'title',
//         checked: false,
//     },

// ]

// // const taskLi = taskList.map((item) => {
// //     const li = document.createElement('li');
// //     li.innerHTML = item.text;
// //     return li;
// // )};

// function App() {
//     return (
//         <div>
//             <ul>
//                 {taskList.map(item => <List key={item.id} title={item.text} checked={item.checked}/>)}
//             </ul>
//         </div>
//     )
// }
// export default App;
// import {useState} from 'react';

// function ProductListItems({productName, stock}) {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         if (count <= stock) {
//         setCount(count + 1);
//         }
//     }

//     const decrement = () => {
//         if (count > 0) {
//             setCount(count - 1);
//         }
//     }
//     return (
//             <div>
//                 <p>{productName}</p>
//                  <h1>{count} / {stock}</h1>
//                 <button onClick={increment} disabled={count == stock}>Increment</button>
//                 <button onClick={decrement} disabled={count == 0}>Decrement</button>   
//             </div>        
//         )
// }

// const App = () => {
//     return (
//         <div>
//             <ProductListItems productName={'keyboard'} stock={10}/>
//             <ProductListItems productName={'mouse'} stock={5}/>
//         </div>
//     )
// }
// export default App;

import { useState } from "react";

const ProductList = [
    {
        id: '111222',
        productName: "Keyboard",
        stock:  10,
        prices: 2000,
    },
    {
        id: '111223',
        productName: "Mouse",
        stock:  5,
        prices: 1000,
    },
      {
        id: '111224',
        productName: "Headphone",
        stock:  5,
        prices: 1000,
    },
];

const TableRow = ({ id, productName, stock, prices, quantity, total, increment, decrement}) => {
    return (
        <tr>
            <td>{ id }</td>
            <td>{ productName }</td>
            <td>{ stock }</td>
            <td>{ prices }</td>
            <td>{ quantity }</td>
            <td>{ total }</td>
            <td>
                <button disabled={quantity === stock} onClick={() => increment(id)}>+</button>
                <button disabled={quantity === 0} onClick={() => decrement(id)}>-</button>
            </td>
        </tr>
    );
}

const App = () => {
    const [products, setProducts] = useState(ProductList.map((item) => {
        return {
            ...item,
            quantity: 0,
            total: 0,
        }
    }));
    const incrementQuantity = (id) => {
        const newProduct = products.map((products) => {
            if (id == products.id && products.stock > products.quantity) {
                products.quantity++;
                products.total = products.quantity * products.prices;
            }
            return products;
        });
        setProducts(newProduct);
    }

    const decrementQuantity = (id) => {
        const newProduct = products.map((products) => {
            if (id == products.id && products.quantity > 0) {
                products.quantity--;
                products.total = products.quantity * products.prices;                            
            }
            return products;
        });
        setProducts(newProduct);
    }
    const total = products.reduce((acc, cur) => acc + cur.total, 0);
    return (
        <div>
            <h1>Product List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <TableRow key={product.id} {...product} increment={incrementQuantity} decrement={decrementQuantity}/>)}
                </tbody>
            </table>
            {total > 0 && <p>Total: {total}</p>}
        </div>
    )
}
export default App;