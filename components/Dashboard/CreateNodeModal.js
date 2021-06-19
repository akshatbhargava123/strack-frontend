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

function CreateNodeModal({ isOpen, onClose }) {
    return (
        <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <span className="text-2xl text-red-500 font-extrabold">Instantiate a new Node</span>
                </ModalHeader>
                <ModalBody>
                    <h3 className="mb-4 text-lg text-gray-800 font-semibold">Give your node a name (or nickname if you'd like)</h3>
                    <Input width="96" fontWeight="semibold" />
                </ModalBody>

                <ModalFooter>
                    <div className="w-full flex items-center justify-between">
                        <Button variant="outline">
                            Previous
                        </Button>
                        <Button colorScheme="red" mr={3} onClick={onClose}>
                            Next
                        </Button>
                    </div>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CreateNodeModal;
