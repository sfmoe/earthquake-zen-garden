export const findEarthquake = (id, features)=>{
    let found = features.filter(feature=>{
        return feature.id==id
    })
    return found;    
};