import './Footer.css'
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'



const Footer = () => {

  return (
    <>
      <footer id="footer">
        <div className="container-fluid py-md-4">
          <div className="row px-2 px-md-3 py-5 d-flex">
            <div className="col-md-4 col-6 py-4 d-flex justify-content-md-center">
              <div className='footer-info'>
                <div className='section-title mt-md-3'>
                  <h2>Headquarter</h2>
                </div>
                <div>
                  <p>1800 dapibus a tortor pretium,<br/>Integer nisl dui, ABC 12000</p>
                </div>
                <div className='section-title text-white'>
                  <small>Contact Info</small>
                </div>
                <p>+65 2244 1100, +66 1800 1100 <br/>
                hello@youremail.co</p>
              </div>
            </div>
            <div className="col-md-4 col-6 py-4 d-flex justify-content-md-center">
              <div className='footer-info'>
                <div className='section-title mt-md-3'>
                  <h2>Quick Links</h2>
                </div>
                <div>
                  <div className='mt-1'>
                    <span>-</span>
                    <Link to="/">Courses</Link>
                  </div>
                  <div className='mt-1'>
                    <span>-</span>
                    <Link to="/">Investor</Link>
                  </div>
                  <div className='mt-1'>
                    <span>-</span>
                    <Link to="/">Terms & Conditions</Link>
                  </div>
                  <div className='mt-1'>
                    <span>-</span>
                    <Link to="/">Refund Policy</Link>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4 col-6 py-4 d-flex justify-content-md-center">
              <div className='footer-info'>
                <div className='section-title mt-md-3'>
                  <h2>Newsletter Signup</h2>
                </div>
                <div className="form-group">
                  <form action="#" method="get">
                    <input type="email" className="" placeholder="Enter your email" name="email" id="email" required="" />
                    <input type="submit" className="" name="submit" id="form-submit" value="Send me" />
                  </form>
                  {/* <span><sup>*</sup> Please note - we do not spam your email.</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid d-flex justify-content-between footer-end'>
          <div>
            <span>© Made with love by Subas Kumar</span>
          </div>
          <div>
            <ul className="nav social-icon">
              <li className='me-3 me-md-4'><AiFillFacebook/></li>
              <li className='me-3 me-md-4'><AiOutlineTwitter/></li>
              <li><AiOutlineInstagram/></li>
            </ul>
          </div>
        </div>
      </footer>
      
    </>
  );

};

export default Footer;
