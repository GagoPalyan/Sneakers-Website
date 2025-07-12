const languageList = [
  {
    name: "English",
    value: "en",
    flag: (
      <svg viewBox="0 0 60 30" width="40" height="25">
        <path d="M0,0 v30 h60 v-30 z" />
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath="url(#t)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    ),
  },
  {
    name: "Deutsch",
    value: "ge",
    flag: (
      <svg width="40" height="25" viewBox="0 0 5 3">
        <rect width="5" height="3" y="0" x="0" fill="#000" />
        <rect width="5" height="2" y="1" x="0" fill="#D00" />
        <rect width="5" height="1" y="2" x="0" fill="#FFCE00" />
      </svg>
    ),
  },
  {
    name: "Español",
    value: "sp",
    flag: (
      <svg width="40" height="25" viewBox="0 0 60 40">
        <rect width="60" height="40" fill="#AA151B" />
        <rect y="10" width="60" height="20" fill="#F1BF00" />
        <rect x="10" y="15" width="10" height="10" fill="#AA151B" />
        <circle cx="15" cy="20" r="3" fill="#F1BF00" />
      </svg>
    ),
  },
  {
    name: "Le Français",
    value: "fr",
    flag: (
      <svg width="40" height="25">
        <rect width="40" height="25" fill="#CE1126" />
        <rect width="26.6" height="25" fill="#FFFFFF" />
        <rect width="13.3" height="25" fill="#002654" />
      </svg>
    ),
  },
  {
    name: "Italiano",
    value: "it",
    flag: (
      <svg width="40" height="25">
        <rect width="40" height="25" fill="#009246" />
        <rect width="26.6" height="25" fill="#fff" />
        <rect width="13.3" height="25" fill="#ce2b37" />
      </svg>
    ),
  },
];

export default languageList;
