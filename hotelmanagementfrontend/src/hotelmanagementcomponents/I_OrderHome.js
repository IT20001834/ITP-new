import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';


export default class I_OrderHome extends Component{

  constructor(props){
    super(props);

    this.state={
      iorders:[]
    };
    

  }


  componentDidMount(){
    this.retrieveIOrders();
  }


  retrieveIOrders(){
    axios.get("http://localhost:8951/iorders").then(res=>{
      if(res.data.success){
        this.setState({
          iorders:res.data.existingIOrders
        });
        console.log(this.state.iorders)
      }
    });
  }



  onDeleteIOrders = (invorderid)=>{

    

    axios.delete(`http://localhost:8951/iorder/delete/${invorderid}`).then((res)=>{
      alert("Order Deleted from the List Successfully");
      this.retrieveIOrders();
    })
  }


  filterIOrders(iorders,iorderKey){
    const iorderResult=iorders.filter((iorder)=>

         iorder.iOrderId.toLowerCase().includes(iorderKey) ||
         iorder.iOrdersupplierId.toLowerCase().includes(iorderKey)
            
    )

    this.setState({iorders : iorderResult})
  }

  handleIOrderSearchArea=(stk)=>{
    const iorderKey = stk.currentTarget.value;

    axios.get("http://localhost:8951/iorders").then(res=>{
      if(res.data.success){
           this.filterIOrders(res.data.existingIOrders,iorderKey)
      }
    });

  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
             <p style={{color:'Brown', fontSize:'40px', fontFamily:'cursive' }}>ALL ORDER DETAILS</p>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input 
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleIOrderSearchArea}></input>
          </div>
        </div>
       
        <table className="table table-hover" style={{marginTop:'40px'}} >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order ID</th>
              <th scope="col">Ordered Date</th>
              <th scope="col">Order Received Date</th>
              <th scope="col">Order Price</th>
              <th scope="col">Description about the order</th>
              <th scope="col">Supplier Id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.iorders.map((iorders,oindex)=>(
              <tr key={oindex}>
                <th scope="row">{oindex+1}</th>
                <td>{iorders.iOrderId}</td>
                <td>{moment(`${iorders.iOrderedDate}`).format("MMM Do YY")}</td>
               
                <td> {moment(`${iorders.iOrderRecevedDate}`).format("MMM Do YY")}</td>
                <td> {iorders.iOrderPrice}</td>
                <td> {iorders.iOrderDescription}</td>
                <td> 
                    <a href={'/invsupplierDetails'} style={{textDecoration:'none'}}>
                    {iorders.iOrdersupplierId}
                    </a>
                </td>
                    
                <td>
                  <a className="btn btn-warning" href={`/invordersedit/${iorders._id}`}>
                    <i className="fas fa-edit"></i>
                  </a> 
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=> this.onDeleteIOrders(iorders._id)}>
                    <i className="far fa-trash-alt"></i>
                  </a>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success"><a href="/addiorders" style={{textDecoration:'none',color:'white'}}>Add New Item</a></button>
      </div>
    )
  }
}