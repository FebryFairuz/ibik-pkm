import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./LayoutInit.css"

export function LayoutInitWithoutNav({ children }) {
    let navigate = useNavigate();
    return (
        <div className="page d-flex flex-row flex-column-fluid">
            <div className="wrapper d-flex flex-column flex-row-fluid p-0" id="kt_wrapper" >
                <div id="kt_menu">
                    <div className="max-screen bg-info">
                        <div className="d-flex flex-row align-items-center justify-content-start">
                            <button className="btn btn-icon" type='button' onClick={(e)=>navigate("/home")}>
                                <i className="bi bi-arrow-left text-white fs-1 fw-boldest"></i>
                            </button>
                            <p className="mb-0 text-white text-center">Back</p>
                        </div>
                    </div>
                </div>
                <div id="kt_content" className="content d-flex flex-column flex-column-fluid p-0">
                    {children}
                </div>
            </div>
        </div>
    )
}
