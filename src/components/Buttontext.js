import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './button.css'
import Text from './Text'
const Buttontext = ({title,img,url}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [datas, setData] = useState(null)
    const detectLabels = async() =>{
        setIsLoading(true)
        try{
            const res = await axios.post(`http://localhost:5000/api/${url}`,{
                images:img
            })
            console.log(res)
            setData(res)
            setIsLoading(false)
        }
        catch(err){
            console.log(err.message);
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        setData(null)
    },[img])
  return (
    <React.Fragment>
        <div className='button' onClick={detectLabels}>{title}</div>
        {isLoading ? <p>Loading...</p> : <Text title={title}/>}
        {datas&&datas.data.data.TextDetections.map((item,index)=>(
            <div key={index}>
                <p>{item.DetectedText}</p>
            </div>
        ))}
    </React.Fragment>
  )
}

export default Buttontext