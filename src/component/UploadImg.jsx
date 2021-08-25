import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera} from '@fortawesome/free-solid-svg-icons'

const UploadImg = () => {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        console.log('filesdata',e.target.files)
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );
            console.log('ggg',filesArray)

            // console.log("filesArray: ", filesArray);

            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    const renderPhotos =  (source) => {
        console.log("source: ", source);
        if (source.length === 0) {
            return <h5>Please upload an make your own gallery ...!!!!!!!!!!!!!!!!!!!!!!</h5>
        }
        else 
            return  source.map((photo) => {
            return  <img className="imgupolad" src={photo} alt="" key={photo} />;
        

        
        });
    };

    return (
        <div className="app">
          
            <div>
                <input type="file" id="file" multiple onChange={handleImageChange} />
                <div className="label-holder">
                    <label htmlFor="file" className="label">
           
                        <i class="fas fa-camera fa-3x">  <FontAwesomeIcon icon={faCamera} /></i>
                    </label>
                </div>
                <div className="result">{renderPhotos(selectedFiles)}</div>
            </div>
        </div>
    );
}
export default UploadImg