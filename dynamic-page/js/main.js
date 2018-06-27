!(function(){
  let style = `
  /*
  * 这次绘制一个皮卡丘
  * 加点背景色吧
  */
  #pre{
    padding: 20px 10px;
    background: #343436;
    color:#fff;
  }
  /*
  * 接下来做一些代码高亮的部分
  */
  .token.selector{
    color: #a6e22e;
  }
  .token.punctuation{
    color: #f8f8f2;
  }
  .token.property{
    color: #f92672;
  }
  .token.function{
    color: #e6db74;
  }
  /*
  * 处理一下简单的布局
  */
  #code {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFE600;
  }
  #code div.wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 1.786rem;
  }
  /*
  * 开始画可爱的鼻子
  */
  #code .nose {
    width: 0px;
    height: 0px;
    background: none;
    border-radius: 50%;
    border: 10px solid #000;
    border-width: 0.076rem 0.076rem 0.076rem 0.076rem;
    border-color: #000 transparent transparent;
    border-width: 10px 12px;
    border-width: 0.076rem 0.0912rem 0.076rem 0.0912rem;
    position: absolute;
    top: 0.2888rem;
    left: 50%;
    transform: translateX(-50%);
  }
  /*
  * 皮卡丘的大眼睛
  */
  #code .eye {
    width: 0.4788rem;
    height: 0.4788rem;
    position: absolute;
    background: #2e2e2e;
    border-radius: 50%;
    top: 0%;
    border: 3px solid #000;
    border-width: 0.0228rem 0.0228rem 0.0228rem 0.0228rem;
  }
  #code .eye.left {
    right: 50%;
    margin-right: 0.608rem;
  }
  #code .eye.right {
    left: 50%;
    margin-left: 0.608rem;
  }
  /*
  * 加个亮晶晶的眼球
  */
  #code .eye:before {
    content: '';
    width: 0.19rem;
    height: 0.19rem;
    background: #fff;
    border: 3px solid #000;
    border-width: 0.0228rem 0.0228rem 0.0228rem 0.0228rem;
    position: absolute;
    top: 0px;
    left: 0.0456rem;
    border-radius: 50%;
  }
  /*
  * 皮卡丘的红脸颊
  */
  #code .face {
    position: absolute;
    width: 0.6688rem;
    height: 0.6688rem;
    background: #f00;
    border: 3px solid #000;
    border-width: 0.0228rem 0.0228rem 0.0228rem 0.0228rem;
    border-radius: 50%;
    top: 0.836rem;
  }
  #code .face.left {
    right: 50%;
    margin-right: 0.8664rem;
  }
  #code .face.right {
    left: 50%;
    margin-left: 0.8664rem;
  }
  /*
  * 上嘴唇出现啦
  */
  #code .lip-wrapper {
    width: 100%;
    height: 63.5%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
  }
  #code .upperLip {
    position: absolute;
    border: 3px solid #000;
    width: 0.608rem;
    height: 0.228rem;
    top: 0.555rem;
    background: #ffe600;
    border-top: none;
  }
  #code .upperLip.right {
    right: 50%;
    border-bottom-left-radius: 50% 100%;
    border-right: none;
    transform: rotate(-25deg);
  }
  #code .upperLip.left {
    left: 50%;
    border-bottom-right-radius: 50% 100%;
    border-left: none;
    transform: rotate(25deg);
  }
  /*
  * 画下嘴唇
  */
  #code .lowerLip {
    position: absolute;
    background: #9B000A;
    width: 1.7936rem;
    height: 6.08rem;
    border: 3px solid black;
    border-bottom-left-radius: 1.18em 8em;
    border-bottom-right-radius: 1.18em 8em;
    margin-top: -6.37em;
    overflow: hidden;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
  #code .lowerLip:before {
    content: '';
    width: 2.28rem;
    height: 6.08rem;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background: #FF485F;
    position: absolute;
    top: 86%;
    left: 50%;
    transform: translateX(-50%);
  }
  /*
  * 好了，差不多了，喜欢的话可以去我的 github 去之间看源码噻 https://github.com/HappyJeannie/pikachu
  * 欢迎点赞比小心心
  */
  `;
  
  function writeCode(preData,newData,fn){
    let n = 0;
    let t = setInterval(function(){
      n++;
      let str = style.slice(0,n);
      preCode.innerHTML = Prism.highlight(preData + str,Prism.languages.css,'css');
      preStyle.innerHTML = preData + str;
      pre.scrollTop = pre.scrollHeight;
      if(n > style.length){
        clearInterval(t);
      }
    },50)
  }
  writeCode('',style);
}).call()