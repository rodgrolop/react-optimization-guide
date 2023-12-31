import { Outlet } from 'react-router-dom'
import { AppBar, Drawer, Footer } from '@components'

const GlobalLayout = () => {
    return (
        <>
            <AppBar />
            <Drawer />
            <Outlet />
            <Footer />
        </>
    )
}

export default GlobalLayout
