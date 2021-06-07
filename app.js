let main = document.getElementById("main");
let radio = document.getElementById("darkMode");
let switchMode = document.getElementById("switch");
let text = document.getElementById("text");

// ----cheking dark mode or light mode
let isDark = false;

radio.addEventListener("click", changeMode);

function changeMode() {
  isDark = !isDark;
  if (isDark) {
    localStorage.setItem("darkMode", isDark);
    main.classList.add("darkMode");
    switchMode.innerText = "Dark Mode";
    console.log(isDark);
  } else {
    localStorage.setItem("darkMode", isDark);
    main.classList.remove("darkMode");
    switchMode.innerText = "Light Mode";
    console.log(isDark);
  }
}

function checkLocalStorage() {
  if (localStorage.getItem("darkMode")) {
    main.classList.add("darkMode");
    switchMode.innerText = "dark Mode";
  } else {
    main.classList.remove("darkMode");
    switchMode.innerText = "light Mode";
  }
}
text.innerText = ` " zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvkمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";"v"kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیfhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";"v"kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";"v"kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";" "kjefhbdgjk selkjbd
zv;idsfazlnxcv,mzv dfkjvnaefjknvjflnvjldfn vkj dfnjkvndf kjadv kdfjs
vljsdfa lدگیبنتد نیبت دنیب دنت یبنت یبنبینتدریسمدرنیتبردتمیر دمتسیبر
دنیبت دن،یبتردنتیبدمتبیردنردمتقدرمشینردمتشقدرنتبریدگدسی؛b s;ekbv
s;ebv;kaerjbv;aekrbf;kerbvk;erb";"v"`;
