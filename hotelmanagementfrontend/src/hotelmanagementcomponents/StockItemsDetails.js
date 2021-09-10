import React,{ Component } from 'react';
import axios from 'axios';
import moment from 'moment';

export default class StockItemsDetails extends Component{

    constructor(props){
        super(props);

        this.state={
            stockitem:{}
        };
    }

    componentDidMount(){
        const sitemid=this.props.match.params.id;

        axios.get(`http://localhost:8951/stockitem/${sitemid}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    stockitem:res.data.stockitem
                });
                console.log(this.state.stockitem);
            }
        });
    }
  render(){

    const {stockitemId,stockitemName,stockitemQty,stockitemType,stockitemunitPrice,itemaddedDate,sisupplierId,siorderNo}=this.state.stockitem;
    return (
     
     <div style={{marginTop:'20px'}} className="container">
         <h4>{stockitemName}</h4>
         <h4>{stockitemId}</h4>
         <hr/>

         <dl className="row">
             <dt className="col-sm-3">Available Quentity</dt>
             <dd className="col-sm-9">{stockitemQty}</dd>

             <dt className="col-sm-3">Item Type</dt>
             <dd className="col-sm-9">{stockitemType}</dd>

             <dt className="col-sm-3">Unit Price </dt>
             <dd className="col-sm-9">{stockitemunitPrice}</dd>

             <dt className="col-sm-3">Item Added Date to the Stock</dt>
             <dd className="col-sm-9">{moment(`${itemaddedDate}`).format("MMM Do YY")}</dd>

             <dt className="col-sm-3">Supplier Id</dt>
             <dd className="col-sm-9">{sisupplierId}</dd>

             <dt className="col-sm-3">Order No</dt>
             <dd className="col-sm-9">{siorderNo}</dd>



         </dl>
       

     </div>
     
    )
  }
}