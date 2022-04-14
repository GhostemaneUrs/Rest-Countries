import React from 'react'

const index = ({children, type}) => {
  return (
    <div className={`alert ${type}`}>{children}</div>
  )
}

export default index