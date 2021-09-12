const quiz = [
  {question: '人口が１番多い国？',
  answers: [
    '中国',
    'インド',
    'アメリカ',
    'インドネシア'
  ],
  correct: '中国'
  },{
    question: '1日あたりの石油の消費量が１番多い国？',
    answers: [
      '日本',
      '中国',
      'インド',
      'アメリカ'
    ],
    correct: 'アメリカ'
  },{
    question: '二酸化炭素排出量が１番多い国？',
    answers: [
    'インド',
    'アメリカ',
    '中国',
    'ロシア'
    ],
    correct: '中国'
  },{
    question: '平均寿命の１番長い国？',
    answers: [
    'スイス',
    '韓国',
    '日本',
    'スペイン'
    ],
    correct: '日本'
  },{
    question: '米の生産量が１番多い国？',
    answers: [
    '中国',
    'バングラデシュ',
    'インド',
    '日本'
    ],
    correct: '中国'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength ) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了あなたの正解数は' +score + '/' + quizLength + 'です！');
  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
    });
  handlerIndex++;
}
