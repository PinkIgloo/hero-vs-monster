// light and dark theme is a must have!
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
// save preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
});
document.getElementById('LogToggle').addEventListener('click', () => {
  const log = document.getElementById('battleLog');
  const toggleBtn = document.getElementById('LogToggle');

  log.classList.toggle('hidden');

  if (log.classList.contains('hidden')) {
    toggleBtn.textContent = 'Show Battle Log';
  } else {
    toggleBtn.textContent = 'Hide Battle Log';
  
    // Scroll to bottom after rendering
    requestAnimationFrame(() => {
      log.scrollTop = log.scrollHeight;
    });
  };
});
// check saved preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
});
// game data
const gameData = {
    // arrays
    characters:[
        {
            id: 'mageBtn',
            role: 'Mage',
            name: 'Marian',
            type: 'character',
            baseMana: 210,
            baseHealth: 40,
            mana: 210, 
            health: 40, 
            alive: true,
            image: 'images/femaleMage.png',
            flavorText: 'Marian is self trained and a bit of a pyromaniac - the magic is flashy and chaotic, but brutally effective!',
            enduringEffects: [
                {
                    active: false, 
                    name: null,
                    emoji: null, 
                    damage: 0, 
                    debuff: 0, 
                    duration: 0
                }
            ],
            attacks: [
                {
                    name: 'Fire Bolt',
                    damage: '4d8', 
                    manaCost: 50, 
                    inflictingEffects: [
                        {
                            name: 'Burn', 
                            damage: 5, 
                            debuff: 0, 
                            duration: 4
                        }
                    ]
                },
                {
                    name: 'Illusion',
                    damage: '1d6', 
                    manaCost: 30, 
                    inflictingEffects: [
                        {
                            name: 'Confused', 
                            damage: 0, 
                            debuff: 4, 
                            duration: 2
                        }
                    ]
                },
                {
                    name: 'Empty Curse',
                    damage: '1d6', 
                    manaCost: 0, 
                    inflictingEffects: [
                        {
                            name: 'Poison', 
                            damage: 2, 
                            debuff: 0, 
                            duration: 2
                        }
                    ]
                }
            ],
        },
        {
            id: 'warriorBtn',
            role: 'Warrior',
            name: 'Wanda',
            type: 'character',
            baseMana: 70,
            baseHealth: 80,
            mana: 70, 
            health: 80, 
            alive: true,
            image: 'images/femaleWarrior.png',
            flavorText: 'Wanda is fiercly loyal but tends to wander and get lost when no one is looking - probably looking for loot!',
            enduringEffects: [
                {
                    active: false, 
                    name: null,
                    emoji: null, 
                    damage: 0, 
                    debuff: 0, 
                    duration: 0
                }
            ],
            attacks: [
                {
                    name: 'Mighty Sword',
                    damage: '2d20', 
                    manaCost: 20, 
                    inflictingEffects: [
                        {
                            name: 'Bleed', 
                            damage: 3, 
                            debuff: 0, 
                            duration: 3
                        }
                    ]
                },
                {
                    name: 'Shield Bash',
                    damage: '3d8', 
                    manaCost: 0, 
                    inflictingEffects: [
                        {
                            name: 'None', 
                            damage: 0, 
                            debuff: 0, 
                            duration: 0
                        }
                    ]
                },
                {
                    name: 'Slice and Dice',
                    damage: '3d20', 
                    manaCost: 15, 
                    inflictingEffects: [
                        {
                            name: 'None', 
                            damage: 0, 
                            debuff: 0, 
                            duration: 0
                        }
                    ]
                }
            ],
        },
        {
            id: 'rogueBtn',
            role: 'Rogue',
            name: 'Rianna',
            type: 'character',
            baseMana: 95,
            baseHealth: 65,
            mana: 95, 
            health: 65, 
            alive: true,
            image: 'images/femaleRogue.png',
            flavorText: 'Rianna is still figuring out what she fights for. Coin? Glory? The adrenaline rush?',
            enduringEffects: [
                {
                    active: false, 
                    name: null,
                    emoji: null, 
                    damage: 0, 
                    debuff: 0, 
                    duration: 0
                }
            ],
            attacks: [
                {
                    name: 'Power Shot',
                    damage: '3d8', 
                    manaCost: 25, 
                    inflictingEffects: [
                        {
                            name: 'None', 
                            damage: 0, 
                            debuff: 0, 
                            duration: 0
                        }
                    ]
                },
                {
                    name: 'Deadly Dagger',
                    damage: '2d20', 
                    manaCost: 0, 
                    inflictingEffects: [
                        {
                            name: 'Poison', 
                            damage: 3, 
                            debuff: 0, 
                            duration: 2
                        }
                    ]
                },
                {
                    name: 'Magic Trap',
                    damage: '3d8', 
                    manaCost: 22, 
                    inflictingEffects: [
                        {
                            name: 'None', 
                            damage: 0, 
                            debuff: 0, 
                            duration: 0
                        }
                    ]
                }
            ],
        },
    ],
    monsters: [
        {
            name: 'Hobgoblin',
            type: 'monster',
            minHealth: 200,
            maxHealth: 250,
            health: 0,
            alive: true,
            image: 'images/hobgoblin.png',
            flavorText: 'Smelly little beasties that like shiny things and frog eye soup - but only when it is made by mom!',
            enduringEffects: [
                {
                    active: false, 
                    name: null,
                    emoji: null, 
                    damage: 0, 
                    debuff: 0, 
                    duration: 0
                }
            ],
            attacks: [
                {
                    name: 'Stink Bomb', 
                    damage: '2d6', 
                    inflictingEffects: [
                        {
                            name: 'Poison', 
                            damage: 1, 
                            debuff: 0, 
                            duration: 3
                        }
                    ]
                },
                {
                    name: 'Headbutt', 
                    damage: '3d8', 
                    inflictingEffects: [
                        {
                            name: 'Confused', 
                            damage: 0, 
                            debuff: 2, 
                            duration: 2
                        }
                    ]
                },
                {
                    name: 'Knee Biter', 
                    damage: '1d20', 
                    inflictingEffects: [
                        {
                            name: 'None', 
                            damage: 0, 
                            debuff: 0, 
                            duration: 0
                        }
                    ]
                }
            ],
        },
        {
            name: 'Wyvern',
            type: 'monster',
            minHealth: 200,
            maxHealth: 250,
            health: 0,
            alive: true,
            image: 'images/wyvern.png',
            flavorText: 'A screech that will stop you cold and a tail like a whip. Very territorial during breeding season!',
            enduringEffects: [
                {
                    active: false, 
                    name: null,
                    emoji: null, 
                    damage: 0, 
                    debuff: 0, 
                    duration: 0
                }
            ],
            attacks: [
                {
                    name: 'Tail Slash', 
                    damage: '2d20', 
                    inflictingEffects: [
                        {
                            name: 'None', 
                            damage: 0, 
                            debuff: 0, 
                            duration: 0
                        }
                    ]
                },
                {
                    name: 'Sonic Screech', 
                    damage: '2d4', 
                    inflictingEffects: [
                        {
                            name: 'Confused', 
                            damage: 0, 
                            debuff: 3, 
                            duration: 3
                        }
                    ]
                },
                {
                    name: 'Claws of Carnage', 
                    damage: '3d6', 
                    inflictingEffects: [
                        {
                            name: 'Bleed', 
                            damage: 2, 
                            debuff: 0, 
                            duration: 2
                        }
                    ]
                }
            ]
        },
        {
            name: 'Rock Golem',
            type: 'monster',
            minHealth: 200,
            maxHealth: 250,
            health: 0,
            alive: true,
            image: 'images/rockGolem.png',
            flavorText: 'If you find dusty footprints - you are likely on the trail of a Rock Golem, so check the cavern wall for eyes',
            enduringEffects: [
                {
                    active: false, 
                    name: null,
                    emoji: null, 
                    damage: 0, 
                    debuff: 0, 
                    duration: 0
                }
            ],
            attacks: [
                {
                    name: 'Rumbling Roll', 
                    damage: '3d6', 
                    inflictingEffects: [
                        {
                            name: 'None', 
                            damage: 0, 
                            debuff: 0, 
                            duration: 0
                        }
                    ]
                },
                {
                    name: 'Stone Hail Storm', 
                    damage: '1d20', 
                    inflictingEffects: [
                        {
                            name: 'None', 
                            damage: 0, 
                            debuff: 0, 
                            duration: 0
                        }
                    ]
                },
                {
                    name: 'Granite Punch', 
                    damage: '3d8', 
                    inflictingEffects: [
                        {
                            name: 'Confused', 
                            damage: 0, 
                            debuff: 2, 
                            duration: 3
                        }
                    ]
                }
            ],
        }
    ],
    // objects
    emoji: {
        game: {
            turn: '⏰',
            alert: '⚠️',
            reset: '🔁',   
        },
        effect: {
            burn: '🔥',
            poison: '☠️',
            confused: '💫',
            bleed: '🩸'
        },
        monster: {
            appears: '🎯',
            health: '💙',
            attack: '💥',
            effectCleared: '😈',
            effectActive: '🌀',
            effectDamage: '🔷',
            effectDebuff: '⛓️‍💥',
            death: '🏆',
        },
        character: {
            health: '❤️',
            mana: '✨',
            attack: '⚔️',
            effectCleared: '💪',
            effectActive: '💢',
            effectDamage: '🔶',
            effectDebuff: '🤕',
            alive: '😊',
            death: '😵',
            partyDeath: '💀'
        },
    },
    emojiDescription: {
        '⏰': 'Turn timer',
        '⚠️': 'Alert player',
        '🔁': 'Game restarted',
        '🔥': 'Burn',
        '☠️': 'Poison',
        '💫': 'Confused',
        '🩸': 'Bleed',
        '🎯': 'Monster appears',
        '💙': 'Monster health',
        '💥': 'Monster attack',
        '😈': 'Monster is clear of effect',
        '🌀': 'Monster is inflicted with effect',
        '🔷': 'Monster takes damage from effect',
        '⛓️‍💥': 'Monster attack damage reduced from effect',
        '🏆': 'Monster has been slain',
        '❤️': 'Character health',
        '✨': 'Character mana',
        '⚔️': 'Character attack',
        '💪': 'Character is clear of effect',
        '💢': 'Character is inflicted with effect',
        '🔶': 'Character takes damage from effect',
        '🤕': 'Character attack damage reduced from effect',
        '😵': 'Character has fallen',
        '💀': 'Party wipe'
    },
    effectDescriptions: {
        burn: "Monster takes 2 damage for 3 turns.",
        poison: "Monster takes 2 damage for 2 turns.",
        confused: "Monster does 5 less damage for 2 turns",
        bleed: "Monster takes 2 damage for 3 turns",
        none: "No status effect from this attack."
    }
};
// global variables
let activeMonster = false;
let activeCharacter = false;
let monsterData = null;
let characterData = null;
let turnCounter = 1;
let gameOver = false;
let selectedAttack = null;
let randomAttack = null;
        // panel displays
