import PropTypes from "prop-types";

const Tweet = ({ tuit }) => {
  const onLike = async (id) => {
    const response = await fetch(
      `https://w08chw02-dante-davidllobet.herokuapp.com/tuits/like/${id}`,
      {
        method: "PATCH",
      }
    );
  };

  return (
    <article className="card shadow-sm">
      <p className="fw-light text-center display-5">{tuit.text}</p>
      <p>Likes: {tuit.likes}</p>
      <p>Date: {tuit.date}</p>
      <button className="btn btn-info" onClick={() => onLike(tuit.id)}>
        LIKE
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
