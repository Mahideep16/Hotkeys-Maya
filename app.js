// Software Database with icons
const softwareList = [
    { id: 'discord', name: 'Discord Web/Desktop', icon: 'discord' },
    { id: 'instagram', name: 'Instagram Web', icon: 'instagram' },
    { id: 'notion', name: 'Notion', icon: 'notion' },
    { id: 'skype', name: 'Skype Web', icon: 'skype' },
    { id: 'vscode', name: 'Visual Studio Code', icon: 'vscode' },
    { id: 'youtube', name: 'YouTube Web', icon: 'youtube' },
    { id: 'figma', name: 'Figma', icon: 'figma' },
    { id: 'slack', name: 'Slack', icon: 'slack' },
    { id: 'chrome', name: 'Google Chrome', icon: 'chrome' },
    { id: 'photoshop', name: 'Adobe Photoshop', icon: 'photoshop' },
    { id: 'illustrator', name: 'Adobe Illustrator', icon: 'illustrator' },
    { id: 'canva', name: 'Canva', icon: 'canva' },
    { id: 'intellij', name: 'IntelliJ IDEA', icon: 'intellij' },
    { id: 'androidstudio', name: 'Android Studio', icon: 'androidstudio' },
    { id: 'windows', name: 'Windows OS', icon: 'windows' },
    { id: 'macos', name: 'macOS', icon: 'macos' },
    { id: 'firefox', name: 'Mozilla Firefox', icon: 'firefox' },
    { id: 'edge', name: 'Microsoft Edge', icon: 'edge' },
    { id: 'googledocs', name: 'Google Docs', icon: 'googledocs' },
    { id: 'word', name: 'Microsoft Word', icon: 'word' },
    { id: 'excel', name: 'Microsoft Excel', icon: 'excel' },
    { id: 'powerpoint', name: 'Microsoft PowerPoint', icon: 'powerpoint' },
];

// Icon SVGs
const iconSvgs = {
    discord: '<svg viewBox="0 0 24 24" fill="#5865F2"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><defs><linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#FFDC80"/><stop offset="50%" style="stop-color:#F56040"/><stop offset="100%" style="stop-color:#833AB4"/></linearGradient></defs><path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    notion: '<svg viewBox="0 0 100 100" fill="none"><path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M61.35.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143C69.873.143 68.127-.36 61.35.227zM25.505 28.2c-5.577.334-6.846.41-10.028-2.2L6.017 18.19c-.972-.777-.583-1.75 1.553-1.943l51.25-3.693c5.437-.39 8.16 1.36 10.3 3.113l10.303 7.583c.487.387.193 1.167-1.167 1.36l-52.75 3.59zm-3.5 66.153V37.753c0-2.333.777-3.5 3.11-3.693l58.337-3.307c2.14-.193 3.303 1.167 3.303 3.5v56.213c0 2.333-1.36 3.887-4.273 4.08l-55.777 3.113c-2.917.194-4.7-.777-4.7-3.307zm53.473-54.66c.387 1.553 0 3.11-1.553 3.303l-2.527.487v41.623c-2.14 1.167-4.273 1.747-5.827 1.747-2.723 0-3.5-.777-5.44-3.11L42.312 53.06v27.417l5.25 1.167s0 3.11-4.277 3.11l-11.67.677c-.387-.777 0-2.723 1.36-3.11l3.11-.777V43.427l-4.277-.387c-.39-1.553.583-3.887 3.303-4.08l12.443-.777 20.413 31.303V42.843l-4.473-.387c-.39-1.94 1.167-3.5 3.11-3.693l11.9-.777z" fill="#000"/></svg>',
    skype: '<svg viewBox="0 0 24 24" fill="#00AFF0"><path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.556-2.865-.874-4.304-.874-1.621 0-3.188.318-4.66.935l.21-.054-.24.045c.045.015.074.044.12.059-.675-.12-1.363-.181-2.052-.181-1.529 0-3.012.301-4.42.898-1.348.569-2.562 1.395-3.596 2.427-1.033 1.049-1.856 2.247-2.426 3.595-.556 1.318-.874 2.785-.874 4.304 0 1.621.318 3.188.935 4.66l-.054-.21-.045.24a2.7 2.7 0 0 1-.059-.12c-.12.675-.181 1.363-.181 2.052 0 1.529.301 3.012.898 4.42.569 1.348 1.395 2.562 2.427 3.596 1.049 1.033 2.247 1.856 3.595 2.426 1.318.556 2.785.874 4.304.874 1.621 0 3.188-.318 4.66-.935l-.21.054.24-.045c-.045-.015-.074-.044-.12-.059.675.12 1.363.181 2.052.181 1.529 0 3.012-.301 4.42-.898 1.348-.569 2.562-1.395 3.596-2.427 1.033-1.049 1.856-2.247 2.426-3.595.556-1.318.874-2.785.874-4.304 0-1.621-.318-3.188-.935-4.66z"/></svg>',
    vscode: '<svg viewBox="0 0 24 24" fill="#007ACC"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    figma: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1ABCFE"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0ACF83"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#A259FF"/></svg>',
    slack: '<svg viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/></svg>',
    chrome: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="#fff"/><path d="M12 7.5a4.5 4.5 0 0 1 3.897 2.25H24a12 12 0 0 0-12-12v4.5a4.5 4.5 0 0 1 0 5.25z" fill="#DB4437"/><path d="M15.897 9.75A4.5 4.5 0 0 1 12 16.5l-4.103 7.106A12 12 0 0 0 24 12h-8.103z" fill="#FBBC05"/><path d="M12 16.5a4.5 4.5 0 0 1-3.897-6.75L4.103 2.644A12 12 0 0 0 7.897 23.606L12 16.5z" fill="#4285F4"/><path d="M12 16.5a4.5 4.5 0 0 1-3.897-6.75H0a12 12 0 0 0 4.103 10.356L8.103 12.75A4.5 4.5 0 0 1 12 16.5z" fill="#0F9D58"/></svg>',
    photoshop: '<svg viewBox="0 0 24 24" fill="#31A8FF"><path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3z"/><path d="M4.8 5.1c.5-.2 1.3-.3 2.3-.3 1.2 0 2.1.3 2.7.8.6.5.9 1.3.9 2.2 0 1-.3 1.8-.9 2.3-.7.6-1.7.9-2.9.9-.3 0-.5 0-.7-.1v3.6H4.8V5.1zm1.4 4.5c.2.1.4.1.8.1 1.1 0 1.8-.6 1.8-1.6 0-1-.7-1.5-1.7-1.5-.4 0-.7 0-.9.1v2.9zM13 10.8c0-.6.1-1.1.4-1.5.3-.5.7-.9 1.2-1.2.5-.3 1.1-.5 1.7-.5.8 0 1.5.2 2 .5l-.4 1.2c-.5-.3-1-.5-1.6-.5-.9 0-1.6.6-1.6 1.6 0 1 .6 1.6 1.6 1.6.6 0 1.1-.2 1.7-.5l.3 1.2c-.5.3-1.2.5-2.2.5-1.8 0-2.9-1.2-2.9-2.9z"/></svg>',
    illustrator: '<svg viewBox="0 0 24 24" fill="#FF9A00"><path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3z"/><path d="M10.5 14.5H7.7l-.6 2.3H5.7l2.6-9.1h1.8l2.6 9.1h-1.5l-.7-2.3zm-2.6-1.2h2.4l-.6-2.1c-.2-.6-.3-1.2-.5-1.8h0c-.1.6-.3 1.2-.5 1.8l-.8 2.1zm6.6-6.2c0 .5-.3.8-.8.8s-.8-.3-.8-.8.3-.8.8-.8.8.3.8.8zm-1.5 9.7V10h1.4v6.8h-1.4z"/></svg>',
    canva: '<svg viewBox="0 0 24 24" fill="#00C4CC"><path d="M8.3 11.6c0-.4.1-.7.3-1 .2-.3.5-.5.9-.7.4-.2.8-.2 1.3-.2.6 0 1.1.1 1.5.4v1.2c-.4-.3-.9-.5-1.5-.5-.4 0-.7.1-.9.3-.2.2-.3.4-.3.7 0 .2.1.4.2.6.1.2.4.4.7.6.6.4 1 .7 1.2 1 .2.3.3.7.3 1.1 0 .6-.2 1.1-.6 1.4-.4.4-1 .5-1.7.5-.7 0-1.3-.2-1.8-.5v-1.3c.5.4 1.1.7 1.8.7.4 0 .7-.1.9-.3.2-.2.3-.5.3-.8 0-.3-.1-.5-.3-.7-.2-.2-.5-.5-1-.7-.5-.3-.9-.6-1.1-1-.2-.3-.3-.6-.3-1zm7.7 1.7c0-.6-.2-1.1-.5-1.4-.3-.4-.7-.5-1.2-.5-.5 0-.9.2-1.2.5-.3.4-.5.8-.5 1.4 0 .6.2 1.1.5 1.4.3.3.7.5 1.2.5.5 0 .9-.2 1.2-.5.3-.3.5-.8.5-1.4zm1.4 0c0 .9-.3 1.6-.8 2.2-.5.6-1.3.8-2.2.8-.9 0-1.6-.3-2.2-.8-.5-.6-.8-1.3-.8-2.2 0-.9.3-1.6.8-2.2.5-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.5.5.8 1.3.8 2.2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/></svg>',
    intellij: '<svg viewBox="0 0 24 24" fill="#000"><path d="M0 0v24h24V0H0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723V3.111zm11.055 0H17v6.5c0 .612-.055 1.111-.222 1.556-.167.444-.39.777-.723 1.11-.277.279-.666.557-1.11.668a3.933 3.933 0 01-1.445.278c-.778 0-1.444-.167-1.944-.445a4.81 4.81 0 01-1.279-1.056l1.39-1.555c.277.334.555.555.833.722.277.167.611.278.945.278.389 0 .721-.111 1-.389.221-.278.333-.667.333-1.278zM2.222 19.5h9V21h-9v-1.5z"/></svg>',
    androidstudio: '<svg viewBox="0 0 24 24" fill="#3DDC84"><path d="M19.5 9.5c-.3 0-.5.2-.5.5v3.5c0 .3.2.5.5.5s.5-.2.5-.5V10c0-.3-.2-.5-.5-.5zm-15 0c-.3 0-.5.2-.5.5v3.5c0 .3.2.5.5.5s.5-.2.5-.5V10c0-.3-.2-.5-.5-.5zM12 2c-1.1 0-2 .9-2 2v.3C7.2 5.1 5 7.9 5 11.1V16h14v-4.9c0-3.2-2.2-6-5-6.8V4c0-1.1-.9-2-2-2zM9 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.5 6.5c-.3 0-.5.2-.5.5v2.5c0 .8.7 1.5 1.5 1.5S10 21.3 10 20.5V18c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V18c0-.3-.2-.5-.5-.5zm8 0c-.3 0-.5.2-.5.5v2.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V18c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V18c0-.3-.2-.5-.5-.5z"/></svg>',
    windows: '<svg viewBox="0 0 24 24" fill="#00A4EF"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>',
    macos: '<svg viewBox="0 0 24 24" fill="#000"><path d="M14.9 3c.6 0 1.2.3 1.6.7 1.1 1.2 1.8 3 1.3 4.7-1.2-.1-2.6-.7-3.5-1.6-.8-.9-1.4-2.2-1.2-3.5.6-.2 1.2-.3 1.8-.3zM19 9.7c-2 0-3.5 1.4-3.5 3.4 0 2.5 2.2 3.3 2.4 3.4-.1.3-.7 1.8-2 3.2-1.2 1.3-2.4 2.6-4.3 2.6-1.9 0-2.5-1.1-4.6-1.1-2.2 0-2.7 1.1-4.4 1.1-1.7 0-3.1-1.3-4.4-2.9C-3.6 16.6-2 11.9 1.1 9.3c1.5-1.3 3.5-2.1 5.5-2.1 2.1 0 3.4 1.1 5.1 1.1 1.6 0 2.6-1.1 4.9-1.1.9 0 3.4.1 5 2.5-.1.1-3 1.7-3 5z"/></svg>',
    firefox: '<svg viewBox="0 0 24 24"><defs><linearGradient id="ff-grad" x1="70%" y1="10%" x2="30%" y2="90%"><stop offset="0%" style="stop-color:#FF9500"/><stop offset="50%" style="stop-color:#FF6100"/><stop offset="100%" style="stop-color:#FF3C00"/></linearGradient></defs><path fill="url(#ff-grad)" d="M12.03 0C5.42 0 .07 5.42.07 12.03c0 4.97 3.03 9.25 7.32 11.06.81-.43 1.64-.97 2.44-1.65-.96-.6-1.81-1.43-2.5-2.45-1.95-2.88-2.19-6.73-.62-9.9 1.57-3.16 4.82-5.28 8.32-5.28 5.03 0 9.13 4.1 9.13 9.13 0 1.27-.26 2.47-.73 3.57-.73 1.7-2.15 3-3.9 3.67-.36.14-.73.25-1.11.33-.67.14-1.37.21-2.08.21-4.18 0-7.65-2.88-8.62-6.77-.19-.74-.3-1.52-.3-2.32 0-1.27.26-2.47.73-3.57.73-1.7 2.15-3 3.9-3.67.36-.14.73-.25 1.11-.33.67-.14 1.37-.21 2.08-.21 2.88 0 5.42 1.43 6.97 3.61.36.51.67 1.06.91 1.65.43 1.02.67 2.15.67 3.33 0 5.03-4.1 9.13-9.13 9.13-1.64 0-3.18-.43-4.51-1.19 1.27 1.52 3.18 2.5 5.31 2.5 3.85 0 6.97-3.12 6.97-6.97 0-.67-.09-1.3-.26-1.91-.43-1.52-1.43-2.79-2.74-3.61-.79-.49-1.7-.79-2.68-.85-.24-.02-.49-.03-.73-.03-3.33 0-6.05 2.71-6.05 6.05 0 .24.01.49.03.73.12 1.43.67 2.74 1.52 3.76.91 1.09 2.15 1.79 3.54 1.94.3.03.61.05.91.05 2.88 0 5.42-1.43 6.97-3.61.36-.51.67-1.06.91-1.65.43-1.02.67-2.15.67-3.33 0-5.03-4.1-9.13-9.13-9.13z"/></svg>',
    edge: '<svg viewBox="0 0 24 24"><defs><linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0078D4"/><stop offset="100%" style="stop-color:#00BCF2"/></linearGradient></defs><path fill="url(#edge-grad)" d="M21.86 12.5c0-2.32-1.18-4.36-2.97-5.57a7.77 7.77 0 00-.5-.3c-.2-.11-.4-.21-.62-.3-1.64-.7-3.48-.81-5.24-.31.23.05.45.11.67.18 1.64.49 3.09 1.45 4.19 2.77.94 1.13 1.52 2.53 1.62 4.01v.19c0 3.84-3.12 6.96-6.96 6.96-3.84 0-6.96-3.12-6.96-6.96 0-.37.03-.74.08-1.1.33-2.15 1.61-4.02 3.44-5.05-1.62-.1-3.22.29-4.6 1.12C1.88 9.37.72 11.39.72 13.67c0 4.61 3.74 8.35 8.35 8.35 4.61 0 8.35-3.74 8.35-8.35 0-.07 0-.14-.01-.21.04-.04.08-.07.12-.11.38-.36.71-.77 1-1.21.43-.66.76-1.39.96-2.16.13-.49.21-.99.23-1.5 0-.08.01-.16.01-.24 0-3.84-2.61-7.07-6.15-8.03C12.41.8 10.95.63 9.5.77 5.67 1.17 2.47 3.84 1.14 7.45c-.15.4-.27.81-.36 1.23-.06.28-.11.57-.14.86-.02.19-.03.39-.04.58v.22C.59 11.22.58 12.11.69 13c.5 4.15 3.57 7.53 7.65 8.45.66.15 1.35.23 2.05.23 5.03 0 9.13-4.1 9.13-9.13 0-.02 0-.03-.01-.05.08-.01.16-.03.24-.05.45-.11.88-.27 1.29-.48.27-.14.53-.3.78-.47.19-.13.37-.27.55-.42.07-.06.14-.12.2-.18.04-.04.08-.08.11-.12-.02.19-.05.38-.08.57-.04.23-.09.46-.15.68z"/></svg>',
    googledocs: '<svg viewBox="0 0 24 24" fill="#4285F4"><path d="M14.5 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7.5L14.5 2zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-2-6V3.5L18.5 8H14z"/></svg>',
    word: '<svg viewBox="0 0 24 24" fill="#2B579A"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM9.5 16l-1.4-5.6h-.2L6.5 16H5l-2-8h1.7l1.1 6h.2l1.4-6h1.2l1.4 6h.2l1.1-6H13l-2 8h-1.5zM14 9V3.5L19.5 9H14z"/></svg>',
    excel: '<svg viewBox="0 0 24 24" fill="#217346"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 14h-2l-1.5-2.5L8 16H6l2.5-4L6 8h2l1.5 2.5L11 8h2l-2.5 4 2.5 4zM14 9V3.5L19.5 9H14z"/></svg>',
    powerpoint: '<svg viewBox="0 0 24 24" fill="#D24726"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM11 15H9v2H7V9h4c1.7 0 3 1.3 3 3s-1.3 3-3 3zm0-4H9v2h2c.6 0 1-.4 1-1s-.4-1-1-1zM14 9V3.5L19.5 9H14z"/></svg>',
};

