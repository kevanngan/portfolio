import React, { useState } from 'react';

const FAQDropdown = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="faq-dropdown">
            <h3 onClick={toggleOpen}>
                {question}
                <span className={`arrow ${isOpen ? 'open' : ''}`}>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                    </svg>
                </span>
            </h3>
            {isOpen && <div className="faq-content"><p>{answer}</p></div>}
        </div>
    );
};

export default FAQDropdown;
