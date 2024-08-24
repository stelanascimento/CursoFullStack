const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7";


const linhas = input.trim().split("\n");
const n = parseInt(linhas[0],10);


let coordenadas =[];
let maiorDistancia = 0.00;


for( let i = 1; i< linhas.length;i++){
    const coord = linhas[i].split(" ");

        coordenadas.push({
        x: parseFloat(coord[0],10),
        y: parseFloat(coord[1],10)
    })
    console.log(coordenadas);
}
for(let vetor1 of coordenadas){
    for(let vetor2 of coordenadas){
        let distancia = Math.sqrt((Math.pow((vetor2.x - vetor1.x),2)) + (Math.pow((vetor2.y - vetor1.y),2)));
        // console.log(vetor2.x,vetor1.x,vetor2.y,vetor1.y);

        if(distancia > maiorDistancia){
            maiorDistancia = distancia;
        }
    }
}

console.log(maiorDistancia);