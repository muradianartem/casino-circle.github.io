import './App.css';
import { useState } from 'react';

function App() {
  const [spin, setSpin] = useState(0);
  const [isSpinning, setSpining] = useState(false);
  const [className, setClassName] = useState('new-stage-1');

  const handleClick = () => {
    setSpining(true);
    setClassName('new-stage-1-complete')
    setTimeout(() => {
      const newSpin = spin + 1;
      setSpin(newSpin);
      let newClassName = '';
      if (newSpin > 0 ) {
        newClassName += 'new-stage-1 new-stage-1-complete'
      } 
      if(newSpin > 1) {
        newClassName = 'new-stage-1-complete new-stage-2'
      }
  
      setClassName(newClassName)
      setSpining(false)
    }, (spin+4) * 1000)
  }

  return (
    <main class="main" style={{minHeight: '100vh'}}>
	  <div class="main__container" style={{minHeight: '100vh'}}>
		
		<div class="new-wheel main__new-wheel">
		  <div class={`new-wheel__layout ${className} ${isSpinning ? `new-spin-to-stage-${spin === 0 ? 'two': 'three'}` : ''}`}>
			<div class="new-wheel__achievements">
			  <div class={`new-wheel__achievements-bet ${spin !== 0 ? '':'new-hide'}`}>
				<div class="lights-content lights-content_bet">
				  <span class="lights-content__value" data-text="525">525</span>
				  <span class="lights-content__currency">Безкоштовних</span>
				  <span class="lights-content__currency"> спінів </span>
				</div>
			  </div>
			  <div class={`new-wheel__achievements-bonus ${spin > 1 ? '':'new-hide'}`}>
				<div class="lights-content lights-content_bonus">
				  <span class="lights-content__value" data-text="130 000₴">130 000₴</span>
				  <span class="lights-content__currency">БОНУС</span>
				</div>
			  </div>
			</div>
			<div class="new-wheel__spinner">
			  <div class="new-wheel__spinner-img"></div>
			  <div class="new-wheel__spinner-center run-circle"></div>
			</div>
			<div class="new-wheel__win"></div>
			<div class="new-wheel__button-wrapper">
			  <button class="new-wheel__button run-circle" id="run-circle" onClick={handleClick}>
				<div class="new-wheel__button-icon"></div>
				<span class="new-wheel__button-title">Крутити колесо</span>
			  </button>
			</div>
		  </div>
		</div>
	  </div>
	  <div class="coins main__coins">
      <picture class="coins__picture">
        <source srcset="img/coins/coins.png" media="(min-width: 490px)" />
        <img src="img/coins/coins-mobile.png" alt="coins" title="coins" />
      </picture>
	  </div>
	  <div class="newPersons main__new-persons newPersons_left"></div>
	  <div class="newPersons main__new-persons newPersons_right"></div>
	  <div class={`main__modal ${spin>1 ? 'main__modal_show' : ''}`}>
		<div class="modal">
		  <div class={`modal__wrapper ${spin>1 ? 'modal__wrapper_show' : ''}`}>
			<div class="heading">
			  <h1>Реєстрація</h1>
			</div>
			<div class="comp-title__coin">
			<br />
			<p class="comp-title__coin_first aaa">Казино дарує спеціальний бонус на депозит у казино</p>
			</div>
			<header class="header">
			  <div class="header__block">
				<a class="header__link redirectlink" href="undefined">
			
				</a>
			  </div>
			</header>

			<div class="comp-title">
			  <div class="comp-title__bonus">
				<span class="comp-title__bonus_second"> 130 000 </span>
				<span class="comp-title__bonus_third">UAH</span>
			  </div>
			  <div class="comp-title__coin">
				<span class="comp-title__coin_first">+525 FREE SPINS</span>
				<a href="https://lyyzf.rdtk.io/click"><button class="submit-btn" type="button">Забрати бонус</button></a>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</main>
  );
}

export default App;
