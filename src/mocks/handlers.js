import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users", (resolver) => {
    return HttpResponse.json([
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Jane Doe",
      },
    ]);
  }),

  http.get("/api/products", (resolver) => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Airpods Wireless Bluetooth Headphones",
        image: "/images/airpods.jpg",
        description:
          "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
        brand: "Apple",
        category: "Electronics",
        price: 89.99,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
      },
    ]);
  }),

  http.post("/api/messages", async ({ request }) => {
    const authToken = request.headers.get("Authorization");
    if (!authToken)
      return HttpResponse.json({ msg: "Unauthorized" }, { status: 401 });
    const requestBody = await request.json();
    return HttpResponse.json(
      {
        content: requestBody.content,
        createdAt: new Date().toLocaleString(),
      },
      { status: 201 }
    );
  }),
];
