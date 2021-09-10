import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';


export default class StockItemHome extends Component{

  constructor(props){
    super(props);

    this.state={
      stockitems:[]
    };

    

  }


  componentDidMount(){
    this.retrieveStockItems();
  }


  retrieveStockItems(){
    axios.get("http://localhost:8951/stockitems").then(res=>{
      if(res.data.success){
        this.setState({
          stockitems:res.data.existingStockitems
        });
        console.log(this.state.stockitems)
      }
    });
  }



  onDeleteStockItem = (sitemid)=>{

    

    axios.delete(`http://localhost:8951/stockitem/delete/${sitemid}`).then((res)=>{
      alert("Item Deleted from the Stock Successfully");
      this.retrieveStockItems();
    })
  }


  filterstockitem(stockitems,sechStockItemKey){
    const stockitemResult=stockitems.filter((stockitem)=>

         stockitem.stockitemId.toLowerCase().includes(sechStockItemKey) ||
         stockitem.stockitemName.toLowerCase().includes(sechStockItemKey) ||
         stockitem.stockitemType.toLowerCase().includes(sechStockItemKey)
            
    )

    this.setState({stockitems : stockitemResult})
  }

  handleStockItemSearchArea=(stk)=>{
    const sechStockItemKey = stk.currentTarget.value;

    axios.get("http://localhost:8951/stockitems").then(res=>{
      if(res.data.success){
           this.filterstockitem(res.data.existingStockitems,sechStockItemKey)
      }
    });

  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
             <p style={{color:'Brown', fontSize:'40px', fontFamily:'cursive' }}>ALL STOCK ITEMS</p>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input 
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleStockItemSearchArea}></input>
          </div>
        </div>
       
        <table className="table table-hover" style={{marginTop:'40px'}} >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item No</th>
              <th scope="col">Item Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Item Type</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Added Date</th>
              <th scope="col">Supplier Id</th>
              <th scope="col">Order No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stockitems.map((stockitems,sindex)=>(
              <tr key={sindex}>
                <th scope="row">{sindex+1}</th>
                <td>{stockitems.stockitemId}</td>
                <td>
                    <a href={`/stockitem/${stockitems._id}`} style={{textDecoration:'none'}}>
                    {stockitems.stockitemName}
                    </a>
                </td>
                <td>{stockitems.stockitemQty}</td>
                <td>{stockitems.stockitemType}</td>
                <td>{stockitems.stockitemunitPrice}</td>
                <td>{moment(`${stockitems.itemaddedDate}`).format("MMM Do YY")}</td>
                <td>{stockitems.sisupplierId}</td>
                <td>{stockitems.siorderNo}</td>

                <td>
                  <a className="btn btn-warning" href={`/editstockitems/${stockitems._id}`}>
                    <i className="fas fa-edit"></i>
                  </a> 
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=> this.onDeleteStockItem(stockitems._id)}>
                    <i className="far fa-trash-alt"></i>
                  </a>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success"><a href="/addstockitems" style={{textDecoration:'none',color:'white'}}>Add New Item</a></button>
      </div>
    )
  }
}