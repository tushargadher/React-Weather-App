import { useEffect, useState } from "react";

const GetLoction = () => {


    const [location, setLoction] = useState({
        loaded: false,
        coordinates: {
            lat: '',
            lng: ''
        },
    })

    const onSuccess = (location) => {
        setLoction({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lag: location.coords.longitude,
            }
        });
    };

    const onError = (error) => {
        setLoction({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            }
        })
    }

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            //calling onError method with parameter
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }
        else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    });
    return location;
}
export default GetLoction;