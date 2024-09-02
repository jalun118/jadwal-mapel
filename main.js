const agendaHarian = {
    0: "Upacara",
    1: "Istirahat",
    2: "Literasi Agama",
    3: "Literasi",
    4: "Ekstrakulikuler",
};

const listMapel = {
    6: {
        mapel: "Pkn",
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
        agenda: agendaHarian[0],
        start: "07:00",
        end: "08:00",
    },
    {
        agenda: listMapel[42].mapel,
        start: "08:00",
        end: "08:40",
    },
    {
        agenda: listMapel[42].mapel,
        start: "08:40",
        end: "09:20",
    },
    {
        agenda: listMapel[14].mapel,
        start: "09:20",
        end: "10:00",
    },
    {
        agenda: agendaHarian[1],
        start: "10:00",
        end: "10:15",
    },
    {
        agenda: listMapel[14].mapel,
        start: "10:15",
        end: "10:55",
    },
    {
        agenda: listMapel[28].mapel,
        start: "10:55",
        end: "11:35",
    },
    {
        agenda: listMapel[28].mapel,
        start: "11:35",
        end: "12:15",
    },
    {
        agenda: agendaHarian[1],
        start: "12:15",
        end: "13:00",
    },
    {
        agenda: listMapel[38].mapel,
        start: "13:00",
        end: "13:40",
    },
    {
        agenda: listMapel[38].mapel,
        start: "13:40",
        end: "14:20",
    },
];

function listAgenda(day, data = [{ agenda: "", start: "00:00", end: "00:00" }]) {
    const newData = [];
    let tempData = {
        agenda: "",
        start: "00:00",
        end: "00:00",
    };

    for (let i = 0; i < data.length; i++) {
        const v = data[i];
        if (tempData.agenda === "") {
            tempData = {
                agenda: v.agenda,
                start: v.start,
                end: v.end,
            };
        }

        if (tempData.agenda !== "" && (tempData.agenda !== v.agenda)) {
            newData.push({
                agenda: tempData.agenda,
                start: tempData.start,
                end: tempData.end,
            });
            tempData = {
                agenda: v.agenda,
                start: v.start,
                end: v.end,
            };
        }

        if (tempData.agenda === v.agenda) {
            tempData.end = v.end;
        }

        console.log(tempData);
        
    }
    return newData;
}


const selasa = [
    {
        agenda: listMapel[25].mapel,
        start: "07:00",
        end: "07:40",
    },
    {
        agenda: listMapel[25].mapel,
        start: "07:40",
        end: "08:20",
    },
    {
        agenda: listMapel[6].mapel,
        start: "08:20",
        end: "09:00",
    },
    {
        agenda: listMapel[6].mapel,
        start: "09:00",
        end: "09:40",
    },
    {
        agenda: agendaHarian[1],
        start: "09:40",
        end: "09:55",
    },
    {
        agenda: listMapel[41].mapel,
        start: "09:55",
        end: "10:35",
    },
    {
        agenda: listMapel[41].mapel,
        start: "10:35",
        end: "11:15",
    },
    {
        agenda: listMapel[17].mapel,
        start: "11:15",
        end: "11:55",
    },
    {
        agenda: agendaHarian[1],
        start: "11:55",
        end: "12:40",
    },
    {
        agenda: listMapel[17].mapel,
        start: "12:40",
        end: "13:20",
    },
    {
        agenda: listMapel[34].mapel,
        start: "13:20",
        end: "14:00",
    },
    {
        agenda: listMapel[34].mapel,
        start: "14:00",
        end: "15:00",
    },
];


const x = listAgenda("selasa", selasa);
console.log(x);


const rabu = [
    {
        agenda: listMapel[42].mapel,
        start: "07:00",
        end: "07:40",
    },
    {
        agenda: listMapel[42].mapel,
        start: "07:40",
        end: "08:20",
    },
    {
        agenda: listMapel[21].mapel,
        start: "08:20",
        end: "09:00",
    },
    {
        agenda: listMapel[21].mapel,
        start: "09:00",
        end: "09:40",
    },
    {
        agenda: agendaHarian[1],
        start: "09:40",
        end: "09:55",
    },
    {
        agenda: listMapel[21].mapel,
        start: "09:55",
        end: "10:35",
    },
    {
        agenda: listMapel[36].mapel,
        start: "10:35",
        end: "11:15",
    },
    {
        agenda: listMapel[41].mapel,
        start: "11:15",
        end: "11:55",
    },
    {
        agenda: agendaHarian[1],
        start: "11:55",
        end: "12:40",
    },
    {
        agenda: listMapel[41].mapel,
        start: "12:40",
        end: "13:20",
    },
];

const kamis = [
    {
        agenda: agendaHarian[3],
        start: "07:00",
        end: "08:00",
    },
    {
        agenda: agendaHarian[3],
        start: "08:00",
        end: "08:40",
    },
    {
        agenda: listMapel[36].mapel,
        start: "08:40",
        end: "09:20",
    },
    {
        agenda: listMapel[36].mapel,
        start: "09:20",
        end: "10:00",
    },
    {
        agenda: agendaHarian[1],
        start: "10:00",
        end: "10:15",
    },
    {
        agenda: listMapel[24].mapel,
        start: "10:15",
        end: "10:55",
    },
    {
        agenda: listMapel[24].mapel,
        start: "10:55",
        end: "11:35",
    },
    {
        agenda: listMapel[24].mapel,
        start: "11:35",
        end: "12:15",
    },
    {
        agenda: agendaHarian[1],
        start: "12:15",
        end: "13:00",
    },
    {
        agenda: listMapel[25].mapel,
        start: "13:00",
        end: "13:40",
    },
    {
        agenda: listMapel[25].mapel,
        start: "13:40",
        end: "14:20",
    },
    {
        agenda: listMapel[42].mapel,
        start: "14:20",
        end: "15:00",
    },
];

const jumat = [
    {
        agenda: agendaHarian[2],
        start: "07:00",
        end: "08:00",
    },
    {
        agenda: listMapel[36].mapel,
        start: "08:00",
        end: "08:40",
    },
    {
        agenda: listMapel[36].mapel,
        start: "08:40",
        end: "09:20",
    },
    {
        agenda: agendaHarian[1],
        start: "09:20",
        end: "09:35",
    },
    {
        agenda: listMapel[41].mapel,
        start: "09:35",
        end: "10:15",
    },
    {
        agenda: listMapel[17].mapel,
        start: "10:15",
        end: "10:55",
    },
    {
        agenda: listMapel[17].mapel,
        start: "10:55",
        end: "11:35",
    },
];
