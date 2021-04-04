import React from "react";

const PostRice = (props) => {
    return (
        <div className="rice">
            <div className="gambar-rice"><img src={props.gambar} width="100%" height="200" alt="" /></div>
            <div className="konten-rice">
                
                <div className="isi-rice text-center">
                    {props.id}<br />
                    {props.nama}<br />
                    Rp {props.harga}<br />
                    Stock : {props.stok}
                </div>
            </div>
            <button className="btn btn-sm btn-warning" onClick={props.tambahRice.bind(this, props.id)}>Buy</button>
        </div>
      );
};

export default PostRice;
