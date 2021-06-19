import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Input,
} from "@chakra-ui/react";
import { useState } from "react";

function CreateNodeModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    
    const shouldDisableCTA = () => {
        if (step === 1) return !!!name.trim().length;
        // if (step === 2) return 
    };

    const updateStep = (delta) => {
        setStep(Math.max(0, step + delta));
    };

    return (
        <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <span className="text-2xl text-red-500 font-extrabold">Instantiate a new Node</span>
                </ModalHeader>
                <ModalBody>
                    {step === 1 && (
                        <div>
                            <h3 className="mb-4 text-lg text-gray-800 font-semibold">Give your node a name (or nickname if you'd like)</h3>
                            <Input width="96" fontWeight="semibold" value={name} onChange={ev => setName(ev.target.value)} />
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h3 className="mb-4 text-lg text-gray-800 font-semibold">Choose the service provider</h3>
                            <Input width="96" fontWeight="semibold" />
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h3 className="mb-4 text-lg text-gray-800 font-semibold">Give your node a name (or nickname if you'd like)</h3>
                            <Input width="96" fontWeight="semibold" />
                        </div>
                    )}
                </ModalBody>

                <ModalFooter>
                    <div className="w-full flex items-center justify-between">
                        <Button
                            variant="outline"
                            disabled={step === 1}
                            onClick={() => updateStep(-1)}
                        >
                            Previous
                        </Button>
                        <Button
                            mr={3}
                            colorScheme="red"
                            onClick={onClose}
                            disabled={shouldDisableCTA()}
                        >
                            Next
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
