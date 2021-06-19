import Logo from '@components/common/Logo';
import { noop } from 'lodash';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/dist/client/router';

function Header({ user, loading }) {
    const router = useRouter();

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
    const [user, authLoading, error] = useAuthState(firebase.auth());

    return (
        <div>
            <Header user={user} loading={authLoading} />
            <div className="w-full mx-auto m-10 max-w-4xl">
                <div className="flex items-start justify-end">
                    {/* <h1 className="font-semibold"></h1> */}
                    <button className="bg-red-500 hover:bg-opacity-80 text-white px-4 py-2 rounded-lg font-semibold flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <p className="ml-2">Create Node</p>
                    </button>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
