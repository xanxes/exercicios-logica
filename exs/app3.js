'use strict'

function mostrarResultado (){
        const mediaForm = document.getElementById('media-form')
        const valor1 = parseFloat(document.getElementById('n1').value)
        const valor2 = parseFloat(document.getElementById('n2').value)
        const valor3 = parseFloat(document.getElementById('n3').value)
        const valor4 = parseFloat(document.getElementById('n4').value)
        const resultado = document.getElementById('result')
        
        if (mediaForm.reportValidity()){
        let calculo = (valor1 + valor2 + valor3 + valor4) / 4
        let saida = ''

                if(calculo >= 5){
                saida = 'APROVADO'     
                }
                else{
                 saida = 'REPROVADO'
                }
        

        resultado.textContent = `O aluno foi ${saida}. Sua média é ${calculo}`

        }
                
        }

document.getElementById('calcular').addEventListener('click', mostrarResultado)

