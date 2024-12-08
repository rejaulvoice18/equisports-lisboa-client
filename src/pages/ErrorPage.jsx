import React from 'react';
import Title from '../components/Title';

const ErrorPage = () => {
    Title('Error Page')
    return (
        <div className="text-5xl flex flex-col items-center">
            <h2 >Page not found</h2>
            <p>Status: 404</p>
        </div>
    );
};

export default ErrorPage;