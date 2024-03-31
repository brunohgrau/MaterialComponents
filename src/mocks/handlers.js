import { http, HttpResponse } from "msw";
import { rest } from "msw";

const allPosts = new Map();

const blogs = [
  {
    id: 1,
    title: "sunt aut facere",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel",
  },
  {
    id: 3,
    title: "ea molestias quasi",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur",
  },
];

export const handlers = [
  http.get("/api/blogs", ({ request }) => {
    return HttpResponse.json(blogs);
  }),
  http.get("/api/blogs/:id", (req, res, ctx) => {
    //Extracting id from URL
    const id = req.params.id;
    //Getting blog from db (array)
    const blog = blogs.find((blog) => blog.id === id);

    //Sending response
    if (blog) {
      return HttpResponse.json(blogs);
    } else {
      return HttpResponse.json({ message: "Blog not found" });
    }
  }),

  http.get("/api/products", ({ request }) => {
    return HttpResponse.json([
      {
        id: 1,
        name: "ProductName",
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
  http.get("/api/products/:id", ({ request }) => {
    return HttpResponse.json([]);
  }),
  http.get("/api/posts", ({ request }) => {
    return HttpResponse.json([
      {
        id: 1,
        title: "Post01",
        content: "Post01 Content",
        user: "",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        title: "Post02",
        content: "Post02",
        user: "",
        date: new Date().toISOString(),
      },
    ]);
  }),
  http.get("api/post/:postId", ({ params }) => {
    return HttpResponse.json({});
  }),
  http.get("/api/users", ({ request }) => {
    return HttpResponse.json([
      { id: "0", name: "Tianna Jenkins" },
      { id: "1", name: "Kevin Grant" },
      { id: "2", name: "Madison Price" },
    ]);
  }),
  http.get("/api/notifications", ({ request }) => {
    return HttpResponse.json([
      {
        id: 1,
        notification: "Notification Message",
      },
    ]);
  }),
];
