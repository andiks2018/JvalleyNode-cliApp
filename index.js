//------------------- SESI 1 -----------------
import inquirer from 'inquirer';
console.log(`
    ===================================
    selamat datang di applikasi saya
    ===================================
`)

inquirer.prompt([
    {
        name : "fullname",
        message : "masukkan nama lengkap kamu : "
    },
    {
        name : 'age',
        message : 'Masukan usia kamu: '
    },
    {
        name : 'married',
        message : 'Apakah kamu sudah menikah ?',
        type : "list",
        choices : ['belum', 'sudah', 'baru mau']
    },
])
.then((ans)=>{
    console.log(`
    --------------------------------
    Nama lengkap    :   ${ans.fullname} 
    Usia            :   ${ans.age}
    Menikah         :   ${ans.married}
    --------------------------------
    `)
})
















//------------------- SESI 1 -----------------
// //manampilkan teks ke console 
// console.clear()
// const data = {
//     username : "andiismail",
//     email : "andi@andi.com",
// }

// console.log(`
//     ===================================
//     selamat datang di applikasi saya
//     ===================================
//     username : ${data.username}
//     --------------------------
//     email : ${data.email}
//     ===================================

// `)