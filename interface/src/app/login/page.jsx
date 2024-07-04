'use client'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useEffect, useState } from 'react';
import './styles.css';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/lib/firebase';


export default function page(){
const router=useRouter();

const app=initializeApp(firebaseConfig);
const auth = getAuth(app);
const [logged,setlog]=useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signups= async()=>{
  const auth=getAuth(app)
	const response= await signInWithEmailAndPassword(auth,email,password)
	  .catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		alert("error: "+errorCode+" :: "+errorMessage)
	  });
  onAuthStateChanged(auth,(user)=>{
    if(user){
      window.location.href='/'
    }
    else{
      alert("invalid id")
    }
  })
	}

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

	  const emails=(event)=>{
       var {value}=event.target;
	   console.log(value)
	   setEmail(value);
	  }
	  const pass=(event)=>{
		var {value}=event.target;
		console.log(value)
		setPassword(value);
	   }
 
 


    return<>
	 <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div className=" d-none d-md-flex">
          </div>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
            <div>

              <div className="form-floating mb-3">
                <input onChange={emails} type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com"/>
                <label className="floatingInputEmail">Email address</label>
              </div>

              <hr/>

              <div className="form-floating mb-3">
                <input onChange={pass} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label className="floatingPassword">Password</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password"/>
                <label className="floatingPasswordConfirm">Confirm Password</label>
              </div>

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" onClick={signups}>Login</button>
              </div>

              <a className="d-block text-center mt-2 small" href="/login/signup">Dont have an account? Register</a>

              <hr className="my-4"/>

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-google me-2"></i> Sign up with Google
                </button>
              </div>

              <div className="d-grid">
                <button className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign up with Facebook
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
}