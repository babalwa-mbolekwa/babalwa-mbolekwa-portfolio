import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import figma from './figma.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import html_icon from "./html.png";
import css_icon from "./css.png";
import js_icon from "./javascript.png";
import react_icon from "./react.png";
import typescript_icon from "./typescript.png";
import tailwindcss_icon from "./tailwindcss.png";
import shadcn_icon from "./shadcn-ui.png";
import mui_icon from "./mu5.png";
import nextjs_icon from "./nextjs.png";
import nodejs_icon from "./node.png";
import python_icon from "./python.png";
import sql_icon from "./sql.png";
import github_icon from "./github.png";
import shopify_icon from "./shopify.png";
import jira_icon from "./jira.png";
import confluence_icon from "./confluence.png";
import story_book_icon from "./storybook.png";
import wordpress_icon from "./wordpress.png";

import work1 from "./work01.jpg";
import work2 from "./work02.jpg";
import work3 from "./work03.jpg";
import work4 from "./work04.png";
import work5 from "./work05.png";
import work6 from "./work06.png";
import work7 from "./work07.png";

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    figma,
    git,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    html_icon,
    css_icon,
    js_icon,
    react_icon,
    typescript_icon,
    tailwindcss_icon,
    shadcn_icon,
    mui_icon,
    nextjs_icon,
    nodejs_icon,
    python_icon,
    sql_icon,
    github_icon,
    shopify_icon,
    jira_icon,
    confluence_icon,
    story_book_icon,
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
    wordpress_icon
};

export const workData = [
    {
        title: 'My Portfolio Website',
        techStack: 'Next.js + Tailwind CSS • ',
        description: 'Performance-optimized personal portfolio with responsive design',
        bgImage: assets.work1.src,
        workUrl: "https://babalwambolekwa.netlify.app/"
    },
    {
        title: 'Restaurant Platform',
        techStack: 'React • ',
        description: 'Interactive dining website with menu visualization and entertainment features',
        bgImage: assets.work2.src,
        workUrl: "https://babalwa-mbolekwa.github.io/grooveavenue/"
    },
    {
        title: 'YouTube clone',
        techStack: 'React + Material-UI + YouTube API • ',
        description: 'Feature-rich video platform replica with search functionality',
        bgImage: assets.work3.src,
        workUrl: "https://babalwayoutubeclone.netlify.app/"
    },
    {
        title: 'Memory Game',
        techStack: 'JavaScript + HTML5 + CSS3 • ',
        description: 'Engaging card-matching game with intuitive UI and moves count',
        bgImage: assets.work4.src,
        workUrl: "https://babalwa-mbolekwa.github.io/memory-game/"
    },
    {
        title: 'Tic Tac Toe Game',
        techStack: 'JavaScript + HTML5 + CSS3 • ',
        description: 'Engaging two-player game for marking spaces with Xs & Os',
        bgImage: assets.work5.src,
        workUrl: "https://babalwa-mbolekwa.github.io/tic-tac-toe/"
    },
    {
        title: 'Plinko Game',
        techStack: 'PIXI.js + Tween.js • ',
        description: 'Responsive and interactive game with animated ball movement',
        bgImage: assets.work6.src,
        workUrl: "https://plinko-game-v2.netlify.app/"
    },
    {
        title: 'Music player',
        techStack: 'HTML + CSS + JavaScript • ',
        description: 'Responsive music player with play and pause controls',
        bgImage: assets.work7.src,
        workUrl: "https://babalwa-mbolekwa.github.io/music-player/"
    },
    
]

export const serviceData = [
    { icon: assets.web_icon, title: 'End-to-End Web Application Development', description: 'I build responsive, accessible web applications from concept to deployment — combining modern UI/UX design implementation with full-stack development for seamless user experiences.' },
    { icon: assets.graphics_icon, title: 'Cross-Functional Collaboration & Technical Leadership', description: 'I thrive in cross-functional teams, bridging design and development through Figma-to-code workflows, while offering mentoring, code reviews, and agile project leadership to drive team success.' },
    { icon: assets.ui_icon, title: 'Open-Source & Community Engagement', description: 'I actively contribute to open-source platforms and participate in tech events—sharing knowledge, mentoring developers, and fostering collaborative learning communities around me.' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Experience', description: 'Responsive web design, Test-driven development, Cross-functional team collaboration, Mentoring, Open source contribution' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education & Certifications', description: 'National Diploma in Computer Systems Engineering.' },
    // { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

// export const toolsData = [
//     assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
// ];

export const toolsData = [
    {
        name: "HTML",
        icon: assets.html_icon
    },
    {
        name: "CSS",
        icon: assets.css_icon
    },
    {
        name: "JavaScript",
        icon: assets.js_icon
    },
    {
        name: "React",
        icon: assets.react_icon
    },
    {
        name: "TypeScript",
        icon: assets.typescript_icon
    },
    {
        name: "Tailwind CSS",
        icon: assets.tailwindcss_icon
    },
    {
        name: "Shadcn",
        icon: assets.shadcn_icon
    },
    {
        name: "Material UI",
        icon: assets.mui_icon
    },
    {
        name: "Storybook",
        icon: assets.story_book_icon
    },
    {
        name: "NextJS",
        icon: assets.nextjs_icon
    },
    {
        name: "NodeJS",
        icon: assets.nodejs_icon
    },
    {
        name: "Wordpress",
        icon: assets.wordpress_icon
    },
    {
        name: "Python",
        icon: assets.python_icon
    },
    {
        name: "SQL",
        icon: assets.sql_icon
    },
    {
        name: "Git",
        icon: assets.git
    },
    {
        name: "GitHub",
        icon: assets.github_icon
    },
    {
        name: "Shopify",
        icon: assets.shopify_icon
    },
    {
        name: "JIRA",
        icon: assets.jira_icon
    },
    {
        name: "Confluence",
        icon: assets.confluence_icon
    },
    {
        name: "Figma",
        icon: assets.figma
    }
]