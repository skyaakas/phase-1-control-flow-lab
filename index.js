function scuberGreetingForFeet(a){
  // Write your code here!
let message;
  if (a < 400 ){
  message = 'This one is on me!';
  }
  else if(a>400 && a<2000){
    message = 'That will be twenty bucks.';
  }
  else if(a>2000 && a<2500){
    message = 'I will gladly take your thirty bucks.';
  }
  else if(a>2500){
    message = 'No can do.';
  }
  return message;
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(b){
  // Write your code here!
  let accept = b === 'NYC'? 'Ok, sounds good.': 'No go.';

   return accept;

}

ternaryCheckCity('NYC');


function switchOnCharmFromTip(c){
  // Write your code here!
  let recall;

  switch(c){
    case 'generous':
      recall = 'Thank you so much.';
      break;

    case 'not as generous':
      recall = 'Thank you.';
      break;
    default : 
    recall = 'Bye.';
    break;

  }
  return recall;
}
switchOnCharmFromTip('generous');