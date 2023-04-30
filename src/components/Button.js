import React from 'react'
import '../index.css'

export default function button(props) {
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-lg-10"></div>
            <div className="col-lg-2">
                <div className='btn-wrap'>
                  <input type="checkbox" id="darkmode-toggle" onClick={props.toggleMode} />
                  <label htmlFor="darkmode-toggle">
                  <svg className='sun' width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><line x1="32" y1="8" x2="32" y2="16"/><line x1="32" y1="56" x2="32" y2="48"/><line x1="56" y1="32" x2="48" y2="32"/><line x1="8" y1="32" x2="16" y2="32"/><line x1="48.97" y1="15.03" x2="43.31" y2="20.69"/><line x1="15.03" y1="48.97" x2="20.69" y2="43.31"/><line x1="48.97" y1="48.97" x2="43.31" y2="43.31"/><line x1="15.03" y1="15.03" x2="20.69" y2="20.69"/><circle cx="32" cy="32" r="8"/></svg>
                  <svg className='moon' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17C10.952 18.6176 16.6829 8.75775 11 3C16.0007 3.13144 20 7.11149 20 12C20 16.9715 16.1188 21 11 21C7.77111 21 4.65938 19.4319 3 17Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  </label>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
