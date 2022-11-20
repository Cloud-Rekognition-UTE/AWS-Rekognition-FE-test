import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './button.css'
import Text from './Text'
const Buttonfacial = ({title,url,img}) => {
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
        {datas&&datas.data.data.FaceDetails.map((item,index)=>(
            <div key={index}>
                <p>AgeRange: {item.AgeRange.Low} - {item.AgeRange.High}</p>
                <p>Emotion: {item.Emotions.map((emotion,indexEmo)=>(
                    <span key={indexEmo}>{emotion.Type} </span>
                ))}
                </p>
                <p>Gender: {item.Gender.Value}</p>
            </div>
        ))}
    </React.Fragment>
  )
}

export default Buttonfacial