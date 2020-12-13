import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>You are on Home Page go to <Link to="/error">Error Page</Link></h1>
    </div>
  )
}
