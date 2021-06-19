import Logo from '@components/common/Logo';
import { noop } from 'lodash';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/dist/client/router';

function Header() {
    const router = useRouter();
    const [user, loading, error] = useAuthState(firebase.auth());

    useEffect(() => {
        if (!user && !loading) router.replace('/');
    }, [user]);

    return (
        <nav className="relative z-50 select-none shadow">
            <div className="flex items-center justify-between w-full h-20 px-10">
                <div><Logo /></div>
                <div className="hover:text-red-500 cursor-pointer" onClick={firebase.auth().signOut}>Logout</div>
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
