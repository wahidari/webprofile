// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const status = [
    { "id": 1, "name": "Belum Menikah", "total": "1000" }, 
    { "id": 2, "name": "Menikah", "total": "800" },
    { "id": 3, "name": "Bercerai", "total": "600" },
];

export default function allHandler(req, res) {
    res.status(200).json(status);
};

