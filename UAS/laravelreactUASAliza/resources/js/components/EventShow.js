import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
    class EventShow extends Component {
      constructor (props) {
        super(props)
        this.state = {
            event: {}
        }
      }
 
      componentDidMount () {
 
        const eventId = this.props.match.params.id
 
        axios.get(`/api/event/${eventId}`).then(response => {
          this.setState({
            event: response.data
          })
        })
      }
 
      render () {
        const { event } = this.state
 
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>Nama Event: {event.namaevent}</div>
                  <div className='card-body'>
                    <p>Tanggal : {event.tanggal}</p>
                    <p>Tempat : {event.tempatevent}</p>
                    <p>Bukti Swab Antigen :</p>
                    <img src={event.gambar} style={{maxWidth:'300px', maxHeight:'300px'}}/>
                    <br/>
                    <br/>
                    <br/>
                    <Link
                        className='btn btn-primary'
                        to={`/event`}
                        >Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
 
export default EventShow;