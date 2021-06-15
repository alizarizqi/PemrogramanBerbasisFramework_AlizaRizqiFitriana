import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div id="container">
        <div id="part1">
            <div id="companyinfo"> <a id="sitelink" href="#">IT SOLUTION COMPANY</a>
                <p id="title">Cool and Perfect IT Company</p>
                <p id="detail">Kami melayani berbagai permasalahan di dunia IT dan 1000% terpercaya </p>
            </div>
            <div id="explore">
                <p id="txt1">Explore</p> 
                <Link class="link" to="/home">Home</Link> 
                <Link class="link" to="/pegawai">Data Pegawai</Link> 
                <Link class="link" to="/pelatihan">Data Pelatihan</Link> 
                <Link class="link" to="/about">Tentang Kami</Link>
            </div>
            <div id="visit">
                <p id="txt2">Visit</p>
                <p class="text">IT Solution Company </p>
                <p class="text">Jl. Kita Bersama </p>
                <p class="text">Jawa Timur 12345 </p>
                <p class="text">Phone: (0341) 2363-3611 </p>
                <p class="text">Fax: (22) 2363-0350 </p>
            </div>
            <div id="legal">
                <p id="txt3">Legal</p> <a class="link1" href="#">Terms and Conditions</a> <a class="link1" href="#">Private Policy</a>
            </div>
            <div id="subscribe">
                <p id="txt4">Subscribe to US</p>
                <p id="txt5">Connect With US</p> <i class="fab fa-facebook-square social fa-2x"></i> <i class="fab fa-linkedin social fa-2x"></i> <i class="fab fa-twitter-square social fa-2x"></i>
            </div>
        </div>
        <div id="part2">
            <p id="txt6"><i class="material-icons tiny"></i>copyright 2021 IT SOLUTION COMPANY - All right reserved</p>
        </div>
    </div>
    )
}

export default Footer;
