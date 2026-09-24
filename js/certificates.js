const certificates = [
  {
    title: 'Algorithms for Searching, Sorting, and Information Retrieval',
    provider: 'University of Colorado Boulder',
    category: 'coursera',
    description: 'Certificate for Algorithms for Searching, Sorting, and Information Retrieval.',
    file: 'Algorithms for Searching, Sorting, and Indexing.pdf'
  },
  {
    title: 'An Introduction to Logic for Computer Science',
    provider: 'University of Leeds',
    category: 'coursera',
    description: 'Certificate for An Introduction to Logic for Computer Science.',
    file: 'An Introduction to Logic for Computer Science.pdf'
  },
  {
    title: 'ARM Cortex (STM32) Deep Dive Mastering',
    provider: 'EDUCBA',
    category: 'coursera',
    description: 'Certificate for ARM Cortex (STM32) Deep Dive Mastering.',
    file: 'ARM Cortex (STM32) Deep Dive Mastering Embedded System.pdf'
  },
  {
    title: 'ARM Cortex (STM32) Fundamentals',
    provider: 'EDUCBA',
    category: 'coursera',
    description: 'Certificate for ARM Cortex (STM32) Fundamentals.',
    file: 'ARM Cortex (STM32) Fundamentals Building Embedded Systems.pdf'
  },
  {
    title: 'Azure Cloud Services',
    provider: 'Microsoft',
    category: 'coursera',
    description: 'Certificate for Azure Cloud Services.',
    file: 'Azure Cloud Services.pdf'
  },
  {
    title: 'Basic Statistics',
    provider: 'University of Amsterdam',
    category: 'coursera',
    description: 'Certificate for Basic Statistics.',
    file: 'Basic Statistics.pdf'
  },
  {
    title: 'Big Data Analytics',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Big Data Analytics.',
    file: 'BIG DATA ANALYTICS.pdf'
  },
  {
    title: 'Capstone Project \u2013 Applying UI-UX Design',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for Capstone Project \u2013 Applying UI-UX Design.',
    file: 'Capstone Project - Applying UI-UX Design in the Real World.pdf'
  },
  {
    title: 'Certified Information Security Manager (CISM)',
    provider: 'Packt',
    category: 'coursera',
    description: 'Certificate for Certified Information Security Manager (CISM).',
    file: 'Certified Information Security Manager (CISM).pdf'
  },
  {
    title: 'ChatGPT Playground for Beginners',
    provider: 'Coursera',
    category: 'coursera',
    description: 'Certificate for ChatGPT Playground for Beginners.',
    file: 'ChatGPT Playground for Beginners - Intro to NLP AI.pdf'
  },
  {
    title: 'Comparative Political Systems',
    provider: 'Universit\u00e0 di Napoli Federico II',
    category: 'coursera',
    description: 'Certificate for Comparative Political Systems.',
    file: 'Comparative Political Systems.pdf'
  },
  {
    title: 'Computer Networks',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Computer Networks.',
    file: 'COMPUTER NETWORKS.pdf'
  },
  {
    title: 'Data and Information Security',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Data and Information Security.',
    file: 'DATA AND INFORMATION SECURITY.pdf'
  },
  {
    title: 'DeepRacer',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for DeepRacer.',
    file: 'DeepRacer.pdf'
  },
  {
    title: 'Differential Equations Part I \u2013 Basic Theory',
    provider: 'Korea Advanced Institute of Science and Technology (KAIST)',
    category: 'coursera',
    description: 'Certificate for Differential Equations Part I \u2013 Basic Theory.',
    file: 'Differential Equations Part I Basic Theory.pdf'
  },
  {
    title: 'Digital Marketing',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Digital Marketing.',
    file: 'Digital Marketing.pdf'
  },
  {
    title: 'Disaster Risk Reduction and Management',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Disaster Risk Reduction and Management.',
    file: 'DISASTER RISK REDUCTION AND MANAGEMENT.pdf'
  },
  {
    title: 'Distributed Computing for AI and Data Science',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Distributed Computing for AI and Data Science.',
    file: 'Distributed Computing for AI and Data Science.pdf'
  },
  {
    title: 'Electrodynamics \u2013 An Introduction',
    provider: 'Korea Advanced Institute of Science and Technology (KAIST)',
    category: 'coursera',
    description: 'Certificate for Electrodynamics \u2013 An Introduction.',
    file: 'Electrodynamics - An Introduction.pdf'
  },
  {
    title: 'Embedded C Programming',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Embedded C Programming.',
    file: 'Embedded C Programming.pdf'
  },
  {
    title: 'Embedded C Programming Essentials',
    provider: 'EDUCBA',
    category: 'coursera',
    description: 'Certificate for Embedded C Programming Essentials.',
    file: 'Embedded C Programming Essentials.pdf'
  },
  {
    title: 'Embedded Systems using C',
    provider: 'EDUCBA',
    category: 'coursera',
    description: 'Certificate for Embedded Systems using C.',
    file: 'Embedded Systems using C.pdf'
  },
  {
    title: 'Energy and Environment',
    provider: 'Dartmouth College',
    category: 'coursera',
    description: 'Certificate for Energy and Environment.',
    file: 'Energy and Environment.pdf'
  },
  {
    title: 'Engineering Systems in Motion \u2013 Dynamics of Particles and Bodies in 2D Motion',
    provider: 'Georgia Institute of Technology',
    category: 'coursera',
    description: 'Certificate for Engineering Systems in Motion \u2013 Dynamics of Particles and Bodies in 2D Motion.',
    file: 'Engineering Systems in Motion - Dynamics of Particles and Bodies in 2D Motion.pdf'
  },
  {
    title: 'Ethical Hacking',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Ethical Hacking.',
    file: 'ETHICAL HACKING.pdf'
  },
  {
    title: 'Ethics and AI',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Ethics and AI.',
    file: 'Ethics and AI.pdf'
  },
  {
    title: 'Ethics of Artificial Intelligence',
    provider: 'Politecnico di Milano',
    category: 'coursera',
    description: 'Certificate for Ethics of Artificial Intelligence.',
    file: 'Ethics of Artificial Intelligence.pdf'
  },
  {
    title: 'Exploratory Data Analysis for Machine Learning',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for Exploratory Data Analysis for Machine Learning.',
    file: 'Exploratory Data Analysis for Machine Learning.pdf'
  },
  {
    title: 'Fundamentals of Data Science and AI',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Fundamentals of Data Science and AI.',
    file: 'FUNDAMENTALS OF DATA SCIENCE AND ANALYTICS.pdf'
  },
  {
    title: 'Fundamentals of Digital Design for VLSI',
    provider: 'L&T EduTech',
    category: 'coursera',
    description: 'Certificate for Fundamentals of Digital Design for VLSI.',
    file: 'Fundamentals of Digital Design for VLSI Chip Design.pdf'
  },
  {
    title: 'Fundamentals of Embedded Systems',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Fundamentals of Embedded Systems.',
    file: 'Fundamentals of Embedded Systems and IoT.pdf'
  },
  {
    title: 'Generative AI \u2013 The Future of UX/UI Design',
    provider: 'SkillUp',
    category: 'coursera',
    description: 'Certificate for Generative AI \u2013 The Future of UX/UI Design.',
    file: 'Generative AI - The Future of UX UI Design.pdf'
  },
  {
    title: 'IBM UI-UX Designer',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for IBM UI-UX Designer.',
    file: 'IBM UI-UX Designer.pdf'
  },
  {
    title: 'Interfacing with the Arduino',
    provider: 'University of California, Irvine',
    category: 'coursera',
    description: 'Certificate for Interfacing with the Arduino.',
    file: 'Interfacing with the Arduino.pdf'
  },
  {
    title: 'Interfacing with the Raspberry Pi',
    provider: 'University of California, Irvine',
    category: 'coursera',
    description: 'Certificate for Interfacing with the Raspberry Pi.',
    file: 'Interfacing with the Raspberry Pi.pdf'
  },
  {
    title: 'Intermediate Grammar Project',
    provider: 'University of California, Irvine',
    category: 'coursera',
    description: 'Certificate for Intermediate Grammar Project.',
    file: 'Intermediate Grammar Project.pdf'
  },
  {
    title: 'Internet of Things \u2013 Communication Technologies',
    provider: 'University of California San Diego',
    category: 'coursera',
    description: 'Certificate for Internet of Things \u2013 Communication Technologies.',
    file: 'Internet of Things - Communication Technologies.pdf'
  },
  {
    title: 'Internet of Things and AI Cloud',
    provider: 'University of California San Diego',
    category: 'coursera',
    description: 'Certificate for Internet of Things and AI Cloud.',
    file: 'Internet of Things and AI Cloud.pdf'
  },
  {
    title: 'Internet of Things Capstone V2 \u2013 Build a Project',
    provider: 'University of California San Diego',
    category: 'coursera',
    description: 'Certificate for Internet of Things Capstone V2 \u2013 Build a Project.',
    file: 'Internet of Things Capstone V2 - Build a Mobile Surveillance System.pdf'
  },
  {
    title: 'Internet of Things V2 \u2013 DragonBoard',
    provider: 'University of California San Diego',
    category: 'coursera',
    description: 'Certificate for Internet of Things V2 \u2013 DragonBoard.',
    file: 'Internet of Things V2 - DragonBoardT bring up and community ecosystem.pdf'
  },
  {
    title: 'Internet of Things V2 \u2013 Setting Up and Using Cloud Services',
    provider: 'University of California San Diego',
    category: 'coursera',
    description: 'Certificate for Internet of Things V2 \u2013 Setting Up and Using Cloud Services.',
    file: 'nternet of Things V2 - Setting up and Using Cloud Services.pdf'
  },
  {
    title: 'Intro to Digital Manufacturing with Autodesk Fusion 360',
    provider: 'Autodesk',
    category: 'coursera',
    description: 'Certificate for Intro to Digital Manufacturing with Autodesk Fusion 360.',
    file: 'Intro to Digital Manufacturing with Autodesk Fusion 360.pdf'
  },
  {
    title: 'Introduction to Agile Development and Scrum',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for Introduction to Agile Development and Scrum.',
    file: 'Introduction to Agile Development and Scrum.pdf'
  },
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for Introduction to Artificial Intelligence (AI).',
    file: 'Introduction to Artificial Intelligence (AI).pdf'
  },
  {
    title: 'Introduction to Big Data with Spark and Hadoop',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for Introduction to Big Data with Spark and Hadoop.',
    file: 'Introduction to Big Data with Spark and Hadoop.pdf'
  },
  {
    title: 'Introduction to Computer Vision and Image Processing',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for Introduction to Computer Vision and Image Processing.',
    file: 'Introduction to Computer Vision and Image Processing.pdf'
  },
  {
    title: 'Introduction to Electronics',
    provider: 'Georgia Institute of Technology',
    category: 'coursera',
    description: 'Certificate for Introduction to Electronics.',
    file: 'Introduction to Electronics.pdf'
  },
  {
    title: 'Introduction to High-Performance and Parallel Computing',
    provider: 'University of Colorado Boulder',
    category: 'coursera',
    description: 'Certificate for Introduction to High-Performance and Parallel Computing.',
    file: 'Introduction to High-Performance and Parallel Computing.pdf'
  },
  {
    title: 'Introduction to Household Water Treatment and Safe Storage',
    provider: '\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne (EPFL)',
    category: 'coursera',
    description: 'Certificate for Introduction to Household Water Treatment and Safe Storage.',
    file: 'Introduction to Household Water Treatment and Safe Storage.pdf'
  },
  {
    title: 'Introduction to Solar Cells',
    provider: 'Technical University of Denmark (DTU)',
    category: 'coursera',
    description: 'Certificate for Introduction to Solar Cells.',
    file: 'Introduction to solar cells.pdf'
  },
  {
    title: 'Introduction to the Internet of Things',
    provider: 'University of California, Irvine',
    category: 'coursera',
    description: 'Certificate for Introduction to the Internet of Things.',
    file: 'Introduction to the Internet of Things and Embedded Systems.pdf'
  },
  {
    title: 'Introduction to UX-UI Design',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for Introduction to UX-UI Design.',
    file: 'Introduction to UX-UI Design.pdf'
  },
  {
    title: 'Machine Learning',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Machine Learning.',
    file: 'Machine Learning.pdf'
  },
  {
    title: 'Malware Analysis and Introduction to Assessment',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for Malware Analysis and Introduction to Assessment.',
    file: 'Malware Analysis and Introduction to Assembly Language.pdf'
  },
  {
    title: 'Mastering KiCAD Open-Source PCB Design',
    provider: 'Coursera',
    category: 'coursera',
    description: 'Certificate for Mastering KiCAD Open-Source PCB Design.',
    file: 'Mastering KiCAD Open-Source PCB Design for Begginers.pdf'
  },
  {
    title: 'Matrix Algebra for Engineers',
    provider: 'The Hong Kong University of Science and Technology',
    category: 'coursera',
    description: 'Certificate for Matrix Algebra for Engineers.',
    file: 'Matrix Algebra for Engineers.pdf'
  },
  {
    title: 'Networking Fundamentals',
    provider: 'Akamai Technologies, Inc.',
    category: 'coursera',
    description: 'Certificate for Networking Fundamentals.',
    file: 'Networking Fundamentals.pdf'
  },
  {
    title: 'Neural Networks and Deep Learning',
    provider: 'DeepLearning.AI',
    category: 'coursera',
    description: 'Certificate for Neural Networks and Deep Learning.',
    file: 'Neural Networks and Deep Learning.pdf'
  },
  {
    title: 'Numerical Methods for Engineers',
    provider: 'The Hong Kong University of Science and Technology',
    category: 'coursera',
    description: 'Certificate for Numerical Methods for Engineers.',
    file: 'Numerical Methods for Engineers.pdf'
  },
  {
    title: 'Object-Oriented Programming in Python',
    provider: 'Duke University',
    category: 'coursera',
    description: 'Certificate for Object-Oriented Programming in Python.',
    file: 'Object-Oriented Programming in Python.pdf'
  },
  {
    title: 'Operating Systems',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Operating Systems.',
    file: 'Operating Systems.pdf'
  },
  {
    title: 'Probability and Statistics for Engineers',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Probability and Statistics for Engineers.',
    file: 'Probability and Statistics for Engineers.pdf'
  },
  {
    title: 'Product Development using AutoCAD',
    provider: 'Coursera',
    category: 'coursera',
    description: 'Certificate for Product Development using AutoCAD.',
    file: 'Product Development using AutoCAD.pdf'
  },
  {
    title: 'Programming for the Internet of Things',
    provider: 'University of California, Irvine',
    category: 'coursera',
    description: 'Certificate for Programming for the Internet of Things.',
    file: 'Programming for the Internet of Things Project.pdf'
  },
  {
    title: 'Python Data Structures',
    provider: 'University of Michigan',
    category: 'coursera',
    description: 'Certificate for Python Data Structures.',
    file: 'Python Data Structures.pdf'
  },
  {
    title: 'Renewable Energy Technology Fundamentals',
    provider: 'University of Colorado Boulder',
    category: 'coursera',
    description: 'Certificate for Renewable Energy Technology Fundamentals.',
    file: 'Renewable Energy Technology Fundamentals.pdf'
  },
  {
    title: 'Scripting with Python and SQL for Data Engineering',
    provider: 'Duke University',
    category: 'coursera',
    description: 'Certificate for Scripting with Python and SQL for Data Engineering.',
    file: 'Scripting with Python and SQL for Data Engineering.pdf'
  },
  {
    title: 'Security & Ethical Hacking',
    provider: 'University of Colorado Boulder',
    category: 'coursera',
    description: 'Certificate for Security & Ethical Hacking.',
    file: 'Security & Ethical Hacking.pdf'
  },
  {
    title: 'Security & Privacy in Cloud R21',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for Security & Privacy in Cloud R21.',
    file: 'Security & Privacy in Cloud R21.pdf'
  },
  {
    title: 'Sivasakthi R \u2013 IBM UI-UX Designer (Personalized Certificate)',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for Sivasakthi R \u2013 IBM UI-UX Designer.',
    file: 'Sivasakthi R_IBM UI-UX Designer.pdf'
  },
  {
    title: 'State Nation Building and Politics in India',
    provider: 'KGiSL Educational Institutions',
    category: 'coursera',
    description: 'Certificate for State Nation Building and Politics in India.',
    file: 'State Nation Building and Politics in India.pdf'
  },
  {
    title: 'The Arduino Platform and C Programming',
    provider: 'University of California, Irvine',
    category: 'coursera',
    description: 'Certificate for The Arduino Platform and C Programming.',
    file: 'The Arduino Platform and C Programming.pdf'
  },
  {
    title: 'The Digital Marketing Revolution',
    provider: 'University of Illinois Urbana-Champaign',
    category: 'coursera',
    description: 'Certificate for The Digital Marketing Revolution.',
    file: 'The Digital Marketing Revolution.pdf'
  },
  {
    title: 'The Raspberry Pi Platform and Python Programming',
    provider: 'University of California, Irvine',
    category: 'coursera',
    description: 'Certificate for The Raspberry Pi Platform and Python Programming.',
    file: 'The Raspberry Pi Platform and Python Programming for the Raspberry Pi.pdf'
  },
  {
    title: 'Understanding Food Regulations & Food Safety',
    provider: 'University of Illinois Urbana-Champaign',
    category: 'coursera',
    description: 'Certificate for Understanding Food Regulations & Food Safety.',
    file: 'Understanding Food Regulations & Food Labeling.pdf'
  },
  {
    title: 'UX Research and Information Architecture',
    provider: 'IBM',
    category: 'coursera',
    description: 'Certificate for UX Research and Information Architecture.',
    file: 'UX Research and Information Architecture.pdf'
  },
  {
    title: 'Word Forms and Simple Present Tense',
    provider: 'University of California, Irvine',
    category: 'coursera',
    description: 'Certificate for Word Forms and Simple Present Tense.',
    file: 'Word Forms and Simple Present Tense.pdf'
  },
  { title: 'SoloLearn Learning Collection', category: 'sololearn', description: 'Completed SoloLearn learning tracks covering programming fundamentals and applied practice.' },
  { title: 'Data Science Internship Certificate', category: 'internships', description: 'Certificate from the SkillCraft Technology Data Science internship.' },
  { title: 'Full Stack Internship Certificate', category: 'internships', description: 'Certificate from the Appin Technology Full Stack internship.' },
  { title: 'Data Analyst Internship Certificate', category: 'internships', description: 'Certificate from the Elevate Labs Data Analyst internship.' },
  { title: 'VBYLD 2026 Quiz Participation', category: 'achievements', description: 'Participation certificate for the VBYLD 2026 quiz.' },
  { title: 'Fit India Pledge', category: 'professional', description: 'Certificate for completing the Fit India Pledge.' },
  { title: 'Pledge Against Drug Abuse Campaign', category: 'ncc', description: 'Participation certificate for the Pledge Against Drug Abuse campaign.' }
];

