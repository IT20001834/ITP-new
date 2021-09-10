import React,{ Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import StockItemHome from './hotelmanagementcomponents/StockItemHome';
import StockItemsCreate from './hotelmanagementcomponents/StockItemsCreate';
import StockItemsEdit from './hotelmanagementcomponents/StockItemsEdit';
import StockItemsDetails from './hotelmanagementcomponents/StockItemsDetails';
import StockItemNavBar from './hotelmanagementcomponents/StockItemNavBar';
import I_OrderHome from './hotelmanagementcomponents/I_OrderHome';
import I_OrderEdit from './hotelmanagementcomponents/I_OrderEdit';
import I_OrderCreate from './hotelmanagementcomponents/I_OrderCreate';
import SupplierDetails from './hotelmanagementcomponents/SupplierDetails';
import SupplierEdit from './hotelmanagementcomponents/SupplierEdit';
import SupplierCreate from './hotelmanagementcomponents/SupplierCreate';

export default class App extends Component{
  render(){
    return (
     <BrowserRouter>
     <div className="container">

       <StockItemNavBar/>

       <Route path="/" exact component={StockItemHome}></Route>

       <Route path="/addstockitems" component={StockItemsCreate}></Route>

       <Route path="/editstockitems/:id" component={StockItemsEdit}></Route>

       <Route path="/stockitem/:id" component={StockItemsDetails}></Route>

       <Route path="/inventoryorder" component={I_OrderHome}></Route>

       <Route path="/addiorders" component={I_OrderCreate}></Route>

       <Route path="/invordersedit/:id" component={I_OrderEdit}></Route>

       <Route path="/invsupplierDetails" component={SupplierDetails}></Route>

       <Route path="/supplierEdit/:id" component={SupplierEdit}></Route>

       <Route path="/addsuppliers" component={SupplierCreate}></Route>

     </div>
     </BrowserRouter>
    )
  }
}