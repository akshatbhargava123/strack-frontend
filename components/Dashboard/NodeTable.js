import { Tooltip } from '@chakra-ui/react';
import { CloudProviders } from "@constants/cloud-providers";
import { NodeTypes } from "@constants/node-types";

function NodeTable({ nodes }) {
    return (
        <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Node Name</th>
                        <th className="py-3 px-6 text-left">Type</th>
                        <th className="py-3 px-6 text-center">Data center</th>
                        <th className="py-3 px-6 text-center">Status</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {nodes.map(node => (
                        <tr key={node._id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <span className="font-medium">{node.name}</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <img className="w-6 h-6 rounded-full" src={NodeTypes[node.type].imageSrc} />
                                    </div>
                                    <span>{NodeTypes[node.type].name}</span>
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex justify-center">
                                    <img width={60} height={60} src={CloudProviders[node.datacenter].imageSrc} />
                                </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                                <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                            </td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex item-center justify-center space-x-4">
                                    <Tooltip hasArrow label="Monitor Node">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                    </Tooltip>
                                    <Tooltip hasArrow label="Delete Node">
                                        <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NodeTable;
