import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <>
    <div id="mainDiv" className="center">
      <h2>Кулинарный рецепт</h2>
        <blockquote>
        <cite>Я</cite> не сильно буду заморачиваться над рецептом, а просто поюзаю JSX, classNameы, стили и обработчики,
          так как стили в прошлых задачах не трогал. <del>С переменных в коде не ржать!!111</del>
        </blockquote>
        <button onClick={MakeSandwich}>Make a Sandwich!</button>
        <Sandwich/>
    </div>
    </>
  );
}

function MakeSandwich() {

  const result = window.confirm("Are you a vegetarian? There is sausage out bellow!");
  if(result) {
      alert('We make sandwich for you without sausage :)');
      document.getElementById('s').remove();
    }

    document.getElementById('childDiv').style.display = "block";
}

function Sandwich() {

  return(
    <div hidden id="childDiv">
      <div className="sandwichClass">
        <div id="s" className="sausageClass">{sausage}</div>
        <div style={styleButter}>{butter}</div>
        <div className={breadClassName}>{bread}</div>
      </div>
      <h1>Sandwich was made!!!</h1>
    </div>
  )
}

const bread = "bread";
const butter = "buter"; // масло, да
const sausage = "sausage";

const breadClassName = 'breadClass';
const styleButter = {
  backgroundColor: 'whitesmoke',
  fontSize: '12px'
}

export default App;
