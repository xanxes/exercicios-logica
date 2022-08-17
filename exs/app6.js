'use strict'

function mostrarResultado (){
        const sexoForm = document.getElementById('sexo-form')
        const nome = document.getElementById('nome').value
        const sexo = document.getElementById('sexo').value.toUpperCase()
        const resultado = document.getElementById('result')
        
        if (sexoForm.reportValidity()){
        let saida = ''

                if (sexo != 'MASCULINO' || sexo != 'FEMININO' )
                saida = 'Esse sexo não existe'
  
                if(sexo == 'MASCULINO'){
                saida = `Olá, Sr ${nome}.`
                }
                else if(sexo == 'FEMININO')
                saida = `Olá, Sra ${nome}.`

            resultado.textContent = `${saida}`
                
        }
    }
document.getElementById('calcular').addEventListener('click', mostrarResultado)
    
