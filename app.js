const quiz = [
    {
        question: 'ゲーム市場最も売れたゲーム機は次の内どれ？',
        answers: [
          'スーパーファミコン',
          'プレイステーション2', 
          'ニンテンドースイッチ', 
          'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    },{
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
          'MOTHER2',
          'スーパーマリオブラザーズ3', 
          'スーパードンキーコング', 
          '星のカービィ'
        ],
        correct: 'MOTHER2'
    },{
        question: 'ファイナルファンタジーIVの主人公の名前は？',
        answers: [
          'フリオニール',
          'クラウド', 
          'ディーダ', 
          'セシル'
        ],
        correct: 'セシル'
    }
];

const quizLength = quiz.length;
console.log(quiz.length);
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByClassName('quiz-btn');  // ボタンタグを$buttonとする
const buttonLength = $button.length; // buttonの数をbuttonLengthとする(0,1,2,3の4つ)

console.log(buttonLength);
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
    }   
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;
    console.log(quizIndex);

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
        if (score === quizLength) {
            window.alert("全問正解おめでとう！\n参考にした動画ページに移動します。\nつくってみてね！")
            location.href = "https://www.youtube.com/watch?v=fAluwAmHrws";
        }
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    console.log(handlerIndex); // 0,1,2,3
    handlerIndex++;
}

document.getElementById("source").addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=fAluwAmHrws');
});