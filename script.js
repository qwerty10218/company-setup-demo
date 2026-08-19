// ─── MODE SWITCH ───
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

// ─── ACCORDION ───
function toggleAcc(header) {
  const item = header.closest('.acc-item');
  item.classList.toggle('open');
}

// ─── COMPARE DIFF HIGHLIGHT（直覺雙按鈕版）───
let diffOn = false;

function setHighlight(on) {
  diffOn = on;

  // 更新按鈕狀態
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

  // 套用 / 移除高亮
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

// ─── LEARN PLAN GENERATION ───
function generateLearnPlan() {
  const type    = document.getElementById('sel-type').value;
  const capital = document.getElementById('sel-capital').value;
  const addr    = document.getElementById('sel-addr').value;
  const industry= document.getElementById('sel-industry').value;

  const typeLabel    = { ltd:'有限公司', corp:'股份有限公司' }[type];
  const capitalLabel = { under100:'100萬以下', exactly100:'100萬元', over500:'500萬以上' }[capital];
  const addrLabel    = { home:'自宅/親屬房產', rent:'外租辦公室', biz:'商務中心借址' }[addr];
  const induLabel    = { general:'一般業', food:'許可業（餐飲）', finance:'許可業（金融）', medical:'許可業（醫療）' }[industry];
  const isSpecial    = industry !== 'general';
  const isLtd        = type === 'ltd';

  // Fee estimate
  const regFee = capital === 'under100' ? '最低 NT$1,000' : capital === 'exactly100' ? 'NT$2,500（100萬×1/4000）' : 'NT$12,500（500萬×1/4000）';

  // Address note
  const addrNote = {
    home: '免附租約。應備：最近一期<b>房屋稅單</b> + <b>房屋使用同意書</b>（直系親屬簽署）。<br>房屋稅率升為非住家用（2~5%），可申請最小面積比例（1/6）降低稅基。<br><span class="text-stone-400">✓ 無償同意書，無租金扣繳義務</span>',
    rent:  '需附<b>租約影本</b>（須載明供公司登記使用）+ <b>房屋稅單</b>。<br><span class="text-amber-500/80">⚠ 每期租金須扣繳 10%（§88所得稅法）+ 2.11%二代健保補充保費</span>，申報給付憑單。',
    biz:   '需附<b>商務中心租約</b> + 商務中心提供之<b>房屋稅單</b>。<br>月費約 $500~$3,000，精華地段高形象。<br><span class="text-amber-500/80">⚠ 同樣須對商務中心租金執行扣繳義務</span>',
  }[addr];

  const out = document.getElementById('learn-plan');
  document.getElementById('learn-empty').classList.add('hidden');
  out.classList.remove('hidden');
  out.innerHTML = `
  <div class="fade-up space-y-12">
    <!-- Header -->
    <div class="border-b border-white/10 pb-6 space-y-2">
      <span class="font-mono text-xs text-luxury-accent uppercase tracking-widest">[ 生成結果 · 2026/08 最新法規 ]</span>
      <h2 class="text-3xl font-bold text-white">代辦企劃案：${typeLabel} · ${capitalLabel} · ${addrLabel}</h2>
      <p class="text-xl text-neutral-400">行業類別：${induLabel}　　根據您的情境生成完整流程、應備文件與法規條號</p>
    </div>

    ${isSpecial ? `<div class="bg-black/50 border-l-2 border-amber-900/50 p-6 text-base text-neutral-300">
      <strong class="text-amber-500/80 text-xl block mb-2 font-mono">[ ! ] 特許行業重要提示（§17）</strong>
      您的行業屬<b>特許行業（${induLabel}）</b>，依《公司法》§17，<b class="text-amber-500/80">必須先取得主管機關許可，才能辦理公司設立登記</b>，不得先設立再補辦許可。取得許可文件後，再開始以下流程。
    </div>` : ''}

    <!-- PART 1: 設立流程 -->
    <div class="space-y-6">
      <div class="border-b border-white/10 pb-4 flex justify-between items-center">
        <h3 class="text-3xl font-bold text-white font-mono">第一部分 // ${isLtd ? '有限' : '股份有限'}公司設立 6 大流程與最新法規條號對照</h3>
        <span class="font-mono text-xs text-luxury-accent">[LEGAL PROCESS TIMELINE · 2026/08]</span>
      </div>
      <div class="space-y-4" id="steps-container">
        ${buildStep(1, '名稱預查 ＆ 營業項目預查', '公司法 §18', '約1~3工作天', `向經濟部商業發展署線上申請「公司名稱及所營事業預查」，核准後取得<b>預查核定書</b>，確立公司名稱與行業代碼（如 I301010 資訊軟體、F399040 電商、ZZ99999 一般業務概括條款）。${isSpecial ? '<br><b class="text-amber-500/80">[ ! ] 特許業需先取得許可才可繼續，ZZ99999概括條款不含須許可之業務。</b>' : ''}`,
          [
            {ref:'公司法 §18', desc:'名稱預查規定；核准保留<b>6個月</b>，期間可申請展期一次。建議同時加登ZZ99999（除許可業務外得經營法令非禁止業務）。'},
            {ref:'公司名稱預查審核準則 §3', desc:'公司名稱不得與他公司相同；核准書有效期為申請日起6個月。'}
          ], false)}
        ${buildStep(2, '確認資本額 → 銀行開設籌備處帳戶', `公司法 §${isLtd?'100':'156'} / §9`, '約1工作天', `確定資本額（本案 ${capitalLabel}），負責人攜帶<b>預查核定書</b>、雙證件至銀行，開立「OO${typeLabel}籌備處」專戶。${isLtd ? '有限公司股東依出資比例全數一次匯入。' : '股份有限公司所有股東依持股比例各自匯入。'}<br><b class="text-amber-500/80">[ ! ] 絕對禁止借款過水驗資（§9刑事責任，最高5年有期徒刑+250萬罰金+廢止登記）</b>`,
          [
            {ref:`公司法 §${isLtd?'100':'156'}`, desc:isLtd ? '有限公司資本總額應由股東全部繳足，不得分期（廢除最低資本額限制）。' : '股份有限公司股份得分次發行，設立時應全額繳足。'},
            {ref:'公司法 §9', desc:'嚴禁過水驗資：違者處5年以下有期徒刑、拘役或科或<b class="text-amber-500/80">併科NT$50萬以上250萬以下罰金</b>，並廢止公司登記。', warn:true}
          ], false)}
        ${buildStep(3, '會計師資本額查核簽證（驗資）', '公司法 §7', '約1~2工作天', `資金存入 1~2 日後，向銀行申請「<b>存款餘額證明書</b>」，並檢附存摺影本、公司章程，由執業會計師進行查核驗資，出具「<b>資本額查核簽證報告書</b>」。驗資為法定<b>會計師專屬業務</b>，不得以其他方式替代。<br><b class="text-amber-500/80">[ ! ] 驗資完成後，必須於15日內送件申請設立登記（公司登記辦法§2），逾期簽證失效，須重新驗資！</b>`,
          [
            {ref:'公司法 §7', desc:'公司設立之資本額，應經<b>會計師查核簽證</b>，此為法定專屬業務。'},
            {ref:'公司登記辦法 §2', desc:`${isLtd ? "有限公司：章程訂立後" : "股份有限公司：負責人就任後"}15日內申請設立登記，逾期罰NT$1萬~5萬，按次連罰。`, warn:true},
            {ref:'會計師查核簽證公司登記資本額辦法', desc:'驗資後15日內送件；逾期需重新驗資，原簽證報告書失效。', warn:true}
          ], false)}
        ${buildStep(4, '備齊應備文件 → 送件公司設立登記', '公司法 §387 / 公司登記辦法', '約3~7工作天', `備齊全部文件，向主管機關（直轄市政府或經濟部商業發展署）送件登記。<br><b>本案地址情境（${addrLabel}）：</b>${addrNote}`,
          [
            {ref:'公司法 §387', desc:'登記申請得委任律師或會計師辦理；主管機關對違反申請期限者，處代表公司之負責人NT$1萬~5萬罰鍰，按次連罰。'},
            {ref:'公司登記辦法 §5', desc:'設立登記應備文件（見第二部分完整清單）。'},
            {ref:'公司登記辦法 附表一', desc:'有限公司設立登記應檢附書表，含申請書、章程、股東同意書、董事願任同意書（如適用）、驗資報告、地址文件。'}
          ], false)}
        ${buildStep(5, '刻印章 → 銀行正式帳戶 → 國稅局稅籍登記', '營業稅法 §28', '約2~3工作天', `公司核准後：<br>①<b>刻製印章</b>：公司大章（登記章）、負責人小章、<b>統一發票專用章</b>（須含公司名稱、統一編號、地址）。<br>②<b>銀行開正式帳戶</b>：持設立核准函，將籌備處帳戶轉為公司正式帳戶。<br>③<b>稅籍登記</b>：向轄區國稅局申辦，取得統一編號，領取<b>統一發票購票憑證（購票卡）</b>後即可開立發票正式營業。<br><b class="text-amber-500/80">[ ! ] 設立後15日內完成稅籍登記（§28），此為第二條不同的15日時效！</b>`,
          [
            {ref:'加值型及非加值型營業稅法 §28', desc:'公司設立後<b class="text-amber-500/80">15日內</b>向所在地主管稽徵機關申請稅籍登記。'},
            {ref:'統一發票使用辦法', desc:'須向國稅局領取統一發票購票憑證（購票卡），持購票卡、統一發票專用章至代售點購買發票。'},
          ], false)}
        ${buildStep(6, 'CTP主要股東申報（§22-1）＆ 例行申報', '公司法 §22-1', '設立後即辦！', `設立完成後<b>15日內</b>，至「公司負責人及主要股東資訊申報平臺」（https://ctp.tdcc.com.tw）完成<b>首次CTP申報</b>（洗錢防制要求）。<br>後續：每<b>單數月15日前</b>申報營業稅（雙月申報制）、每年<b>5月底前</b>申報營利事業所得稅。<br><b class="text-amber-500/80">[ ! ] 未申報§22-1：首次罰5萬~50萬；再限期不改正罰50萬~500萬，且得廢止登記！（2026年最新罰則）</b>`,
          [
            {ref:'公司法 §22-1', desc:'設立後15日內首次申報；資訊異動後15日內變動申報；每年3月1日~31日年度申報（已做變動申報者免）。逾期<b class="text-amber-500/80">罰5萬~50萬，再限期不改正罰50萬~500萬，得廢止公司登記</b>。', warn:true},
            {ref:'加值型及非加值型營業稅法', desc:'每雙月（奇數月）15日前申報繳納營業稅；月銷售額超高者可申請按月申報。'},
            {ref:'所得稅法 §71', desc:'每年5月底前申報上一年度營利事業所得稅。'}
          ], false)}
      </div>

      <!-- Summary boxes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div class="bg-luxury-card border border-white/10 p-5 space-y-1">
          <div class="font-mono text-xs text-luxury-accent tracking-widest mb-3">[ 預估總時程 ]</div>
          <p class="text-base text-neutral-300">一般業：約 <b class="text-white">2~3 週</b>完成全程</p>
          <p class="text-base text-neutral-300">許可業：視主管機關許可，<b class="text-amber-500/80">另加 1~6 個月</b></p>
        </div>
        <div class="bg-luxury-card border border-white/10 p-5 space-y-1">
          <div class="font-mono text-xs text-luxury-accent tracking-widest mb-3">[ 預估總費用 ]</div>
          <p class="text-base text-neutral-300">驗資簽證：約 NT$2,000~$6,000</p>
          <p class="text-base text-neutral-300">設立規費：${regFee}</p>
          <p class="text-base text-neutral-300">印章費：約 NT$500~$2,000</p>
        </div>
        <div class="bg-luxury-card border border-white/10 p-5 space-y-1">
          <div class="font-mono text-xs text-amber-500/80 tracking-widest mb-3">[ 高風險地雷 ]</div>
          <p class="text-base text-neutral-300">· 過水驗資 → 刑事責任</p>
          <p class="text-base text-neutral-300">· 章程後15日逾期送件</p>
          <p class="text-base text-neutral-300">· 忘記§22-1申報 → 最高500萬</p>
        </div>
      </div>
    </div>

    <!-- PART 2: 應備文件Checklist -->
    <div class="bg-luxury-card border border-white/10 p-8 space-y-6">
      <div class="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 class="text-2xl font-bold text-white font-mono">第二部分 // ${typeLabel}設立登記 應備文件完整清單（Checklist）</h3>
        <span class="font-mono text-xs text-luxury-accent">[REQUIRED DOCUMENTS · 公司登記辦法 §5]</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-neutral-300">
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">【名稱預查與身分文件】</strong>
          <p>✓ (1) 公司名稱及所營事業預查核定書（§18）</p>
          <p>✓ (2) 全體股東身分證正反面影本</p>
          ${!isLtd ? '<p>✓ (3) 董事願任同意書（每位董事個別親簽）</p><p>✓ (4) 監察人願任同意書（§216，股份有限公司必要）</p>' : ''}
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">【章程與股東文件】</strong>
          <p>✓ 公司章程（全體股東簽名或蓋章）</p>
          ${isLtd ? '<p>✓ 股東同意書（有限公司必要，選任董事、訂立章程等）</p>' : '<p>✓ 發起人會議事錄 或 創立會議事錄</p>'}
          <p>✓ ${isLtd ? '有限公司設立登記申請書（官署制式表單）' : '股份有限公司設立登記申請書 + 設立登記表（一式二份）'}</p>
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">【資本額驗資文件】</strong>
          <p>✓ 籌備處銀行存摺封面、蓋章頁、金額頁影本（${capitalLabel}，§${isLtd?'100':'156'}）</p>
          <p>✓ 銀行存款餘額證明書</p>
          <p>✓ 會計師資本額查核簽證報告書（§7）</p>
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">【所在地房屋證明】</strong>
          ${addr === 'home' ? '<p>✓ 最近一期<b>房屋稅單</b>影本</p><p>✓ 房屋使用同意書（自有免附租約）</p>' : addr === 'rent' ? '<p>✓ 最近一期<b>房屋稅單</b>影本</p><p>✓ <b>房屋租賃契約書</b>影本（§387）</p>' : '<p>✓ 商務中心出具之<b>房屋稅單</b>或地主同意文件</p><p>✓ 商務中心<b>租賃契約書</b>影本</p>'}
          ${isSpecial ? '<p class="text-amber-500/80">✓ 主管機關許可核准函影本（特許行業必要，§17）</p>' : ''}
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-luxury-accent space-y-2">
          <strong class="text-white block text-base">【稅籍登記文件（設立後15日內）】</strong>
          <p>✓ 國稅局「營業人設立（變更）登記申請書」</p>
          <p>✓ 公司設立核准函影本</p>
          <p>✓ 負責人身分證</p>
          <p>✓ 統一發票專用章（刻製後攜帶）</p>
        </div>
        <div class="bg-black/50 p-5 border-l-2 border-amber-900/50 space-y-2">
          <strong class="text-amber-500/80 block text-base">【設立後須辦事項（高風險，勿遺漏）】</strong>
          <p class="text-amber-500/80">✓ 刻製公司大章、負責人小章、統一發票專用章</p>
          <p class="text-amber-500/80">✓ §22-1 CTP主要股東申報（設立後15日內）</p>
          <p class="text-amber-500/80">✓ 將籌備處帳戶轉為公司正式帳戶</p>
          <p class="text-amber-500/80">✓ 領取統一發票購票憑證（購票卡）</p>
        </div>
      </div>
    </div>

    <!-- PART 3: 核心法律責任 -->
    <div class="bg-luxury-card border border-white/10 p-8 space-y-6">
      <div class="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 class="text-2xl font-bold text-white font-mono">第三部分 // 核心法律責任解析</h3>
        <span class="font-mono text-xs text-amber-500/80">[LEGAL ANALYSIS · 2026/08]</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-neutral-300">
        <div class="bg-black/60 p-6 border-l-2 border-luxury-accent space-y-3">
          <strong class="text-white block font-mono text-lg">// 《公司法》§154（有限責任 vs 揭穿面紗）</strong>
          <p>• <b>第1項（有限責任）：</b>股東對公司之責任，以繳清其股份/出資額（${capitalLabel}）為限，<span class="text-stone-400">不牽連個人私人財產</span>。</p>
          <p>• <b>第2項（揭穿公司面紗）：</b>若股東濫用公司獨立法人地位致公司清償特定債務顯有困難，該股東應負<span class="text-amber-500/80 underline">無限連帶清償責任</span>。</p>
        </div>
        <div class="bg-black/60 p-6 border-l-2 border-amber-900/50 space-y-3">
          <strong class="text-white block font-mono text-lg">// 《公司法》§9（資本充實與驗資不實刑責）</strong>
          <p>• <b>虛設資本額/借款過水：</b>股款未實際繳納，或登記後發還股款，處公司負責人 <span class="text-amber-500/80 font-bold">5年以下有期徒刑</span>、拘役或科或<span class="text-amber-500/80 font-bold">併科NT$50萬以上250萬以下罰金</span>。</p>
          <p>• <b>廢止登記：</b>裁判確定後，主管機關將<span class="text-amber-500/80 underline">撤銷或廢止公司登記</span>，所有努力付諸流水。</p>
        </div>
      </div>
    </div>

    <!-- PART 4: 對詞腳本 -->
    <div class="bg-luxury-card border border-white/10 p-8 space-y-6">
      <div class="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 class="text-2xl font-bold text-white font-mono">第四部分 // 雙人現場對詞腳本（創業者 vs 事務所）</h3>
        <span class="font-mono text-xs text-luxury-accent">[ROLEPLAY SCRIPT]</span>
      </div>
      <div class="space-y-4 text-lg">
        <div class="bg-neutral-900 p-6 border-l-4 border-stone-700 space-y-2">
          <span class="font-bold text-stone-400 block font-mono text-sm">[ 創業者（客戶）]</span>
          <p>「代辦你好！我們打算申請公司，做軟體與電商，資本額準備 ${capitalLabel}，登記在${addrLabel}。請問資金匯入籌備處戶頭後，我自己慢慢備齊文件送件可以嗎？」</p>
        </div>
        <div class="bg-neutral-900 p-6 border-l-4 border-luxury-accent space-y-2">
          <span class="font-bold text-luxury-accent block font-mono text-sm">[ 事務所代辦（組員）]</span>
          <p>「老闆您好！這正是最容易踩雷的地方！依據《公司登記辦法》§2，${isLtd ? '章程訂立後' : '負責人就任後'}<strong class="text-amber-500/80">15 日內一定要向主管機關送件登記</strong>，否則處負責人 NT$1萬~5萬罰鍰按次連罰。交給我們事務所，我們幫您死盯時效，從會計師驗資（§7）、公司登記（§387）到國稅局領購票卡，再到§22-1 CTP申報——一站式搞定，絕不讓您多走一步冤枉路！」</p>
        </div>
      </div>
      <div class="bg-black/80 border border-luxury-accent/50 p-6 space-y-3">
        <strong class="text-luxury-accent block font-mono text-base">[ 事務所 Pitch 臨門一腳語錄 ]</strong>
        <p class="text-neutral-200 text-xl leading-relaxed">「老闆，創業最貴的是您的時間。把繁瑣的 15 日時效控管、會計師資本簽證（§7）、房屋稅單審查、§22-1 CTP 申報以及未來的營業稅與營所稅申報全部交給我們。我們是您最穩固的稅務安全氣囊，讓您專注接單賺錢！」</p>
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
        <div class="font-mono text-xs text-neutral-500 mb-1">預估時程：${time}</div>
        ${desc}
      </div>
      <div class="md:col-span-2 flex justify-end">
        <svg class="step-chevron w-6 h-6 text-neutral-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </div>
    ${lawItems ? `
    <div class="step-body border-t border-white/10">
      <div class="p-6">
        <div class="font-mono text-xs text-luxury-accent tracking-widest mb-3 uppercase">[ 完整法規條文 ]</div>
        ${lawItems}
      </div>
    </div>` : ''}
  </div>`;
}

// ─── WIZARD ───
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
    d.textContent = '✓'; d.classList.add('bg-luxury-accent','text-slate-950','border-luxury-accent');
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
    d.textContent='✓'; d.classList.add('bg-luxury-accent','text-slate-950','border-luxury-accent');
    d.classList.remove('border-white/20','text-neutral-500','text-luxury-accent');
    if(i<6) document.getElementById('l'+i).classList.add('bg-luxury-accent/50');
  }
  for(let i=1;i<=6;i++){
    document.getElementById('wiz-q'+i).classList.remove('active');
    document.getElementById('wiz-q'+i).classList.add('hidden');
  }

  const isLtd     = q1 === 'no';
  const typeLabel = isLtd ? '有限公司' : '股份有限公司';
  const addrLabel = {home:'自宅/親屬房產', rent:'外租辦公室', biz:'商務中心借址'}[q4];
  const isSpecial = q5 === 'special';
  const capitalLabel = { under100:'100萬以下', exact100:'100萬元', over500:'500萬以上' }[q2];

  const addrDesc = {
    home:'免附租約，備最近一期房屋稅單 + 使用同意書。無租金扣繳義務。',
    rent:'需附租約。每期租金須扣繳10%（§88）+ 2.11%二代健保補充保費。',
    biz: '需附商務中心租約。月費約$500~$3,000。同樣需執行租金扣繳義務。'
  }[q4];

  const steps = [
    ...(isSpecial ? [{n:'00', name:'先取得主管機關許可', desc:'您的行業屬特許行業，依《公司法》§17，必須先向主管機關取得許可文件，才能進行公司設立登記。', law:'公司法 §17', warn:'未取得許可即設立，主管機關得撤銷公司登記。'}] : []),
    {n:'01', name:'公司名稱預查', desc:'透過經濟部線上系統申請名稱及行業代碼預查，取得預查核定書（保留6個月）。建議加登ZZ99999概括條款。', law:'公司法 §18'},
    {n:'02', name:`資本額存入 + 銀行籌備戶`, desc:`準備 ${capitalLabel} 資金，負責人攜帶預查核定書至銀行開立「OO${typeLabel}籌備處」帳戶，股東匯入真實資金。絕對禁止借款過水驗資（§9）。`, law:'公司法 §9', warn:'資金需真實存入，過水驗資最高5年有期徒刑+250萬罰金+廢止登記！'},
    {n:'03', name:'會計師驗資 + 送件設立登記', desc:`聯合事務所會計師出具資本額查核簽證報告書後，於15日內備齊文件送件（${addrDesc}）。章程訂立後15日送件時效，逾期罰1萬~5萬。`, law:'公司法 §7 / 公司登記辦法 §2', warn:'驗資後15日內必須送件，逾期簽證失效需重新驗資！'},
    {n:'04', name:'刻章 + 銀行開正式帳戶 + 稅籍登記', desc:'刻製大章、小章、統一發票專用章。持設立核准函轉正式公司帳戶。設立後15日內向國稅局辦理稅籍登記，領取統一發票購票憑證（購票卡）。', law:'營業稅法 §28', warn:'設立後另有15日稅籍登記時效，不同於驗資15日！'},
    {n:'05', name:'§22-1 CTP申報 + 正式營運', desc:'設立後15日內至 ctp.tdcc.com.tw 完成首次CTP主要股東申報。每年3月年度更新。每奇數月15日前申報營業稅、每年5月前申報營所稅。', law:'公司法 §22-1', warn:'逾期未申報首次罰5萬~50萬，得廢止公司登記！'},
  ];

  const pitches = [
    {title:'股權架構規劃 — 第一天就為募資鋪路', script: isLtd ? '因為您目前無對外募資計畫，我們建議設立「有限公司」，不僅免除監察人與董事會等繁複會議程序，也避免小股東隨意轉讓出資。未來若有需要，再轉換為股份有限公司即可。' : '因為您未來有募資或發行員工認股權的需求，我們強烈建議設立「股份有限公司」。這能發行不同面額或無面額股票，也能輕易設計特別股條款，是所有創投與外部投資人最能接受的架構。', law: isLtd ? '公司法 §108' : '公司法 §156'},
    {title:'勞健保投保策略 — 不多繳冤枉錢', script: q3 === 'employed' ? '負責人目前有其他正職，健保可暫時維持在原單位，我們會幫您設立「勞保局免成立投保單位」的聲明，避免公司剛成立尚未獲利就被雙重扣繳健保費。' : '您全職投入創業，我們會在新公司設立完成後，立刻為您成立勞健保投保單位，並以負責人身分投保，確保您的退休金與健保權益不中斷。', law:'健保法 / 勞保條例'},
    {title:'營業稅與發票系統 — 迎合您的客戶', script: q6 === 'b2b' ? '您的客戶為企業(B2B)，我們會為您申請並設定好三聯式統一發票開立機制，並輔導您如何正確將進項發票扣抵營業稅。' : '您的客戶為個人消費者(B2C)，我們會輔導您導入電子發票(B2C)開立系統，並可協助對接線上刷卡與超商代收付金流，讓您專注於行銷與接單。', law:'統一發票使用辦法'},
    {title:'合法性零死角 — 您的稅務安全氣囊', script:`市面上低價代辦只幫您填表格，不管驗資15日逾期、不告訴您§22-1 CTP申報、不提醒稅籍登記時效。漏一個就補稅罰款、甚至累積到500萬罰鍰。聯合事務所從第一天就把所有時效鎖死。`, law:'§7 / §2 / §22-1'}
  ];

  const result = document.getElementById('wiz-result');
  result.innerHTML = `
  <div class="fade-up space-y-12">
    <div class="text-center pb-8 border-b border-white/10">
      <div class="inline-block font-mono text-xs text-luxury-accent border border-luxury-accent/40 px-4 py-1.5 rounded-sm mb-4 tracking-widest">[ 您的專屬設立路徑 · 2026/08 最新法規 ]</div>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">${typeLabel} · ${addrLabel}</h2>
      <p class="text-lg md:text-xl text-neutral-400">為您規劃最適合的設立流程，預估 ${isSpecial ? '取得許可後再加' : ''}2~3 週完成</p>
    </div>
    ${isSpecial ? '<div class="bg-black/50 border-l-2 border-amber-900/50 p-6 text-xl text-amber-400/80"><strong class="text-amber-500/80 block mb-2 font-mono">[ ! ] 重要提示：特許行業必須先取得許可</strong>您的行業屬特許行業，依§17必須先向主管機關取得許可文件，才能辦理公司設立登記。取得許可後，再開始以下設立流程。</div>' : ''}
    <div>
      <div class="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-6 pb-3 border-b border-white/10">設立流程 — 一步一步完成</div>
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
      <div class="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-6 pb-3 border-b border-white/10">為什麼選聯合事務所？</div>
      <div class="space-y-4">
        ${pitches.map(p=>`
        <div class="bg-luxury-card border border-white/10 border-l-2 border-l-luxury-accent p-6">
          <div class="text-lg font-bold text-white mb-3">✦ ${p.title}</div>
          <div class="text-base text-neutral-400 leading-relaxed italic mb-2">「${p.script}」</div>
          <div class="font-mono text-xs text-luxury-info">法源：${p.law}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="text-center pt-4 border-t border-white/10 space-y-4">
      <h3 class="text-2xl font-bold text-white">立即開始您的公司設立</h3>
      <p class="text-lg text-neutral-400">聯合會計師事務所提供全程代辦，從名稱預查到稅籍申報，一次搞定。</p>
      <button class="px-10 py-4 bg-luxury-accent text-slate-950 font-bold font-mono text-lg hover:bg-amber-400 transition-all">[ 立即預約免費諮詢 ]</button>
      <br>
      <button onclick="restartWiz()" class="mt-4 px-6 py-3 border border-white/20 text-neutral-400 font-mono text-sm hover:text-white hover:border-white/40 transition-all">[ 重新選擇情境 ]</button>
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