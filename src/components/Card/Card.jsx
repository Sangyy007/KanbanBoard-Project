import "./Card.css";
import TodoIcon from "/icons/To-do.svg";
import { groupIconMap } from "../../constants";

const Card = ({ id, title, tags, status }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <span className="card-id text-gray">{id}</span>
          {/* Avatar goes here - not given */}
        </div>
        <div className="card-title">
          <img
            src={groupIconMap[status] || TodoIcon}
            alt={status}
            className="status-icon"
          />
          {title}
        </div>
      </div>
      <div className="card-tags text-gray">
        {tags &&
          tags.map((tag, index) => (
            <span className="tag" key={index}>
              <span className="circle"></span>
              <span>{tag}</span>
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card;
