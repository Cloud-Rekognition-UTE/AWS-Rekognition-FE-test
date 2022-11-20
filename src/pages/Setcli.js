import React,{useState} from 'react'
import axios from 'axios'
const Setcli = () => {
    const [accessKeyId, setAccessKeyId] = useState('')
    const [secretAccessKey, setSecretAccessKey] = useState('')
    const [sessionToken, setSessionToken] = useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const awsCLI = {
                accessKeyId:accessKeyId,
                secretAccessKey:secretAccessKey,
                sessionToken:sessionToken,
            }
            const res = await axios.post(`http://localhost:5000/api/setCLI`,{ accessKeyId:accessKeyId,
            secretAccessKey:secretAccessKey,
            sessionToken:sessionToken,})
            setSuccess(res.data)
            console.log(res.data);
            console.log(awsCLI);
        }
        catch(err){
            console.log(err.message);
        }
        
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">accessKeyId</label>
            <input type="text" name="" id="" onChange={(e)=>setAccessKeyId(e.target.value)}/>
            <label htmlFor="">secretAccessKey</label>
            <input type="text" name="" id="" onChange={(e)=>setSecretAccessKey(e.target.value)}/>
            <label htmlFor="">sessionToken</label>
            <input type="text" name="" id="" onChange={(e)=>setSessionToken(e.target.value)}/>
            <button type='submit'>Đăng nhập</button>
        </form>
        <p>{success}</p>
    </div>
  )
}

export default Setcli