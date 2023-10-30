    // const date = new Date();

    // let year = date.getFullYear(),
    //     month = date.getMonth(), 
    //     dayMonth = date.getDate(), 
    //     hour = date.getHours()
    //     minute = date.getMinutes(), 
    //     second = date.getSeconds(),
    //     day = date.getDay()


    // let months = ["Ocak","Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağusts", "Eylül", "Ekim", "Kasım", "Aralık"]             

    // let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    
    // let result = "${dayMonth}, ${months[month]}"

    // console.log(result)
    // console.log(dayMonth);
    // console.log(months[month]);
    // console.log(year);
    // console.log(days[day]); 
    // console.log(hour);
    // console.log(minute);
    // console.log(second);

    
    // let a = 3;
    // if(a > 2){
    //     console.log("${a}");
    // }


    // const sayName = () => console.log("Merhaba");

   
    // // setInterval(sayName,200)


// var hello = () => {
//     console.log("Hello");
// }

// var setInterval = setInterval(hello, 1000)

// var timeout = setTimeout(() => {
//     clearInterval(setInterval);
//     console.log("setInterval bitti")
// }, 10000)


// setTimeout(() =>{
//     clearTimeout(timeout)
//     console.log("settimeOut bitti, set interval devam ediyor");
// },6000)


// const arrays = ["B", "C", "D", "A"]

// const numbers = [1, 8, 4, 3]

// console.log(numbers.sort((a, b) => b - a))



const languages = ["A", "A", "B", "C", "D", "E", "D", "C"]

const langSet = new Set(languages);

const counts = []

for(let language of langSet){
    const languageFilter = languages.filter(lng => lng === language);
    counts.push({
        language :  language,
        count : languageFilter.length
    })
}

console.log(counts);

