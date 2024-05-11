import { FormHTMLAttributes, useEffect, useState } from "react";
import { Card } from "./mocks/mockData";
import axios from "axios";

type Input = {
  title: string;
  description: string;
  photo?: File;
};

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [inputs, setInputs] = useState<Input>({
    title: "",
    description: "",
    photo: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setInputs((inputs) => ({
        ...inputs,
        photo: files?.[0] || null,
      }));
    } else {
      setInputs((inputs) => ({
        ...inputs,
        [name]: value,
      }));
    }
  };

  const createCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = axios.get("/api/cards", requestData);
  };

  const getCards = () => {};

  const updateCard = () => {};

  const deleteCard = () => {};

  return (
    <>
      <form onSubmit={createCard}>
        <input
          type="text"
          name="title"
          placeholder="카드의 타이틀을 입력해주세요."
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="카드에 대한 설명을 입력해주세요."
          onChange={handleChange}
        />
        <input type="file" name="file" onChange={handleChange} />
        <button className="btn--create">Create Card</button>
      </form>
      <div>
        <ul className="cardList">
          {cards.map((card: Card) => (
            <li key={card.id} className="card">
              <img src={card.photo} alt={card.title} />
              <p className="card__title">{card.title}</p>
              <button onClick={() => updateCard(card.id)} className="btn--like">
                {card.like ? "🤍" : "🩷"}
              </button>
              <p>{card.description}</p>
              <button
                onClick={() => deleteCard(card.id)}
                className="btn--delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
