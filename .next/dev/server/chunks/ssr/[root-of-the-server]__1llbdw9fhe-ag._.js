module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemoryGame
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
// Oyun için kullanacağımız kartlar (emojiler)
const CARD_SYMBOLS = [
    '🚀',
    '🎸',
    '🎨',
    '🍕',
    '🎮',
    '🏀',
    '👽',
    '👻'
];
function MemoryGame() {
    // Giriş ekranı durumu
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Oyun durumları
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [flippedIndices, setFlippedIndices] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [matchedIndices, setMatchedIndices] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [moves, setMoves] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Oyunu başlatan ve kartları karıştıran fonksiyon
    const initializeGame = ()=>{
        const shuffledCards = [
            ...CARD_SYMBOLS,
            ...CARD_SYMBOLS
        ].sort(()=>Math.random() - 0.5).map((symbol, index)=>({
                id: index,
                symbol
            }));
        setCards(shuffledCards);
        setFlippedIndices([]);
        setMatchedIndices([]);
        setMoves(0);
        setIsPlaying(true); // Oyunu başlat
    };
    // Kart tıklama işlemi
    const handleCardClick = (index)=>{
        if (isChecking || flippedIndices.includes(index) || matchedIndices.includes(index)) {
            return; // Zaten açık, eşleşmiş veya kontrol aşamasındaysa tıklamayı yoksay
        }
        const newFlippedIndices = [
            ...flippedIndices,
            index
        ];
        setFlippedIndices(newFlippedIndices);
        // İki kart açıldığında kontrol et
        if (newFlippedIndices.length === 2) {
            setIsChecking(true);
            setMoves((prev)=>prev + 1);
            const [firstIndex, secondIndex] = newFlippedIndices;
            if (cards[firstIndex].symbol === cards[secondIndex].symbol) {
                // Eşleşme başarılı
                setMatchedIndices((prev)=>[
                        ...prev,
                        firstIndex,
                        secondIndex
                    ]);
                setFlippedIndices([]);
                setIsChecking(false);
            } else {
                // Eşleşme başarısız, 1 saniye sonra kapat
                setTimeout(()=>{
                    setFlippedIndices([]);
                    setIsChecking(false);
                }, 1000);
            }
        }
    };
    // Oyun bitti mi kontrolü
    const isGameOver = cards.length > 0 && matchedIndices.length === cards.length;
    // --- GİRİŞ EKRANI BİLEŞENİ ---
    if (!isPlaying) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: styles.container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.welcomeBox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '3rem',
                            marginBottom: '10px'
                        },
                        children: "🧠 Hafıza Oyunu"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.2rem',
                            color: '#555',
                            marginBottom: '30px'
                        },
                        children: "Kartları eşleştir ve hafızanı test et!"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        style: styles.startButton,
                        onClick: initializeGame,
                        children: "Oyuna Başla 🎮"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pages/index.js",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    }
    // --- OYUN EKRANI BİLEŞENİ ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                style: {
                    marginBottom: '10px'
                },
                children: "Hafıza Oyunu"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.headerInfo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Hamle Sayısı: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: moves
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 91,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        style: styles.resetButton,
                        onClick: initializeGame,
                        children: "Yeniden Başlat"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            isGameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.winMessage,
                children: [
                    "Tebrikler! Oyunu ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                        children: moves
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 99,
                        columnNumber: 28
                    }, this),
                    " hamlede bitirdiniz! 🎉"
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.grid,
                children: cards.map((card, index)=>{
                    const isFlipped = flippedIndices.includes(index) || matchedIndices.includes(index);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleCardClick(index),
                        style: {
                            ...styles.card,
                            backgroundColor: isFlipped ? '#fff' : '#4a90e2',
                            cursor: isFlipped ? 'default' : 'pointer',
                            borderColor: matchedIndices.includes(index) ? '#4caf50' : '#333'
                        },
                        children: isFlipped ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '40px'
                            },
                            children: card.symbol
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 120,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '40px',
                                color: '#fff'
                            },
                            children: "?"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 122,
                            columnNumber: 17
                        }, this)
                    }, card.id, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
// Satır içi stiller (CSS nesneleri)
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#f5f5f5',
        padding: '20px'
    },
    welcomeBox: {
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '15px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
    },
    startButton: {
        padding: '15px 30px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#4a90e2',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.2s, background-color 0.2s',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    headerInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '20px',
        alignItems: 'center',
        fontSize: '18px'
    },
    resetButton: {
        padding: '8px 16px',
        fontSize: '14px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    winMessage: {
        padding: '15px',
        marginBottom: '20px',
        backgroundColor: '#dff0d8',
        color: '#3c763d',
        borderRadius: '5px',
        border: '1px solid #d6e9c6',
        fontWeight: 'bold'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 80px)',
        gap: '10px'
    },
    card: {
        width: '80px',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1llbdw9fhe-ag._.js.map