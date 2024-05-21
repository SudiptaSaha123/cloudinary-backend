import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Content = () => {
    const[images,setImages] = useState([])
    useEffect(()=>{
      fetchData()
    },[])
  
    const fetchData = async() => {
      const result = await axios.get('http://localhost:4000/api/v1/upload/getImages')
      console.log(result.data.response)
      setImages(result.data.response)
      console.log(images)
    }

    let onClickHandler = async (id) => {
        const response = await axios.delete(`http://localhost:4000/api/v1/upload/deleteImage/${id}`)
    }
  return (
    <div>
        {images.map(data => (
            <div key={data._id}>
                {data.name}
                <img src={data.imageUrl} alt="Uploaded" />
                <br></br>
                <br></br>
                <br></br>
                {data.tags}
                <br></br>
                <br></br>
                <br></br>
                {data.email}
                <button onClick={() => onClickHandler(data._id)}>DELETE</button>
            </div>
        ))}
    </div>
  )
}

export default Content