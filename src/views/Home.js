import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";


import {TimeConvert} from "../helpers/timeConvert";


const Home = (props)=>{
    const {metadata, features} = props.data;
    const [sortDir, setSortDir] = useState("asc");
    const [sortField, setSortField] = useState("default");
    const [sortedFeatures, setSortedFeatures] = useState(features);


    const SortFields = ()=>{
        //returns a cleaned up version of the data of just what is needed for display
        setSortedFeatures(features.map(feature=>{
                return {
                    id: feature.id,
                    place: feature.properties.place,
                    time: TimeConvert(feature.properties.time),
                    timeRaw: feature.properties.time,
                    mag: feature.properties.mag,
                }
            })
            );
        //sort fields 
        if(sortField !="default"){

           let newSorted = [...sortedFeatures];
           
           newSorted.sort( (a,b)=>{
                switch (sortField) {
                    case "time":
                        return (sortDir=="asc")? a.timeRaw - b.timeRaw : b.timeRaw - a.timeRaw
                        break;
                    case "mag":
                        return (sortDir=="asc")? a.mag - b.mag : b.mag - a.mag
                    case "place":
                         if(sortDir=="asc"){ 
                            if(a.place < b.place) return -1;
                        }else{
                            if(a.place > b.place) return -1;
                        }
                    default:
                        break;
                }
            })
            
            setSortedFeatures( newSorted  )
    }    
    };

    const sorted = (field)=>{

        if(field == sortField){
            setSortDir( (sortDir == "asc")? "desc" : "asc" );
        }else{
            setSortDir("asc");
        }
        setSortField(field);
    };

    useEffect(()=>{
        SortFields()
    }, [sortField, sortDir])

    return (
        <div className="feature-list-page">
        <h2>{metadata.title}</h2>
        <div className="feature-list">
        <div className="feature-list-row feature-list-header">
            <div className="title list-title" onClick={()=>sorted("place")}>Title</div>
            <div className="mag list-mag" onClick={()=>sorted("mag")}>Magnitude</div>
            <div className="time list-time" onClick={()=>sorted("time")}>Time</div>
        </div>
        {
        sortedFeatures.map(e=>{
            return (<div className="feature-list-row" key={e.id}>
                <div className="title">
                    <Link to={`/detail/${e.id}`}>{e.place}</Link>
                </div>

                <div className="mag">
                    {e.mag}
                </div>
                <div className="time">
                    {e.time}
                </div>
            </div>
            )
        })
        }
        </div>

        </div>
    );
}


export default Home;