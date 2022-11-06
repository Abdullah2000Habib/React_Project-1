import React from 'react'
import  {ContactSection,ContactTitle,Span,ContactForm,Input,FormInput,InputInFormInput,InputSub,TextArea,InputSubmit}from "./style.js"
import Footer from '../Footer'
const Contact = () => {
  return (
  <>
  
  <ContactSection>
    <div className="container">
        <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
        <ContactForm action="">
            <FormInput>
                <InputInFormInput type="text" placeholder="Your Name"/>
                <InputInFormInput type="email" placeholder="Your Email"/>
            </FormInput>
            <InputSub type="text"  placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message"/>
        </ContactForm>
    </div>
</ContactSection>

<Footer/></>
  )
}

export default Contact