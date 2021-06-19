import {
    Modal,
    ModalCloseButton,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Input,
    Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CloudProviders } from '@constants/cloud-providers';
import { NodeTypes } from '@constants/node-types';

function PlatformSelector({ selected, setProvider }) {
    return (
        <div className="flex flex-wrap space-x-2">
            {CloudProviders.map(provider => (
                <div
                    key={provider.id}
                    className={`relative p-2 transition-all duration-200 shadow-lg cursor-pointer rounded ${selected === provider.id ? 'ring-2 ring-red-300 bg-red-50' : 'ring-1 ring-gray-200 opacity-80'}`}
                    onClick={() => setProvider(provider.id)}
                >
                    <img width={180} height={180} src={provider.imageSrc} alt="aws" />
                    {selected === provider.id && (
                        <div className="absolute top-2 right-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

function NodeSelector({ selected, setNodeType }) {
    return (
        <div className="flex flex-wrap space-x-2">
            {NodeTypes.map(nodeType => (
                <div
                    key={nodeType.id}
                    className={`p-2 relative transition-all duration-200 shadow-lg cursor-pointer rounded ${selected === nodeType.id ? 'ring-2 ring-red-300 bg-red-50' : 'ring-1 ring-gray-200 opacity-60'}`}
                    onClick={() => setNodeType(nodeType.id)}
                >
                    <img width={180} height={180} src={nodeType.imageSrc} alt="aws" />
                    <p className="mt-3 text-center font-semibold">{nodeType.name}</p>
                    {selected === nodeType.id && (
                        <div className="absolute top-2 right-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

function ProviderLocationSelector() {
    return (
        <div>

        </div>
    )
}

const Steps = {
    NODE_NAME: {
        label: 'node-name',
        next: 'NODE_TYPE',
        prev: null,
    },
    NODE_TYPE: {
        label: 'node-type',
        next: 'PROVIDER_SELECTION',
        prev: 'NODE_NAME',
    },
    PROVIDER_SELECTION: {
        label: 'provider-selection',
        next: null,
        prev: 'NODE_TYPE',
    },
};

function CreateNodeModal({ isOpen, onClose, onCreateNode }) {
    const [step, setStep] = useState(Steps.NODE_NAME);
    const [name, setName] = useState('');
    const [nodeType, setNodeType] = useState();
    const [provider, setProvider] = useState();
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(true);
    
    useEffect(() => {
        if (isOpen) setDone(false);
    }, [isOpen]);

    const shouldDisableCTA = () => {
        switch (step.label) {
            case Steps.NODE_NAME.label:
                return !!!name.trim().length;
            case Steps.PROVIDER_SELECTION.label:
               return isNaN(Number(provider));
            default:
                return false;
        }
    };

    const onSubmit = () => {
        setSubmitting(true);
        onCreateNode(name, nodeType, provider).finally(() => {
            setTimeout(() => {
                setSubmitting(false);

                // reset state
                setStep(Steps.NODE_NAME);
                setName('');
                setNodeType();
                setProvider();
                setDone(true);
            }, 1500);

        });
    };

    return (
        <Modal motionPreset="slideInBottom" size="2xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                {done && <ModalCloseButton />}
                <ModalHeader>
                    <span hidden={done} className="text-2xl text-red-500 font-extrabold">Instantiate a new Node</span>
                </ModalHeader>
                <ModalBody>
                    {!done && step.label === Steps.NODE_NAME.label && (
                        <div>
                            <h3 className="mb-4 text-lg text-gray-800 font-semibold">Give your node a name (or nickname if you'd like)</h3>
                            <Input width="96" fontWeight="semibold" value={name} onChange={ev => setName(ev.target.value)} />
                        </div>
                    )}

                    {!done && step.label === Steps.PROVIDER_SELECTION.label && (
                        <div>
                            <h3 className="text-lg text-gray-800 font-semibold flex items-center">
                                <span className="mr-2">Choose the service provider</span>
                                <Tooltip placement="right" hasArrow label="Feel free to choose any if you're a beginner as we've integrated all of these with best class security" fontSize="md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                </Tooltip>
                            </h3>
                            <div className="py-8">
                                <PlatformSelector selected={provider} setProvider={setProvider} />
                                <ProviderLocationSelector />
                            </div>
                        </div>
                    )}

                    {!done && step.label === Steps.NODE_TYPE.label && (
                        <div>
                            <h3 className="text-lg text-gray-800 font-semibold flex items-center">
                                <span className="mr-2">Which type of node would you like to deploy?</span>
                            </h3>
                            <div className="py-8">
                                <NodeSelector selected={nodeType} setNodeType={setNodeType} />
                            </div>
                        </div>
                    )}

                    {done && (
                        <div>
                            <h3 className="text-4xl text-black font-extrabold">And done, your node is created<span className="text-red-500">.</span></h3>
                            <h5 className="ml-1 mt-2 text-lg text-gray-400">how easy was that? 🥳</h5>
                            <img src="/images/node-created.png" alt="Node Created" />
                        </div>
                    )}
                </ModalBody>

                <ModalFooter>
                    <div hidden={done} className="w-full flex items-center justify-between">
                        <Button
                            variant="outline"
                            disabled={!step.prev}
                            onClick={() => setStep(Steps[step.prev])}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Previous
                        </Button>
                        <Button
                            mr={3}
                            colorScheme="red"
                            disabled={shouldDisableCTA()}
                            onClick={() => step.next ? setStep(Steps[step.next]) : onSubmit()}
                            transition="all"
                            transitionDuration={500}
                            isLoading={submitting}
                        >
                            {step.next ? 'Next' : 'Finish'}
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </div>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CreateNodeModal;
