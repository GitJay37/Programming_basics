let words: string[] = [
    
    'APPLE',
    'BANANA',
    'CHERRY',
    'ORANGE',
    'MANGO',
    'PEACH',
    'PEAR',
    'PINEAPPLE',
    'PLUM',
    'STRAWBERRY',
    'WATERMELON',
    'KIWI',
    'GRAPE',
    'LEMON',
    'LIME',
    'BLUEBERRY',
    'RASPBERRY',
    'BLACKBERRY',
    'CRANBERRY',
    'COCONUT',
    'APRICOT',
    'AVOCADO',
    'FIG',
    'GRAPEFRUIT',
    'GUAVA',
    'PAPAYA',
    'POMEGRANATE',
    'TANGERINE',
    'CANTALOUPE',
    'HONEYDEW',
    'NECTARINE',
    'OLIVE',
    'PASSIONFRUIT',
    'PLANTAIN',
    'STARFRUIT',
    'ACAI',
    'BILBERRY',
    'CLEMENTINE',
    'CRABAPPLE',
    'DRAGONFRUIT'  
];

export function getRandomWord(){
  
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

