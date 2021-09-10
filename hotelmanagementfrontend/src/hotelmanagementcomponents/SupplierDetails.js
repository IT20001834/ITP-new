import React,{ Component } from 'react';
import axios from 'axios';


export default class SupplierDetails extends Component{

    constructor(props){
        super(props);

        this.state={
            invsuppliers:[]
          };
    }

    componentDidMount(){
        this.retrieveSuppliers();
    }

    retrieveSuppliers(){
     axios.get("http://localhost:8951/inssuppliers").then(res=>{
        if(res.data.success){
        this.setState({
          invsuppliers:res.data.existingInvSuppliers
        });
        console.log(this.state.invsuppliers)
      }
    });
    }

    onDeleteSuppliers = (invsuppid)=>{

    

        axios.delete(`http://localhost:8951/inssupplier/delete/${invsuppid}`).then((res)=>{
          alert("Supplier Deleted from the List Successfully");
          this.retrieveSuppliers();
        })
      }


      filterSupplier(invsuppliers,invsupplierKey){
        const invsupResult=invsuppliers.filter((invsupplier)=>
    
        invsupplier.iOrderId.toLowerCase().includes(invsupplierKey) ||
        invsupplier.iOrdersupplierId.toLowerCase().includes(invsupplierKey)
                
        )
    
        this.setState({invsuppliers : invsupResult})
      }
    
      handleSupplierSearchArea=(stk)=>{
        const supplierKey = stk.currentTarget.value;
    
        axios.get("http://localhost:8951/inssuppliers").then(res=>{
          if(res.data.success){
               this.filterSupplier(res.data.existingInvSuppliers,supplierKey)
          }
        });
    
      }
      
  render(){
    return (

      <div className="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
           <p style={{color:'Brown', fontSize:'40px', fontFamily:'cursive' }}>SUPPLIER DETAILS</p>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input 
          className="form-control"
          type="search"
          placeholder="Search"
          name="searchQuery"
          onChange={this.handleSupplierSearchArea}></input>
        </div>
      </div>
         <table className="table table-hover" style={{marginTop:'40px'}} >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Supplier ID</th> 
              <th scope="col">Supplier Name</th> 
              <th scope="col">Contact No</th> 
              <th scope="col">Address</th>
              <th scope="col">Action</th>  
            </tr>
          </thead>
          <tbody>
            {this.state.invsuppliers.map((invsuppliers,ssindex)=>(
              <tr key={ssindex}>
                <th scope="row">{ssindex+1}</th>
                <td>{invsuppliers.inv_supplierID}</td>
                <td>{invsuppliers.inv_supplierName}</td>
                <td>{invsuppliers.inv_supplierTel}</td>
                <td>{invsuppliers.inv_supplierAddress}</td>
                <td>
                  <a className="btn btn-warning" href={`/supplierEdit/${invsuppliers._id}`}>
                    <i className="fas fa-edit"></i>
                  </a> 
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=> this.onDeleteSuppliers(invsuppliers._id)}>
                    <i className="far fa-trash-alt"></i>
                  </a>

                </td>
              </tr>
            ))}
          </tbody>

             </table>
             <button className="btn btn-success"><a href="/addsuppliers" style={{textDecoration:'none',color:'white'}}>Add Supplier</a></button>
         </div>
    
    
    )
  }
}