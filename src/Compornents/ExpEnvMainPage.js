import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/ExpEnvMainPage.css';
import exp_1 from '../photo/exp_img_1.png';
import exp_2 from '../photo/exp_img_2.png';
import exp_3 from '../photo/exp_img_3.png';
const ExpEnvMainPage = (props) => {
  const handlePageChange = (stage,breakTime,expTime) => {
    props.history.push({pathname: '/expEnvPage', state: { test: stage ,breakTime: breakTime, expTime:expTime}})
  };
  return (
    <div className="Container">
        <div className="exp_explain_wrapper">
            <p className="exp_explain_title">実験の説明</p>
            <p className='exp_explain'>実験にご参加いただきありがとうございます</p>
            <p className='exp_explain'>本実験では以下のような画面を見ながらアイデアを考えてもらいます</p>
            <p className='exp_explain'>それぞれの画面の説明は以下になります。</p>
            <figure>
              <img className='exp_image'src={exp_1} alt="スタート画面"></img>
              <figcaption>スタート画面</figcaption>
            </figure>
            <p className='exp_explain'>この画面は待機画面です。STARTを押すと、3秒間のカウントの後、テストが開始されます。</p>
            <figure>
              <img className='exp_image' src={exp_2} alt="刺激表示画面"></img>
              <figcaption>刺激表示画面</figcaption>
            </figure>
            <p className='exp_explain'>この画面では、基本的に簡単な「物体」の文字とそれに対する意味的に遠方の刺激(刺激がないパターンも存在します)が表示されます。「物体」について<span className='bold'>「新しい使い方」</span>を考えていただきます。</p>
            <figure>
              <img className='exp_image' src={exp_3} alt="休憩画面"></img>
              <figcaption>休憩画面</figcaption>
            </figure>
            <p className='exp_explain'>この画面は休憩画面です。10秒間休憩していただきます。前の刺激で出しきれなかったアイデアはここで発言してください</p>
            <p className='exp_explain'>問題の回答の例としては、「電池」というものに対して以下のような使い方を考えることができます。</p>
            <ol className='exp_list'>
                <li className='exp_list_child'>
                  転がして遊ぶ
                </li>
                <li className='exp_list_child'>
                  いっぱい集めて袋の中に入れて人を殴る道具にする
                </li>
                <li className='exp_list_child'>
                  筒に入れて吹き矢にする
                </li>
            </ol>
            <p className='exp_explain bold'>実験では、なるべく創造的なアイデアを出してください。思いつかない場合は上記のようなくだらないアイデアでも一向に構いません。また、実現の可能性や倫理観などは気にせず、自由に考えてください</p>
            <p className='exp_explain'>また、今回の評価では<span className='bold'>数と質</span>を見るため、質の良いものを出しながら数もこなすように、バランス良く考えることがベストとなります。</p>
            <p className='exp_explain'>アイデアは口に出し発言してもらいます。なお、記録の関係上、被験者の顔、声、操作画面を記録させていただきます。ご了承ください</p>
            <p className='exp_explain'>実験時間は30秒を一つの試行とし、それを20回繰り返すものを6回行ってもらいます。20回ごとに休憩を5分間行います</p>
            <p className='exp_explain'>まずはテストで一度やってみてください(テストでは時間を短縮しています)</p>
            <button className='exp_start_button' onClick={() => handlePageChange(true,5,10)}>
                <span className='exp_start_button_text'>テストをする</span>
            </button>
            <button className='exp_start_button' onClick={() => handlePageChange(false,10,30)}>
                <span className='exp_start_button_text'>実験を始める</span>
            </button>
          　
        </div>
        <button  className='' onClick={() => handlePageChange(false,1,2)}>デバッグ用</button>
    </div>
  );
};

export default withRouter(ExpEnvMainPage);
