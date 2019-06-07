import React from 'react'

function MainLayout({ content, title }) {
  return <div>
    <h1 className='main-title'>{title}</h1>
    <div>
      {content}
    </div>
  </div>
}

export default MainLayout