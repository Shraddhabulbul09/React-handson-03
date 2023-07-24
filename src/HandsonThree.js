import {Component} from "react";
import HandsonThreeChild from "./HandsonThreeChild";

class HandsonThree extends Component{
   
   state={
    name:"",
    department:"",
    ratings:"",
    clicked:true,
    data:[]
   }


handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    }

Togglefunction = () => {
    this.setState({click:!this.state.click})
}


handleClick=()=>{
    const obj={
        name:this.state.name,
        department:this.state.department,
        ratings:this.state.ratings
    }
    this.state.data.push(obj);
    this.setState({data:this.state.data,click:false,name:"", department:"",ratings:""})
    console.log(this.state.data);
}


render(){
    return(
        <>
        {this.state.click?
        
            
        <>
        <h1>EMPOLYEE FEEDBACK FORM</h1>
     <p className="text1"><strong>Name:</strong></p>
      <p  className="text2"><strong>Department:</strong></p>
      <p  className="text3"><strong>Ratings:</strong></p>
   
  <div className="boxes2">

       <input className="boxes"  type="text" name="name" onChange={this.handleChange} value={this.state.name}/>

       <input className="boxes" type="text" name="department" onChange={this.handleChange}  value={this.state.department}/>
      
       <input className="boxes" type="number" name="ratings" onChange={this.handleChange}  value={this.state.ratings}/>
       
  </div>

  <button className="submit-btn" onClick={this.handleClick}>Submit</button>
</>
:

<HandsonThreeChild value={this.state.data} tf ={this.Togglefunction}/> 
 }
         </>
  )
}

}


export default HandsonThree