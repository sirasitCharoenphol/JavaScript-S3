const Status = 700;

switch(Status){
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log('ERROR!');
    default:
        console.log('Unknown status');
}