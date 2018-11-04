import React from 'react'

export default props =>
  <div className="card mb-3 shadow-sm">
    <div className="card-body">
      {props.children}
    </div>
  </div>