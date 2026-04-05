document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // Elements Setup
    // -------------------------------------------------------------------------
    const heartsContainer = document.getElementById('hearts-container');
    const balloonsContainer = document.getElementById('balloons-container');
    const starsContainer = document.getElementById('stars-container');

    // Screens
    const screen1 = document.getElementById('welcome-screen');
    const screen2 = document.getElementById('memory-section');
    const screen3 = document.getElementById('quiz-section');
    const screen4 = document.getElementById('secret-message-section');
    const screen5 = document.getElementById('cake-section');
    const screen6 = document.getElementById('final-surprise');

    // Buttons
    const btnStart = document.getElementById('start-btn');
    const btnToQuiz = document.getElementById('to-quiz-btn');
    const btnToSecret = document.getElementById('to-secret-btn');
    const btnToCake = document.getElementById('to-cake-btn');
    const btnCutCake = document.getElementById('cut-cake-btn');
    const btnFinalSurprise = document.getElementById('final-surprise-btn');

    // Cake elements
    const knife = document.getElementById('knife');
    const flame = document.getElementById('flame');
    const theCake = document.getElementById('the-cake');

    // -------------------------------------------------------------------------
    // Extreme Romance: Falling Rose Petals
    // -------------------------------------------------------------------------
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');

        const size = Math.random() * 15 + 10;
        const leftPos = Math.random() * 100;
        const animDuration = Math.random() * 5 + 7;

        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${leftPos}%`;
        petal.style.animationDuration = `${animDuration}s`;

        // Random petal shape variation
        petal.style.borderRadius = `${Math.random() * 50 + 50}% 0 ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}%`;

        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), animDuration * 1000);
    }
    setInterval(createPetal, 600);

    // -------------------------------------------------------------------------
    // Interactive: Mouse Sparkle Hearts
    // -------------------------------------------------------------------------
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.15) return; // Only spawn occasionally

        const sparkle = document.createElement('div');
        sparkle.innerHTML = '❤️';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.fontSize = (Math.random() * 10 + 10) + 'px';
        sparkle.style.color = '#ff4d6d';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.opacity = '0.8';
        sparkle.style.transition = 'all 1s ease-out';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`;
            sparkle.style.opacity = '0';
        }, 10);

        setTimeout(() => sparkle.remove(), 1000);
    });

    // -------------------------------------------------------------------------
    // Floating Hearts Generation
    // -------------------------------------------------------------------------
    function createFloatingHeart() {
        const heart = document.createElement('i');
        heart.classList.add('fa-solid', 'fa-heart', 'floating-heart');

        // Randomly pick a color
        const colors = ['#e6c27a', '#b76e79', '#ff4d6d', '#ffb3c6', '#ffffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Random properties
        const size = Math.random() * 20 + 10;
        const leftPos = Math.random() * 100;
        const animDuration = Math.random() * 5 + 5;

        heart.style.fontSize = `${size}px`;
        heart.style.left = `${leftPos}%`;
        heart.style.color = color;
        heart.style.animationDuration = `${animDuration}s`;
        heart.style.opacity = Math.random() * 0.5 + 0.3;

        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), animDuration * 1000);
    }

    setInterval(createFloatingHeart, 600);

    // -------------------------------------------------------------------------
    // Floating Balloons Generation
    // -------------------------------------------------------------------------
    function createFloatingBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('floating-balloon');
        const balloons = ['🎈', '💖', '💝', '🎁'];
        balloon.innerHTML = balloons[Math.floor(Math.random() * balloons.length)];

        const size = Math.random() * 2 + 2;
        const leftPos = Math.random() * 90 + 5;
        const animDuration = Math.random() * 8 + 10;

        balloon.style.fontSize = `${size}rem`;
        balloon.style.left = `${leftPos}%`;
        balloon.style.animationDuration = `${animDuration}s`;

        balloonsContainer.appendChild(balloon);

        setTimeout(() => balloon.remove(), animDuration * 1000);
    }
    setInterval(createFloatingBalloon, 3000);

    // -------------------------------------------------------------------------
    // Floating Stars Generation
    // -------------------------------------------------------------------------
    function createFloatingStar() {
        const star = document.createElement('i');
        star.classList.add('fa-solid', 'fa-star', 'floating-star');

        const leftPos = Math.random() * 100;
        const topPos = Math.random() * 100;
        const animDuration = Math.random() * 3 + 2;

        star.style.left = `${leftPos}%`;
        star.style.top = `${topPos}%`;
        star.style.color = Math.random() > 0.5 ? '#e6c27a' : '#ffffff';
        star.style.animationDuration = `${animDuration}s`;

        starsContainer.appendChild(star);

        setTimeout(() => star.remove(), animDuration * 1000);
    }
    setInterval(createFloatingStar, 400);

    // Navigation Utility function
    function showScreen(hideScreen, showScreenElem) {
        hideScreen.classList.remove('active');
        hideScreen.classList.add('hidden');

        setTimeout(() => {
            showScreenElem.classList.remove('hidden');
            showScreenElem.classList.add('active');
        }, 800); // Wait for fade out
    }

    // -------------------------------------------------------------------------
    // Screen 1 -> Screen 2 (Welcome -> Memory)
    // -------------------------------------------------------------------------
    btnStart.addEventListener('click', () => {
        showScreen(screen1, screen2);
    });

    // -------------------------------------------------------------------------
    // Screen 2 -> Screen 3 (Memory -> Quiz)
    // -------------------------------------------------------------------------
    btnToQuiz.addEventListener('click', () => {
        showScreen(screen2, screen3);
        initQuiz();
    });

    // -------------------------------------------------------------------------
    // Quiz Logic
    // -------------------------------------------------------------------------
    const quizData = [
        {
            question: "When was our Anivesary?",
            options: ["21/10/2025", "24/10/2025", "15/10/2025", "27/10/2025"],
            correct: 1
        },
        {
            question: "What is my index number?",
            options: ["1249", "1165", "1235", "1146"],
            correct: 0
        },
        {
            question: "What is my favorite car?",
            options: ["Mazda", "Mustang", "BMW", "GTR"],
            correct: 3
        },
        {
            question: "What is my favourite food?",
            options: ["Noodles", "Ice-Cream", "Chocolate", "Cake"],
            correct: 2
        },
        {
            question: "What is my Ambition?",
            options: ["Be Doctor", "Be Software-Engineer", "Be Pilot", "Be Army"],
            correct: 1
        },
        {
            question: "What do I love most about you?",
            options: ["Your smile", "Your laugh", "Your kindness", "Everything ❤️"],
            correct: 3
        },
        {
            question: "What is my favourite country?",
            options: ["Sri Lanka", "Thailand", "America", "Japan"],
            correct: 0
        },
        {
            question: "When did you give me your first lip-kiss?",
            options: ["20/03/2026", "19/03/2026", "18/03/2026", "17/03/2026"],
            correct: 1
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    const quizContainer = document.getElementById('quiz-container');

    function initQuiz() {
        quizContainer.innerHTML = '';
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        const q = quizData[currentQuestionIndex];

        let html = `
            <div class="quiz-question">${currentQuestionIndex + 1}. ${q.question}</div>
            <div class="quiz-options">
        `;

        q.options.forEach((opt, index) => {
            html += `<button class="quiz-btn" onclick="checkAnswer(${index}, ${q.correct})">${opt}</button>`;
        });

        html += `</div>`;
        quizContainer.innerHTML = html;

        // Hide "next section" button while quizzing
        btnToSecret.classList.add('hidden');
    }

    window.checkAnswer = function (selectedIndex, correctIndex) {
        const buttons = document.querySelectorAll('.quiz-btn');

        buttons.forEach((btn, index) => {
            btn.disabled = true; // Disable all
            if (index === correctIndex) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && selectedIndex !== correctIndex) {
                btn.classList.add('wrong');
            }
        });

        if (selectedIndex === correctIndex) {
            score++;
            triggerMiniConfetti();
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                showQuestion();
            } else {
                showQuizResult();
            }
        }, 1500);
    }

    function triggerMiniConfetti() {
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ffb3c6', '#ffffff']
        });
    }

    function showQuizResult() {
        let msg = "";
        if (score === quizData.length) {
            msg = "Wow ❤️ You know me perfectly!";
        } else if (score > 0) {
            msg = "Pretty good 😄 but you still need to learn more about me.";
        } else {
            msg = "Haha 😆 we need more memories together!";
        }

        quizContainer.innerHTML = `
            <div class="quiz-result">You scored ${score} out of ${quizData.length}!</div>
            <p>${msg}</p>
        `;

        btnToSecret.classList.remove('hidden');
    }

    // -------------------------------------------------------------------------
    // Screen 3 -> Screen 4 (Quiz -> Secret Message)
    // -------------------------------------------------------------------------
    btnToSecret.addEventListener('click', () => {
        showScreen(screen3, screen4);
        setTimeout(typeMessage, 1000); // Start typing after fade
    });

    // -------------------------------------------------------------------------
    // Typing Animation
    // -------------------------------------------------------------------------
    const secretMessageText = `Dear Manika ❤️,

Happy Birthday to the most beautiful person in my life! Today is extra special because it's the day you were born to change my world.

Since you came into my life, every day has felt like a dream. Your smile is my favorite view, and your happiness is my priority. Every moment we spend together becomes a treasure in my heart.

On your birthday, I want to tell you something special. More than any gift, what I truly want from you today is a sweet lip kiss and a tight hug that I never want to let go of. Those are the only gifts that would make my heart feel truly complete.

Thank you for being the amazing person you are. I'm so lucky to have you, and I promise to love you, protect you, and cherish you forever and always.

Enjoy your day, my love. I can't wait to create more beautiful memories with you.

With infinite love,
Your Sudu 🥰❤️`;

    const typedTextElem = document.getElementById('typed-message');
    let typeIndex = 0;

    function typeMessage() {
        if (typeIndex < secretMessageText.length) {
            typedTextElem.textContent += secretMessageText.charAt(typeIndex);
            typeIndex++;

            // Auto-scroll to keep the latest line visible
            const parentSection = typedTextElem.closest('.screen');
            if (parentSection) {
                parentSection.scrollTo({
                    top: parentSection.scrollHeight,
                    behavior: 'smooth'
                });
            }

            setTimeout(typeMessage, 35); // Speed of typing
        } else {
            // Typing done
            setTimeout(() => {
                btnToCake.classList.remove('hidden');
                // Final scroll to ensure button is visible
                const parentSection = typedTextElem.closest('.screen');
                if (parentSection) {
                    parentSection.scrollTo({
                        top: parentSection.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            }, 1000);
        }
    }

    // -------------------------------------------------------------------------
    // Screen 4 -> Screen 5 (Secret Message -> Cake Celebration)
    // -------------------------------------------------------------------------
    btnToCake.addEventListener('click', () => {
        showScreen(screen4, screen5);
    });

    // -------------------------------------------------------------------------
    // Cake Cutting Animation
    // -------------------------------------------------------------------------
    if (btnCutCake) {
        btnCutCake.addEventListener('click', () => {
            btnCutCake.classList.add('hidden'); // hide the button immediately
            knife.classList.add('cutting');

            // Wait for knife to reach the bottom (about 1.25s into the 2.5s animation)
            setTimeout(() => {
                flame.classList.add('out'); // blow out candle
                theCake.classList.add('sliced');

                // Mini confetti burst to celebrate cutting
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#e6c27a', '#b76e79', '#ffffff']
                });

                // Show final surprise button
                setTimeout(() => {
                    btnFinalSurprise.classList.remove('hidden');
                }, 1000);
            }, 1250);
        });
    }

    // -------------------------------------------------------------------------
    // Screen 5 -> Screen 6 (Cake Celebration -> Final Surprise)
    // -------------------------------------------------------------------------
    btnFinalSurprise.addEventListener('click', () => {
        showScreen(screen5, screen6);

        // Massive Confetti
        var duration = 3000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ffb3c6', '#ffffff']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ffb3c6', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Initialize Relationship Counter
        initCounter();
    });

    // -------------------------------------------------------------------------
    // Relationship Counter
    // -------------------------------------------------------------------------
    function initCounter() {
        // Set start date to October 24, 2025
        const startDate = new Date(2025, 9, 24);

        const counterContainer = document.getElementById('counter');

        // Add a title element above the counter if it doesn't exist
        if (!document.getElementById('counter-title')) {
            const titleElem = document.createElement('h3');
            titleElem.id = 'counter-title';
            titleElem.innerHTML = "❤️ We have loved each other for";
            titleElem.style.color = "#dfcdce";
            titleElem.style.fontFamily = "'Playfair Display', serif";
            titleElem.style.marginBottom = "15px";
            titleElem.style.fontSize = "1.5rem";
            counterContainer.parentNode.insertBefore(titleElem, counterContainer);
        }

        function updateCounter() {
            const now = new Date();
            const difference = now - startDate;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            counterContainer.innerHTML = `
                <div class="counter-box"><span class="number">${days}</span><span class="label">Days</span></div>
                <div class="counter-box"><span class="number">${hours}</span><span class="label">Hours</span></div>
                <div class="counter-box"><span class="number">${minutes}</span><span class="label">Min</span></div>
                <div class="counter-box"><span class="number">${seconds}</span><span class="label">Sec</span></div>
            `;
        }

        updateCounter();
        setInterval(updateCounter, 1000);
    }
});
