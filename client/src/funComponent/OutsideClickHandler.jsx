import React, { useRef, useEffect } from "react";

function OutsideClickHandler({ children, onOutsideClick }) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onOutsideClick();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, onOutsideClick]);

    return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideClickHandler;