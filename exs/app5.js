'use strict'

function mostrarResultado (){
        const maiorForm = document.getElementById('maior-form')
        const valor1 = parseFloat(document.getElementById('n1').value)
        const valor2 = parseFloat(document.getElementById('n2').value)
        const valor3 = parseFloat(document.getElementById('n3').value)
        const valor4 = parseFloat(document.getElementById('n4').value)
        const valor5 = parseFloat(document.getElementById('n5').value)
        const resultado = document.getElementById('result')
        
        if (maiorForm.reportValidity()){
            
            let max = Math.max(valor1, valor2, valor3, valor4, valor5);
            let min = Math.min(valor1, valor2, valor3, valor4, valor5);
            
       
            resultado.textContent = 'Dos valores ' + valor1 + ', ' + valor2 + ', ' + valor3 + ', ' + valor4 + ' e '+ valor5 + '.'
            resultado.textContent += ' O maior é: ' + max + '.' + ' E o menor é: ' + min + '.';

        }
                
        }

document.getElementById('calcular').addEventListener('click', mostrarResultado)

