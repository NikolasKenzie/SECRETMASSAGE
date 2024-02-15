const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
var pesan = document.querySelector('.pesan')

page1.onclick = function () {
    this.style.width = '0%';
    this.style.transition = '1700ms';
    pesan.style.display = 'none'
    
    setTimeout(() => {
        page2.style.display = 'block';
        page1.style.display = 'block';
    }, 1700);
    setTimeout(() => {
        page2.style.marginTop = '-40px'
        page2.style.transition = '900ms all'
    }, 1799);
};

var button = document.querySelector('.button');
var tidakSesuai = document.querySelector('.tidak-sesuai');


function tanggalSesuai() {
    var inputData = document.querySelector('.inputDate').value;
    var part = inputData.split('-');
    var day = parseInt(part[2]);
    var month = parseInt(part[1]);
    var year = parseInt(part[0]);

    if (day !== 16 || month !== 2 || year !== 2024) {
        tidakSesuai.style.display = 'block';
    } else {
        page2.style.display = 'none'

        setTimeout(() => {
            page3.style.display = 'block'
            page3.style.marginTop = '0'
            
        }, 1200);
        setTimeout(() => {
            anywhere.style.display = 'block'
        }, 1700);
    }
}

button.onclick = tanggalSesuai;

var page3 = document.querySelector('.page3')
var hariApa = document.querySelector('.hariApa')
var oiya = document.querySelector('.oiya')
var anywhere = document.querySelector('.anywhere')
var hbd = document.querySelector('.hbd')


var clickedCount = 0; // Menyimpan jumlah klik
var page4 = document.querySelector('.page4')
var animationLettters = document.querySelector('.container-hbd')
anywhere.onclick = function() {
    clickedCount++; 
    if (clickedCount === 1) { 
        hariApa.style.opacity = '0';
        hariApa.style.transition = 'opacity 1000ms'; 
        setTimeout(() => {
            hariApa.style.display = 'none';
        }, 1000); 
        
        setTimeout(() => {
            oiya.style.opacity = '1';
            oiya.style.transition = 'opacity 1900ms'; 
        }, 1100); 
    } else if (clickedCount === 2) { 
        oiya.style.opacity = '0'; 
        oiya.style.transition = 'opacity 1000ms'; 
        anywhere.style.display = 'none'

        setTimeout(() => {
            page4.style.display = 'block'; 
            
            animationHbd.start(); 
        }, 1000);
        setTimeout(() => {
            animationLettters.style.display = 'block';
        }, 1009);
        setTimeout(() => {
            animationLettters.style.display = 'none'
            hbd.style.display = 'block'
        }, 8000)
    }
};
var animationHbd = {
    start: function() {
        const rows = document.querySelectorAll('.container-hbd .row');
        rows.forEach(row => {
            row.querySelectorAll('h1').forEach((letter, index) => {
                setTimeout(() => {
                    letter.style.color = 'red'; 
                }, index * 1000); 
            });
        });
    }
};






