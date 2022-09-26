import React from 'react';

function ShowDetail({specialty, greased, weight, medal }) {
    {
        return (
            <div>
                <h5>{specialty}</h5>
                <h5>{greased ? "is greased" : "not greased"}</h5>
                <h5>{weight}</h5>
                <h5>{medal}</h5>
            </div>
        )
    }
}

export default ShowDetail 