import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './button.css'
import {useNavigate} from 'react-router-dom'
import Text from './Text'
const ButtonCheck = ({title,url,img}) => {
    const navigate = useNavigate()
    const [isLoading,setLoading] = useState(false)
    const [datas, setData] = useState(null)
    const [errors,setErrors] = useState('')
    const isLogin = async()=>{
        setLoading(true)
        try{
            const res = await axios.post(`http://localhost:5000/api/${url}`,{
                imagesLogin:img
            })
            console.log(res)
            setData(res)
            setLoading(false)
            if(res.data.message){
                setErrors(res.data.message)
            }
            else{     
                res.data.data.FaceMatches.map((item,index)=>{
                    if(+item.Similarity<85){
                        setErrors('Không thể đăng nhập được')
                    }
                    else if(item.Face.FaceId === 'ebdc6668-eef0-4f39-9d28-1377d4f4bad9'){
                        navigate('/admin')
                    }
                    else{
                        navigate('/home')
                    }
                })
            }
            
        }
        catch(err){
            setErrors(err.message);
            setLoading(false)
        }
    }
    useEffect(()=>{
        setData(null)
    },[img])
  return (
    <React.Fragment>
        <div className='button' onClick={isLogin}>{title}</div>
        {isLoading ? <p>Loading...</p> : <Text title={title}/>}
        <p>{errors}</p>
    </React.Fragment>
  )
}

export default ButtonCheck