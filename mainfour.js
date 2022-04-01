//   把一个匿名函数赋值给了 h1 的 onclick 属性
document.querySelector('h1').onclick = function() {
    alert('别戳我，我怕疼。');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/老爷保号2022富到无人知.JPG') {
      myImage.setAttribute('src', 'images/头像.jpg');
    } else {
      myImage.setAttribute('src', 'images/老爷保号2022富到无人知.JPG');
    }
}

// 添加个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('请输入你的名字。');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = '史上最强产品：' + myName;
//   }

// 更新 setUserName() 来检查用户是否输入了 null 或者空名字
  function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '史上最强产品：' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '史上最强产品：' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }