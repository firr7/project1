/* ============================================================
   CYBERNET HACKER TERMINAL — Game Engine
   ============================================================ */

/* ---- Upgrade definitions ---- */
const UPGRADE_DEFS = {
  cpu: {
    id: 'cpu',
    name: 'CPU Core',
    desc: 'Boosts processor speed, increasing mission frequency.',
    effects: ['+12% mission rate', '+25% mission rate', '+40% mission rate', '+58% mission rate', '+80% mission rate'],
    maxLevel: 5,
    costs: [100, 250, 500, 1000, 2000],
    icon: '⬡'
  },
  firewall: {
    id: 'firewall',
    name: 'Firewall v2',
    desc: 'Hardens your perimeter, reducing incoming attack damage.',
    effects: ['-10% dmg', '-20% dmg', '-32% dmg', '-46% dmg', '-60% dmg'],
    maxLevel: 5,
    costs: [150, 300, 600, 1200, 2500],
    icon: '▣'
  },
  encryption: {
    id: 'encryption',
    name: 'Encryption Suite',
    desc: 'Encrypts your data channels, increasing mission credit rewards.',
    effects: ['+15% credits', '+32% credits', '+52% credits', '+75% credits', '+100% credits'],
    maxLevel: 5,
    costs: [200, 400, 800, 1600, 3000],
    icon: '⊕'
  },
  neural: {
    id: 'neural',
    name: 'Neural Interface',
    desc: 'Extends your reaction window to incoming threats.',
    effects: ['+3s response time', '+6s response time', '+10s response time'],
    maxLevel: 3,
    costs: [500, 1500, 3000],
    icon: '◈'
  },
  botnet: {
    id: 'botnet',
    name: 'Botnet',
    desc: 'Passive credit income from your network of compromised machines.',
    effects: ['+2 ₿/sec', '+5 ₿/sec', '+10 ₿/sec'],
    maxLevel: 3,
    costs: [1000, 3000, 8000],
    icon: '⬡'
  },
  gpu: {
    id: 'gpu',
    name: 'GPU Array',
    desc: 'Parallel processing gives a chance to auto-complete missions.',
    effects: ['5% auto-complete', '12% auto-complete', '22% auto-complete'],
    maxLevel: 3,
    costs: [750, 2000, 5000],
    icon: '▦'
  }
};

/* ---- Terminal task pool ---- */
const TERMINAL_TASKS = [
  { name: 'Bypass Firewall',      desc: 'Execute firewall bypass sequence', command: 'EXEC bypass --firewall srv0x.local',       reward: 28, xp: 15, time: 22, diff: 1 },
  { name: 'Decrypt Payload',      desc: 'Decrypt intercepted data package',  command: 'DECRYPT --key 0xDEAD payload.bin',         reward: 38, xp: 20, time: 28, diff: 2 },
  { name: 'Inject Exploit',       desc: 'Upload exploit to target server',   command: 'INJECT --payload /exploit/cmd.sh',          reward: 48, xp: 26, time: 32, diff: 2 },
  { name: 'Trace Route',          desc: 'Map hostile network nodes',         command: 'TRACE -r 192.168.7.1 --silent',             reward: 32, xp: 18, time: 22, diff: 1 },
  { name: 'Deep Scan',            desc: 'Run full vulnerability scan',       command: 'SCAN -p ALL --vuln-check dark.sys',         reward: 55, xp: 30, time: 38, diff: 3 },
  { name: 'Rootkit Deploy',       desc: 'Install persistent access rootkit', command: 'DEPLOY rootkit --pid 0 --persist',          reward: 65, xp: 35, time: 40, diff: 3 },
  { name: 'Spoof Identity',       desc: 'Mask your network signature',       command: 'SPOOF --mac random --ip ghost.net',         reward: 35, xp: 18, time: 24, diff: 1 },
  { name: 'Exfiltrate Data',      desc: 'Extract sensitive files silently',  command: 'EXFIL --target /etc/shadow --encrypt',      reward: 58, xp: 32, time: 36, diff: 3 },
  { name: 'Port Knocking',        desc: 'Probe hidden service ports',        command: 'KNOCK 22 80 443 8080 --seq',               reward: 30, xp: 16, time: 20, diff: 1 },
  { name: 'SQL Injection',        desc: 'Compromise target database',        command: "INJECT sql --payload \"'; DROP--\"",        reward: 42, xp: 22, time: 30, diff: 2 },
  { name: 'ARP Poisoning',        desc: 'Intercept local network traffic',   command: 'ARP --poison --gateway 10.0.0.1',           reward: 44, xp: 24, time: 30, diff: 2 },
  { name: 'Zero-Day Compile',     desc: 'Compile unknown vulnerability code',command: 'COMPILE zeroday.c -O3 --no-trace',         reward: 70, xp: 38, time: 44, diff: 4 },
  { name: 'DNS Hijack',           desc: 'Reroute DNS traffic to proxy',      command: 'DNS --hijack corp.tgt --proxy ghost.io',    reward: 50, xp: 28, time: 34, diff: 2 },
  { name: 'Privilege Escalation', desc: 'Gain root access on target',        command: 'PRIVESC --sudo --suid /bin/bash -p',        reward: 75, xp: 40, time: 45, diff: 4 },
  { name: 'Wipe Logs',            desc: 'Erase evidence of intrusion',       command: 'WIPE --logs /var/log/* --overwrite 7',      reward: 36, xp: 20, time: 26, diff: 1 },
];

