import React from 'react'

function Example4() {
  return (
    <div className='showcase container my-5'>
        <div className="d-flex gap-5">
            <figure>
                <img src="https://tasksboard.com/img/landing/iosLogo.jpg" alt="ios" />
                <figcaption>IOS</figcaption>
            </figure>
            <figure>
                <img src="https://tasksboard.com/img/landing/androidLogo.jpg" alt="androidLogo" />
                <figcaption>Android</figcaption>
            </figure>
            <figure>
                <img src="https://tasksboard.com/img/landing/calendarLogo.jpg" alt="calendarLogo" />
                <figcaption>Calendar</figcaption>
            </figure>
        </div>
        <div>
            <h3>Synchronized across all your devices</h3>
            <p>TasksBoard stays in sync with Google Tasks on Gmail, Calender and Google Taks movie.</p>
            <a href="#">Get Started</a>
        </div>
    </div>
  )
}

export default Example4