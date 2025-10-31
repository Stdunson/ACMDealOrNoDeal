// Game constants
const CASE_AMOUNTS = [
    0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000,
    5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000,
    500000, 750000, 1000000
];

const CATEGORIES = [
    "Computer Organization",
    "Data Structures & Algorithms",
    "Database",
    "Object Oriented Programming",
    "ACM Trivia",
    "All Things AI",
    "Company Trivia",
    "Guess the Output",
    "PV Trivia",
    "Miscellaneous"
];

// Change these questions to the actual questions
const QUESTIONS = {
    "Computer Organization": [
        {
            //actual question
            question: "What is the purpose of the ALU in a CPU?",
            choices: ["Performs arithmetic and logical operations", "Stores data temporarily", "Controls program flow", "Handles Input and Output operations"],
            correct: 0
        },
        {
            //actual question
            question: "What is pipelining in CPU design?",
            choices: ["Overlapping instruction execution", "How programmers deliver information from one cubicle to another using PVC", "Storing data in multiple memory blocks", "Preloading memory values before program execution begins"],
            correct: 0
        },
        {
            //actual question
            question: "What is the lowest level of a computer?",
            choices: ["Digital logic", "Instruction-set architecture", "Binary", "Operating system"],
            correct: 0
        },
        {
            //actual question
            question: "Which of the following formats stores decimal numbers?",
            choices: ["IEEE Format", "ACM Format", "IBM Format", "ASCII Format"],
            correct: 0
        },
        {
            //actual question
            question: "Which of the following is not part of the disk?",
            choices: ["The modem", "Tracks", "Sectors", "The head"],
            correct: 0
        }
    ],
    "Data Structures & Algorithms": [
        {
           //actual question
            question: "Which of the following time complexities is the slowest?",
            choices: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
            correct: 0
        },
        {
            //actual question
            question: "Which data structure uses LIFO?",
            choices: ["Stack", "Queue", "Array", "Graph"],
            correct: 0
        },
        {
            //actual question
            question: "Which of the following is not a binary tree traversal method?",
            choices: ["", "Inorder traversal", "Preorder traversal", "Postorder traversal"],
            correct: 0
        },
        {
            //actual question
            question: "Which algorithm is used for finding a minimum spanning tree?",
            choices: ["Kruskal's Algorithm", "Lomuto's Partitioning", "Quick Select", "AVL algorithm"],
            correct: 0
        },
        {
            //actual question
            question: "Which of the following sorting algorithms has the best time complexity(worst case)?",
            choices: ["Merge sort", "Insertion sort", "Bubble Sort", "Selection Sort"],
            correct: 0
        }
    ],
    "Database": [
        {
            //actual question
            question: "Which of the following is not a NoSQL database?",
            choices: ["Relational database", "Key-value store", "Document database", "Graph database"],
            correct: 0
        },
        {
            //actual question
            question: "What is a primary key?",
            choices: ["A unique identifier for data rows", "A key which is is foreign", "The name of your database", "A way to view data"],
            correct: 0
        },
        {
            //actual question
            question: "What is normalization?",
            choices: ["Organizing data efficiently", "Data encryption", "Backing up data", "Query optimization"],
            correct: 0
        },
        {
            //actual question
            question: "Which is not an SQL query?",
            choices: ["DESTROY", "UPDATE", "INSERT", "SELECT"],
            correct: 0
        },
        {
            //actual question
            question: "What is a SQL JOIN?",
            choices: ["Combines rows from two or more tables", "Splits tables into multiple", "Deletes data within a table", "Joining an SQL database to a NoSQL database"],
            correct: 0
        }
    ],
    "Object Oriented Programming": [
        {
            //actual question
            question: "What is inheritance?",
            choices: ["When a class derives from another", "The creation of an object", "Multiple forms of a method", "When a class has predefined variables"],
            correct: 0
        },
        {
            //actual question
            question: "Which programming language doesn't support object oriented programming out the box?",
            choices: ["Haskell", "Python", "C++", "Cobol"],
            correct: 0
        },
        {
            //actual question
            question: "What is polymorphism?",
            choices: ["When there are many forms of the same method", "The protection of data from attackers", "Converting problem-oriented code to binary", "The scope of a variable"],
            correct: 0
        },
        {
            //actual question
            question: "What is a constructor?",
            choices: ["A method which creates an instance of an object", "A class which creates new data", "A pointer which points to a new object", "A static method"],
            correct: 0
        },
        {
            //actual question
            question: "Which term is not related to object oriented programming?",
            choices: ["Procedure", "Encapsulation", "Static", "Class"],
            correct: 0
        }
    ],
    "ACM Trivia": [
        {
            //actual question
            question: "What does ACM stand for?",
            choices: ["Association for Computing Machinery", "Advanced Computer Methods", "American Computing Mandate", "Automated Computing Management"],
            correct: 0
        },
        {
            //actual question
            question: "When was ACM founded?",
            choices: ["1947", "1957", "1967", "1977"],
            correct: 0
        },
        {
            //actal question
            question: "What is ACM's highest membership grade?",
            choices: ["Fellow", "Senior Member", "Distinguished Member", "Professional Member"],
            correct: 0
        },
        {
            //actual question
            question: "What is the Turing Award?",
            choices: ["Nobel Prize of Computing", "A Programming Contest for Students and Professionals", "A Research Grant for Professors", "A Student Scholarship for ACM Members"],
            correct: 0
        },
        {
            //actual question
            question: "Which conference is run by ACM?",
            choices: ["SIGCSE", "IEEE VR", "Afrotech", "WWDC"],
            correct: 0
        }
    ],
    "All Things AI": [
        {
            //actual question
            question: "Which is not a machine learning framework?",
            choices: ["DeepSeek", "PyTorch", "Tensorflow", "Scikit-learn"],
            correct: 0
        },
        {
            //actual question
            question: "Which is not a machine learning model?",
            choices: ["Vector Encapsulation", "Linear Regression", "Random Forest", "Neural Network"],
            correct: 0
        },
        {
            //actual question
            question: "What is NLP?",
            choices: ["Natural Language Processing", "Network Layer Protocol", "New Learning Platform", "Neural Link Processing"],
            correct: 0
        },
        {
            //actual question
            question: "What type of learning uses labeled data?",
            choices: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Transfer Learning"],
            correct: 0
        },
        {
            //actual question
            question: "Which is not a branch/subfield of AI?",
            choices: ["Computer Science", "Computer Vision", "Robotics", "Language Processing"],
            correct: 0
        }
    ],
    "Company Trivia": [
        {
            //actual question
            question: "Who founded Microsoft?",
            choices: ["Bill Gates & Paul Allen", "Steve Jobs", "Larry Page", "Mark Zuckerberg"],
            correct: 0
        },
        {
            //actual question
            question: "What was Google's original name?",
            choices: ["BackRub", "SearchMaster", "WebCrawler", "PageRank"],
            correct: 0
        },
        {
            //actual question
            question: "Which company had no booth at Afrotech 2025?",
            choices: ["Apple", "Microsoft", "Datadog", "Toyota"],
            correct: 0
        },
        {
            //actual question
            question: "Amazon started out selling which product?",
            choices: ["Books", "Electronics", "Music", "Clothing"],
            correct: 0
        },
        {
            //actual question
            question: "Which company offered its employees a $1.5m bonus?",
            choices: ["OpenAI", "Nvidia", "Figma", "Oracle"],
            correct: 0
        }
    ],
    "Guess the Output": [
        {
            //acctual question
            question: "int x = 5;\nint y = x++;\nWhat is the value of y?",
            choices: ["5", "6", "4", "Undefined"],
            correct: 0
        },
        {
            //actual question
            question: `int arr[] = {1, 2, 3, 4};\nint size = sizeof(arr)/sizeof(arr[0]);\ncout << size;`,
            choices: ["4", "8", "16", "1"],
            correct: 0
        },
        {
            //actual question
            question: "int x = 5;\nint* p = &x;\n*p += 3;\nint* q = p;\n(*q)++;\ncout << x;",
            choices: ["9", "8", "5", "6"],
            correct: 0
        },
        {
            //actual question
            question: "int x = 3;\nint y = 7;\nx ^= y ^= x ^= y;\ncout << x << \" \" << y;",
            choices: ["7 3", "3 7", "0 0", "Undefined Behavior"],
            correct: 0
        },
        {
            //actual question
            question: "string s = \"ACM\";\ns[0] = tolower(s[0]);\ncout << s.length() << s;",
            choices: ["3aCM", "4ACM", "3ACM", "Error"],
            correct: 0
        }
    ],
    "PV Trivia": [
        {
            //actual question
            question: "Which is true about PV?",
            choices: ["2nd Oldest Public University in Texas", "Largest Campus in Texas", "Youngest University in Texas", "Most Students in Texas"],
            correct: 0
        },
        {
            //actual question
            question: "What year was Prairie View founded?",
            choices: ["1876", "1883", "1901", "1857"],
            correct: 0
        },
        {
            //actual question
            question: "What is Prairie View's motto?",
            choices: ["Prairie View Produces Productive People", "Excellence lives On the Hill", "Knowledge and Success", "Learning for Life"],
            correct: 0
        },
        {
            //actual question
            question: "What are Prairie View's colors?",
            choices: ["Purple and Gold", "Blue and White", "Red and Black", "Green and White"],
            correct: 0
        },
        {
            //actual question
            question: "Who was Prairie View's previous university before Dr. Tomikia P. LeGrande?",
            choices: ["Dr. Ruth J. Simmons", "Dr. Charles A. Hines", "Mr. Willie A. Tempton, Sr.", "E.H. Anderson"],
            correct: 0
        }
    ],
    "Miscellaneous": [
        {
            //actual question
            question: "What is the most used programming language in 2025, according to the stackoverflow developer survey?",
            choices: ["JavaScript", "Python", "Java", "C++"],
            correct: 0
        },
        {
            //actual question
            question: "Which of the following people have never been on the show Baddies?",
            choices: ["Glorilla", "Natalie Nunn", "Diamond the Body", "Chrisean Rock"],
            correct: 0
        },
        {
            //actual question
            question: "Which of the following athletes does not play tennis?",
            choices: ["Lamine Yamal", "Carlos Alcaraz", "Janik Sinner", "Novak Djokovic"],
            correct: 0
        },
        {
            //actual question
            question: "Who was the first pick in the 2023 NBA draft?",
            choices: ["Victor Wembanyama", "Cade Cunningham", "Zaccharie Risacher", "Paolo Banchero"],
            correct: 0
        },
        {
            //actual question
            question: "What is the most 3rd populous city in China?",
            choices: ["Guangzhou", "Chengdu", "Chongqing", "Beijing"],
            correct: 0
        }
    ]
};

