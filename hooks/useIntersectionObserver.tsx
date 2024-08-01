"use client";

import { useState, useEffect, RefObject } from "react";

const useIntersectionObserver = (ref: RefObject<HTMLDivElement>, options?: IntersectionObserverInit) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, options]);

    return isIntersecting;
};

export default useIntersectionObserver;
