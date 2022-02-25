// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { agendas } from "./data";

export default function singlePostHandler({ query: { slug } }, res) {
  // console.log(slug)
  const filtered = agendas.filter((agenda) => agenda.slug === slug);

  // Agenda with slug exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Agenda with slug: ${slug} not found.` });
  }
};

