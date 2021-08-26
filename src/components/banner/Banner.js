import './Banner.css';
import {useState} from 'react'
import axios from 'axios'
function Banner(){
    const [movie,setMovie]=useState([]);
    return <div>
    {/* <div className="banner"> */}
        {/* <div className="content">
            <h1 className='title'>Movie Name</h1>
            <div className='banner-buttons'> */}
                <button className='button' onClick={()=>{
                    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                        
                        setMovie(response.data);
                        
                        
                    })
                    
                }}>play</button>
               { movie.map((item)=>{
                            return <h6>{item.title}</h6>
                        })}
                {/* <button className='button'>My List</button>
            </div>
            <h1 className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h1>
        </div>
        <div className="fade-bottom">
     
        </div> */}
        
    </div>
}

export default Banner;