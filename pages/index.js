import "@fontsource/roboto-mono";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
const Index=()=>{
  
  return(
    <div style={{backgroundColor:'#dbe9e2',height:'105vh',justifyContent:'center',alignItems:'center',textAlign:'center',fontFamily:'Roboto Mono'}}>
     <Head>
       <title>Muhammad Masum</title>
      
     </Head>
     <img alt="muhammad masum's photo" src="portfolio_head.jpg" style={{height:'40vh',width:'auto'}}/>
    <p>Hi, I am Muhammad Masum. I have started my programming journey 5 years ago by a book written by tamim shahriar subeen.It was a 
      book on c programming language. I was very passionate about to learn how web application works. I 
      started to learn html, css, javascript, nodejs , sql ,mongodb, express , RESTapi,react, socket.io etc. In 2021, I learnt
      typescript, graphql , postgresql ,typeorm, nextjs etc and I created <a href='https://tribindu.vercel.app' style={{color:'blue',textDecoration:'none'}}>tribindu</a>.Besides, I can write code in python ,java ,c++ and c++
       is my favourite.
      At the beginning I was a self-taught programmer,then I moved to obtain a degree on computer science.
      I have participated in some online programming contest at codeforces dot com and solved 150+ URI online judge problems.
      My next step will be solving problems at leetcode.
      I love to play video games, listen music and to travel.
    </p>
    <h1>Projects</h1>
    <p><b># tribindu</b> [pdf parsing, web scraping, graphql, react ,express, typescript, javascript, python, postgresql ,typeorm ]</p>
    <a href='https://tribindu.vercel.app' style={{color:'blue',textDecoration:'none'}}>link</a>
    <p><b># trello</b> [with react,typescript ,readux ,styled-components](<span style={{color:'red'}}>incomplete</span>)</p>
    <a href='https://github.com/masummuhammad/trello_ts' style={{color:'blue',textDecoration:'none'}}>github</a> <b>|</b> <a href='https://trello-ts.vercel.app/' style={{color:'blue',textDecoration:'none'}}>link</a>
    <p> </p>
    
      <Link href='/getInTouch' style={{color:'blue',textDecoration:'none'}}>get in touch with me</Link> <b>|</b> <a href='https://www.facebook.com/muhammad.masum.98622' style={{color:'blue',textDecoration:'none'}}>knock me on facebook</a>
    
    </div>
  )
}
export default Index;