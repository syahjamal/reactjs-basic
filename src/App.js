import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  //1. state
  pengurangan = () => {
    let currentValue = this.state.value
    this.setState({value: currentValue - 1})
  }

  penambahan = () => {
    let currentValue = this.state.value
    this.setState({value: currentValue + 1}) 
  }

  //2. Event Handler
  clcikMe = () => {
    alert("i'm clicked with event")
  }

  //3. Consditional Rendering
  constructor(){
    super();
    this.state = {
      value: 0,
      isLoggedin : true,
      isLoggedinTernary: true,
      
      number: [1, 2, 3, 4, 5, 6, 7, 8],
      employees: ["budi", "arif", "rita", "ari"],
      employeeProfile: [
        {
          id: 1,
          name: 'budi',
          address: 'jl peta'
        },
        {
          id: 2,
          name: 'arif',
          address: 'jl bkr'
        },
        {
          id: 3,
          name: 'rita',
          address: 'jl merdeka'
        },
        {
          id: 4,
          name: 'ari',
          address: 'jl moh.toha'
        }
      ]
    };
  }

  
  logoutMethodIF = () =>{
    this.setState({isLoggedin: false})
  }

  loginMethodIF = () => {
    this.setState({isLoggedin: true})
  }

  logoutMethodTernary = () =>{
    this.setState({isLoggedinTernary: false})
  }

  loginMethodTernary = () => {
    this.setState({isLoggedinTernary: true})
  }

  render() {
    let {value}=this.state;
    let {isLoggedin} = this.state;
    let {isLoggedinTernary} = this.state;

    const renderButton = () => {
      if(isLoggedin){
        return <button onClick={this.logoutMethodIF}>Logout</button>
      } else {
        
        return <button onClick={this.loginMethodIF}>Login</button>
      }
    }

    //from data array number
    const listNumber = this.state.number.map((newNumber, index)=>{
      return <li key={index}>{newNumber*2}</li>
    })

    //from data employee
    const listEmployee = this.state.employees.map((employee, index)=>{
      return <li key={index}>{employee}</li>
    })

    //from data employeeProfile
    const listEmployeeProfile = this.state.employeeProfile.map((employeeProf, index)=>{
      //menampilkan semua data dari object harus di bungkus oleh Fragment
      return(
        <React.Fragment>
          <li key={index}>{employeeProf.name}</li>
          <li key={index}>{employeeProf.address}</li>
        </React.Fragment>
      ) 
    })

    return (
      <div className='App'>
        <div>
          <h1>{value}</h1>
          <button
            onClick={this.pengurangan}
          >-</button>
          <button
            onClick={this.penambahan}
          >+</button>
          <button
            onClick={this.clcikMe}
          >Click me if you trust !</button>
        </div>
        <div>
          <h1>Try Conditional Rendering</h1>
          {renderButton()}
          
          {/*Ternary method */}
          {
            isLoggedinTernary ? 
            <button onClick={this.logoutMethodTernary}>Logout</button>
            :
            <button onClick={this.loginMethodTernary}>Login</button>
          }
        </div>
        <div>
          <h1>Try Looping</h1>
          {listNumber}
          <h1>Try Looping array employee</h1>
          {listEmployee}
          <h1>Try Looping array employee Profile</h1>
          {listEmployeeProfile}
        </div>
      </div>
    )
  }
}

