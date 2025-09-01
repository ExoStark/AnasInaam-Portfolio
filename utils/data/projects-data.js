// Import images using proper Next.js static imports
import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "Built an AI-powered financial mobile application with my team. Developed comprehensive APIs using Express.js, TypeScript, OpenAI, AWS, and MongoDB. Implemented secure authentication via AWS SES, Google, and Facebook OAuth. Created intelligent AI assistants using OpenAI's GPT models trained on custom datasets. Integrated AWS Transcribe for voice-to-text conversion and automated PDF generation with Google Sheets integration.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: 'https://github.com/AnasInaam/ai-financial-app',
        demo: 'https://ai-financial-demo.vercel.app',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'Designed and developed a comprehensive full-stack web application for 2Expedition, a travel agency in Armenia. Built responsive UI using Next.js, TypeScript, Material-UI, TailwindCSS, and Google Maps integration. Implemented multi-language support and currency conversion. Developed robust backend APIs with NestJS, TypeScript, MySQL, TypeORM, and cloud services. Deployed on AWS Amplify (frontend) and AWS EC2 (backend).',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Material-UI"],
        role: 'Full Stack Developer',
        code: 'https://github.com/AnasInaam/travel-agency-app',
        demo: 'https://travel-agency-demo.netlify.app',
        image: travel,
    },
    {
        id: 3,
        name: 'AI-Powered To-Do List App',
        description: 'Developed a sophisticated task management application with AI-powered features. Built responsive frontend using React and TypeScript with intuitive Bootstrap-styled interface. Created Express.js backend with MongoDB for data persistence. Integrated OpenAI API for smart task suggestions, categorization, and priority management. Implemented real-time updates, deadline reminders via cron jobs, and advanced filtering capabilities.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Express', 'TypeScript', 'MongoDB', 'OpenAI API', 'Replicate AI', 'Cronjob'],
        code: 'https://github.com/AnasInaam/ai-todo-app',
        role: 'Full Stack Developer',
        demo: 'https://ai-todo-demo.herokuapp.com',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management Dashboard',
        description: "Led frontend development for a comprehensive newspaper management dashboard application. Created intuitive user interface using Next.js and Material-UI with focus on user experience. Implemented article management system, editorial calendar integration, team collaboration tools, and real-time publishing workflows. Utilized Redux for state management and React Hook Form with Sun Editor for rich text editing capabilities.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Calendar', 'React Hook Form', 'Sun Editor', 'TypeScript'],
        code: 'https://github.com/AnasInaam/newsroom-dashboard',
        demo: 'https://newsroom-dashboard-demo.vercel.app',
        image: ayla,
        role: 'Lead Frontend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },