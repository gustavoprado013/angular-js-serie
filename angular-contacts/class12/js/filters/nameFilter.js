angular.module("listaTelefonica").filter("name", function () {
  return function (input) {
    var listaNome = input.split(" ");

    var listaNomeFormatada = listaNome.map(function (nome) {
      if(/(da|de)/.test(nome)){
        return nome;
      }
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });
    return listaNomeFormatada.join(" ");
  };
});
