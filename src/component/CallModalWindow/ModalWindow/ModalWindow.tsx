import { useRef, useEffect } from "react";

interface ModalWindowProps {
    isOpen: boolean;
    children: React.ReactNode;
}

function ModalWindow({ isOpen, children }: ModalWindowProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (!isOpen) {
            return;
        }
        const dialog = ref.current;
        if (dialog) {
            dialog.showModal();
        }
        return () => {
            if (dialog) {
                dialog.close();
            }
        };
    }, [isOpen]);

    return <dialog ref={ref}>{children}</dialog>;
}

export default ModalWindow;
