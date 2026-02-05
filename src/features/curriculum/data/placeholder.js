import { FREE_COURSE_SLUG } from './schema';

const placeholderCourses = [
    {
        id: FREE_COURSE_SLUG,
        title: 'Health & Wellness Mastery',
        description: 'Build lasting habits for physical and mental well-being.',
        isPremium: false,
        modules: [
            {
                id: 'basics',
                title: 'Basics',
                order: 1,
                lessons: [
                    {
                        id: 'sleep-basics',
                        title: 'Sleep Fundamentals',
                        duration: '8 min',
                        content: {
                            sections: [
                                { type: 'text', content: 'Sleep is the foundation of health. This lesson covers why it matters and how to improve it.' },
                                { type: 'list', title: 'Key points', items: ['Aim for 7–9 hours', 'Keep a consistent schedule', 'Limit screens before bed'] },
                            ],
                            quiz: [
                                { question: 'How many hours of sleep do experts recommend?', options: ['5–6', '7–9', '10–12'], correctIndex: 1, explanation: 'Most adults need 7–9 hours for optimal health.' },
                            ],
                        },
                    },
                    {
                        id: 'hydration',
                        title: 'Hydration Basics',
                        duration: '5 min',
                        content: {
                            sections: [
                                { type: 'text', content: 'Staying hydrated supports energy, focus, and overall health.' },
                                { type: 'list', title: 'Tips', items: ['Drink water throughout the day', 'Use a reusable bottle', 'Check urine color as a simple cue'] },
                            ],
                            quiz: [],
                        },
                    },
                ],
            },
            {
                id: 'habits',
                title: 'Building Habits',
                order: 2,
                lessons: [
                    {
                        id: 'habit-stack',
                        title: 'Habit Stacking',
                        duration: '6 min',
                        content: {
                            sections: [
                                { type: 'text', content: 'Stack a new habit onto an existing one to make it stick.' },
                                { type: 'list', title: 'Example', items: ['After I pour my coffee, I will do 5 stretches.', 'After I brush my teeth, I will floss.'] },
                            ],
                            quiz: [
                                { question: 'What is habit stacking?', options: ['Doing many habits at once', 'Attaching a new habit to an existing one', 'Breaking a habit'], correctIndex: 1, explanation: 'Habit stacking means pairing a new behavior with a current routine.' },
                            ],
                        },
                    },
                ],
            },
        ],
    },
];

export default placeholderCourses;
