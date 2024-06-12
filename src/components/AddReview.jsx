import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddReview = () => {
    const [data,getData] = useState(
        {
            "name":"",
            "year":"",
            "duration":"",
            "rating":""
        }
    )
    const inputHandler=(event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("Review Added")          
                } else {
                    alert("An error occured")
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">MovieName</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Year</label>
                            <input type="text" className="form-control" name='year' value={data.year}  onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Rating</label>
                            <input type="text" className="form-control" name='rating' value={data.rating} onChange={inputHandler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>AddReview</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddReview