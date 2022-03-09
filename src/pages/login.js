import { useState, useEffect } from "react";
export default function Login() {
  const [userForm, setUserForm] = useState({
    email: "dav",
    password: "gff",
  });

  const [formErr, setFormErr] = useState({
    emailErr: null,
    passwordErr: null,
  });

  useEffect(() => {
    console.log(userForm);
  }, [userForm]);
  const formSubmit = (e) => {
    e.preventDefault();
   if(formErr.emailErr&&formErr.passwordErr){
       alert(formErr.emailErr + formErr.passwordErr)
   }
  };

  const handleValue = (e) => {
    console.log(e.target.value);
    if (e.target.id === "email") {
      setUserForm({
        ...userForm,
        email: e.target.value,
      });
      setFormErr({
          ...formErr,
        emailErr:
          e.target.value.length === 0
            ? "this filed is required"
            : !e.target.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
            ? "this email not confirm"
            :null
      });
    } else if (e.target.id === "password") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });
      setFormErr({
        ...formErr,
      passwordErr:
        e.target.value.length === 0
          ? "this filed is required"
          : e.target.value.length < 8
          ? "password  8 chara or more"
          :null
    });
    }
  };

  return (
    <>
    <div className="container m-5">
    <form onSubmit={(e) => formSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${formErr.emailErr?"border-danger":""}`}
            id="email"
            aria-describedby="emailHelp"
            value={userForm.email}
            onChange={(e) => handleValue(e)}
          />
          <div id="emailHelp" className="form-text text-danger">
            {formErr.emailErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userForm.password}
            onChange={(e) => handleValue(e)}
          />
           <div  className="form-text text-danger">
            {formErr.passwordErr}
          </div>
        </div>
        <button type="submit" className={`btn btn-primary ${(formErr.passwordErr)?"disabled":""} ${(formErr.emailErr)?"disabled":""}`}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
