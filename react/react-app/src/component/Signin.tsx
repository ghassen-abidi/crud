import React from 'react'
import Logo from './Logo.svg'
function signin() {

  return (
    <div>
        <h1>Signin</h1>
        <form>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Signin</button>
           <img src={Logo} alt='logo'/>
        </form>
    </div>
  )
}

export default signin