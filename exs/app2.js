'use strict'

function mostrarResultado (){
        const difForm = document.getElementById('dif-form')
        const valor1 = parseFloat(document.getElementById('n1').value)
        const resultado = document.getElementById('result')
        
        if (difForm.reportValidity()){
        const negativo = (valor1 * -1)
        let saida = ''

                if(valor1 < 0){
                saida = negativo        
                }
                else{
                 saida = valor1
                }
        

        resultado.textContent = `${saida}`

        }
                
        }

document.getElementById('calcular').addEventListener('click', mostrarResultado)

