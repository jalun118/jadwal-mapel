# Auto Create Jadwal

## 1. Clone Project

```bash
git clone <url-repo>
```

## 2. Input Mapel

Schema:

```js
const listMapelKey = {
    "<kode-mapel>": {
        "<mapel-name>": "string",
        "<teacher>": "string"
    },
    // any more
}
```

Example

```js
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
    // your code mapel
}
```

## 3. Change schedule

look for variables such as "senin", "selasa” and others, then replace each variable.

Schema Object:

```js
{
    kegiatan: "key kode the activities",
    start: "start the lesson",
    end: "end the lesson",
}
```

For example in variable "senin":

```js
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
]
```

## 3. Running the project

when the code is run it will be written to a file called ‘result.txt’.
write this code in the terminal to start it up

```bash
node main.js
```

## 4. Example Result

```
JADWAL PELAJARAN

SENIN:
Upacara 7:00 - 8:00 (1 Jam)
1. Informatika 8:00 - 9:20 (1 Jam 20 Menit)
2. Pjok 9:20 - 10:00 (40 Menit)
Istirahat 10:00 - 10:15 (15 Menit)
3. Pjok 10:15 - 10:55 (40 Menit)
4. Sbk 10:55 - 12:15 (1 Jam 20 Menit)
Istirahat 12:15 - 13:00 (45 Menit)
5. Antropologi 13:00 - 14:20 (1 Jam 20 Menit)

SELASA:
1. Sejarah 7:00 - 8:20 (1 Jam 20 Menit)
2. Ppkn 8:20 - 9:40 (1 Jam 20 Menit)
Istirahat 9:40 - 9:55 (15 Menit)
3. Fisika 9:55 - 11:15 (1 Jam 20 Menit)
4. Matematika Wajib 11:15 - 11:55 (40 Menit)
Istirahat 11:55 - 12:40 (45 Menit)
5. Sejarah 12:40 - 13:20 (40 Menit)
6. PABP 13:20 - 15:00 (1 Jam 40 Menit)

RABU:
1. Informatika 7:00 - 8:20 (1 Jam 20 Menit)
2. B. Inggris 8:20 - 9:40 (1 Jam 20 Menit)
Istirahat 9:40 - 9:55 (15 Menit)
3. B. Inggris 9:55 - 10:35 (40 Menit)
4. Matematika Minat 10:35 - 11:15 (40 Menit)
5. Fisika 11:15 - 11:55 (40 Menit)
Istirahat 11:55 - 12:40 (45 Menit)
6. Fisika 12:40 - 13:20 (40 Menit)

KAMIS:
Literasi 7:00 - 8:40 (1 Jam 40 Menit)
1. Matematika Minat 8:40 - 10:00 (1 Jam 20 Menit)
Istirahat 10:00 - 10:15 (15 Menit)
2. B. Indonesia 10:15 - 12:15 (2 Jam)
Istirahat 12:15 - 13:00 (45 Menit)
3. Sejarah 13:00 - 14:20 (1 Jam 20 Menit)
4. Informatika 14:20 - 15:00 (40 Menit)

JUMAT:
Literasi Agama 7:00 - 8:00 (1 Jam)
1. Matematika Minat 8:00 - 9:20 (1 Jam 20 Menit)
Istirahat 9:20 - 9:35 (15 Menit)
2. Fisika 9:35 - 10:15 (40 Menit)
3. Matematika Wajib 10:15 - 11:35 (1 Jam 20 Menit)


TOTAL DURASI
1. Sejarah: 3 Jam 20 Menit
2. Matematika Minat: 3 Jam 20 Menit
3. Fisika: 3 Jam 20 Menit
4. Informatika: 3 Jam 20 Menit
5. Matematika Wajib: 2 Jam
6. B. Inggris: 2 Jam
7. B. Indonesia: 2 Jam
8. PABP: 1 Jam 40 Menit
9. Ppkn: 1 Jam 20 Menit
10. Pjok: 1 Jam 20 Menit
11. Sbk: 1 Jam 20 Menit
12. Antropologi: 1 Jam 20 Menit
```

## Node
This project is still in its infancy and there are many flaws.

Maybe this project can help a little.

HAPPY CODING :)