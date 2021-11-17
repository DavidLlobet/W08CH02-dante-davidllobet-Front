import Header from "@/components/Header/Header";
import TweetsList from "@/components/TweetsList/TweetsList";

function Tuits(params) {
  return (
    <>
      <Header />
      <TweetsList tuits={params.tuits} />
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
