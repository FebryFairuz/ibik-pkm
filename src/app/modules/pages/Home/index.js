import React from 'react'
import { HeaderUser, MyTools, TempatKasih } from './Widgets'

export function Home() {
  return (
    <div id="kt_content_container" className='max-screen bg-white'>
      <div className="widgets pb-20">
        <div className="widget-user">
          <HeaderUser />
        </div>

        <section className="px-8">
          <div className="widget-my-tools">
            <MyTools />
          </div>
        </section>

        <TempatKasih />

      </div>
    </div>
  )
}
