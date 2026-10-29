export const profile = {
  name: 'Makesvaran Kayaliny',
  shortName: 'Kayaliny',
  role: 'Digital Transformation Associate',
  email: 'kayalinysmk@gmail.com',
  phone: '+94 766970847',
  linkedin: 'https://www.linkedin.com/in/kayaliny-makesvaran',
  github: 'https://github.com/Kayaliny',
  heroIntro:
    'I bridge the gap between shop-floor operations and digital innovation. I develop enterprise-level applications, automate workflows, and build real-time dashboards using Microsoft Power Platform to drive efficiency and reduce operational costs.',
  expertiseLine: 'Power Apps | Power Automate | Power BI | SharePoint | Process Automation',
  portraitLabel: 'Digital Solutions & Process Improvement',
};

export const about = {
  heading: 'About Me',
  bio: [
    'I am a Digital Transformation Associate with a unique blend of industrial operations experience and technical expertise. After starting my career as a Team Leader on the MAS Holdings production floor, I completed my BICT (Hons) degree at the University of Sri Jayewardenepura (Graduated Oct 2026).',
    'I transitioned seamlessly into the industry, joining AKM International in April 2026. During my previous tenure as a Digital Evangelist Intern at MAS Intimates, I took full ownership of the digitalization roadmap. I successfully developed, tested, and deployed six major Power Apps solutions that are actively used on the factory floor. I don\'t just write code; I gather requirements, design UI wireframes, write SOPs, train supervisors, and present cost-saving analytics to upper management.',
  ],
  experienceHighlights: [
    'Production Design Unit — AKM International Import & Export (Current)',
    'Digital Evangelist Intern — MAS Intimates',
    'Training Staff — Bank of Ceylon',
    'Team Leader — MAS Holdings',
  ],
  educationHighlights: [
    'BICT (Hons) — University of Sri Jayewardenepura (Graduated Oct 2026)',
    'G.C.E Advanced Level — KN / Madya Maha Vidyalayam',
  ],
};

export const expertise = [
  {
    number: '01',
    title: 'Microsoft Power Platform',
    description:
      'Canvas App Development, Power Automate workflows, Power Fx, and SharePoint integration.',
  },
  {
    number: '02',
    title: 'Dashboards & Reporting',
    description:
      'Real-time operational dashboards, DAX, SQL, and data-driven visibility.',
  },
  {
    number: '03',
    title: 'Process Optimization',
    description:
      'Requirement gathering, operational analysis, SOP documentation, and digital adoption.',
  },
  {
    number: '04',
    title: 'Application Development',
    description:
      'Frontend development and application technologies including HTML, CSS, JavaScript, React, and Flutter.',
  },
];

export const skills = [
  {
    category: 'Microsoft Power Platform',
    items: ['Power Apps', 'Power Automate', 'Power Fx', 'SharePoint List Integration'],
  },
  {
    category: 'Data & Business Intelligence',
    items: ['Power BI Dashboard Development', 'DAX', 'SQL', 'SAP'],
  },
  {
    category: 'Web & Mobile Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Flutter', 'Dart'],
  },
  {
    category: 'Development & Collaboration',
    items: ['GitHub', 'Jira'],
  },
  {
    category: 'Business & Operational Skills',
    items: [
      'Requirement Gathering',
      'Process Analysis',
      'Digital Transformation',
      'User Training',
      'Change Management',
      'SOP Documentation',
      'Data Analytics',
      'Cost Reduction (Demurrage)',
      'Hardware & IoT Integration (Barcode Scanners)',
      'Presentation & Reporting',
      'Leadership',
      'Problem-Solving',
      'Communication',
      'Time Management',
      'Adaptability',
      'Team Collaboration',
    ],
  },
];

export const experienceIntro =
  'A proven track record spanning digital transformation, export logistics, banking operations, and manufacturing team leadership.';

