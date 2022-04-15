import React from 'react'
import '../nav/nav.css'

function Nav() {
    return (
        <div className="navber">
            <div className="logo">Logo</div>
            <input className="form-control mb-3" type="search" name="search" id="search" placeholder="search here" />
        </div>
    )
}

export default Nav
