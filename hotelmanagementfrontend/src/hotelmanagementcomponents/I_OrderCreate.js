import React,{ Component } from 'react';
import axios from 'axios';
//import moment from 'moment';

export default class I_OrderCreate extends Component{

    constructor(props){
        super(props);
        this.state={
            iOrderId:"",
            iOrderedDate:"",
            iOrderRecevedDate:"",
            iOrderPrice:"",
            iOrderDescription:"",
            iOrdersupplierId:""
           
        }
    }


    handleIOrderChange=(iord)=>{
        const {name,value} = iord.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onIOrderSave=(iord)=>{
        iord.preventDefault();

        const {iOrderId,iOrderedDate,iOrderRecevedDate,iOrderPrice,iOrderDescription,iOrdersupplierId}=this.state;

        const iorderdata={
            iOrderId:iOrderId,
            iOrderedDate:iOrderedDate,
            iOrderRecevedDate:iOrderRecevedDate,
            //iOrderedDate:moment(iOrderedDate).format("MMM Do YY"),
            //iOrderRecevedDate:moment(iOrderRecevedDate).format("MMM Do YY"),
            iOrderPrice:iOrderPrice,
            iOrderDescription:iOrderDescription,
            iOrdersupplierId:iOrdersupplierId,
           
        }

        console.log(iorderdata)

        axios.post(`http://localhost:8951/iorder/save`,iorderdata).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        iOrderId:"",
                        iOrderedDate:"",
                        iOrderRecevedDate:"",
                        iOrderPrice:"",
                        iOrderDescription:"",
                        iOrdersupplierId:""
                    }
                )
            }
        })
    }

  render(){
    return (
     
     <div className="col-md-8 mt-4 mx-auto">
         <h1 className= "h3 mb-3 font-weight-normal">Insert New Order Details</h1>
         <form className="needs-validation" noValidate>
             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Order ID</label>
                 <input type="text"
                 className="form-control"
                 name="iOrderId"
                 placeholder="Enter ITEM NO here"
                 value={this.state.iOrderId}
                 onChange={this.handleIOrderChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Ordered Date</label>
                 <input type="text"
                 className="form-control"
                 name="iOrderedDate"
                 placeholder="Enter ITEM NAME here"
                 value={this.state.iOrderedDate}
                 onChange={this.handleIOrderChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Order Received Date</label>
                 <input type="text"
                 className="form-control"
                 name="iOrderRecevedDate"
                 placeholder="Enter QUANTITY here"
                 value={this.state.iOrderRecevedDate}
                 onChange={this.handleIOrderChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Order Price</label>
                 <input type="text"
                 className="form-control"
                 name="iOrderPrice"
                 placeholder="Enter ITEM TYPE here"
                 value={this.state.iOrderPrice}
                 onChange={this.handleIOrderChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Description about the order</label>
                 <input type="text"
                 className="form-control"
                 name="iOrderDescription"
                 placeholder="Enter Unit Price here"
                 value={this.state.iOrderDescription}
                 onChange={this.handleIOrderChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Supplier Id</label>
                 <input type="text"
                 className="form-control"
                 name="iOrdersupplierId"
                 placeholder="MM/DD/YYYY"
                 value={this.state.iOrdersupplierId}
                 onChange={this.handleIOrderChange}/>

             </div>

           
             <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onIOrderSave}>
                   <i className="far fa-check-square"></i>&nbsp; Add to Stock
             </button>
         </form>
       

     </div>
     
    )
  }
}