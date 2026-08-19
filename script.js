
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Noto Sans TC"', 'sans-serif'],
            mono: ['"Space Grotesk"', 'monospace'],
          },
          colors: {
            luxury: {
              bg:          '#0A0A0C',
              card:        '#131316',
              surface:     '#1A1A1E',
              border:      '#252528',
              accent:      '#D4AF37',
              accentLight: '#F3E5AB',
              accentDim:   'rgba(212,175,55,0.12)',
              danger:      '#EF4444',
              info:        '#60A5FA',
              success:     '#4ADE80',
            }
          },
          fontSize: {
            'xxs': ['11px', { lineHeight: '1.5' }],
          }
        }
      }
    }
  </script>
  <style>
    /* ?? Base ?? */
    body {
      background-color: #0A0A0C;
      background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 0);
      background-size: 28px 28px;
      font-size: 17px;          /* ?亙之?潮?閮哨?撟湧蝯?梯??渲???*/
      line-height: 1.75;
    }
    /* 銝剜?摮?皜??*/
    * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; }
    ::selection { background: #D4AF37; color: #0A0A0C; }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0A0A0C; }
    ::-webkit-scrollbar-thumb { background: #2a2a2e; border-radius: 99px; }

    /* ?? Accordion ?? */
    .acc-body { display:none; }
    .acc-item.open .acc-body { display:block; }
    .acc-item.open .acc-chevron { transform: rotate(180deg); }
    .acc-chevron { transition: transform 180ms ease-out; }

    /* ?? Step cards ?? */
    .step-body { display:none; }
    .step-card.open .step-body { display:block; }
    .step-card.open .step-chevron { transform: rotate(180deg); }
    .step-chevron { transition: transform 180ms ease-out; }

    /* ?? Wizard ?? */
    .wiz-q { display:none; }
    .wiz-q.active { display:block; }
    .mode-view { display:none; }
    .mode-view.active { display:block; }

    /* ?? Tab active ?? */
    .tab-btn.active { color:#0A0A0C; background-color:#D4AF37; border-color:#D4AF37; }

    /* ?? Fade animation ?? */
    @keyframes fadeUp {
      from { opacity:0; transform: translateY(10px); }
      to   { opacity:1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 220ms ease-out forwards; }

    /* ?? Progress dots ?? */
    .prog-dot { transition: all 180ms ease; }
    .prog-line { transition: background 300ms ease; }

    /* ??????????????????????????????????????
       HIGHLIGHT TOGGLE ???渲死?身閮?
    ?????????????????????????????????????? */
    .hl-toggle-wrap {
      display: flex;
      align-items: stretch;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 10px;
      overflow: hidden;
      width: fit-content;
      margin-bottom: 20px;
    }
    .hl-toggle-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 22px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      background: transparent;
      color: #6b6b72;
      transition: all 180ms ease;
      font-family: 'Noto Sans TC', sans-serif;
      line-height: 1.4;
    }
    .hl-toggle-btn:first-child { border-right: 1px solid rgba(255,255,255,0.1); }
    .hl-toggle-btn.hl-on  { background: rgba(212,175,55,0.15); color: #D4AF37; }
    .hl-toggle-btn.hl-off { background: rgba(255,255,255,0.04); color: #EAEAEC; }
    .hl-dot {
      width: 10px; height: 10px;
      border-radius: 50%;
      background: currentColor;
      opacity: 0.5;
      flex-shrink: 0;
    }
    .hl-toggle-btn.hl-on .hl-dot  { opacity: 1; }
    .hl-toggle-btn.hl-off .hl-dot { background: #4ADE80; opacity: 1; }

    /* Cell highlight states (Minimalist) */
    .diff-ltd  { color: #D4AF37; border-bottom: 1px solid #D4AF37; transition: all 200ms ease; }
    .diff-corp { color: #FFFFFF; border-bottom: 1px solid #FFFFFF; transition: all 200ms ease; }
    .diff-warn { color: #F87171; font-weight: 600; transition: all 200ms ease; }
    .diff-same { opacity: 0.4; transition: all 200ms ease; }

    /* ??????????????????????????????????????
       瘥?銵冽 ???????
    ?????????????????????????????????????? */
    .compare-table { width:100%; border-collapse: collapse; }
    .compare-table th, .compare-table td { padding: 14px 16px; text-align:left; border-bottom: 1px solid rgba(255,255,255,0.06); vertical-align:top; font-size:16px; }
    .compare-table th { font-size:13px; letter-spacing:0.06em; }
    .compare-table tr:last-child td { border-bottom: none; }

    @media (max-width: 767px) {
      /* ?? 銵冽頧???? */
      .compare-table thead { display:none; }
      .compare-table tr { display:block; border: 1px solid rgba(255,255,255,0.08); border-radius:8px; margin-bottom:10px; padding:4px 0; }
      .compare-table td { display:block; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 10px 14px; font-size:15px; }
      .compare-table td:first-child { font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#8A8A90; padding-bottom:4px; border-bottom: none; }
      .compare-table td:last-child { border-bottom: none; }
      
      /* Mobile table headers */
      .compare-table td:nth-child(2)::before {
        content: "?????砍 ??;
        display: block;
        font-size: 11px;
        color: #d4af37; /* luxury accent approx */
        margin-bottom: 4px;
      }
      .compare-table td:nth-child(3)::before {
        content: "???∩遢???砍 ??;
        display: block;
        font-size: 11px;
        color: #8A8A90;
        margin-bottom: 4px;
      }
      /* ?? ?湧? padding ?? */
      .container-inner { padding-left: 16px !important; padding-right: 16px !important; }
      .acc-body { padding: 16px !important; }

      /* ?? 甇仿??∠??????? */
      .step-header-grid { display:flex; flex-direction:column; gap:10px; padding:16px; }
      .step-num-col { display:flex; align-items:center; gap:10px; }

      /* ?? Wizard ?賊? ?? */
      .wiz-opt { padding: 18px 16px !important; }
      .wiz-opt-icon { font-size: 26px !important; }

      /* ?? Header wrapping ?? */
      .header-title-text { font-size: 15px !important; }
    }

    /* ??????????????????????????????????????
       RWD ?典?隤踵嚗?璈霈?嚗?
    ?????????????????????????????????????? */
    @media (max-width: 767px) {
      body { font-size: 16px; }
      h1 { font-size: 1.15rem !important; }
      h2 { font-size: 1.6rem !important; }
      h3 { font-size: 1.35rem !important; }

      /* ?詨璅惜?湔?璆?*/
      select { font-size: 16px !important; padding: 14px 12px !important; }
      label  { font-size: 13px !important; margin-bottom: 6px !important; }

      /* 銝餅??憭?*/
      .btn-main  { padding: 16px 28px !important; font-size: 16px !important; }

      /* Header badge 蝮桀??啣???*/
      .header-badge { font-size: 10px !important; padding: 3px 8px !important; }

      /* Progress dots ?曉之 */
      .prog-dot { width: 36px !important; height: 36px !important; font-size: 14px !important; }

      /* 瘜?璇?蝮格? */
      .law-ref-mono { font-size: 12px !important; min-width: 0 !important; width: 100% !important; }
    }
  </style>
</head>
<body class="text-neutral-200 font-sans min-h-screen flex flex-col">

<!-- ?????????????????????? HEADER ?????????????????????? -->
<header class="sticky top-0 z-50 bg-luxury-bg/90 backdrop-blur-xl border-b border-white/10 px-6 py-4">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    <div class="flex items-center gap-4">
      <span class="font-mono text-xs uppercase tracking-widest text-luxury-accent border border-luxury-accent/30 px-3 py-1 rounded-sm">[ 26/08 ???潸” ]</span>
      <h1 class="text-xl font-bold tracking-tight text-white font-mono">
        ?臬???撣思??? <span class="text-neutral-400 font-normal">// ?砍閮剔??喳撖血?蝟餌絞</span>
      </h1>
    </div>
    <!-- Mode Switcher -->
    <div class="flex gap-2 bg-luxury-surface border border-white/10 p-1 rounded-lg">
      <button id="btn-learn" onclick="switchMode('learn')"
        class="tab-btn active font-mono text-xs tracking-wide px-5 py-2.5 rounded-md border border-transparent transition-all">
        [ ?折摮貊???]
      </button>
      <button id="btn-client" onclick="switchMode('client')"
        class="tab-btn font-mono text-xs tracking-wide px-5 py-2.5 rounded-md border border-transparent text-neutral-400 hover:text-white transition-all">
        [ 摰Ｘ撅內??]
      </button>
    </div>
  </div>
</header>

<!-- ??????????????????????????????????????????????????????
     INTERNAL LEARNING VERSION
?????????????????????????????????????????????????????? -->
<div id="view-learn" class="mode-view active">
<main class="flex-grow max-w-7xl w-full mx-auto px-6 py-12 space-y-14">

  <!-- ?? SECTION 1: ???詨 ?? -->
  <section class="bg-luxury-card border border-white/10 p-8 space-y-6 rounded-sm">
    <div class="border-b border-white/10 pb-5 space-y-2">
      <span class="font-mono text-xs text-luxury-accent uppercase tracking-widest">[ STEP 01 : ??閮剖? / Scenario Setup ]</span>
      <h2 class="text-3xl font-bold text-white">閮剖??摰Ｘ??</h2>
      <p class="text-lg text-neutral-400">?寞?摰Ｘ璇辣嚗頂蝯勗?????撠??身蝡?蝔???隞嗉???唳?閬???/p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 font-mono text-sm">
      <div class="space-y-2">
        <label class="text-xs text-neutral-400 block tracking-widest uppercase">[ 1. ?砍憿? ]</label>
        <select id="sel-type" class="w-full bg-black border border-white/20 text-white text-base p-3 rounded-none focus:border-luxury-accent outline-none cursor-pointer">
          <option value="ltd">???砍嚗?鈭箸?蝡???鞎砌遙嚗?/option>
          <option value="corp">?∩遢???砍嚗?鈭箔誑銝??∩遢?塚?</option>
        </select>
      </div>
      <div class="space-y-2">
        <label class="text-xs text-neutral-400 block tracking-widest uppercase">[ 2. 鞈憿?璅?]</label>
        <select id="sel-capital" class="w-full bg-black border border-white/20 text-white text-base p-3 rounded-none focus:border-luxury-accent outline-none cursor-pointer">
          <option value="under100">100 ?砍?隞乩?嚗?鞈嚗?/option>
          <option value="exactly100" selected>100 ?砍?嚗?皞?蛛?</option>
          <option value="over500">500 ?砍?隞乩?嚗?璅∪?嚗?/option>
        </select>
      </div>
      <div class="space-y-2">
        <label class="text-xs text-neutral-400 block tracking-widest uppercase">[ 3. ?餉??啣? ]</label>
        <select id="sel-addr" class="w-full bg-black border border-white/20 text-white text-base p-3 rounded-none focus:border-luxury-accent outline-none cursor-pointer">
          <option value="home">?芸?/?渡頂閬芸惇?輻嚗?蝘?嚗?/option>
          <option value="rent">憭?颲血摰?摨嚗?蝘?嚗?/option>
          <option value="biz">??銝剖???嚗?敶Ｚ情嚗?/option>
        </select>
      </div>
      <div class="space-y-2">
        <label class="text-xs text-neutral-400 block tracking-widest uppercase">[ 4. 銵平憿 ]</label>
        <select id="sel-industry" class="w-full bg-black border border-white/20 text-white text-base p-3 rounded-none focus:border-luxury-accent outline-none cursor-pointer">
          <option value="general">銝?祆平嚗?閮?“??</option>
          <option value="food">閮勗璆???擗ㄡ嚗???閮勗嚗?/option>
          <option value="finance">閮勗璆?????/靽嚗?蝞⊥?嚗?/option>
          <option value="medical">閮勗璆????怎?/?亙?嚗?蝳嚗?/option>
        </select>
      </div>
    </div>
    <div class="pt-2 flex justify-end">
      <button onclick="generateLearnPlan()"
        class="px-8 py-4 bg-luxury-accent text-slate-950 font-bold font-mono tracking-wider text-base hover:bg-amber-400 transition-all shadow-lg flex items-center gap-2">
        ??瘚???隞嗆??株?瘜?璇?
      </button>
    </div>
  </section>

  <!-- ?? SECTION 2: ????頛詨 ?? -->
  <section id="learn-output">
    <div id="learn-empty" class="text-center py-16 border border-dashed border-white/10 rounded-sm">
      <p class="font-mono text-neutral-500 text-base tracking-widest">??隢?閮剖????嚗?暺?????蝔?/p>
    </div>
    <div id="learn-plan" class="hidden space-y-12"></div>
  </section>

  <!-- ?? SECTION 3: ?剖之鋆??亥?璅∠? ?? -->
  <section class="space-y-6">
    <div class="border-b border-white/10 pb-5 space-y-2">
      <span class="font-mono text-xs text-luxury-accent uppercase tracking-widest">[ Deep Dive : 鋆?摮貊?璅∠? ]</span>
      <h2 class="text-3xl font-bold text-white">?剖之??亥?暺?/h2>
      <p class="text-lg text-neutral-400">摰寞?鋡怎?瞍?瘜?蝝啁???憸券?圈??憓榆?啗圾?????楛摨血飛蝧?/p>
    </div>
    <div class="space-y-3" id="accordion-list">

      <!-- ??MODULE A: ?? vs ?∩遢?? -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">01</div>
            <div>
              <div class="text-xl font-bold text-white">???砍 vs ?∩遢???砍 ???券撌桃撠</div>
              <div class="text-base text-neutral-400 mt-1">??鈭箸???研撖犖?蟡具”瘙箝?霈雁????/div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-5">
          <!-- HL Toggle ???渲死???身閮?-->
          <div class="space-y-3 mb-2">
            <p class="text-base text-neutral-400">暺?銝??嚗銝?萄??＊蝷箸芋撘???啣??唬? Demo ?抵榆?啜?/p>
            <div class="hl-toggle-wrap">
              <button id="hl-btn-off" class="hl-toggle-btn hl-off" onclick="setHighlight(false)">
                甇?虜憿舐內
              </button>
              <button id="hl-btn-on" class="hl-toggle-btn" onclick="setHighlight(true)">
                [ DIFF ] ??撌桃璅
              </button>
            </div>
            <div id="hl-legend" class="hidden flex flex-wrap gap-4 text-sm font-mono mt-1">
              <span class="text-luxury-accent border-b border-luxury-accent pb-0.5">???砍?寞?</span>
              <span class="text-white border-b border-white pb-0.5">?∩遢???砍?寞?</span>
              <span class="text-amber-500/80 font-bold">瘜冽?嚗??嗆?憸券</span>
              <span class="text-neutral-500">?抵??/span>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="compare-table" id="compare-table">
              <thead>
                <tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
                  <th class="font-mono text-neutral-400" style="width:26%">瘥??</th>
                  <th class="text-luxury-accent">???砍</th>
                  <th class="text-white">?∩遢???砍</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-white font-semibold">??鈭箸</td>
                  <td><span class="cmp-ltd">1 鈭箔誑銝??/span></td>
                  <td><span class="cmp-corp">2 鈭箔誑銝???鈭?鈭綽?</span></td>
                </tr>
                <tr>
                  <td class="text-white font-semibold">?雿??祇?</td>
                  <td><span class="cmp-same">?⊥?摰?雿??塚?禮100嚗?/span></td>
                  <td><span class="cmp-same">?⊥?摰?雿???/span></td>
                </tr>
                <tr>
                  <td class="text-white font-semibold">鞈蝜喟??孵?</td>
                  <td><span class="cmp-ltd">?冽銝甈∠像頞?/span></td>
                  <td><span class="cmp-corp">敺?甈∠銵?靽?敶改?</span></td>
                </tr>
                <tr>
                  <td class="text-white font-semibold">???鈭?/td>
                  <td><span class="cmp-ltd">銝?閮剔蔭</span></td>
                  <td><span class="cmp-corp cmp-warn">?喳?閮剔蔭 1 ??瘜?撘瑕嚗?/span></td>
                </tr>
                <tr>
                  <td class="text-white font-semibold">?∠巨?潸?</td>
                  <td><span class="cmp-ltd">銝??潸??∠巨</span></td>
                  <td><span class="cmp-corp">?舐銵蟡?/span></td>
                </tr>
                <tr>
                  <td class="text-white font-semibold">銵冽捱?孵?</td>
                  <td><span class="cmp-ltd">瘥犖銝蟡剁?鈭粹撟喟?嚗?/span></td>
                  <td><span class="cmp-corp">靘隞賣?靘?蝞?/span></td>
                </tr>
                <tr>
                  <td class="text-white font-semibold">?⊥?頧?</td>
                  <td><span class="cmp-ltd cmp-warn">????貉?勗???/span></td>
                  <td><span class="cmp-corp">???航?梯?霈?/span></td>
                </tr>
                <tr>
                  <td class="text-white font-semibold">撟游漲蝬剝??</td>
                  <td><span class="cmp-ltd">頛?嚗撘瑕?⊥??</span></td>
                  <td><span class="cmp-corp cmp-warn">頛?嚗?望?+????僑摨衣儔??</span></td>
                </tr>
                <tr>
                  <td class="text-white font-semibold">?拙???</td>
                  <td class="text-neutral-300">銝鈭箏璆准葉撠?<br>摰嗆?隡平????</td>
                  <td class="text-neutral-300">撘脫?鞈犖?撌亥甈?br>閬?銝?瑹?/td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bg-black/60 p-5 border-l-2 border-luxury-accent text-base text-neutral-300">
            <strong class="text-luxury-accent block font-mono text-sm mb-2">[ 憿批????閰梯? ]</strong>
            ????詨停?振摨剛?頠?憟賡???嚗???隞賣???豢?鞎刻?嚗??賢撥憭找?蝬剝?鞎餌擃??3撟游蝣箏?閬?鞈??血??虜撱箄降?身???砍嚗?敺??港?銝??
          </div>
        </div>
      </div>

      <!-- ??MODULE B: ?餉??啣?銝?憓?-->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">02</div>
            <div>
              <div class="text-xl font-bold text-white">?餉??啣?銝?憓???蝔釵?蝜唾??辣撌桃</div>
              <div class="text-base text-neutral-400 mt-1">?芸???蝝?vs 憭?蝘???像蝢拙? vs ??銝剖????</div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- ??A -->
            <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-3">
              <strong class="text-luxury-accent block font-mono text-sm">[ ?? A ] ?芸? / ?渡頂閬芸惇?輻</strong>
              <p class="text-base text-neutral-300">??蝘?嚗???餈???strong class="text-white">?踹?蝔 + ?踹?雿輻????/strong>嚗蝟餉扛撅祉偷蝵莎???/p>
              <p class="text-base text-neutral-300"><strong class="text-white">?踹?蝔?</strong>?餉?敺??雿振?剁?1.2%嚗??粹?雿振?剁?蝝?~5%嚗?雿銝餃撐?唾??撠蝛?靘?1/6嚗?蝞???蝔??/p>
              <p class="text-base text-neutral-300"><strong class="text-success">???∠??蝜喟儔??/strong>嚗???嚗?8?敺?瘜??拍嚗?/p>
              <p class="text-amber-500/80 text-sm">?? ?蝟餉扛撅穿?憒?撘?憒對?撱箄降?Ⅱ隤?敺?靽?/p>
            </div>
            <!-- ??B -->
            <div class="bg-black/50 p-5 border-l-2 border-amber-900/50 space-y-3">
              <strong class="text-amber-500/80 block font-mono text-sm">[ ?? B ] 憭?颲血摰?/ 摨</strong>
              <p class="text-base text-neutral-300">???<strong class="text-white">蝘?敶望</strong>嚗?蝝???靘?貊閮蝙?剁???strong class="text-white">?踹?蝔</strong>??/p>
              <p class="text-base text-neutral-300"><strong class="text-amber-500/80">??像蝢拙?嚗?/strong>瘥?蝘??蝜?<strong class="text-amber-500/80">10%</strong>嚗?敺?瘜?禮88嚗? <strong class="text-amber-500/80">2.11% 鈭誨?乩?</strong>鋆?靽祥</p>
              <p class="text-base text-neutral-300">?? $30,000 ??瘥?憭蝜?$3,633嚗?梁策隞???/p>
              <p class="text-amber-500/80 text-sm">?? 敹???像撠◤鋆?銝血?蝵堆?擐活瞍像?舐隢???望?蝵?/p>
            </div>
            <!-- ??C -->
            <div class="bg-black/50 p-5 border-l-2 border-luxury-info space-y-3">
              <strong class="text-luxury-info block font-mono text-sm">[ ?? C ] ??銝剖????餉?</strong>
              <p class="text-base text-neutral-300">???<strong class="text-white">??銝剖?蝘?</strong>???葉敹?瑚??踹?蝔?銝餃???隞嗚?/p>
              <p class="text-base text-neutral-300"><strong class="text-white">?祥嚗?/strong>蝝?$500~$3,000/??閬畾蛛?</p>
              <p class="text-base text-neutral-300">??憓?詨?嚗?撠??葉敹??銵?strong class="text-amber-500/80">??像蝢拙?</strong></p>
              <p class="text-stone-400 text-sm">???拙??蝎曇?啣??祕?齒?砍?芸???蝡舐?頛??砍璆剛?/p>
            </div>
          </div>
        </div>
      </div>

      <!-- ??MODULE C: 禮22-1 ?喳 -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">03</div>
            <div>
              <div class="text-xl font-bold text-white">?砍鞎痊鈭箏?銝餉??⊥?喳嚗?2-1嚗?憭批??訾誨颲虫???</div>
              <div class="text-base text-neutral-400 mt-1">瘣?脣瘜?憟?閮剔?敺?5?亙擐活?喳嚗?撟???堆???擃?500 ?祉蔑??/div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="bg-amber-950/30 border border-amber-900/50/30 p-5 text-base text-neutral-300 space-y-2">
            <strong class="text-amber-500/80 block font-mono">??閬???豢???2-1嚗?019撟游?閮?瘣?脣??嚗?/strong>
            <p>閮剔?摰?敺?<strong class="text-white">15 ?亙</strong>?喋?貉?鞎砌犖?蜓閬?梯?閮?勗像?箝?https://ctp.tdcc.com.tw嚗???甈∠?晞?/p>
            <p>蝵啣?嚗?026撟湔??堆?嚗暹??芰????<strong class="text-amber-500/80">NT$5?洗50??/strong>嚗???隞??寞迤 ??<strong class="text-amber-500/80">NT$50?洗500??/strong>嚗?敺誥甇Ｗ?貊閮?/p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-base text-neutral-300">
            <div class="bg-black/60 p-4 border-l-2 border-luxury-accent">
              <strong class="text-luxury-accent block mb-2">?喳撠情</strong>
              繚 ???嚗???貊?⊥嚗?br>
              繚 ???鈭?br>
              繚 ?嚗鞈?嚗?0% 隞乩??⊥<br>
              繚 撖西釭??鈭?
            </div>
            <div class="bg-black/60 p-4 border-l-2 border-luxury-accent">
              <strong class="text-luxury-accent block mb-2">?喳??</strong>
              繚 擐活嚗身蝡? 15 ?亙<br>
              繚 撟游漲嚗?撟?3 ??1?外31??br>
              繚 霈?嚗?? 15 ?亙<br>
              繚 ?亦撟游歇????梯?撟游漲?喳
            </div>
            <div class="bg-black/60 p-4 border-l-2 border-amber-900/50">
              <strong class="text-amber-500/80 block mb-2">撣貉??仃</strong>
              繚 隞?齒?撟思?閮剔?嚗???<br>
              繚 ??隞亦閮剔?摰停瘝?鈭?br>
              繚 敹?瘥僑3?僑摨行??br>
              ??蝝舐?蝵圈擃?500?穿?
            </div>
          </div>
          <div class="bg-black/60 p-5 border-l-2 border-luxury-accent text-base text-neutral-300">
            <strong class="text-luxury-accent block font-mono text-sm mb-2">[ 憿批?閰梯? ]</strong>
            ??貉身蝡???銝??憭誨颲虫???蝢拙???2-1銝餉??⊥?喳???梢?甈∠蔑5?洗50?穿????寞迤蝵?0?洗500?穿????臭誑撱Ｘ迫?餉?嚗??閮剔??嗅予撠勗鼠雿?勗??ｇ?撟游漲?湔銋?雿菜??蕭頩扎?
          </div>
        </div>
      </div>

      <!-- ??MODULE D: ?拙?5??-->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">04</div>
            <div>
              <div class="text-xl font-bold text-white">?拙?5?乓?蝔??餉? ??憭批??訾犖瘛瑟?嚗?/div>
              <div class="text-base text-neutral-400 mt-1">蝡?閮?敺?5?仿身蝡閮?vs 閮剔?摰?敺?蝐閮?摰銝??璇???</div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
            <div class="bg-amber-950/30 border border-amber-900/50/30 p-5 text-neutral-300 space-y-2">
              <strong class="text-amber-500/80 block font-mono">[ 蝚砌???15 ??]嚗??砍?餉?颲行?嚗?/strong>
              <p>蝡?閮?敺????砍嚗? 鞎痊鈭箏停隞餃?嚗隞賣???賂?<br>??15 ?亙?蜓蝞⊥??隢?strong class="text-white">閮剔??餉?</strong></p>
              <p class="text-amber-500/80">?暹?嚗?甈∟?鞎痊鈭?NT$1?洗5?祉蔑?堆??活??蔑</p>
            </div>
            <div class="bg-amber-950/30 border border-amber-900/50/30 p-5 text-neutral-300 space-y-2">
              <strong class="text-amber-500/80 block font-mono">[ 蝚砌???15 ??]嚗?璆剔?瘜?禮28嚗?/strong>
              <p>?砍閮剔??餉??詨?敺?br>??15 ?亙?????撅颲衣?<strong class="text-white">蝔??餉?</strong>嚗?璆剔閮?</p>
              <p class="text-amber-500/80">?暹?嚗?蝔?蝵堆?敶梢蝚砌???望???/p>
            </div>
          </div>
          <div class="bg-black/60 p-5 border-l-2 border-luxury-accent text-base text-neutral-300 space-y-2">
            <strong class="text-luxury-accent block font-mono text-sm mb-2">[ ?潭平蝣箄? ]</strong>
            <p>蝔??餉???蝣箄??臬???蝔平?????噙璆剔?嚗??潛???敶梢?脤?????瘥?嚗?閮????舀?菜???/p>
            <p>蝚砌???梧?閮剔??嗆?韏瑞?嚗???嚗??豢?嚗?梧??隢???梧???桅?頞?????/p>
          </div>
        </div>
      </div>

      <!-- ??MODULE E: 禮9 ?偌撽? -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">05</div>
            <div>
              <div class="text-xl font-bold text-white">鞈?祕????瘞湧?鞈?鞎穿?禮9嚗?蝯??圈</div>
              <div class="text-base text-neutral-400 mt-1">?狡?偌???賡?鞈????擃?撟湔?????+ 蝵圈?250??+ 撱Ｘ迫?餉?</div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="bg-red-950/60 border border-amber-900/50/40 p-5 text-base text-neutral-300 space-y-2">
            <strong class="text-amber-500/80 block font-mono">??豢???嚗?026撟渡銵???</strong>
            <p>?砍?銋甈橘??⊥銝行撖阡?蝜喟?嚗誑?唾??辣銵冽??嗉雲嚗??⊥?歇蝜喟???餉?敺??⊥狡?潮??⊥嚗?隞餌?⊥?嗅???</p>
            <p class="text-amber-500/80 font-bold">???砍鞎痊鈭箏???5 撟港誑銝?????敶寞?蝘?雿萇? NT$50?砌誑銝?250 ?砌誑銝蔑??銝血誥甇Ｗ?貊閮?/p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-base text-neutral-300">
            <div class="bg-black/60 p-4 border-l-2 border-amber-900/50">
              <strong class="text-amber-500/80 block mb-2">[ ?渡?銵 ]</strong>
              繚 ?扛???瘞氬?鞈<br>
              繚 鞈摮敺??餃?粹?甈?br>
              繚 ??鈭箇?摰?鞈??唾???br>
              繚 ?鋆賭?摮狡??
            </div>
            <div class="bg-black/60 p-4 border-l-2 border-luxury-success">
              <strong class="text-stone-400 block mb-2">[ ??鞈靘? ]</strong>
              繚 ?芣?摮狡嚗?銵?撣喟???<br>
              繚 ?箏鞈?敺?br>
              繚 韐?嚗??賊閮?嚗?br>
              繚 ??梁?撖血鞈??
            </div>
            <div class="bg-black/60 p-4 border-l-2 border-luxury-accent">
              <strong class="text-luxury-accent block mb-2">[ 甇?Ⅱ撽?瘚? ]</strong>
              繚 鞈?摮 1~2 ?亙?<br>
              繚 ?唾??銵?甈暸?憿????br>
              繚 ??撣急?詨?瑞偷霅??br>
              繚 15 ?亙?身蝡閮?
            </div>
          </div>
          <div class="bg-black/60 p-5 border-l-2 border-luxury-accent text-base text-neutral-300">
            <strong class="text-luxury-accent block font-mono text-sm mb-2">[ 憿批?閰梯? ]</strong>
            ???祇?銝?敺?嚗?銝摰??舐??撌梁??Ｕ?鈭恥?嗉牧'?????ａ?瘞????舫?敺瑕?憿??臬?鈭痊隞鳴??擃?撟渡??50?祉蔑??撱Ｘ迫?砍?餉?敺??蝔飛?嗚蝣箏?閬?◢?芸?嚗?
          </div>
        </div>
      </div>

      <!-- ??MODULE F: 禮154 ??鞎砌遙 + ?剔忽?Ｙ? -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">06</div>
            <div>
              <div class="text-xl font-bold text-white">禮154 ??鞎砌遙?? vs ?剔忽?砍?Ｙ?</div>
              <div class="text-base text-neutral-400 mt-1">?⊥靽風蝭? vs 瞈怎瘜犖?唬?撠?⊿?皜?鞎砌遙</div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-base text-neutral-300">
            <div class="bg-black/60 p-5 border-l-2 border-luxury-accent space-y-3">
              <strong class="text-white block font-mono">[ 禮154 蝚???] ??鞎砌遙</strong>
              <p>?⊥撠?訾?鞎砌遙嚗誑蝜單??嗉隞賣??箄?憿?憒?00?砍?嚗??<strong class="text-stone-400">銝??犖蝘犖鞎∠</strong>??/p>
              <p>???菜平??憭找?霅瘀??砍??嚗?憭????祇?嚗犖?輻??甈曆??蕭蝝Ｕ?/p>
            </div>
            <div class="bg-black/60 p-5 border-l-2 border-amber-900/50 space-y-3">
              <strong class="text-white block font-mono">[ 禮154 蝚???] ?剔忽?砍?Ｙ?</strong>
              <p>?亥?望翰?典?貊蝡?鈭箏雿??游?豢??摰?＊????閰脰?望?鞎?strong class="text-amber-500/80">?⊿???葆皜?鞎砌遙</strong>??/p>
              <p>???詨???嚗?勗??砍鞈?芯?蝘?蝘????萄???/p>
            </div>
          </div>
          <div class="bg-black/60 p-5 border-l-2 border-luxury-accent text-base text-neutral-300">
            <strong class="text-luxury-accent block font-mono text-sm mb-2">[ 憿批?閰梯? ]</strong>
            ?身蝡?貊??詨?靽風撠望??鞎砌遙??憯???嚗?勗鞈鞈?嚗犖鞎∠銝?敶梢????霅瑟?銝?????砍撣喳?皜??蝘????西◤瘜隤??胯蝛踹?賊蝝?憓???霅瑕停瘨仃鈭?
          </div>
        </div>
      </div>

    </div><!-- end accordion-list -->
  </section>

  <!-- ?? SECTION 4: 撖行 QA 瞍毀憿澈 ?? -->
  <section class="space-y-6">
    <div class="border-b border-white/10 pb-5 space-y-2">
      <span class="font-mono text-xs text-luxury-accent uppercase tracking-widest">[ SECTION 4 : 撖行 QA 瞍毀憿澈 / Roleplay Script ]</span>
      <h2 class="text-3xl font-bold text-white">撣貉?摰Ｘ???“??????</h2>
      <p class="text-lg text-neutral-400">靘??∩??啣祕?唳?蝺湛???撱嗡撓憿?蝔蕙??憟批恥憿?/p>
    </div>
    
    <div class="space-y-4">
      <!-- QA 1 -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">Q1</div>
            <div>
              <div class="text-xl font-bold text-white">??銝剖??交憸券</div>
              <div class="text-base text-neutral-400 mt-1">???瑕?餉??典??葉敹?銝???像蝘???撅??啣?嚗?/div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="bg-black/60 p-5 border-l-2 border-luxury-accent text-base text-neutral-300">
            <strong class="text-luxury-accent block font-mono text-sm mb-2">[ 憿批?擃??店銵?]</strong>
            ??蝔??虜鈭圾??銝剖???雿芋撘???銝剖??祈澈?舫?摨衣恣?嗥??寡迂銵平嚗????ａ?嗆???蝭?隞????賣?銝餃??喳?脤??蝯虫蜓蝞⊥???隞亙閬?餉??典??葉敹???撅銝摰????具??蝜喟?撠??賜?嚗?鈭?蝔?閬?蝵唳趙蝝???????銝??撠望?撟急閮剖?憟質??望?蝔?霈摰?敺??
          </div>
        </div>
      </div>

      <!-- QA 2 -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">Q2</div>
            <div>
              <div class="text-xl font-bold text-white">?潸?菜平???乩??望?</div>
              <div class="text-base text-neutral-400 mt-1">??銝霈?函????仿???菜平嚗??乩?????????桐????典?嚗?/div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="bg-black/60 p-5 border-l-2 border-luxury-accent text-base text-neutral-300">
            <strong class="text-luxury-accent block font-mono text-sm mb-2">[ 憿批?擃??店銵?]</strong>
            ??撠??具?詨???銝??芸?典隞撌乓?嚗?鞎砌犖?臭誑??靽?????蝡?靽雿??函??乩?撠勗隞亦匱蝥雁???詻閬銝蜓?牧嚗??砍?犖鞈頂蝯望?乩??唳?????砍?????血?賊?憪?鈭洵銝雿迤撘撌伐?撠勗????餅?蝡?靽雿?嚗?
          </div>
        </div>
      </div>

      <!-- QA 3 -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">Q3</div>
            <div>
              <div class="text-xl font-bold text-white">蝘犖??勗撣唾蕙??/div>
              <div class="text-base text-neutral-400 mt-1">???砍?末?停?臬隞交?鞎瑁???憌胯振鋆∠?瘞湧鞎餃?冽靘撣單蝔??舐???嚗?/div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="bg-black/60 p-5 border-l-2 border-amber-500/80 text-base text-neutral-300">
            <strong class="text-amber-500/80 block font-mono text-sm mb-2">[ 憿批?擃??店銵?]</strong>
            ??嚗銝??撣詨?芰?撣貉?餈瑟?蝔??湔閬?嚗???平?湔?賊????臬?隤?鞎餌???鞎瑞????振鋆⊥偌?餌瘜???璆剖???嚗?蝔??冽撣單???詨??歹?銝西?瘙?蝜?20% ??蝔??湧????誑蝵圈????????潘?撠望?憒???瘜?????憭批??函??平鞎餌嚗??航??券??粥?芥?
          </div>
        </div>
      </div>

      <!-- QA 4 -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">Q4</div>
            <div>
              <div class="text-xl font-bold text-white">????潛巨</div>
              <div class="text-base text-neutral-400 mt-1">????蝬脫?摰Ｖ犖銝??潛巨嚗銝銋曇?銝?嚗?璆剔?撠像銝暺???/div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="bg-black/60 p-5 border-l-2 border-amber-500/80 text-base text-neutral-300">
            <strong class="text-amber-500/80 block font-mono text-sm mb-2">[ 憿批?擃??店銵?]</strong>
            ??砌??胯?券?瘚?撣賊?嚗雯?像?啁?隞?隞???銵董?嗥??臬甈暸?嚗?蝔???憭扳???亙停銝皜?璆??西◤?亦瞍??潛巨嚗???鋆像 5% ?平蝔????Ｚ?擃?5 ??蝵圈嚗??喳?質◤?誘?平??移??閰脰?冽憭抒??塚????舀?敹?◤??撅?亦?嚗??霅瑞雯隢敹漱蝯行???
          </div>
        </div>
      </div>

      <!-- QA 5 -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">Q5</div>
            <div>
              <div class="text-xl font-bold text-white">蝬脰楝雿隞?齒瘥</div>
              <div class="text-base text-neutral-400 mt-1">???Ｖ誨颲血?貉身蝡閬?3,000 憛??箔?暻潔??????嗉祥瘥?鞎湛???/div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="bg-black/60 p-5 border-l-2 border-luxury-accent text-base text-neutral-300">
            <strong class="text-luxury-accent block font-mono text-sm mb-2">[ 憿批?擃??店銵?]</strong>
            ??嚗??Ｙ?雿隞?齒?虜?芣?鼠敹‵銵券辣??隞???閮湔 15 ?亙瘝辣?◤蝵唳狡???鼠?刻??????閮??銝??刻身蝡?銝餃?餈質馱?函? 禮22-1 CTP ?喳嚗??望?擃蔑 500 ?穿??????銝?桃????輯祥嚗?箸撱箇蔭????瘜???怎??璆剖???鞎渡??舀???憸券嚗漱蝯行????刻???芯???敺???⊥敹????蔑??
          </div>
        </div>
      </div>

      <!-- QA 6 -->
      <div class="acc-item bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-between p-6 cursor-pointer" onclick="toggleAcc(this)">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-white/20 rounded font-mono text-neutral-400 text-sm flex-shrink-0">Q6</div>
            <div>
              <div class="text-xl font-bold text-white">撽?鞈??偌</div>
              <div class="text-base text-neutral-400 mt-1">???曇扛??100 ?祇?鞈?撽?鞈?憭拚收銝??ａ??箔???嚗見蟡??仿狩銝死?改???/div>
            </div>
          </div>
          <svg class="acc-chevron w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="acc-body border-t border-white/10 p-6 space-y-4">
          <div class="bg-black/60 p-5 border-l-2 border-amber-500/80 text-base text-neutral-300">
            <strong class="text-amber-500/80 block font-mono text-sm mb-2">[ 憿批?擃??店銵?]</strong>
            ??嚗停?舀?皞???鞈?撖艾??砍瘜洵 9 璇?嚗??鞎砌遙嚗??西◤?亦嚗?擃? 5 撟湔?????雿萇??擃?250 ?祉蔑?????砍??亥◤撱Ｘ迫?餉?嚗?券?銵??ａ?園?撣詨?潘?憭折?鞈?敹恍脣翰?箔?摰?鋡恍???砌?閬鈭?鞈???銝?蝘?????????憭??隞亙鼠?刻??誑頛????祇???閮剔?嚗?瘜?閬??臭?璆剝銋?閮?
          </div>
        </div>
      </div>

    </div>
  </section>

</main>
</div><!-- end view-learn -->

<!-- ??????????????????????????????????????????????????????
     CLIENT DEMO VERSION
?????????????????????????????????????????????????????? -->
<div id="view-client" class="mode-view">
<main class="flex-grow max-w-4xl w-full mx-auto px-6 py-16">

  <!-- Progress bar -->
  <div class="flex items-center gap-2 mb-14" id="wiz-progress">
    <div class="prog-dot w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm border border-luxury-accent text-luxury-accent" id="d1">1</div>
    <div class="prog-line flex-1 h-px bg-white/10" id="l1"></div>
    <div class="prog-dot w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm border border-white/20 text-neutral-500" id="d2">2</div>
    <div class="prog-line flex-1 h-px bg-white/10" id="l2"></div>
    <div class="prog-dot w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm border border-white/20 text-neutral-500" id="d3">3</div>
    <div class="prog-line flex-1 h-px bg-white/10" id="l3"></div>
    <div class="prog-dot w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm border border-white/20 text-neutral-500" id="d4">4</div>
    <div class="prog-line flex-1 h-px bg-white/10" id="l4"></div>
    <div class="prog-dot w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm border border-white/20 text-neutral-500" id="d5">5</div>
    <div class="prog-line flex-1 h-px bg-white/10" id="l5"></div>
    <div class="prog-dot w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm border border-white/20 text-neutral-500" id="d6">6</div>
  </div>

  <!-- Q1 -->
  <div id="wiz-q1" class="wiz-q active fade-up">
    <div class="font-mono text-sm text-luxury-accent mb-3 tracking-widest uppercase">[ ?? 1 / 6 繚 ??閮 ]</div>
    <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">?芯? 1~3 撟湛??臬??憭?????恬?</h2>
    <p class="text-lg md:text-xl text-neutral-400 mb-8 md:mb-10">??瘙箏??遣霅唳閮剔?雿車蝯???嚗蔣?踵靘甈???敶扼?/p>
    <div class="space-y-4 mb-10">
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(1,'no',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">?桀??∴??刻??蝝?憭亦???/div>
          <div class="text-base text-neutral-400">?脣?芸楛??銝?蝞??脣??典???潸??∪極隤甈?/div>
        </div>
      </button>
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(1,'yes',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">?????芯????脣??冽?鞈犖</div>
          <div class="text-base text-neutral-400">閮撠????銵?亥?撌亥??⊥?嚗?閬????⊥??嗆?閮剛???/div>
        </div>
      </button>
    </div>
    <div class="flex justify-end">
      <button class="px-8 py-4 bg-luxury-accent text-slate-950 font-bold font-mono text-base hover:bg-amber-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="q1-next" disabled onclick="wizNext(2)">銝?甇???/button>
    </div>
  </div>

  <!-- Q2 -->
  <div id="wiz-q2" class="wiz-q hidden">
    <div class="font-mono text-sm text-luxury-accent mb-3 tracking-widest uppercase">[ ?? 2 / 6 繚 ??鞈? ]</div>
    <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">??皞?憭???鞈?嚗??祇?嚗?</h2>
    <p class="text-lg md:text-xl text-neutral-400 mb-8 md:mb-10">敶梢??撣恍?鞈祥?具?鞎鳴?隞亙??銵??嗥??蝔漲??/p>
    <div class="space-y-4 mb-10">
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(2,'under100',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">100 ?砌誑銝?憒?10?洗50?穿?</div>
          <div class="text-base text-neutral-400">頛??Ｙ????芷??臭??雿?摨虫?閮剔?閬祥??/div>
        </div>
      </button>
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(2,'exact100',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">蝝?100 ?祈 500 ??/div>
          <div class="text-base text-neutral-400">銝?祆?菜?皞?璅∴???潭靘隢?撟游璆剛硫甈曄??踹?鋆??/div>
        </div>
      </button>
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(2,'over500',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">500 ?砌誑銝?/div>
          <div class="text-base text-neutral-400">???Ｙ?????孵??寡迂銵平銋??祇??瑼颯?/div>
        </div>
      </button>
    </div>
    <div class="flex justify-between">
      <button class="px-6 py-4 border border-white/20 text-neutral-400 font-mono text-base hover:text-white hover:border-white/40 transition-all" onclick="wizBack(1)">??餈?</button>
      <button class="px-8 py-4 bg-luxury-accent text-slate-950 font-bold font-mono text-base hover:bg-amber-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="q2-next" disabled onclick="wizNext(3)">銝?甇???/button>
    </div>
  </div>

  <!-- Q3 -->
  <div id="wiz-q3" class="wiz-q hidden">
    <div class="font-mono text-sm text-luxury-accent mb-3 tracking-widest uppercase">[ ?? 3 / 6 繚 ?靽???]</div>
    <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">鞎痊鈭箇???靽??雿?</h2>
    <p class="text-lg md:text-xl text-neutral-400 mb-8 md:mb-10">??瘙箏??砍??敺??臬?閬??喟鞎痊鈭箸?蝡?靽雿?/p>
    <div class="space-y-4 mb-10">
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(3,'employed',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">?桀??迤?瘀??典隞?豢?靽?/div>
          <div class="text-base text-neutral-400">?潸?菜平嚗??乩??桀???曇?砍??/div>
        </div>
      </button>
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(3,'fulltime',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">?刻?菜平嚗??典??祆??極??/div>
          <div class="text-base text-neutral-400">?桀?瘝??典隞?豢?靽??典???砌?璆准?/div>
        </div>
      </button>
    </div>
    <div class="flex justify-between">
      <button class="px-6 py-4 border border-white/20 text-neutral-400 font-mono text-base hover:text-white hover:border-white/40 transition-all" onclick="wizBack(2)">??餈?</button>
      <button class="px-8 py-4 bg-luxury-accent text-slate-950 font-bold font-mono text-base hover:bg-amber-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="q3-next" disabled onclick="wizNext(4)">銝?甇???/button>
    </div>
  </div>

  <!-- Q4 -->
  <div id="wiz-q4" class="wiz-q hidden">
    <div class="font-mono text-sm text-luxury-accent mb-3 tracking-widest uppercase">[ ?? 4 / 6 繚 ?餉??啣? ]</div>
    <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">??撠?貊閮?芸?嚗?/h2>
    <p class="text-lg md:text-xl text-neutral-400 mb-8 md:mb-10">?啣??豢?敶梢???辣???函?蝘???像蝔????/p>
    <div class="space-y-4 mb-10">
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(4,'home',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">?芸??蝟餉扛撅祆??/div>
          <div class="text-base text-neutral-400">??蝘???撣貉???????∠??蝜喟儔??/div>
        </div>
      </button>
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(4,'rent',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">憭?颲血摰斗?摨</div>
          <div class="text-base text-neutral-400">???蝘???瘜?撠?勗銵?10% 蝘???像??隞?靽誨???/div>
        </div>
      </button>
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(4,'biz',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">??銝剖????餉?</div>
          <div class="text-base text-neutral-400">敶Ｚ情頛蔔??璅????蝘?銝血銵??蝜喋?/div>
        </div>
      </button>
    </div>
    <div class="flex justify-between">
      <button class="px-6 py-4 border border-white/20 text-neutral-400 font-mono text-base hover:text-white hover:border-white/40 transition-all" onclick="wizBack(3)">??餈?</button>
      <button class="px-8 py-4 bg-luxury-accent text-slate-950 font-bold font-mono text-base hover:bg-amber-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="q4-next" disabled onclick="wizNext(5)">銝?甇???/button>
    </div>
  </div>

  <!-- Q5 -->
  <div id="wiz-q5" class="wiz-q hidden">
    <div class="font-mono text-sm text-luxury-accent mb-3 tracking-widest uppercase">[ ?? 5 / 6 繚 銵平憿? ]</div>
    <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">銝餉?璆剖??批捆?臬?閮梯?璆哨?</h2>
    <p class="text-lg md:text-xl text-neutral-400 mb-8 md:mb-10">?交?寡迂銵平嚗?瘜?????銝餌恣璈?閮勗嚗??質齒??貊閮?禮17嚗?/p>
    <div class="space-y-4 mb-10">
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(5,'general',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">銝?祈?璆?/div>
          <div class="text-base text-neutral-400">鞈?????“?身閮??瑞???鈭?閮勗嚗?亥齒?閮?/div>
        </div>
      </button>
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(5,'special',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">?寡迂銵平</div>
          <div class="text-base text-neutral-400">擗ㄡ(銵?撅)???????恣????憒?銵????遣閮??扳??蝑??閮勗??/div>
        </div>
      </button>
    </div>
    <div class="flex justify-between">
      <button class="px-6 py-4 border border-white/20 text-neutral-400 font-mono text-base hover:text-white hover:border-white/40 transition-all" onclick="wizBack(4)">??餈?</button>
      <button class="px-8 py-4 bg-luxury-accent text-slate-950 font-bold font-mono text-base hover:bg-amber-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="q5-next" disabled onclick="wizNext(6)">銝?甇???/button>
    </div>
  </div>

  <!-- Q6 -->
  <div id="wiz-q6" class="wiz-q hidden">
    <div class="font-mono text-sm text-luxury-accent mb-3 tracking-widest uppercase">[ ?? 6 / 6 繚 ?格?摰Ｙ黎 ]</div>
    <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">?函?銝餉?摰Ｘ?臭?璆剝??臬犖嚗?/h2>
    <p class="text-lg md:text-xl text-neutral-400 mb-8 md:mb-10">?賣??啣?賊?蝡蟡函?撖血?雿平??瘚誨?嗡?撱箄降??/p>
    <div class="space-y-4 mb-10">
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(6,'b2b',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">隡平摰Ｘ?箔蜓 (B2B)</div>
          <div class="text-base text-neutral-400">?虜??銝撘蟡剁?雿輻?銵甈曆??箔蜓閬甈暹撘?/div>
        </div>
      </button>
      <button class="wiz-opt w-full flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-luxury-card border border-white/10 hover:border-white/25 transition-all text-left" onclick="pickWiz(6,'b2c',this)">
        <div>
          <div class="text-lg md:text-xl font-bold text-white mb-1">?犖瘨祥?銝?(B2C)</div>
          <div class="text-base text-neutral-400">???鈭撘蟡冽?撠?餃??潛巨嚗??銝脫蝺?????⊥???/div>
        </div>
      </button>
    </div>
    <div class="flex justify-between">
      <button class="px-6 py-4 border border-white/20 text-neutral-400 font-mono text-base hover:text-white hover:border-white/40 transition-all" onclick="wizBack(5)">??餈?</button>
      <button class="px-8 py-4 bg-luxury-accent text-slate-950 font-bold font-mono text-base hover:bg-amber-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="q6-next" disabled onclick="generateResult()">??撠惇憿批??勗? ??/button>
    </div>
  </div>

  <!-- RESULT -->
  <div id="wiz-result" class="wiz-q hidden space-y-12">
    <!-- Result content injected by JS -->
  </div>

</main>
</div><!-- end view-client -->

<!-- Footer -->
<footer class="border-t border-white/10 py-8 px-6 text-center text-neutral-500 font-mono text-sm">
  ?臬???撣思??? // ?砍閮剔??喳撖血?蝟餌絞 繚 瘜??嚗?026/08 繚 8/28 ???潸”
</footer>


<!-- ??????????????????????????????????????????????????????
     JAVASCRIPT
?????????????????????????????????????????????????????? -->
<script>
// ??? MODE SWITCH ???
function switchMode(m) {
  ['learn','client'].forEach(x => {
    document.getElementById('view-'+x).classList.remove('active');
    const b = document.getElementById('btn-'+x);
    b.classList.remove('active');
    b.classList.add('text-neutral-400');
    b.classList.remove('text-slate-950');
  });
  document.getElementById('view-'+m).classList.add('active');
  const ab = document.getElementById('btn-'+m);
  ab.classList.add('active');
  ab.classList.remove('text-neutral-400');
}

// ??? ACCORDION ???
function toggleAcc(header) {
  const item = header.closest('.acc-item');
  item.classList.toggle('open');
}

// ??? COMPARE DIFF HIGHLIGHT嚗閬粹????????
let diffOn = false;

function setHighlight(on) {
  diffOn = on;

  // ?湔?????
  const btnOff = document.getElementById('hl-btn-off');
  const btnOn  = document.getElementById('hl-btn-on');
  const legend = document.getElementById('hl-legend');

  if (on) {
    btnOff.classList.remove('hl-off');
    btnOn.classList.add('hl-on');
    legend.classList.remove('hidden');
    legend.classList.add('flex');
  } else {
    btnOff.classList.add('hl-off');
    btnOn.classList.remove('hl-on');
    legend.classList.add('hidden');
    legend.classList.remove('flex');
  }

  // 憟 / 蝘駁擃漁
  document.querySelectorAll('.cmp-ltd').forEach(el => {
    const isWarn = el.classList.contains('cmp-warn');
    el.className = 'cmp-ltd' + (isWarn ? ' cmp-warn' : '');
    if (on) el.classList.add(isWarn ? 'diff-warn' : 'diff-ltd');
  });

  document.querySelectorAll('.cmp-corp').forEach(el => {
    const isWarn = el.classList.contains('cmp-warn');
    el.className = 'cmp-corp' + (isWarn ? ' cmp-warn' : '');
    if (on) el.classList.add(isWarn ? 'diff-warn' : 'diff-corp');
  });

  document.querySelectorAll('.cmp-same').forEach(el => {
    el.className = 'cmp-same';
    if (on) el.classList.add('diff-same');
  });
}

// ??? LEARN PLAN GENERATION ???
function generateLearnPlan() {
  const type    = document.getElementById('sel-type').value;
  const capital = document.getElementById('sel-capital').value;
  const addr    = document.getElementById('sel-addr').value;
  const industry= document.getElementById('sel-industry').value;

  const typeLabel    = { ltd:'???砍', corp:'?∩遢???砍' }[type];
  const capitalLabel = { under100:'100?砌誑銝?, exactly100:'100?砍?', over500:'500?砌誑銝? }[capital];
  const addrLabel    = { home:'?芸?/閬芸惇?輻', rent:'憭?颲血摰?, biz:'??銝剖???' }[addr];
  const induLabel    = { general:'銝?祆平', food:'閮勗璆哨?擗ㄡ嚗?, finance:'閮勗璆哨???嚗?, medical:'閮勗璆哨??怎?嚗? }[industry];
  const isSpecial    = industry !== 'general';
  const isLtd        = type === 'ltd';

  // Fee estimate
  const regFee = capital === 'under100' ? '?雿?NT$1,000' : capital === 'exactly100' ? 'NT$2,500嚗?00?珍?/4000嚗? : 'NT$12,500嚗?00?珍?/4000嚗?;

  // Address note
  const addrNote = {
    home: '??蝘??????餈???b>?踹?蝔</b> + <b>?踹?雿輻????/b>嚗蝟餉扛撅祉偷蝵莎???br>?踹?蝔????摰嗥嚗?~5%嚗??舐隢?撠蝛?靘?1/6嚗?雿??箝?br><span class="text-stone-400">???∪????賂??∠??蝜喟儔??/span>',
    rent:  '???b>蝘?敶望</b>嚗?頛?靘?貊閮蝙?剁?+ <b>?踹?蝔</b>??br><span class="text-amber-500/80">??瘥?蝘??蝜?10%嚗?8?敺?瘜?+ 2.11%鈭誨?乩?鋆?靽祥</span>嚗?梁策隞??柴?,
    biz:   '???b>??銝剖?蝘?</b> + ??銝剖???銋?b>?踹?蝔</b>??br>?祥蝝?$500~$3,000嚗移?臬畾菟?敶Ｚ情??br><span class="text-amber-500/80">???見????銝剖?蝘??瑁???像蝢拙?</span>',
  }[addr];

  const out = document.getElementById('learn-plan');
  document.getElementById('learn-empty').classList.add('hidden');
  out.classList.remove('hidden');
  out.innerHTML = `
  <div class="fade-up space-y-12">
    <!-- Header -->
    <div class="border-b border-white/10 pb-6 space-y-2">
      <span class="font-mono text-xs text-luxury-accent uppercase tracking-widest">[ ??蝯? 繚 2026/08 ??唳?閬?]</span>
      <h2 class="text-3xl font-bold text-white">隞?齒隡?獢?${typeLabel} 繚 ${capitalLabel} 繚 ${addrLabel}</h2>
      <p class="text-xl text-neutral-400">銵平憿嚗?{induLabel}???寞??函?????摰瘚?????隞嗉?瘜?璇?</p>
    </div>

    ${isSpecial ? `<div class="bg-black/50 border-l-2 border-amber-900/50 p-6 text-base text-neutral-300">
      <strong class="text-amber-500/80 text-xl block mb-2 font-mono">[ ! ] ?寡迂銵平???內嚗?7嚗?/strong>
      ?函?銵平撅?b>?寡迂銵平嚗?{induLabel}嚗?/b>嚗???豢???7嚗?b class="text-amber-500/80">敹???敺蜓蝞⊥??迂?荔??颲衣??砍閮剔??餉?</b>嚗?敺?閮剔???颲西迂?胯?敺迂?舀?隞嗅?嚗???隞乩?瘚???
    </div>` : ''}

    <!-- PART 1: 閮剔?瘚? -->
    <div class="space-y-6">
      <div class="border-b border-white/10 pb-4 flex justify-between items-center">
        <h3 class="text-3xl font-bold text-white font-mono">蝚砌??典? // ${isLtd ? '??' : '?∩遢??'}?砍閮剔? 6 憭扳?蝔???唳?閬?????/h3>
        <span class="font-mono text-xs text-luxury-accent">[LEGAL PROCESS TIMELINE 繚 2026/08]</span>
      </div>
      <div class="space-y-4" id="steps-container">
        ${buildStep(1, '?迂? 嚗??平??', '?砍瘜?禮18', '蝝?~3撌乩?憭?, `??瞈?平?澆?蝵脩?銝隢?詨?蝔勗????璆剝??乓??詨?敺?敺?b>??詨???/b>嚗Ⅱ蝡?詨?蝔梯?銵平隞?Ⅳ嚗? I301010 鞈?頠??399040 ?餃??Z99999 銝?祆平???祆?甈橘???{isSpecial ? '<br><b class="text-amber-500/80">[ ! ] ?寡迂璆剝???敺迂?舀??舐匱蝥?ZZ99999璁璇狡銝?迂?臭?璆剖???/b>' : ''}`,
          [
            {ref:'?砍瘜?禮18', desc:'?迂?閬?嚗????b>6??</b>嚗???唾?撅?銝甈～遣霅啣????蒲Z99999嚗閮勗璆剖?憭?蝬?瘜誘??甇Ｘ平????},
            {ref:'?砍?迂?撖拇皞? 禮3', desc:'?砍?迂銝????砍?詨?嚗?????唾??亥絲6????}
          ], false)}
        ${buildStep(2, '蝣箄?鞈憿????銵?閮剔???撣單', `?砍瘜?禮${isLtd?'100':'156'} / 禮9`, '蝝?撌乩?憭?, `蝣箏?鞈憿??祆? ${capitalLabel}嚗?鞎痊鈭箸?撣?b>??詨???/b>??霅辣?喲?銵????O${typeLabel}蝐????嗚?{isLtd ? '???砍?⊥靘鞈?靘?訾?甈∪?乓? : '?∩遢???砍???曹??瘥???臬??}<br><b class="text-amber-500/80">[ ! ] 蝯?蝳迫?狡?偌撽?嚗???鞎砌遙嚗?擃?撟湔?????250?祉蔑??撱Ｘ迫?餉?嚗?/b>`,
          [
            {ref:`?砍瘜?禮${isLtd?'100':'156'}`, desc:isLtd ? '???砍鞈蝮賡???⊥?券蝜唾雲嚗?敺???撱ａ?雿??祇??嚗? : '?∩遢???砍?∩遢敺?甈∠銵?閮剔????券?蝜唾雲??},
            {ref:'?砍瘜?禮9', desc:'?渡??偌撽?嚗???5撟港誑銝?????敶寞?蝘?<b class="text-amber-500/80">雿萇?NT$50?砌誑銝?50?砌誑銝蔑??/b>嚗蒂撱Ｘ迫?砍?餉???, warn:true}
          ], false)}
        ${buildStep(3, '??撣怨??祇??交蝪質?嚗?鞈?', '?砍瘜?禮7', '蝝?~2撌乩?憭?, `鞈?摮 1~2 ?亙?嚗??銵隢?b>摮狡擗?霅???/b>??銝行炎???箏蔣?研?貊?蝔??勗璆剜?閮葦?脰??交撽?嚗?瑯?b>鞈憿?貊偷霅?</b>??鞈瘜?<b>??撣怠?撅祆平??/b>嚗?敺誑?嗡??孵??蹂誨??br><b class="text-amber-500/80">[ ! ] 撽?摰?敺?敹???5?亙?辣?唾?閮剔??餉?嚗?貊閮齒瘜?嚗??暹?蝪質?憭望?嚗??撽?嚗?/b>`,
          [
            {ref:'?砍瘜?禮7', desc:'?砍閮剔?銋??祇?嚗?蝬?b>??撣急?貊偷霅?/b>嚗迨?箸?摰?撅祆平??},
            {ref:'?砍?餉?颲行? 禮2', desc:`${isLtd ? "???砍嚗?蝔?蝡?" : "?∩遢???砍嚗?鞎砌犖撠曹遙敺?}15?亙?唾?閮剔??餉?嚗暹?蝵衹T$1?洗5?穿??活??蔑?, warn:true},
            {ref:'??撣急?貊偷霅?貊閮??祇?颲行?', desc:'撽?敺?5?亙?辣嚗暹???撽?嚗?蝪質??勗??詨仃??, warn:true}
          ], false)}
        ${buildStep(4, '?????辣 ???辣?砍閮剔??餉?', '?砍瘜?禮387 / ?砍?餉?颲行?', '蝝?~7撌乩?憭?, `???券?辣嚗?銝餌恣璈?嚗頧??踹???瞈?平?澆?蝵莎??辣?餉???br><b>?祆??啣???嚗?{addrLabel}嚗?</b>${addrNote}`,
          [
            {ref:'?砍瘜?禮387', desc:'?餉??唾?敺?隞餃?撣急???撣怨齒??銝餌恣璈?撠??隢????誨銵典?訾?鞎痊鈭摸T$1?洗5?祉蔑?堆??活??蔑??},
            {ref:'?砍?餉?颲行? 禮5', desc:'閮剔??餉????辣嚗?蝚砌??典?摰皜嚗?},
            {ref:'?砍?餉?颲行? ?”銝', desc:'???砍閮剔??餉??炎?銵剁??怎隢??蝔?勗???鈭?隞餃??嚗??拍嚗?鞈???辣??}
          ], false)}
        ${buildStep(5, '?餃蝡????銵迤撘董??????撅蝔??餉?', '?平蝔? 禮28', '蝝?~3撌乩?憭?, `?砍?詨?敺?<br>??b>?餉ˊ?啁?</b>嚗?詨之蝡??餉?蝡???鞎砌犖撠???b>蝯曹??潛巨撠蝡?/b>嚗??怠?詨?蝔晞絞銝蝺刻???嚗?br>??b>?銵?甇??撣單</b>嚗?閮剔??詨??踝?撠???撣單頧?砍甇??撣單??br>??b>蝔??餉?</b>嚗?頧???撅?唾齒嚗?敺絞銝蝺刻?嚗???b>蝯曹??潛巨鞈潛巨??嚗頃蟡典嚗?/b>敺?舫?蝡蟡冽迤撘?璆准?br><b class="text-amber-500/80">[ ! ] 閮剔?敺?5?亙摰?蝔??餉?嚗?8嚗?甇斤蝚砌?璇???15?交???</b>`,
          [
            {ref:'?澆????澆??平蝔? 禮28', desc:'?砍閮剔?敺?b class="text-amber-500/80">15?亙</b>???典銝餌恣蝔賢噩璈??唾?蝔??餉???},
            {ref:'蝯曹??潛巨雿輻颲行?', desc:'????撅??蝯曹??潛巨鞈潛巨??嚗頃蟡典嚗??頃蟡典?絞銝?潛巨撠蝡隞?暺頃鞎瑞蟡具?},
          ], false)}
        ${buildStep(6, 'CTP銝餉??⊥?喳嚗?2-1嚗? 靘??喳', '?砍瘜?禮22-1', '閮剔?敺颲佗?', `閮剔?摰?敺?b>15?亙</b>嚗??貉?鞎砌犖?蜓閬?梯?閮?勗像?箝?https://ctp.tdcc.com.tw嚗???b>擐活CTP?喳</b>嚗??ａ?嗉?瘙???br>敺?嚗?<b>?格??5?亙?</b>?喳?平蝔????喳?塚???撟?b>5????/b>?喳?鈭平?敺???br><b class="text-amber-500/80">[ ! ] ?芰?授?2-1嚗?甈∠蔑5?洗50?穿??????寞迤蝵?0?洗500?穿?銝?撱Ｘ迫?餉?嚗?2026撟湔??啁蔑??</b>`,
          [
            {ref:'?砍瘜?禮22-1', desc:'閮剔?敺?5?亙擐活?喳嚗?閮??15?亙霈??喳嚗?撟????外31?亙僑摨衣?梧?撌脣?霈??喳??嚗暹?<b class="text-amber-500/80">蝵??洗50?穿??????寞迤蝵?0?洗500?穿?敺誥甇Ｗ?貊閮?/b>??, warn:true},
            {ref:'?澆????澆??平蝔?', desc:'瘥???憟??15?亙??喳蝜喟??平蝔???桅?頞???唾????喳??},
            {ref:'?敺?瘜?禮71', desc:'瘥僑5????曹?銝撟游漲?鈭平?敺???}
          ], false)}
      </div>

      <!-- Summary boxes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div class="bg-luxury-card border border-white/10 p-5 space-y-1">
          <div class="font-mono text-xs text-luxury-accent tracking-widest mb-3">[ ?摯蝮賣?蝔?]</div>
          <p class="text-base text-neutral-300">銝?祆平嚗? <b class="text-white">2~3 ??/b>摰??函?</p>
          <p class="text-base text-neutral-300">閮勗璆哨?閬蜓蝞⊥??迂?荔?<b class="text-amber-500/80">?血? 1~6 ??</b></p>
        </div>
        <div class="bg-luxury-card border border-white/10 p-5 space-y-1">
          <div class="font-mono text-xs text-luxury-accent tracking-widest mb-3">[ ?摯蝮質祥??]</div>
          <p class="text-base text-neutral-300">撽?蝪質?嚗? NT$2,000~$6,000</p>
          <p class="text-base text-neutral-300">閮剔?閬祥嚗?{regFee}</p>
          <p class="text-base text-neutral-300">?啁?鞎鳴?蝝?NT$500~$2,000</p>
        </div>
        <div class="bg-luxury-card border border-white/10 p-5 space-y-1">
          <div class="font-mono text-xs text-amber-500/80 tracking-widest mb-3">[ 擃◢?芸??]</div>
          <p class="text-base text-neutral-300">繚 ?偌撽? ????鞎砌遙</p>
          <p class="text-base text-neutral-300">繚 蝡?敺?5?仿暹??辣</p>
          <p class="text-base text-neutral-300">繚 敹?禮22-1?喳 ???擃?00??/p>
        </div>
      </div>
    </div>

    <!-- PART 2: ???辣Checklist -->
    <div class="bg-luxury-card border border-white/10 p-8 space-y-6">
      <div class="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 class="text-2xl font-bold text-white font-mono">蝚砌??典? // ${typeLabel}閮剔??餉? ???辣摰皜嚗hecklist嚗?/h3>
        <span class="font-mono text-xs text-luxury-accent">[REQUIRED DOCUMENTS 繚 ?砍?餉?颲行? 禮5]</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-neutral-300">
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">??蝔梢??亥?頨怠??辣??/strong>
          <p>??(1) ?砍?迂????璆剝??交摰嚗?8嚗?/p>
          <p>??(2) ?券??⊥頨怠?霅迤?敶望</p>
          ${!isLtd ? '<p>??(3) ???憿遙???賂?瘥?????閬芰偷嚗?/p><p>??(4) ???鈭粹?隞餃??嚗?16嚗隞賣???詨?閬?</p>' : ''}
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">??蝔??⊥?辣??/strong>
          <p>???砍蝡?嚗擃?梁偷????嚗?/p>
          ${isLtd ? '<p>???⊥???賂????砍敹?嚗隞餉鈭?蝡?蝔?嚗?/p>' : '<p>???潸絲鈭箸?霅唬??????萇??降鈭?</p>'}
          <p>??${isLtd ? '???砍閮剔??餉??唾??賂?摰蔡?嗅?銵典嚗? : '?∩遢???砍閮剔??餉??唾???+ 閮剔??餉?銵剁?銝撘?隞踝?'}</p>
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">???祇?撽??辣??/strong>
          <p>??蝐???銵??箏??Ｕ?蝡???憿?敶望嚗?{capitalLabel}嚗?{isLtd?'100':'156'}嚗?/p>
          <p>???銵?甈暸?憿??</p>
          <p>????撣怨??祇??交蝪質??勗??賂?禮7嚗?/p>
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">???典?踹?霅???/strong>
          ${addr === 'home' ? '<p>???餈???b>?踹?蝔</b>敶望</p><p>???踹?雿輻???賂??芣???蝘?嚗?/p>' : addr === 'rent' ? '<p>???餈???b>?踹?蝔</b>敶望</p><p>??<b>?踹?蝘?憟???/b>敶望嚗?87嚗?/p>' : '<p>????銝剖??箏銋?b>?踹?蝔</b>?銝餃???隞?/p><p>????銝剖?<b>蝘?憟???/b>敶望</p>'}
          ${isSpecial ? '<p class="text-amber-500/80">??銝餌恣璈?閮勗?詨??賢蔣?穿??寡迂銵平敹?嚗?7嚗?/p>' : ''}
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">??蝐閮?隞塚?閮剔?敺?5?亙嚗?/strong>
          <p>????撅??璆凋犖閮剔?嚗??湛??餉??唾??詻?/p>
          <p>???砍閮剔??詨??賢蔣??/p>
          <p>??鞎痊鈭箄澈??</p>
          <p>??蝯曹??潛巨撠蝡??餉ˊ敺?撣塚?</p>
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-amber-900/50 space-y-2">
          <strong class="text-amber-500/80 block text-base">?身蝡??齒鈭?嚗?憸券嚗?箸?嚗?/strong>
          <p class="text-amber-500/80">???餉ˊ?砍憭抒???鞎砌犖撠??絞銝?潛巨撠蝡?/p>
          <p class="text-amber-500/80">??禮22-1 CTP銝餉??⊥?喳嚗身蝡?15?亙嚗?/p>
          <p class="text-amber-500/80">??撠???撣單頧?砍甇??撣單</p>
          <p class="text-amber-500/80">????蝯曹??潛巨鞈潛巨??嚗頃蟡典嚗?/p>
        </div>
      </div>
    </div>

    <!-- PART 3: ?詨?瘜?鞎砌遙 -->
    <div class="bg-luxury-card border border-white/10 p-8 space-y-6">
      <div class="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 class="text-2xl font-bold text-white font-mono">蝚砌??典? // ?詨?瘜?鞎砌遙閫??</h3>
        <span class="font-mono text-xs text-amber-500/80">[LEGAL ANALYSIS 繚 2026/08]</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-neutral-300">
        <div class="bg-black/60 p-6 border-l-2 border-luxury-accent space-y-3">
          <strong class="text-white block font-mono text-lg">// ??豢???54嚗??痊隞?vs ?剔忽?Ｙ?嚗?/strong>
          <p>??<b>蝚?????鞎砌遙嚗?</b>?⊥撠?訾?鞎砌遙嚗誑蝜單??嗉隞??箄?憿?${capitalLabel}嚗??<span class="text-stone-400">銝??犖蝘犖鞎∠</span>??/p>
          <p>??<b>蝚????剔忽?砍?Ｙ?嚗?</b>?亥?望翰?典?貊蝡?鈭箏雿?砍皜??孵??萄?憿舀??圈嚗府?⊥??<span class="text-amber-500/80 underline">?⊿???葆皜?鞎砌遙</span>??/p>
        </div>
        <div class="bg-black/60 p-6 border-l-2 border-amber-900/50 space-y-3">
          <strong class="text-white block font-mono text-lg">// ??豢???嚗??砍?撖西?撽?銝祕?痊嚗?/strong>
          <p>??<b>?身鞈憿??狡?偌嚗?/b>?⊥狡?芸祕?像蝝??閮??潮??⊥狡嚗??砍鞎痊鈭?<span class="text-amber-500/80 font-bold">5撟港誑銝?????/span>??敶寞?蝘?<span class="text-amber-500/80 font-bold">雿萇?NT$50?砌誑銝?50?砌誑銝蔑??/span>??/p>
          <p>??<b>撱Ｘ迫?餉?嚗?/b>鋆蝣箏?敺?銝餌恣璈?撠?span class="text-amber-500/80 underline">?日?誥甇Ｗ?貊閮?/span>嚗????隢豢?瘞氬?/p>
        </div>
      </div>
    </div>

    <!-- PART 4: 撠??單 -->
    <div class="bg-luxury-card border border-white/10 p-8 space-y-6">
      <div class="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 class="text-2xl font-bold text-white font-mono">蝚砍??典? // ?犖?曉撠??單嚗璆剛?vs 鈭??嚗?/h3>
        <span class="font-mono text-xs text-luxury-accent">[ROLEPLAY SCRIPT]</span>
      </div>
      <div class="space-y-4 text-lg">
        <div class="bg-neutral-900 p-6 border-l-4 border-stone-700 space-y-2">
          <span class="font-bold text-stone-400 block font-mono text-sm">[ ?菜平??摰Ｘ嚗</span>
          <p>?誨颲虫?憟踝???蝞隢?賂???擃??餃?嚗??祇?皞? ${capitalLabel}嚗閮${addrLabel}??????亦????園敺??撌望?Ｗ?朣?隞園辣?臭誑????/p>
        </div>
        <div class="bg-neutral-900 p-6 border-l-4 border-luxury-accent space-y-2">
          <span class="font-bold text-luxury-accent block font-mono text-sm">[ 鈭??隞?齒嚗??∴?]</span>
          <p>???典末嚗迤?舀?摰寞?頦拚??對?靘???貊閮齒瘜?嚗?{isLtd ? '蝡?閮?敺? : '鞎痊鈭箏停隞餃?'}<strong class="text-amber-500/80">15 ?亙銝摰??蜓蝞⊥??辣?餉?</strong>嚗??鞎痊鈭?NT$1?洗5?祉蔑?唳?甈⊿?蔑?漱蝯行?????嚗??鼠?冽香?舀???敺?閮葦撽?嚗?嚗?貊閮?禮387嚗??撅?頃蟡典嚗??兜?2-1 CTP?喳??蝡???嚗?銝??典?韏唬?甇亙?楝嚗?/p>
        </div>
      </div>
      <div class="bg-black/80 border border-luxury-accent/50 p-6 space-y-3">
        <strong class="text-luxury-accent block font-mono text-base">[ 鈭?? Pitch ?券?銝?唾???]</strong>
        <p class="text-neutral-200 text-xl leading-relaxed">??嚗璆剜?鞎渡??舀????蝜??15 ?交??蝞～?閮葦鞈蝪質?嚗?嚗撅??桀祟?乓?2-1 CTP ?喳隞亙??芯???璆剔????蝔?勗?其漱蝯行?????冽?蝛拙?????冽除??霈撠釣?亙鞈粹嚗?/p>
      </div>
    </div>
  </div>`;

  out.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildStep(num, title, lawRef, time, desc, laws) {
  const lawItems = Array.isArray(laws) ? laws.map(l => `
    <div class="flex gap-4 py-3 border-b border-white/5 last:border-0 text-base">
      <div class="font-mono text-xs text-luxury-info min-w-[180px] pt-0.5 flex-shrink-0">${l.ref}</div>
      <div class="text-neutral-400 leading-relaxed">${l.warn ? `<span class="text-amber-500/80 font-bold">[ ! ] ${l.desc}</span>` : l.desc}</div>
    </div>`).join('') : '';

  return `
  <div class="step-card bg-luxury-card border border-white/10 overflow-hidden rounded-sm">
    <div class="step-header grid grid-cols-1 md:grid-cols-12 gap-5 items-center p-6 cursor-pointer" onclick="this.closest('.step-card').classList.toggle('open'); this.querySelector('.step-chevron').style.transform = this.closest('.step-card').classList.contains('open') ? 'rotate(180deg)' : ''">
      <div class="md:col-span-3 font-mono space-y-1">
        <span class="text-luxury-accent font-bold text-xl">STEP (${num})</span>
        <strong class="text-white block text-xl font-sans">${title}</strong>
        <span class="text-sm text-luxury-info block border border-luxury-info/30 px-2 py-0.5 w-fit">${lawRef}</span>
      </div>
      <div class="md:col-span-7 text-neutral-300 text-base leading-relaxed">
        <div class="font-mono text-xs text-neutral-500 mb-1">?摯??嚗?{time}</div>
        ${desc}
      </div>
      <div class="md:col-span-2 flex justify-end">
        <svg class="step-chevron w-6 h-6 text-neutral-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </div>
    ${lawItems ? `
    <div class="step-body border-t border-white/10">
      <div class="p-6">
        <div class="font-mono text-xs text-luxury-accent tracking-widest mb-3 uppercase">[ 摰瘜?璇? ]</div>
        ${lawItems}
      </div>
    </div>` : ''}
  </div>`;
}

// ??? WIZARD ???
const WIZ = { q1:null, q2:null, q3:null, q4:null, q5:null, q6:null };

function pickWiz(q, val, btn) {
  WIZ['q'+q] = val;
  btn.closest('.space-y-4').querySelectorAll('.wiz-opt').forEach(b => {
    b.classList.remove('border-luxury-accent','bg-luxury-accentDim');
    b.classList.add('border-white/10');
  });
  btn.classList.remove('border-white/10');
  btn.classList.add('border-luxury-accent','bg-luxury-accentDim');
  const nb = document.getElementById('q'+q+'-next');
  if(nb){ nb.disabled = false; }
}

function wizNext(to) {
  for(let i=1;i<=6;i++) {
    document.getElementById('wiz-q'+i).classList.remove('active');
    document.getElementById('wiz-q'+i).classList.add('hidden');
  }
  document.getElementById('wiz-result').classList.remove('active');
  document.getElementById('wiz-result').classList.add('hidden');

  const done = to - 1;
  for(let i=1;i<=done;i++){
    const d = document.getElementById('d'+i);
    d.textContent = '??; d.classList.add('bg-luxury-accent','text-slate-950','border-luxury-accent');
    if(i<6) document.getElementById('l'+i).classList.add('bg-luxury-accent/50');
  }
  document.getElementById('d'+to).classList.add('border-luxury-accent','text-luxury-accent');

  const el = document.getElementById('wiz-q'+to);
  el.classList.remove('hidden'); el.classList.add('active','fade-up');
}

function wizBack(to) {
  for(let i=1;i<=6;i++){
    document.getElementById('wiz-q'+i).classList.remove('active');
    document.getElementById('wiz-q'+i).classList.add('hidden');
  }
  document.getElementById('wiz-result').classList.remove('active');
  document.getElementById('wiz-result').classList.add('hidden');

  for(let i=to+1;i<=6;i++){
    const d=document.getElementById('d'+i);
    d.textContent=i; d.classList.remove('bg-luxury-accent','text-slate-950','border-luxury-accent');
    d.classList.add('border-white/20','text-neutral-500');
    if(i<=6) { const l=document.getElementById('l'+(i-1)); if(l) l.classList.remove('bg-luxury-accent/50'); }
  }
  const el = document.getElementById('wiz-q'+to);
  el.classList.remove('hidden'); el.classList.add('active','fade-up');
}

function generateResult() {
  const {q1,q2,q3,q4,q5,q6} = WIZ;
  // finish dots
  for(let i=1;i<=6;i++){
    const d=document.getElementById('d'+i);
    d.textContent='??; d.classList.add('bg-luxury-accent','text-slate-950','border-luxury-accent');
    d.classList.remove('border-white/20','text-neutral-500','text-luxury-accent');
    if(i<6) document.getElementById('l'+i).classList.add('bg-luxury-accent/50');
  }
  for(let i=1;i<=6;i++){
    document.getElementById('wiz-q'+i).classList.remove('active');
    document.getElementById('wiz-q'+i).classList.add('hidden');
  }

  const isLtd     = q1 === 'no';
  const typeLabel = isLtd ? '???砍' : '?∩遢???砍';
  const addrLabel = {home:'?芸?/閬芸惇?輻', rent:'憭?颲血摰?, biz:'??銝剖???'}[q4];
  const isSpecial = q5 === 'special';
  const capitalLabel = { under100:'100?砌誑銝?, exact100:'100?砍?', over500:'500?砌誑銝? }[q2];

  const addrDesc = {
    home:'??蝘?嚗??餈??撅???+ 雿輻???詻蝘???像蝢拙???,
    rent:'???蝝???????像10%嚗?8嚗? 2.11%鈭誨?乩?鋆?靽祥??,
    biz: '????葉敹?蝝?鞎餌?$500~$3,000??璅???瑁?蝘???像蝢拙???
  }[q4];

  const steps = [
    ...(isSpecial ? [{n:'00', name:'??敺蜓蝞⊥??迂??, desc:'?函?銵平撅祉閮梯?璆哨?靘?豢???7嚗????蜓蝞⊥???敺迂?舀?隞塚???脰??砍閮剔??餉???, law:'?砍瘜?禮17', warn:'?芸?敺迂?臬閮剔?嚗蜓蝞⊥????日?砍?餉???}] : []),
    {n:'01', name:'?砍?迂?', desc:'??蝬??函?銝頂蝯梁隢?蝔勗?銵平隞?Ⅳ?嚗?敺??交摰嚗?????嚗遣霅啣??蒲Z99999璁璇狡??, law:'?砍瘜?禮18'},
    {n:'02', name:`鞈憿???+ ?銵??`, desc:`皞? ${capitalLabel} 鞈?嚗?鞎砌犖?葆??詨??貉?銵?蝡O${typeLabel}蝐??董?塚??⊥?臬?祕鞈???撠?甇Ｗ狡?偌撽?嚗?嚗, law:'?砍瘜?禮9', warn:'鞈???祕摮嚗?瘞湧?鞈?擃?撟湔?????250?祉蔑??撱Ｘ迫?餉?嚗?},
    {n:'03', name:'??撣恍?鞈?+ ?辣閮剔??餉?', desc:`?臬?鈭????撣怠?瑁??祇??交蝪質??勗??詨?嚗15?亙???辣?辣嚗?{addrDesc}嚗?蝔?蝡?15?仿辣??嚗暹?蝵??洗5?研, law:'?砍瘜?禮7 / ?砍?餉?颲行? 禮2', warn:'撽?敺?5?亙敹??辣嚗暹?蝪質?憭望???撽?嚗?},
    {n:'04', name:'?餌? + ?銵?甇??撣單 + 蝔??餉?', desc:'?餉ˊ憭抒???蝡絞銝?潛巨撠蝡?閮剔??詨??質?甇???砍撣單?身蝡?15?亙??蝔?颲衣?蝔??餉?嚗??絞銝?潛巨鞈潛巨??嚗頃蟡典嚗?, law:'?平蝔? 禮28', warn:'閮剔?敺??5?亦?蝐閮???銝??潮?鞈?5?伐?'},
    {n:'05', name:'禮22-1 CTP?喳 + 甇????', desc:'閮剔?敺?5?亙??ctp.tdcc.com.tw 摰?擐活CTP銝餉??⊥?喳??撟??僑摨行?啜?憟??5?亙??喳?平蝔?撟????喳??蝔?, law:'?砍瘜?禮22-1', warn:'?暹??芰?梢?甈∠蔑5?洗50?穿?敺誥甇Ｗ?貊閮?'},
  ];

  const pitches = [
    {title:'?⊥??嗆?閬? ??蝚砌?憭拙停?箏?鞈頝?, script: isLtd ? '??函?撠???閮嚗??遣霅啗身蝡???詻?銝?????鈭箄??????蝜??降蝔?嚗??踹?撠?梢??霈鞈靘??閬?????∩遢???砍?喳?? : '??冽靘????銵撌亥??⊥???瘙??撥?遣霅啗身蝡隞賣???詻?潸?銝??ａ???ａ??∠巨嚗??質??身閮?亥璇狡嚗????憭??鈭箸??賣???嗆???, law: isLtd ? '?砍瘜?禮108' : '?砍瘜?禮156'},
    {title:'?靽?靽?????銝?蝜喳?', script: q3 === 'employed' ? '鞎痊鈭箇???嗡?甇?嚗靽?急?蝬剜??典??桐?嚗???撟急閮剔???靽???蝡?靽雿??脫?嚗??詨???撠?脣撠梯◤????像?乩?鞎颯? : '?典?瑟??亙璆哨????冽?砍閮剔?摰?敺?蝡?箸???靽?靽雿?銝虫誑鞎痊鈭箄澈??靽?蝣箔??函??隡??靽???銝剜??, law:'?乩?瘜?/ ??璇?'},
    {title:'?平蝔??潛巨蝟餌絞 ??餈??函?摰Ｘ', script: q6 === 'b2b' ? '?函?摰Ｘ?箔?璆?B2B)嚗????箸?唾?銝西身摰末銝撘絞銝?潛巨??璈嚗蒂頛??典?雿迤蝣箏??脤??潛巨???平蝔? : '?函?摰Ｘ?箏犖瘨祥??B2C)嚗???頛??典??仿摮蟡?B2C)??蝟餌絞嚗蒂?臬??拙??亦?銝?∟?頞?隞?隞?瘚?霈撠釣?潸??瑁??亙??, law:'蝯曹??潛巨雿輻颲行?'},
    {title:'???折甇餉? ???函?蝔?摰瘞??', script:`撣銝??嫣誨颲血撟急憛怨”?潘?銝恣撽?15?仿暹????迄?阬?2-1 CTP?喳????蝔??餉?????銝?停鋆?蝵唳狡???喟敞蝛500?祉蔑?啜????敺洵銝憭拙停??????甇颯, law:'禮7 / 禮2 / 禮22-1'}
  ];

  const result = document.getElementById('wiz-result');
  result.innerHTML = `
  <div class="fade-up space-y-12">
    <div class="text-center pb-8 border-b border-white/10">
      <div class="inline-block font-mono text-xs text-luxury-accent border border-luxury-accent/40 px-4 py-1.5 rounded-sm mb-4 tracking-widest">[ ?函?撠惇閮剔?頝臬? 繚 2026/08 ??唳?閬?]</div>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">${typeLabel} 繚 ${addrLabel}</h2>
      <p class="text-lg md:text-xl text-neutral-400">?箸閬???拙??身蝡?蝔??摯 ${isSpecial ? '??閮勗敺??? : ''}2~3 ?勗???/p>
    </div>
    ${isSpecial ? '<div class="bg-black/50 border-l-2 border-amber-900/50 p-6 text-xl text-amber-400/80"><strong class="text-amber-500/80 block mb-2 font-mono">[ ! ] ???內嚗閮梯?璆剖?????閮勗</strong>?函?銵平撅祉閮梯?璆哨?靘?7敹???銝餌恣璈???閮勗?辣嚗??質齒??貉身蝡閮?敺迂?臬?嚗???隞乩?閮剔?瘚???/div>' : ''}
    <div>
      <div class="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-6 pb-3 border-b border-white/10">閮剔?瘚? ??銝甇乩?甇亙???/div>
      <div class="space-y-0 divide-y divide-white/5">
        ${steps.map(s=>`
        <div class="flex gap-6 py-7">
          <div class="w-10 h-10 bg-luxury-accentDim border border-luxury-accent/40 rounded flex items-center justify-center font-mono text-sm text-luxury-accent flex-shrink-0 mt-1">${s.n}</div>
          <div class="flex-1">
            <div class="text-xl font-bold text-white mb-2">${s.name}</div>
            <div class="text-base text-neutral-400 leading-relaxed mb-2">${s.desc}</div>
            <div class="font-mono text-xs text-luxury-info">// ${s.law}</div>
            ${s.warn ? `<div class="text-sm text-amber-500/80 mt-1 font-bold">[ ! ] ${s.warn}</div>` : ''}
          </div>
        </div>`).join('')}
      </div>
    </div>
    <div>
      <div class="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-6 pb-3 border-b border-white/10">?箔?暻潮?臬?鈭??嚗?/div>
      <div class="space-y-4">
        ${pitches.map(p=>`
        <div class="bg-luxury-card border border-white/10 border-l-2 border-l-luxury-accent p-6">
          <div class="text-lg font-bold text-white mb-3">??${p.title}</div>
          <div class="text-base text-neutral-400 leading-relaxed italic mb-2">??{p.script}??/div>
          <div class="font-mono text-xs text-luxury-info">瘜?嚗?{p.law}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="text-center pt-4 border-t border-white/10 space-y-4">
      <h3 class="text-2xl font-bold text-white">蝡???函??砍閮剔?</h3>
      <p class="text-lg text-neutral-400">?臬???撣思??????函?隞?齒嚗??迂??啁?蝐?梧?銝甈⊥?摰?/p>
      <button class="px-10 py-4 bg-luxury-accent text-slate-950 font-bold font-mono text-lg hover:bg-amber-400 transition-all">[ 蝡???祥隢株岷 ]</button>
      <br>
      <button onclick="restartWiz()" class="mt-4 px-6 py-3 border border-white/20 text-neutral-400 font-mono text-sm hover:text-white hover:border-white/40 transition-all">[ ??豢??? ]</button>
    </div>
  </div>`;

  result.classList.remove('hidden'); result.classList.add('active','fade-up');
  window.scrollTo({ top: result.offsetTop - 120, behavior:'smooth' });
}

function restartWiz() {
  WIZ.q1=WIZ.q2=WIZ.q3=WIZ.q4=WIZ.q5=WIZ.q6=null;
  for(let i=1;i<=6;i++){
    const d=document.getElementById('d'+i);
    d.textContent=i;
    d.className='prog-dot w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm ' + (i===1 ? 'border border-luxury-accent text-luxury-accent' : 'border border-white/20 text-neutral-500');
    if(i<6) { const l=document.getElementById('l'+i); l.className='prog-line flex-1 h-px bg-white/10'; }
    document.getElementById('wiz-q'+i).classList.remove('active'); document.getElementById('wiz-q'+i).classList.add('hidden');
    const nb=document.getElementById('q'+i+'-next'); if(nb) nb.disabled=true;
  }
  document.getElementById('wiz-result').classList.remove('active'); document.getElementById('wiz-result').classList.add('hidden');
  document.getElementById('wiz-q1').classList.remove('hidden'); document.getElementById('wiz-q1').classList.add('active');
  // reset picks
  document.querySelectorAll('.wiz-opt').forEach(b=>{ b.classList.remove('border-luxury-accent','bg-luxury-accentDim'); b.classList.add('border-white/10'); });
  window.scrollTo({top:0,behavior:'smooth'});
}

