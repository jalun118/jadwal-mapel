const listKegiatan = {
    0: "Upacara",
    1: "Istirahat",
    2: "Literasi Agama",
    3: "Literasi",
    4: "Ekstrakulikuler",
};

const listMapelKey = {
    6: {
        mapel: "Ppkn",
        guru: "Abdul Karim, S.Pd, M.M."
    },
    14: {
        mapel: "Pjok",
        guru: "Endang Sugiyarti, S.Pd."
    },
    17: {
        mapel: "Matematika Wajib",
        guru: "Ade Nurul Halim, S.Pd."
    },
    21: {
        mapel: "B. Inggris",
        guru: "Sobriatun Nufus, S.Pd."
    },
    24: {
        mapel: "B. Indonesia",
        guru: "Sutiawati, S.Pd."
    },
    25: {
        mapel: "Sejarah",
        guru: "Bella Aulia Sahidah, S.Pd."
    },
    28: {
        mapel: "Sbk",
        guru: "Novita Cahyati, S.Sn."
    },
    34: {
        mapel: "PABP",
        guru: "Ujang Sarim, S.Pd."
    },
    36: {
        mapel: "Matematika Minat",
        guru: "Lindri Yani, S.Pd."
    },
    38: {
        mapel: "Antropologi",
        guru: "Shifa Anah Hermawati, S.Pd."
    },
    41: {
        mapel: "Fisika",
        guru: "Edwin Setiaji, M.Pd"
    },
    42: {
        mapel: "Informatika",
        guru: "Pepen Predin, S.Kom"
    },
};

const senin = [
    {
        kegiatan: listKegiatan[0],
        start: "7:00",
        end: "8:00",
    },
    {
        kegiatan: listMapelKey[42].mapel,
        start: "8:00",
        end: "8:40",
    },
    {
        kegiatan: listMapelKey[42].mapel,
        start: "8:40",
        end: "9:20",
    },
    {
        kegiatan: listMapelKey[14].mapel,
        start: "9:20",
        end: "10:00",
    },
    {
        kegiatan: listKegiatan[1],
        start: "10:00",
        end: "10:15",
    },
    {
        kegiatan: listMapelKey[14].mapel,
        start: "10:15",
        end: "10:55",
    },
    {
        kegiatan: listMapelKey[28].mapel,
        start: "10:55",
        end: "11:35",
    },
    {
        kegiatan: listMapelKey[28].mapel,
        start: "11:35",
        end: "12:15",
    },
    {
        kegiatan: listKegiatan[1],
        start: "12:15",
        end: "13:00",
    },
    {
        kegiatan: listMapelKey[38].mapel,
        start: "13:00",
        end: "13:40",
    },
    {
        kegiatan: listMapelKey[38].mapel,
        start: "13:40",
        end: "14:20",
    },
];

const selasa = [
    {
        kegiatan: listMapelKey[25].mapel,
        start: "7:00",
        end: "7:40",
    },
    {
        kegiatan: listMapelKey[25].mapel,
        start: "7:40",
        end: "8:20",
    },
    {
        kegiatan: listMapelKey[6].mapel,
        start: "8:20",
        end: "9:00",
    },
    {
        kegiatan: listMapelKey[6].mapel,
        start: "9:00",
        end: "9:40",
    },
    {
        kegiatan: listKegiatan[1],
        start: "9:40",
        end: "9:55",
    },
    {
        kegiatan: listMapelKey[41].mapel,
        start: "9:55",
        end: "10:35",
    },
    {
        kegiatan: listMapelKey[41].mapel,
        start: "10:35",
        end: "11:15",
    },
    {
        kegiatan: listMapelKey[17].mapel,
        start: "11:15",
        end: "11:55",
    },
    {
        kegiatan: listKegiatan[1],
        start: "11:55",
        end: "12:40",
    },
    {
        kegiatan: listMapelKey[25].mapel,
        start: "12:40",
        end: "13:20",
    },
    {
        kegiatan: listMapelKey[34].mapel,
        start: "13:20",
        end: "14:00",
    },
    {
        kegiatan: listMapelKey[34].mapel,
        start: "14:00",
        end: "15:00",
    },
];

const rabu = [
    {
        kegiatan: listMapelKey[42].mapel,
        start: "7:00",
        end: "7:40",
    },
    {
        kegiatan: listMapelKey[42].mapel,
        start: "7:40",
        end: "8:20",
    },
    {
        kegiatan: listMapelKey[21].mapel,
        start: "8:20",
        end: "9:00",
    },
    {
        kegiatan: listMapelKey[21].mapel,
        start: "9:00",
        end: "9:40",
    },
    {
        kegiatan: listKegiatan[1],
        start: "9:40",
        end: "9:55",
    },
    {
        kegiatan: listMapelKey[21].mapel,
        start: "9:55",
        end: "10:35",
    },
    {
        kegiatan: listMapelKey[36].mapel,
        start: "10:35",
        end: "11:15",
    },
    {
        kegiatan: listMapelKey[41].mapel,
        start: "11:15",
        end: "11:55",
    },
    {
        kegiatan: listKegiatan[1],
        start: "11:55",
        end: "12:40",
    },
    {
        kegiatan: listMapelKey[41].mapel,
        start: "12:40",
        end: "13:20",
    },
];

const kamis = [
    {
        kegiatan: listKegiatan[3],
        start: "7:00",
        end: "8:00",
    },
    {
        kegiatan: listKegiatan[3],
        start: "8:00",
        end: "8:40",
    },
    {
        kegiatan: listMapelKey[36].mapel,
        start: "8:40",
        end: "9:20",
    },
    {
        kegiatan: listMapelKey[36].mapel,
        start: "9:20",
        end: "10:00",
    },
    {
        kegiatan: listKegiatan[1],
        start: "10:00",
        end: "10:15",
    },
    {
        kegiatan: listMapelKey[24].mapel,
        start: "10:15",
        end: "10:55",
    },
    {
        kegiatan: listMapelKey[24].mapel,
        start: "10:55",
        end: "11:35",
    },
    {
        kegiatan: listMapelKey[24].mapel,
        start: "11:35",
        end: "12:15",
    },
    {
        kegiatan: listKegiatan[1],
        start: "12:15",
        end: "13:00",
    },
    {
        kegiatan: listMapelKey[25].mapel,
        start: "13:00",
        end: "13:40",
    },
    {
        kegiatan: listMapelKey[25].mapel,
        start: "13:40",
        end: "14:20",
    },
    {
        kegiatan: listMapelKey[42].mapel,
        start: "14:20",
        end: "15:00",
    },
];

const jumat = [
    {
        kegiatan: listKegiatan[2],
        start: "7:00",
        end: "8:00",
    },
    {
        kegiatan: listMapelKey[36].mapel,
        start: "8:00",
        end: "8:40",
    },
    {
        kegiatan: listMapelKey[36].mapel,
        start: "8:40",
        end: "9:20",
    },
    {
        kegiatan: listKegiatan[1],
        start: "9:20",
        end: "9:35",
    },
    {
        kegiatan: listMapelKey[41].mapel,
        start: "9:35",
        end: "10:15",
    },
    {
        kegiatan: listMapelKey[17].mapel,
        start: "10:15",
        end: "10:55",
    },
    {
        kegiatan: listMapelKey[17].mapel,
        start: "10:55",
        end: "11:35",
    },
];

exports.jadwal = {
    senin,
    selasa,
    rabu,
    kamis,
    jumat,
    listMapelKey,
    listKegiatan
};