(() => {
  const grid = document.getElementById('certificate-grid');
  const search = document.getElementById('cert-search');
  const filters = document.getElementById('cert-filters');
  let active = 'all';
  let expanded = false;
  const INITIAL_VISIBLE_COUNT = 8;
  
  let viewMoreContainer = document.createElement('div');
  viewMoreContainer.style.textAlign = 'center';
  viewMoreContainer.style.marginTop = '30px';
  viewMoreContainer.style.width = '100%';
  
  let viewMoreBtn = document.createElement('button');
  viewMoreBtn.id = 'cert-view-more';
  viewMoreBtn.className = 'btn btn-primary';
  viewMoreBtn.style.display = 'none';
  viewMoreContainer.appendChild(viewMoreBtn);
  
  grid.parentNode.insertBefore(viewMoreContainer, grid.nextSibling);

  viewMoreBtn.addEventListener('click', () => {
    expanded = !expanded;
    render();
  });

  const label = (c) => ({
    ai: 'AI & ML',
    internships: 'Internships',
    coursera: 'Coursera',
    sololearn: 'SoloLearn',
    professional: 'Professional Development',
    ncc: 'NCC',
    achievements: 'Achievements',
    programming: 'Programming'
  })[c] || c;

  function render() {
    const q = search.value.toLowerCase();
    const list = certificates.filter((c) =>
      (active === 'all' || c.category === active) &&
      `${c.title} ${c.category} ${label(c.category)} ${c.provider || ''}`.toLowerCase().includes(q)
    );

    const showViewMore = list.length > INITIAL_VISIBLE_COUNT;
    const visibleList = expanded ? list : list.slice(0, INITIAL_VISIBLE_COUNT);

    grid.innerHTML = visibleList.length
      ? visibleList.map((c) => `<article class="certificate" data-id="${certificates.indexOf(c)}" tabindex="0" role="button" aria-label="View ${c.title}"><small>${label(c.category)}</small><h3>${c.title}</h3>${c.provider ? `<p>${c.provider}</p>` : ''}<span>View details <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span></article>`).join('')
      : '<p class="certificate-empty">No matching certificates found.</p>';

    if (showViewMore) {
        viewMoreBtn.style.display = 'inline-block';
        viewMoreBtn.textContent = expanded ? 'View Less Certificates ↑' : 'View More Certificates →';
    } else {
        viewMoreBtn.style.display = 'none';
    }
  }

  filters.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;
    active = e.target.dataset.filter;
    expanded = false;
    filters.querySelectorAll('button').forEach((b) => {
      const on = b === e.target;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    render();
  });

  search.addEventListener('input', () => {
    expanded = false;
    render();
  });
  
  grid.addEventListener('click', open);
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open(e);
    }
  });

  function open(e) {
    const card = e.target.closest('.certificate');
    if (!card) return;
    const c = certificates[card.dataset.id];
    document.getElementById('cert-title').textContent = c.title;
    document.getElementById('cert-category').textContent = label(c.category);
    
    let providerEl = document.getElementById('cert-provider');
    if (!providerEl) {
      providerEl = document.createElement('p');
      providerEl.id = 'cert-provider';
      const descEl = document.getElementById('cert-description');
      descEl.parentNode.insertBefore(providerEl, descEl);
    }
    providerEl.textContent = c.provider ? `Provider: ${c.provider}` : '';

    document.getElementById('cert-description').textContent = c.description;
    
    const downloadBtn = document.getElementById('cert-download');
    let fileUrl = '';
    let fileName = '';
    if (c.file) {
      fileUrl = `assets/certificates/Coursera-20260917T091304Z-1-001/Coursera/${encodeURIComponent(c.file)}`;
      fileName = c.file;
    } else {
      fileUrl = `assets/certificates/${c.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.pdf`;
      fileName = `${c.title}.pdf`;
    }
    
    downloadBtn.href = fileUrl;
    downloadBtn.download = fileName;

    let viewBtn = document.getElementById('cert-view');
    if (!viewBtn) {
      viewBtn = document.createElement('a');
      viewBtn.id = 'cert-view';
      viewBtn.className = downloadBtn.className;
      viewBtn.textContent = 'View Certificate';
      viewBtn.target = '_blank';
      viewBtn.rel = 'noopener noreferrer';
      downloadBtn.parentNode.insertBefore(viewBtn, downloadBtn);
      viewBtn.style.marginRight = '10px';
    }
    viewBtn.href = fileUrl;

    bootstrap.Modal.getOrCreateInstance(document.getElementById('cert-modal')).show();
  }

  render();
})();
