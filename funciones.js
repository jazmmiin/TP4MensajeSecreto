function decodificarMensaje() {
    let mensajeCodificado = document.getElementById("mensajeCodificado").value;

    let trozosCodificados = mensajeCodificado.match(/\(([^)]+)\)/g); //es para que lea si o si lo que esta en parentesis o no lo tomara.

    for (let i = 0; i < trozosCodificados.length; i++) {
        let trozoDecodificado = trozosCodificados[i].slice(1, -1).split('').reverse().join(''); //me devolvera la frase al reves.

        mensajeCodificado = mensajeCodificado.replace(trozosCodificados[i], trozoDecodificado);
    }
    alert("Mensaje decodificado: " + mensajeCodificado);
}