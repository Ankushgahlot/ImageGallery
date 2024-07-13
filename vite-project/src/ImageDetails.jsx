// import axios from "axios";
// import { useEffect } from "react";
import { useParams } from "react-router-dom";
function ImageDetails() {
    async function DownloadImage() {
        const id = useParams();
        const response = await axios.get(`https://pixabay.com/photos/panipuri-chaat-pani-puri-crisps-${id}/`)
        console.log(response);
    }
    useEffect(() => {
        DownloadImage();
    })
    return (
        <>
            <h1>{id}</h1>
        </>
    )
}
export default ImageDetails;