/* ---- Choice task pool ---- */
const CHOICE_TASKS = [
  { name: 'Protocol Audit',   desc: 'Identify the encrypted protocol', options: ['HTTP','HTTPS','FTP','TELNET'],      answer: 1, reward: 22, xp: 12, time: 15, diff: 1 },
  { name: 'Hash Analysis',    desc: 'Select the weakest hash algorithm', options: ['SHA-256','bcrypt','MD5','SHA-3'], answer: 2, reward: 25, xp: 14, time: 15, diff: 1 },
  { name: 'Port Recon',       desc: 'Which port serves SSH by default?', options: ['21','22','23','25'],              answer: 1, reward: 20, xp: 11, time: 12, diff: 1 },
  { name: 'Cipher Select',    desc: 'Strongest modern encryption cipher?', options: ['DES','3DES','AES-256','RC4'],   answer: 2, reward: 28, xp: 15, time: 14, diff: 1 },
  { name: 'Threat Vector',    desc: 'Primary attack vector for ransomware?', options: ['USB','Phishing','Bluetooth','NFC'], answer: 1, reward: 24, xp: 13, time: 14, diff: 1 },
  { name: 'Zero Trust',       desc: 'Zero-trust model validates which layer?', options: ['Network','Perimeter','Every request','Endpoint'], answer: 2, reward: 30, xp: 16, time: 16, diff: 2 },
  { name: 'CVE Triage',       desc: 'Which CVSS score is critical?', options: ['3.5','5.0','7.0','9.8'],             answer: 3, reward: 32, xp: 17, time: 14, diff: 2 },
  { name: 'Root Detection',   desc: 'Best tool to detect rootkit on Linux?', options: ['ps aux','netstat','chkrootkit','lsmod'], answer: 2, reward: 35, xp: 18, time: 16, diff: 2 },
];

/* ---- Rapid click task pool ---- */
const RAPID_TASKS = [
  { name: 'Buffer Overflow',  desc: 'Overload the input buffer — click fast!', label: '[ OVERFLOW BUFFER ]',  targetClicks: 12, reward: 30, xp: 16, time: 9,  diff: 1 },
  { name: 'Brute Force',      desc: 'Hammer the authentication endpoint',      label: '[ BRUTE FORCE AUTH ]', targetClicks: 16, reward: 38, xp: 20, time: 10, diff: 2 },
  { name: 'DDoS Amplify',     desc: 'Flood the target with requests',          label: '[ FLOOD PACKETS ]',    targetClicks: 20, reward: 45, xp: 24, time: 10, diff: 3 },
  { name: 'Hash Crack',       desc: 'Cycle through password combinations',     label: '[ CRACK HASH ]',       targetClicks: 14, reward: 33, xp: 17, time: 9,  diff: 2 },
];

/* ---- Attack pool ---- */
const ATTACK_TEMPLATES = [
  { type: 'DDOS',      name: 'DDoS Flood',          desc: 'Packet flood overwhelming your servers.',        action: 'BLOCK PACKETS',   damage: 14, time: 9,  reward: 20, diff: 1 },
  { type: 'MALWARE',   name: 'Malware Upload',       desc: 'Malicious payload detected in /sys/root.',      action: 'QUARANTINE',      damage: 22, time: 13, reward: 28, diff: 1 },
  { type: 'EXPLOIT',   name: 'Zero-Day Exploit',     desc: 'Unknown vulnerability being leveraged.',        action: 'DEPLOY PATCH',    damage: 32, time: 11, reward: 40, diff: 2 },
  { type: 'BRUTE',     name: 'Brute Force SSH',      desc: 'Auth server under brute-force assault.',        action: 'LOCKOUT IP',      damage: 18, time: 11, reward: 24, diff: 1 },
  { type: 'ROOTKIT',   name: 'Rootkit Install',      desc: 'Persistent backdoor being installed.',          action: 'TERMINATE PID',   damage: 38, time: 15, reward: 50, diff: 3 },
  { type: 'PHISH',     name: 'Phishing Intrusion',   desc: 'Social engineering attack in progress.',        action: 'INTERCEPT',       damage: 14, time: 13, reward: 20, diff: 1 },
  { type: 'RANSOM',    name: 'Ransomware Dropper',   desc: 'File encryption payload spreading.',            action: 'ISOLATE SYSTEM',  damage: 45, time: 14, reward: 58, diff: 3 },
  { type: 'MITM',      name: 'MITM Attack',          desc: 'Traffic being intercepted and relayed.',        action: 'REVOKE CERT',     damage: 20, time: 12, reward: 28, diff: 2 },
  { type: 'SQLINJ',    name: 'SQL Injection',        desc: 'Database being probed via injection.',          action: 'SANITIZE INPUT',  damage: 25, time: 11, reward: 32, diff: 2 },
  { type: 'CRYPTOMINER', name: 'Cryptominer',        desc: 'CPU being hijacked for mining.',                action: 'KILL PROCESS',    damage: 10, time: 16, reward: 16, diff: 1 },
];

/* ---- XP thresholds per level ---- */
function xpThreshold(level) {
  return Math.floor(80 * Math.pow(1.45, level - 1));
}

/* ============================================================
   GAME STATE
   ============================================================ */
let game = {
  running: false,
  credits: 0,
  health: 100,
  maxHealth: 100,
  level: 1,
  xp: 0,
  score: 0,
  elapsed: 0,       // seconds since start
  lastTick: 0,
  botnetAccum: 0,   // fractional credit accumulation

  upgrades: {
    cpu:        { level: 0 },
    firewall:   { level: 0 },
    encryption: { level: 0 },
    neural:     { level: 0 },
    botnet:     { level: 0 },
    gpu:        { level: 0 },
  },

  activeTasks: [],
  activeAttacks: [],
  selectedTaskId: null,

  taskIdCounter: 0,
  attackIdCounter: 0,

  nextTaskIn: 8,    // seconds until next task spawn
  nextAttackIn: 35, // seconds until first attack

  stats: {
    tasksCompleted: 0,
    tasksExpired: 0,
    attacksBlocked: 0,
    attacksMissed: 0,
    creditsEarned: 0,
    creditsSpent: 0,
  },

  intervals: {
    loop: null,
  },
};

/* ============================================================
   DOM references (filled on DOMContentLoaded)
   ============================================================ */
let $startScreen, $gameOverScreen, $gameScreen;
let $startBtn, $restartBtn;
let $creditsDisplay, $levelDisplay, $xpFill, $xpText, $healthFill, $healthText, $scoreDisplay;
let $tasksList, $taskCount, $attacksList, $threatCount;
let $terminalLog, $terminalInput;
let $statusMsg, $gameTime;
let $upgradeBtn, $upgradesModal, $closeUpgrades, $upgradesList;
let $gameOverStats;

/* ============================================================
   INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  $startScreen    = document.getElementById('startScreen');
  $gameOverScreen = document.getElementById('gameOverScreen');
  $gameScreen     = document.getElementById('gameScreen');
  $startBtn       = document.getElementById('startBtn');
  $restartBtn     = document.getElementById('restartBtn');
  $creditsDisplay = document.getElementById('creditsDisplay');
  $levelDisplay   = document.getElementById('levelDisplay');
  $xpFill         = document.getElementById('xpFill');
  $xpText         = document.getElementById('xpText');
  $healthFill     = document.getElementById('healthFill');
  $healthText     = document.getElementById('healthText');
  $scoreDisplay   = document.getElementById('scoreDisplay');
  $tasksList      = document.getElementById('tasksList');
  $taskCount      = document.getElementById('taskCount');
  $attacksList    = document.getElementById('attacksList');
  $threatCount    = document.getElementById('threatCount');
  $terminalLog    = document.getElementById('terminalLog');
  $terminalInput  = document.getElementById('terminalInput');
  $statusMsg      = document.getElementById('statusMsg');
  $gameTime       = document.getElementById('gameTime');
  $upgradeBtn     = document.getElementById('upgradeBtn');
  $upgradesModal  = document.getElementById('upgradesModal');
  $closeUpgrades  = document.getElementById('closeUpgrades');
  $upgradesList   = document.getElementById('upgradesList');
  $gameOverStats  = document.getElementById('gameOverStats');

  $startBtn.addEventListener('click', startGame);
  $restartBtn.addEventListener('click', () => { resetGame(); startGame(); });
  $upgradeBtn.addEventListener('click', openUpgrades);
  $closeUpgrades.addEventListener('click', closeUpgrades);
  $upgradesModal.addEventListener('click', (e) => { if (e.target === $upgradesModal) closeUpgrades(); });
  $terminalInput.addEventListener('input', onTerminalInput);
  $terminalInput.addEventListener('keydown', onTerminalKeydown);
});

/* ============================================================
   GAME START / RESET / OVER
   ============================================================ */
function startGame() {
  showScreen($gameScreen);
  $terminalInput.focus();
  game.running = true;
  game.lastTick = performance.now();
  log('System initialized. Welcome, ghost.', 'system');
  log('Type "help" for available commands.', 'info');
  log('First mission incoming...', 'info');

  // Spawn first task quickly
  game.nextTaskIn = 3;
  game.nextAttackIn = 35;

  // Start game loop
  game.intervals.loop = setInterval(gameTick, 250);
}

function resetGame() {
  clearInterval(game.intervals.loop);
  game = {
    running: false,
    credits: 0,
    health: 100,
    maxHealth: 100,
    level: 1,
    xp: 0,
    score: 0,
    elapsed: 0,
    lastTick: 0,
    botnetAccum: 0,
    upgrades: {
      cpu:        { level: 0 },
      firewall:   { level: 0 },
      encryption: { level: 0 },
      neural:     { level: 0 },
      botnet:     { level: 0 },
      gpu:        { level: 0 },
    },
    activeTasks: [],
    activeAttacks: [],
    selectedTaskId: null,
    taskIdCounter: 0,
    attackIdCounter: 0,
    nextTaskIn: 8,
    nextAttackIn: 35,
    stats: { tasksCompleted:0, tasksExpired:0, attacksBlocked:0, attacksMissed:0, creditsEarned:0, creditsSpent:0 },
    intervals: { loop: null },
  };
  $terminalLog.innerHTML = '';
  $tasksList.innerHTML    = '<div class="empty-state">Awaiting mission assignment\u2026</div>';
  $attacksList.innerHTML  = '<div class="empty-state">No threats detected</div>';
  $terminalInput.value    = '';
  updateHUD();
}

