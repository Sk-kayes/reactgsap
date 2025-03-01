import React, { useEffect, useState } from 'react'
import Canvas from './Canvas';
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  let [showCanvas, setShowCanvas] = useState(true);
  useEffect(()=> {
    const locomotiveScroll = new LocomotiveScroll();
  },[])
  return (
    <>
      <div className='w-full bg-red-200 min-h-[120vh] relative'>
      { showCanvas &&
        data[0].map((canvasdets, id)=> (
          <Canvas details={canvasdets} />
        ))
      }
      { showCanvas &&
        data[2].map((canvasdets, id)=> (
          <Canvas details={canvasdets} />
        ))
      }
      <div className="w-full relative z-[1] h-screen ">
        <nav className="w-full p-8 flex justify-between z-50 ">
            <div className="brand text-2xl font-medium">Thirtysixstudios</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
        </nav>
        <div className="textcontainer w-full px-[20%]">
            <div className="text w-[75%] mt-8 px-4">
              <h3 className="text-4xl leading-[1.2]">
                At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional.
              </p>
            </div>
        </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1 className="text-[17rem] font-normal tracking-tight leading-none pl-5">Thirtysixstudios</h1>
          </div>
      </div>
      </div>
    </>
  )
}

export default App;