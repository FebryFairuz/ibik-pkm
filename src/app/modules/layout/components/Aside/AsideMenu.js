import React from 'react'
import { NavLink } from 'react-router-dom'
import parser from 'html-react-parser'
import ObjMenu from '../../../../const/ObjMenu'

export default function AsideMenu() {

    return (
        <div id='navigations' className='px-10 px-lg-20'>
            <div className="d-flex justify-content-between">
                {ObjMenu.map((v) => (
                    <NavLink  to={v.uri} key={v.id} activeclassname="active" >
                        <span className="svg-icon svg-icon-1">
                            {parser(v.icon)}
                        </span>
                    </NavLink >
                ))}                
            </div>

        </div>
    )
}
