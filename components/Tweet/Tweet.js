import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import ReactTimeAgo from "react-time-ago";
import PropTypes from "prop-types";

TimeAgo.addLocale(es);

const Tweet = ({ tuit }) => {
  const onLike = async (id) => {
    const response = await fetch(
      `https://w08chw02-dante-davidllobet.herokuapp.com/tuits/like/${id}`,
      {
        method: "PATCH",
      }
    );
  };

  const onDelete = async (id) => {
    const response = await fetch(
      `https://w08chw02-dante-davidllobet.herokuapp.com/tuits/delete/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  return (
    <article className="card shadow-sm tweet">
      <p className="fw-light text-center display-5">{tuit.text}</p>
      <p>Likes: {tuit.likes}</p>
      <ReactTimeAgo date={Date.parse(tuit.date)} locale="es" />
      <button className="btn btn-info" onClick={() => onLike(tuit.id)}>
        LIKE
      </button>
      <button className="btn btn-danger" onClick={() => onDelete(tuit.id)}>
        DELETE
      </button>
    </article>
  );
};

export default Tweet;

Tweet.propTypes = {
  tuit: PropTypes.shape({
    text: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
