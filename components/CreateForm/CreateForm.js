import { useEffect, useState } from "react";

const CreateForm = () => {
  const initialValue = {
    text: "",
  };
  const [data, setData] = useState(initialValue);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (data.text !== "") {
      setButtonDisabled(false);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.text !== "") {
      console.log("dentro del submit");
      const response = await fetch(
        `https://w08chw02-dante-davidllobet.herokuapp.com/tuits/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 201) {
        setData(initialValue);
      }
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form
      className="form_create container-sm"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label htmlFor="body">Escribe tu tuit aquí: </label>
      <textarea
        className="form-control"
        type="textarea"
        id="text"
        rows="4"
        cols="50"
        value={data.text}
        onChange={handleChange}
      />
      <button type="submit" disabled={buttonDisabled}>
        PUBLICAR
      </button>
    </form>
  );
};

export default CreateForm;
