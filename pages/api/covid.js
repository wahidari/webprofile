// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const covid = {
    "kabupaten": "Bangkalan",
    "konfirmasi": "20561",
    "aktif": "1120",
    "sembuh": "111",
    "meninggal": "344",
    "konfirmasiHarian": "30",
    "aktifHarian": "20",
    "sembuhHarian": "15",
    "meninggalHarian": "2",
    "lastUpdate": "2021-12-14",
    "dataKecamatan" : [
    {
        "id": "2341",
        "kecamatan": "Bangkalan",
        "konfirmasi": "577",
        "aktif": "9",
        "sembuh": "21",
        "meninggal": "124"
    },
    {
        "id": "2342",
        "kecamatan": "Socah",
        "konfirmasi": "504",
        "aktif": "26",
        "sembuh": "7",
        "meninggal": "20"
    },
    {
        "id": "2343",
        "kecamatan": "Burneh",
        "konfirmasi": "638",
        "aktif": "42",
        "sembuh": "12",
        "meninggal": "32"
    },
    {
        "id": "2344",
        "kecamatan": "Kamal",
        "konfirmasi": "604",
        "aktif": "18",
        "sembuh": "10",
        "meninggal": "50"
    },
    {
        "id": "2345",
        "kecamatan": "Arosbaya",
        "konfirmasi": "1388",
        "aktif": "41",
        "sembuh": "5",
        "meninggal": "16"
    },
    {
        "id": "2346",
        "kecamatan": "Geger",
        "konfirmasi": "831",
        "aktif": "34",
        "sembuh": "4",
        "meninggal": "5"
    },
    {
        "id": "2347",
        "kecamatan": "Klampis",
        "konfirmasi": "734",
        "aktif": "27",
        "sembuh": "7",
        "meninggal": "10"
    },
    {
        "id": "2348",
        "kecamatan": "Sepulu",
        "konfirmasi": "524",
        "aktif": "39",
        "sembuh": "1",
        "meninggal": "8"
    },
    {
        "id": "2349",
        "kecamatan": "Tanjung Bumi",
        "konfirmasi": "677",
        "aktif": "8",
        "sembuh": "3",
        "meninggal": "2"
    },
    {
        "id": "2350",
        "kecamatan": "Kokop",
        "konfirmasi": "2140",
        "aktif": "80",
        "sembuh": "2",
        "meninggal": "2"
    },
    {
        "id": "2351",
        "kecamatan": "Kwanyar",
        "konfirmasi": "1281",
        "aktif": "84",
        "sembuh": "5",
        "meninggal": "18"
    },
    {
        "id": "2352",
        "kecamatan": "Labang",
        "konfirmasi": "640",
        "aktif": "33",
        "sembuh": "9",
        "meninggal": "14"
    },
    {
        "id": "2353",
        "kecamatan": "Tanah Merah",
        "konfirmasi": "653",
        "aktif": "189",
        "sembuh": "4",
        "meninggal": "9"
    },
    {
        "id": "2354",
        "kecamatan": "Tragah",
        "konfirmasi": "1137",
        "aktif": "217",
        "sembuh": "6",
        "meninggal": "4"
    },
    {
        "id": "2355",
        "kecamatan": "Blega",
        "konfirmasi": "2311",
        "aktif": "75",
        "sembuh": "8",
        "meninggal": "18"
    },
    {
        "id": "2356",
        "kecamatan": "Modung",
        "konfirmasi": "2058",
        "aktif": "103",
        "sembuh": "3",
        "meninggal": "7"
    },
    {
        "id": "2357",
        "kecamatan": "Konang",
        "konfirmasi": "768",
        "aktif": "30",
        "sembuh": "1",
        "meninggal": "1"
    },
    {
        "id": "2358",
        "kecamatan": "Galis",
        "konfirmasi": "3096",
        "aktif": "65",
        "sembuh": "3",
        "meninggal": "4"
    }
    ]
};

export default function allHandler(req, res) {
    res.status(200).json(covid);
};

