import { NpcRoutine } from '../../../../entities/NpcEntity';
import { testMap } from '../../maps/test-map';

export const monkyRoutine: NpcRoutine = {
  "06:00": {
    map: testMap,
    "dialog": [
      {
        "text": "J'ai mal dormi... 😴",
        "isQuestion": false
      },
      {
        "text": "Pourtant on dit que dormir au sol, c'est bon pour le dos 🥱",
        "isQuestion": false
      },
      {
        "text": "Il me faut un café... 😫",
        "isQuestion": false
      }
    ],
    "position": {
      "top": 2,
      "left": 2
    }
  },
  "06:50": {
    "dialog": [
      {
        "text": "J'ai vraiment besoin d'un café... 😵",
        "isQuestion": false
      },
      {
        "text": "J'en ai rêvé cette nuit tu sais ? 🤩",
        "isQuestion": false
      }
    ],
    "position": {
      "top": 8,
      "left": 2
    }
  },
  "07:00": {
    "dialog": [
      {
        "text": "Ah te voila ! 😁",
        "isQuestion": false
      },
      {
        "text": "Tu préfères le café ou le thé ? ",
        "isQuestion": true,
        "answers": [
          { 
            "playerAnswer": "Le thé ! C'est zen...",
            "npcAnswer": "Beurk ! C'est du pisse mémé 🤢"
          },
          { 
            "playerAnswer": "Le café pour se réveiller !",
            "npcAnswer": "Moi aussi... tu me passes un café ? ☕"
          },
          { 
            "playerAnswer": "Aucun des deux...",
            "npcAnswer": "Ah ? Tu es le genre de personne à n'aimer que l'eau... 😒"
          }
        ]
      },
      {
        "text": "J'ai mal au dos... 😖",
        "isQuestion": false
      }
    ],
    "position": {
      "top": 2,
      "left": 4
    }
  },
  "08:30": {
    "dialog": [
      {
        "text": "Je mangerais bien une pomme 🍎",
        "isQuestion": false
      },
      {
        "text": "Ça va très bien avec le café 😋",
        "isQuestion": false
      }
    ],
    "position": {
      "top": 2,
      "left": 4
    }
  },
  "10:30": {
    "dialog": [
      {
        "text": "Je ne peux pas te parler, je suis très occupé... 🤓",
        "isQuestion": false
      }
    ],
    "position": {
      "top": 3,
      "left": 2
    }
  },
  "13:30": {
    "dialog": [
      {
        "text": "Ah ! J'adore ce soleil ! 😎",
        "isQuestion": false
      },
      {
        "text": "Rien de meilleur contre mes rhumatismes 👴",
        "isQuestion": true,
        "answers": [
          { 
            "playerAnswer": "Tu as mis de la crème solaire ?",
            "npcAnswer": "De la quoi ? 😕"
          },
          { 
            "playerAnswer": "Mon papi aussi à des rhumatismes",
            "npcAnswer": "Tu verras quand t'auras mon âge ! 💀"
          }
        ]
      }
    ],
    "position": {
      "top": 8,
      "left": 6
    }
  },
  "17:00": {
    "dialog": [
      {
        "text": "*sifflote sifflote 🎵*",
        "isQuestion": false
      }
    ],
    "position": {
      "top": 6,
      "left": 8
    }
  },
  "18:00": {
    "dialog": [
      {
        "text": "Je viens de pêcher un sacré bestiau ! 🐟",
        "isQuestion": false
      },
      {
        "text": "Je parie que t'as jamais ferré un truc pareil 😎",
        "isQuestion": true,
        "answers": [
          { 
            "playerAnswer": "J'ai déjà péché plus gros ! 😎",
            "npcAnswer": "Quoi ??? 🤯"
          },
          { 
            "playerAnswer": "Non...",
            "npcAnswer": "Je me disais 😎"
          },
          { 
            "playerAnswer": "Je suis vegan",
            "npcAnswer": "Les jeunes de nos jours... ils ne savent plus ce qui est bon 😒"
          }
        ]
      }
    ]
  },
  "20:00": {
    "dialog": [
      {
        "text": "J'ai faim 🤤",
        "isQuestion": false
      },
      {
        "text": "Allez un dernier café avant d'aller dormir 😁",
        "isQuestion": false
      }
    ],
    "position": {
      "top": 3,
      "left": 2
    }
  },
  "23:30": {
    "dialog": [
      {
        "text": ". 😴",
        "isQuestion": false
      },
      {
        "text": ".. 😴",
        "isQuestion": false
      },
      {
        "text": "... 😴",
        "isQuestion": false
      },
      {
        "text": "Café...",
        "isQuestion": false
      }
    ]
  }
}