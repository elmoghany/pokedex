import getNameURLAPI from "../api/getNameURLAPI";
import { useState, useEffect } from "react";

const useNameURL = () => {
    const [nameURL, setNameURL] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            try{
                const resp = await getNameURLAPI.get()
                if (!resp.data) {
                    throw new Error('Something went wrong');
                }
                else {
                    setNameURL(resp.data.results)
                }
            } catch (err) {
                console.log('Error: ', err.message);
                return null
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        console.log("getNameUrlResult1: ", nameURL);
    }, [nameURL])

    return nameURL

}

export default useNameURL;