function gameOver() {
  game.running = false;
  clearInterval(game.intervals.loop);
  $gameOverStats.innerHTML = `
    <div>Survived: <span>${formatTime(game.elapsed)}</span></div>
    <div>Level reached: <span>${game.level}</span></div>
    <div>Score: <span>${game.score.toLocaleString()}</span></div>
    <div>Missions completed: <span>${game.stats.tasksCompleted}</span></div>
    <div>Attacks blocked: <span>${game.stats.attacksBlocked}</span></div>
    <div>Credits earned: <span>&#8383; ${game.stats.creditsEarned.toLocaleString()}</span></div>
  `;
  setTimeout(() => showScreen($gameOverScreen), 600);
}

/* ============================================================
   MAIN GAME TICK (called every 250ms)
   ============================================================ */
function gameTick() {
  if (!game.running) return;

  const now   = performance.now();
  const delta = Math.min((now - game.lastTick) / 1000, 1); // seconds, cap at 1s
  game.lastTick = now;
  game.elapsed += delta;

  // ---- Botnet passive income ----
  const botnetLevel = game.upgrades.botnet.level;
  if (botnetLevel > 0) {
    const rates = [0, 2, 5, 10];
    game.botnetAccum += rates[botnetLevel] * delta;
    if (game.botnetAccum >= 1) {
      const earned = Math.floor(game.botnetAccum);
      game.botnetAccum -= earned;
      addCredits(earned, false);
    }
  }

  // ---- Task spawning ----
  game.nextTaskIn -= delta;
  if (game.nextTaskIn <= 0 && game.activeTasks.length < 4) {
    spawnTask();
    const cpuLevel  = game.upgrades.cpu.level;
    const baseDelay = Math.max(6, 18 - game.level * 0.8);
    const cpuMult   = [1, 0.88, 0.75, 0.60, 0.45, 0.35][cpuLevel];
    game.nextTaskIn = baseDelay * cpuMult + (Math.random() * 4 - 2);
  }

  // ---- Auto-complete tasks (GPU) ----
  const gpuLevel = game.upgrades.gpu.level;
  if (gpuLevel > 0) {
    const autocompleteChance = [0, 0.05, 0.12, 0.22][gpuLevel];
    game.activeTasks.forEach(task => {
      if (!task.autoQueued && Math.random() < autocompleteChance * delta * 0.5) {
        task.autoQueued = true;
        const tId = task.id;
        setTimeout(() => {
          const t = game.activeTasks.find(x => x.id === tId);
          if (t) { log(`GPU auto-completed: ${t.name}`, 'system'); completeTask(tId, true); }
        }, 1500 + Math.random() * 1000);
      }
    });
  }

  // ---- Attack spawning ----
  game.nextAttackIn -= delta;
  if (game.nextAttackIn <= 0 && game.activeAttacks.length < 6) {
    spawnAttack();
    const baseDelay  = Math.max(8, 28 - game.level * 1.2);
    game.nextAttackIn = baseDelay + (Math.random() * 6 - 3);
  }

  // ---- Update task timers ----
  const expiredTasks = [];
  game.activeTasks.forEach(task => {
    task.timeLeft -= delta;
    if (task.timeLeft <= 0) expiredTasks.push(task.id);
  });
  expiredTasks.forEach(id => expireTask(id));

  // ---- Update attack timers ----
  const breachedAttacks = [];
  game.activeAttacks.forEach(atk => {
    atk.timeLeft -= delta;
    if (atk.timeLeft <= 0) breachedAttacks.push(atk.id);
  });
  breachedAttacks.forEach(id => missedAttack(id));

  // ---- Re-render cards (timer bars) ----
  renderTasks();
  renderAttacks();
  updateHUD();
}

/* ============================================================
   TASK SYSTEM
   ============================================================ */
function spawnTask() {
  const types = ['terminal', 'terminal', 'terminal', 'choice', 'rapid'];
  const type  = types[Math.floor(Math.random() * types.length)];

  let template;
  if      (type === 'terminal') template = randFrom(TERMINAL_TASKS);
  else if (type === 'choice')   template = randFrom(CHOICE_TASKS);
  else                          template = randFrom(RAPID_TASKS);

  const encMult   = [1, 1.15, 1.32, 1.52, 1.75, 2.0][game.upgrades.encryption.level];
  const baseReward = Math.round(template.reward * encMult * (1 + (game.level - 1) * 0.08));

  const task = {
    id:        ++game.taskIdCounter,
    type:      type,
    name:      template.name,
    desc:      template.desc,
    reward:    baseReward,
    xp:        template.xp + (game.level - 1) * 2,
    totalTime: template.time,
    timeLeft:  template.time,
    diff:      template.diff,
    autoQueued: false,
  };

  if (type === 'terminal') {
    task.command    = template.command;
    task.typed      = '';
  } else if (type === 'choice') {
    task.options = [...template.options];
    task.answer  = template.answer;
    task.chosen  = null;
  } else {
    task.label        = template.label;
    task.targetClicks = template.targetClicks;
    task.clicks       = 0;
  }

  game.activeTasks.push(task);
  log(`New mission: [${task.name}] | Reward: &#8383; ${task.reward}`, 'info');
  setStatus(`New mission assigned: ${task.name}`);
}

