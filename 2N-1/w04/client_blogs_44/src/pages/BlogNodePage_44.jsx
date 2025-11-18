import {useEffect, useState} from 'react';

// import blogData_44 from '../assets/data/blogData.json';
import Blog_44 from '../components/Blog_44';

const api_url = 'http://localhost:5000/api/blog_44';

const BlogNodePage_44  = () => {
  const [name, setName] = useState('hsu');
  const [id, setId] = useState(213410144);
  const [blogs_44, setBlogs_44] = useState(blogData_44);
  const fetchBlogFromNodeServer = async() => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs',data);
      setBlogs_44(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() =>{
    fetchBlogFromNodeServer();
  },[]);
  return (
    <>
          <section className="blogs">
      <div className="section-title">
        <h2> blogs from local json -- {name}, {id} {' '}
        </h2>
      </div>
      <div className="blogs-center">
        {blogs_44.map((item)=>{
          const {id, title, descrip, category, img} = item;
            return(
            <Blog_44
            key={id}
            id={id}
            title={title}
            descrip={descrip}
            category={category}
            img={img}
            />
            );
        })}
      </div>
    </section>
    </>
  );
}

export default BlogNodePage_44;
