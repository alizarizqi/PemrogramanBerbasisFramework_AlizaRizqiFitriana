import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import PegawaiIndex from './PegawaiIndex'
import PegawaiCreate from './PegawaiCreate'
import PegawaiShow from './PegawaiShow'
import PegawaiEdit from './PegawaiEdit'

import PelatihanIndex from './PelatihanIndex'
import PelatihanCreate from './PelatihanCreate'
import PelatihanShow from './PelatihanShow'
import PelatihanEdit from './PelatihanEdit'

import EventIndex from './EventIndex'
import EventCreate from './EventCreate'
import EventShow from './EventShow'

import Home from './Home'
import About from './About'


class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                    
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    
                    <Route exact path='/pegawai' component={PegawaiIndex}/>
                    <Route exact path='/create' component={PegawaiCreate} />
                    <Route path='/pegawai/edit/:id' component={PegawaiEdit} />
                    <Route path='/pegawai/:id' component={PegawaiShow} />

                    <Route exact path='/pelatihan' component={PelatihanIndex}/>
                    <Route exact path='/createpelatihan' component={PelatihanCreate} />
                    <Route path='/pelatihan/edit/:id' component={PelatihanEdit} />
                    <Route path='/pelatihan/:id' component={PelatihanShow} />

                    <Route exact path='/event' component={EventIndex}/>
                    <Route exact path='/createevent' component={EventCreate} />
                    <Route path='/event/:id' component={EventShow} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'))