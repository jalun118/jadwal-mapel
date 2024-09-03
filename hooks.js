
function DurationInMinute(startDuration = "0:00", endDuration = "0:00") {
    const [startHour, startMinute] = startDuration.split(":");
    const startInMinute = ((parseFloat(startHour ?? "") ?? 0) * 60) + (parseFloat(startMinute ?? "") ?? 0);
    const [endHour, endMinute] = endDuration.split(":");
    const endInMinute = ((parseFloat(endHour ?? "") ?? 0) * 60) + (parseFloat(endMinute ?? "") ?? 0);
    return endInMinute - startInMinute;
}

function DurationConvert(duration) {
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

function DurationAndConvert(startDuration = "0:00", endDuration = "0:00") {
    const deltaTime = DurationInMinute(startDuration, endDuration);
    return DurationConvert(deltaTime);
}

function ListJadwal(data = [{ kegiatan: "", start: "0:00", end: "0:00" }]) {
    const newDataJadwal = [];
    let tempMapel = {
        kegiatan: "",
        start: "0:00",
        end: "0:00",
    };

    for (let i = 0; i < data.length; i++) {
        const v = data[i];

        if (tempMapel.kegiatan === "") {
            tempMapel = {
                kegiatan: v.kegiatan,
                start: v.start,
                end: v.end,
            };
        }

        if (tempMapel.kegiatan !== "" && (tempMapel.kegiatan !== v.kegiatan)) {
            newDataJadwal.push({
                kegiatan: tempMapel.kegiatan,
                start: tempMapel.start,
                end: tempMapel.end,
            });
            tempMapel = {
                kegiatan: v.kegiatan,
                start: v.start,
                end: v.end,
            };
        }

        if (tempMapel.kegiatan === v.kegiatan) {
            tempMapel.end = v.end;
        }

        if (i + 1 === data.length) {
            tempMapel.end = v.end;
            newDataJadwal.push({
                kegiatan: tempMapel.kegiatan,
                start: tempMapel.start,
                end: tempMapel.end,
            });
        }
    }

    const finalResult = [];

    newDataJadwal.forEach((v) => {
        finalResult.push({
            kegiatan: v.kegiatan,
            start: v.start,
            end: v.end,
            duration: DurationAndConvert(v.start, v.end),
        });
    });

    return finalResult;
}

function AddIndex(datas = [], listKegiatan = []) {
    let indexList = 1;
    let text = "";
    for (let i = 0; i < datas.length; i++) {
        const v = datas[i];
        if (!listKegiatan.includes(v.kegiatan)) {
            text += indexList + ". " + v.kegiatan + " " + v.start + " - " + v.end + " (" + v.duration + ")\n";
            indexList++;
        } else {
            text += v.kegiatan + " " + v.start + " - " + v.end + " (" + v.duration + ")\n";
        }
    }
    return text;
}

function filterMapel(mapel, datas) {
    return datas.filter(v => v.kegiatan === mapel);
}

function SumDurationPerMapel(all_mapel = [], listMapel = {}) {
    const countDurationMapel = [];

    for (const key in listMapel) {
        const data = listMapel[key];
        const dataDuration = filterMapel(data.mapel, all_mapel);
        let duration = 0;

        dataDuration.forEach((v) => {
            duration += DurationInMinute(v.start, v.end);
        });

        countDurationMapel.push({
            mapel: data.mapel,
            guru: data.guru,
            duration: duration,
            duration_str: DurationConvert(duration)
        });
    }
    return countDurationMapel.sort((a, b) => b.duration - a.duration);
}

function ParseToArray(object = {}) {
    const newArray = [];
    for (const key in object) {
        newArray.push(object[key]);
    }
    return newArray;
}

exports.hooks = {
    DurationInMinute,
    DurationConvert,
    DurationAndConvert,
    ListJadwal,
    AddIndex,
    filterMapel,
    SumDurationPerMapel,
    ParseToArray
};