function completeTask(taskId, auto = false) {
  const idx  = game.activeTasks.findIndex(t => t.id === taskId);
  if (idx === -1) return;
  const task = game.activeTasks[idx];

  // Score
  const timeBonus = Math.max(0, Math.round((task.timeLeft / task.totalTime) * task.reward * 0.3));
  const total     = task.reward + timeBonus;

  addCredits(total);
  addXP(task.xp);
  game.score += total + task.xp * 2;
  game.stats.tasksCompleted++;

  log(`Mission complete: [${task.name}] +&#8383; ${total}${timeBonus ? ` (speed bonus +${timeBonus})` : ''}`, 'success');
  setStatus(`Mission [${task.name}] completed!`);

  if (!auto) showFloatLabel(`+&#8383; ${total}`, 'reward', $tasksList);

  // Animate card out
  const el = document.getElementById(`task-${taskId}`);
  if (el) {
    el.classList.add('completing');
    setTimeout(() => el.remove(), 400);
  }

  game.activeTasks.splice(idx, 1);
  if (game.selectedTaskId === taskId) {
    game.selectedTaskId = null;
    $terminalInput.value = '';
    $terminalInput.placeholder = 'select a mission or type a command\u2026';
  }
}

function expireTask(taskId) {
  const idx  = game.activeTasks.findIndex(t => t.id === taskId);
  if (idx === -1) return;
  const task = game.activeTasks[idx];

  log(`Mission expired: [${task.name}]`, 'warn');
  game.stats.tasksExpired++;

  const el = document.getElementById(`task-${taskId}`);
  if (el) {
    el.classList.add('expired');
    setTimeout(() => el.remove(), 300);
  }

  game.activeTasks.splice(idx, 1);
  if (game.selectedTaskId === taskId) {
    game.selectedTaskId = null;
    $terminalInput.value = '';
  }
}

function selectTask(taskId) {
  const task = game.activeTasks.find(t => t.id === taskId);
  if (!task || task.type !== 'terminal') return;
  game.selectedTaskId = taskId;
  $terminalInput.value = task.typed || '';
  $terminalInput.placeholder = 'type the command above\u2026';
  $terminalInput.focus();
  setStatus(`Mission selected: ${task.name}`);
}

/* ============================================================
   ATTACK SYSTEM
   ============================================================ */
function spawnAttack() {
  // Filter by difficulty (higher levels unlock harder attacks)
  const pool = ATTACK_TEMPLATES.filter(a => a.diff <= Math.min(3, 1 + Math.floor(game.level / 3)));
  const tmpl = randFrom(pool);

  const fwReduction = [0, 0.10, 0.20, 0.32, 0.46, 0.60][game.upgrades.firewall.level];
  const damage      = Math.round(tmpl.damage * (1 - fwReduction) * (1 + (game.level - 1) * 0.06));
  const neuralBonus = [0, 3, 6, 10][game.upgrades.neural.level];
  const totalTime   = tmpl.time + neuralBonus;

  const atk = {
    id:        ++game.attackIdCounter,
    type:      tmpl.type,
    name:      tmpl.name,
    desc:      tmpl.desc,
    action:    tmpl.action,
    damage:    damage,
    reward:    tmpl.reward,
    totalTime: totalTime,
    timeLeft:  totalTime,
  };

  game.activeAttacks.push(atk);
  log(`[THREAT] ${atk.name} detected! Respond immediately.`, 'error');
  setStatus(`INCOMING: ${atk.name} — block now!`);
}

function blockAttack(attackId) {
  const idx = game.activeAttacks.findIndex(a => a.id === attackId);
  if (idx === -1) return;
  const atk = game.activeAttacks[idx];

  addCredits(atk.reward);
  addXP(Math.ceil(atk.reward * 0.4));
  game.score += atk.reward * 2;
  game.stats.attacksBlocked++;

  log(`Attack blocked: [${atk.name}] +&#8383; ${atk.reward}`, 'success');
  showFloatLabel(`+&#8383; ${atk.reward}`, 'reward', $attacksList);
  setStatus(`Blocked: ${atk.name}!`);

  const el = document.getElementById(`atk-${attackId}`);
  if (el) {
    el.classList.add('blocking');
    setTimeout(() => el.remove(), 400);
  }

  game.activeAttacks.splice(idx, 1);
}

function missedAttack(attackId) {
  const idx = game.activeAttacks.findIndex(a => a.id === attackId);
  if (idx === -1) return;
  const atk = game.activeAttacks[idx];

  takeDamage(atk.damage, atk.name);
  game.stats.attacksMissed++;

  const el = document.getElementById(`atk-${attackId}`);
  if (el) {
    el.classList.add('missed');
    setTimeout(() => el.remove(), 300);
  }

  game.activeAttacks.splice(idx, 1);
}

function takeDamage(amount, source) {
  game.health = Math.max(0, game.health - amount);
  log(`Breach: [${source}] caused -${amount}% integrity`, 'error');
  showFloatLabel(`-${amount}%`, 'damage', $gameScreen);
  damageFlash();
  setStatus(`System damaged by ${source}! Integrity: ${game.health}%`);

  if (game.health <= 0) {
    log('CRITICAL: System integrity at 0%. SYSTEM BREACH.', 'error');
    gameOver();
  }
}

