import React from 'react'
import { Link } from 'react-router-dom'

import {NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,Al} from "./style.js"



const Navbar = () => {
  return (
    <NavbarSection>
            
    <div className="container">
      
        <Logo>
            <LogoText className="logo-text">Ultra Profile</LogoText>
        </Logo>
        
        <UlList>

            <ListItem ><Al to="/"> Home</Al></ListItem>
            <ListItem ><Anchor href="#">Work</Anchor></ListItem>
            <ListItem ><Anchor href="#">Portfolio</Anchor></ListItem>
            <ListItem ><Anchor href="#">Resume</Anchor></ListItem>
            <ListItem ><Anchor href="#">About</Anchor></ListItem>
            <ListItem ><Al to="/contact">Contact</Al></ListItem>

        </UlList>
        
    </div>
    
</NavbarSection>
    
  )
}

export default Navbar