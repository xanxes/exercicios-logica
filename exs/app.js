'use strict'

function mostrarResultado (){
        const difForm = document.getElementById('dif-form')
        const valor1 = parseFloat(document.getElementById('n1').value)
        const valor2 = parseFloat(document.getElementById('n2').value)
        const resultado = document.getElementById('result')
        
        if (difForm.reportValidity()){
        const diferenca1 = (valor1 - valor2)
        const diferenca2 = (valor2 - valor1)
        let saida = '';

        if (valor1 > valor2){
               saida = diferenca1
        }else{
                saida = diferenca2
        }

        resultado.textContent = `A diferença entre ${valor1} e ${valor2} é ${saida}`

        }
                
        }

document.getElementById('calcular').addEventListener('click', mostrarResultado)

