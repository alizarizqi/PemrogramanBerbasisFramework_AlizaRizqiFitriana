import React from "react";

const PostKeranjang = (props) => {
    return (
                <tr class="table-warning">
                    <td align="center">{props.no}</td>
                    <td align="center">{props.id}</td>
                    <td>{props.nama}</td>
                    <td align="left">Rp {props.harga}</td>
                    <td align="center">{props.qty}</td>
                    <td align="left">Rp {props.harga * props.qty}</td>
                </tr>
    )
}

export default PostKeranjang;