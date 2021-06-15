import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
    class PelatihanShow extends Component {
      constructor (props) {
        super(props)
        this.state = {
            pelatihan: {}
        }
      }
 
      componentDidMount () {
 
        const pelatihanId = this.props.match.params.id
 
        axios.get(`/api/pelatihan/${pelatihanId}`).then(response => {
          this.setState({
            pelatihan: response.data
          })
        })
      }
 
      render () {
        const { pelatihan } = this.state
 
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>Nama Pelatihan: {pelatihan.namapel}</div>
                  <div className='card-body'>
                    <p>{pelatihan.tanggal}</p>
                    <p>{pelatihan.tempatpel}</p>
                    <Link
                        className='btn btn-primary'
                        to={`/pelatihan`}
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
 
export default PelatihanShow;