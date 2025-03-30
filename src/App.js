import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const navigateTo = (selectedPage) => setPage(selectedPage);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {page === "home" && (
        <div className="home-container">
          <div className="header">
            <h1>Smart Assessment</h1>
            <button
              className="dark-mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
          <div className="feature-grid">
            <div
              className="feature-card"
              onClick={() => navigateTo("studyMaterial")}
            >
              <div className="feature-icon">📚</div>
              <h3>Study Material</h3>
              <p>Access curated resources for all subjects</p>
            </div>
            <div className="feature-card" onClick={() => navigateTo("chatbot")}>
              <div className="feature-icon">🤖</div>
              <h3>DOUBTBOT</h3>
              <p>Get instant answers to your questions</p>
            </div>
            <div className="feature-card" onClick={() => navigateTo("quiz")}>
              <div className="feature-icon">📝</div>
              <h3>Quiz</h3>
              <p>Test your knowledge with customizable quizzes</p>
            </div>
            <div
              className="feature-card"
              onClick={() => navigateTo("progress")}
            >
              <div className="feature-icon">📊</div>
              <h3>Progress</h3>
              <p>Track your learning journey with analytics</p>
            </div>
          </div>
        </div>
      )}

      {page === "studyMaterial" && (
        <StudyMaterial navigateTo={navigateTo} darkMode={darkMode} />
      )}
      {page === "chatbot" && (
        <Chatbot navigateTo={navigateTo} darkMode={darkMode} />
      )}
      {page === "quiz" && <Quiz navigateTo={navigateTo} darkMode={darkMode} />}
      {page === "progress" && (
        <Progress navigateTo={navigateTo} darkMode={darkMode} />
      )}
    </div>
  );
};

