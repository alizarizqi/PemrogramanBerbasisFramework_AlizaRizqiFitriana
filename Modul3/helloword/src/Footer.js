import React from "react";
const Footer = (props) => { 

    return (
      <div>
        <h3>Halamanan Footer</h3>
        <h3>Component ini dibuat menggunakan Function bukan Class</h3>
        <li>Nilai ini ditampilkan dari props: {props.judul}</li>      
        <li>Nama saya: {props.nama}</li>
        </div>
    );
  
};
export default Footer;
