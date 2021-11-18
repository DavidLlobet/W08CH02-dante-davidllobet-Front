import Tweet from "../Tweet/Tweet";
import PropTypes from "prop-types";

const TweetsList = ({ tuits }) => {
  return (
    <ul>
      {tuits.map((tuit) => (
        <Tweet key={tuit.id} tuit={tuit} />
      ))}
    </ul>
  );
};

export default TweetsList;

TweetsList.propTypes = {
  tuits: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
