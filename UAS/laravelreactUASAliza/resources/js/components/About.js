import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './About.css';
import  kantor from '../../../public//kantor.jpg';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

class About extends Component {

render()
{
    return(
        <div class="container-fluid">
        <div class="jumbotron jumbotron-fluid text-center bg-warning">
          <h1 styles="font-size: 200px">PIMPINAN</h1>
          <h2>IT SOLUTION COMPANY</h2>
            <p>PIMPINAN IT SOLUTION COMPANY TERDIRI DARI 1 DIREKTUR DAN 3 WAKIL DIREKTUR</p>
        </div>
        <div class="row justify-content-center">
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='https://p0.piqsels.com/preview/760/89/310/adult-businessman-contemporary-corporate.jpg' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>Mark Zukerberg</MDBCardTitle>
                <MDBCardText>Direktur IT Solution Company
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
        </div>
        </div>
        <br/>
        <div class="row justify-content-center">
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='https://i.pinimg.com/474x/03/ab/0f/03ab0f29b270547bc405747b9ecde38d.jpg' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>Shantanu Narayen</MDBCardTitle>
                <MDBCardText>Wakil Direktur I IT Solution Company
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
        </div>
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='http://1.bp.blogspot.com/-jaoU62ALfLU/Vk7l39OdQKI/AAAAAAAABUs/plB0I9pp1B0/s1600/9d58c9b9-c6bd-4d24-9cf0-3939b106cb45_blog_ln_.jpg' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>Reed Hasting</MDBCardTitle>
                <MDBCardText>Wakil DIrektur II IT Solution Company
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
        </div>
        <div class="col-lg-3 col-md-3 mb-4">
        <MDBCard style={{ maxWidth: '22rem'}}>
        <MDBCardImage src='https://photos-elsoar.com/wp-content/images/Smiling-Man-24.jpg' position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>Marc Benioff</MDBCardTitle>
                <MDBCardText>Wakil Direktur III IT Solution Company
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
        </div>
        </div>
        </div>
    )
}

}

export default About;