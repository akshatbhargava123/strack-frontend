import Logo from '@components/common/Logo';
import { noop } from 'lodash';
import { useState } from 'react';

function Header() {
    return (
        <nav className="relative z-50 select-none shadow">
            <div className="flex items-center justify-between w-full h-20 px-10">
                <div><Logo /></div>
                <div>Logout</div>
            </div>
        </nav>
    )
}

function Dashboard() {
    return (
        <div>
            <Header />
            <div className="w-full mx-auto m-10 max-w-4xl">
                <h1 className="text-red-500">Welcome to dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard;
