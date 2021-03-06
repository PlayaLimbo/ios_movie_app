import React from "react";
export default function useTimeout(callback, delay) {
    const timeoutRef = React.useRef(null);
    const savedCallback = React.useRef(callback);
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    React.useEffect(() => {
        const tick = () => savedCallback.current();
        if (typeof delay === "number") {
            timeoutRef.current = setTimeout(tick, delay);
            return () => clearTimeout(timeoutRef.current);
        }
    }, [delay]);
    return timeoutRef;
}
