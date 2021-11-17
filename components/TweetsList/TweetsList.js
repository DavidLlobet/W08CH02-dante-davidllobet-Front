const TweetsList = () => {
  return (
    <ul>
      {tuits.map((tuit) => (
        <li key={tuit.id}></li>
      ))}
    </ul>
  );
};

export default TweetsList;
