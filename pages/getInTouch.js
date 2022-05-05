import Head from 'next/head';
import react from 'react'
import '@fontsource/roboto-mono'
const getInTouch=()=>{
    return(
        <div style={{backgroundColor:'#dbe9e2',height:'100vh',padding:'10px',fontFamily:'Roboto Mono'}}>
            <Head>
                <title>Get in touch with me</title>
            </Head>
            <p>#.Mail me to <b>masum910@outlook.com</b>.</p>
            <br/>
            <p>#.For more projects please check out my github repositories.</p>
            <a href='https://github.com/masummuhammad?tab=repositories' style={{color:'blue',textDecoration:'none'}}>github repositories</a>

        </div>
    )
}
export default getInTouch;