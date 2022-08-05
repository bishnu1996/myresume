import "./style.css";
import Typography from "../Typography";
import OurBlogAuthor from "../OurBlogAuthor";

const authorData = [
  {
    domain: "Graphic Design",
    content:
      "35 Stellar Graphic Design Blogs to Keep You Educated and Inspired",
    authorName: "Cristofer Westervelt",
    dateTime: "January 25, 2021 5 min Read",
    imageBlog: `${process.env.PUBLIC_URL}/assets/images/blogimage.png`,
    imageAuthor: `${process.env.PUBLIC_URL}/assets/images/Profile.png`,
  },
  {
    domain: "Web Designer",
    content:
      "35 Stellar Graphic Design Blogs to Keep You Educated and Inspired",
    authorName: "Cristofer Westervelt",
    dateTime: "January 25, 2021 5 min Read",
    imageBlog: `${process.env.PUBLIC_URL}/assets/images/blogimage.png`,
    imageAuthor: `${process.env.PUBLIC_URL}/assets/images/Profile2.png`,
  },
];

const OurBlog = () => {
  return (
    <div className="ourblog">
      <div className="ourblog-about text-center">
        <Typography type="H7" className="blog-title">Our Blog</Typography>
        <Typography type="H2" className="blog-subtitle">
          Our Latest <span className="text-orange">Blogs Will Keep</span>  Everyone Updated
        </Typography>
      </div>
      <div className="blog-author">
        {authorData.map((data, i) => (
          <OurBlogAuthor
            workImage={data.imageBlog}
            profileImage={data.imageAuthor}
            domain = {data.domain}
            content = {data.content}
            authorName = {data.authorName}
            dateTime={data.dateTime}
            key={data.authorName}
          />
        ))}
      </div>
    </div>
  );
};
export default OurBlog;
