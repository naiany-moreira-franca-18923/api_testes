function reajuste(salario){
  if (salario <= 280){
  
  let aumento = salario * 0.2;
  let resultado = salario + aumento;
  console.log("Salário anterior: " + salario);
  console.log("Porcentagem reajuste: 20%");
  console.log("Valor a ser aumentado: " + aumento);
  console.log("Salário atual: " + resultado);
  
  }
  else if(salario >= 280 && salario <= 700){
   
    let aumento = salario * 0.15;
  let resultado = salario + aumento;
  console.log("Salário anterior: " + salario);
  console.log("Porcentagem reajuste: 15%");
  console.log("Valor a ser aumentado: " + aumento);
  console.log("Salário atual: " + resultado);
  
  }else if(salario >= 700 && salario <= 1500){
  
  let aumento = salario * 0.1;
  let resultado = salario + aumento;
  console.log("Salário anterior: " + salario);
  console.log("Porcentagem reajuste: 10%");
  console.log("Valor a ser aumentado: " + aumento);
  console.log("Salário atual: " + resultado);
  
  }else if(salario > 1500){
    
  let aumento = salario * 0.05;
  let resultado = salario + aumento;
  console.log("Salário anterior: " + salario);
  console.log("Porcentagem reajuste: 5%");
  console.log("Valor a ser aumentado: " + aumento);
  console.log("Salário atual: " + resultado);
  
  }else{
    console.log("Algo deu errado!")
  }
    return resultado;
  }
  
  //255.25 - 699.99 - 800.45 - 1300 - 1985.61
  let salario = reajuste(699.99);
  console.log(salario);

  module.exports = reajuste;
