import {FaGlobe} from 'react-icons/fa6';
import {FaMugSaucer} from 'react-icons/fa6';
import {useState, useEffect} from 'react';

import Blog_44 from '../components/Blog_44';
import Wrapper from '../assets/wrappers/BlogsWrapper_44';

import { supabase } from '../db/clientSupabase';

const BlogSupaPage_44 = () => {
const [name,setName] = useState('hsu');
const [id,setId] = useState(213410144);
const[blog_44,setBlogs_44]=useStage([]);

const fethBlogFromSupabase = async () => {
  let {data, error} = await supabase.from("blog_44").select("*");
  console.log("data", data);
  if (error) {
    throw error;
  }
  setBlogs_44(data);
};
useEffect(() =>{
  fetchBlogFromSupabasePage();
}, []);


 return (
    <Wrapper>
          <section className="blogs">
      <div className="section-title">
        <h2>Blogs from Supabase Page -- {name}, {id}</h2>
      </div>
      <div className="blogs-center">
        {blog_44.map((item) => {
          const {id, img, category, title, desc} = item;
          return (
            <Blog_44
            key={id}
            id={id}
            img={img}
            category={category}
            title={title}
            desc={desc}
            />
          );
        })}
        </div>
        </section>
      </Wrapper>
  );


 
};

export default BlogSupaPage_44;