/* ============================================================
   TERMINAL INPUT
   ============================================================ */
function onTerminalInput() {
  const val = $terminalInput.value;

  // If a terminal task is selected, compare typed text
  if (game.selectedTaskId !== null) {
    const task = game.activeTasks.find(t => t.id === game.selectedTaskId);
    if (task && task.type === 'terminal') {
      task.typed = val;
      // Auto-complete on exact match
      if (val === task.command) {
        $terminalInput.value = '';
        completeTask(task.id);
      }
    }
  }
}

function onTerminalKeydown(e) {
  if (e.key === 'Enter') {
    const val = $terminalInput.value.trim();
    if (!val) return;

    // Check if it matches selected task command
    if (game.selectedTaskId !== null) {
      const task = game.activeTasks.find(t => t.id === game.selectedTaskId);
      if (task && task.type === 'terminal' && val === task.command) {
        $terminalInput.value = '';
        completeTask(task.id);
        return;
      }
    }

    // Process as a meta-command
    processCommand(val);
    $terminalInput.value = '';
  }
}

function processCommand(cmd) {
  const lower = cmd.toLowerCase().trim();
  log(`$ ${cmd}`, 'info');

  if (lower === 'help') {
    log('Available commands:', 'system');
    log('  help     — show this message', 'system');
    log('  status   — show system status', 'system');
    log('  credits  — show credit balance', 'system');
    log('  upgrade  — open upgrade terminal', 'system');
    log('  clear    — clear terminal log', 'system');
    log('  missions — list active missions', 'system');
  } else if (lower === 'status') {
    log(`Integrity: ${game.health}% | Level: ${game.level} | Score: ${game.score}`, 'system');
    log(`Active missions: ${game.activeTasks.length} | Active threats: ${game.activeAttacks.length}`, 'system');
  } else if (lower === 'credits') {
    log(`Credit balance: &#8383; ${game.credits.toLocaleString()}`, 'credit');
  } else if (lower === 'upgrade' || lower === 'upgrades') {
    openUpgrades();
  } else if (lower === 'clear') {
    $terminalLog.innerHTML = '';
  } else if (lower === 'missions') {
    if (game.activeTasks.length === 0) {
      log('No active missions.', 'info');
    } else {
      game.activeTasks.forEach(t => log(`[${t.type.toUpperCase()}] ${t.name} — &#8383; ${t.reward} | ${Math.ceil(t.timeLeft)}s left`, 'info'));
    }
  } else {
    log(`Unknown command: ${cmd}`, 'warn');
    log('Type "help" for available commands.', 'info');
  }
}

/* ============================================================
   UPGRADES SYSTEM
   ============================================================ */
function openUpgrades() {
  renderUpgradeList();
  $upgradesModal.classList.add('open');
  $upgradesModal.setAttribute('aria-hidden', 'false');
}

function closeUpgrades() {
  $upgradesModal.classList.remove('open');
  $upgradesModal.setAttribute('aria-hidden', 'true');
}

