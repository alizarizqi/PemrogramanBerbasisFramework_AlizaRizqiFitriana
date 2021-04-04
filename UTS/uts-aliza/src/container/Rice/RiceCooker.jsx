import React, { Component } from "react";
import './RiceCooker.css';
import PostRice from "../../component/Rice/PostRice";

class RiceCooker extends Component {
    state = {
        listRice: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/rice')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listRice: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleAddCart = (data) => {
        fetch(`http://localhost:3001/rice/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                var dataRice = { ...this.state.insertKeranjang };
                dataRice["id"] = res["id"];
                dataRice["nama"] = res["nama"];
                dataRice["gambar"] = res["gambar"];
                dataRice["harga"] = res["harga"];
                dataRice["stok"] = res["stok"];
                dataRice["qty"] = 1;
                this.setState({
                    insertKeranjang: dataRice
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            })
    };

    handleCekKeranjang = (data) => {
        fetch(`http://localhost:3003/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3003/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                gambar: res["gambar"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3003/keranjang', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            
            <div className="rice-cooker">
                <div className="cookerrice">
                    {
                        this.state.listRice.map(rice => {
                            return (
                                <PostRice
                                    key={rice.id}
                                    id={rice.id}
                                    gambar={rice.gambar}
                                    nama={rice.nama}
                                    harga={rice.harga}
                                    stok={rice.stok}
                                    tambahRice={this.handleAddCart} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default RiceCooker;