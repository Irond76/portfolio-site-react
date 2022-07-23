import { Link } from 'react-router-dom';


const SiteEnter = () => {
  return (
    <div className='enter-site-container'>
        <div className='enter-site'>
            <img src="assets/dale-logo-for-favicon.png" alt="logo" className='site-logo'/>
            <div className="enter-site-title">
            <Link to='/home' className='enter-btn'>Enter Site</Link>
            </div>

        </div>
    </div>
    )
}

       
       
   
       
            
       

export default SiteEnter