function renderUpgradeList() {
  $upgradesList.innerHTML = '';
  Object.values(UPGRADE_DEFS).forEach(def => {
    const currentLevel = game.upgrades[def.id].level;
    const isMaxed      = currentLevel >= def.maxLevel;
    const cost         = isMaxed ? null : def.costs[currentLevel];
    const canAfford    = !isMaxed && game.credits >= cost;
    const effectText   = isMaxed ? def.effects[def.maxLevel - 1] : def.effects[currentLevel];

    const card = document.createElement('div');
    card.className = `upgrade-card${isMaxed ? ' maxed' : ''}`;

    // Level pips
    const pips = Array.from({ length: def.maxLevel }, (_, i) => {
      const filled = i < currentLevel;
      const amber  = currentLevel >= def.maxLevel;
      return `<div class="pip${filled ? ` filled${amber ? ' amber' : ''}` : ''}"></div>`;
    }).join('');

    card.innerHTML = `
      <div class="upg-top">
        <div class="upg-name">${def.icon} ${def.name}</div>
        <div class="upg-level">LVL <span class="lvl-cur">${currentLevel}</span>/${def.maxLevel}</div>
      </div>
      <div class="upg-desc">${def.desc}</div>
      <div class="upg-effect">${isMaxed ? '&#x2714; MAXED: ' : 'NEXT: '}${effectText}</div>
      <div class="upg-pips">${pips}</div>
      ${isMaxed
        ? `<button class="btn-buy maxed-btn" disabled>[ FULLY UPGRADED ]</button>`
        : `<button class="btn-buy${canAfford ? '' : ''}" ${canAfford ? '' : 'disabled'} data-id="${def.id}">
             [ PURCHASE &nbsp;<span class="cost-amount">&#8383; ${cost.toLocaleString()}</span> ]
           </button>`
      }
    `;

    if (!isMaxed) {
      const btn = card.querySelector('.btn-buy');
      if (btn && canAfford) {
        btn.addEventListener('click', () => purchaseUpgrade(def.id));
      }
    }

    $upgradesList.appendChild(card);
  });
}

function purchaseUpgrade(id) {
  const def          = UPGRADE_DEFS[id];
  const currentLevel = game.upgrades[id].level;
  if (currentLevel >= def.maxLevel) return;

  const cost = def.costs[currentLevel];
  if (game.credits < cost) {
    log(`Insufficient credits for ${def.name} (need &#8383; ${cost})`, 'warn');
    return;
  }

  game.credits -= cost;
  game.stats.creditsSpent += cost;
  game.upgrades[id].level++;

  log(`Upgrade purchased: [${def.name}] → Level ${game.upgrades[id].level}`, 'success');
  showFloatLabel(`-&#8383; ${cost}`, 'damage', $upgradesModal);
  setStatus(`Upgraded: ${def.name} to level ${game.upgrades[id].level}`);

  updateHUD();
  renderUpgradeList(); // refresh modal
}

/* ============================================================
   RENDERING — TASKS
   ============================================================ */
function renderTasks() {
  if (game.activeTasks.length === 0) {
    $tasksList.innerHTML = '<div class="empty-state">Awaiting mission assignment\u2026</div>';
    $taskCount.textContent = '0/4';
    return;
  }

  $taskCount.textContent = `${game.activeTasks.length}/4`;

  game.activeTasks.forEach(task => {
    let el = document.getElementById(`task-${task.id}`);
    const isNew = !el;
    if (isNew) {
      el = document.createElement('div');
      el.id        = `task-${task.id}`;
      el.className = 'task-card';
      $tasksList.querySelector('.empty-state')?.remove();
      $tasksList.appendChild(el);
    }

    const active   = game.selectedTaskId === task.id;
    const pct      = (task.timeLeft / task.totalTime) * 100;
    const timerCls = pct < 25 ? 'danger' : pct < 50 ? 'warning' : '';

    el.className = `task-card${active ? ' active' : ''}${pct < 25 ? ' expiring' : ''}`;

    let innerHtml = `
      <div class="task-top">
        <span class="task-type-badge badge-${task.type}">${task.type.toUpperCase()}</span>
        <span class="task-reward">&#8383; ${task.reward}</span>
      </div>
      <div class="task-name">${task.name}</div>
      <div class="task-desc">${task.desc}</div>
    `;

    if (task.type === 'terminal') {
      const cmd    = task.command;
      const typed  = active ? ($terminalInput.value || task.typed || '') : (task.typed || '');
      let charHtml = '';
      for (let i = 0; i < cmd.length; i++) {
        let cls;
        if (i < typed.length) {
          cls = typed[i] === cmd[i] ? 'ch-correct' : 'ch-wrong';
        } else if (i === typed.length) {
          cls = active ? 'ch-cursor' : 'ch-pending';
        } else {
          cls = 'ch-pending';
        }
        const ch = cmd[i] === ' ' ? '&nbsp;' : cmd[i].replace(/</g,'&lt;').replace(/>/g,'&gt;');
        charHtml += `<span class="ch ${cls}">${ch}</span>`;
      }
      innerHtml += `<div class="task-command">${charHtml}</div>`;
    } else if (task.type === 'choice') {
      const choicesBtns = task.options.map((opt, i) => {
        let cls = '';
        if (task.chosen !== null) {
          if (i === task.answer) cls = 'correct';
          else if (i === task.chosen && i !== task.answer) cls = 'wrong';
        }
        return `<button class="btn-choice ${cls}" data-task="${task.id}" data-idx="${i}" ${task.chosen !== null ? 'disabled' : ''}>${opt}</button>`;
      }).join('');
      innerHtml += `<div class="task-choices">${choicesBtns}</div>`;
    } else if (task.type === 'rapid') {
      const done = task.clicks >= task.targetClicks;
      innerHtml += `
        <div class="rapid-area">
          <button class="btn-rapid" data-task="${task.id}" ${done ? 'disabled' : ''}>${task.label}</button>
          <div class="rapid-progress">${task.clicks} / ${task.targetClicks} clicks</div>
        </div>
      `;
    }

    innerHtml += `
      <div class="task-timer-wrap">
        <div class="task-timer-bar ${timerCls}" style="width:${pct}%"></div>
      </div>
    `;

    el.innerHTML = innerHtml;

    // Event listeners (always re-attach since innerHTML was replaced)
    if (task.type === 'terminal') {
      el.addEventListener('click', () => selectTask(task.id));
    } else if (task.type === 'choice') {
      el.querySelectorAll('.btn-choice').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          const idx = parseInt(btn.dataset.idx, 10);
          const t   = game.activeTasks.find(x => x.id === parseInt(btn.dataset.task, 10));
          if (!t || t.chosen !== null) return;
          t.chosen = idx;
          if (idx === t.answer) {
            renderTasks();
            setTimeout(() => completeTask(t.id), 300);
          } else {
            log(`Wrong answer on [${t.name}]. Mission failed!`, 'warn');
            renderTasks();
            setTimeout(() => expireTask(t.id), 600);
          }
        });
      });
    } else if (task.type === 'rapid') {
      const btn = el.querySelector('.btn-rapid');
      if (btn) {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          const t = game.activeTasks.find(x => x.id === parseInt(btn.dataset.task, 10));
          if (!t) return;
          t.clicks++;
          if (t.clicks >= t.targetClicks) {
            completeTask(t.id);
          }
          // Update display without full re-render (performance)
          const prog = el.querySelector('.rapid-progress');
          if (prog) prog.textContent = `${t.clicks} / ${t.targetClicks} clicks`;
          if (t.clicks >= t.targetClicks) btn.disabled = true;
        });
      }
    }
  });

  // Remove DOM elements for tasks that no longer exist
  const activeIds = new Set(game.activeTasks.map(t => t.id));
  $tasksList.querySelectorAll('.task-card').forEach(el => {
    const id = parseInt(el.id.replace('task-', ''), 10);
    if (!activeIds.has(id)) el.remove();
  });
}

