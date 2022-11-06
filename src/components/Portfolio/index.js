import React,{useState,useEffect} from 'react'
import {PortFolioSection,PortFolioTitle,Span,PortFolioList,PortFolioItem,Imagewrapper,Image,Overlay,OverlaySpan} from "./style.js"
import axios from 'axios'



const Portfolio = () => {

 const [images,setImages]=useState([])


 useEffect(()=>{


  axios.get('js/data.json').then( res => {setImages(res.data.portfolio)})

 },[])



 const portfolioImages = images.map((imageItem)=>{


  return ( 
     <Imagewrapper key={imageItem.id}>
    <Image src={imageItem.image} />
    <Overlay >
        <OverlaySpan>
            Show Image
        </OverlaySpan>
    </Overlay>
</Imagewrapper>
)   



 })

  return (
    <PortFolioSection>
    <PortFolioTitle><Span>My</Span> Portfolio</PortFolioTitle>
    <PortFolioList>
        <PortFolioItem  active >All</PortFolioItem>
        <PortFolioItem >HTML</PortFolioItem>
        <PortFolioItem >Photoshop</PortFolioItem>
        <PortFolioItem >Wordpress</PortFolioItem>
        <PortFolioItem >Mobile</PortFolioItem>
    </PortFolioList>
    
    <div className="box">

     {portfolioImages}

    </div>
    
</PortFolioSection>
  )
}

export default Portfolio