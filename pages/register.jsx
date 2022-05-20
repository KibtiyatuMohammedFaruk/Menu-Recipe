import axios from 'axios'
import React, {useState} from 'react'

const Register = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState(null)

    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const res = await axios.post("http://localhost:3000/api/auth/register", 
                state
            )
            console.log(res)
        } catch(error) {

        }
    }

  return (
      <div className='max-w-2xl mx-auto bg-white shadow-md'>

    <form onSubmit={handleSubmit} className="p-5 space-y-5">
        {error && <p>{error}</p>}
        <div>
            <label className='block mb-1' htmlFor="firstName">First Name</label>
            <input onChange={handleChange} 
            type="text" 
            name="firstName" 
            id="firstName" 
            value={state.firstName} 
            className="border border-gray-300 w-full outline-none p-1"
            />
        </div>
        <div>
            <label className='block mb-1' htmlFor="firstName">Last Name</label>
            <input onChange={handleChange} type="text" name="lastName" id="lastName" value={state.lastName} className="border border-gray-300 w-full outline-none p-1"/>
        </div>
        <div>
            <label className='block mb-1' htmlFor="username">Username</label>
            <input onChange={handleChange} type="text" name="username" id="username" value={state.username} className="border border-gray-300 w-full outline-none p-1"/>
        </div>
        <div>
            <label className='block mb-1' htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" name="email" id="email" value={state.email} className="border border-gray-300 w-full outline-none p-1"/>
        </div>
        <div>
            <label className='block mb-1' htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" name="password" id="password" value={state.password} className="border border-gray-300 w-full outline-none p-1"/>
        </div>
        <button type="submit"
        className="bg-teal-700 py-2 px-4 text-white"
        >Register</button>
    </form>
      </div>
  )
}

export default Register