import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useState } from "react";
// import FormData from 'form-data';

function Login({ visible}) {
  const [values,  setValues] = useState({ 
    email:"",
    password:""
  })
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;



  // const handleSubmit = ()=>{
       
    // let data = new FormData();
    // data.append('email', `${email}`);
    // data.append('password', `${password}`);
    
    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'https://breradph-bac.vercel.app/login',
    // //   headers: { 
    // //     ...data.getHeaders()
    // //   },
    //   data : data
    // };
    
    // axios.request(config)
    // .then((response) => {
    //   console.log(JSON.stringify(response.data));
    //   if(response.data.Status === "succes"){
    //     navigate("/dashboard/*")
    //     }else{
    //         alert(response.data.Message)
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post('https://breradph-bac.vercel.app/login', values)
      .then(res=>{
          console.log(res.data.Status)
          if(res.data.Status === "succes"){
              navigate("/dashboard/*")
          }else{
              alert(res.data.Message)
          }
      })
      .catch(err=>console.log(err))
  }
          // }

  if(!visible) return null;

  return (
    <div className=' z-50 fixed inset-0 bg-noir/70 backdrop-blur-sm flex flex-col justify-center '>
      <div className=" h-14  mb-[10%] ml-[5%] justify-around">
        <a href="/" className=''>
          <span className="text-sm hover:opacity-50 text-blanc">Retour</span>
        </a>
      </div>
     <div className='formCon  rounded mx-[25%] h-[50vh] my-[0%]'>
        <p className='text-2xl  w-1/2 font-extrabold text-center'>Connexion</p>
        <div className="p-3">
          <section className="px-[0%] rounded-xl">
            <form
              action=""
              className=""
                onSubmit={handleSubmit}
              >
                <div className="flex justify-around">
                  <label htmlFor="" className="mr-20">Email</label>
                  <input type="email"
                    className="border h-10 w-1/2 rounded-md px-5"
                    name="email"
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                    onChange={e=>setValues({...values, email: e.target.value})}
                  /> <br />
                </div> <br />
                <div className="flex justify-around">
                  <label htmlFor="" className="mr-5">Mot de passe</label>
                  <input
                    type="password"
                    className="border h-10 w-1/2 rounded-md px-5"
                    name="password"
                    onChange={e=>setValues({...values, password: e.target.value})}
                    // value={password}
                    // onChange={e => setPassword(e.target.value)}
                  /> <br /> <br />
                </div> <br />
                <button
                  type="submit"
                  className="connecter ml-8 text-blanc rounded p-2"
                >
                  Se connecter
                </button>
            </form>
        </section>
        </div>
    </div>
  </div>
  )
}
Login.propTypes = {
  visible: PropTypes.string.isRequired,
  onClose: PropTypes.string.isRequired,
};

export default Login;
