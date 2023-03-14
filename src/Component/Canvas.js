import React, { useRef, useMemo, useEffect, useState } from "react";
import './Home.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import image from "../Image/photoImg.png"

// const SCROLL_SENSITIVITY = 0.0005;
// const MAX_ZOOM = 0.5;
// const MIN_ZOOM = 0.1;

const Canvas = () => {
  const [image, setImage] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }


  const transformComponentRef = useRef < import("react-zoom-pan-pinch").ReactZoomPanPinchRef | null > (null);

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("imgExample");
    }
  };



  // const [offset, setOffset] = useState({ x: 0, y: 0 });
  // const [zoom, setZoom] = useState(1);
  // const [draggind, setDragging] = useState(false);

  // const touch = useRef({ x: 0, y: 0 });
  // const canvasRef = useRef(null);
  // const containerRef = useRef(null);
  // const observer = useRef(null);
  // const background = useMemo(() => new Image(), [image]);

  // const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  // const handleWheel = (event) => {
  //   const { deltaY } = event;
  //   if (!draggind) {
  //     setZoom((zoom) =>
  //       clamp(zoom + deltaY * SCROLL_SENSITIVITY * -1, MIN_ZOOM, MAX_ZOOM)
  //     );
  //   }
  // };

  // const handleMouseMove = (event) => {
  //   if (draggind) {
  //     const { x, y } = touch.current;
  //     const { clientX, clientY } = event;
  //     setOffset({
  //       x: offset.x + (x - clientX),
  //       y: offset.y + (y - clientY),
  //     });
  //     touch.current = { x: clientX, y: clientY };
  //   }
  // };

  // const handleMouseDown = (event) => {
  //   const { clientX, clientY } = event;
  //   touch.current = { x: clientX, y: clientY };
  //   setDragging(true);
  // };


  // const handleMouseUp = () => setDragging(false);

  // const draw = () => {
  //   if (canvasRef.current) {
  //     const { width, height } = canvasRef.current;
  //     const context = canvasRef.current.getContext("2d");

  //     // Set canvas dimensions
  //     canvasRef.current.width = width;
  //     canvasRef.current.height = height;

  //     // Clear canvas and scale it
  //     context.translate(-offset.x, -offset.y);
  //     context.scale(zoom, zoom);
  //     context.clearRect(0, 0, width, height);

  //     // Make sure we're zooming to the center
  //     const x = (context.canvas.width / zoom - background.width) / 2;
  //     const y = (context.canvas.height / zoom - background.height) / 2;

  //     // Draw image
  //     context.drawImage(background, x, y);
  //   }
  // };

  // useEffect(() => {
  //   observer.current = new ResizeObserver((entries) => {
  //     entries.forEach(({ target }) => {
  //       const { width, height } = background;
  //       // If width of the container is smaller than image, scale image down
  //       if (target.clientWidth < width) {
  //         // Calculate scale
  //         const scale = target.clientWidth / width;

  //         // Redraw image
  //         canvasRef.current.width = width * scale;
  //         canvasRef.current.height = height * scale;
  //         canvasRef.current
  //           .getContext("2d")
  //           .drawImage(background, 0, 0, width * scale, height * scale);
  //       }
  //     });
  //   });
  //   // observer.current.observe(containerRef.current);

  //   // return () => observer.current.unobserve(containerRef.current);
  // }, []);

  // useEffect(() => {
  //   background.src = image;

  //   if (canvasRef.current) {
  //     background.onload = () => {
  //       // Get the image dimensions
  //       const { width, height } = background;
  //       // canvasRef.current.width = width;
  //       // canvasRef.current.height = height;

  //       // Set image as background
  //       canvasRef.current.getContext("2d").drawImage(background, 0, 0);
  //     };
  //   }
  // }, [background]);

  // useEffect(() => {
  //   draw();
  // }, [zoom, offset]);


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
        <div style={{ border: '1px solid black'}}>
          <TransformWrapper>
            <TransformComponent>
              <img src={image} id="object2" />
            </TransformComponent>
          </TransformWrapper>
          {/* <canvas
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
            onMouseMove={handleMouseMove}
            ref={canvasRef}
          /> */}
        </div>
      </div>
      <div className="btns">
        <button type="button" className="buynow-btn">Buy Now</button>
      </div>
    </div>

    // <div className="cotainerr">
    //   <div className="btn-class">
    //     <div className="btns">
    //       <input type="file" id="actual-btn" hidden onChange={handleChange} />
    //       <label for="actual-btn" className="uplod-btn">Upload Photo</label>
    //     </div>
    //     <div className="btns">
    //       <button className="custom-btn" type="button">Custom Design</button>
    //     </div>

    //   </div>
    //   <div className="img-class">
    //     <div className="previewProfilePic"></div>

    //     <TransformWrapper
    //       initialScale={0.5}
    //       minScale={0.5}
    //       maxScale={1}
    //       initialPositionX={200}
    //       initialPositionY={100}
    //     >
    //       <React.Fragment>
    //         <TransformComponent>
    //           <img width="30%" src={file} alt="" />
    //         </TransformComponent>
    //       </React.Fragment>
    //     </TransformWrapper>
    //   </div>
    //   <div className="btns">
    //     <button type="button" className="buynow-btn">Buy Now</button>
    //   </div>
    // </div>
  )
}


export default Canvas;

