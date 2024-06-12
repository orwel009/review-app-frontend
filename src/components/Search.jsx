import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data,getData] = useState(
        {
            "name":"",
        }
    )
    const [result,changeResult] = useState([])
 
    // Value Fecthing
    const inputHandler = (event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    // Search event handling
    const readValue = ()=>{
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                changeResult(response.data)
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
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                                <input type="text" className="form-control" placeholder='Enter Movie Name...'
                                    name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                        </div>
                        <div className="row g-3">
                            {result.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
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

export default Search