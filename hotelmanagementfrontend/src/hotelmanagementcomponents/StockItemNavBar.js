import React,{ Component } from 'react';


export default class StockItemNavBar extends Component{
  render(){
    return (
     
     <div >
        <ul class="nav nav-tabs">
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Manage Stock Items</a>
           </li>
           
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/inventoryorder">Manage Orders</a>
           </li>

           <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/invsupplierDetails">Suppliers</a>
           </li>

        </ul>

     </div>
     
    )
  }
}