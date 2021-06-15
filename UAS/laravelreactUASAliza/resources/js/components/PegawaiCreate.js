import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class PegawaiCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            nip: '',
            nama: '',
            ttl: '',
            alamat: '',
            jk: '',
            agama: '',
            kewarganegaraan: '',
            goldar: '',
            status: '',
            nohp: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewPegawai = this.handleCreateNewPegawai.bind(this)
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
                Created Pegawai successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/pegawai');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewPegawai (event) {
        event.preventDefault()
        const pegawai = {
          nip: this.state.nip,
          nama: this.state.nama,
          ttl: this.state.ttl,
          alamat: this.state.alamat,
          jk: this.state.jk,
          agama: this.state.agama,
          kewarganegaraan: this.state.kewarganegaraan,
          goldar: this.state.goldar,
          status: this.state.status,
          nohp: this.state.nohp
        }
        axios.post('/api/pegawai/store', pegawai).then(response => { 
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
                  <div className='card-header'>Tambah Pegawai</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewPegawai}>
                      <div className='form-group'>
                        <label htmlFor='nip'>NIP</label>
                        <input
                          id='nip'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nip') ? 'is-invalid' : ''}`}
                          name='nip'
                          value={this.state.nip}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nip')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='nama'>Nama</label>
                        <input
                          id='nama'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nama') ? 'is-invalid' : ''}`}
                          name='nama'
                          value={this.state.nama}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nama')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='ttl'>TTL</label>
                        <input
                          id='ttl'
                          type='date'
                          className={`form-control ${this.hasErrorFor('ttl') ? 'is-invalid' : ''}`}
                          name='ttl'
                          value={this.state.ttl}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('ttl')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='alamat'>Alamat</label>
                        <input
                          id='alamat'
                          type='text'
                          className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
                          name='alamat'
                          value={this.state.alamat}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('alamat')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='jk'>Jenis Kelamin</label>
                        <input
                          id='jk'
                          type='text'
                          className={`form-control ${this.hasErrorFor('jk') ? 'is-invalid' : ''}`}
                          name='jk'
                          value={this.state.jk}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('jk')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='agama'>Agama</label>
                        <input
                          id='agama'
                          type='text'
                          className={`form-control ${this.hasErrorFor('agama') ? 'is-invalid' : ''}`}
                          name='agama'
                          value={this.state.agama}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('agama')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='kewarganegaraan'>Kewarganegaraan</label>
                        <input
                          id='kewarganegaraan'
                          type='text'
                          className={`form-control ${this.hasErrorFor('kewarganegaraan') ? 'is-invalid' : ''}`}
                          name='kewarganegaraan'
                          value={this.state.kewarganegaraan}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('kewarganegaraan')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='goldar'>Golongan Darah</label>
                        <input
                          id='goldar'
                          type='text'
                          className={`form-control ${this.hasErrorFor('goldar') ? 'is-invalid' : ''}`}
                          name='goldar'
                          value={this.state.goldar}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('goldar')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='status'>Status</label>
                        <input
                          id='status'
                          type='text'
                          className={`form-control ${this.hasErrorFor('status') ? 'is-invalid' : ''}`}
                          name='status'
                          value={this.state.status}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('status')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='nohp'>No HP</label>
                        <input
                          id='nohp'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nohp') ? 'is-invalid' : ''}`}
                          name='nohp'
                          value={this.state.nohp}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nohp')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/pegawai`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Tambah</button>
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
export default PegawaiCreate;