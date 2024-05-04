import React, { useState } from 'react';

const Dropdown = ({ title, content, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const header = title || question;
    const body = content || answer;

    return (
        <div className="dropdown">
            <h3 onClick={toggleOpen} className="dropdown-title">
                {header}
                <span className={`arrow ${isOpen ? 'open' : 'closed'}`}>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                    </svg>
                </span>
            </h3>
            {isOpen && <div className="dropdown-content">{body}</div>}
        </div>
    );
};

export default Dropdown;