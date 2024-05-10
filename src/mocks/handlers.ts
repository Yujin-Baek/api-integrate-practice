import { http, HttpResponse } from "msw";
import { cards } from "./mockData";

export const handlers = [
  http.post("/api/cards", async ({ request }) => {
    const data = await request.formData();
    const title = data.get("title") as string;
    const description = data.get("description") as string;
    const file = data.get("file") as File;

    if (!file) {
      return HttpResponse.json("Missing document", { status: 400 });
    }

    console.log({
      id: `${cards.length}`,
      title: title,
      description: description,
      photo: URL.createObjectURL(file),
      like: false,
    });

    cards.push({
      id: `${cards.length + 1}`,
      title: title,
      description: description,
      photo: URL.createObjectURL(file),
      like: false,
    });

    return HttpResponse.json(
      {
        id: `${cards.length}`,
        title: title,
        description: description,
        photo: URL.createObjectURL(file),
        like: false,
      },
      {
        status: 200,
      }
    );
  }),

  http.get("/api/cards", async () => {
    return HttpResponse.json(cards, {
      status: 200,
    });
  }),

  http.put("/api/cards/:id", ({ params }) => {
    const { id } = params;
    const index = cards.findIndex((data) => data.id === id);
    if (index === -1) {
      return HttpResponse.json("Card not found", { status: 404 });
    }

    cards[index].like = !cards[index].like;

    return HttpResponse.json(
      {
        id: cards[index].id,
        title: cards[index].title,
        description: cards[index].description,
        photo: cards[index].photo,
        like: cards[index].like,
      },
      { status: 200 }
    );
  }),

  http.delete("/api/cards/:id", ({ params }) => {
    const { id } = params;
    const index = cards.findIndex((data) => data.id === id);
    if (index === -1) {
      return HttpResponse.json("Card not found", { status: 404 });
    }

    cards.splice(index, 1);

    return HttpResponse.json(
      { message: `Card with ID ${id} deleted successfully` },
      { status: 200 }
    );
  }),
];
