const cenario1 = [0, 0, 1, 0, 0, 1, 0];
const cenario2 = [0, 0, 0, 0, 1, 0];


const jumpingOnClouds = c => {
    let jumps = 0;
    let i = 0;

    while(i < c.length - 1){
        if((i + 2 < c.length) && c[i + 2] == 0){
            i +=2;
            console.log("Pulou 2 nuvens", jumps);
        }else{
            i++;
            console.log("Pulou 1 nuvem", jumps);
        }
        jumps++;
    }

    return jumps;
}

jumpingOnClouds(cenario1);
//c representa o cenario, mantenha o nome pra eu poder testar no hackerrank :D