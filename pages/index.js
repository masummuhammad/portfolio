import "@fontsource/roboto-mono";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
const Index=()=>{
  
  return(
    <div style={{backgroundColor:'#dbe9e2',height:'auto',justifyContent:'center',alignItems:'center',textAlign:'center',fontFamily:'Roboto Mono',paddingTop:'40px',}}>
     <Head>
       <title>Muhammad Masum</title>
      
     </Head>
      
     <img alt="muhammad masum's photo" src="portfolio_head.jpg" style={{height:'40vh',width:'auto'}}/>
    <p>I'm a passionate programmer.I like to solve programming problems and take part in online programming contests.
    
    My app, created with hot technologies.
    <a href='https://tribindu.vercel.app' style={{color:'blue',textDecoration:'none'}}><b>tribindu</b></a> is an unofficial app to provide BTEB students (dip in engg)results without finding out from pdf documents.
    And I like typescript...
    </p>
    <h1>Projects</h1>
    <p><a href='https://tribindu.vercel.app' style={{color:'blue',textDecoration:'none'}}><b># tribindu</b></a> [pdf parsing, web scraping, graphql, react ,express, typescript, javascript, python, postgresql ,typeorm ]</p>
    
    
      <Link href='/getInTouch' style={{color:'blue',textDecoration:'none'}}>get in touch with me</Link> <b>|</b> <a href='https://www.facebook.com/muhammad.masum.98622' style={{color:'blue',textDecoration:'none'}}>knock me on facebook</a>
    
    </div>
  )
}
export default Index;
