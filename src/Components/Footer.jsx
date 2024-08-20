import React from 'react'

function FooterLeft() {
    return (
      <div>
        <ul className='d-flex gap-3'>
          <li>
            <a href="#">TasksBoard</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
        <small>TasksBoard is not affiliated with Google in any way.</small>
      </div>
    );
}

function FooterRight() { 
    return (
        <div>
            <ul className="d-flex gap-3">
                <li><a href="#">Company</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

function Footer() {
  return (
    <div className='footer d-flex justify-content-between'>
        <FooterLeft />
        <FooterRight />
    </div>
  )
}

export default Footer