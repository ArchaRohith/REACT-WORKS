import React from 'react'

function Project() {

    const works=["fundkeepet","todo","skincareproducts"]
  return (
    <div>

        <h1>Projects</h1>
      <ol>
        {works.map((w,i)=><li key={i}>{w}</li>)}
      </ol>
    </div>
  )
}

export default Project
