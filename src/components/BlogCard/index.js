import { createSearchParams, Link,useNavigate } from 'react-router-dom';
import './style.css';

const BlogCard = (props)=>{
    let navigate = useNavigate();

    const linkUrl = `${props.data.id}`;

    const onReadMore = () => {
        // navigate({pathname: linkUrl});
        navigate({
          pathname: linkUrl,
          search: createSearchParams(props.data).toString(),
        });
      };
    return(
        <div className='blog-card'>
            <h3 className='h3'>{props.data.date}</h3>
            <h2 className='h2'>{props.data.title}</h2>
            <p className='p'>{props.data.description}</p>
            {/* <Link to={'' + props.data.id} className='btn_primary'>Read More</Link> */}
            <Link to={`${linkUrl}?${createSearchParams(props.data)}`} className='btn_primary'>Read More</Link>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <button type='button' className='btn_primary' onClick={onReadMore}>Read More Button</button>
        </div>
    );
}
export default BlogCard;