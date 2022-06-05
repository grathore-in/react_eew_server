import React from 'react'
import Page from './Page';

export default function About() {
    const pageInfo = {
      heading: "About Us",
      subheading: "",
      navLinks:{
        about:"About Us"
      }
    };
    const content= "Home";
    return (
      <Page pageInfo={pageInfo} content={content} />
    )
}
