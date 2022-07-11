let  quantidade = 0;

quantidade =prompt("coloque a quantidade de seus alunos");

for (let i = 0; i <= quantidade; i++) {
    if (i ==0){
        console.log(`zero${i}`);
    } else{
        if (i % 2 == 0) {
            console.log("Par", i);
        } else {
            if (i % 2 == 1) {
                console.log("Impar" + i);
            }
        }
    }
} 