export const experience = [
  {
    role: 'Production Design Unit',
    company: 'AKM International Import & Export (Pvt) Ltd',
    period: '30 April 2026 – Present',
    responsibilities: [
      'Manage end-to-end export documentation and international container bookings for "Vanniyan Products" to European markets.',
      'Design and prepare print-ready packaging layouts and labeling to meet strict international export compliance standards.',
      'Track global shipments from dispatch to final delivery, resolving logistics delays.',
    ],
  },
  {
    role: 'Digital Evangelist Intern',
    company: 'MAS Intimates Vidiyal',
    period: 'May 2025 – November 2025',
    responsibilities: [
      'App Development: Designed and deployed 6 custom Power Apps solutions (Vehicle Management, Section PO Tracker, Red Cell Tracker, Manager Roster) from initial wireframing to live floor deployment.',
      'Automation & Dashboards: Built real-time, color-coded Power Apps and Power BI dashboards to monitor hourly production, CNI failures, and vehicle demurrage costs.',
      'Hardware Integration: Configured barcode scanner integration for Power Apps to automate data entry in warehouse areas.',
      'Documentation & Training: Authored User Manuals and SOPs. Conducted hands-on training for floor supervisors across 20+ devices to ensure 100% digital adoption.',
      'Data Analysis: Extracted data from the Vehicle App to identify demurrage cost spikes, presenting actionable cost-reduction strategies directly to the GM and DGM.',
    ],
  },
  {
    role: 'Training Staff',
    company: 'Bank of Ceylon — Paranthan Branch, Kilinochchi',
    period: 'September 2021 – March 2022',
    responsibilities: [
      'Handled customer service operations, supported digital banking systems, and assisted with back-office documentation and process coordination.',
    ],
  },
  {
    role: 'Temporary Team Leader',
    company: 'MAS Holdings — Production Department, Kilinochchi',
    period: 'November 2020 – August 2021',
    responsibilities: [
      'Supervised daily production operations, ensured target achievement, and reported performance metrics to management.',
    ],
  },
];

