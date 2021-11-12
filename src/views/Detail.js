import React from "react";
import { useParams } from "react-router-dom";

import {data} from "../helpers/data";
import { findEarthquake } from "../helpers/findEarthquake";
import {TimeConvert} from "../helpers/timeConvert";


const Detail = ()=>{

let {detailId} = useParams();
let earthQuake = findEarthquake(detailId, data.data.features)[0].properties;

    return (
        <div className="detail-page">
        <h2>{earthQuake.title}</h2>
        <div className="dertail-row">
            <div className="label">Title</div>
            <div>{earthQuake.title}</div>
        </div>

        <div className="dertail-row">
            <div className="label">Magnitude</div>
            <div>{earthQuake.mag}</div>
        </div>

        <div className="dertail-row">
            <div className="label">Time</div>
            <div> {TimeConvert(earthQuake.time)}</div>
        </div>

        <div className="dertail-row">
            <div className="label">Title</div>
            <div>{earthQuake.title}</div>
        </div>

        <div className="dertail-row">
            <div className="label">Satus</div>
            <div>{earthQuake.status}</div>
        </div>

        <div className="dertail-row">
            <div className="label">Tsunami</div>
            <div>{earthQuake.tsunami}</div>
        </div>

        <div className="dertail-row">
            <div className="label">Type</div>
            <div>{earthQuake.type}</div>
        </div>


        </div>
    );
}


export default Detail;