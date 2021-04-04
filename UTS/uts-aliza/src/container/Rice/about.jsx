import react from 'react';
import './about.css';
import { faIdCard, faEnvelope, faPhone, faMapMarkedAlt, faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import background from '../../bg2.JPG';

const About = () => {
return(
    <div class="jumbotron1 jumbotron-fluid text-left" style={{ backgroundImage: `url(${background})`}}>
          <div class="icon1">
          <FontAwesomeIcon icon={faIdCard}/>
          </div>
          <h1>Hello! I'm</h1>
          <h2>Aliza Rizqi Fitriana</h2>
            <h3>Student from Polytechnic of Malang</h3>
            <p>I made this website to fulfill the midterm <br/>exam assignments for a framework-based <br/> programming course with the theme of <br/>the online rice cooker shop</p>

            <div className="biodata text-right" >
                    <table cellpadding="5" width="100%">
                        <tr>
                            <td colspan="5" align="right"><FontAwesomeIcon icon={faCalendarAlt}/></td>
                            <td align="left">January 6th, 2001</td>
                            
                        </tr>
                        <tr>
                            <td colspan="5" align="right"><FontAwesomeIcon icon={faEnvelope}/></td>
                            <td align="left">rizqializa@gmail.com</td>
                            
                        </tr>
                        <tr>
                        <td colspan="5" align="right"><FontAwesomeIcon icon={faPhone}/></td>
                            <td align="left">089508682198</td>
                            </tr>
                            <tr>
                            <td colspan="5" align="right"><FontAwesomeIcon icon={faMapMarkedAlt}/></td>
                            <td align="left">Rawisari Street, Sukun, Malang City</td>
                            </tr>
                    </table>
                </div>
                <h4>Information Technology - TI-3F</h4>
                <div class="tambahan"><br/><br/><br/><br/><br/><br/></div>
    </div>

    
  
  );

  
}

export default About;