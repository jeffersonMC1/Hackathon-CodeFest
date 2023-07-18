const btEnviar = document.querySelector('#btEnviar');
btEnviar.addEventListener('click', enviarFormulario);
const btConfMoradores = document.querySelector('#confMoradores');

btConfMoradores.addEventListener('click',adicionaCamposMoradores);

function adicionaCamposMoradores() {
    console.log('adicionando...')
    const numeroDeMoradores = document.querySelector('#nroMoradores').value;
    const formMoradores = document.querySelector('#formMoradores');

 
    const txFamilia = document.createElement('h3')
    txFamilia.innerHTML='Identificação da Composição Familiar:'

    formMoradores.appendChild(txFamilia);
    
    for(let i=0; i<numeroDeMoradores; i++) {
        let camposMoradores = document.createElement('div');
        
        const txNome = document.createElement('input');
        txNome.name='txNome';
        txNome.value='';

        const lbNome = document.createElement('label');
        lbNome.innerText='Nome: ';
        lbNome.for = 'txNome';

        const txIdade = document.createElement('input');
        txIdade.name='txIdade';
        txIdade.type='number';
        txIdade.value='';

        const lbIdade = document.createElement('label');
        lbIdade.innerText='Idade: ';
        lbIdade.for = 'txIdade';

        const lbFeminino = document.createElement('label');
        lbFeminino.innerText='Feminino: ';
        lbFeminino.for = 'txGenero';

        const txFeminino = document.createElement('input');
        txFeminino.name='txFeminino';
        txFeminino.type='radio';
        txFeminino.value='Feminino';

        const lbMasculino = document.createElement('label');
        lbMasculino.innerText='Masculino: ';
        lbMasculino.for = 'txGenero';

        const txMasculino= document.createElement('input');
        txMasculino.name='txMasculino';
        txMasculino.type='radio';
        txMasculino.value='Masculino';
     
        const lbOutro= document.createElement('label');
        lbOutro.innerText='Outro: ';
        lbOutro.for = 'txGenero';

        const txOutro= document.createElement('input');
        txOutro.name='txOutro';
        txOutro.type='radio';
        txOutro.value='';
        txOutro.type='text';
        
        const linha = document.createElement("hr");
        linha.style = "margin-top: 20px; margin-bottom: 20px";

        camposMoradores.appendChild(lbNome);
        camposMoradores.appendChild(txNome);
        camposMoradores.appendChild(lbIdade);
        camposMoradores.appendChild(txIdade);
        camposMoradores.appendChild(lbFeminino);
        camposMoradores.appendChild(txFeminino);
        camposMoradores.appendChild(lbMasculino);
        camposMoradores.appendChild(txMasculino);
        camposMoradores.appendChild(lbOutro);
        camposMoradores.appendChild(txOutro);

        camposMoradores.appendChild(linha);

        formMoradores.appendChild(camposMoradores);

    }
}


function enviarFormulario() {

    const txNome = document.querySelector('#txNome').value; //
    const txCpf = document.querySelector('#txCpf').value; //
    const txRg = document.querySelector('#txRg').value; //
    const txBairro = document.querySelector('#txBairro').value; 
    // const emergenciaNao = document.querySelector("#emergenciaNao").checked;
    const txLogradouro = document.querySelector('#txLogradouro').value;
    const txComplemento = document.querySelector('#txComplemento').value;

    const txTelefone = document.querySelector("#tel").value;


    const email = document.querySelector('#txEmail').value;
    const txCep = document.querySelector('#txCep').value;
    const txNumero = document.querySelector('#txNumero').value;
    const txCidade = document.querySelector('#txCidade').value;
    const txUf = document.querySelector('#txUf').value;

    const txOcupacao = document.querySelector('#txOcupacao').value;








    
    // if(emergenciaNao) {
    //   const moradia = false
    // } else {
    //   const moradia = true
    // }


  
    const dadosDoFormulario = {};

    dadosDoFormulario.nome = txNome;
    dadosDoFormulario.logradouro = txLogradouro;
    dadosDoFormulario.cpf = txCpf;
    dadosDoFormulario.rg = txRg;
    dadosDoFormulario.moradia = moradia;
    dadosDoFormulario.bairro = txBairro;
    dadosDoFormulario.email = txEmail;
    dadosDoFormulario.cep = txCep;
    dadosDoFormulario.numero = txNumero;
    dadosDoFormulario.cidade = txCidade;
    dadosDoFormulario.estado = txUf;
    dadosDoFormulario.ocupacao = txOcupacao;
    dadosDoFormulario.telefone = txTelefone;



    //console.log(emergenciaNao)
    enviarJSON(dadosDoFormulario);


}


async function enviarJSON(dados) {
    console.log(JSON.stringify(dados));

    
    try {
      const response = await fetch("http://127.0.0.1:3333/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
    
        body: JSON.stringify(dados)
      });
      
    
      const result = await response.json();

      ticket(result.id, result.telefone)
      
      
    } catch (error) {
      console.error("Erro:", error);
    }

}

function ticket(id, telefone) {
  let telTicket = document.querySelector('#tel');
  let contatoTicket = telTicket.innerText;



  document.location.href = `https://wa.me//55${telefone}?text=Solicitação recebida! Seu ticket é ${id}`
}