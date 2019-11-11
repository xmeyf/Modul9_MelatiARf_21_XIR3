import React from 'react'
import {Link } from 'react-router-dom'

function CardProduct({product}){
    return(
        <tr>
            <th scope="row">{product.id}</th>
            <th scope="row">{product.nama}</th>
            <th scope="row">{product.harga}</th>
            <Link className="btn btn-outline-warning btn-sm" to={'/editProduct/' + product.id}>𝗘𝗱𝗶𝘁</Link>
        </tr>
    )
}

export default CardProduct
