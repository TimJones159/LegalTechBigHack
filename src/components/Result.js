import Link from "@mui/material/Link";

export const Result = ({ title, body, courtSource, knowledge }) => {
  return (
    <div className="result">
      <Link>
        <h2>{title}</h2>
      </Link>
      <p>{body}</p>
      <span>{courtSource}</span>
      <span className="knowledge">{knowledge}</span>
    </div>
  );
};

export default Result;
