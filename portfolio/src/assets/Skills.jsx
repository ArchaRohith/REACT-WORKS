import React from 'react'

const skills=["backend Developer","full stack developer","frontend developer","web developer"]

function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map(s=><li>{s}</li>)}
      </ul>
    </div>
  )
}

export default Skills
