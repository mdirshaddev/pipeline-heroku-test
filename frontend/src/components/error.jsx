import React from 'react'
import {Link} from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h1>This is an error page <Link to="/">Home Page</Link></h1>
    </div>
  )
}
