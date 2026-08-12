import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios' //npm install axios
import { useNavigate } from 'react-router-dom'

function Signup(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const result = await axios.post('http://localhost:3001/register', {name, email, password})
            console.log(result)
            navigate('/login')
        }catch(err){
            console.error(err)
        }
    }
    return(
        <div className='auth-page'>
            <div className='auth-card'>
                <h1 className='auth-title'>facebook</h1>
                <h2 className='auth-heading'>Register</h2>

                <form className='auth-form' onSubmit={handleSubmit}>
                    <input 
                    type='text' 
                    placeholder='Name' 
                    required 
                    onChange={(e) => setName(e.target.value)} />

                    <input 
                    type='email' 
                    placeholder='Email' 
                    required 
                    onChange={(e) => setEmail(e.target.value)} />

                    <input 
                    type='password' 
                    placeholder='Password' 
                    required 
                    onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit'>Register</button>
                </form>

                <p className='auth-switch'>
                    Don&apos;t have an account? <Link to='/login'>Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup