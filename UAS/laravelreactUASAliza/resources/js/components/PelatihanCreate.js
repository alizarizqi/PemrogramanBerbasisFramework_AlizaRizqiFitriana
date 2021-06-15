import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class PelatihanCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            tanggal: '',
            namapel: '',
            tempatpel: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewPelatihan = this.handleCreateNewPelatihan.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Created pelatihan successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/pelatihan');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewPelatihan (event) {
        event.preventDefault()
        const pelatihan = {
          tanggal: this.state.tanggal,
          namapel: this.state.namapel,
          tempatpel: this.state.tempatpel
        }
        axios.post('/api/pelatihan/store', pelatihan).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Tambah Pelatihan</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewPelatihan}>
                      <div className='form-group'>
                        <label htmlFor='tanggal'>Tanggal</label>
                        <input
                          id='tanggal'
                          type='date'
                          className={`form-control ${this.hasErrorFor('tanggal') ? 'is-invalid' : ''}`}
                          name='tanggal'
                          value={this.state.tanggal}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tanggal')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='namapel'>Nama Pelatihan</label>
                        <input
                          id='namapel'
                          type='text'
                          className={`form-control ${this.hasErrorFor('namapel') ? 'is-invalid' : ''}`}
                          name='namapel'
                          value={this.state.namapel}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('namapel')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tempatpel'>Tempat Pelatihan</label>
                        <input
                          id='tempatpel'
                          type='text'
                          className={`form-control ${this.hasErrorFor('tempatpel') ? 'is-invalid' : ''}`}
                          name='tempatpel'
                          value={this.state.tempatpel}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tempatpel')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/pelatihan`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default PelatihanCreate;