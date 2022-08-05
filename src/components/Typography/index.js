import "./style.css";

function Typography(props) {
  const getClassNames = (tagClass) => {
    return `${tagClass} ${props.className}`;
  };
  const getTypography = () => {
    switch (props.type) {
      case "H1":
        return (
          <h1 className={getClassNames("h1")} style={props.style}>
            {props.children}
          </h1>
        );
      case "H2":
        return (
          <h1 className={getClassNames("h2")} style={props.style}>
            {props.children}
          </h1>
        );
      case "H3":
        return (
          <h1 className={getClassNames("h3")} style={props.style}>
            {props.children}
          </h1>
        );
      case "H4":
        return (
          <h1 className={getClassNames("h4")} style={props.style}>
            {props.children}
          </h1>
        );
      case "H5":
        return (
          <h1 className={getClassNames("h5")} style={props.style}>
            {props.children}
          </h1>
        );
      case "H6":
        return (
          <h1 className={getClassNames("h6")} style={props.style}>
            {props.children}
          </h1>
        );
      case "H7":
        return (
          <p className={getClassNames("h7")} style={props.style}>
            {props.children}
          </p>
        );
      default:
        return (
          <p className={getClassNames("h7")} style={props.style}>
            {props.children}
          </p>
        );
    }
  };
  return getTypography();
}
export default Typography;