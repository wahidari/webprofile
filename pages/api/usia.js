// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const usia = [
    { "id": 1, "name": "< 10 Tahun", "total": "1000" }, 
    { "id": 2, "name": "11 - 20 Tahun", "total": "800" },
    { "id": 3, "name": "21 - 30 Tahun", "total": "600" },
    { "id": 4, "name": "31 - 40 Tahun", "total": "700" },
    { "id": 5, "name": "41 - 50 Tahun", "total": "400" },
    { "id": 6, "name": "> 50 Tahun", "total": "200" },
];

export default function allHandler(req, res) {
    res.status(200).json(usia);
};

