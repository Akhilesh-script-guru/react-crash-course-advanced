import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    number: "",
    text: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      number: "",
      text: "",
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <input
        type="number"
        placeholder="put some no. of seats"
        name="number"
        value={form.number}
        onChange={handleOnChange}
      />

      <input
        type="text"
        placeholder="Item..."
        name="text"
        value={form.text}
        onChange={handleOnChange}
      />

      <button type="submit">Add</button>
    </form>
  );
}
