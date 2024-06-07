import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const Layout = () => {
  const [menuOpened, setMenuOpened] = React.useState(false)
  return (
    <div className='flex flex-auto'>
      <Header
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <main
        className='min-h-screen w-full ml-10 lg:ml-0'
        onClick={() => setMenuOpened(false)}
      >
        <Outlet />
      </main>
    </div>
  )
}

export default Layout