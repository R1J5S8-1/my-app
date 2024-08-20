import React from 'react'

function Body() {
  return (
    <div className='container-fluid d-flex flex-column align-items-center main-body my-5'>
        <img src="https://tasksboard.com/img/logo.png" alt="tasksboard logo" />
        <h2>TasksBoard</h2>
        <p>A desktop app for Google Tasks</p>
        <br /><br />
        <button className='btn btn-outline-primary'>sign in with Google</button>  
    </div>
  )
}

export default Body