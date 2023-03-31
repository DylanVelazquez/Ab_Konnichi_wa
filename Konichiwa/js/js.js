function ConvertirNombre(frase){
    let f = "";
    for(let i = 0; i < frase.length;i++){
        f += frase.charAt(i);
        if(frase.charAt(i) != "a" && frase.charAt(i) != "e" && frase.charAt(i) != "i" && frase.charAt(i) != "o" && frase.charAt(i) != "u" && frase.charAt(i) != "n" && frase.charAt(i+1) != "a" && frase.charAt(i+1) != "e" && frase.charAt(i+1) != "i" && frase.charAt(i+1) != "o" && frase.charAt(i+1) != "u" && frase.charAt(i) != " "){
            f += "u";
        }
    }
return f;
}