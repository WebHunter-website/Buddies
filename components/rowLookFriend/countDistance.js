export default function CountDistance(lat1, lon1, lat2, lon2) {
    
    var R = 6370.986; // km
    d = R * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((lat1 - Math.abs(lat2)) * Math.PI()/180 /2), 2) + Math.cos(lat1 + Math.PI()/180) * Math.cos(Math.abs(lat2) * Math.PI()/180) * Math.pow(Math.sin((lon1 - lon2) * Math.PI()/180 /2),2)))
    // var dLat = toRad(userLat-myLat);
    // var dLon = toRad(userLon-myLon);
    // var myLat = toRad(myLat);
    // var userLat = toRad(userLat);

    // var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    //   Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(myLat) * Math.cos(userLat); 
    // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    // var d = R * c;
    return d;
}

