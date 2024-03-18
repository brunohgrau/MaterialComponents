import { http, HttpResponse } from "msw";

const allPosts = new Map();

export const handlers = [
  http.get("/api/products", ({ request }) => {
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

  http.get("/api/posts", ({ request }) => {
    return HttpResponse.json(Array.from(allPosts.values()));
  }),

  http.post("/api/posts", async ({ request }) => {
    // Read the intercepted request body as JSON.
    const newPost = await request.json();

    // Push the new post to the map of all posts.
    allPosts.set(newPost.id, newPost);

    // Don't forget to declare a semantic "201 Created"
    // response and send back the newly created post!
    return HttpResponse.json(newPost, { status: 201 });
  }),

  http.delete("/api/posts/:id", ({ request }) => {
    return HttpResponse.json([{}]);
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
