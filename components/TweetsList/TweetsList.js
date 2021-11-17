import Tweet from "../Tweet/Tweet";

const TweetsList = ({ tuits }) => {
  //   console.log(tuits);
  return (
    <ul>
      {tuits.map((tuit) => (
        <Tweet key={tuit.id} tuit={tuit} />
      ))}
    </ul>
  );
};

export default TweetsList;
