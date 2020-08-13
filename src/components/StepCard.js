import React from 'react';

export default function StepCard(props) {
    return (
        <div className="row">
            <div className="col s12 m6 l2">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Title</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit?</p>
                    </div>
                    <div className="card-action center">
                        <a href="">Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}