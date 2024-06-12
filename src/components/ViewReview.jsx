import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewReview = () => {
    const [review,changeReview] = useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/view").then(
            (response)=>{
                changeReview(response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {review.map(
                            (value,index) => {
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src="https://www.themoviedb.org/t/p/original/nCzzQKGijVzfGFg42id7uDLOjY5.jpg" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <h5 class="card-title">{value.year}</h5>
                                                <p class="card-text">{value.rating}⭐</p>
                                                <p class="card-text">Duration : {value.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                            }
                        )}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewReview