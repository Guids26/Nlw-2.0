//procurar o botão
document.querySelector("#add-time");
//quando clicar no botão
addEventListener('click', cloneField);
//executar uma ação
function cloneField(){
    //duplicar os dampos. quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    
    //limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input');

    //para cada campo, limpar
    fields.forEach(function(field){
        field.value = "";
    });

    //colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);

}