// Hotkeys Database
const hotkeysData = {
    vscode: {
        name: "Visual Studio Code",
        categories: {
            "General": [
                { action: "Show Command Palette", keys: ["Ctrl", "Shift", "P"] },
                { action: "Quick Open File", keys: ["Ctrl", "P"] },
                { action: "New Window", keys: ["Ctrl", "Shift", "N"] },
                { action: "Close Window", keys: ["Ctrl", "Shift", "W"] },
                { action: "User Settings", keys: ["Ctrl", ","] },
                { action: "Keyboard Shortcuts", keys: ["Ctrl", "K", "Ctrl", "S"] },
            ],
            "Editing": [
                { action: "Cut Line", keys: ["Ctrl", "X"] },
                { action: "Copy Line", keys: ["Ctrl", "C"] },
                { action: "Delete Line", keys: ["Ctrl", "Shift", "K"] },
                { action: "Move Line Up", keys: ["Alt", "↑"] },
                { action: "Move Line Down", keys: ["Alt", "↓"] },
                { action: "Copy Line Up", keys: ["Shift", "Alt", "↑"] },
                { action: "Copy Line Down", keys: ["Shift", "Alt", "↓"] },
                { action: "Undo", keys: ["Ctrl", "Z"] },
                { action: "Redo", keys: ["Ctrl", "Y"] },
                { action: "Add Cursor Above", keys: ["Ctrl", "Alt", "↑"] },
                { action: "Add Cursor Below", keys: ["Ctrl", "Alt", "↓"] },
                { action: "Select All Occurrences", keys: ["Ctrl", "Shift", "L"] },
                { action: "Toggle Comment", keys: ["Ctrl", "/"] },
                { action: "Block Comment", keys: ["Shift", "Alt", "A"] },
            ],
            "Navigation": [
                { action: "Go to Line", keys: ["Ctrl", "G"] },
                { action: "Go to File", keys: ["Ctrl", "P"] },
                { action: "Go to Symbol", keys: ["Ctrl", "Shift", "O"] },
                { action: "Go to Definition", keys: ["F12"] },
                { action: "Peek Definition", keys: ["Alt", "F12"] },
                { action: "Go Back", keys: ["Alt", "←"] },
                { action: "Go Forward", keys: ["Alt", "→"] },
            ],
            "Search & Replace": [
                { action: "Find", keys: ["Ctrl", "F"] },
                { action: "Replace", keys: ["Ctrl", "H"] },
                { action: "Find in Files", keys: ["Ctrl", "Shift", "F"] },
                { action: "Replace in Files", keys: ["Ctrl", "Shift", "H"] },
            ],
            "View": [
                { action: "Toggle Sidebar", keys: ["Ctrl", "B"] },
                { action: "Toggle Terminal", keys: ["Ctrl", "`"] },
                { action: "Toggle Full Screen", keys: ["F11"] },
                { action: "Zoom In", keys: ["Ctrl", "+"] },
                { action: "Zoom Out", keys: ["Ctrl", "-"] },
                { action: "Split Editor", keys: ["Ctrl", "\\"] },
            ],
        }
    },
    figma: {
        name: "Figma",
        categories: {
            "Tools": [
                { action: "Move Tool", keys: ["V"] },
                { action: "Frame Tool", keys: ["F"] },
                { action: "Rectangle Tool", keys: ["R"] },
                { action: "Ellipse Tool", keys: ["O"] },
                { action: "Line Tool", keys: ["L"] },
                { action: "Pen Tool", keys: ["P"] },
                { action: "Text Tool", keys: ["T"] },
                { action: "Hand Tool", keys: ["H"] },
                { action: "Comment Tool", keys: ["C"] },
            ],
            "View": [
                { action: "Zoom In", keys: ["+"] },
                { action: "Zoom Out", keys: ["-"] },
                { action: "Zoom to 100%", keys: ["Ctrl", "0"] },
                { action: "Zoom to Fit", keys: ["Ctrl", "1"] },
                { action: "Zoom to Selection", keys: ["Ctrl", "2"] },
                { action: "Toggle UI", keys: ["Ctrl", "\\"] },
            ],
            "Edit": [
                { action: "Copy", keys: ["Ctrl", "C"] },
                { action: "Paste", keys: ["Ctrl", "V"] },
                { action: "Duplicate", keys: ["Ctrl", "D"] },
                { action: "Group", keys: ["Ctrl", "G"] },
                { action: "Ungroup", keys: ["Ctrl", "Shift", "G"] },
                { action: "Bring to Front", keys: ["Ctrl", "]"] },
                { action: "Send to Back", keys: ["Ctrl", "["] },
            ],
            "Components": [
                { action: "Create Component", keys: ["Ctrl", "Alt", "K"] },
                { action: "Detach Instance", keys: ["Ctrl", "Alt", "B"] },
                { action: "Team Library", keys: ["Ctrl", "Alt", "O"] },
            ],
        }
    },
    notion: {
        name: "Notion",
        categories: {
            "Essentials": [
                { action: "New Page", keys: ["Ctrl", "N"] },
                { action: "Open as Page", keys: ["Enter"] },
                { action: "Search", keys: ["Ctrl", "P"] },
                { action: "Go Back", keys: ["Ctrl", "["] },
                { action: "Go Forward", keys: ["Ctrl", "]"] },
            ],
            "Text Formatting": [
                { action: "Bold", keys: ["Ctrl", "B"] },
                { action: "Italic", keys: ["Ctrl", "I"] },
                { action: "Underline", keys: ["Ctrl", "U"] },
                { action: "Strikethrough", keys: ["Ctrl", "Shift", "S"] },
                { action: "Code", keys: ["Ctrl", "E"] },
                { action: "Link", keys: ["Ctrl", "K"] },
            ],
            "Blocks": [
                { action: "Text Block", keys: ["/", "text"] },
                { action: "Heading 1", keys: ["/", "h1"] },
                { action: "Heading 2", keys: ["/", "h2"] },
                { action: "Heading 3", keys: ["/", "h3"] },
                { action: "Bullet List", keys: ["/", "bullet"] },
                { action: "Numbered List", keys: ["/", "number"] },
                { action: "Toggle List", keys: ["/", "toggle"] },
                { action: "Code Block", keys: ["/", "code"] },
            ],
        }
    },
    slack: {
        name: "Slack",
        categories: {
            "Navigation": [
                { action: "Quick Switcher", keys: ["Ctrl", "K"] },
                { action: "Search", keys: ["Ctrl", "G"] },
                { action: "Previous Channel", keys: ["Alt", "↑"] },
                { action: "Next Channel", keys: ["Alt", "↓"] },
                { action: "Previous Unread", keys: ["Alt", "Shift", "↑"] },
                { action: "Next Unread", keys: ["Alt", "Shift", "↓"] },
            ],
            "Messages": [
                { action: "Edit Last Message", keys: ["↑"] },
                { action: "Add Emoji Reaction", keys: ["Ctrl", "Shift", "\\"] },
                { action: "Thread Reply", keys: ["T"] },
                { action: "Pin Message", keys: ["P"] },
                { action: "Share Message", keys: ["S"] },
            ],
            "Formatting": [
                { action: "Bold", keys: ["Ctrl", "B"] },
                { action: "Italic", keys: ["Ctrl", "I"] },
                { action: "Strikethrough", keys: ["Ctrl", "Shift", "X"] },
                { action: "Quote", keys: ["Ctrl", "Shift", "9"] },
                { action: "Code", keys: ["Ctrl", "Shift", "C"] },
            ],
        }
    },
    skype: {
        name: "Skype Web",
        categories: {
            "Calls": [
                { action: "Answer Call", keys: ["Ctrl", "Shift", "P"] },
                { action: "End Call", keys: ["Ctrl", "Shift", "H"] },
                { action: "Toggle Mute", keys: ["Ctrl", "M"] },
                { action: "Toggle Video", keys: ["Ctrl", "Shift", "K"] },
            ],
            "Navigation": [
                { action: "Search", keys: ["Ctrl", "F"] },
                { action: "Open Settings", keys: ["Ctrl", ","] },
                { action: "New Chat", keys: ["Ctrl", "N"] },
                { action: "New Group", keys: ["Ctrl", "G"] },
            ],
            "Chat": [
                { action: "Send Message", keys: ["Enter"] },
                { action: "New Line", keys: ["Shift", "Enter"] },
                { action: "Send File", keys: ["Ctrl", "Shift", "F"] },
                { action: "Edit Last Message", keys: ["↑"] },
            ],
        }
    },
    youtube: {
        name: "YouTube Web",
        categories: {
            "Playback": [
                { action: "Play / Pause", keys: ["Space"] },
                { action: "Rewind 5 Seconds", keys: ["←"] },
                { action: "Forward 5 Seconds", keys: ["→"] },
                { action: "Rewind 10 Seconds", keys: ["J"] },
                { action: "Forward 10 Seconds", keys: ["L"] },
                { action: "Previous Video", keys: ["Shift", "P"] },
                { action: "Next Video", keys: ["Shift", "N"] },
            ],
            "Speed": [
                { action: "Decrease Speed", keys: ["Shift", "<"] },
                { action: "Increase Speed", keys: ["Shift", ">"] },
            ],
            "Volume": [
                { action: "Increase Volume", keys: ["↑"] },
                { action: "Decrease Volume", keys: ["↓"] },
                { action: "Mute / Unmute", keys: ["M"] },
            ],
            "View": [
                { action: "Full Screen", keys: ["F"] },
                { action: "Theater Mode", keys: ["T"] },
                { action: "Mini Player", keys: ["I"] },
                { action: "Captions On/Off", keys: ["C"] },
            ],
            "Navigation": [
                { action: "Go to Beginning", keys: ["Home"] },
                { action: "Go to End", keys: ["End"] },
                { action: "Jump to 10%", keys: ["1"] },
                { action: "Jump to 50%", keys: ["5"] },
                { action: "Jump to 90%", keys: ["9"] },
            ],
        }
    },
    discord: {
        name: "Discord",
        categories: {
            "Navigation": [
                { action: "Quick Switcher", keys: ["Ctrl", "K"] },
                { action: "Search", keys: ["Ctrl", "F"] },
                { action: "Previous Server", keys: ["Ctrl", "Alt", "↑"] },
                { action: "Next Server", keys: ["Ctrl", "Alt", "↓"] },
                { action: "Previous Channel", keys: ["Alt", "↑"] },
                { action: "Next Channel", keys: ["Alt", "↓"] },
            ],
            "Messages": [
                { action: "Edit Last Message", keys: ["↑"] },
                { action: "Reply to Message", keys: ["R"] },
                { action: "React to Message", keys: ["+"] },
                { action: "Pin Message", keys: ["P"] },
            ],
            "Voice": [
                { action: "Toggle Mute", keys: ["Ctrl", "Shift", "M"] },
                { action: "Toggle Deafen", keys: ["Ctrl", "Shift", "D"] },
            ],
            "Formatting": [
                { action: "Bold", keys: ["Ctrl", "B"] },
                { action: "Italic", keys: ["Ctrl", "I"] },
                { action: "Underline", keys: ["Ctrl", "U"] },
                { action: "Strikethrough", keys: ["Ctrl", "Shift", "X"] },
            ],
        }
    },
    instagram: {
        name: "Instagram Web",
        categories: {
            "Navigation": [
                { action: "Go to next post", keys: ["j"], macKeys: ["j"] },
                { action: "Go to previous post", keys: ["k"], macKeys: ["k"] },
                { action: "Like or unlike a post", keys: ["l"], macKeys: ["l"] },
                { action: "Open comment box", keys: ["c"], macKeys: ["c"] },
                { action: "Save or unsave a post", keys: ["s"], macKeys: ["s"] },
                { action: "Open profile", keys: ["p"], macKeys: ["p"] },
                { action: "Go to home feed", keys: ["h"], macKeys: ["h"] },
                { action: "Open Direct Messages", keys: ["d"], macKeys: ["d"] },
                { action: "Refresh the page", keys: ["r"], macKeys: ["r"] },
                { action: "Close popups or modals", keys: ["Escape"], macKeys: ["Escape"] },
                { action: "Submit comment or send message", keys: ["Enter"], macKeys: ["Enter"] },
                { action: "Navigate between UI elements", keys: ["Tab"], macKeys: ["Tab"] },
                { action: "Open Instagram keyboard shortcuts help", keys: ["Shift", "?"], macKeys: ["Shift", "?"] },
            ],
        }
    },
    chrome: {
        name: "Chrome",
        categories: {
            "Tabs": [
                { action: "New Tab", keys: ["Ctrl", "T"] },
                { action: "Close Tab", keys: ["Ctrl", "W"] },
                { action: "Reopen Closed Tab", keys: ["Ctrl", "Shift", "T"] },
                { action: "Next Tab", keys: ["Ctrl", "Tab"] },
                { action: "Previous Tab", keys: ["Ctrl", "Shift", "Tab"] },
                { action: "Go to Tab 1-8", keys: ["Ctrl", "1-8"] },
                { action: "Go to Last Tab", keys: ["Ctrl", "9"] },
            ],
            "Navigation": [
                { action: "Back", keys: ["Alt", "←"] },
                { action: "Forward", keys: ["Alt", "→"] },
                { action: "Refresh", keys: ["F5"] },
                { action: "Hard Refresh", keys: ["Ctrl", "Shift", "R"] },
                { action: "Home Page", keys: ["Alt", "Home"] },
            ],
            "Window": [
                { action: "New Window", keys: ["Ctrl", "N"] },
                { action: "Incognito Window", keys: ["Ctrl", "Shift", "N"] },
                { action: "Close Window", keys: ["Alt", "F4"] },
                { action: "Minimize", keys: ["Alt", "Space", "N"] },
                { action: "Full Screen", keys: ["F11"] },
            ],
            "Page Actions": [
                { action: "Find on Page", keys: ["Ctrl", "F"] },
                { action: "Print", keys: ["Ctrl", "P"] },
                { action: "Save Page", keys: ["Ctrl", "S"] },
                { action: "Bookmark Page", keys: ["Ctrl", "D"] },
                { action: "View Source", keys: ["Ctrl", "U"] },
                { action: "Developer Tools", keys: ["F12"] },
            ],
            "Address Bar": [
                { action: "Focus Address Bar", keys: ["Ctrl", "L"] },
                { action: "Search with Default Engine", keys: ["Ctrl", "K"] },
            ],
        }
    },
    photoshop: {
        name: "Adobe Photoshop",
        categories: {
            "Tools": [
                { action: "Move Tool", keys: ["V"], macKeys: ["V"] },
                { action: "Rectangular Marquee Tool", keys: ["M"], macKeys: ["M"] },
                { action: "Lasso Tool", keys: ["L"], macKeys: ["L"] },
                { action: "Magic Wand Tool", keys: ["W"], macKeys: ["W"] },
                { action: "Crop Tool", keys: ["C"], macKeys: ["C"] },
                { action: "Eyedropper Tool", keys: ["I"], macKeys: ["I"] },
                { action: "Healing Brush Tool", keys: ["J"], macKeys: ["J"] },
                { action: "Brush Tool", keys: ["B"], macKeys: ["B"] },
                { action: "Clone Stamp Tool", keys: ["S"], macKeys: ["S"] },
                { action: "Eraser Tool", keys: ["E"], macKeys: ["E"] },
                { action: "Gradient Tool", keys: ["G"], macKeys: ["G"] },
                { action: "Dodge Tool", keys: ["O"], macKeys: ["O"] },
                { action: "Pen Tool", keys: ["P"], macKeys: ["P"] },
                { action: "Text Tool", keys: ["T"], macKeys: ["T"] },
                { action: "Hand Tool", keys: ["H"], macKeys: ["H"] },
                { action: "Zoom Tool", keys: ["Z"], macKeys: ["Z"] },
            ],
            "File": [
                { action: "New", keys: ["Ctrl", "N"], macKeys: ["Cmd", "N"] },
                { action: "Open", keys: ["Ctrl", "O"], macKeys: ["Cmd", "O"] },
                { action: "Save", keys: ["Ctrl", "S"], macKeys: ["Cmd", "S"] },
                { action: "Save As", keys: ["Ctrl", "Shift", "S"], macKeys: ["Cmd", "Shift", "S"] },
                { action: "Close", keys: ["Ctrl", "W"], macKeys: ["Cmd", "W"] },
                { action: "Print", keys: ["Ctrl", "P"], macKeys: ["Cmd", "P"] },
            ],
            "Edit": [
                { action: "Undo", keys: ["Ctrl", "Z"], macKeys: ["Cmd", "Z"] },
                { action: "Redo", keys: ["Ctrl", "Shift", "Z"], macKeys: ["Cmd", "Shift", "Z"] },
                { action: "Cut", keys: ["Ctrl", "X"], macKeys: ["Cmd", "X"] },
                { action: "Copy", keys: ["Ctrl", "C"], macKeys: ["Cmd", "C"] },
                { action: "Paste", keys: ["Ctrl", "V"], macKeys: ["Cmd", "V"] },
                { action: "Free Transform", keys: ["Ctrl", "T"], macKeys: ["Cmd", "T"] },
                { action: "Fill", keys: ["Shift", "F5"], macKeys: ["Shift", "F5"] },
            ],
            "Layers": [
                { action: "New Layer", keys: ["Ctrl", "Shift", "N"], macKeys: ["Cmd", "Shift", "N"] },
                { action: "Duplicate Layer", keys: ["Ctrl", "J"], macKeys: ["Cmd", "J"] },
                { action: "Merge Visible", keys: ["Ctrl", "Shift", "E"], macKeys: ["Cmd", "Shift", "E"] },
                { action: "Group Layers", keys: ["Ctrl", "G"], macKeys: ["Cmd", "G"] },
                { action: "Ungroup Layers", keys: ["Ctrl", "Shift", "G"], macKeys: ["Cmd", "Shift", "G"] },
            ],
            "View": [
                { action: "Zoom In", keys: ["Ctrl", "+"], macKeys: ["Cmd", "+"] },
                { action: "Zoom Out", keys: ["Ctrl", "-"], macKeys: ["Cmd", "-"] },
                { action: "Fit on Screen", keys: ["Ctrl", "0"], macKeys: ["Cmd", "0"] },
                { action: "Actual Pixels", keys: ["Ctrl", "1"], macKeys: ["Cmd", "1"] },
                { action: "Show/Hide Rulers", keys: ["Ctrl", "R"], macKeys: ["Cmd", "R"] },
                { action: "Show/Hide Guides", keys: ["Ctrl", ";"], macKeys: ["Cmd", ";"] },
            ],
        }
    },
    illustrator: {
        name: "Adobe Illustrator",
        categories: {
            "Tools": [
                { action: "Selection Tool", keys: ["V"], macKeys: ["V"] },
                { action: "Direct Selection Tool", keys: ["A"], macKeys: ["A"] },
                { action: "Pen Tool", keys: ["P"], macKeys: ["P"] },
                { action: "Type Tool", keys: ["T"], macKeys: ["T"] },
                { action: "Rectangle Tool", keys: ["M"], macKeys: ["M"] },
                { action: "Ellipse Tool", keys: ["L"], macKeys: ["L"] },
                { action: "Brush Tool", keys: ["B"], macKeys: ["B"] },
                { action: "Pencil Tool", keys: ["N"], macKeys: ["N"] },
                { action: "Rotate Tool", keys: ["R"], macKeys: ["R"] },
                { action: "Scale Tool", keys: ["S"], macKeys: ["S"] },
                { action: "Eyedropper Tool", keys: ["I"], macKeys: ["I"] },
                { action: "Hand Tool", keys: ["H"], macKeys: ["H"] },
                { action: "Zoom Tool", keys: ["Z"], macKeys: ["Z"] },
            ],
            "File": [
                { action: "New", keys: ["Ctrl", "N"], macKeys: ["Cmd", "N"] },
                { action: "Open", keys: ["Ctrl", "O"], macKeys: ["Cmd", "O"] },
                { action: "Save", keys: ["Ctrl", "S"], macKeys: ["Cmd", "S"] },
                { action: "Save As", keys: ["Ctrl", "Shift", "S"], macKeys: ["Cmd", "Shift", "S"] },
                { action: "Close", keys: ["Ctrl", "W"], macKeys: ["Cmd", "W"] },
                { action: "Print", keys: ["Ctrl", "P"], macKeys: ["Cmd", "P"] },
            ],
            "Edit": [
                { action: "Undo", keys: ["Ctrl", "Z"], macKeys: ["Cmd", "Z"] },
                { action: "Redo", keys: ["Ctrl", "Shift", "Z"], macKeys: ["Cmd", "Shift", "Z"] },
                { action: "Cut", keys: ["Ctrl", "X"], macKeys: ["Cmd", "X"] },
                { action: "Copy", keys: ["Ctrl", "C"], macKeys: ["Cmd", "C"] },
                { action: "Paste", keys: ["Ctrl", "V"], macKeys: ["Cmd", "V"] },
                { action: "Paste in Front", keys: ["Ctrl", "F"], macKeys: ["Cmd", "F"] },
                { action: "Paste in Back", keys: ["Ctrl", "B"], macKeys: ["Cmd", "B"] },
            ],
            "Object": [
                { action: "Group", keys: ["Ctrl", "G"], macKeys: ["Cmd", "G"] },
                { action: "Ungroup", keys: ["Ctrl", "Shift", "G"], macKeys: ["Cmd", "Shift", "G"] },
                { action: "Lock", keys: ["Ctrl", "2"], macKeys: ["Cmd", "2"] },
                { action: "Unlock All", keys: ["Ctrl", "Alt", "2"], macKeys: ["Cmd", "Option", "2"] },
                { action: "Bring to Front", keys: ["Ctrl", "Shift", "]"], macKeys: ["Cmd", "Shift", "]"] },
                { action: "Send to Back", keys: ["Ctrl", "Shift", "["], macKeys: ["Cmd", "Shift", "["] },
            ],
        }
    },
    canva: {
        name: "Canva",
        categories: {
            "General": [
                { action: "Undo", keys: ["Ctrl", "Z"], macKeys: ["Cmd", "Z"] },
                { action: "Redo", keys: ["Ctrl", "Y"], macKeys: ["Cmd", "Shift", "Z"] },
                { action: "Copy", keys: ["Ctrl", "C"], macKeys: ["Cmd", "C"] },
                { action: "Paste", keys: ["Ctrl", "V"], macKeys: ["Cmd", "V"] },
                { action: "Duplicate", keys: ["Ctrl", "D"], macKeys: ["Cmd", "D"] },
                { action: "Delete", keys: ["Delete"], macKeys: ["Delete"] },
                { action: "Select All", keys: ["Ctrl", "A"], macKeys: ["Cmd", "A"] },
            ],
            "Text": [
                { action: "Bold", keys: ["Ctrl", "B"], macKeys: ["Cmd", "B"] },
                { action: "Italic", keys: ["Ctrl", "I"], macKeys: ["Cmd", "I"] },
                { action: "Underline", keys: ["Ctrl", "U"], macKeys: ["Cmd", "U"] },
                { action: "Add Text Box", keys: ["T"], macKeys: ["T"] },
            ],
            "Layers": [
                { action: "Bring Forward", keys: ["Ctrl", "]"], macKeys: ["Cmd", "]"] },
                { action: "Send Backward", keys: ["Ctrl", "["], macKeys: ["Cmd", "["] },
                { action: "Bring to Front", keys: ["Ctrl", "Shift", "]"], macKeys: ["Cmd", "Shift", "]"] },
                { action: "Send to Back", keys: ["Ctrl", "Shift", "["], macKeys: ["Cmd", "Shift", "["] },
                { action: "Group", keys: ["Ctrl", "G"], macKeys: ["Cmd", "G"] },
                { action: "Ungroup", keys: ["Ctrl", "Shift", "G"], macKeys: ["Cmd", "Shift", "G"] },
            ],
            "View": [
                { action: "Zoom In", keys: ["Ctrl", "+"], macKeys: ["Cmd", "+"] },
                { action: "Zoom Out", keys: ["Ctrl", "-"], macKeys: ["Cmd", "-"] },
                { action: "Zoom to Fit", keys: ["Ctrl", "0"], macKeys: ["Cmd", "0"] },
                { action: "Show Rulers", keys: ["Ctrl", "R"], macKeys: ["Cmd", "R"] },
                { action: "Show Guides", keys: ["Ctrl", ";"], macKeys: ["Cmd", ";"] },
            ],
        }
    },
    intellij: {
        name: "IntelliJ IDEA",
        categories: {
            "General": [
                { action: "Search Everywhere", keys: ["Shift", "Shift"], macKeys: ["Shift", "Shift"] },
                { action: "Find Action", keys: ["Ctrl", "Shift", "A"], macKeys: ["Cmd", "Shift", "A"] },
                { action: "Show Settings", keys: ["Ctrl", "Alt", "S"], macKeys: ["Cmd", ","] },
                { action: "Switch Project", keys: ["Ctrl", "Alt", "["], macKeys: ["Cmd", "`"] },
                { action: "Recent Files", keys: ["Ctrl", "E"], macKeys: ["Cmd", "E"] },
                { action: "Recent Locations", keys: ["Ctrl", "Shift", "E"], macKeys: ["Cmd", "Shift", "E"] },
            ],
            "Editing": [
                { action: "Basic Code Completion", keys: ["Ctrl", "Space"], macKeys: ["Ctrl", "Space"] },
                { action: "Smart Code Completion", keys: ["Ctrl", "Shift", "Space"], macKeys: ["Ctrl", "Shift", "Space"] },
                { action: "Show Intention Actions", keys: ["Alt", "Enter"], macKeys: ["Option", "Enter"] },
                { action: "Comment/Uncomment Line", keys: ["Ctrl", "/"], macKeys: ["Cmd", "/"] },
                { action: "Duplicate Line", keys: ["Ctrl", "D"], macKeys: ["Cmd", "D"] },
                { action: "Delete Line", keys: ["Ctrl", "Y"], macKeys: ["Cmd", "Backspace"] },
                { action: "Move Line Up", keys: ["Alt", "Shift", "↑"], macKeys: ["Option", "Shift", "↑"] },
                { action: "Move Line Down", keys: ["Alt", "Shift", "↓"], macKeys: ["Option", "Shift", "↓"] },
            ],
            "Navigation": [
                { action: "Go to Class", keys: ["Ctrl", "N"], macKeys: ["Cmd", "O"] },
                { action: "Go to File", keys: ["Ctrl", "Shift", "N"], macKeys: ["Cmd", "Shift", "O"] },
                { action: "Go to Symbol", keys: ["Ctrl", "Alt", "Shift", "N"], macKeys: ["Cmd", "Option", "O"] },
                { action: "Go to Declaration", keys: ["Ctrl", "B"], macKeys: ["Cmd", "B"] },
                { action: "Go to Implementation", keys: ["Ctrl", "Alt", "B"], macKeys: ["Cmd", "Option", "B"] },
                { action: "Go to Line", keys: ["Ctrl", "G"], macKeys: ["Cmd", "L"] },
                { action: "Back", keys: ["Ctrl", "Alt", "←"], macKeys: ["Cmd", "["] },
                { action: "Forward", keys: ["Ctrl", "Alt", "→"], macKeys: ["Cmd", "]"] },
            ],
            "Search/Replace": [
                { action: "Find", keys: ["Ctrl", "F"], macKeys: ["Cmd", "F"] },
                { action: "Find in Files", keys: ["Ctrl", "Shift", "F"], macKeys: ["Cmd", "Shift", "F"] },
                { action: "Replace", keys: ["Ctrl", "R"], macKeys: ["Cmd", "R"] },
                { action: "Replace in Files", keys: ["Ctrl", "Shift", "R"], macKeys: ["Cmd", "Shift", "R"] },
            ],
            "Run/Debug": [
                { action: "Run", keys: ["Shift", "F10"], macKeys: ["Ctrl", "R"] },
                { action: "Debug", keys: ["Shift", "F9"], macKeys: ["Ctrl", "D"] },
                { action: "Stop", keys: ["Ctrl", "F2"], macKeys: ["Cmd", "F2"] },
                { action: "Toggle Breakpoint", keys: ["Ctrl", "F8"], macKeys: ["Cmd", "F8"] },
                { action: "Step Over", keys: ["F8"], macKeys: ["F8"] },
                { action: "Step Into", keys: ["F7"], macKeys: ["F7"] },
            ],
        }
    },
    androidstudio: {
        name: "Android Studio",
        categories: {
            "General": [
                { action: "Search Everywhere", keys: ["Shift", "Shift"], macKeys: ["Shift", "Shift"] },
                { action: "Find Action", keys: ["Ctrl", "Shift", "A"], macKeys: ["Cmd", "Shift", "A"] },
                { action: "Show Settings", keys: ["Ctrl", "Alt", "S"], macKeys: ["Cmd", ","] },
                { action: "Project Structure", keys: ["Ctrl", "Alt", "Shift", "S"], macKeys: ["Cmd", ";"] },
                { action: "Recent Files", keys: ["Ctrl", "E"], macKeys: ["Cmd", "E"] },
            ],
            "Editing": [
                { action: "Code Completion", keys: ["Ctrl", "Space"], macKeys: ["Ctrl", "Space"] },
                { action: "Show Intention Actions", keys: ["Alt", "Enter"], macKeys: ["Option", "Enter"] },
                { action: "Format Code", keys: ["Ctrl", "Alt", "L"], macKeys: ["Cmd", "Option", "L"] },
                { action: "Optimize Imports", keys: ["Ctrl", "Alt", "O"], macKeys: ["Ctrl", "Option", "O"] },
                { action: "Comment Line", keys: ["Ctrl", "/"], macKeys: ["Cmd", "/"] },
                { action: "Duplicate Line", keys: ["Ctrl", "D"], macKeys: ["Cmd", "D"] },
                { action: "Delete Line", keys: ["Ctrl", "Y"], macKeys: ["Cmd", "Backspace"] },
            ],
            "Navigation": [
                { action: "Go to Class", keys: ["Ctrl", "N"], macKeys: ["Cmd", "O"] },
                { action: "Go to File", keys: ["Ctrl", "Shift", "N"], macKeys: ["Cmd", "Shift", "O"] },
                { action: "Go to Declaration", keys: ["Ctrl", "B"], macKeys: ["Cmd", "B"] },
                { action: "Go to Line", keys: ["Ctrl", "G"], macKeys: ["Cmd", "L"] },
                { action: "Back", keys: ["Ctrl", "Alt", "←"], macKeys: ["Cmd", "["] },
                { action: "Forward", keys: ["Ctrl", "Alt", "→"], macKeys: ["Cmd", "]"] },
            ],
            "Build/Run": [
                { action: "Build Project", keys: ["Ctrl", "F9"], macKeys: ["Cmd", "F9"] },
                { action: "Run", keys: ["Shift", "F10"], macKeys: ["Ctrl", "R"] },
                { action: "Debug", keys: ["Shift", "F9"], macKeys: ["Ctrl", "D"] },
                { action: "Stop", keys: ["Ctrl", "F2"], macKeys: ["Cmd", "F2"] },
                { action: "Sync Project with Gradle", keys: ["Ctrl", "Shift", "O"], macKeys: ["Cmd", "Shift", "O"] },
            ],
            "Refactoring": [
                { action: "Rename", keys: ["Shift", "F6"], macKeys: ["Shift", "F6"] },
                { action: "Extract Method", keys: ["Ctrl", "Alt", "M"], macKeys: ["Cmd", "Option", "M"] },
                { action: "Extract Variable", keys: ["Ctrl", "Alt", "V"], macKeys: ["Cmd", "Option", "V"] },
                { action: "Inline", keys: ["Ctrl", "Alt", "N"], macKeys: ["Cmd", "Option", "N"] },
            ],
        }
    },
    windows: {
        name: "Windows OS",
        categories: {
            "System": [
                { action: "Start Menu", keys: ["Win"], macKeys: ["Win"] },
                { action: "Search", keys: ["Win", "S"], macKeys: ["Win", "S"] },
                { action: "File Explorer", keys: ["Win", "E"], macKeys: ["Win", "E"] },
                { action: "Settings", keys: ["Win", "I"], macKeys: ["Win", "I"] },
                { action: "Lock PC", keys: ["Win", "L"], macKeys: ["Win", "L"] },
                { action: "Task Manager", keys: ["Ctrl", "Shift", "Esc"], macKeys: ["Ctrl", "Shift", "Esc"] },
                { action: "Run Dialog", keys: ["Win", "R"], macKeys: ["Win", "R"] },
                { action: "System Properties", keys: ["Win", "Pause"], macKeys: ["Win", "Pause"] },
            ],
            "Window Management": [
                { action: "Minimize All Windows", keys: ["Win", "M"], macKeys: ["Win", "M"] },
                { action: "Snap Window Left", keys: ["Win", "←"], macKeys: ["Win", "←"] },
                { action: "Snap Window Right", keys: ["Win", "→"], macKeys: ["Win", "→"] },
                { action: "Maximize Window", keys: ["Win", "↑"], macKeys: ["Win", "↑"] },
                { action: "Minimize Window", keys: ["Win", "↓"], macKeys: ["Win", "↓"] },
                { action: "Close Window", keys: ["Alt", "F4"], macKeys: ["Alt", "F4"] },
                { action: "Switch Between Windows", keys: ["Alt", "Tab"], macKeys: ["Alt", "Tab"] },
                { action: "Task View", keys: ["Win", "Tab"], macKeys: ["Win", "Tab"] },
            ],
            "Virtual Desktops": [
                { action: "New Virtual Desktop", keys: ["Win", "Ctrl", "D"], macKeys: ["Win", "Ctrl", "D"] },
                { action: "Close Virtual Desktop", keys: ["Win", "Ctrl", "F4"], macKeys: ["Win", "Ctrl", "F4"] },
                { action: "Switch Desktop Left", keys: ["Win", "Ctrl", "←"], macKeys: ["Win", "Ctrl", "←"] },
                { action: "Switch Desktop Right", keys: ["Win", "Ctrl", "→"], macKeys: ["Win", "Ctrl", "→"] },
            ],
            "Accessibility": [
                { action: "Magnifier", keys: ["Win", "+"], macKeys: ["Win", "+"] },
                { action: "Narrator", keys: ["Win", "Ctrl", "Enter"], macKeys: ["Win", "Ctrl", "Enter"] },
                { action: "Screenshot (Snipping Tool)", keys: ["Win", "Shift", "S"], macKeys: ["Win", "Shift", "S"] },
                { action: "Print Screen", keys: ["PrtScn"], macKeys: ["PrtScn"] },
            ],
        }
    },
    macos: {
        name: "macOS",
        categories: {
            "System": [
                { action: "Spotlight Search", keys: ["Cmd", "Space"], macKeys: ["Cmd", "Space"] },
                { action: "Force Quit", keys: ["Cmd", "Option", "Esc"], macKeys: ["Cmd", "Option", "Esc"] },
                { action: "Lock Screen", keys: ["Cmd", "Ctrl", "Q"], macKeys: ["Cmd", "Ctrl", "Q"] },
                { action: "Sleep", keys: ["Cmd", "Option", "Power"], macKeys: ["Cmd", "Option", "Power"] },
                { action: "Shut Down", keys: ["Ctrl", "Option", "Cmd", "Power"], macKeys: ["Ctrl", "Option", "Cmd", "Power"] },
                { action: "Log Out", keys: ["Cmd", "Shift", "Q"], macKeys: ["Cmd", "Shift", "Q"] },
            ],
            "Finder": [
                { action: "New Finder Window", keys: ["Cmd", "N"], macKeys: ["Cmd", "N"] },
                { action: "New Folder", keys: ["Cmd", "Shift", "N"], macKeys: ["Cmd", "Shift", "N"] },
                { action: "Go to Applications", keys: ["Cmd", "Shift", "A"], macKeys: ["Cmd", "Shift", "A"] },
                { action: "Go to Desktop", keys: ["Cmd", "Shift", "D"], macKeys: ["Cmd", "Shift", "D"] },
                { action: "Go to Downloads", keys: ["Cmd", "Option", "L"], macKeys: ["Cmd", "Option", "L"] },
                { action: "Go to Home", keys: ["Cmd", "Shift", "H"], macKeys: ["Cmd", "Shift", "H"] },
                { action: "Move to Trash", keys: ["Cmd", "Delete"], macKeys: ["Cmd", "Delete"] },
                { action: "Empty Trash", keys: ["Cmd", "Shift", "Delete"], macKeys: ["Cmd", "Shift", "Delete"] },
            ],
            "Window Management": [
                { action: "Close Window", keys: ["Cmd", "W"], macKeys: ["Cmd", "W"] },
                { action: "Minimize Window", keys: ["Cmd", "M"], macKeys: ["Cmd", "M"] },
                { action: "Hide Application", keys: ["Cmd", "H"], macKeys: ["Cmd", "H"] },
                { action: "Switch Applications", keys: ["Cmd", "Tab"], macKeys: ["Cmd", "Tab"] },
                { action: "Switch Windows", keys: ["Cmd", "`"], macKeys: ["Cmd", "`"] },
                { action: "Mission Control", keys: ["Ctrl", "↑"], macKeys: ["Ctrl", "↑"] },
                { action: "Application Windows", keys: ["Ctrl", "↓"], macKeys: ["Ctrl", "↓"] },
            ],
            "Screenshots": [
                { action: "Screenshot Full Screen", keys: ["Cmd", "Shift", "3"], macKeys: ["Cmd", "Shift", "3"] },
                { action: "Screenshot Selection", keys: ["Cmd", "Shift", "4"], macKeys: ["Cmd", "Shift", "4"] },
                { action: "Screenshot Window", keys: ["Cmd", "Shift", "4", "Space"], macKeys: ["Cmd", "Shift", "4", "Space"] },
                { action: "Screenshot Tool", keys: ["Cmd", "Shift", "5"], macKeys: ["Cmd", "Shift", "5"] },
            ],
        }
    },
    firefox: {
        name: "Mozilla Firefox",
        categories: {
            "Tabs": [
                { action: "New Tab", keys: ["Ctrl", "T"], macKeys: ["Cmd", "T"] },
                { action: "Close Tab", keys: ["Ctrl", "W"], macKeys: ["Cmd", "W"] },
                { action: "Reopen Closed Tab", keys: ["Ctrl", "Shift", "T"], macKeys: ["Cmd", "Shift", "T"] },
                { action: "Next Tab", keys: ["Ctrl", "Tab"], macKeys: ["Ctrl", "Tab"] },
                { action: "Previous Tab", keys: ["Ctrl", "Shift", "Tab"], macKeys: ["Ctrl", "Shift", "Tab"] },
                { action: "Go to Tab 1-8", keys: ["Ctrl", "1-8"], macKeys: ["Cmd", "1-8"] },
                { action: "Go to Last Tab", keys: ["Ctrl", "9"], macKeys: ["Cmd", "9"] },
            ],
            "Navigation": [
                { action: "Back", keys: ["Alt", "←"], macKeys: ["Cmd", "["] },
                { action: "Forward", keys: ["Alt", "→"], macKeys: ["Cmd", "]"] },
                { action: "Refresh", keys: ["F5"], macKeys: ["Cmd", "R"] },
                { action: "Hard Refresh", keys: ["Ctrl", "F5"], macKeys: ["Cmd", "Shift", "R"] },
                { action: "Home Page", keys: ["Alt", "Home"], macKeys: ["Cmd", "Shift", "H"] },
            ],
            "Window": [
                { action: "New Window", keys: ["Ctrl", "N"], macKeys: ["Cmd", "N"] },
                { action: "Private Window", keys: ["Ctrl", "Shift", "P"], macKeys: ["Cmd", "Shift", "P"] },
                { action: "Close Window", keys: ["Alt", "F4"], macKeys: ["Cmd", "Shift", "W"] },
                { action: "Full Screen", keys: ["F11"], macKeys: ["Cmd", "Ctrl", "F"] },
            ],
            "Page Actions": [
                { action: "Find on Page", keys: ["Ctrl", "F"], macKeys: ["Cmd", "F"] },
                { action: "Print", keys: ["Ctrl", "P"], macKeys: ["Cmd", "P"] },
                { action: "Save Page", keys: ["Ctrl", "S"], macKeys: ["Cmd", "S"] },
                { action: "Bookmark Page", keys: ["Ctrl", "D"], macKeys: ["Cmd", "D"] },
                { action: "View Source", keys: ["Ctrl", "U"], macKeys: ["Cmd", "U"] },
                { action: "Developer Tools", keys: ["F12"], macKeys: ["Cmd", "Option", "I"] },
            ],
        }
    },
    edge: {
        name: "Microsoft Edge",
        categories: {
            "Tabs": [
                { action: "New Tab", keys: ["Ctrl", "T"], macKeys: ["Cmd", "T"] },
                { action: "Close Tab", keys: ["Ctrl", "W"], macKeys: ["Cmd", "W"] },
                { action: "Reopen Closed Tab", keys: ["Ctrl", "Shift", "T"], macKeys: ["Cmd", "Shift", "T"] },
                { action: "Next Tab", keys: ["Ctrl", "Tab"], macKeys: ["Ctrl", "Tab"] },
                { action: "Previous Tab", keys: ["Ctrl", "Shift", "Tab"], macKeys: ["Ctrl", "Shift", "Tab"] },
                { action: "Go to Tab 1-8", keys: ["Ctrl", "1-8"], macKeys: ["Cmd", "1-8"] },
                { action: "Go to Last Tab", keys: ["Ctrl", "9"], macKeys: ["Cmd", "9"] },
            ],
            "Navigation": [
                { action: "Back", keys: ["Alt", "←"], macKeys: ["Cmd", "["] },
                { action: "Forward", keys: ["Alt", "→"], macKeys: ["Cmd", "]"] },
                { action: "Refresh", keys: ["F5"], macKeys: ["Cmd", "R"] },
                { action: "Hard Refresh", keys: ["Ctrl", "Shift", "R"], macKeys: ["Cmd", "Shift", "R"] },
                { action: "Home Page", keys: ["Alt", "Home"], macKeys: ["Cmd", "Shift", "H"] },
            ],
            "Window": [
                { action: "New Window", keys: ["Ctrl", "N"], macKeys: ["Cmd", "N"] },
                { action: "InPrivate Window", keys: ["Ctrl", "Shift", "N"], macKeys: ["Cmd", "Shift", "N"] },
                { action: "Close Window", keys: ["Alt", "F4"], macKeys: ["Cmd", "Shift", "W"] },
                { action: "Full Screen", keys: ["F11"], macKeys: ["Cmd", "Ctrl", "F"] },
            ],
            "Page Actions": [
                { action: "Find on Page", keys: ["Ctrl", "F"], macKeys: ["Cmd", "F"] },
                { action: "Print", keys: ["Ctrl", "P"], macKeys: ["Cmd", "P"] },
                { action: "Save Page", keys: ["Ctrl", "S"], macKeys: ["Cmd", "S"] },
                { action: "Bookmark Page", keys: ["Ctrl", "D"], macKeys: ["Cmd", "D"] },
                { action: "View Source", keys: ["Ctrl", "U"], macKeys: ["Cmd", "Option", "U"] },
                { action: "Developer Tools", keys: ["F12"], macKeys: ["Cmd", "Option", "I"] },
            ],
            "Reading": [
                { action: "Read Aloud", keys: ["Ctrl", "Shift", "U"], macKeys: ["Cmd", "Shift", "U"] },
                { action: "Collections", keys: ["Ctrl", "Shift", "Y"], macKeys: ["Cmd", "Shift", "Y"] },
            ],
        }
    },
    googledocs: {
        name: "Google Docs",
        categories: {
            "General": [
                { action: "Copy", keys: ["Ctrl", "C"], macKeys: ["Cmd", "C"] },
                { action: "Cut", keys: ["Ctrl", "X"], macKeys: ["Cmd", "X"] },
                { action: "Paste", keys: ["Ctrl", "V"], macKeys: ["Cmd", "V"] },
                { action: "Undo", keys: ["Ctrl", "Z"], macKeys: ["Cmd", "Z"] },
                { action: "Redo", keys: ["Ctrl", "Y"], macKeys: ["Cmd", "Y"] },
                { action: "Find", keys: ["Ctrl", "F"], macKeys: ["Cmd", "F"] },
                { action: "Find and Replace", keys: ["Ctrl", "H"], macKeys: ["Cmd", "Shift", "H"] },
                { action: "Print", keys: ["Ctrl", "P"], macKeys: ["Cmd", "P"] },
            ],
            "Text Formatting": [
                { action: "Bold", keys: ["Ctrl", "B"], macKeys: ["Cmd", "B"] },
                { action: "Italic", keys: ["Ctrl", "I"], macKeys: ["Cmd", "I"] },
                { action: "Underline", keys: ["Ctrl", "U"], macKeys: ["Cmd", "U"] },
                { action: "Strikethrough", keys: ["Alt", "Shift", "5"], macKeys: ["Cmd", "Shift", "X"] },
                { action: "Increase Font Size", keys: ["Ctrl", "Shift", ">"], macKeys: ["Cmd", "Shift", ">"] },
                { action: "Decrease Font Size", keys: ["Ctrl", "Shift", "<"], macKeys: ["Cmd", "Shift", "<"] },
            ],
            "Paragraph Formatting": [
                { action: "Align Left", keys: ["Ctrl", "Shift", "L"], macKeys: ["Cmd", "Shift", "L"] },
                { action: "Align Center", keys: ["Ctrl", "Shift", "E"], macKeys: ["Cmd", "Shift", "E"] },
                { action: "Align Right", keys: ["Ctrl", "Shift", "R"], macKeys: ["Cmd", "Shift", "R"] },
                { action: "Justify", keys: ["Ctrl", "Shift", "J"], macKeys: ["Cmd", "Shift", "J"] },
                { action: "Numbered List", keys: ["Ctrl", "Shift", "7"], macKeys: ["Cmd", "Shift", "7"] },
                { action: "Bulleted List", keys: ["Ctrl", "Shift", "8"], macKeys: ["Cmd", "Shift", "8"] },
            ],
            "Comments & Suggestions": [
                { action: "Insert Comment", keys: ["Ctrl", "Alt", "M"], macKeys: ["Cmd", "Option", "M"] },
                { action: "Open Comment History", keys: ["Ctrl", "Alt", "Shift", "A"], macKeys: ["Cmd", "Option", "Shift", "A"] },
            ],
            "Navigation": [
                { action: "Show Document Outline", keys: ["Ctrl", "Alt", "A"], macKeys: ["Cmd", "Option", "A"] },
                { action: "Move to Next Heading", keys: ["Ctrl", "Alt", "N"], macKeys: ["Cmd", "Option", "N"] },
                { action: "Move to Previous Heading", keys: ["Ctrl", "Alt", "P"], macKeys: ["Cmd", "Option", "P"] },
            ],
        }
    },
    word: {
        name: "Microsoft Word",
        categories: {
            "General": [
                { action: "New Document", keys: ["Ctrl", "N"], macKeys: ["Cmd", "N"] },
                { action: "Open", keys: ["Ctrl", "O"], macKeys: ["Cmd", "O"] },
                { action: "Save", keys: ["Ctrl", "S"], macKeys: ["Cmd", "S"] },
                { action: "Save As", keys: ["F12"], macKeys: ["Cmd", "Shift", "S"] },
                { action: "Print", keys: ["Ctrl", "P"], macKeys: ["Cmd", "P"] },
                { action: "Close", keys: ["Ctrl", "W"], macKeys: ["Cmd", "W"] },
                { action: "Undo", keys: ["Ctrl", "Z"], macKeys: ["Cmd", "Z"] },
                { action: "Redo", keys: ["Ctrl", "Y"], macKeys: ["Cmd", "Y"] },
            ],
            "Text Formatting": [
                { action: "Bold", keys: ["Ctrl", "B"], macKeys: ["Cmd", "B"] },
                { action: "Italic", keys: ["Ctrl", "I"], macKeys: ["Cmd", "I"] },
                { action: "Underline", keys: ["Ctrl", "U"], macKeys: ["Cmd", "U"] },
                { action: "Strikethrough", keys: ["Ctrl", "Shift", "X"], macKeys: ["Cmd", "Shift", "X"] },
                { action: "Subscript", keys: ["Ctrl", "="], macKeys: ["Cmd", "="] },
                { action: "Superscript", keys: ["Ctrl", "Shift", "+"], macKeys: ["Cmd", "Shift", "+"] },
                { action: "Change Case", keys: ["Shift", "F3"], macKeys: ["Shift", "F3"] },
            ],
            "Paragraph Formatting": [
                { action: "Align Left", keys: ["Ctrl", "L"], macKeys: ["Cmd", "L"] },
                { action: "Align Center", keys: ["Ctrl", "E"], macKeys: ["Cmd", "E"] },
                { action: "Align Right", keys: ["Ctrl", "R"], macKeys: ["Cmd", "R"] },
                { action: "Justify", keys: ["Ctrl", "J"], macKeys: ["Cmd", "J"] },
                { action: "Increase Indent", keys: ["Ctrl", "M"], macKeys: ["Cmd", "]"] },
                { action: "Decrease Indent", keys: ["Ctrl", "Shift", "M"], macKeys: ["Cmd", "["] },
            ],
            "Find & Replace": [
                { action: "Find", keys: ["Ctrl", "F"], macKeys: ["Cmd", "F"] },
                { action: "Replace", keys: ["Ctrl", "H"], macKeys: ["Cmd", "Shift", "H"] },
                { action: "Go To", keys: ["Ctrl", "G"], macKeys: ["Cmd", "Option", "G"] },
            ],
            "Navigation": [
                { action: "Go to Beginning of Document", keys: ["Ctrl", "Home"], macKeys: ["Cmd", "Home"] },
                { action: "Go to End of Document", keys: ["Ctrl", "End"], macKeys: ["Cmd", "End"] },
                { action: "Page Up", keys: ["Page Up"], macKeys: ["Page Up"] },
                { action: "Page Down", keys: ["Page Down"], macKeys: ["Page Down"] },
            ],
        }
    },
    excel: {
        name: "Microsoft Excel",
        categories: {
            "General": [
                { action: "New Workbook", keys: ["Ctrl", "N"], macKeys: ["Cmd", "N"] },
                { action: "Open", keys: ["Ctrl", "O"], macKeys: ["Cmd", "O"] },
                { action: "Save", keys: ["Ctrl", "S"], macKeys: ["Cmd", "S"] },
                { action: "Save As", keys: ["F12"], macKeys: ["Cmd", "Shift", "S"] },
                { action: "Print", keys: ["Ctrl", "P"], macKeys: ["Cmd", "P"] },
                { action: "Close", keys: ["Ctrl", "W"], macKeys: ["Cmd", "W"] },
                { action: "Undo", keys: ["Ctrl", "Z"], macKeys: ["Cmd", "Z"] },
                { action: "Redo", keys: ["Ctrl", "Y"], macKeys: ["Cmd", "Y"] },
            ],
            "Cell Editing": [
                { action: "Edit Cell", keys: ["F2"], macKeys: ["F2"] },
                { action: "Copy", keys: ["Ctrl", "C"], macKeys: ["Cmd", "C"] },
                { action: "Cut", keys: ["Ctrl", "X"], macKeys: ["Cmd", "X"] },
                { action: "Paste", keys: ["Ctrl", "V"], macKeys: ["Cmd", "V"] },
                { action: "Fill Down", keys: ["Ctrl", "D"], macKeys: ["Cmd", "D"] },
                { action: "Fill Right", keys: ["Ctrl", "R"], macKeys: ["Cmd", "R"] },
                { action: "Insert Current Date", keys: ["Ctrl", ";"], macKeys: ["Cmd", ";"] },
                { action: "Insert Current Time", keys: ["Ctrl", "Shift", ";"], macKeys: ["Cmd", "Shift", ";"] },
            ],
            "Formatting": [
                { action: "Bold", keys: ["Ctrl", "B"], macKeys: ["Cmd", "B"] },
                { action: "Italic", keys: ["Ctrl", "I"], macKeys: ["Cmd", "I"] },
                { action: "Underline", keys: ["Ctrl", "U"], macKeys: ["Cmd", "U"] },
                { action: "Format Cells", keys: ["Ctrl", "1"], macKeys: ["Cmd", "1"] },
                { action: "Apply Currency Format", keys: ["Ctrl", "Shift", "$"], macKeys: ["Cmd", "Shift", "$"] },
                { action: "Apply Percentage Format", keys: ["Ctrl", "Shift", "%"], macKeys: ["Cmd", "Shift", "%"] },
            ],
            "Navigation": [
                { action: "Go to Cell", keys: ["Ctrl", "G"], macKeys: ["Cmd", "G"] },
                { action: "Move to Edge of Data", keys: ["Ctrl", "Arrow"], macKeys: ["Cmd", "Arrow"] },
                { action: "Go to Beginning of Row", keys: ["Home"], macKeys: ["Home"] },
                { action: "Go to Cell A1", keys: ["Ctrl", "Home"], macKeys: ["Cmd", "Home"] },
                { action: "Move Between Worksheets", keys: ["Ctrl", "Page Up/Down"], macKeys: ["Cmd", "Page Up/Down"] },
            ],
            "Functions & Formulas": [
                { action: "Insert Function", keys: ["Shift", "F3"], macKeys: ["Shift", "F3"] },
                { action: "AutoSum", keys: ["Alt", "="], macKeys: ["Cmd", "Shift", "T"] },
                { action: "Edit Formula", keys: ["F2"], macKeys: ["F2"] },
                { action: "Calculate All Worksheets", keys: ["F9"], macKeys: ["F9"] },
            ],
        }
    },
    powerpoint: {
        name: "Microsoft PowerPoint",
        categories: {
            "General": [
                { action: "New Presentation", keys: ["Ctrl", "N"], macKeys: ["Cmd", "N"] },
                { action: "Open", keys: ["Ctrl", "O"], macKeys: ["Cmd", "O"] },
                { action: "Save", keys: ["Ctrl", "S"], macKeys: ["Cmd", "S"] },
                { action: "Save As", keys: ["F12"], macKeys: ["Cmd", "Shift", "S"] },
                { action: "Print", keys: ["Ctrl", "P"], macKeys: ["Cmd", "P"] },
                { action: "Close", keys: ["Ctrl", "W"], macKeys: ["Cmd", "W"] },
                { action: "Undo", keys: ["Ctrl", "Z"], macKeys: ["Cmd", "Z"] },
                { action: "Redo", keys: ["Ctrl", "Y"], macKeys: ["Cmd", "Y"] },
            ],
            "Slides": [
                { action: "New Slide", keys: ["Ctrl", "M"], macKeys: ["Cmd", "Shift", "N"] },
                { action: "Duplicate Slide", keys: ["Ctrl", "D"], macKeys: ["Cmd", "D"] },
                { action: "Delete Slide", keys: ["Delete"], macKeys: ["Delete"] },
                { action: "Next Slide", keys: ["Page Down"], macKeys: ["Page Down"] },
                { action: "Previous Slide", keys: ["Page Up"], macKeys: ["Page Up"] },
            ],
            "Text Formatting": [
                { action: "Bold", keys: ["Ctrl", "B"], macKeys: ["Cmd", "B"] },
                { action: "Italic", keys: ["Ctrl", "I"], macKeys: ["Cmd", "I"] },
                { action: "Underline", keys: ["Ctrl", "U"], macKeys: ["Cmd", "U"] },
                { action: "Align Left", keys: ["Ctrl", "L"], macKeys: ["Cmd", "L"] },
                { action: "Align Center", keys: ["Ctrl", "E"], macKeys: ["Cmd", "E"] },
                { action: "Align Right", keys: ["Ctrl", "R"], macKeys: ["Cmd", "R"] },
            ],
            "Objects": [
                { action: "Insert Picture", keys: ["Ctrl", "Shift", "P"], macKeys: ["Cmd", "Shift", "P"] },
                { action: "Insert Text Box", keys: ["Ctrl", "Shift", "T"], macKeys: ["Cmd", "Shift", "T"] },
                { action: "Group Objects", keys: ["Ctrl", "G"], macKeys: ["Cmd", "G"] },
                { action: "Ungroup Objects", keys: ["Ctrl", "Shift", "G"], macKeys: ["Cmd", "Shift", "G"] },
                { action: "Bring to Front", keys: ["Ctrl", "Shift", "]"], macKeys: ["Cmd", "Shift", "]"] },
                { action: "Send to Back", keys: ["Ctrl", "Shift", "["], macKeys: ["Cmd", "Shift", "["] },
            ],
            "Presentation": [
                { action: "Start Presentation from Beginning", keys: ["F5"], macKeys: ["Cmd", "Shift", "Return"] },
                { action: "Start from Current Slide", keys: ["Shift", "F5"], macKeys: ["Cmd", "Return"] },
                { action: "End Presentation", keys: ["Esc"], macKeys: ["Esc"] },
                { action: "Black/Unblack Screen", keys: ["B"], macKeys: ["B"] },
                { action: "White/Unwhite Screen", keys: ["W"], macKeys: ["W"] },
            ],
        }
    },
};

