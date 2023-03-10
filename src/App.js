import Bloglist from './Fecth';
import './App.css';
import {React,useEffect,useState} from 'react';



function App() {

  const[blogs,setBlogs]=useState(null); 

  const handleDelete=(id)=>{
    const newBlogs = blogs.filter(blog => blog.id !==id);
    setBlogs(newBlogs);
}

  useEffect(()=>{
    fetch(`http://localhost:3005/blogs`)
    .then((response)=>response.json())
        .then((json)=>{
            console.log(json);
           setBlogs(json);
          })
        },[]);
        
  return (
    <div className="App">
      <p className='Main'>
        {
          blogs && <Bloglist blogs={blogs} handleDelete={handleDelete}  />
        }
      </p>
    </div>
  );
      }

export default App;
