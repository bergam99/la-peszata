import { useRef, useEffect } from "react";
import style from "./ModalWindow.module.css"

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

    return <dialog className={style.dialog} ref={ref}>{children}</dialog>;
}

export default ModalWindow;
