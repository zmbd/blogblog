import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { UserProps } from "../propTypes";

const Login = (props: any) => {
  const { updateUserState } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  const validatePassword = (password: string): boolean => {
    if (password.length >= 8) {
      return true;
    }
    return false;
  };

  const signUserIn = async () => {
    if (validateEmail(email) && validatePassword(password)) {
      try {
        setLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        if (result.user) {
          const userCollectionRef = collection(db, "users");
          const allUsers = await getDocs(userCollectionRef);
          allUsers.docs.map((doc) => {
            if (doc.data().userId === result.user.uid) {
              if (doc.data().isAdmin) {
                updateUserState(doc.data());
              } else {
                setLoginError("You do not have rights to access this page.");
              }
            }
          });
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setLoginError("Your email or password is incorrect.");
        console.error("Oops an error occured:", error);
      }
    } else {
      setLoginError("Your email or password is incorrect.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className={`input input-bordered focus:outline-none ${
                email.length > 0
                  ? validateEmail(email)
                    ? "input-success"
                    : "input-error"
                  : "input-primary"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className={`input input-bordered focus:outline-none ${
                password.length > 0
                  ? validatePassword(password)
                    ? "input-success"
                    : "input-error"
                  : "input-primary"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {loginError !== null && (
            <div className="alert alert-error shadow-lg my-4 text-sm">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{loginError}</span>
              </div>
            </div>
          )}
          <div className="form-control mt-6">
            <button
              onClick={() => signUserIn()}
              className={`btn ${loading && "loading"} btn-primary`}
            >
              {!loading && "login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
