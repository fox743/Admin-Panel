let Ad = prompt('Adinizi Qeyd Eleyin');
let sifre = prompt('Sifrenizi Daxil Edin');

let netice;

switch (`${Ad}-${sifre}`) { 
  case 'Huseyn-Seferov':
    netice = 'Admin, Xos Gelmisiniz';
    break;


  case 'Celal-1234':
    netice = 'Celal Bey, Saytimize Xos Gelmisiniz';
    break;
  case 'Nurlan-1234':
    netice = 'Serefsiz Bey, Saytimize Xos Gelmisiniz';
    break;

  case 'Fatime-1234':
    netice = 'Fatime Xanım, Saytımıza Xos Gelmisiniz';
    break;

  case 'Murad-1234':
    netice = 'Murad Bey, Saytımıza Xos Gelmisiniz';
    break;

  case 'Ismayil-1234':
    netice = 'Ismayil Bey, Saytımıza Xos Gelmisiniz';
    break;

  case 'Elmeddin-1234':
    netice = 'Elmeddin Muellim, Saytımıza Xos Gelmisiniz';
    break;

  default:
    netice = 'Istifadeci Adi ve ya Sifre Yanlisdir!';
    break;
}

document.getElementById('registr').innerHTML = netice;
