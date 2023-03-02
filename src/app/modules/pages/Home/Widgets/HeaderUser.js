import React from 'react'
import { Link } from 'react-router-dom'
import BGHeader from "../../../../../_metronic/_assets/media/patterns/pattern-2.png"
import Avatar from "../../../../../_metronic/_assets/media/avatars/profile.png"

export function HeaderUser() {
  return (
    <div className='bg-light-info d-flex align-items-end flex-colum bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-150px' style={{backgroundImage:'url('+BGHeader+')'}}>
        <div className="w-100 py-3 px-5" style={{backgroundColor:"rgba(0,0,0,0.444)"}}>
            <div className="d-flex justify-content-start">
                <div className="avatar me-3">
                    <img src={Avatar} alt="User Profile" width={40} />
                </div>
                <div className='d-flex flex-row align-items-center justify-content-between w-100'>
                    <div className="nav-name text-start align-middle">
                        <p className='text-white fs-3 mb-0'>
                            Hi, 
                            <span className="fw-boldest text-capitalize ms-2">Orang baik !</span>
                        </p>
                    </div>
                    <div className="nav-icon">
                        <Link to="/disukai" className="me-8">
                            <i className="fs-1 bi bi-heart-fill text-white"></i>
                        </Link>
                        <Link to="/notifications" className="me-5">
                            <i className="fs-1 bi bi-bell-fill text-white"></i>
                        </Link>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}
