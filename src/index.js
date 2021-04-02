import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ作成
  const li = document.createElement("li");

  //Div作成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button(戻る)タグ作成
  const backButton = document.createElement("button");
  backButton.innerText = "戻る";
  backButton.addEventListener("click", () => {
    //完了リストから選択されたTodoを削除する
    document.getElementById("complete-list").removeChild(li);
    div.removeChild(backButton);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    document.getElementById("incomplete-list").appendChild(li);
  });

  //button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //完了ボタンが押されたとき
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    document.getElementById("incomplete-list").removeChild(li);
    //完了ボタンと削除ボタンを削除する
    div.removeChild(completeButton);
    div.removeChild(deleteButton);

    //完了リストへの追加
    div.appendChild(backButton);
    document.getElementById("complete-list").appendChild(li);

    // //以下講義内のモノ
    // const addTarget = li;
    // console.log(addTarget);
    // const text = addTarget.firstElementChild.innerText;
    // console.log(text);
  });

  //button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    document.getElementById("incomplete-list").removeChild(li);
  });

  //未完了リストへの追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