// State
let currentApp = 'instagram';
let killCount = parseInt(localStorage.getItem('killCount')) || 143;

// DOM Elements
const hotkeysGrid = document.getElementById('hotkeysGrid');
const currentAppTitle = document.getElementById('currentAppTitle');
const appsContainer = document.getElementById('appsContainer');
const mouseTarget = document.getElementById('mouseTarget');
const mouseIcon = document.getElementById('mouseIcon');
const killCountEl = document.getElementById('killCount');
const searchBox = document.getElementById('searchBox');
const searchModal = document.getElementById('searchModal');
const modalSearchInput = document.getElementById('modalSearchInput');
const searchResults = document.getElementById('searchResults');
const closeModal = document.getElementById('closeModal');

// Initialize
function init() {
    killCountEl.textContent = killCount;
    renderHotkeys(currentApp);
    setupEventListeners();
}

// Current OS
let currentOS = 'windows';

// Render Hotkeys
function renderHotkeys(appId) {
    const app = hotkeysData[appId];
    if (!app) return;

    currentApp = appId;
    currentAppTitle.textContent = app.name;

    // Update app title icon
    const appTitleIcon = document.getElementById('appTitleIcon');
    if (appTitleIcon && iconSvgs[appId]) {
        appTitleIcon.innerHTML = iconSvgs[appId];
    }

    // Update active app icon in carousel
    document.querySelectorAll('.app-icon').forEach(icon => {
        icon.classList.toggle('active', icon.dataset.app === appId);
    });

    // Generate hotkeys HTML
    let html = '';
    for (const [category, shortcuts] of Object.entries(app.categories)) {
        shortcuts.forEach(shortcut => {
            html += createHotkeyRow(shortcut);
        });
    }

    hotkeysGrid.innerHTML = html;
}

