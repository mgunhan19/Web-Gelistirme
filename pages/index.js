import { useState, useEffect } from 'react';

// Oyun için kullanacağımız kartlar (emojiler)
const CARD_SYMBOLS = ['🚀', '🎸', '🎨', '🍕', '🎮', '🏀', '👽', '👻'];

export default function MemoryGame() {
  // Giriş ekranı durumu
  const [isPlaying, setIsPlaying] = useState(false);

  // Oyun durumları
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  // Oyunu başlatan ve kartları karıştıran fonksiyon
  const initializeGame = () => {
    const shuffledCards = [...CARD_SYMBOLS, ...CARD_SYMBOLS]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({ id: index, symbol }));

    setCards(shuffledCards);
    setFlippedIndices([]);
    setMatchedIndices([]);
    setMoves(0);
    setIsPlaying(true); // Oyunu başlat
  };

  // Kart tıklama işlemi
  const handleCardClick = (index) => {
    if (
      isChecking ||
      flippedIndices.includes(index) ||
      matchedIndices.includes(index)
    ) {
      return; // Zaten açık, eşleşmiş veya kontrol aşamasındaysa tıklamayı yoksay
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    // İki kart açıldığında kontrol et
    if (newFlippedIndices.length === 2) {
      setIsChecking(true);
      setMoves((prev) => prev + 1);

      const [firstIndex, secondIndex] = newFlippedIndices;
      if (cards[firstIndex].symbol === cards[secondIndex].symbol) {
        // Eşleşme başarılı
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
        setFlippedIndices([]);
        setIsChecking(false);
      } else {
        // Eşleşme başarısız, 1 saniye sonra kapat
        setTimeout(() => {
          setFlippedIndices([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  // Oyun bitti mi kontrolü
  const isGameOver =
    cards.length > 0 && matchedIndices.length === cards.length;

  // --- GİRİŞ EKRANI BİLEŞENİ ---
  if (!isPlaying) {
    return (
      <div style={styles.container}>
        <div style={styles.welcomeBox}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>🧠 Hafıza Oyunu</h1>
          <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
            Kartları eşleştir ve hafızanı test et!
          </p>
          <button style={styles.startButton} onClick={initializeGame}>
            Oyuna Başla 🎮
          </button>
        </div>
      </div>
    );
  }

  // --- OYUN EKRANI BİLEŞENİ ---
  return (
    <div style={styles.container}>
      <h1 style={{ marginBottom: '10px' }}>Hafıza Oyunu</h1>
      
      <div style={styles.headerInfo}>
        <p>Hamle Sayısı: <strong>{moves}</strong></p>
        <button style={styles.resetButton} onClick={initializeGame}>
          Yeniden Başlat
        </button>
      </div>

      {isGameOver && (
        <div style={styles.winMessage}>
          Tebrikler! Oyunu <strong>{moves}</strong> hamlede bitirdiniz! 🎉
        </div>
      )}

      <div style={styles.grid}>
        {cards.map((card, index) => {
          const isFlipped =
            flippedIndices.includes(index) || matchedIndices.includes(index);
          
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(index)}
              style={{
                ...styles.card,
                backgroundColor: isFlipped ? '#fff' : '#4a90e2',
                cursor: isFlipped ? 'default' : 'pointer',
                borderColor: matchedIndices.includes(index) ? '#4caf50' : '#333'
              }}
            >
              {isFlipped ? (
                <span style={{ fontSize: '40px' }}>{card.symbol}</span>
              ) : (
                <span style={{ fontSize: '40px', color: '#fff' }}>?</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
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
    padding: '20px',
  },
  welcomeBox: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '50px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
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
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  headerInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
    alignItems: 'center',
    fontSize: '18px',
  },
  resetButton: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  winMessage: {
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: '#dff0d8',
    color: '#3c763d',
    borderRadius: '5px',
    border: '1px solid #d6e9c6',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 80px)',
    gap: '10px',
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
    transition: 'all 0.3s ease',
  },
};