const fs = require("node:fs");

const agendaHarian = {
    0: "Upacara",
    1: "Istirahat",
    2: "Literasi Agama",
    3: "Literasi",
    4: "Ekstrakulikuler",
};

const agendaHarianArray = [
    "Upacara",
    "Istirahat",
    "Literasi Agama",
    "Literasi",
    "Ekstrakulikuler",
];

const listMapel = {
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
        agenda: agendaHarian[0],
        start: "7:00",
        end: "8:00",
    },
    {
        agenda: listMapel[42].mapel,
        start: "8:00",
        end: "8:40",
    },
    {
        agenda: listMapel[42].mapel,
        start: "8:40",
        end: "9:20",
    },
    {
        agenda: listMapel[14].mapel,
        start: "9:20",
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

const selasa = [
    {
        agenda: listMapel[25].mapel,
        start: "7:00",
        end: "7:40",
    },
    {
        agenda: listMapel[25].mapel,
        start: "7:40",
        end: "8:20",
    },
    {
        agenda: listMapel[6].mapel,
        start: "8:20",
        end: "9:00",
    },
    {
        agenda: listMapel[6].mapel,
        start: "9:00",
        end: "9:40",
    },
    {
        agenda: agendaHarian[1],
        start: "9:40",
        end: "9:55",
    },
    {
        agenda: listMapel[41].mapel,
        start: "9:55",
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

const rabu = [
    {
        agenda: listMapel[42].mapel,
        start: "7:00",
        end: "7:40",
    },
    {
        agenda: listMapel[42].mapel,
        start: "7:40",
        end: "8:20",
    },
    {
        agenda: listMapel[21].mapel,
        start: "8:20",
        end: "9:00",
    },
    {
        agenda: listMapel[21].mapel,
        start: "9:00",
        end: "9:40",
    },
    {
        agenda: agendaHarian[1],
        start: "9:40",
        end: "9:55",
    },
    {
        agenda: listMapel[21].mapel,
        start: "9:55",
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
        start: "7:00",
        end: "8:00",
    },
    {
        agenda: agendaHarian[3],
        start: "8:00",
        end: "8:40",
    },
    {
        agenda: listMapel[36].mapel,
        start: "8:40",
        end: "9:20",
    },
    {
        agenda: listMapel[36].mapel,
        start: "9:20",
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
        start: "7:00",
        end: "8:00",
    },
    {
        agenda: listMapel[36].mapel,
        start: "8:00",
        end: "8:40",
    },
    {
        agenda: listMapel[36].mapel,
        start: "8:40",
        end: "9:20",
    },
    {
        agenda: agendaHarian[1],
        start: "9:20",
        end: "9:35",
    },
    {
        agenda: listMapel[41].mapel,
        start: "9:35",
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


function durationMapelMinute(startDuration = "0:00", endDuration = "0:00") {
    const [startHour, startMinute] = startDuration.split(":");
    const StartDurationMinute = ((parseFloat(startHour ?? "") ?? 0) * 60) + (parseFloat(startMinute ?? "") ?? 0);
    const [endHour, endMinute] = endDuration.split(":");
    const EndDurationMinute = ((parseFloat(endHour ?? "") ?? 0) * 60) + (parseFloat(endMinute ?? "") ?? 0);
    return EndDurationMinute - StartDurationMinute;
}

function durationConvert(duration) {
    const [durationHour, durationMinute] = [
        ((duration - (duration % 60)) / 60),
        (duration % 60),
    ];

    if (durationHour > 0 && durationMinute > 0) {
        return durationHour + " Jam " + durationMinute + " Menit";
    }

    if (durationHour < 1 && durationMinute > 0) {
        return durationMinute + " Menit";
    }

    if (durationHour > 0 && durationMinute < 1) {
        return durationHour + " Jam";
    }
    return "";
}

function durationMapel(startDuration = "0:00", endDuration = "0:00") {
    const deltaTime = durationMapelMinute(startDuration, endDuration);
    return durationConvert(deltaTime);
}

function listAgenda(data = [{ agenda: "", start: "0:00", end: "0:00" }]) {
    const newDataAgenda = [];
    let tempData = {
        agenda: "",
        start: "0:00",
        end: "0:00",
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
            newDataAgenda.push({
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

        if (i + 1 === data.length) {
            tempData.end = v.end;
            newDataAgenda.push({
                agenda: tempData.agenda,
                start: tempData.start,
                end: tempData.end,
            });
        }
    }

    const finalResult = [];

    newDataAgenda.forEach((v) => {
        finalResult.push({
            agenda: v.agenda,
            start: v.start,
            end: v.end,
            duration: durationMapel(v.start, v.end),
        });
    });


    return finalResult;
}

function addNumber(datas = []) {
    let currentNumber = 1;
    let text = "";
    for (let i = 0; i < datas.length; i++) {
        const v = datas[i];
        if (!agendaHarianArray.includes(v.agenda)) {
            text += currentNumber + ". " + v.agenda + " " + v.start + " - " + v.end + " (" + v.duration + ")\n";
            currentNumber++;
        } else {
            text += v.agenda + " " + v.start + " - " + v.end + " (" + v.duration + ")\n";
        }
    }
    return text;
}

function filterMapel(mapel, datas) {
    return datas.filter(v => v.agenda === mapel);
}

function SumDurationMapel() {
    const countDurationMapel = [];
    const all_mapel = [...senin, ...selasa, ...rabu, ...kamis, ...jumat];

    for (const key in listMapel) {
        const data = listMapel[key];
        const dataDuration = filterMapel(data.mapel, all_mapel);
        let sumDuration = 0;

        dataDuration.forEach((v) => {
            sumDuration += durationMapelMinute(v.start, v.end);
        });

        countDurationMapel.push({
            mapel: data.mapel,
            guru: data.guru,
            duration: sumDuration,
            duration_str: durationConvert(sumDuration)
        });
    }
    return countDurationMapel.sort((a, b) => b.duration - a.duration);
}

function finalAgenda() {
    const dataSenin = addNumber(listAgenda(senin));
    const dataSelasa = addNumber(listAgenda(selasa));
    const dataRabu = addNumber(listAgenda(rabu));
    const dataKamis = addNumber(listAgenda(kamis));
    const dataJumat = addNumber(listAgenda(jumat));
    const sumMapel = SumDurationMapel();

    let write = "JADWAL PELAJARAN\n\nSENIN:\n" +
        dataSenin +
        "\nSELASA:\n" +
        dataSelasa +
        "\nRABU:\n" +
        dataRabu +
        "\nKAMIS:\n" +
        dataKamis +
        "\nJUMAT:\n" +
        dataJumat;

    const mapel = sumMapel.map((v, i) => i + 1 + ". " + v.mapel + ": " + v.duration_str).join("\n");

    write += "\n\nTOTAL DURASI\n" + mapel;

    fs.writeFileSync(__dirname + "/result.txt", write);
}

finalAgenda();