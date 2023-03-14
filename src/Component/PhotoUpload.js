import React, { useState } from "react";
import './PhotoUpload.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const PhotoUpload = () => {
  const [image, setImage] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="cotainerr">
      <div className="btn-class">
        <div className="btns">
          <input type="file" id="actual-btn" hidden onChange={handleChange} />
          <label for="actual-btn" className="uplod-btn">Upload Photo</label>
        </div>
        <div className="btns">
          <button className="custom-btn" type="button">Custom Design</button>
        </div>

      </div>
      <div className="img-class">
        <div className="previewProfilePic"></div>
        <div style={{ border: '1px solid black' }}>
          <TransformWrapper>
            <TransformComponent>
              <img className="object2" src={image} />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
      <div className="btns">
        <button type="button" className="buynow-btn">Buy Now</button>
      </div>
    </div>
  )
}


export default PhotoUpload;

