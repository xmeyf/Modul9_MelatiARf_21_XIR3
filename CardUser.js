import React from 'react'
import {Link } from 'react-router-dom'

function CardUser({user}){
    return(
        <tr>
            <th scope="row">{user.id}</th>
            <th scope="row">{user.nama}</th>
            <th scope="row">{user.alamat}</th>
            <Link className="btn btn-outline-warning btn-sm" to={'/editUser/' + user.id}>𝗘𝗱𝗶𝘁</Link>
        </tr>

    )
}

export default CardUser
