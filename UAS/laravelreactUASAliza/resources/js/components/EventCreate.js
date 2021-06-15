import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class EventCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            tanggal: '',
            namaevent: '',
            tempatevent: '',
            gambar:'',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewEvent = this.handleCreateNewEvent.bind(this)
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
                Created Event successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/event');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewEvent (event) {
        event.preventDefault()
        const events = {
          tanggal: this.state.tanggal,
          namaevent: this.state.namaevent,
          tempatevent: this.state.tempatevent,
          gambar: this.state.gambar
        }
        axios.post('/api/event/store', events).then(response => { 
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
                  <div className='card-header'>Tambah Event</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewEvent}>
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
                        <label htmlFor='namaevent'>Nama Event</label>
                        <input
                          id='namaevent'
                          type='text'
                          className={`form-control ${this.hasErrorFor('namaevent') ? 'is-invalid' : ''}`}
                          name='namaevent'
                          value={this.state.namaevent}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('namaevent')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tempatevent'>Tempat Event</label>
                        <input
                          id='tempatevent'
                          type='text'
                          className={`form-control ${this.hasErrorFor('tempatevent') ? 'is-invalid' : ''}`}
                          name='tempatevent'
                          value={this.state.tempatevent}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tempatevent')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='gambar'>Bukti Swab Antigem</label>
                        <input
                          id='gambar'
                          type='text'
                          className={`form-control ${this.hasErrorFor('gambar') ? 'is-invalid' : ''}`}
                          name='gambar'
                          value={this.state.gambar}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('gambar')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/event`}
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
export default EventCreate;