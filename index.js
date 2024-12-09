window.addEventListener("load", function () {
  // 获取节点
  let header = document.querySelector(".header");
  let headerLis = header.querySelectorAll("li");
  let send = document.querySelector(".send");
  let btn = send.querySelector("button");
  let txt = send.querySelector("textarea");
  let text = send.querySelector(".text");
  let headerMoreList = header.querySelector(".headerMoreList");
  let windowShadow = document.querySelector(".windowShadow");
  let windowShadowSpan = windowShadow.querySelector("span");
  let opened = document.querySelector(".open");
  let close = document.querySelector(".close");
  let headerMoreListAs = headerMoreList.querySelectorAll("a");
  let list = document.querySelector(".list");

  // 添加focus类名
  function onFocus() {
    this.classList.add("focus");
  }
  // 移除focus类名
  function onBlur() {
    this.classList.remove("focus");
  }
  // 获取随机数
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  }

  //获取当前时间
  function getTimer() {
    let timer = new Date();
    let year = timer.getFullYear();
    let month = timer.getMonth() + 1;
    let date = timer.getDate();
    let hours = timer.getHours();
    let minutes = timer.getMinutes();
    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${year}-${month}-${date} ${hours}:${minutes}`;
  }

  // 添加事件，绑定focus类名
  headerLis[2].addEventListener("mouseenter", onFocus);
  headerLis[4].addEventListener("mouseenter", onFocus);
  headerLis[2].addEventListener("mouseleave", onBlur);
  headerLis[4].addEventListener("mouseleave", onBlur);

  // 自定义最新最热数组
  const arrLis = [headerLis[2], headerLis[4]];
  // 改变最新最热字体颜色
  function changeColor() {
    for (let i = 0; i < arrLis.length; i++) {
      arrLis[i].style.color = "#61666d";
    }
    this.style.color = "#18191C";
  }
  // 添加点击事件
  arrLis[0].addEventListener("click", changeColor);
  arrLis[1].addEventListener("click", changeColor);

  // 绑定按钮事件，改变样式
  btn.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#00ADEA";
    this.style.cursor = "pointer";
  });
  btn.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#7fd6f5";
  });
  // 绑定发布按钮点击时间
  btn.addEventListener("click", function (e) {
    // 禁止发布内容为空
    if (txt.value == "") {
      return alert("ni还没有评论");
    }
    // 点击发布后在评论区第一行生成元素
    let newList = document.createElement("div");
    list.insertBefore(newList, list.children[0]);
    newList.innerHTML = `<div class="personOnce">
                            <div class="icon">
                              <img src="" alt="" />
                            </div>
                            <div class="repeatOnce">
                              <div class="info">
                                <div class="id"></div>
                                <div class="level">
                                  <span class="" ></span>
                                </div>
                              </div>
                              <div class="content"></div>
                              <div class="others">
                                <div class="timer"></div>
                                <div class="up">
                                  <span class="iconfont icon-dianzan"></span>
                                </div>
                                <div class="down"><span class="iconfont icon-cai"></span></div>
                                <div class="reply">回复</div>
                                <div>
                                  <span class="iconfont icon-gengduo"></span>
                                  <div class="listMoreList">
                                      <ol>
                                        <li><a href="javascript:;">加入黑名单</a></li>
                                        <li>
                                          <a href="javascript:;">删除</a>
                                          <div class="delete">
                                            <span>删除评论后，评论下所有回复都会被删除是否继续？</span>
                                            <div class="deleteButtonBox">
                                              <button class="deleteOpen">确认</button>
                                              <button class="deleteClose">取消</button>
                                            </div>
                                          </div>
                                        </li>
                                      </ol>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>`;
    // 从data数据中随机获取用户数据，模拟不同人发布留言
    let num = getRandomInt(0, 8);
    let img = list.querySelector("img");
    let id = list.querySelector(".id");
    let level = list.querySelector("span");
    let content = list.querySelector(".content");
    let timer = list.querySelector(".timer");
    img.src = peopleData[num].href;
    id.innerText = peopleData[num].idName;
    level.className = peopleData[num].level;
    content.innerText = txt.value;
    txt.value = "";
    timer.innerText = getTimer();
    this.style.height = "50px";
    txt.style.height = "50px";
    // 动态更改头部总评论数量标识
    headerLis[1].innerText = list.children.length;
    let listMoreList = list.querySelector(".listMoreList");
    let listMoreListAs = listMoreList.querySelectorAll("a");
    // 留言区更多按键控制弹窗的显示与隐藏
    listMoreList.previousElementSibling.addEventListener("click", function () {
      listMoreList.style.display = "block";
    });
    listMoreList.addEventListener("mouseleave", function () {
      this.style.display = "none";
    });

    let deleted = document.querySelector(".delete");
    let deleteOpen = document.querySelector(".deleteOpen");
    let deleteClose = document.querySelector(".deleteClose");
    // 开启加入黑名单弹窗
    listMoreListAs[0].addEventListener("click", function () {
      windowShadowSpan.innerText =
        "拉黑后，将取消我对他的关注禁止该用户与我进行互动。本条评论也会被删除。";
      opened.innerText = "确认拉黑";
      windowShadow.style.display = "block";
      // 点击确认拉黑按钮后执行删除留言功能
      opened.addEventListener("click", function () {
        deleteOpen.click();
        windowShadow.style.display = "none";
      });
    });
    // 开启删除弹窗
    listMoreListAs[1].addEventListener("click", function () {
      deleted.style.display = "block";
    });
    deleteOpen.addEventListener("click", function () {
      // 删除当前点击按钮对应的留言框
      this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    });
    deleteClose.addEventListener("click", function () {
      deleted.style.display = "none";
    });
    // 重复点赞或踩会切换按键状态，并控制点赞与踩不同时出现
    let i = false;
    let j = false;
    let up = list.querySelector(".up");
    let upSpan = up.querySelector("span");
    let down = list.querySelector(".down");
    let downSpan = down.querySelector("span");
    upSpan.addEventListener("click", function () {
      if (!i) {
        downSpan.style.color = "#9499a0";
        this.style.color = "#00adea";
        i = !i;
        j = false;
        console.log(i);
      } else {
        this.style.color = "#9499a0";
        i = !i;
        console.log(i);
      }
    });
    downSpan.addEventListener("click", function () {
      if (!j) {
        upSpan.style.color = "#9499a0";
        this.style.color = "#00adea";
        j = !j;
        i = false;
        console.log(j);
      } else {
        this.style.color = "#9499a0";
        j = !j;
        console.log(j);
      }
    });
  });

  // 绑定输入框事件，改变输入框样式
  text.addEventListener("mouseenter", function () {
    txt.style.backgroundColor = "#fff";
    txt.style.outline = "1px solid #C9CCD0";
  });
  text.addEventListener("mouseleave", function () {
    if (txt !== document.activeElement) {
      txt.style.backgroundColor = "#f1f2f3";
      txt.style.outline = "none";
    }
  });
  // 输入框获取焦点时增加输入框高度
  txt.addEventListener("focus", function () {
    this.style.height = "70px";
    btn.style.height = "70px";
    if (this.value == "") {
      this.style.lineHeight = "50px";
    } else {
      this.style.lineHeight = "14px";
    }
    // 按键输入时，调整字体行高
    this.addEventListener("keydown", function () {
      this.style.lineHeight = "14px";
      this.style.paddingTop = "6px";
    });
  });
  // 输入框失去焦点时，减少输入框高度
  txt.addEventListener("blur", function () {
    this.style.height = "50px";
    btn.style.height = "50px";
    txt.style.backgroundColor = "#f1f2f3";
    txt.style.outline = "none";
    // 若输入框内有内容，不减少输入框高度
    if (this.value == "") {
      this.style.lineHeight = "50px";
      this.style.paddingTop = "0px";
    } else {
      this.style.lineHeight = "14px";
      this.style.height = "70px";
      btn.style.height = "70px";
    }
  });

  // 绑定头部更多按键，控制显示与隐藏
  headerLis[5].addEventListener("click", function () {
    headerMoreList.style.display = "block";
  });
  headerMoreList.addEventListener("mouseleave", function () {
    this.style.display = "none";
  });

  // 开启评论精选弹窗
  headerMoreListAs[0].addEventListener("click", function () {
    windowShadowSpan.innerText =
      "开启精选评论后，所有评论都需经过我的确认后再向所有用户展示。可前往PC端创作中心";
    opened.innerText = "确认开启";
    windowShadow.style.display = "block";
  });
  // 开启关闭评论弹窗
  headerMoreListAs[1].addEventListener("click", function () {
    windowShadowSpan.innerText =
      "关闭评论将会禁止任何人在此评论区发表内容，且已有评论在关闭期间将不可见。";
    opened.innerText = "确认关闭";
    windowShadow.style.display = "block";
  });
  // 开启关闭弹幕弹窗
  headerMoreListAs[2].addEventListener("click", function () {
    windowShadowSpan.innerText =
      "关闭弹幕将会禁止任何人在此视频中发表弹幕，且已有弹幕在关闭期间将不可见。";
    opened.innerText = "确认关闭";
    windowShadow.style.display = "block";
  });

  // 关闭弹窗
  opened.addEventListener("click", function () {
    windowShadow.style.display = "none";
  });
  close.addEventListener("click", function () {
    windowShadow.style.display = "none";
  });
});
