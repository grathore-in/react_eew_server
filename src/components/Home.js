import React from 'react'
import Page from './Page'
export default function Home() {
  const pageInfo = {
    heading: "Home",
    subheading: "Welcome",
    navLinks:{
    }
  };
  const content= "Home";
  return (
    <Page pageInfo={pageInfo} content={content} />
  )
}
