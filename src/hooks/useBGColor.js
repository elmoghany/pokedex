import { useState, useEffect } from "react";
import getBGColorAPI from "../api/getBGColorAPI";

const useBGColor = ({nameURL}) => {
    const [bgColor, setBGColor] = useState([]);

    let speciesURL = [];
    useEffect( () => {
        const fetchData = async () => {
            try{
                if(nameURL && nameURL.length > 0) {
                    const speciesURLs = await Promise.all(
                        nameURL.map(async (item) => {
                            // console.log("bg color item url #1: ", item.url)
                            const resp = await getBGColorAPI.get('', { 
                                baseURL: item.url
                            });
                            if (!resp.data) {
                                throw new Error('Something went wrong');
                            }
                            else {
                                speciesURL = resp.data.species.url
                                // let singleLogo = resp.data.sprites.other.home.fron
                                // console.log("1st url: ", speciesURL)
                                return speciesURL
                            }
                        }
                        )
                    )
                    
                    const bgColorCollected = await Promise.all(
                            speciesURLs.map(async (item) => {
                            // console.log("bg color item url #2: ", item)
                            const resp = await getBGColorAPI.get('', { 
                                baseURL: item
                            });
                            if (!resp.data) {
                                throw new Error('Something went wrong');
                            }
                            else {
                                let bgName = resp.data.color.name
                                // console.log("2nd url: ", bgName)
                                return bgName
                                // console.log(bgColorCollected)
                            }
                        }
                        )
                    )
                    setBGColor(bgColorCollected)
                }
            } catch (err) {
                console.log('Error: ', err.message);
            }
        }
        if(nameURL.length > 0) {
            fetchData();
        }
    }, [nameURL] )

    return bgColor;
}

export default useBGColor;