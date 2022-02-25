// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { products } from "./data";

export default function allPostHandler(req, res) {
  res.status(200).json(products);
};

