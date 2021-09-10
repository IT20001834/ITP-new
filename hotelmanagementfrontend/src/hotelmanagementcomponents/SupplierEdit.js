import React,{ Component } from 'react';
import axios from 'axios';


export default class SupplierEdit extends Component{


  constructor(props){
    super(props);
    this.state={
        inv_supplierID:"",
        inv_supplierName:"",
        inv_supplierTel:"",
        inv_supplierAddress:""
       
    }
}


handleSupplierChange=(supp)=>{
    const {name,value} = supp.target;

    this.setState({
        ...this.state,
        [name]:value
    })
}

onSupplierSave=(supp)=>{
    supp.preventDefault();
    const invsuppid =this.props.match.params.id;

    const {inv_supplierID,inv_supplierName,inv_supplierTel,inv_supplierAddress}=this.state;

    const suppdata={
        inv_supplierID:inv_supplierID,
        inv_supplierName:inv_supplierName,
        inv_supplierTel:inv_supplierTel,
        inv_supplierAddress:inv_supplierAddress
    }

    console.log(suppdata)

    axios.put(`http://localhost:8951/inssupplier/update/${invsuppid}`,suppdata).then((res)=>{
        if(res.data.success){
          alert(`${inv_supplierName},'s Details Updated Successfully.`)
            this.setState(
                {
                    inv_supplierID:"",
                    inv_supplierName:"",
                    inv_supplierTel:"",
                    inv_supplierAddress:""
                }
            )
        }
    })
}

  

  componentDidMount(){
    const invsuppid = this.props.match.params.id;

    axios.get(`http://localhost:8951/inssupplier/${invsuppid}`).then((res)=>{
        if(res.data.success){
            this.setState({
                inv_supplierID:res.data.invsupplier.inv_supplierID,
                inv_supplierName:res.data.invsupplier.inv_supplierName,
                inv_supplierTel:res.data.invsupplier.inv_supplierTel,
                inv_supplierAddress:res.data.invsupplier.inv_supplierAddress
              
            });
            console.log(this.state.invsupplier);
        }
    });
}


  render(){
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className= "h3 mb-3 font-weight-normal">Update Order Details</h1>
      <form className="needs-validation" noValidate>
      <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Supplier ID</label>
                 <input type="text"
                 className="form-control"
                 name="inv_supplierID"
                 placeholder="SUPPLIER ID here"
                 value={this.state.inv_supplierID}
                 onChange={this.handleSupplierChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Supplier Name</label>
                 <input type="text"
                 className="form-control"
                 name="inv_supplierName"
                 placeholder="SUPPLIER NAME here"
                 value={this.state.inv_supplierName}
                 onChange={this.handleSupplierChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Contact No</label>
                 <input type="text"
                 className="form-control"
                 name="inv_supplierTel"
                 placeholder="CONTACT No here"
                 value={this.state.inv_supplierTel}
                 onChange={this.handleSupplierChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Address</label>
                 <input type="text"
                 className="form-control"
                 name="inv_supplierAddress"
                 placeholder="ADDRESS here"
                 value={this.state.inv_supplierAddress}
                 onChange={this.handleSupplierChange}/>

             </div>

            

            
             <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSupplierSave}>
                   <i className="far fa-check-square"></i>&nbsp; Update 
             </button>  
      </form>
    

  </div>
     
    )
  }
}