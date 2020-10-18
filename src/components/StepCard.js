import React from 'react';

export default function StepCard(props) {
    return (
        <div className="row">
            <div className="col s8">
                <div className="card grey lighten-5">
                    <div className="card-content black-text">
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