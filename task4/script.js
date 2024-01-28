const textField = document.querySelector('#field-default'); 
textField.addEventListener('click', function (event)
 { 
    event.preventDefault(); 
    const text = prompt('Введите текст'); 
    this.textContent = text; 
})