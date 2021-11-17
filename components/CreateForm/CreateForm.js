const CreateForm = () => {
  const initialValue = {
    title: "",
    body: "",
  };
  const [data, setData] = useState(initialValue);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (data.title && data.body) {
      setButtonDisabled(false);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.title !== "" && data.body !== "") {
      const response = await fetch(
        `https://w08chw02-dante-davidllobet.herokuapp.com/tuits`,
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="body">Escribe tu tuit aquí: </label>
      <input type="text" id="body" value={data.body} onChange={handleChange} />
      <button type="submit" disabled={buttonDisabled}>
        PUBLICAR
      </button>
    </form>
  );
};

export default CreateForm;
