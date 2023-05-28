import { useState, useEffect } from "react";
import getPictureAPI from "../api/getPictureAPI";

const usePicture = ({nameURL}) => {
    const [picture, setPicture] = useState([]);

    let allPictures = [];
    useEffect( () => {
        const fetchData = async () => {
            try{
                if(nameURL && nameURL.length > 0) {
                    const pictureCollected = await Promise.all(
                        nameURL.map(async (item) => {
                            // console.log("Picture item url: ", item.url)
                            const resp = await getPictureAPI.get('', { 
                                // baseURL: `${item.url}/sprites/other/home/front_default` 
                                baseURL: `${item.url}`,
                                // url: '/sprites/other/home/front_default'
                            });
                            if (!resp.data) {
                                throw new Error('Something went wrong');
                            }
                            else {
                                let singleLogo = resp.data.sprites.other.home.front_default
                                // let singleLogo = resp.data.sprites.other.home.fron
                                // console.log("single Logo: ", singleLogo)
                                return singleLogo
                            }
                        }
                        )
                    )
                    setPicture(pictureCollected)
                }
            } catch (err) {
                console.log('Error: ', err.message);
            }
        }
        if(nameURL.length > 0) {
            fetchData();
        }
    }, [nameURL] )

    return picture;
}

export default usePicture;