// Create Hotkey Row HTML
function createHotkeyRow(shortcut) {
    const keys = currentOS === 'mac' && shortcut.macKeys ? shortcut.macKeys : shortcut.keys;
    const keysHtml = keys.map(key => {
        // Convert key names for display
        let displayKey = key;
        if (currentOS === 'mac') {
            displayKey = key.replace('Ctrl', '⌘').replace('Alt', '⌥').replace('Shift', '⇧');
        }
        return `<span class="key">${displayKey}</span>`;
    }).join('<span class="key-separator">+</span>');
    
    return `
        <div class="hotkey-row">
            <div class="hotkey-keys">${keysHtml}</div>
            <span class="hotkey-desc">${shortcut.action}</span>
        </div>
    `;
}

// Render Software List
function renderSoftwareList(query = '') {
    const softwareListEl = document.getElementById('softwareList');
    const matchesLabel = document.querySelector('.matches-label');
    
    let filtered = softwareList;
    
    if (query.trim()) {
        const lowerQuery = query.toLowerCase();
        filtered = softwareList.filter(sw => 
            sw.name.toLowerCase().includes(lowerQuery)
        );
    }

    if (filtered.length === 0) {
        matchesLabel.style.display = 'none';
        softwareListEl.innerHTML = '<div class="no-results">No software found</div>';
        return;
    }

    matchesLabel.style.display = 'block';
    const html = filtered.map((sw, index) => `
        <div class="software-item${index === 0 ? ' selected' : ''}" data-app="${sw.id}">
            <div class="software-icon">${iconSvgs[sw.icon] || ''}</div>
            <span class="software-name">${sw.name}</span>
        </div>
    `).join('');

    softwareListEl.innerHTML = html;
}

