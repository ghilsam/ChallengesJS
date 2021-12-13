//Exercice 1
const bernard = {
    name: "Bernard",
    weight: 78,
    height: 1.69,
  };

  const marcel = {
    name: "Marcel",
    weight: 92,
    height: 1.95,
  };
  
  const bernard2 = {
    name: "Bernard2",
    weight: 95,
    height: 1.88,
  };
  
  const marcel2 = {
    name: "Marcel2",
    weight: 85,
    height: 1.76,
  };
  
  function compareIMC(bernard, marcel) {
    return (
      bernard.weight / (bernard.height * bernard.height) >
      marcel.weight / (marcel.height * marcel.height)
    );
  }
  
  function calculateIMC(person) {
    return person.weight / (person.height * person.height);
  }
  
  let bernardHigherIMC = compareIMC(bernard, marcel);
  
  let bernard2HigherIMC = compareIMC(bernard2, marcel2); 

  console.log(bernardHigherIMC); //true
  console.log(bernard2HigherIMC);//false

  //exercice2
  if (bernardHigherIMC) {
    console.log(`Bernard a un IMC (${calculateIMC(bernard)}) plus élevé que Marcel (${calculateIMC(marcel)})`);
    }
    else {
        console.log(`Marcel a un IMC (${calculateIMC(marcel)}) plus élevé que Bernard (${calculateIMC(bernard)})`);
    }

    if (bernard2HigherIMC) {
        console.log(`Bernard a un IMC (${calculateIMC(bernard2)}) plus élevé que Marcel (${calculateIMC(marcel2)})`);
    }
    else {
        console.log(`Marcel a un IMC (${calculateIMC(marcel2)}) plus élevé que Bernard (${calculateIMC(bernard2)})`);
    };

//Exercice 3

let People = [bernard, marcel, bernard2, marcel2];

People.forEach((person) => {
  imc = calculateIMC(person);
  switch (true) {
    case imc < 20:
      console.log(person.name + ": sous-poids");
      break;
    case imc >= 20 && imc < 25:
      console.log(person.name + ": poids normal");
      break;
    case imc >= 25 && imc < 30:
      console.log(person.name + ": surpoids");
      break;
    case imc >= 30 && imc < 40:
      console.log(person.name + ": obésité");
      break;
    case imc >= 40:
      console.log(person.name + ": obésité importante");
      break;
  }
});