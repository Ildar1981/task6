const consoleLog = document.querySelector('#consoleLog')

consoleLog.addEventListener('click', () =>{
    alert('Служит для вывода информации в консоль')
})

const alert1 = document.querySelector('#alert')

alert1.addEventListener('click', () =>{
    alert('отображает всплывающее окно сообщением и единственной кнопкой «Ок»')
})

const prompt2 = document.querySelector('#prompt')

prompt2.addEventListener('click', () =>{
    alert('используется для получения данных от пользователя на веб-странице')
})