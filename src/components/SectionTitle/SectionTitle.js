import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
                <div className="wpo-section-title">
                    <h2>{props.Title}</h2>
                    <p>Contact me if you want to participate in my open source projects or if you need to create an ad hoc solution according to your needs</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;
