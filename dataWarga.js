

import inquirer from "inquirer";
import fs from 'fs'

console.info(`
---------------------------------------------
Aplikasi data- warga
---------------------------------------------
`)

inquirer.prompt([
    {
        name : 'fullname',
        message : 'Name lengkap'
    },
    {
        name : 'ttl',
        message : 'Tempat tanggal lahir'
    },
    {
        name : 'ktp',
        message : 'Nomor KTP'
    },
    {
        name : 'phone',
        message : 'Nomor Telp'
    },
    {
        name : 'fullname',
        message : 'Name lengkap'
    },
    {
        name : 'address',
        message : 'Alamat lengkap'
    },
    {
        name : 'status',
        message : 'Alamat lengkap',
        type : 'list',
        choices : ['sudah', 'belum', 'pernah']
    },
])

.then(ans=>{
    console.clear()
    let result = 
    `
    --------------------------------------
    Nama lengkap            :   ${ans.fullname}
    Tempat tanggal lahir    :   ${ans.ttl}
    NO KTP                  :   ${ans.ktp}
    Telp                    :   ${ans.phone}
    Alamat                  :   ${ans.address}
    Status                  :   ${ans.status}
    --------------------------------------
    `

    //buat nama file
    let fileName = ans.fullname

    //menulis data result kedalan file txt
    fs.writeFileSync(`./storage/${ fileName}.txt`, result, 'utf-8')

    //tampilkan ke console result
    console.log(result)
})