import React from 'react';

import './headline.scss';

const Headline = ({onNextMotivate, onNextEntertain}) => {
    return (

            <div className="headline">
                <div className="headline-text">
                    <h1>
                        Hello Procrastinator
                    </h1>
                    <h3>
                        Choose what you are up for - click a button!
                    </h3>
                </div>
                <div className="headline-control">
                        <button className="button success" onClick={onNextMotivate}>Motivate me</button>
                        <button className="button alert"  onClick={onNextEntertain}>Entertain me</button>
                </div>
            </div>

    )
}

export default Headline;