// Game state
let cases = [];
let personalCase = null;
let openedCases = [];
let usedQuestions = {};
let lastOpenedAmount = null;

function initializeGame() {
    cases = [];
    openedCases = [];
    personalCase = null;
    lastOpenedAmount = null;
    currentRound = 1;
    casesOpenedInRound = 0;
    
    // Initialize cases with random amounts
    const shuffledAmounts = [...CASE_AMOUNTS];
    shuffle(shuffledAmounts);
    
    for (let i = 0; i < 26; i++) {
        cases.push({
            id: i + 1,
            amount: shuffledAmounts[i],
            opened: false
        });
    }
    
    renderGame();
    setGameMessage("Choose your personal case!");
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderGame() {
    renderCases();
    renderAmountsList();
    renderPersonalCase();
}

function renderCases() {
    const casesContainer = document.getElementById('cases');
    casesContainer.innerHTML = '';
    
    cases.forEach(caseObj => {
        if (personalCase?.id === caseObj.id) return; // Skip personal case
        
        const caseElement = document.createElement('div');
        caseElement.className = 'case' + (caseObj.opened ? ' opened' : '');
        caseElement.innerText = caseObj.opened ? '' : caseObj.id;
        
        if (!caseObj.opened && personalCase) {
            caseElement.onclick = () => selectCaseToOpen(caseObj.id);
        } else if (!personalCase) {
            caseElement.onclick = () => selectPersonalCase(caseObj.id);
        }
        
        casesContainer.appendChild(caseElement);
    });
}

function renderAmountsList() {
    const amountsList = document.getElementById('amounts-list');
    amountsList.innerHTML = '';
    
    // Sort amounts in ascending order
    const sortedAmounts = [...CASE_AMOUNTS].sort((a, b) => a - b);
    
    sortedAmounts.forEach(amount => {
        const li = document.createElement('li');
        li.innerText = formatAmount(amount);
        if (openedCases.some(id => cases[id - 1].amount === amount)) {
            li.classList.add('crossed');
        }
        amountsList.appendChild(li);
    });
}

function renderPersonalCase() {
    const box = document.getElementById('personal-case-box');
    if (personalCase) {
        box.innerText = personalCase.id;
    } else {
        box.innerHTML = '<span style="opacity:0.7">?</span>';
    }
}

function selectPersonalCase(id) {
    personalCase = cases.find(c => c.id === id);
    renderGame();
    setGameMessage("Select a case to open!");
}

function selectCaseToOpen(id) {
    showCategorySelection(id);
}

function showCategorySelection(caseId) {
    const modal = document.getElementById('modal-content');
    modal.innerHTML = `
        <div class="modal-title">Select a Category</div>
        <div class="modal-buttons" style="grid-template-columns: repeat(2, 1fr);">
            ${CATEGORIES.map(cat => `
                <button onclick="showQuestion('${cat}', ${caseId})">${cat}</button>
            `).join('')}
        </div>
    `;
    showModal();
}

let questionTimer;
let finalCountdown;
let isAnswerSelected = false;

function startQuestionTimer(duration, caseId, isFinalCountdown = false) {
    const timerDisplay = document.getElementById('timer-display');
    let timeLeft = duration;
    
    if (questionTimer) clearInterval(questionTimer);
    if (finalCountdown) clearInterval(finalCountdown);
    
    const timer = setInterval(() => {
        if (isAnswerSelected) {
            clearInterval(timer);
            return;
        }

        const seconds = timeLeft % 60;
        timerDisplay.innerHTML = `${seconds}s`;
        timerDisplay.style.color = timeLeft <= 5 ? '#f44336' : '#1E3D59';
        
        if (timeLeft === 0) {
            clearInterval(timer);
            if (!isFinalCountdown) {
                // Start 5-second final countdown
                timerDisplay.style.color = '#f44336';
                startQuestionTimer(5, caseId, true);
            } else {
                // Time's up - mark as incorrect
                isAnswerSelected = true;
                answerQuestion(caseId, false, -1);
            }
        }
        timeLeft--;
    }, 1000);

    return timer;
}

function showQuestion(category, caseId) {
    // Reset answer selected flag
    isAnswerSelected = false;
    
    // Get unused question for this category
    const categoryQuestions = QUESTIONS[category];
    const usedIndices = usedQuestions[category] || [];
    const availableQuestions = categoryQuestions.filter((_, i) => !usedIndices.includes(i));
    
    if (availableQuestions.length === 0) {
        alert("No more questions in this category!");
        return;
    }
    
    const questionObj = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    const questionIndex = categoryQuestions.indexOf(questionObj);
    
    // Mark question as used
    if (!usedQuestions[category]) usedQuestions[category] = [];
    usedQuestions[category].push(questionIndex);
    
    // Create array of answer objects with their correctness
    const answers = questionObj.choices.map((choice, index) => ({
        text: choice,
        isCorrect: index === questionObj.correct
    }));
    
    // Shuffle the answers array
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    const modal = document.getElementById('modal-content');
    modal.innerHTML = `
        <div class="modal-title">${category}</div>
        <div id="timer-display" style="font-size: 1.4em; margin: 10px 0; font-weight: bold;">30s</div>
        <div style="font-size: 1.2em; margin-bottom: 24px;">${questionObj.question}</div>
        <div class="modal-buttons" style="grid-template-columns: 1fr;">
            ${answers.map((answer, i) => `
                <button onclick="handleAnswer(${caseId}, ${answer.isCorrect}, ${i})">${answer.text}</button>
            `).join('')}
        </div>
    `;
    
    // Start 30-second timer
    questionTimer = startQuestionTimer(30, caseId);
}

function handleAnswer(caseId, correct, selectedAnswer) {
    if (isAnswerSelected) return; // Prevent multiple selections
    isAnswerSelected = true;
    
    // Clear any existing timers
    if (questionTimer) clearInterval(questionTimer);
    if (finalCountdown) clearInterval(finalCountdown);
    
    answerQuestion(caseId, correct, selectedAnswer);
}

function answerQuestion(caseId, correct, selectedAnswer) {
    // Show feedback
    const modal = document.getElementById('modal-content');
    modal.innerHTML = `
        <div class="modal-title" style="color: ${correct ? '#4CAF50' : '#f44336'}">
            ${correct ? 'Correct!' : 'Incorrect!'}
            ${selectedAnswer === -1 ? ' (Time\'s Up!)' : ''}
        </div>
        <div style="font-size: 1.2em; margin: 24px 0;">
            ${correct 
                ? 'You will open your chosen case!' 
                : 'The banker will choose a case to open!'}
        </div>
        <button onclick="proceedAfterAnswer(${caseId}, ${correct})">Continue</button>
    `;
}

function proceedAfterAnswer(caseId, correct) {
    if (correct) {
        openCase(caseId);
    } else {
        // Banker chooses one of the three highest remaining cases
        const remainingCases = cases.filter(c => 
            !c.opened && c.id !== personalCase.id
        ).sort((a, b) => b.amount - a.amount);
        
        const highestCases = remainingCases.slice(0, 3);
        const bankerChoice = highestCases[Math.floor(Math.random() * highestCases.length)];
        
        openCase(bankerChoice.id);
        setGameMessage("Wrong answer! Banker opened a case of their choosing!");
    }
}

function openCase(caseId) {
    const selectedCase = cases.find(c => c.id === caseId);
    selectedCase.opened = true;
    openedCases.push(caseId);
    lastOpenedAmount = selectedCase.amount;
    
    // Show case amount
    const modal = document.getElementById('modal-content');
    modal.innerHTML = `
        <div class="modal-title">Case ${caseId} contains:</div>
        <div style="font-size: 2em; margin: 24px 0;">${formatAmount(selectedCase.amount)}</div>
        <button onclick="continueGame()">Continue</button>
    `;
    
    renderGame();
}

// Track the rounds and cases opened per round
let currentRound = 1;
let casesOpenedInRound = 0;
const casesPerRound = [6, 5, 4, 3, 2, 1]; // Number of cases to open before each offer

function continueGame() {
    hideModal();
    
    const remainingCases = cases.filter(c => !c.opened && c.id !== personalCase.id).length;
    
    if (remainingCases === 0) {
        endGame();
        return;
    }

    // Track cases opened in current round
    casesOpenedInRound++;
    
    // Check if we should make an offer
    if (currentRound <= casesPerRound.length) {
        // In scheduled rounds
        if (casesOpenedInRound >= casesPerRound[currentRound - 1]) {
            showBankerOffer();
            currentRound++;
            casesOpenedInRound = 0;
        } else {
            const casesNeeded = casesPerRound[currentRound - 1] - casesOpenedInRound;
            setGameMessage(`Round ${currentRound}: Open ${casesNeeded} more case${casesNeeded !== 1 ? 's' : ''} before the next offer`);
        }
    } else {
        // After scheduled rounds, make offer after each case
        if (remainingCases > 1) {
            showBankerOffer();
            casesOpenedInRound = 0;
        }
    }
}

function calculateBankerOffer() {
    const remainingCases = cases.filter(c => !c.opened);
    const total = remainingCases.reduce((sum, c) => sum + c.amount, 0);
    let offer = total / remainingCases.length;
    
    // Round down based on amount
    if (offer >= 1000) {
        offer = Math.floor(offer / 1000) * 1000;
    } else if (offer >= 100) {
        offer = Math.floor(offer / 100) * 100;
    } else if (offer >= 10) {
        offer = Math.floor(offer / 10) * 10;
    } else {
        offer = Math.floor(offer * 100) / 100;
    }
    
    return offer;
}

function showBankerOffer() {
    const offer = calculateBankerOffer();
    const modal = document.getElementById('modal-content');
    modal.innerHTML = `
        <div class="modal-title">Banker's Offer</div>
        <div style="font-size: 2em; margin: 24px 0;">${formatAmount(offer)}</div>
        <div style="display: flex; gap: 16px; justify-content: center;">
            <button onclick="acceptOffer(${offer})">Deal</button>
            <button onclick="rejectOffer()">No Deal</button>
        </div>
    `;
    showModal();
}

function acceptOffer(amount) {
    hideModal();
    endGame('deal', amount);
}

function rejectOffer() {
    hideModal();
    setGameMessage("Select another case to open!");
}

function endGame(result = 'no-deal', dealAmount = 0) {
    const finalAmount = result === 'deal' ? dealAmount : personalCase.amount;
    const modal = document.getElementById('modal-content');
    modal.innerHTML = `
        <div class="modal-title">Game Over!</div>
        <div style="font-size: 1.4em; margin: 24px 0;">
            You won ${formatAmount(finalAmount)}!
        </div>
        <div style="margin-bottom: 24px;">
            Your case contained ${formatAmount(personalCase.amount)}
        </div>
        <button onclick="startNewGame()">Play Again</button>
    `;
    showModal();
}

function startNewGame() {
    hideModal();
    initializeGame();
}

function formatAmount(amount) {
    return `$${amount.toLocaleString(undefined, {
        minimumFractionDigits: amount < 1 ? 2 : 0,
        maximumFractionDigits: amount < 1 ? 2 : 0
    })}`;
}

function showModal() {
    document.getElementById('modal-overlay').classList.add('active');
}

function hideModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

function setGameMessage(message) {
    document.getElementById('game-message').innerHTML = message;
}

// Start the game when the page loads
window.onload = initializeGame;
