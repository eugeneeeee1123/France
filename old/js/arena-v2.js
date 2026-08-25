/* ==========================================================================
   ARENA V2 — SPORT TERRITORY SWITCHER
   ========================================================================== */

(function () {
  'use strict';

  var territoryData = {
    paris: {
      number: '01',
      eyebrow: 'PARIS · ÎLE-DE-FRANCE',
      title: '世界赛事的首都舞台',
      copy: '法网、巴黎奥运会、法兰西体育场与巴黎俱乐部，把竞技、媒体、时尚和城市品牌放在同一画面中。',
      items: ['Roland-Garros', 'Stade de France', 'Paris 2024']
    },
    alps: {
      number: '02',
      eyebrow: 'ALPES · HAUTE MONTAGNE',
      title: '耐力运动的自然剧场',
      copy: '阿尔卑斯山口让环法自行车赛拥有无法复制的地理戏剧性，也连接滑雪、登山与法国户外文化。',
      items: ['Tour de France', 'Cyclisme', 'Sports d’hiver']
    },
    southwest: {
      number: '03',
      eyebrow: 'SUD-OUEST · TERRE DE RUGBY',
      title: '橄榄球的社会腹地',
      copy: '从图卢兹到波尔多，俱乐部、学校与地方身份共同维持法国最浓厚的橄榄球文化。',
      items: ['Top 14', 'Toulouse', 'Six Nations']
    },
    lemans: {
      number: '04',
      eyebrow: 'LE MANS · SARTHE',
      title: '速度与工程的试验场',
      copy: '勒芒 24 小时把耐力、机械可靠性和汽车工业创新转化为法国最持久的国际赛事资产之一。',
      items: ['24 Heures', 'Endurance', 'Innovation']
    },
    coast: {
      number: '05',
      eyebrow: 'LITTORAL · EAUX FRANÇAISES',
      title: '从大西洋到地中海',
      copy: '帆船、冲浪与水上项目把法国漫长海岸线带入竞技体系，也让体育与度假文化相互强化。',
      items: ['Voile', 'Surf', 'Méditerranée']
    }
  };

  var tabs = document.querySelectorAll('.territory-tab');
  var panel = document.querySelector('[data-territory-panel]');

  if (!tabs.length || !panel) return;

  var number = panel.querySelector('.territory-number');
  var eyebrow = panel.querySelector('[data-territory-eyebrow]');
  var title = panel.querySelector('[data-territory-title]');
  var copy = panel.querySelector('[data-territory-copy]');
  var list = panel.querySelector('[data-territory-list]');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var key = tab.getAttribute('data-territory');
      var data = territoryData[key];
      if (!data) return;

      tabs.forEach(function (item) {
        item.classList.toggle('is-active', item === tab);
      });

      number.textContent = data.number;
      eyebrow.textContent = data.eyebrow;
      title.textContent = data.title;
      copy.textContent = data.copy;
      list.innerHTML = data.items.map(function (item) {
        return '<li>' + item + '</li>';
      }).join('');
    });
  });
})();
