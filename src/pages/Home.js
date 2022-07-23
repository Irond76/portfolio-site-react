import './Home.css';

const Home = () => {
  return (
    <>
      <nav className='nav-container'>
        <ul>
          <li><a href="https://www.linkedin.com/in/dale-bendixen-223066226/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/Irond76" target="_blank">GitHub</a></li>
        </ul>
      </nav>
        <div className='img-container'>
          <div className="header-image"></div>
        </div>
        <div className="about">
          <section className="about-section-title">
              <h1>About me </h1>
                <br/>
                <p className="about-me-info">
                  My name is <span style={{fontWeight: 'bold'}}>Dale Bendixen</span>, I'm an enthusiastic <span style={{fontWeight: 'bold'}}>Full-Stack Developer</span>. I was born and raised in beautiful Portland, Maine, before moving to charming Boise, Idaho; where I raised my three children and started my two businesses. My Property Maintenance company focused primairly on commercial properties in and around the Boise area. With Bendixen Photography I was able to cater more towards my creative side, providing a wide range of services such as: family and high-school graduation portraits, head shots for corporate accounts and real-estate photography. 
                  <p>
                    
                    I enjoyed challenging myself learning Adobe Photoshop, Adobe Premier Pro, videography as well as astrophotography. I'm a self-taught musician, singer/song-writer playing the acoustic/electric guitar, piano and drums. Music is a great love of mine. I've writen, performed and produced my own album in my home studio. As an experienced business owner and seasoned professional I bring an array of knowledge to my <span style={{fontWeight: 'bold'}}>Full-Stack Developing</span> career. I have such a passion for the technologies industry that I closed down my successful business to dedicate all of my energy towards <br/><span style={{fontWeight: 'bold'}}>Full-Stack Developing</span>.
                  </p>
                </p>
            </section>

        </div>
        
    
    </>

  )
}

export default Home
       