const StudyMaterial = ({ navigateTo, darkMode }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const subjects = [
    "Maths",
    "English",
    "History",
    "Science",
    "Geography",
    "Civics (India)",
  ];

  const studyResources = {
    Maths: {
      articles: [
        {
          title: "Algebra Basics",
          url: "https://en.wikipedia.org/wiki/Algebra",
          description:
            "Learn the fundamentals of algebraic equations and expressions",
        },
        {
          title: "Calculus Introduction",
          url: "https://en.wikipedia.org/wiki/Calculus",
          description: "Introduction to differential and integral calculus",
        },
        {
          title: "Geometry Concepts",
          url: "https://en.wikipedia.org/wiki/Geometry",
          description: "Understand shapes, sizes, and properties of space",
        },
      ],
      videos: [
        {
          title: "Learn Algebra in 4 Hours",
          url: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
          description: "Comprehensive algebra tutorial for beginners",
        },
        {
          title: "Calculus for Beginners",
          url: "https://www.youtube.com/watch?v=F9Ssn7F7C8A",
          description: "Step-by-step introduction to calculus concepts",
        },
        {
          title: "Math Problem Solving Techniques",
          url: "https://www.youtube.com/watch?v=K56nNuBEd0c",
          description: "Learn effective strategies for solving math problems",
        },
      ],
      practice: [
        {
          title: "Algebra Practice Problems",
          url: "https://www.khanacademy.org/math/algebra",
          description: "Interactive algebra exercises with instant feedback",
        },
        {
          title: "Calculus Workbook",
          url: "https://www.math.ucdavis.edu/~kouba/ProblemsList.html",
          description: "Collection of calculus problems with solutions",
        },
      ],
    },
    English: {
      articles: [
        {
          title: "Grammar Rules",
          url: "https://en.wikipedia.org/wiki/English_grammar",
          description: "Comprehensive guide to English grammar rules",
        },
        {
          title: "Writing Tips",
          url: "https://www.grammarly.com/blog/",
          description: "Improve your writing skills with expert advice",
        },
        {
          title: "Literary Analysis",
          url: "https://www.sparknotes.com/",
          description: "Guides for analyzing literature and poetry",
        },
      ],
      videos: [
        {
          title: "Improve Vocabulary in 30 Days",
          url: "https://www.youtube.com/watch?v=1-0hWsknBBo",
          description: "Daily vocabulary building exercises",
        },
        {
          title: "Grammar Basics",
          url: "https://www.youtube.com/watch?v=Nc8Chx0vA7k",
          description: "Master essential grammar concepts",
        },
        {
          title: "Creative Writing Workshop",
          url: "https://www.youtube.com/watch?v=YQ6UU0QxyhY",
          description: "Techniques for effective creative writing",
        },
      ],
      practice: [
        {
          title: "Grammar Exercises",
          url: "https://www.englishgrammar.org/exercises/",
          description: "Interactive grammar practice",
        },
        {
          title: "Writing Prompts",
          url: "https://www.dailywritingtips.com/",
          description: "Daily writing challenges to improve skills",
        },
      ],
    },
    // Other subjects with similar structure...
    History: {
      articles: [
        {
          title: "World War II Overview",
          url: "https://en.wikipedia.org/wiki/World_War_II",
          description: "Comprehensive history of WWII",
        },
        {
          title: "Ancient Civilizations",
          url: "https://en.wikipedia.org/wiki/Ancient_civilizations",
          description: "Explore early human societies",
        },
      ],
      videos: [
        {
          title: "History Explained",
          url: "https://www.youtube.com/watch?v=L7MFSu_CQ78",
          description: "Key historical events in 20 minutes",
        },
        {
          title: "World War II Summary",
          url: "https://www.youtube.com/watch?v=Q78COTwT7nE",
          description: "Concise overview of WWII",
        },
      ],
      practice: [
        {
          title: "History Quizzes",
          url: "https://www.history.com/quizzes",
          description: "Test your historical knowledge",
        },
      ],
    },
    Science: {
      articles: [
        {
          title: "Physics Fundamentals",
          url: "https://en.wikipedia.org/wiki/Physics",
          description: "Basic principles of physics",
        },
        {
          title: "Biology Introduction",
          url: "https://en.wikipedia.org/wiki/Biology",
          description: "Study of living organisms",
        },
      ],
      videos: [
        {
          title: "Basic Physics Concepts",
          url: "https://www.youtube.com/watch?v=ZihywtixUYo",
          description: "Visual explanations of physics",
        },
        {
          title: "Learn Biology Basics",
          url: "https://www.youtube.com/watch?v=QLhPCzkWJrY",
          description: "Introduction to biological concepts",
        },
      ],
      practice: [
        {
          title: "Science Experiments",
          url: "https://www.sciencebuddies.org/",
          description: "Hands-on science activities",
        },
      ],
    },
    Geography: {
      articles: [
        {
          title: "Earth Geography",
          url: "https://en.wikipedia.org/wiki/Geography",
          description: "Study of Earth's landscapes",
        },
        {
          title: "Climate Studies",
          url: "https://en.wikipedia.org/wiki/Climatology",
          description: "Understanding weather patterns",
        },
      ],
      videos: [
        {
          title: "Geography Facts",
          url: "https://www.youtube.com/watch?v=1E3GvaoAzjU",
          description: "Amazing geographical features",
        },
        {
          title: "Understanding Climate",
          url: "https://www.youtube.com/watch?v=x_KCm1F6GgY",
          description: "Climate change explained",
        },
      ],
      practice: [
        {
          title: "Map Quizzes",
          url: "https://www.geoguessr.com/",
          description: "Test your geography knowledge",
        },
      ],
    },
    "Civics (India)": {
      articles: [
        {
          title: "Indian Constitution",
          url: "https://en.wikipedia.org/wiki/Constitution_of_India",
          description: "Framework of India's democracy",
        },
        {
          title: "Indian Parliament",
          url: "https://en.wikipedia.org/wiki/Parliament_of_India",
          description: "Structure of Indian government",
        },
      ],
      videos: [
        {
          title: "Indian Constitution Basics",
          url: "https://www.youtube.com/watch?v=ldQzE1bL9X4",
          description: "Preamble and key articles",
        },
        {
          title: "Government Structure",
          url: "https://www.youtube.com/watch?v=_9pOEO0vIAQ",
          description: "How Indian government works",
        },
      ],
      practice: [
        {
          title: "Civics Quiz",
          url: "https://www.quizizz.com/admin/quiz/indian-civics",
          description: "Test your civics knowledge",
        },
      ],
    },
  };

  const filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="study-material-container">
      <button className="back-button" onClick={() => navigateTo("home")}>
        ← Back to Home
      </button>

      <h2>Study Material</h2>

      {!selectedSubject ? (
        <>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <h3>Select a Subject</h3>
          <div className="subject-grid">
            {filteredSubjects.map((subject) => (
              <div
                key={subject}
                className="subject-card"
                onClick={() => setSelectedSubject(subject)}
              >
                <div className="subject-icon">
                  {subject === "Maths" && "🧮"}
                  {subject === "English" && "📖"}
                  {subject === "History" && "🏛️"}
                  {subject === "Science" && "🔬"}
                  {subject === "Geography" && "🌍"}
                  {subject === "Civics (India)" && "🇮🇳"}
                </div>
                <h4>{subject}</h4>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="subject-header">
            <button
              className="back-button"
              onClick={() => setSelectedSubject(null)}
            >
              ← Back to Subjects
            </button>
            <h3>
              {selectedSubject === "Maths" && "🧮 "}
              {selectedSubject === "English" && "📖 "}
              {selectedSubject === "History" && "🏛️ "}
              {selectedSubject === "Science" && "🔬 "}
              {selectedSubject === "Geography" && "🌍 "}
              {selectedSubject === "Civics (India)" && "🇮🇳 "}
              {selectedSubject} Resources
            </h3>
          </div>

          <div className="resource-tabs">
            <div className="resource-section">
              <h4>📚 Articles</h4>
              <div className="resource-grid">
                {studyResources[selectedSubject]?.articles?.map(
                  (article, index) => (
                    <a
                      key={index}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-card"
                    >
                      <h5>{article.title}</h5>
                      <p>{article.description}</p>
                      <span className="open-link">Open →</span>
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="resource-section">
              <h4>🎥 Videos</h4>
              <div className="resource-grid">
                {studyResources[selectedSubject]?.videos?.map(
                  (video, index) => (
                    <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-card"
                    >
                      <h5>{video.title}</h5>
                      <p>{video.description}</p>
                      <span className="open-link">Watch →</span>
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="resource-section">
              <h4>✍️ Practice</h4>
              <div className="resource-grid">
                {studyResources[selectedSubject]?.practice?.map(
                  (item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-card"
                    >
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      <span className="open-link">Practice →</span>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Chatbot = ({ navigateTo, darkMode }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm DOUBTBOT 🤖. How can I assist you with your studies today? You can ask me about any subject, math problems, general knowledge, or even request study tips!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState(null); // To maintain conversation context

  // Expanded knowledge base
  const knowledgeBase = {
    subjects: {
      maths: {
        description:
          "Mathematics includes algebra, geometry, calculus, statistics, and more. I can help with problem solving, explanations, and concepts.",
        topics: {
          algebra: {
            description:
              "Algebra deals with symbols and rules for manipulating those symbols. Key concepts include equations, polynomials, and functions.",
            examples: [
              "Solve linear equations like '2x + 3 = 7'",
              "Factor quadratic expressions",
              "Work with algebraic fractions",
            ],
          },
          geometry: {
            description:
              "Geometry studies shapes, sizes, and properties of space. Includes plane geometry, solid geometry, and coordinate geometry.",
            formulas: {
              "Area of circle": "πr²",
              "Pythagorean theorem": "a² + b² = c²",
              "Volume of sphere": "(4/3)πr³",
            },
          },
          calculus: {
            description:
              "Calculus has two main branches: differential (rates of change) and integral (accumulation of quantities).",
            derivatives: {
              "Power rule": "d/dx(xⁿ) = nxⁿ⁻¹",
              "Product rule": "d/dx(uv) = u'v + uv'",
              "Chain rule": "d/dx(f(g(x))) = f'(g(x))·g'(x)",
            },
          },
        },
      },
      science: {
        description:
          "Science includes physics, chemistry, biology, and earth science. I can explain concepts, formulas, and scientific principles.",
        branches: {
          physics: {
            description:
              "Physics studies matter, energy, and their interactions. Key areas: mechanics, thermodynamics, electromagnetism, quantum physics.",
            formulas: {
              "Newton's Second Law": "F = ma",
              "Kinetic Energy": "KE = ½mv²",
              "Ohm's Law": "V = IR",
            },
          },
          chemistry: {
            description:
              "Chemistry studies substances, their properties, and reactions. Includes organic, inorganic, physical, and analytical chemistry.",
            concepts: [
              "Periodic table trends",
              "Chemical bonding",
              "Stoichiometry",
            ],
          },
        },
      },
      history: {
        description:
          "History covers past events, civilizations, and historical figures. I can provide timelines, explanations of events, and historical context.",
        periods: {
          ancient: "From earliest civilizations to fall of Rome (~500 AD)",
          medieval: "From ~500 AD to 1500 AD",
          modern: "From 1500 AD to present",
        },
      },
    },
    general: {
      studyTips: [
        "Use the Pomodoro technique (25 min study, 5 min break)",
        "Create mind maps to visualize concepts",
        "Practice active recall by testing yourself",
        "Teach concepts to someone else to reinforce learning",
        "Space out your study sessions over time",
      ],
      mathHelp: [
        "Break problems into smaller steps",
        "Draw diagrams to visualize problems",
        "Check your work by plugging answers back in",
        "Look for patterns in similar problems",
      ],
    },
    formulas: {
      maths: {
        "Quadratic formula": "x = [-b ± √(b²-4ac)] / 2a",
        "Slope of line": "m = (y₂ - y₁)/(x₂ - x₁)",
        "Area of triangle": "A = ½bh",
      },
      physics: {
        Density: "ρ = m/V",
        Work: "W = F·d·cosθ",
        Power: "P = W/t",
      },
    },
    conversions: {
      length: {
        "inches to cm": "1 inch = 2.54 cm",
        "miles to km": "1 mile = 1.609 km",
      },
      temperature: {
        "Fahrenheit to Celsius": "°C = (°F - 32) × 5/9",
        "Celsius to Kelvin": "K = °C + 273.15",
      },
    },
  };

  // Enhanced response generation
  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();
    let response = "";

    // Check for greetings
    if (/hello|hi|hey/.test(input)) {
      return "Hello! How can I assist with your studies today?";
    }

    // Check for thanks
    if (/thank|thanks|appreciate/.test(input)) {
      return "You're welcome! Is there anything else you'd like to know?";
    }

    // Check for math calculations
    if (
      /(calculate|what is|solve|convert|how much).*\d/.test(input) ||
      /\d+\s*[\+\-\*\/]\s*\d+/.test(input)
    ) {
      return handleMathQuery(input);
    }

    // Check for quadratic equations
    if (/(quadratic|quadratic equation|ax²)/.test(input)) {
      return `A quadratic equation has the form ax² + bx + c = 0. The solutions are given by:
      
      Quadratic Formula: x = [-b ± √(b²-4ac)] / (2a)
      
      Where:
      - a, b, c are coefficients
      - The discriminant (b²-4ac) determines the nature of roots:
        > 0: Two real roots
        = 0: One real root
        < 0: Two complex roots
      
      Example: For x² - 5x + 6 = 0, the solutions are x = 2 and x = 3.`;
    }

    // Check for subject queries
    const subjectMatch = input.match(
      /math|algebra|geometry|science|physics|chemistry|history|english/
    );
    if (subjectMatch) {
      const subject = subjectMatch[0];
      if (subject === "math" || subject === "algebra") {
        return `Mathematics includes algebra, geometry, calculus, and more. For algebra:
        - Solves equations with variables
        - Key concepts: polynomials, functions, equations
        - Example: Solve 2x + 3 = 7 → x = 2`;
      }
      return handleSubjectQuery(subject, input);
    }

    // Check for study tips
    if (/(study tip|how to study|learning technique)/.test(input)) {
      const randomTip =
        knowledgeBase.general.studyTips[
          Math.floor(Math.random() * knowledgeBase.general.studyTips.length)
        ];
      return `Here's a study tip: ${randomTip}`;
    }

    // Check for formula queries
    const formulaMatch = input.match(/(formula|equation) for (.*)/);
    if (formulaMatch) {
      return handleFormulaQuery(formulaMatch[2]);
    }

    // Check for conversion queries
    const conversionMatch = input.match(
      /(convert|change) (\d+) (\w+) to (\w+)/
    );
    if (conversionMatch) {
      return handleConversionQuery(
        conversionMatch[2],
        conversionMatch[3],
        conversionMatch[4]
      );
    }

    // If no specific match found
    return "I'm not sure about that. Try asking about:\n- Math problems (e.g., '15*3')\n- Subjects (e.g., 'Explain algebra')\n- Study help (e.g., 'How to solve equations?')";
  };

  const handleMathQuery = (input) => {
    try {
      // Extract math expression
      let expression = input.replace(/[^\d+\-*/. ()]/g, "");

      // Handle word-based math questions
      if (input.includes("plus")) expression = input.replace("plus", "+");
      if (input.includes("minus")) expression = input.replace("minus", "-");
      if (input.includes("times") || input.includes("multiplied by"))
        expression = input.replace(/times|multiplied by/, "*");
      if (input.includes("divided by"))
        expression = input.replace("divided by", "/");

      // Safety check
      if (!/^[\d+\-*/. ()]+$/.test(expression)) {
        return "I can only calculate basic math expressions with numbers and +, -, *, / operators.";
      }

      const result = eval(expression);
      return `The answer is ${result}.`;
    } catch (error) {
      return "I couldn't solve that. Try asking something like 'What is 15 times 7?' or 'Calculate 3/4 + 1/2'";
    }
  };

  const handleSubjectQuery = (subject, input) => {
    const subjectKey = subject.toLowerCase();
    const subjectData = knowledgeBase.subjects[subjectKey];

    if (!subjectData) return `I don't have information about ${subject}.`;

    // Check for specific topics within the subject
    for (const topic in subjectData.topics || {}) {
      if (input.includes(topic)) {
        const topicData = subjectData.topics[topic];
        let response = `${topic} in ${subject}: ${topicData.description}\n`;

        if (topicData.examples) {
          response += `Examples: ${topicData.examples.join(", ")}`;
        }
        if (topicData.formulas) {
          response += `\nKey formulas:\n`;
          for (const [name, formula] of Object.entries(topicData.formulas)) {
            response += `${name}: ${formula}\n`;
          }
        }
        return response;
      }
    }

    // Return general subject info if no specific topic
    return `${subject}: ${
      subjectData.description
    }. You can ask about specific topics like ${Object.keys(
      subjectData.topics || {}
    ).join(", ")}`;
  };

  const handleFormulaQuery = (query) => {
    for (const subject in knowledgeBase.formulas) {
      for (const [name, formula] of Object.entries(
        knowledgeBase.formulas[subject]
      )) {
        if (query.includes(name.toLowerCase())) {
          return `The ${name} formula is: ${formula}`;
        }
      }
    }
    return `I don't have that formula. Try asking for formulas in math or physics.`;
  };

  const handleConversionQuery = (value, fromUnit, toUnit) => {
    const conversions = knowledgeBase.conversions;
    let result;

    // Temperature conversions
    if (fromUnit.includes("fahrenheit") && toUnit.includes("celsius")) {
      result = ((parseFloat(value) - 32) * 5) / 9;
      return `${value}°F is ${result.toFixed(2)}°C`;
    }
    if (fromUnit.includes("celsius") && toUnit.includes("fahrenheit")) {
      result = (parseFloat(value) * 9) / 5 + 32;
      return `${value}°C is ${result.toFixed(2)}°F`;
    }

    // Length conversions
    if (fromUnit.includes("inch") && toUnit.includes("cm")) {
      result = parseFloat(value) * 2.54;
      return `${value} inches = ${result.toFixed(2)} cm`;
    }

    return `I can't convert ${fromUnit} to ${toUnit} yet. I support temperature (F/C) and length (inches/cm) conversions.`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Generate and add bot response after a short delay
    setTimeout(() => {
      const botResponse = generateResponse(input);
      const botMessage = { sender: "bot", text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <button className="back-button" onClick={() => navigateTo("home")}>
        ← Back to Home
      </button>

      <h2>DOUBTBOT 🤖</h2>
      <p className="subtitle">Your AI study assistant</p>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "user" ? "user-message" : "bot-message"
            }`}
          >
            <div className="message-sender">
              {msg.sender === "user" ? "You" : "DOUBTBOT"}
            </div>
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
        {isTyping && (
          <div className="message bot-message">
            <div className="message-sender">DOUBTBOT</div>
            <div className="typing-indicator">
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </div>
          </div>
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about your studies..."
          className="chat-input"
        />
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>

      <div className="suggestions">
        <p>Try asking:</p>
        <div className="suggestion-chips">
          <button onClick={() => setInput("Explain the quadratic formula")}>
            Quadratic formula
          </button>
          <button onClick={() => setInput("How to study effectively?")}>
            Study tips
          </button>
          <button onClick={() => setInput("Convert 68°F to Celsius")}>
            Temperature conversion
          </button>
        </div>
      </div>
    </div>
  );
};

const Quiz = ({ navigateTo, darkMode }) => {
  const [subject, setSubject] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questionCount, setQuestionCount] = useState(10);
  const [isTimed, setIsTimed] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const subjects = [
    "Maths",
    "English",
    "History",
    "Science",
    "Geography",
    "Civics",
  ];

  const difficulties = ["Easy", "Moderate", "Hard"];

  // Sample questions database
  const questionDatabase = {
    Maths: {
      Easy: [
        {
          question: "What is 15 + 27?",
          options: ["32", "42", "37", "45"],
          answer: "42",
          explanation: "15 + 27 = 42",
        },
        {
          question: "If a square has sides of 5cm, what is its area?",
          options: ["10cm²", "20cm²", "25cm²", "30cm²"],
          answer: "25cm²",
          explanation: "Area of square = side × side = 5 × 5 = 25cm²",
        },
      ],
      Moderate: [
        {
          question: "Solve for x: 2x + 5 = 15",
          options: ["5", "10", "7.5", "2.5"],
          answer: "5",
          explanation: "2x = 15 - 5 → 2x = 10 → x = 5",
        },
      ],
      Hard: [
        {
          question: "What is the derivative of 3x² + 2x + 1?",
          options: ["6x + 2", "3x + 2", "6x² + 2", "3x² + 2"],
          answer: "6x + 2",
          explanation:
            "The derivative of 3x² is 6x, 2x is 2, and constant is 0",
        },
      ],
    },
    English: {
      Easy: [
        {
          question: "Which of these is a noun?",
          options: ["Run", "Beautiful", "Dog", "Quickly"],
          answer: "Dog",
          explanation: "Dog is a person, place or thing - hence a noun",
        },
      ],
      Moderate: [
        {
          question: "Identify the metaphor:",
          options: [
            "The wind howled",
            "Her smile was sunshine",
            "He ran like the wind",
            "The flowers danced",
          ],
          answer: "Her smile was sunshine",
          explanation:
            "Directly compares smile to sunshine without 'like' or 'as'",
        },
      ],
      Hard: [
        {
          question: "Which sentence is in passive voice?",
          options: [
            "The cat chased the mouse",
            "The mouse was chased by the cat",
            "The cat is chasing the mouse",
            "The cat will chase the mouse",
          ],
          answer: "The mouse was chased by the cat",
          explanation: "Passive voice has the subject receiving the action",
        },
      ],
    },
    // Similar structure for other subjects...
    History: {
      Easy: [
        {
          question: "In which year did India gain independence?",
          options: ["1942", "1947", "1950", "1935"],
          answer: "1947",
          explanation:
            "India became independent from British rule on August 15, 1947",
        },
      ],
      Moderate: [
        {
          question: "Who was the first Prime Minister of India?",
          options: [
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "Sardar Patel",
            "Rajendra Prasad",
          ],
          answer: "Jawaharlal Nehru",
          explanation:
            "Jawaharlal Nehru served as the first PM from 1947 to 1964",
        },
      ],
      Hard: [
        {
          question: "The Battle of Plassey was fought in which year?",
          options: ["1757", "1764", "1776", "1857"],
          answer: "1757",
          explanation:
            "The Battle of Plassey (1757) marked the beginning of British rule in India",
        },
      ],
    },
    Science: {
      Easy: [
        {
          question: "Which gas do plants absorb during photosynthesis?",
          options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
          answer: "Carbon dioxide",
          explanation:
            "Plants take in CO₂ and release O₂ during photosynthesis",
        },
      ],
      Moderate: [
        {
          question: "What is the chemical symbol for gold?",
          options: ["Go", "Gd", "Au", "Ag"],
          answer: "Au",
          explanation: "Au comes from the Latin word 'aurum' meaning gold",
        },
      ],
      Hard: [
        {
          question:
            "Which law states that force equals mass times acceleration?",
          options: [
            "Newton's First Law",
            "Newton's Second Law",
            "Newton's Third Law",
            "Law of Gravitation",
          ],
          answer: "Newton's Second Law",
          explanation: "F=ma is Newton's Second Law of Motion",
        },
      ],
    },
    Geography: {
      Easy: [
        {
          question: "Which is the longest river in the world?",
          options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          answer: "Nile",
          explanation: "The Nile is approximately 6,650 km long",
        },
      ],
      Moderate: [
        {
          question: "Which desert is the largest in the world?",
          options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
          answer: "Sahara",
          explanation:
            "The Sahara covers about 9.2 million km² in North Africa",
        },
      ],
      Hard: [
        {
          question: "Which country has the most time zones?",
          options: ["Russia", "USA", "France", "China"],
          answer: "France",
          explanation:
            "France has 12 time zones due to its overseas territories",
        },
      ],
    },
    Civics: {
      Easy: [
        {
          question: "How many houses are there in the Indian Parliament?",
          options: ["One", "Two", "Three", "Four"],
          answer: "Two",
          explanation:
            "The Indian Parliament consists of Rajya Sabha and Lok Sabha",
        },
      ],
      Moderate: [
        {
          question: "Who is the head of the Indian government?",
          options: ["President", "Prime Minister", "Chief Justice", "Speaker"],
          answer: "Prime Minister",
          explanation:
            "The Prime Minister is the head of government while President is head of state",
        },
      ],
      Hard: [
        {
          question:
            "Which article of the Indian Constitution deals with Fundamental Rights?",
          options: [
            "Article 12-35",
            "Article 36-51",
            "Article 52-78",
            "Article 79-124",
          ],
          answer: "Article 12-35",
          explanation:
            "Fundamental Rights are enshrined in Part III (Articles 12-35) of the Constitution",
        },
      ],
    },
  };

  useEffect(() => {
    if (isTimed && timer > 0 && quizStarted && !quizFinished) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else if (isTimed && timer === 0 && quizStarted && !quizFinished) {
      handleNext();
    }
  }, [isTimed, timer, quizStarted, quizFinished]);

  const startQuiz = () => {
    // Get questions from database based on subject and difficulty
    const baseQuestions = questionDatabase[subject][difficulty];

    // If we don't have enough questions, repeat some (for demo purposes)
    const repeatedQuestions = [];
    while (repeatedQuestions.length < questionCount) {
      repeatedQuestions.push(
        ...baseQuestions.slice(
          0,
          Math.min(
            baseQuestions.length,
            questionCount - repeatedQuestions.length
          )
        )
      );
    }

    // Shuffle questions
    const shuffledQuestions = repeatedQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, questionCount);

    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setQuizStarted(true);
    setTimer(60);
    setAnsweredQuestions([]);
    setSelectedOption(null);
  };

  const handleAnswer = (answer) => {
    const isCorrect = questions[currentQuestionIndex].answer === answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([
      ...answeredQuestions,
      {
        question: questions[currentQuestionIndex].question,
        userAnswer: answer,
        correctAnswer: questions[currentQuestionIndex].answer,
        isCorrect,
        explanation: questions[currentQuestionIndex].explanation,
      },
    ]);

    setSelectedOption(answer);

    // Auto-proceed after 1.5 seconds to show feedback
    setTimeout(handleNext, 1500);
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      if (isTimed) setTimer(60);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      if (isTimed) setTimer(60);
      setSelectedOption(null);
    }
  };

  const restartQuiz = () => {
    setSubject(null);
    setDifficulty(null);
    setQuestionCount(10);
    setIsTimed(false);
    setQuestions([]);
    setQuizFinished(false);
    setQuizStarted(false);
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };

  return (
    <div className="quiz-container">
      <button className="back-button" onClick={() => navigateTo("home")}>
        ← Back to Home
      </button>

      {!subject ? (
        <div className="subject-selection">
          <h2>Select a Subject</h2>
          <div className="subject-grid">
            {subjects.map((sub) => (
              <div
                key={sub}
                className="subject-card"
                onClick={() => setSubject(sub)}
              >
                <div className="subject-icon">
                  {sub === "Maths" && "🧮"}
                  {sub === "English" && "📖"}
                  {sub === "History" && "🏛️"}
                  {sub === "Science" && "🔬"}
                  {sub === "Geography" && "🌍"}
                  {sub === "Civics" && "⚖️"}
                </div>
                <h3>{sub}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : !difficulty ? (
        <div className="difficulty-selection">
          <h2>Select Difficulty</h2>
          <div className="difficulty-options">
            {difficulties.map((level) => (
              <div
                key={level}
                className={`difficulty-card ${level.toLowerCase()}`}
                onClick={() => setDifficulty(level)}
              >
                <h3>{level}</h3>
                <p>
                  {level === "Easy" && "Basic concepts and definitions"}
                  {level === "Moderate" && "Application of concepts"}
                  {level === "Hard" && "Advanced problems and analysis"}
                </p>
              </div>
            ))}
          </div>
          <button
            className="back-button small"
            onClick={() => setSubject(null)}
          >
            ← Back to Subjects
          </button>
        </div>
      ) : questions.length === 0 ? (
        <div className="quiz-setup">
          <h2>Quiz Setup</h2>
          <div className="setup-options">
            <div className="option-group">
              <label>Number of Questions:</label>
              <select
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
              >
                {[5, 10, 15, 20].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="option-group">
              <label>
                <input
                  type="checkbox"
                  checked={isTimed}
                  onChange={() => setIsTimed(!isTimed)}
                />
                Timed Quiz (60 seconds per question)
              </label>
            </div>
          </div>

          <div className="quiz-actions">
            <button onClick={startQuiz} className="start-button">
              Start Quiz
            </button>
            <button
              className="back-button small"
              onClick={() => setDifficulty(null)}
            >
              ← Back to Difficulty
            </button>
          </div>
        </div>
      ) : quizFinished ? (
        <div className="quiz-results">
          <h2>Quiz Results</h2>

          <div className="score-display">
            <div className="score-circle">
              <h3>Your Score</h3>
              <div className="score-percentage">
                {Math.round((score / questions.length) * 100)}%
              </div>
              <p>
                {score} out of {questions.length} correct
              </p>
            </div>

            <div className="performance-feedback">
              <h4>Performance Summary</h4>
              <p>
                {score === questions.length
                  ? "Perfect score! 🎉 You've mastered this topic!"
                  : score >= questions.length * 0.7
                  ? "Great job! 👍 You have a good understanding of this topic."
                  : score >= questions.length * 0.4
                  ? "Not bad! 😊 Keep practicing to improve."
                  : "Keep trying! 📚 Review the material and try again."}
              </p>
            </div>
          </div>

          <div className="detailed-results">
            <h4>Question Review</h4>
            <div className="results-list">
              {answeredQuestions.map((q, index) => (
                <div
                  key={index}
                  className={`result-item ${
                    q.isCorrect ? "correct" : "incorrect"
                  }`}
                >
                  <p>
                    <strong>Q{index + 1}:</strong> {q.question}
                  </p>
                  <p>
                    Your answer: {q.userAnswer} {q.isCorrect ? "✅" : "❌"}
                  </p>
                  {!q.isCorrect && <p>Correct answer: {q.correctAnswer}</p>}
                  <p className="explanation">{q.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="quiz-actions">
            <button onClick={restartQuiz} className="restart-button">
              Take Another Quiz
            </button>
            <button onClick={() => navigateTo("home")} className="home-button">
              Back to Home
            </button>
          </div>
        </div>
      ) : (
        <div className="quiz-interface">
          <div className="quiz-header">
            <div className="quiz-info">
              <h3>
                {subject} Quiz ({difficulty})
              </h3>
              <p>
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>

            <div className="quiz-stats">
              {isTimed && <div className="timer">⏱️ Time Left: {timer}s</div>}
              <div className="score">
                🏆 Score: {score}/{currentQuestionIndex}
              </div>
            </div>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>

          <div className="question-area">
            <h3 className="question-text">
              {questions[currentQuestionIndex].question}
            </h3>

            <div className="options-grid">
              {questions[currentQuestionIndex].options.map((option, index) => {
                const isSelected = selectedOption === option;
                const isCorrect =
                  questions[currentQuestionIndex].answer === option;
                let optionClass = "option";

                if (selectedOption) {
                  if (isCorrect) {
                    optionClass += " correct";
                  } else if (isSelected && !isCorrect) {
                    optionClass += " incorrect";
                  }
                }

                return (
                  <button
                    key={index}
                    className={optionClass}
                    onClick={() => !selectedOption && handleAnswer(option)}
                    disabled={!!selectedOption}
                  >
                    {option}
                    {selectedOption && isCorrect && " ✓"}
                    {selectedOption && isSelected && !isCorrect && " ✗"}
                  </button>
                );
              })}
            </div>

            {selectedOption && (
              <div className="answer-feedback">
                <p>
                  {selectedOption === questions[currentQuestionIndex].answer
                    ? "Correct! 🎉"
                    : "Incorrect 😕"}
                </p>
                <p className="explanation">
                  {questions[currentQuestionIndex].explanation}
                </p>
              </div>
            )}
          </div>

          <div className="quiz-navigation">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="nav-button"
            >
              ← Previous
            </button>

            <div className="question-counter">
              {currentQuestionIndex + 1} / {questions.length}
            </div>

            <button
              onClick={handleNext}
              disabled={
                currentQuestionIndex === questions.length - 1 && !selectedOption
              }
              className="nav-button"
            >
              {currentQuestionIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Progress = ({ navigateTo, darkMode }) => {
  const [timeRange, setTimeRange] = useState("weekly");
  const [activeChart, setActiveChart] = useState("subject");

  // Sample progress data - in a real app, this would come from backend
  const progressData = {
    weekly: {
      subjects: [
        { name: "Maths", value: 85, time: 420 },
        { name: "English", value: 70, time: 320 },
        { name: "History", value: 60, time: 180 },
        { name: "Science", value: 90, time: 380 },
        { name: "Geography", value: 75, time: 210 },
        { name: "Civics", value: 80, time: 250 },
      ],
      daily: [
        { day: "Mon", score: 65, time: 60 },
        { day: "Tue", score: 70, time: 45 },
        { day: "Wed", score: 80, time: 90 },
        { day: "Thu", score: 75, time: 75 },
        { day: "Fri", score: 85, time: 120 },
        { day: "Sat", score: 90, time: 150 },
        { day: "Sun", score: 65, time: 30 },
      ],
    },
    monthly: {
      subjects: [
        { name: "Maths", value: 78, time: 1800 },
        { name: "English", value: 82, time: 1500 },
        { name: "History", value: 65, time: 900 },
        { name: "Science", value: 88, time: 1700 },
        { name: "Geography", value: 70, time: 1100 },
        { name: "Civics", value: 75, time: 1300 },
      ],
      daily: [
        { week: "Week 1", score: 70, time: 400 },
        { week: "Week 2", score: 75, time: 450 },
        { week: "Week 3", score: 80, time: 550 },
        { week: "Week 4", score: 85, time: 600 },
      ],
    },
  };

  const COLORS = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];

  const currentData = progressData[timeRange];
  const subjectData = currentData.subjects;
  const timeData = currentData.daily;

  return (
    <div className="progress-container">
      <button className="back-button" onClick={() => navigateTo("home")}>
        ← Back to Home
      </button>

      <h2>Your Learning Progress</h2>

      <div className="progress-controls">
        <div className="time-range-selector">
          <button
            className={timeRange === "weekly" ? "active" : ""}
            onClick={() => setTimeRange("weekly")}
          >
            Weekly
          </button>
          <button
            className={timeRange === "monthly" ? "active" : ""}
            onClick={() => setTimeRange("monthly")}
          >
            Monthly
          </button>
        </div>

        <div className="chart-selector">
          <button
            className={activeChart === "subject" ? "active" : ""}
            onClick={() => setActiveChart("subject")}
          >
            By Subject
          </button>
          <button
            className={activeChart === "time" ? "active" : ""}
            onClick={() => setActiveChart("time")}
          >
            Over Time
          </button>
        </div>
      </div>

      <div className="charts-container">
        {activeChart === "subject" ? (
          <>
            <div className="chart-card">
              <h3>Subject Mastery</h3>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={subjectData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {subjectData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}% mastery`, "Score"]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="chart-card">
              <h3>Time Spent per Subject (minutes)</h3>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={subjectData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="time"
                      fill="#36A2EB"
                      name="Study Time (min)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="chart-card">
              <h3>Performance Over Time</h3>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={timeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={timeRange === "weekly" ? "day" : "week"} />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#FFCE56" name="Quiz Score (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="chart-card">
              <h3>Study Time Over Time (minutes)</h3>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={timeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={timeRange === "weekly" ? "day" : "week"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="time"
                      fill="#4BC0C0"
                      name="Study Time (min)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="performance-summary">
        <h3>Performance Insights</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-value">
              {Math.round(
                subjectData.reduce((sum, subject) => sum + subject.value, 0) /
                  subjectData.length
              )}
              %
            </div>
            <div className="insight-label">Average Mastery</div>
          </div>

          <div className="insight-card">
            <div className="insight-value">
              {subjectData.reduce((sum, subject) => sum + subject.time, 0)} min
            </div>
            <div className="insight-label">Total Study Time</div>
          </div>

          <div className="insight-card">
            <div className="insight-value">
              {subjectData.sort((a, b) => b.value - a.value)[0].name}
            </div>
            <div className="insight-label">Strongest Subject</div>
          </div>

          <div className="insight-card">
            <div className="insight-value">
              {subjectData.sort((a, b) => a.value - b.value)[0].name}
            </div>
            <div className="insight-label">Weakest Subject</div>
          </div>
        </div>
      </div>

      <div className="recommendations">
        <h3>Recommendations</h3>
        <ul>
          <li>
            <strong>
              Focus on {subjectData.sort((a, b) => a.value - b.value)[0].name}:
            </strong>
            Spend more time practicing this subject to improve your mastery.
          </li>
          <li>
            <strong>Consistent study time:</strong>
            Try to study at least 30 minutes daily for better retention.
          </li>
          <li>
            <strong>Review quizzes:</strong>
            Go through your quiz mistakes to identify areas needing improvement.
          </li>
          <li>
            <strong>Use DOUBTBOT:</strong>
            Ask questions about concepts you find challenging.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
