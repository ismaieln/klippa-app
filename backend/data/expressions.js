const expressions = [
  {
    difficulty: 'hard',
    question: 'log(10²) - ln(1)',
    answer: '2',
  },
  {
    difficulty: 'easy',
    question: '10 - 2',
    answer: '8',
  },
  {
    difficulty: 'easy',
    question: '123 ÷ 3',
    answer: '41',
  },
  {
    difficulty: 'easy',
    question: '10 x 0.2',
    answer: '2',
  },
  {
    difficulty: 'easy',
    question: '10 - 6 + 1',
    answer: '5',
  },
  {
    difficulty: 'easy',
    question: '13 x 4',
    answer: '52',
  },
  {
    difficulty: 'easy',
    question: '1 + 1 + 3',
    answer: '5',
  },
  {
    difficulty: 'easy',
    question: '7 - 2 + 3',
    answer: '8',
  },
  {
    difficulty: 'easy',
    question: '1008 ÷ 3',
    answer: '336',
  },
  {
    difficulty: 'easy',
    question: '1008 ÷ 7',
    answer: '144',
  },
  {
    difficulty: 'easy',
    question: '1008 ÷ 9',
    answer: '112',
  },
  {
    difficulty: 'easy',
    question: '1024 ÷ 32',
    answer: '32',
  },
  {
    difficulty: 'hard',
    question: '(sin 63°)² + (cos 63°)²',
    answer: '1',
  },
  {
    difficulty: 'medium',
    question: '2.5 × (7-3)',
    answer: '10',
  },
  {
    difficulty: 'medium',
    question: ' ¾ × ⅔ × 10',
    answer: '5',
  },
  {
    difficulty: 'hard',
    question: '(cos 30°)² × 4',
    answer: '3',
  },
  {
    difficulty: 'hard',
    question: '	(cos 45°) × √2',
    answer: '1',
  },
  {
    difficulty: 'medium',
    question: '	6 ÷ (2 × (1 + 2))',
    answer: '1',
  },
  {
    difficulty: 'medium',
    question: '	(7 + 7) × (7 + ⅐)',
    answer: '100',
  },
  {
    difficulty: 'easy',
    question: '	0.99099 + 1.00901',
    answer: '2',
  },
  {
    difficulty: 'hard',
    question: '	5! ÷ 4!',
    answer: '5',
  },
  {
    difficulty: 'medium',
    question: ' ¾ ÷ ⅜',
    answer: '2',
  },
  {
    difficulty: 'hard',
    question: ' (¾ ÷ ⅔) × 8 + 1',
    answer: '10',
  },
  {
    difficulty: 'medium',
    question: ' (⅖ + ⅝ - 1) × 20',
    answer: '0.5',
  },
  {
    difficulty: 'medium',
    question: '2.2 × (7 - 2)',
    answer: '11',
  },
  {
    difficulty: 'hard',
    question: '(((2) - ½) ⅔) - ¾',
    answer: '0.25',
  },
  {
    difficulty: 'medium',
    question: '¾ ÷ ¼',
    answer: '3',
  },
  {
    difficulty: 'medium',
    question: ' (⅚ ÷ ⅔) x 4',
    answer: '5',
  },
  {
    difficulty: 'medium',
    question: ' 2.5 ÷ (7 - 2)',
    answer: '0.5',
  },
  {
    difficulty: 'medium',
    question: ' (7 ÷ 3 × ⅜) ÷ ⅞',
    answer: '1',
  },
  {
    difficulty: 'medium',
    question: '(¾ - 0.25)² × (7-3)',
    answer: '1',
  },
  {
    difficulty: 'medium',
    question: ' (¾ × ⅔)² + ¼',
    answer: '0.5',
  },
  {
    difficulty: 'medium',
    question: '⅚ + 13 ÷ 6 ',
    answer: '3',
  },
  {
    difficulty: 'medium',
    question: ' ((¾)² × 0.0625) + 1',
    answer: '10',
  },
  {
    difficulty: 'medium',
    question: ' 0.5 ÷ 0.1 - 4',
    answer: '1',
  },
  {
    difficulty: 'hard',
    question: '	√(4! + 0!) × ⅗',
    answer: '3',
  },
  {
    difficulty: 'hard',
    question: '	(cos 30°) ÷ √3 + (sin 30°) ',
    answer: '1',
  },
  {
    difficulty: 'hard',
    question: '	(ln(1) + (79)⁰) x 3!',
    answer: '6',
  },
  {
    difficulty: 'hard',
    question: '	(((½)² ÷ (½)⁵) x (cos 60°))°⋅⁵ ',
    answer: '2',
  },
  {
    difficulty: 'hard',
    question: '	((cos 45°)² + ¾) ÷ ¼',
    answer: '5',
  },
  {
    difficulty: 'hard',
    question: '	(sin ℼ/3)² × (0.5)⁻²',
    answer: '3',
  },
  {
    difficulty: 'hard',
    question: '	((6! - 5!) ÷ 3!)°⋅⁵',
    answer: '10',
  },
  {
    difficulty: 'hard',
    question: '	(cos ℼ/4)² × 0! x log(100)',
    answer: '1',
  },
  {
    difficulty: 'hard',
    question: '	(6! + (2⁸ x (cos ℼ)))°⋅⁵ x (cos ℼ/3)',
    answer: '7',
  },
  {
    difficulty: 'hard',
    question: '	(sin 60° x sin 45°) × (4!)°⋅⁵',
    answer: '3',
  },
  {
    difficulty: 'hard',
    question: '	(cos 75°) × (cos 15°) ÷ ¼',
    answer: '1',
  },
  {
    difficulty: 'hard',
    question: '	((sin 75°) + (sin 15°))² ÷ ¾',
    answer: '2',
  },
  {
    difficulty: 'hard',
    question: '	(((⅐)⁻² + 0!) x cos (ℼ/3))°⋅⁵',
    answer: '5',
  },
  {
    difficulty: 'hard',
    question: '	6! + (5! x log(0.1))',
    answer: '6',
  },
]

export default expressions

// {
//   difficulty: 'medium',
//   question: '∛ ∜ ¾ √ × ⅔ ° ¹²³⁄⁵ ℆ ⅐ ⅑ ⅒ 5! ÷ 4! ⁻⁰⋅⁵ ⁰₀ₒℼ ❻ ➅',
//   answer: '5',
// },
