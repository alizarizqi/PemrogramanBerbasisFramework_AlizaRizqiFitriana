import React, { Component } from "react";
import './RiceCooker.css';
import PostKeranjang from "../../component/Rice/PostKeranjang";


class RiceCooker extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3003/keranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3003/keranjang', {
            method: 'post',
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
        var no = 0;
        var total = 0;
        return (
            
            <div className="rice-cooker">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <div className="cookerrice">
                    <table cellpadding="5" width="80%" class="bg-warning">
                        <tr>
                            <th align="center">No</th>
                            <th align="center">ID</th>
                            <th align="left">Name</th>
                            <th align="center">Price</th>
                            <th align="center">Qty</th>
                            <th align="center">Subtotal</th>
                        </tr>
                        {
                            this.state.listKeranjang.map(rice => {
                                no += 1;
                                total+=rice.harga*rice.qty
                                return (
                                    <PostKeranjang
                                        no={no}
                                        key={rice.id}
                                        id={rice.id}
                                        nama={rice.nama}
                                        harga={rice.harga}
                                        gambar={rice.gambar}
                                        stok={rice.stok}
                                        qty={rice.qty} />
                                )
                            })
                        }
                        <tr>
                            <td colspan="5" align="right">Total : </td>
                            <td align="center">{total}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default RiceCooker;