/* ============================================================
   RENDERING — ATTACKS
   ============================================================ */
function renderAttacks() {
  if (game.activeAttacks.length === 0) {
    $attacksList.innerHTML = '<div class="empty-state">No threats detected</div>';
    $threatCount.textContent = '0';
    $threatCount.classList.remove('danger');
    return;
  }

  $threatCount.textContent = `${game.activeAttacks.length}`;
  $threatCount.classList.add('danger');

  game.activeAttacks.forEach(atk => {
    let el = document.getElementById(`atk-${atk.id}`);
    if (!el) {
      el = document.createElement('div');
      el.id        = `atk-${atk.id}`;
      el.className = 'attack-card';
      $attacksList.querySelector('.empty-state')?.remove();
      $attacksList.appendChild(el);
    }

    const pct = (atk.timeLeft / atk.totalTime) * 100;
    el.innerHTML = `
      <div class="attack-top">
        <span class="attack-badge">${atk.type}</span>
        <span class="attack-dmg">-${atk.damage}% HP</span>
      </div>
      <div class="attack-name">${atk.name}</div>
      <div class="attack-desc">${atk.desc}</div>
      <div class="attack-timer-wrap">
        <div class="attack-timer-bar" style="width:${pct}%"></div>
      </div>
      <button class="btn-defend" data-atk="${atk.id}">[ ${atk.action} ]</button>
    `;

    el.querySelector('.btn-defend').addEventListener('click', () => blockAttack(atk.id));
  });

  // Remove stale DOM elements
  const activeIds = new Set(game.activeAttacks.map(a => a.id));
  $attacksList.querySelectorAll('.attack-card').forEach(el => {
    const id = parseInt(el.id.replace('atk-', ''), 10);
    if (!activeIds.has(id)) el.remove();
  });
}

/* ============================================================
   HUD UPDATE
   ============================================================ */
function updateHUD() {
  $creditsDisplay.innerHTML = `&#8383; ${game.credits.toLocaleString()}`;
  $levelDisplay.textContent  = String(game.level).padStart(2, '0');
  $scoreDisplay.textContent  = game.score.toLocaleString();

  const xpNeeded = xpThreshold(game.level);
  const xpPct    = Math.min(100, Math.round((game.xp / xpNeeded) * 100));
  $xpFill.style.width = `${xpPct}%`;
  $xpText.textContent = `${game.xp}/${xpNeeded}`;

  const hPct = Math.max(0, Math.round(game.health));
  $healthFill.style.width = `${hPct}%`;
  $healthText.textContent = `${hPct}%`;
  $healthFill.className   = `bar-fill health-fill${hPct < 30 ? ' low' : hPct < 60 ? ' mid' : ''}`;

  $gameTime.textContent = formatTime(game.elapsed);
}

/* ============================================================
   CREDIT & XP HELPERS
   ============================================================ */
function addCredits(amount, showFloat = true) {
  game.credits          += amount;
  game.stats.creditsEarned += amount;
}

function addXP(amount) {
  game.xp += amount;
  const needed = xpThreshold(game.level);
  if (game.xp >= needed) {
    game.xp -= needed;
    game.level++;
    onLevelUp();
  }
}

function onLevelUp() {
  log(`LEVEL UP! Now Level ${game.level}. Threats increasing.`, 'system');
  showLevelUpBanner();
  setStatus(`Level ${game.level} reached!`);
  // Restore some health on level up
  game.health = Math.min(game.maxHealth, game.health + 15);
}

/* ============================================================
   UI HELPERS
   ============================================================ */
function log(msg, type = 'info') {
  const div = document.createElement('div');
  div.className = `log-line log-${type}`;
  div.innerHTML = msg;
  $terminalLog.appendChild(div);
  // Keep only last 120 lines
  while ($terminalLog.children.length > 120) $terminalLog.removeChild($terminalLog.firstChild);
  $terminalLog.scrollTop = $terminalLog.scrollHeight;
}

function setStatus(msg) {
  $statusMsg.textContent = msg;
}

function showFloatLabel(html, type, anchorEl) {
  const rect  = anchorEl.getBoundingClientRect ? anchorEl.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
  const label = document.createElement('div');
  label.className    = `float-label ${type}`;
  label.innerHTML    = html;
  label.style.left   = `${rect.left + rect.width / 2 - 40}px`;
  label.style.top    = `${rect.top  + rect.height / 2}px`;
  document.body.appendChild(label);
  setTimeout(() => label.remove(), 1300);
}

function damageFlash() {
  const flash = document.createElement('div');
  flash.className = 'damage-flash';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 400);
}

function showLevelUpBanner() {
  const banner = document.createElement('div');
  banner.className = 'levelup-banner';
  banner.textContent = `// LEVEL UP — ${game.level} //`;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 2100);
}

/* ============================================================
   UTILITIES
   ============================================================ */
function randFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function showScreen(el) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}
