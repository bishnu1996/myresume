import { useParams, useSearchParams } from "react-router-dom";

import styles from "./style.module.css";

const BlogDetails = () => {
  let params = useParams();
  console.log("BlogDetails Params: ", params);
  
  
  

  const [searchParams] = useSearchParams();
  console.log("id:", searchParams.get("id"));
  console.log("title:", searchParams.get("title"));
  console.log("date:", searchParams.get("date"));
  console.log("description:", searchParams.get("description"));

  return (
    <div className={styles["blog-post"]}>
      <article>
        <div className={styles["blog-content"]}>
          <summary>
            <h3>Blog Post - {params.blogId}</h3>
            {/* <h3>Blog Post</h3> */}
            <div className={styles["blog-date"]}>23 Dec 2016</div>
          </summary>
          <p>
            loremm ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus
            at enim sit amet maximus. Nunc sagittis auctor diam, sed efficitur
            ante viverra quis. Mauris eu enim quis odio rutrum porttitor nec sed
            quam. Nunc vel varius urna. Sed et imperdiet lorem. Curabitur in
            quam vel quam bibendum feugiat. Pellentesque eget nunc sapien.
            Maecenas condimentum orci id arcu tincidunt, ut mollis metus
            pharetra. Nullam semper tempus emauris, eget laoreet nibh bibendum
            vel. Etiam condimentum, metus quis scelerisque congue, neque arcu
            scelerisque ligula, at consectetur felis urna vitae justo.
          </p>
        </div>
        <div className={styles["blog-img"]}>
          <div className={styles["blog-img-caption"]}>
            <b>Pictured</b> Some Cool Skyline
          </div>
        </div>
        <div className={styles["blog-content"]}>
          <p>
            Sed accumsan suscipit lorem, eget rhoncus ante elementum a.
            Vestibulum feugiat tellus quis finibus suscipit. Quisque ultricies,
            nibh ac molestie mattis, ipsum nisi interdum leo, eu condimentum
            erat mi non tellus. Sed sodales, nulla vitae dapibus fringilla,
            turpis ligula laoreet purus, sed euismod quam massa vitae lorem.
            Nunc sit amet facilisis ante, eu fringilla massa. Aenean tristique
            erat et ipsum ultrices, at iaculis urna gravida. Praesent sit amet
            augue vitae dui maximus vulputate sed quis quam. Integer mattis,
            metus nec efficitur rhoncus, felis nisl bibendum nibh, sed feugiat
            eros ex ut quam. Quisque posuere semper malesuada. Maecenas at
            mauris in ex molestie luctus. Integer maximus, enim ut ultrices
            sagittis, nisl turpis placerat ipsum, eget pellentesque nisl felis
            eu nunc.
          </p>

          <p>
            Pellentesque sed leo non elit lobortis elementum eget vitae risus.
            Etiam ac elit neque. Ut ultricies vulputate eros, ut fringilla velit
            hendrerit sed. Mauris ullamcorper quam et massa mollis sodales.
            Proin ut dui maximus nulla consequat lacinia a nec lectus. Sed
            lobortis pellentesque felis at volutpat. Praesent id nunc eu arcu
            vulputate sollicitudin non a quam. Duis laoreet et turpis et
            porttitor. Proin magna dolor, pellentesque ac vestibulum eu,
            bibendum eu libero. Phasellus faucibus ex tortor, vitae sagittis dui
            pulvinar in. Nullam ut dui lectus. Cras at posuere risus, id maximus
            purus.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
