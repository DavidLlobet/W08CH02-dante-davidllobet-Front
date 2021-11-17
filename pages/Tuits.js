function Tuits() {
  return (
    <>
      <Header />
      <TuitsList />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("url");
  const tuits = await res.json();

  // Pass data to the page via props
  return { props: { tuits } };
}

export default Tuits;
