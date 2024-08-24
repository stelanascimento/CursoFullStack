const jogadores =[
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ];

  const caixinhaZero =[];
  const caixinhaUM =[];

  for(let jogador of jogadores){
      if(jogador.jogada === 0){
          caixinhaZero.push(jogador.nome);
      }else{
          caixinhaUM.push(jogador.nome);
      }
  }

  if(caixinhaUM.length === 1){
      console.log(caixinhaUM[0]);
  }else if(caixinhaZero.length === 1){
    console.log(caixinhaZero[0]);
}else{
    console.log("NINGUEM");

}