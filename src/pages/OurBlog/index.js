import './style.css';
import BlogCard from '../../components/BlogCard';
import BLOG_DATA from '../../Constants/blog-data';
const OurBlogs = ()=>{
    return(
        <div className="grid">
            {BLOG_DATA.map((data)=>(
                 <BlogCard data={data} key={data.id}/>
            ))}
        </div>
    );
} 
export default OurBlogs;