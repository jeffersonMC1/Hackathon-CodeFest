mostrarListagem();

async function mostrarListagem() {
    const tbListagem = document.querySelector('#tbListagem');
    tbListagem.innerHTML=`
    <th>Nome</th>
    <th>CPF</th>
    <th>Logradouro</th>
    <th>RG</th>
    <th>Bairro</th>
    <th>Ocupação</th>
    `;
    const response = await fetch("http://127.0.0.1:3333/users");
    const dadosResposta = await response.json();
  
    for(i=0;i<dadosResposta.length;i++) {
      const nome = dadosResposta[i]['nome'];
      const cpf = dadosResposta[i]['cpf'];
      const logradouro = dadosResposta[i]['logradouro'];
      const rg = dadosResposta[i]['rg'];
      const bairro = dadosResposta[i]['bairro'];
      const ocupacao = dadosResposta[i]['ocupacao'];
      
      let linha = document.createElement('tr');

      linha.innerHTML = `
      
      <td>${nome}</td>
      <td>${cpf}</td>
      <td>${logradouro}</td>
      <td>${rg}</td>
      <td>${bairro}</td>
      <td>${ocupacao}</td>    
      `;

      tbListagem.appendChild(linha);
      
  }




  }