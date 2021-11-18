import Header from "@/components/Header/Header";
import TweetsList from "@/components/TweetsList/TweetsList";

function Tuits({ tuits }) {
  return (
    <>
      <Header />
      <div className="container">
        <TweetsList tuits={tuits} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://w08chw02-dante-davidllobet.herokuapp.com/tuits"
  );
  const tuits = await res.json();

  return { props: { tuits } };
}

export default Tuits;
