'use client'

import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

const NumberCounter = ({ title, symbol, start, end }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        const step = Math.ceil((end - start) / 100);
        const timer = setInterval(() => {
            if (count < end) {
                setCount((prevCount) => Math.min(prevCount + step, end));
            }
        }, 10); // The interval at which the count will be updated

        return () => clearInterval(timer);
    }, [count, start, end]);

    return (
        <Row className="number-counter m-md-1 pt-5 d-flex flex-column align-items-center" style={{ color: '#923022', borderBottom: '2px solid #923022', letterSpacing: '5px' }}>
            <span className="count poppins-bold">{count}<span className="symbol">{symbol}</span></span>
            <h2 className="title pb-4">{title}</h2>
        </Row>
    );
};

export default NumberCounter;
