import CreateForm from "@/components/CreateForm/CreateForm";
import Header from "@/components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateTuit() {
  return (
    <>
      <Header />
      <div class="container">
        <h1>Añadir un tuit</h1>
        <CreateForm />
      </div>
    </>
  );
}

export default CreateTuit;
