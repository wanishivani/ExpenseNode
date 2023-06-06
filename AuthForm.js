// import { useState } from "react";
// // import { useHistory } from "react-router-dom";
// import "./AuthForm.modules.css";
// // import AuthContext from "./AuthContext";
// export default function AuthForm (props){
//   const [email, setEmail] = useState('');
// const [pass, setPass] = useState('');

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);
// }
//   // const history =useHistory()
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [email, setIsemail] = useState('');
// //   const [password, setIspassword] = useState('');

// // //   const emailInputref = useRef();
// // //   const passwordInputref = useRef();
// // //   const authCtx = useContext(AuthContext);
// //   const [isLoading, setLoading] = useState(false);
// //   const  app = initializeApp(firebaseConfig);
// //   const auth = getAuth();
// //   const navbar = Navbar();
// //   const switchAuthModeHandler = () => {
// //     setIsLogin((prevState) => !prevState);
// //   };
// //   const submitHandler = (e) => {
// //     e.preventDefault();
// //     createUserWithEmailAndPassword(auth, email, password)
// //       .then((auth) => {
// //         if (auth) {
// //           navbar("/");
// //         }
// //       })

// //       .catch(error => alert(error.meassge));
// //       }
// //       const SignsubmitHandler = (e) => {
// //         e.preventDefault();
// //     signInWithEmailAndPassword(auth, email, password)
// //       .then((auth) => {
// //         // Signed in 
// //         if (auth) {
// //             navbar("/");
// //           }
// //         // ...
// //       })
// //       .catch(error=>alert(error.message))
    
// //     // const EnterdEmail = emailInputref.current.value;
// //     // const Enterdpassword = passwordInputref.current.value;
// //     setLoading(true);
// //   }
// //   // let url;
// //   // if (isLogin) {
// //   //   url =
// //   //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBioGGFEkjafDlfi3KO8DrKky9eXgcEH9A";
// //   // } else {
// //   //   url =
// //   //     "https://database-362c8-default-rtdb.firebaseio.com/AIzaSyBioGGFEkjafDlfi3KO8DrKky9eXgcEH9A";
// //   // }
// //   // fetch(url, {
// //   //   method: "POST",
// //   //   body: JSON.stringify({
// //   //     email: EnterdEmail,
// //   //     password: Enterdpassword,
// //   //     returnSecureToken: true,
// //   //   }),
// //   //   headers: {
// //   //     "Content-Type": "application/json",
// //   //   },
// //   // })
// //   //   .then((res) => {
// //   //     setLoading(false);

// //   //     if (res.Ok) {
// //   //       return res.json();
// //   //     } else {
// //   //       return res.json().then(() => {
// //   //         const errorMsg = "Authcation Failed!";
// //   //         // if(data && data.error&& data.error.msg){
// //   //errorMsg=data.error.ms//
// //   // }
// //   // alert(errorMsg)
// //   //         throw new Error(errorMsg);
// //   //       });
// //   //     }
// //   //   })
// //   //   .then((data) => {
// //   //     authCtx.login(data.idToken);
// //   //   })
// //   //   .catch((err) => {
// //   //     alert(err.message);
// //   //   });
// //   return (
// //     <section className="auth">
// //       <h1>{isLogin ? "Login" : "Sign Up"}</h1>{" "}
// //       <form  onSubmit={SignsubmitHandler}>
// //         <div className="control">
// //           <label htmlFor="email">Your Email</label>
// //           <input type="email" id="email"             onChange={(e)=>setIsemail(e.target.value)}

// //             required/> 
// //         </div>
// //         <div className="control">
// //           <label htmlFor="password">Your Password</label>
// //           <input
// //             type="password"
// //             id="password"
// //             onChange={(e)=>setIspassword(e.target.value)}
// //             required
            
// //           />
// //         </div>
// //         <div className="actions">
// //           <button
// //             type="button"
// //             className="toggle"
// //             onClick={switchAuthModeHandler}
// //           >
// //             {isLogin ? "Create new account" : "Login with existing account"}
// //           </button>
// //           {!isLoading && (
// //             <button type="button" onClick={submitHandler}>
// //               Signup
// //             </button>
// //           )}
// //           {isLoading && <p>Sending request...</p>}
// //         </div>
// //       </form>
// //     </section>
// //   )
// // };
// // export default AuthForm;


// return (
//     <div className="auth-form-container">
//         <h2>Login</h2>
//         <form className="login-form" onSubmit={handleSubmit}>
//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <button type="submit">Log In</button>
//         </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
//     </div>
// )
// }