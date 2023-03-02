import React from 'react'
import { Link } from 'react-router-dom'
import parser from 'html-react-parser'
import { ObjNavTools } from '../../../../const/ObjMenu'

export function MyTools() {
  return (
    <div id='my-tools' className='mt-5'>
        <p className='fs-3'>Mau ngapain hari ini?</p>
        <div className="row my-5">
          {(ObjNavTools.map((v,index)=>(
              <div className="col-4" key={index}>
              <Link to={v.uri} className='d-flex flex-column align-items-start'>
                  <span className="mb-3 svg-icon svg-icon-100">
                    {parser(v.icon)}
                  </span>
                <span className="text-dark">
                  {v.name}
                </span>
              </Link>
            </div>
          )))}
        </div>
    </div>
  )
}
