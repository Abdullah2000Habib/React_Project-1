import React,{useState,useEffect} from 'react'
import {SocailMediaSection,Socail,Icon,Paragraph,Span} from"./style.js"
import axios from 'axios';

const SocailMedia = () => {


  const [socails,setSocails] =useState([]);

  useEffect(()=>{

    axios.get('js/data.json').then( res => {setSocails(res.data.social)})
  },[])



  const socailList = socails.map((socailsItem)=> {


    return (<Socail type={socailsItem.id} key={socailsItem.id}>
      <Icon className ={socailsItem.icon}></Icon>
      <Paragraph>
          <Span>{socailsItem.title}</Span>
          <Span info2>{socailsItem.body}</Span>
      </Paragraph>
   </Socail>)




  }
  
  
  
  )


  return (
    <SocailMediaSection>
            
   
    {socailList}

    
   
</SocailMediaSection>
  )
}

export default SocailMedia



// <div className="social twitter">
// <i className="icon fa fa-twitter fa-lg"></i>
// <p>
//     <span className="info1">Tweet Me on</span>
//     <span className="info2">Social twitter</span>
// </p>
// </div>

// <div className="social pin">
// <i className="icon fa fa-pinterest fa-lg"></i>
// <p>
//     <span className="info1">Pin Me on</span>
//     <span className="info2">Social Pinterest</span>
// </p>
// </div>