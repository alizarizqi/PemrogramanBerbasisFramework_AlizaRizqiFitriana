import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
    class PegawaiShow extends Component {
      constructor (props) {
        super(props)
        this.state = {
          pegawai: {}
        }
      }
 
      componentDidMount () {
 
        const pegawaiId = this.props.match.params.id
 
        axios.get(`/api/pegawai/${pegawaiId}`).then(response => {
          this.setState({
            pegawai: response.data
          })
        })
      }
 
      render () {
        const { pegawai } = this.state
 
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>NIP Pegawai: {pegawai.nip}</div>
                  <div className='card-body'>
                    <p>{pegawai.nama}</p>
                    <p>{pegawai.ttl}</p>
                    <p>{pegawai.alamat}</p>
                    <p>{pegawai.jk}</p>
                    <p>{pegawai.agama}</p>
                    <p>{pegawai.kewarganegaraan}</p>
                    <p>{pegawai.goldar}</p>
                    <p>{pegawai.status}</p>
                    <p>{pegawai.nohp}</p>
                    <Link
                        className='btn btn-primary'
                        to={`/pegawai`}
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
 
export default PegawaiShow;