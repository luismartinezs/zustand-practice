import Head from "next/head";
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

import { useModalStore } from "@/store/modal";

export default function ModalComponent() {
  const isOpen = useModalStore((state) => state.isOpen);
  const close = useModalStore((state) => state.close);
  const open = useModalStore((state) => state.open);

  return (
    <>
      <main>
        <Heading as="h1">Modal</Heading>
        <Button onClick={open} mt={2}>
          Open modal
        </Button>
        <Modal isOpen={isOpen} onClose={close}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Non deserunt dolor nostrud ullamco id et esse aute incididunt.
              Anim officia enim adipisicing commodo magna magna ex consequat.
              Reprehenderit consequat eu eiusmod et aute occaecat nisi aute.
              Amet non nulla ipsum laboris est veniam fugiat laboris voluptate
              dolore. Non labore ullamco irure labore adipisicing cupidatat
              nisi. Proident magna qui anim labore enim commodo occaecat velit
              nisi ut enim excepteur excepteur tempor.
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={close}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </main>
    </>
  );
}
