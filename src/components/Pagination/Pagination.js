import React from 'react';

export const Pagination = ({ prev, next, onPrevious, onNext, num}) => {
    
    // botões para mostrar proxima pagina de personagens
    const handlePrevious = () => {
        onPrevious();
    };
    const handleNext = () => {
        onNext();
    };
    
    return (
        <div className="teste">
            <ul >
            {prev ? (
                <li >
                    <button onClick={handlePrevious}>
                        Previous
                    </button>
                </li>
            ) : null}
            {next ? (
                <li>
                    <button onClick={handleNext}>
                        Next
                    </button>
                </li>
            ) : null}
            </ul>
        </div>
    )
}