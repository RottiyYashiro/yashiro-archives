const quiz = [
    {
        question: '1.次の言語のうち、旧ヤシルムの質問コーナーで寄せられたことのあるものを選んでね☆',
        answers : [
            'イタリア語',
            'スペイン語',
            'ドイツ語',
            'ロシア語'
        ],
        correct : 'イタリア語'
    }, {
        question: '2.次のうち、2021年12月17日に「自分のすごすぎるところ」としてやしろっちが投稿したものでないものを選んでくれよな😎',
        answers : [
            '高い志を持っている',
            '仕事が早い',
            'かわいい',
            'モテる'
        ],
        correct : 'かわいい'
    }, {
        question: '3.トイレに行きたいという質問に対してやしろっちが参考にしてほしいと書いたリンクは次の内どこのものか答えられるかな？😆',
        answers : [
            '内閣府',
            '総務省',
            '経済産業省',
            '厚生労働省'
        ],
        correct : '厚生労働省'
    },{
        question: '4.やしろっちの好きな動物が分かるかなぁ😂',
        answers : [
            'コウモリ',
            'ミシシッピアカミミガメ',
            'パキケファロサウルス',
            'ケンタウロス'
        ],
        correct : 'ミシシッピアカミミガメ'
    },{
        question: '5.質問コーナーにでてきたことのない人物、覚えてるぅ～？',
        answers : [
            '寺田くん',
            '森先生',
            '田中くん',
            '荒木くん'
        ],
        correct : '田中くん'
    },{
        question: '6.やしろっちは鼻血を1年に何回ペースで出すか分かる？まあ分からんかwww',
        answers : [
            '1年に1回',
            '1年に2回',
            '年がら年中',
            '出したことがない'
        ],
        correct : '1年に2回'
    },{
        question: '7.次のうち、「やしろっちの好きな曲や歌」ではないものが分かるほどabirrityを持ち合わせているpelsonいる？w',
        answers : [
            '「バスに乗って」',
            '「朝ご飯」',
            '「鉄道唱歌」',
            '「ぼくときみ」'
        ],
        correct : '「バスに乗って」'
    },{
        question: '8.鯖の塩焼き、さわらの味噌漬け、ブリの照り焼きのうちやしろっちが一番好きなものは？',
        answers : [
            '鯖の塩焼き',
            'さわらの味噌漬け',
            'ブリの照り焼き',
            '全部'
        ],
        correct : '鯖の塩焼き'
    },{
        question: '9.2021年12月9日にやしろっちが暇なときしているゲームとして回答したのは次のうちどれかな( ˘•ω•˘ )',
        answers : [
            'Tetris',
            'Candy Crash Soda Saga',
            'Minesweeper',
            'Microsoft Solitaire Collection'
        ],
        correct : 'Microsoft Solitaire Collection'
    },{
        question: '10.初回の質問コーナーで使った顔文字は次のうちどれ？',
        answers : [
            '(●´ω｀●)',
            '＿(　_´ω`)_ﾍﾟｼｮ',
            '(⋈◍＞◡＜◍)。✧♡',
            '( ˘•ω•˘ )'
        ],
        correct : '(⋈◍＞◡＜◍)。✧♡'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        //ここに命令
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

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
       setupQuiz();

    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの得点は' + score/quizLength*100 + '点です！');
    }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}