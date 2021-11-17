const Tweet = ({ text, likes, date }) => {
  return (
    <article className="card shadow-sm">
      <p className="fw-light text-center display-5">{text}</p>
      <span>Likes: {likes}</span>
      <p>Date: {date}</p>
    </article>
  );
};

export default Tweet;
