import React from 'react';
import CardHeading from './CardHeading'
import LightText from './LightText'
import Button from './Button'
import ButtonText from './ButtonText'
export default function MissingPathway(props) {
    return (
        <div className="row">
            <div className="col l11">
                <div className="card-panel white hoverable">
                    <CardHeading text="Missing Pathway Guide? Suggest a Career Pathway" />
                    <div className="row">
                        <div className="input-field col s12">
                            <LightText text="Suggest Career Pathway" />
                            <input type="text" placeholder="e.g Web Dev"/>
                        </div>
                        <div className="row center">
                             <Button text="Submit Suggestion"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}