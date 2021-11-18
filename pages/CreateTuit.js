import CreateForm from "@/components/CreateForm/CreateForm";
import Header from "@/components/Header/Header";

function CreateTuit() {
  return (
    <>
      <Header />
      <div className="container">
        <CreateForm />
      </div>
    </>
  );
}

export default CreateTuit;
