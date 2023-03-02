import React from 'react'
import "./LayoutInit.css"
import AsideMenu from './components/Aside/AsideMenu'

export function LayoutInit({ children }) {
    return (
        <div className="page d-flex flex-row flex-column-fluid">
            <div className="wrapper d-flex flex-column flex-row-fluid p-0" id="kt_wrapper" >
                <div id="kt_content" className="content d-flex flex-column flex-column-fluid p-0">
                    {children}
                </div>

                <div id="kt_menu" className="d-flex flex-column fixed-bottom">
                    <div className="text-center bg-white border-top py-5 max-screen">
                        <AsideMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}
