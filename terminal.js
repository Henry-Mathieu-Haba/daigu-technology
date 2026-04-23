// ============================================
// DAIGU SHELL — TERMINAL INTERACTIF CACHÉ
// ============================================

const Terminal = {
    overlay: null,
    body: null,
    input: null,
    isOpen: false,
    commandHistory: [],
    historyIndex: -1,

    commands: {
        help: () => {
            return [
                'Commandes disponibles :',
                '  help      — Affiche cette aide',
                '  whoami    — Identité du système',
                '  status    — État du projet DAIGU',
                '  vision    — La doctrine fondatrice',
                '  stack     — La pile technologique',
                '  roadmap   — Feuille de route',
                '  contact   — Coordonnées',
                '  clear     — Effacer le terminal',
                '  exit      — Fermer le terminal',
                '',
                'DAIGU OS Kernel Version 0.1.0 (pre-alpha)',
                'Sovereign Build — Compiled in Conakry, Guinea'
            ].join('\n');
        },

        whoami: () => {
            return [
                '┌─────────────────────────────────────────┐',
                '│  DAIGU LABORATORY CENTER                │',
                '│  Nœud : Conakry-GN-01                   │',
                '│  Rôle : Architecture & Souveraineté      │',
                '│  Doctrine : Inversion de la Dépendance   │',
                '│  Fondateur : Le Cerveau                  │',
                '└─────────────────────────────────────────┘'
            ].join('\n');
        },

        status: () => {
            return [
                'État du Projet DAIGU — Avril 2026',
                '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                'Phase actuelle : Phase 0 (Fondations)',
                'DAIGU CORE SYSTEMS   : [████░░░░░░] 40% — Architecture du noyau',
                'DAIGU CLOUD & SHIELD : [██░░░░░░░░] 20% — Design du Cloud Souverain',
                'DAIGU ENERGY LABS    : [███░░░░░░░] 30% — Recherche matériaux',
                'DAIGU ELECTRONICS    : [█░░░░░░░░░] 10% — Veille technologique',
                'DUTS                 : [██░░░░░░░░] 25% — Programme pédagogique',
                '',
                'Prochaine étape : Constitution juridique de la Holding.'
            ].join('\n');
        },

        vision: () => {
            return [
                'LA DOCTRINE DAIGU',
                '=================',
                '"On ne crée pas un produit Hardware tant que l\'on',
                'n\'est pas souverain sur le Software qui le fait vivre."',
                '',
                'Le Modèle DAIGU :',
                '  Logiciel Souverain → Cloud & Cyber → Matériel Autonome',
                '',
                'Le Modèle Classique (rejeté) :',
                '  Matériel → OS Étranger → Vulnérabilité Perpétuelle',
                '',
                'Leçon historique : Huawei vs Google (2019)'
            ].join('\n');
        },

        stack: () => {
            return [
                'PILE TECHNOLOGIQUE DAIGU',
                '═══════════════════════',
                '│ 04 │ DAIGU ELECTRONICS       │ Sommet Visible   │',
                '│ 03 │ DAIGU CORE SYSTEMS      │ Noyau Souverain  │',
                '│ 02 │ DAIGU CLOUD & SHIELD    │ Bouclier         │',
                '│ 01 │ DAIGU ENERGY LABS       │ Base Énergétique │',
                '└────────────────────────────────────────────────┘'
            ].join('\n');
        },

        roadmap: () => {
            return [
                'ROADMAP 2026-2035',
                '════════════════',
                'Phase 0 (Année 1)      : Fondations juridiques & DUTS',
                'Phase 1 (Année 2-4)    : DAIGU OS V0.1 & Cloud Privé',
                'Phase 2 (Année 4-7)    : Premier terminal autonome',
                'Phase 3 (Année 7-10)   : Expansion régionale'
            ].join('\n');
        },

        contact: () => {
            return [
                'Contactez le Comité d\'Architecture :',
                '📧 architecture@daigu-technology.com',
                '📍 Conakry, République de Guinée',
                '🌐 github.com/daigu-technology'
            ].join('\n');
        },

        clear: () => {
            Terminal.clearTerminal();
            return null;
        },

        exit: () => {
            Terminal.close();
            return null;
        },

        sudo: () => {
            return 'Permission denied. Même le Cerveau n\'a pas de sudo ici.';
        },

        ls: () => {
            return 'daigu_os/  cloud/  cyber/  energy/  electronics/  university/  WHITEBOOK.md';
        },

        pwd: () => {
            return '/home/daigu/sovereignty';
        },

        uname: () => {
            return 'DAIGU OS daigu-kernel 0.1.0 #1 SMP PREEMPT 2026-04-23 aarch64 GNU/DAIGU';
        },

        date: () => {
            return new Date().toString();
        },

        echo: (args) => {
            return args.join(' ');
        },

        cowsay: (args) => {
            const message = args.length > 0 ? args.join(' ') : 'La Souveraineté d\'abord.';
            return [
                ' ________________________________',
                `< ${message} >`,
                ' --------------------------------',
                '        \\   ^__^',
                '         \\  (oo)\\_______',
                '            (__)\\       )\\/\\',
                '                ||----w |',
                '                ||     ||'
            ].join('\n');
        },

        neofetch: () => {
            return [
                '        🧠                 DAIGU@Sovereignty',
                '    ▄▄▄▄▄▄▄▄▄▄▄          ──────────────────',
                '   ███████████████         OS : DAIGU OS 0.1.0',
                '  █████████████████        Kernel : daigu-kernel',
                '  █████████████████        Uptime : Depuis l\'étincelle',
                '  █████▌     █████        Shell : daigu-shell 1.0',
                '  █████▌     █████        Résolution : 128x64 (IoT)',
                '  █████████████████        DE : DAIGU Desktop',
                '   ███████████████         Base : Conakry, Guinée',
                '    ▀▀▀▀▀▀▀▀▀▀▀          Licence : DAIGU Sovereign License'
            ].join('\n');
        }
    },

    init() {
        this.overlay = document.getElementById('terminalOverlay');
        this.body = document.getElementById('terminalBody');
        this.input = document.getElementById('terminalInput');
        document.getElementById('terminalClose').addEventListener('click', () => this.close());

        // Ouverture via Ctrl+D
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'd') {
                e.preventDefault();
                this.open();
            }
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Input handling
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = this.input.value.trim();
                if (command) {
                    this.executeCommand(command);
                    this.commandHistory.push(command);
                    this.historyIndex = this.commandHistory.length;
                    this.input.value = '';
                }
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    this.input.value = this.commandHistory[this.historyIndex];
                }
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    this.input.value = this.commandHistory[this.historyIndex];
                } else {
                    this.historyIndex = this.commandHistory.length;
                    this.input.value = '';
                }
            }
        });
    },

    open() {
        this.isOpen = true;
        this.overlay.classList.add('active');
        setTimeout(() => this.input.focus(), 300);
    },

    close() {
        this.isOpen = false;
        this.overlay.classList.remove('active');
    },

    executeCommand(command) {
        const [cmd, ...args] = command.split(' ');

        // Ajouter la ligne de commande tapée
        this.addLine(`daigu@sovereignty:~$ ${command}`, 'command');

        let output;
        if (this.commands[cmd]) {
            output = this.commands[cmd](args);
        } else {
            output = `Commande inconnue : ${cmd}. Tapez 'help' pour la liste des commandes.`;
        }

        if (output !== null) {
            this.addLine(output, 'output');
        }

        this.scrollToBottom();
    },

    addLine(text, type) {
        const line = document.createElement('div');
        line.className = `terminal-line terminal-${type}`;
        line.textContent = text;
        // Insérer avant la ligne d'input
        const inputLine = this.body.parentElement.querySelector('.terminal-input-line');
        this.body.insertBefore(line, inputLine);
    },

    clearTerminal() {
        const lines = this.body.querySelectorAll('.terminal-line');
        lines.forEach(line => line.remove());
    },

    scrollToBottom() {
        this.body.parentElement.scrollTop = this.body.parentElement.scrollHeight;
    }
};

document.addEventListener('DOMContentLoaded', () => Terminal.init());