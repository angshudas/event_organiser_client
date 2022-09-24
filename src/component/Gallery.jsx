import React,{useState,useRef,useEffect} from 'react';
import images from '../images/gallery';
import leftArrow from '../images/left.svg';
import rightArrow from '../images/right.svg';
// import './Gallery.css';

export default function Gallery() {

  const [currCard, setCurrCard] = useState(0);
  let scrollRef = useRef();
  let childCount = useRef();

  let swipeLeft = ()=>{
    let next = currCard-1===-1?scrollRef.current.childElementCount-1:currCard-1;
    setCurrCard(next);
  }

  let swipeRight = ()=>{
    let next = currCard+1>=scrollRef.current.childElementCount?0:currCard+1;
    setCurrCard(next);
  }

  useEffect(()=>{
    let cardList = Array.from(scrollRef.current.children);
    childCount.current = cardList.length;
    // let galid = document.getElementById('Gallery');
    // galid.style.backgroundImage = `url('../imgages/gallery0${currCard}.png')`;

    cardList.forEach((elem,index)=>{
      elem.style.transform = `translateX( -${currCard*100}% )`;
      elem.style.transition = 'all 0.5s ease-in-out';
    })
  },[currCard]);

  return (
    <div id='Gallery' className='flex flex-col justify-center gap-4 lap:justify-around lap:flex-row-reverse lap:items-center py-3 h-screen relative bg-black bg-opacity-70'>
      <h1 className='text-3xl text-yellow-600 text-center lap:text-7xl'>Gallery</h1>
      <div id='gallery_img'></div>

      <div className='relative z-0 my-7  lap:w-1/3 box-border lap:px-3 lap:py-2 lap:border-4 lap:border-slate-500 lap:rounded-md overflow-hidden'>

        <div ref={scrollRef} className='flex w-full h-80 mx-auto z-0 tab:w-full tab:h-[80vh]'>
          {images.map((photo,index)=>{
            return (
              <img key={index} src={photo} alt="photo" className=' flex-none w-full object-cover object-center ' />
            )
          })}
        </div>

        <button onClick={swipeRight} className='block absolute right-0  z-10 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-80 bg-black'><img src={rightArrow} alt="" className='w-10 tab:w-24 lap:w-10' /></button>

        <button onClick={swipeLeft} className='absolute left-0 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-80 bg-black'><img src={leftArrow} alt="" className='w-10 tab:w-24 lap:w-10' /></button>

        <div className='absolute bg-white bg-opacity-30 w-3/4 left-1/2 -translate-x-1/2 bottom-0  flex justify-center gap-3 rounded-md'>
          {[...Array(childCount.current)].map((elem,index)=>{
            return <div key={index} className={`p-1 tab:p-3 lap:p-1 ${index===currCard?'bg-black':'bg-white'} rounded-full border-4 border-black`}></div>
          })}
        </div>

      </div>
    
  </div>
  );
}