const startPanel = document.getElementById('startPanel');
const attackInfoPanel = document.getElementById('attackInfo');
const attackButtonsContainer = document.getElementById('attackButtonsContainer');
const effectContainer = document.getElementById('effectContainer');
const characterHealth = document.getElementById('characterHealth');
const characterMana = document.getElementById('characterMana');
const battleLog = document.getElementById('battleLog');
        // buttons
const enterDungeonBtn = document.getElementById('enterDungeonBtn');
const nextTurnBtn = document.getElementById('nextTurnBtn');
const battleLogBtn = document.getElementById('logToggle');
const printLogBtn = document.getElementById('printLog');
const playAgainBtn = document.getElementById('playAgain');
const mageBtn = document.getElementById('mage');
const warriorBtn = document.getElementById('warrior');
const rogueBtn = document.getElementById('rogue');

// initialize game
welcomePanel();
renderHeroButtons();
// buttons
enterDungeonBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * gameData.monsters.length);
    selectedMonster = gameData.monsters[randomIndex];
    activeMonster = true;
    monsterData = selectedMonster;
    monsterData.health = Math.floor(Math.random() * (monsterData.maxHealth - monsterData.minHealth + 1)) + monsterData.minHealth;
    monsterDisplay(monsterData);

    playerMessage(`Select an attack to battle the ${monsterData.name}`);
    battleLog.textContent = '';
    logMessage(`${gameData.emoji.game.turn} --- Turn ${turnCounter} ---`)
    logMessage(`${gameData.emoji.monster.appears} ${monsterData.name} appears`);
    logMessage(`${gameData.emoji.monster.health} Starting Health: ${monsterData.health}`);
    
    enterDungeonBtn.disabled = true;
    enterDungeonBtn.textContent = "Dungeon Entered";
});
nextTurnBtn.addEventListener('click', () => {
    
    displayStatusEffect(monsterData, 'monsterStatusEffect');
    activeCharacter = false;
    characterData = null;
    selectedAttack = null;
    randomAttack = null;
    turnCounter++;

    playerMessage(`Round ${turnCounter} begins! Select a Hero and attack`);
    logMessage(`${gameData.emoji.game.turn} --- Turn ${turnCounter} ---`);
    gameMessage('');

    hideElement('gameMessagePanel');
    hideElement('nextTurnBtn');
    renderHeroButtons();
});
function renderHeroButtons() {
  if (gameData.characters[0].alive) {
    mageBtn.textContent =`${gameData.emoji.character.alive} Mage`;
    mageBtn.disabled = false;
    mageBtn.classList.remove('disabled-button');
    mageBtn.onclick = () => {
      characterData = gameData.characters[0];
      activeCharacter = true;
      characterDisplay(characterData);
      hideElement('startPanel');    
      attackPanel();
    };
  } else {
    mageBtn.textContent = `${gameData.emoji.character.death} Mage`;
  };

  if (gameData.characters[1].alive) {
    warriorBtn.textContent = `${gameData.emoji.character.alive} Warrior`;
    warriorBtn.disabled = false;
    warriorBtn.classList.remove('disabled-button');
    warriorBtn.onclick = () => {
      characterData = gameData.characters[1];
      activeCharacter = true;
      characterDisplay(characterData);
      hideElement('startPanel');
      attackPanel();
    };
  } else {
    warriorBtn.textContent = `${gameData.emoji.character.death} Warrior`;
  };

  if (gameData.characters[2].alive) {
    rogueBtn.textContent = `${gameData.emoji.character.alive} Rogue`;
    rogueBtn.disabled = false;
    rogueBtn.classList.remove('disabled-button');
    rogueBtn.onclick = () => {
      characterData = gameData.characters[2];
      activeCharacter = true;
      characterDisplay(characterData);
      hideElement('startPanel');
      attackPanel();
    };
  } else {
    rogueBtn.textContent = `${gameData.emoji.character.death} Rogue`;
  };
};
// text boxes and displays
function welcomePanel () {
    startPanel.innerHTML = `<h2 class='welcome'>Welcome!</h2><br>
    <p>Hero vs Monster is a Dungeons and Dragons style mini-game.</p>
    <br><p>A couple notes for those who don't play DnD...</p><br>
    <ol>
    <li>Attack damage is calculated using dice. An attack of 2d8 means 2 dice will be rolled and each die has 8 sides.</li>
    <br>
    <li>Some attacks will inflict an effect - these do not stack! If the target of the attack already has an effect, another will not be applied.</li>
    <br>
    <li>A damage effect occurs at the end of an attack turn. A debuff occurs at the start of an attack turn.</li>
    </ol>`;
    
};
function attackPanel () {
    hideElement('gameMessagePanel');
    showElement('attackInfo');
    renderAttackOptions(characterData);    
}
function characterDisplay (character) {
    const characterName = document.getElementById('characterName');
    const characterImage = document.getElementById('characterImage');
    const characterFlavor = document.getElementById('characterFlavor');
    const characterHealthLabel = document.getElementById('characterHealthLabel');    
    const characterManaLabel = document.getElementById('characterManaLabel');

    characterName.textContent = characterData.name
    characterImage.src = characterData.image;
    characterFlavor.textContent = characterData.flavorText;
    characterHealthLabel.textContent = `Health ${getEntityEmoji(character, 'health')}: `
    characterHealth.textContent = `${character.health}`;
    characterManaLabel.textContent = `Mana ${getEntityEmoji(character, 'mana')}: `
    characterMana.textContent = `${character.mana}`;
    displayStatusEffect(characterData, 'characterStatusEffect')
    renderAttackOptions(characterData);    
};
function monsterDisplay (monsterData) {
    const monsterName = document.getElementById('monsterName');
    const monsterImage = document.getElementById('monsterImage');
    const monsterFlavor = document.getElementById('monsterFlavor');
    const monsterHealth = document.getElementById('monsterHealth');
    const monsterHealthLabel = document.getElementById('monsterHealthLabel');
    
    monsterName.textContent = monsterData.name;
    monsterImage.src = monsterData.image;
    monsterFlavor.textContent = monsterData.flavorText;
    monsterHealth.textContent = `${monsterData.health}`;
    monsterHealthLabel.textContent = `${getEntityEmoji(monsterData, 'health')} Health: `;
}
function playerMessage(prompt) {
  const promptBox = document.getElementById('playerMessage');
  promptBox.textContent = prompt;
};
function gameMessage(message, useHTML = false, append = false) {
    const gameMessageBox = document.getElementById('gameMessagePanel');
    
  if (useHTML) {
    gameMessageBox.innerHTML = append
      ? gameMessageBox.innerHTML + message
      : message || '';
  } else {
    gameMessageBox.textContent = append
      ? gameMessageBox.textContent + message
      : message || '';
  }
};
function logMessage(message) {
  const log = document.getElementById('battleLog');
  const entry = document.createElement('div');
  entry.classList.add('battle-log-entry');
  entry.textContent = message;
  log.appendChild(entry);
  log.scrollTo({ top: log.scrollHeight, behavior: 'smooth' });
};
// handy helper functions
function showElement(id) {
  document.getElementById(id).classList.remove('hidden');
};
function hideElement(id) {
  document.getElementById(id).classList.add('hidden');
};
function getEntity(type, index) {
    if (type === 'character') return gameData.characters[index];
    if (type === 'monster') return gameData.monsters[index];
    throw new Error(`getEntity() failed — Unknown entity type: "${type}". Expected character or monster`);
};
function getEffectEmoji(effectName) {
  switch (effectName) {
    case 'Poison':
        return gameData.emoji.effect.poison;
    case 'Bleed':
        return gameData.emoji.effect.bleed;
    case 'Confused':
        return gameData.emoji.effect.confused;
    case 'Burn':
        return gameData.emoji.effect.burn;
    default:
        return '';
  };
};
function getEffectDescription(description) {
  switch (description) {
    case 'poison':
        return gameData.effectDescriptions.poison;
    case 'bleed':
        return gameData.effectDescriptions.bleed;
    case 'confused':
        return gameData.effectDescriptions.confused;
    case 'burn':
        return gameData.effectDescriptions.burn;
    case 'none':
        return gameData.effectDescriptions.none;
    default:
        return '';
  };
};
function getEntityEmoji(entity, emoji) {
    const fallback = '';
    if (!entity || !entity) return fallback;
    return entity.type === 'character'
        ? gameData.emoji.character?.[emoji] || fallback
        : gameData.emoji.monster?.[emoji] || fallback;
};
function updateStats() {
    monsterHealth.textContent = `${monsterData.health}`;
    characterHealth.textContent = `${characterData.health}`;
    characterMana.textContent = `${characterData.mana}`;
};
function disableAllHeroButtons() {
  mageBtn.classList.add('disabled-button');
  mageBtn.disabled = true;

  warriorBtn.classList.add('disabled-button');
  warriorBtn.disabled = true;

  rogueBtn.classList.add('disabled-button');
  rogueBtn.disabled = true;
};
function showDescription(text) {
  const descriptionBox = document.getElementById('descriptionBox');  
  descriptionBox.textContent = text || '';
};
function displayStatusEffect(entity, elementId) {
  const effect = entity.enduringEffects[0];
  const element = document.getElementById(elementId);

  if (effect.name !== 'None' && effect.active) {
    const turnText = effect.duration === 1 ? 'turn' : 'turns';
    let effectText = `${effect.emoji} ${effect.name}: `;

    if (effect.damage !== 0) {
      effectText += `${effect.damage} dmg for ${effect.duration} ${turnText}`;
    } else if (effect.debuff !== 0) {
      effectText += `${effect.debuff} less attack dmg for ${effect.duration} ${turnText}`;
    };

    element.textContent = effectText;
  };

  if (!effect.active) {
    element.textContent = ''
  }
};
function diceRoller(dice) {
  const [count, sides] = dice.toLowerCase().split('d').map(Number);
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
};
function attackRandomizer() {
    const indexSelect = Math.floor(Math.random () * monsterData.attacks.length);
    randomAttack = monsterData.attacks[indexSelect];
};
function printBattleLog() {
    
    const finalLog = document.getElementById('battleLog');
    const previousDisplay = finalLog.style.display;
    finalLog.style.display = 'block';
    const now = new Date();
    const timestamp = now.toLocaleString(); // Format: MM/DD/YYYY, HH:MM:SS
    const headerHTML = `
        <div id="printHeader">
            <h2>Battle Log</h2>
            <p><em>Printed on: ${timestamp}</em></p>
            <hr>
        </div>
    `;
    finalLog.insertAdjacentHTML('afterbegin', headerHTML);
    window.print();
    const header = document.getElementById('printHeader');
    if (header) header.remove();
    finalLog.style.display = previousDisplay;
};
// primary game functions
function renderAttackOptions(characterData) {
    
    attackButtonsContainer.innerHTML = '';
    characterData.attacks.forEach(attack => {

    const button = document.createElement('button');
    button.classList.add('attack-button');

    const disableButton = characterData.mana < attack.manaCost || !characterData.alive;
    if (disableButton) button.classList.add('disabled-button');

    const effectName = attack.inflictingEffects[0]?.name || 'none';
    const effectEmoji = getEffectEmoji(effectName);
    const description = effectName.toLowerCase() || 'none'

    button.innerHTML = `
      <span class="attack-name">${attack.name}</span>
      <div class="attack-info">
        <span class="mana-cost">Mana cost: ${attack.manaCost}</span>
        <span class="dice-roll">Dice: ${attack.damage}</span>
        <span class="status-effect">Status effect:${effectEmoji}${effectName}</span>
      </div>
    `;

    if (disableButton) {
      button.disabled = true;
      button.classList.add('disabled-button');
    }
    
    button.addEventListener('mouseover', () => showDescription(getEffectDescription(description)));
    button.addEventListener('mouseout', () => showDescription(''));
    button.addEventListener('click', () => {
      if (!activeMonster) {
        playerMessage(`${gameData.emoji.game.alert} There is no target for your attack! Enter the dungeon`)
        return;
      }
      selectedAttack = attack;

      disableAllHeroButtons();
      hideElement('attackInfo');
      showElement('gameMessagePanel');  
      playerMessage('');
      round ();
    });
    attackButtonsContainer.appendChild(button);
  });
};
function attack(attacker, defender, attack) {
    if (!attacker.alive) return;
  
    const damage = diceRoller(attack.damage);
    const debuff = attacker.enduringEffects[0].debuff;
    let totalDamage = damage - debuff;

    if (totalDamage <= 0) {
        totalDamage = 0;
    };

    defender.health -= totalDamage;

    if (defender.health <= 0) {
        defender.health = 0;
        defender.alive = false;
    };

    if (attacker.enduringEffects[0].debuff !== 0) {
        gameMessage(`${attacker.name} rolled for ${damage} points of damage but a debuff of -${attacker.enduringEffects[0].debuff} reduced the ${attack.name} attack to ${totalDamage}`, true, true)
        logMessage(`${getEntityEmoji(attacker, 'attack')} ${attacker.name} rolled ${damage} damage but debuff of -${attacker.enduringEffects[0].debuff} reduced ${attack.name} attack to ${totalDamage}`);
    } else {
        gameMessage(`${attacker.name} dealt ${totalDamage} points of damage with ${attack.name}`, true, true);
        logMessage(`${getEntityEmoji(attacker, 'attack')} ${attacker.name} dealt ${totalDamage} damage with ${attack.name}`);
    };

    logMessage(`${getEntityEmoji(defender, 'health')} ${defender.name} has ${defender.health} health remaining`);

    if (attacker.type === 'character') {
        attacker.mana -= attack.manaCost;
        logMessage(`${gameData.emoji.character.mana} ${attacker.name} has ${attacker.mana} mana remaining`)
    };

    renderHeroButtons();
    updateStats();
};
function statusHandler(defender, attack) {

    if (attack.name !== 'None' && attack.name !== null && !defender.enduringEffects[0].active && defender.health > 0) {
        
        const effect = attack.inflictingEffects[0];

        defender.enduringEffects[0] = {                     
            active: true,
            name: effect.name,
            emoji: getEffectEmoji(effect.name),
            damage: effect.damage,
            debuff: effect.debuff,
            duration: effect.duration
        };
        if (defender.enduringEffects[0].name !== 'None' && defender.enduringEffects[0].active)
            logMessage(`${getEntityEmoji(defender, 'effectActive')} ${defender.name} must endure ~${defender.enduringEffects[0].emoji}${defender.enduringEffects[0].name}~ effect`);
    };
};
function applyDamageEffect(group) {

    for (const entity of group) {
    const effect = entity.enduringEffects[0];

        if (effect.damage !== 0 && entity.health > 0) {  
            entity.health -= effect.damage;
        
            gameMessage(`<br><br><strong>~ ~ ${getEntityEmoji(entity, 'effectDamage')} Damage Effect ~ ~</strong><br>
                ${entity.name} suffers ${effect.damage} points of damage from ${effect.name} effect`, true, true);
        
            logMessage(`${getEntityEmoji(entity, 'effectDamage')} ${entity.name} took ${effect.damage} damage from ~${effect.emoji}${effect.name}~ effect`);
            logMessage(`${getEntityEmoji(entity, 'health')} ${entity.name} has ${entity.health} health remaining`);
        };

        if (entity.health <= 0) {
            entity.health = 0;
            entity.alive = false;
        };
        if (effect.duration === 1) {
        logMessage(`${getEntityEmoji(entity, 'effectCleared')} ${entity.name} is clear of ${effect.name} effect`);
    };
    };
    updateStats();
};
function tickEffectDuration(group) {
  for (const entity of group) {
    const effect = entity.enduringEffects[0];

    if (effect.active && entity.health > 0) {
      effect.duration--;
    };

    if (effect.duration <= 0 && effect.name !== null && effect.name !== 'None') {
        effect.active = false;
        effect.name = null;
        effect.emoji = null;
        effect.damage = 0;
        effect.debuff = 0;
        effect.duration = 0;
    };

    if (entity.health <= 0) {
        entity.health = 0;
        entity.alive = false;
    };
  };
};
function checkDefeat(entity) {
    if (entity.health <= 0 || !entity.alive) {
        if (entity.type === 'character') {
            characterData.alive = false;
            gameMessage(`<br><br><strong>~ ~ ${getEntityEmoji(entity, 'death')} ${entity.name} has fallen in battle ~ ~</strong>`, true, true);
            logMessage(`${getEntityEmoji(entity, 'death')} ${entity.name} has fallen in battle`)
            
        } else if (entity.type === 'monster') {
            monsterData.alive = false;
            gameMessage(`<br><br><strong>~ ~ ${getEntityEmoji(entity, 'death')} ${entity.name} has been slain! ~ ~</strong>`, true, true);
            logMessage(`${getEntityEmoji(entity, 'death')} ${entity.name} has been slain!`);

            gameOver = true;
            disableAllHeroButtons();
            hideElement('nextTurnBtn')

            showElement('printLog');
            printLogBtn.addEventListener('click', printBattleLog);

            showElement('playAgain')
            playAgainBtn.addEventListener('click', () => {
                hideElement('playAgain');
                reset();
            });
        };
    };
};
function checkPartyWipe() {
    const allDead = gameData.characters.every(character => character.health <= 0);
    if (allDead) {
        gameMessage(`<br><br><strong> ~ ~ ${gameData.emoji.character.partyDeath} All Heroes have fallen! ~ ~</strong>`, true, true);
        logMessage(`${gameData.emoji.character.partyDeath} All Heroes have fallen!`);
        
        gameOver = true;
        disableAllHeroButtons();
        hideElement('nextTurnBtn');

        showElement('printLog');
        printLogBtn.addEventListener('click', printBattleLog);

        showElement('playAgain');
        playAgainBtn.addEventListener('click', () => {
            hideElement('playAgain');
            reset();
        });
    };
};
function round() {
    //round start
    displayStatusEffect(monsterData, 'monsterStatusEffect');
    gameMessage(`<strong>~ ~${gameData.emoji.character.attack} Hero Attacks! ~ ~</strong><br>`, true, false)    
    
    //hero attack
    attack(characterData, monsterData, selectedAttack);
    checkDefeat(monsterData);

    //apply effects to monster
    statusHandler(monsterData, selectedAttack);
    displayStatusEffect(monsterData, 'monsterStatusEffect');

    //apply damage effect to character and tick duration for all characters
    applyDamageEffect(gameData.characters);
    tickEffectDuration(gameData.characters);

    //check for character defeat by tick damage 
    checkDefeat(gameData.characters);

    //monster's turn to attack
    if (monsterData.health > 0) {
        gameMessage(`<br><br><strong>~ ~${gameData.emoji.monster.attack} Monster Attacks! ~ ~</strong><br>`, true, true)
        attackRandomizer();
        attack(monsterData, characterData, randomAttack);
    
        //check for character(s) defeat
        checkDefeat(characterData);
        checkPartyWipe();

        //apply effects to character
        statusHandler(characterData, randomAttack);
        displayStatusEffect(characterData, 'characterStatusEffect');

        //apply damage effect to monster and tick duration
        applyDamageEffect(gameData.monsters);
        tickEffectDuration(gameData.monsters);
    
        //check for monster defeat by tick damage
        checkDefeat(monsterData);
    };
    //round ending displays
    if (!gameOver) {
    showElement('nextTurnBtn');
    disableAllHeroButtons();
    };
};
function reset() {
    //reset character and monster data
    activeCharacter = false;
    activeMonster = false;
    
    gameData.monsters.forEach(monster => {
        const monsterEffect = monster.enduringEffects[0]
        monster.health = 0;
        monster.alive = true;
        monsterEffect.active = false;
        monsterEffect.name = null;
        monsterEffect.emoji = null;
        monsterEffect.damage = 0;
        monsterEffect.debuff = 0;
        monsterEffect.duration = 0;
    });
    gameData.characters.forEach(character => {
        const characterEffect = character.enduringEffects[0]
        character.mana = character.baseMana;
        character.health = character.baseHealth;
        character.alive = true;
        characterEffect.active = false;
        characterEffect.name = null;
        characterEffect.emoji = null;
        characterEffect.damage = 0;
        characterEffect.debuff = 0;
        characterEffect.duration = 0;
    });
    displayStatusEffect(characterData, 'characterStatusEffect');
    displayStatusEffect(monsterData, 'monsterStatusEffect');    
    document.getElementById('monsterName').textContent = 'Monster';
    document.getElementById('monsterImage').src = 'images/dungeonDoor.png';
    document.getElementById('monsterFlavor').textContent = 'A mysterious door that hums and sparkles seep through the cracks. Curious...but exciting and possibly, very possibly - deadly!';
    document.getElementById('monsterHealth').textContent = '';
    document.getElementById('characterName').textContent = 'Heroes';
    document.getElementById('characterImage').src = 'images/startingPartyImage.png';
    document.getElementById('characterFlavor').textContent = 'A party of adventurers that came together over beer and danger. They each have their own flavor and together they are Neapolitan.';
    document.getElementById('characterHealth').textContent = '';
    document.getElementById('characterMana').textContent = '';
    //clear messages and buttons
    document.getElementById('playerMessage').innerHTML = '';
    document.getElementById('battleLog').innerHTML = '';
    document.getElementById('descriptionBox').innerHTML = ''; 
    document.getElementById('enterDungeonBtn').disabled = false;
    document.getElementById('enterDungeonBtn').innerHTML = 'Enter Dungeon';
    document.getElementById('mage').disabled = false;
    document.getElementById('warrior').disabled = false;
    document.getElementById('rogue').disabled = false;
    document.getElementById('characterHealthLabel').textContent = '';
    document.getElementById('characterManaLabel').textContent = '';
    characterHealth.textContent = '';
    characterMana.textContent = '';
    monsterHealthLabel.textContent = '';
    monsterHealth.textContent = '';

    hideElement('gameMessagePanel');
    hideElement('attackInfo');
    hideElement('printLog');
    hideElement('nextTurnBtn');
    
    renderHeroButtons();

};