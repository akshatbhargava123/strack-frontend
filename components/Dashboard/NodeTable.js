import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    ButtonGroup,
    Button,
    useDisclosure,
    Tooltip,
  } from "@chakra-ui/react"
import { CloudProviders } from "@constants/cloud-providers";
import { NodeTypes } from "@constants/node-types";
import { useState } from "react";

function ConfirmDeletePopover({ onDelete }) {
    const [deleting, setDeleting] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onConfirm = () => {
        setDeleting(true);
        onDelete().then(() => {
            onClose();
            setDeleting(false);
        });
    };

    return (
        <Popover
            placement="bottom"
            isOpen={isOpen}
            onClose={onClose}
        >
            <PopoverTrigger>
                <div onClick={onOpen}>
                    <Tooltip hasArrow label="Delete Node">
                        <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </Tooltip>
                </div>
            </PopoverTrigger>
            <PopoverContent outline="none" border="none" _focus={{ outline: 'none', border: 'none' }}>
                <PopoverHeader fontWeight="extrabold">Irreversible action</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <span className="text-gray-700">Are you sure you want to delete this node?</span>
                </PopoverBody>
                <PopoverFooter d="flex" justifyContent="flex-end">
                    <ButtonGroup size="sm">
                        <Button disabled={deleting} variant="outline" onClick={onClose}>No, cancel</Button>
                        <Button disabled={deleting} colorScheme="red" onClick={onConfirm}>Yes, delete</Button>
                    </ButtonGroup>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    )
}

function NodeTable({ loading, nodes, onDelete, openCreateNodeModal }) {
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
                                        <img className="w-6 h-6" src={NodeTypes[node.type].imageSrc} />
                                    </div>
                                    <span>{NodeTypes[node.type].name}</span>
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex justify-center">
                                    <img width={node.datacenter === 0 ? 60 : 100} src={CloudProviders[node.datacenter].imageSrc} />
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
                                    {/* <Tooltip hasArrow label="Delete Node">
                                        <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </Tooltip> */}
                                    <ConfirmDeletePopover onDelete={() => onDelete(node._id)} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {(!nodes.length && !loading) && (
                <div className="p-8 flex flex-col items-center justify-center">
                    <img src="/images/get-started.svg" alt="Get started" />
                    <p className="py-5 text-gray-500 text-sm">This area is as empty as Mars and was just waiting for you to deploy your node!</p>
                    <button onClick={openCreateNodeModal} className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">Deploy node</button>
                </div>
            )}
        </div>
    )
}

export default NodeTable;
