import React from 'react'
import './Login.css'
import SocialDesk from '../../Images/social-desktop.PNG';
import SocialMob from '../../Images/social-mobile.PNG';

const Login = () => {
     return (
          <div className="container login-container">
               <div className="row">
                    <div className=" col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                         <img className='socialDesktop' style= {{height:'85%'}} src={SocialDesk} alt="social img" />
                         <img className='socialMobile' src={SocialMob} alt="social img" />
                    </div>
                    <div className="col-md-5 col-sm-12 ">
                         <div className="card shadow mb-5 bg-body rounded" >
                              <div className="card-body px-5">
                                   <h4 className="card-title text-center fw-bold">Log In</h4>
                                   <form>

                                        <input type="email" className="p-2 mb-2 mt-4 form-control input-bg" placeholder='Phone number,username or email' />
                                        <input type="password" className="p-2 my-2 form-control input-bg" placeholder='Password' />
                                        <div className="mt-3 d-grid">
                                             <button className="custom-btn custom-btn-blue">Log in</button>
                                        </div>
                                        <div className='my-4'>
                                             <hr />
                                             <h5 className='text-center text-muted'>OR</h5>
                                             <hr />
                                        </div>
                                        <div className=" mb-5 mt-3 d-grid">
                                             <button className="custom-btn custom-btn-white"><span className='text-muted fs-6'>Dont't have an account?</span><span className='ms-1 text-info fw-bold'> Signup</span></button>
                                        </div>



                                   </form>

                              </div>
                         </div>
                    </div>
               </div>

          </div>
     )
}

export default Login;