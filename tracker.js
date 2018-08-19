let tracker = () => {
//     let incrementer = document.getElementsByClassName('inc');
//     document.addEventListener("click", ()=>{
//         console.log('clicked');
//     });
//     console.log('inc');
// };

    let min5 = document.getElementById('5-min');
    let counter = document.getElementById('counter');
    let i = 0;
    counter.innerHTML = i;
    min5.addEventListener("click", ()=>{
        i += 5;
        counter.innerHTML = i;
        console.log('clicked');
    });
    console.log('min5');
};

document.addEventListener("DOMContentLoaded", tracker, false);