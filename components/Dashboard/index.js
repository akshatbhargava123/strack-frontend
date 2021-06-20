import { Spinner, useDisclosure } from '@chakra-ui/react';
import Logo from '@components/common/Logo';
import { noop } from 'lodash';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/dist/client/router';
import NodeTable from './NodeTable';
import CreatedNodeModal from './CreateNodeModal';
import axios from '@lib/axios';

function Header({ user, loading }) {
    const router = useRouter();

    useEffect(() => {
        if (!user && !loading) router.replace('/');
    }, [user]);

    return (
        <nav className="relative z-50 select-none shadow">
            <div className="flex items-center justify-between w-full h-20 px-10">
                <div><Logo /></div>
                <div className="hover:text-red-500 cursor-pointer" onClick={() => firebase.auth().signOut()}>Logout</div>
            </div>
        </nav>
    )
}

function Dashboard() {
    const { isOpen, onToggle } = useDisclosure();
    const [user, authLoading, error] = useAuthState(firebase.auth());
    const [nodes, setNodes] = useState([]);
    const [nodesLoading, setNodesLoading] = useState(true);

    useEffect(() => {
        if (user) fetchNodes();
    }, [user]);

    const fetchNodes = () => {
        setNodesLoading(true);
        return axios.get('/node').then(res => {
            const nodes = res.data.data;
            console.log(nodes);

            setTimeout(() => {
                setNodes(nodes);
                setNodesLoading(false);
            }, 1000);
        });
    };
    
    const onCreateNode = (name, nodeType, provider, location = 'unknown') => {
        return axios.post('/node', {
            name,
            type: nodeType,
            datacenter: provider,
            location,
        }).then(fetchNodes);
    };

    return (
        <div>
            <Header user={user} loading={authLoading} />
            <div className="w-full mx-auto m-10 p-2 max-w-4xl">
                <div className="flex items-start justify-end">
                    {/* <h1 className="font-semibold"></h1> */}
                    <button className="bg-red-500 hover:bg-opacity-80 text-white px-4 py-2 rounded-lg font-semibold flex items-center" onClick={onToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <p className="ml-2">Create Node</p>
                    </button>
                </div>

                <div className="">
                    {nodesLoading ? (
                        <div className="flex flex-col items-center justify-center">
                            <div className="mt-2"><Spinner color="red" /></div>
                            <p className="text-gray-500">Fetching your nodes</p>
                        </div>
                    ) : (
                        <NodeTable loading={nodesLoading} nodes={nodes} openCreateNodeModal={onToggle} />
                    )}
                </div>
            </div>


            <CreatedNodeModal isOpen={isOpen} onClose={onToggle} onCreateNode={onCreateNode} />
        </div>
    )
}

export default Dashboard;
