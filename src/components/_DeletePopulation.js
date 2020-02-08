import React from 'react';

const _DeletePopulation = ({action,text,buttonType}) => (
    <button type="submit" className={buttonType+" px-0 mx-0"}
            onClick={(event) => {
                event.preventDefault();
                action();
            }
        }>
        {text}
    </button>
);

export default _DeletePopulation;