export const projects = [
  {
    number: '01',
    title: 'Vehicle Management Application',
    description:
      'A tablet-based Power App built for the Guard Room and Unloading Bays. It tracks real-time vehicle arrival, loading/unloading start and end times, and logs delays.',
    impact:
      'Identified unrecorded delays that were causing over 507,000 in monthly demurrage costs, enabling targeted cost-reduction strategies.',
    image: 'vehicle',
    github: 'https://github.com/Kayaliny',
    capabilities: [
      'Vehicle arrival tracking.',
      'Loading and unloading timers.',
      'Delay logging.',
      'Demurrage cost visibility.',
    ],
    technologies: ['Power Apps', 'Power Automate', 'SharePoint'],
    accent: 'teal',
    objective:
      'Provide real-time visibility into vehicle loading and unloading activity so that supervisors can identify delays the moment they occur.',
    challenge:
      'Manual, paper-based tracking made it difficult to know how long each vehicle had been waiting, which delays to escalate, or which stages of the loading process were slowest.',
    solution:
      'A tablet-based Power App for the Guard Room and Unloading Bays that tracks arrival, loading/unloading times, and logs delays—surfacing demurrage cost drivers for targeted reduction.',
  },
  {
    number: '02',
    title: 'Section PO Tracker Application',
    description:
      'A barcode-integrated issue-tracking solution for production lines. Implemented a live, color-coded dashboard (Red for pending, Green for completed) to monitor hourly issues.',
    impact:
      'Eliminated manual paper logging, drastically reducing issue resolution time and improving visibility for floor managers.',
    image: 'tracker',
    github: 'https://github.com/Kayaliny',
    capabilities: [
      'Barcode-based issue tracking.',
      'Color-coded live dashboard.',
      'Hourly issue monitoring.',
    ],
    technologies: ['Power Apps', 'Power BI', 'SharePoint'],
    accent: 'navy',
    objective:
      'Track production-floor issues from the moment they are scanned to the moment they are resolved, with live status for everyone involved.',
    challenge:
      'Issues were logged on paper and reconciled manually, so completion status was often hours out of date and issues were easy to lose.',
    solution:
      'A barcode-driven Power App with a live color-coded dashboard (Red for pending, Green for completed) that updates completion status in near real time.',
  },
  {
    number: '03',
    title: 'Red Cell Tracker Application',
    description:
      'An hourly production issue-logging system with shift-based filters and visual indicators. Automated the tracking of critical production faults.',
    impact:
      'Significantly reduced manual recording time and provided accurate shift-by-shift performance data.',
    image: 'redcell',
    github: 'https://github.com/Kayaliny',
    capabilities: [
      'Hourly issue recording.',
      'Shift-based filtering.',
      'Visual issue monitoring.',
    ],
    technologies: ['Power Apps', 'SharePoint'],
    accent: 'teal',
    objective:
      'Let operators log production issues against the hour and shift they occur in, so patterns can be spotted across the day.',
    challenge:
      'Without hour- and shift-level structure, recurring issues blended into a single list and shift-based patterns were invisible.',
    solution:
      'A Power App that captures the hour and shift automatically on each issue entry, with visual indicators that highlight critical production faults.',
  },
  {
    number: '04',
    title: 'Production Hourly Issues & CNI Failure Monitoring Dashboard',
    description:
      'A Power BI and Power Apps dashboard designed to monitor production issues and CNI failures in real-time.',
    impact:
      'Provided operational supervisors with data-driven visibility to make faster, more informed decisions regarding quality control.',
    image: 'dashboard',
    github: 'https://github.com/Kayaliny',
    capabilities: [
      'Hourly production issue monitoring.',
      'CNI failure tracking.',
      'Supervisor visibility across shifts.',
    ],
    technologies: ['Power BI', 'Power Apps', 'DAX', 'SQL'],
    accent: 'navy',
    objective:
      'Give supervisors a single, live view of hourly production issues and CNI failures so operational decisions can be made on current data.',
    challenge:
      'Hourly issues and CNI failures were reported separately and after the fact, delaying the response to problems that developed during a shift.',
    solution:
      'A Power BI and Power Apps dashboard that consolidates hourly issue and CNI failure data for real-time quality and operations decisions.',
  },
  {
    number: '05',
    title: 'Task Zen – Mobile App',
    description:
      'A task management app designed to simplify workflows and boost productivity. Frontend development focused on intuitive UI in Flutter (Dart) and Kotlin.',
    impact:
      'Delivers a complete productivity toolkit — authentication, tasks, dashboard tracking, calendar views, quick notes, and profile settings — in one mobile experience.',
    image: 'taskzen',
    github: 'https://github.com/Kayaliny/Task_Zen_Group20',
    capabilities: [
      'User authentication — seamless registration and login.',
      'Task management — create, view, and complete tasks.',
      'Home dashboard with a visual progress tracker.',
      'Calendar integration to view tasks by due date.',
      'Quick notes to capture thoughts instantly.',
      'User profile and settings for a customized experience.',
    ],
    technologies: ['Flutter', 'Dart', 'Kotlin'],
    accent: 'teal',
    objective:
      'Simplify personal and team workflows with a mobile app that makes it easy to plan, track, and complete work.',
    challenge:
      'Productivity tools often scatter tasks, notes, and calendars across separate screens, making it harder to stay organized.',
    solution:
      'Task Zen brings authentication, task management, a progress dashboard, calendar views, quick notes, and profile settings into a single Flutter-based mobile experience.',
  },
  {
    number: '06',
    title: 'BODIMA.LK',
    description:
      'A web platform that simplifies finding and listing boarding places — from a cozy single room to a spacious shared space. Developed as a Software Engineering II group project at the University of Sri Jayewardenepura, with a lead contribution on the frontend.',
    impact:
      'Makes boarding search and listing effortless through smart filters, verified listings, and easy tools for property owners.',
    image: 'bodima',
    github: 'https://github.com/Kayaliny',
    capabilities: [
      'Smart search filters by location, price, and more.',
      'Verified listings with clear descriptions and images.',
      'Seamless listing management for property owners.',
      'Role-based access control, input validation, and hashed passwords.',
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Express.js', 'Node.js', 'MySQL'],
    accent: 'navy',
    objective:
      'Help students and owners find and list boarding spaces quickly, with transparent details and an intuitive web experience.',
    challenge:
      'Finding a boarding place often means scattered listings, unclear details, and no simple way for owners to manage properties online.',
    solution:
      'BODIMA.LK is an Agile-built web app with a dynamic frontend (HTML, CSS, Bootstrap, JavaScript), Express.js REST APIs, MySQL data handling, and security measures including role-based access and hashed passwords.',
  },
  {
    number: '07',
    title: 'Japura Laboratory Reservation System',
    description:
      'A Flutter mobile app exclusively for the University of Sri Jayewardenepura community. It streamlines lab management for students, lecturers, and administrators.',
    impact:
      'Gives students real-time lab schedules, lets lecturers and admins update bookings easily, and provides usage insights to optimize lab efficiency.',
    image: 'labreservation',
    github: 'https://github.com/Kayaliny/Lab_Reservation-Mobile-App-JPURA',
    capabilities: [
      'Real-time lab schedules for students.',
      'Schedule management for lecturers and admins.',
      'Smart notifications for updates and changes.',
      'Usage insights and analytics for administrators.',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase'],
    accent: 'teal',
    objective:
      'Streamline laboratory booking and schedule visibility for the University of Sri Jayewardenepura community.',
    challenge:
      'Lab schedules were hard to check in real time, and updates from lecturers or admins did not reach students quickly.',
    solution:
      'A Flutter app with role-based access for students, lecturers, and admins — covering live schedules, schedule management, notifications, and usage analytics.',
  },
  {
    number: '08',
    title: 'Online Bakery Platform',
    description:
      'An online bakery website that brings the warmth of fresh-baked goods to every corner of the nation. Whether you are craving sourdough, croissants, or artisan bread, the platform makes it easy to browse and order favorites in a click.',
    impact:
      'Turns bakery shopping into a simple, nationwide online experience — browse artisan breads and place orders without leaving home.',
    image: 'bakery',
    github: 'https://github.com/Kayaliny/Online-Bakery-Website',
    capabilities: [
      'Browse fresh-baked goods including sourdough, croissants, and artisan bread.',
      'Order favorites online with a simple, click-to-order experience.',
      'Showcase bakery products with a visual, image-led catalog.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    accent: 'navy',
    objective:
      'Make it easier than ever to discover and order fresh bakery items from anywhere in the country.',
    challenge:
      'Customers who want artisan breads and pastries often cannot visit a physical bakery, and product variety is hard to browse without a dedicated online storefront.',
    solution:
      'An online bakery platform with a warm, visual catalog so customers can explore products and satisfy cravings with just a click.',
  },
];

export const approach = [
  {
    step: '01',
    title: 'Understand',
    description: 'Gather requirements and understand the operational problem.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Plan a practical solution based on workflow needs.',
  },
  {
    step: '03',
    title: 'Implement',
    description: 'Develop applications, automation, and monitoring dashboards.',
  },
  {
    step: '04',
    title: 'Enable',
    description: 'Document processes, train users, and support digital adoption.',
  },
];

export const education = [
  {
    degree: 'Bachelor of Information & Communication Technology (Hons)',
    institution: 'University of Sri Jayewardenepura',
    period: '2022 – 2026',
    details: [
      'GPA: 3.24',
      'Graduated: October 2026',
    ],
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: 'KN / Madya Maha Vidyalayam',
    period: '2020',
    details: [
      'ICT: A',
      'Bio System Technology: B',
      'Science for Technology: A',
      'District Rank: 01',
      'National Rank: 101',
      'Z-score: 2.1681',
    ],
  },
  {
    degree: 'G.C.E. Ordinary Level',
    institution: "KN / St Theresa's Girls College",
    period: '2017',
    details: ['Results: 6A, 3B'],
  },
];

export const certifications = [
  { name: 'Diploma in Public Relations & Quality Assurance', issuer: 'CASED Institute', year: '2025 – 2026' },
  { name: 'Diploma in Media and Marketing Promotion', issuer: 'CASED Institute', year: '2024' },
  { name: 'Diploma in Sinhala', issuer: 'CASED Institute', year: '2024' },
  { name: 'Diploma in HR', issuer: 'CASED Institute', year: '2024' },
  { name: 'Certificate in English', issuer: 'Oxford College', year: '2023' },
  { name: 'Job Skills Development Training', issuer: 'Bank of Ceylon', year: '2021 – 2022' },
  { name: 'Diploma in Computer Application', issuer: 'SDCT', year: '2018', wide: true },
];

export const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Sinhala', level: 'Basic' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
