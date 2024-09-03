const fs = require("node:fs");
const { jadwal } = require("./jadwal");
const { hooks } = require("./hooks");

function finalkegiatan() {
    const listKegiatanArray = hooks.ParseToArray(jadwal.listKegiatan);
    const dataSenin = hooks.AddIndex(hooks.ListJadwal(jadwal.senin), listKegiatanArray);
    const dataSelasa = hooks.AddIndex(hooks.ListJadwal(jadwal.selasa), listKegiatanArray);
    const dataRabu = hooks.AddIndex(hooks.ListJadwal(jadwal.rabu), listKegiatanArray);
    const dataKamis = hooks.AddIndex(hooks.ListJadwal(jadwal.kamis), listKegiatanArray);
    const dataJumat = hooks.AddIndex(hooks.ListJadwal(jadwal.jumat), listKegiatanArray);
    const SumDurationMapel = hooks.SumDurationPerMapel(
        [...jadwal.senin, ...jadwal.selasa, ...jadwal.rabu, ...jadwal.kamis, ...jadwal.jumat],
        jadwal.listMapelKey
    );

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

    const mapel = SumDurationMapel.map((v, i) => i + 1 + ". " + v.mapel + ": " + v.duration_str).join("\n");

    write += "\n\nTOTAL DURASI\n" + mapel;

    fs.writeFileSync(__dirname + "/result.txt", write);
}

finalkegiatan();