// Search Hotkeys (legacy - kept for potential future use)
function searchHotkeys(query) {
    renderSoftwareList(query);
}

// Kill Mouse Animation
function killMouse(element) {
    killCount++;
    killCountEl.textContent = killCount;
    localStorage.setItem('killCount', killCount);

    element.classList.add('pop');
    setTimeout(() => element.classList.remove('pop'), 300);

    // Fun animation - briefly show dead mouse
    const originalContent = element.textContent;
    element.textContent = '💀';
    setTimeout(() => {
        element.textContent = originalContent;
    }, 200);
}

// Event Listeners
function setupEventListeners() {
    // App icon clicks
    appsContainer.addEventListener('click', (e) => {
        const appIcon = e.target.closest('.app-icon');
        if (appIcon) {
            renderHotkeys(appIcon.dataset.app);
        }
    });

    // OS Dropdown
    const osDropdownBtn = document.getElementById('osDropdownBtn');
    const osDropdownMenu = document.getElementById('osDropdownMenu');
    const selectedOS = document.getElementById('selectedOS');

    if (osDropdownBtn) {
        osDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            osDropdownMenu.classList.toggle('open');
        });

        document.addEventListener('click', () => {
            osDropdownMenu.classList.remove('open');
        });

        osDropdownMenu.addEventListener('click', (e) => {
            const option = e.target.closest('.os-option');
            if (option) {
                currentOS = option.dataset.os;
                selectedOS.textContent = option.textContent;
                osDropdownMenu.classList.remove('open');
                renderHotkeys(currentApp);
            }
        });
    }

    // Mouse kill
    mouseTarget.addEventListener('click', () => killMouse(mouseTarget));
    mouseIcon.addEventListener('click', () => killMouse(mouseIcon));

    // Search box click
    searchBox.addEventListener('click', () => {
        searchModal.classList.add('active');
        modalSearchInput.value = '';
        modalSearchInput.focus();
        renderSoftwareList();
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    // Search input
    modalSearchInput.addEventListener('input', (e) => {
        searchHotkeys(e.target.value);
    });

    // Software item click
    searchResults.addEventListener('click', (e) => {
        const softwareItem = e.target.closest('.software-item');
        if (softwareItem) {
            renderHotkeys(softwareItem.dataset.app);
            searchModal.classList.remove('active');
            modalSearchInput.value = '';
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Cmd/Ctrl + K to open search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchModal.classList.add('active');
            modalSearchInput.value = '';
            modalSearchInput.focus();
            renderSoftwareList();
        }

        // Escape to close modal
        if (e.key === 'Escape') {
            searchModal.classList.remove('active');
        }

        // Arrow key navigation in software list
        if (searchModal.classList.contains('active')) {
            const items = document.querySelectorAll('.software-item');
            const selected = document.querySelector('.software-item.selected');
            let index = Array.from(items).indexOf(selected);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (index < items.length - 1) {
                    selected?.classList.remove('selected');
                    items[index + 1].classList.add('selected');
                    items[index + 1].scrollIntoView({ block: 'nearest' });
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (index > 0) {
                    selected?.classList.remove('selected');
                    items[index - 1].classList.add('selected');
                    items[index - 1].scrollIntoView({ block: 'nearest' });
                }
            } else if (e.key === 'Enter' && selected) {
                e.preventDefault();
                renderHotkeys(selected.dataset.app);
                searchModal.classList.remove('active');
                modalSearchInput.value = '';
            }
        }
    });

    // Carousel navigation
    document.getElementById('nextApp').addEventListener('click', () => {
        appsContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });

    document.getElementById('prevApp').addEventListener('click', () => {
        appsContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    // Auto-scroll animation for app icons
    let scrollPosition = 0;
    let scrollDirection = 1;
    const scrollSpeed = 0.5; // pixels per frame
    const maxScroll = appsContainer.scrollWidth - appsContainer.clientWidth;

    function autoScroll() {
        if (!appsContainer.matches(':hover')) {
            scrollPosition += scrollSpeed * scrollDirection;
            
            // Reverse direction at boundaries
            if (scrollPosition >= maxScroll) {
                scrollDirection = -1;
                scrollPosition = maxScroll;
            } else if (scrollPosition <= 0) {
                scrollDirection = 1;
                scrollPosition = 0;
            }
            
            appsContainer.scrollLeft = scrollPosition;
        }
        requestAnimationFrame(autoScroll);
    }

    // Start auto-scroll animation
    requestAnimationFrame(autoScroll);

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // PDF Download
    document.getElementById('downloadPdfBtn').addEventListener('click', generatePDF);
}

// Generate PDF function
function generatePDF() {
    const appData = hotkeysData[currentApp];
    if (!appData) return;

    // Create PDF content
    let pdfContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${appData.name} - Keyboard Shortcuts</title>
    <style>
        body {
            font-family: 'Inter', Arial, sans-serif;
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            line-height: 1.6;
        }
        h1 {
            color: #1a1a1a;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
            margin-bottom: 30px;
        }
        h2 {
            color: #667eea;
            margin-top: 30px;
            margin-bottom: 15px;
            font-size: 1.3em;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        th {
            background: #667eea;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 600;
        }
        td {
            padding: 10px 12px;
            border-bottom: 1px solid #e5e7eb;
        }
        .keys {
            font-weight: 600;
            color: #667eea;
            font-family: 'Courier New', monospace;
        }
        .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 0.9em;
        }
        @media print {
            body { margin: 20px; }
        }
    </style>
</head>
<body>
    <h1>${appData.name} - Keyboard Shortcuts</h1>
    <p><strong>Operating System:</strong> ${currentOS === 'windows' ? 'Windows' : 'macOS'}</p>
`;

    // Add each category
    Object.keys(appData.categories).forEach(category => {
        pdfContent += `
    <h2>${category}</h2>
    <table>
        <thead>
            <tr>
                <th>Shortcut</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>`;

        appData.categories[category].forEach(shortcut => {
            const keys = currentOS === 'mac' && shortcut.macKeys ? shortcut.macKeys : shortcut.keys;
            const keyString = keys.join(' + ');
            
            pdfContent += `
            <tr>
                <td class="keys">${keyString}</td>
                <td>${shortcut.action}</td>
            </tr>`;
        });

        pdfContent += `
        </tbody>
    </table>`;
    });

    pdfContent += `
    <div class="footer">
        <p>Generated from HOTKEYS-MAYA  - Learn the Hotkeys, kill your 🐭</p>
        <p>Visit: hotkeys-Maya.com</p>
    </div>
</body>
</html>`;

    // Create a blob and download
    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${appData.name.replace(/\s+/g, '_')}_Shortcuts_${currentOS === 'windows' ? 'Windows' : 'macOS'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Show success notification
    showNotification('Shortcuts downloaded! Open the HTML file and use your browser\'s "Print to PDF" feature.');
}

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 4000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the app
init();
