import instructor1 from "../assets/images/Instructors/team-1.jpg"
import instructor2 from "../assets/images/Instructors/team-2.jpg"
import instructor3 from "../assets/images/Instructors/team-3.jpg"
import instructor4 from "../assets/images/Instructors/team-4.jpg"

const navItems = [
    {
        id: 1,
        title: "Categories", 
        link: "/courses/",
        is_dropdown: true
    },
    {
        id: 2,
        title: "My Learning",
        link: "/home/my-courses/"
    },
    {
        id: 3,
        title: "Instructor", 
        link: "/"
    }
];

const dummy_courses = [
    {
        id: 1,
        title: "Java 8 New Features In Simple Way",
        description: "Direct Class Room Videos To give Left and Right Anywhere about Lambda Expressions,Streams and More",
        image: "https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg",
        price: 1500,
        rating: 4.7,
        total_review: 2257,
        instructor: "Prabhas Raju",
        time: "2 hoours",
        is_bestseller: true
    },
    {
        id: 2,
        title: "Python Bootcamp 2021 Build 15 working Applications and Games",
        description: "Learn complete python with basics, data science, data visualisation, desktop graphical applications and python for web.",
        image: "https://miro.medium.com/max/1400/1*RJMxLdTHqVBSijKmOO5MAg.jpeg",
        price: 1700,
        rating: 4.2,
        total_review: 3257,
        instructor: "Subas Kumar",
        time: "1.2 hoours",
        is_bestseller: true
    },
    {
        id: 3,
        title: "Java 8 New Features In Simple Way",
        description: "Direct Class Room Videos To give Left and Right Anywhere about Lambda Expressions,Streams and More",
        image: "https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg",
        price: 1500,
        rating: 3.8,
        total_review: 1157,
        instructor: "Vijay Deverokonda",
        time: "2 hoours",
        is_bestseller: false
    },
    {
        id: 4,
        title: "The DevOps Essentials - The Handbook",
        description: "All the basics you need to know - Get started with DevOps",
        image: "https://media.istockphoto.com/photos/devops-concept-picture-id1303169188",
        price: 2500,
        rating: 4.5,
        total_review: 5557,
        instructor: "Allu Arjun",
        time: "2.5 hoours",
        is_bestseller: true
    },
    {
        id: 5,
        title: "React basic in just 1 hour",
        description: "The quick guide to learn basic concepts and workflow of how to build React app",
        image: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/regular_800x320_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
        price: 750,
        rating: 3.7,
        total_review: 1157,
        instructor: "Extra gass",
        time: "5 hoours",
        is_bestseller: true
    },
    {
        id: 6,
        title: "Python Bootcamp 2021 Build 15 working Applications and Games",
        description: "Learn complete python with basics, data science, data visualisation, desktop graphical applications and python for web.",
        image: "https://miro.medium.com/max/1400/1*RJMxLdTHqVBSijKmOO5MAg.jpeg",
        price: 1700,
        rating: 4.2,
        total_review: 3257,
        instructor: "Subas Kumar",
        time: "1.2 hoours",
        is_bestseller: true
    },
]

const dummy_topics = ["Python", "JavaScript", "Data Science", "C#", "Machine Learning", "Web Development", "React", "Java","Unity","C++"]

const dummy_instructor = [
    {
        name: "Dr. Angela yu",
        image: instructor1,
        rating: 4.7,
        no_students: 5350,
        cources: 25,
        profficience: "React, Python"
    },
    {
        name: "Jose Portilla",
        image: instructor2,
        rating: 4.5,
        no_students: 3350,
        cources: 32,
        profficience: "Django, JavaScript"
    },
    {
        name: "Jonas Schmedtmann",
        image: instructor3,
        rating: 4.3,
        no_students: 1355,
        cources: 11,
        profficience: "Data Scrience, C++"
    },
    {
        name: "Andrei Neagoie",
        image: instructor4,
        rating: 4.2,
        no_students: 7350,
        cources: 20,
        profficience: "Django, Python"
    },
    {
        name: "Subas Kumar",
        image: instructor4,
        rating: 4.2,
        no_students: 7350,
        cources: 20,
        profficience: "Django, Python"
    },
]

const category = [
    {
        "id": 1,
        "title": "Development",
        "slug": "slug49761rue",
        "sub_category": [
            {
                "id": 1,
                "title": "Web Development",
                "slug": "slug4967qa97",
                "category": 1
            },
            {
                "id": 2,
                "title": "Mobile Development",
                "slug": "slug43757y3q",
                "category": 1
            },
            {
                "id": 3,
                "title": "Game Development",
                "slug": "slug9673iqdl",
                "category": 1
            },
            {
                "id": 4,
                "title": "Programming Languages",
                "slug": "slug2393q2im",
                "category": 1
            },
            {
                "id": 5,
                "title": "Data Science",
                "slug": "slug186465t4",
                "category": 1
            }
        ]
    },
    {
        "id": 2,
        "title": "IT & Software",
        "slug": "slug8989nhso",
        "sub_category": [
            {
                "id": 6,
                "title": "Hardware",
                "slug": "slug5879gvkz",
                "category": 2
            },
            {
                "id": 7,
                "title": "Network & Security",
                "slug": "slug3467erze",
                "category": 2
            }
        ]
    },
    {
        "id": 3,
        "title": "Business",
        "slug": "slug52029n81",
        "sub_category": []
    },
    {
        "id": 4,
        "title": "Design",
        "slug": "slug2495vhmd",
        "sub_category": [
                {
                    "id": 8,
                    "title": "Ux Design",
                    "slug": "slug4967qa97",
                    "category": 1
                },
        ]
    },
    {
        "id": 5,
        "title": "Marketing",
        "slug": "slug617jk1u",
        "sub_category": []
    },
    {
        "id": 6,
        "title": "Finance & Accounting",
        "slug": "slug617jk1u",
        "sub_category": []
    },
    {
        "id": 7,
        "title": "Personal Development",
        "slug": "slug617jk1u",
        "sub_category": []
    }
]

const LanguageFilter = [
    {
        "title": "English",
        "value": "ENGLISH",
    },
    {
        "title": "Hindi",
        "value": "HINDI",
    },
    {
        "title": "Odia",
        "value": "ODIA",
    },
    {
        "title": "Telugu",
        "value": "TELUGU",
    },
    {
        "title": "Tamil",
        "value": "TAMIL",
    },
    {
        "title": "Bangla",
        "value": "BANGLA",
    },
    {
        "title": "Portugues",
        "value": "PORTUGUES",
    },

]

const ratingFilter = [
    {
        "title": "4.5 & up", "value": 4.5, "no_review": "10,200"
    },
    {
        "title": "4.0 & up", "value": 4.0, "no_review": "9,200"
    },
    {
        "title": "3.5 & up", "value": 3.5, "no_review": "7,200"
    },
    {
        "title": "3.0 & up", "value": 3.0, "no_review": "10,200"
    },
]

export {
    navItems,
    dummy_courses,
    dummy_topics,
    dummy_instructor,
    category,
    LanguageFilter,
    ratingFilter,
}