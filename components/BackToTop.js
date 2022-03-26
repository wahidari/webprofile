import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    return (
        <>
            <style jsx>{`
                .btn-back-to-top {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    padding: 0px 7px 4px;
                    font-size: 18px;
                    z-index: 1000;
                }
            `}</style>

            {showButton && (
                <button onClick={scrollToTop} aria-label="Back to top" type="button" className="btn bg-white rounded-pill shadow btn-back-to-top">
                    <i className="mt-n2" ><FaArrowUp /></i>
                </button>
            )}
        </>
    );
}