import React, { useState } from "react";
import background from '../Image/backgroundImg.jpeg'

const FileUpload = () => {
  const bgImage = background;
  let params = (new URL(document.location)).searchParams;
  let name = params.get("name");
  console.log(name)
  let id = params.get("id");
  console.log(id)
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData
    });
  };

  // console.log('MERGE-IMAGES~~~~~~>>>', bgImage + image)

    return (
        <>
  <form>
        <input 
            className="form-control-file mb-3" 
            type="file" 
            id="file" 
            accept=".jpg"
            multiple
            onChange={handleChange}
            />
          <button 
            className="btn btn-primary mt-3" 
            onClick={handleUpload}
            >Upload</button>
          <div style={{ marginTop: '50px', height: '400px', width: '500px', marginLeft: "600px", backgroundImage: `url(${bgImage})` }}>
                <div className="previewProfilePic" style={{ padding: '15px', height: '50px', width: '106px', marginLeft: '300px', marginTop: '190px', position: 'fixed' }}>
                    {image.preview ? ( <img className="playerProfilePic_home_tile" src={image.preview} alt="img" />) : null }
                </div>
            </div>
            <div style={{height:'10px' , width:'10px'}}>
            <li><img alt="TitleOfImage" src={`${bgImage}${image.preview}`}/></li>
            </div>
    </form>
          
        </>
    )
}

export default FileUpload;


// const ItemsList = data.map( item => {
//   return(
//   <li><img key={item.id} alt="TitleOfImage" src={`${imageBaseURL}${item.image}`}/></li>
//   )
// })