// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const gender = [
    { "id": 1, "name": "Laki Laki", "total": "1000" }, 
    { "id": 2, "name": "Perempuan", "total": "800" }
];

export default function allHandler(req, res) {
    res.status(200).json(gender);
};

