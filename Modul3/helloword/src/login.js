import './component/HelloComponent.css'; 
import React, { Component } from 'react'; 
import './login.css'; 
export default class login extends Component {     
     render() {         
         return ( 
            <div>
                <h1>Form Login</h1>
                <div class="login">
                <form> 
                <h2>Tugas Pertemuan<br></br> Ketiga</h2> 
                    <div className="container"> 
                        <label><b>Username</b></label> 
                            <input type="text" placeholder="Masukkan Usename" name="uname" required/>                         <br></br> 
                        <label><b>Password</b></label> 
                            <input type="password" placeholder="Masukkan Password anda" name="psw" required/> 
                        <button type="submit">Login</button> 
                            <input type="checkbox" checked="checked"/> Remember me 
                    </div> 
                    <div className="container" style={{backgroundColor: '#ffffff'}}> 
                    <button type="button" className="cancelbtn">Cancel</button> 
                    </div> 
                </form> 
                </div>
            </div> 
        ) 
    } 
} 
