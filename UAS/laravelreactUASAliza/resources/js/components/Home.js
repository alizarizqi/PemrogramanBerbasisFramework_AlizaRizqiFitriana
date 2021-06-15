import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import  kantor from '../../../public//kantor.jpg';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

const Home = () => {
    return(
        <div class="container-fluid">
        <div class="jumbotron jumbotron-fluid text-center bg-warning">
          <h1 styles="font-size: 200px">IT SOLUTION COMPANY</h1>
          <h2>SISTEM INFORMASI MANAJEMEN PEGAWAI</h2>
            <p>IT SOLUTION COMPANY MENJADI PERUSAHAAN IT TERBAIK KE 3 SE-INDONESIA!!!</p>
        </div>
        <h1 class="text-center">LATEST EVENT</h1>
        <div class="row justify-content-center">
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20201003132011_5f78181bc34e6.jpg' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>Tutorial Programming BackEnd Python</MDBCardTitle>
                <MDBCardText>Politeknik Negeri Jakarta
                </MDBCardText>
                <Link to="/createevent">
                <MDBBtn>Join</MDBBtn></Link>
            </MDBCardBody>
        </MDBCard>
        </div>
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='https://cdn.crello.com/downloads/d8e6c47c-db45-412e-bf7d-d4aa2bb2d956_640.jpeg' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>HTML | CSS Course</MDBCardTitle>
                <MDBCardText>Politeknik Negeri Jember
                </MDBCardText>
                <Link to="/createevent">
                <MDBBtn>Join</MDBBtn></Link>
            </MDBCardBody>
        </MDBCard>
        </div>
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='https://ecs7.tokopedia.net/img/cache/800/ANWSwT/2020/10/13/7670b42d-5ece-4b4e-80ae-01299dc0fbb0.jpg' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>Programmer GOJEK Bersuara</MDBCardTitle>
                <MDBCardText>Polteknik Bandung
                </MDBCardText>
                <Link to="/createevent">
                <MDBBtn>Join</MDBBtn></Link>
            </MDBCardBody>
        </MDBCard>
        </div>
        </div>
        <br/>
        <div class="row justify-content-center">
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='https://gate.bisaai.id/bisa_ai_vcon_v2/event/media/2020-08-17_082246_event.jpg' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>Membangun Mindset Programmer</MDBCardTitle>
                <MDBCardText>Universitas Gajahmada
                </MDBCardText>
                <Link to="/createevent">
                <MDBBtn>Join</MDBBtn></Link>
            </MDBCardBody>
        </MDBCard>
        </div>
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='https://d17ivq9b7rppb3.cloudfront.net/original/event/2017050623411780c642d337d65c10ec70b33a5c69e570.png' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>Kopdar Programmer</MDBCardTitle>
                <MDBCardText>Universitas Semarang
                </MDBCardText>
                <Link to="/createevent">
                <MDBBtn>Join</MDBBtn></Link>
            </MDBCardBody>
        </MDBCard>
        </div>
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='https://gate.bisaai.id/bisa_ai_vcon_v2/event/media/2020-07-28_222440_event.jpg' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>Tutorial Backend dengan Flask</MDBCardTitle>
                <MDBCardText>Universitas Brawijaya
                </MDBCardText>
                <Link to="/createevent">
                <MDBBtn>Join</MDBBtn></Link>
            </MDBCardBody>
        </MDBCard>
        </div>
        </div>
        </div>
    )
}

export default Home;