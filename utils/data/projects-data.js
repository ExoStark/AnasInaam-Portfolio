// Import images using proper Next.js static imports
import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI-Powered To-Do List App',
        description: 'A sophisticated task management application with AI-powered features. Built with React and TypeScript for the frontend, Express.js backend with MongoDB for data persistence. Integrated OpenAI API for smart task suggestions and categorization. Features include real-time updates, priority management, deadline reminders via cronjobs, and an intuitive Bootstrap-styled interface.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Express', 'TypeScript', 'MongoDB', 'OpenAI API', 'Replicate AI', 'Cronjob'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management Dashboard',
        description: "A comprehensive newspaper management dashboard application developed with my team. As the lead front-end developer, I created an intuitive dashboard using NextJS and Material UI. The application features article management, editorial calendar integration, team collaboration tools, and real-time publishing workflows. Implemented Redux for state management and React-hook-form with Sun Editor for rich text editing capabilities.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Calendar', 'React Hook Form', 'Sun Editor', 'TypeScript'],
        code: '',
        demo: '',
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