// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const wilayah = [
    { "id": 1, "name": "Dusun A", "rt": "3", "kk": "10", "male": "500", "female": "800",  "total": "1300" }, 
    { "id": 2, "name": "Dusun B", "rt": "5", "kk": "20", "male": "600", "female": "900",  "total": "1500" },
    { "id": 3, "name": "Dusun C", "rt": "7", "kk": "30", "male": "700", "female": "1000", "total": "1700" },
];

export default function allHandler(req, res) {
    res.status(200).json(wilayah);
};

