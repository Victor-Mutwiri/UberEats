import './home.css'
import Countries from '../countries.json'
import delivery from '../assets/images/delivery.jpg'
import work from '../assets/images/work.jpg'
import chef from '../assets/images/chef.jpg'

const Home = () => {
  return (
    <div className="home">
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
        <section className="cities">
            <div className="title">
                <h2>Cities near me</h2>
                <a href="#">View all 500+ cities</a>
            </div>
            <div className="map">Map goes Here</div>
        </section>
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
    </div>
  )
}

export default Home