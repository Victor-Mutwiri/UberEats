import './home.css'
import Countries from '../countries.json'
import delivery from '../assets/images/delivery.jpg'
import work from '../assets/images/work.jpg'
import chef from '../assets/images/chef.jpg'
import Appstore from '../assets/images/Apple.svg'
import Playstore from '../assets/images/Android.png'

const Home = () => {
  return (
    <div className="home">

        {/* This is the main section that you see on the landing page */}

        <section className='top'>
            <h3>Order delivery near You</h3>
            <div className="inputs">
                {/* <i className='bx bx-map'/> */}
                <input type="text" placeholder="Enter delivery address"/>
                <select name="" className="options">
                    <option value=""><button><i className='bx bxs-time'></i>Deliver now</button></option>
                    <option value=""><button><i className='bx bxs-calendar'></i>Schedule for later</button></option>
                </select>
                <button>Find Food</button>
            </div>
            <span>Or<a href="#"> Sign in</a></span>
        </section>

        {/* This is the second section where you view three images after scrolling */}
        <section className="bottom">
            <div>
                <img src={work} alt="business" />
                <h3>Feed your employees</h3>
                <li><a href="#">Create a business account</a></li>
            </div>
            <div>
                <img src={chef} alt="add restaurant" />
                <h3>Your restaurant, delivered</h3>
                <li><a href="#">Add your restaurant</a></li>
            </div>
            <div>
                <img src={delivery} alt="deliver" />
                <h3>Deliver with Uber Eats</h3>
                <li><a href="#">Sign up to deliver</a></li>
            </div>
        </section>

        {/* This is the next section which has a map */}
        <section className="cities">
            <div className="title">
                <h2>Cities near me</h2>
                <a href="#">View all 500+ cities</a>
            </div>
            <div className="map">Map goes Here</div>
        </section>

        {/* This is the section with countries */}
        <section className="country">
            <div className="title">
                <h2>Countries with Uber Eats</h2>
                <a href="#">View all countries</a>
            </div>
            <div className="countries">
                {Countries.map(country=>{
                    return (
                        <li><a href="#">{country.name}</a></li>
                    )
                })}
            </div>
        </section>
        <hr />

        {/* This is the second last section */}
        <section className="footer">
            <div className="links">
                <h3>Uber <strong>Eats</strong></h3>
                <div className="banners">
                    <img src={Appstore} alt="App Store" />
                    <img src={Playstore} alt="PlayStore" width={140}/>
                </div>
            </div>
            <div className="socials">
                <ul>
                    <li><a href="#">Get Help</a></li>
                    <li><a href="#">Add your restaurant</a></li>
                    <li><a href="#">Sign up to deliver</a></li>
                    <li><a href="#">Create a business account</a></li>
                </ul>
                <ul>
                    <li><a href="#">Restaurants near me</a></li>
                    <li><a href="#">View all cities</a></li>
                    <li><a href="#">View all countries</a></li>
                    <li><a href="#">Pickup near me</a></li>
                    <li><a href="#">About Uber Eats</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
        </section>
        <hr />

        {/* this is the last section prefereably the end of the page */}
        <section className="end">
            <div className="media">
                <i className='bx bxl-facebook-square'/>
                <i className='bx bxl-twitter'/>
                <i className='bx bxl-instagram'/>
            </div>
            <div className="conclusion">
                <div className="conditions">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Pricing</a>
                    <a href="#">Do not sell or share my personal information</a>
                </div>
                <div className="last">
                    <span>
                        This site is protected by reCAPTCHA and the Google <a href="">Privacy Policy</a> and Terms of Service apply.
                    </span>
                    <span>
                    <i className='bx bx-copyright'/> 2024 Uber Technologies Inc.
                    </span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home