const Tweet = ({ tuit }) => {
  return (
    <article className="card shadow-sm">
      <p className="fw-light text-center display-5">{tuit.text}</p>
      <span>Likes: {tuit.likes}</span>
      <p>Date: {tuit.date}</p>
    </article>
  );
};

export default Tweet;
