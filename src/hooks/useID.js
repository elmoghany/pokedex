import { useState, useEffect } from "react";
import getIDAPI from "../api/getIDAPI";

const useID = ({nameURL}) => {
    const [ID, setID] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            try{
                if(nameURL && nameURL.length > 0) {
                    const ids = await Promise.all(
                        nameURL.map(async (item) => {
                            // console.log("ID item url: ", item.url)
                            const resp = await getIDAPI.get('', { baseURL: item.url });
                            if (!resp.data) {
                                throw new Error('Something went wrong');
                            }
                            else {
                                return resp.data.id
                            }
                        }
                        )
                    )
                    setID(ids)
                }
            } catch (err) {
                console.log('Error: ', err.message);
            }
        }
        if(nameURL.length > 0) {
            fetchData();
        }
    }, [nameURL] )

    return ID;
}

export default useID;