import React from 'react'
import BottomMenu from '../../components/BottomMenu/BottomMenu'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <header>
            </header>
            <main>
                {children}
                <BottomMenu />
            </main>
        </>
    )
}

export default Layout
