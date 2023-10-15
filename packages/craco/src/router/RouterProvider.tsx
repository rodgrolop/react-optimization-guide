import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthenticationLayout, ProtectedLayout, GlobalLayout } from '@layout'

import { styles } from './styles'
import type { ReactElement } from 'react'
import { useGetMe } from '@authentication'
import { MainLoader } from '@components'
import { useRecoilValue } from 'recoil'
import { userFetchStatusAtom } from '@atoms'

// Auth
import Login from '@pages/auth/login/Login'

// Public
import Home from '@pages/home/Home'
import Blog from '@pages/blog/blog/Blog'
import About from '@pages/about/About'
import SingleBlog from '@pages/blog/single-blog/SingleBlog'

// Private
import Test from '@pages/test/Test'

const router = createBrowserRouter([
    {
        path: 'auth',
        element: <AuthenticationLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                path: 'test',
                element: <Test />,
            },
        ],
    },
    {
        path: '/',
        element: <GlobalLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'blog/:blogSlug',
                element: <SingleBlog />,
            },
            {
                path: 'about-me',
                element: <About />,
            },
        ],
    },
])

const RouterProviderWrapper = (): ReactElement => {
    const { getMe } = useGetMe()
    const { loading } = useRecoilValue(userFetchStatusAtom)

    useEffect(() => {
        const token = localStorage.getItem('token')
        token && getMe()
    }, [])

    return loading ? (
        <MainLoader />
    ) : (
        <div style={styles.routerContainer}>
            <RouterProvider router={router} />
        </div>
    )
}

export default RouterProviderWrapper
