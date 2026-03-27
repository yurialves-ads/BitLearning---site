import * as React from "react";

export function useSidebar(initialOpen = false) {
    const [isOpen, setIsOpen] = React.useState(initialOpen);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    return { isOpen, open, close, toggle };
}
