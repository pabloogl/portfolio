import { useTranslation } from 'react-i18next';
import {
    Database,
    BarChart3,
    Brain,
    Code2,
    GitBranch,
    Cloud,
    Terminal,
    Layers,
    Workflow
} from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();

    const skillCategories = [
        {
            title: t('skills.categories.data_science'),
            skills: [
                { name: 'Python', icon: Code2 },
                { name: 'Machine Learning', icon: Brain },
                { name: 'Data Analysis', icon: BarChart3 },
                { name: 'Statistical Modeling', icon: Workflow }
            ]
        },
        {
            title: t('skills.categories.engineering'),
            skills: [
                { name: 'SQL / NoSQL', icon: Database },
                { name: 'ETL Pipelines', icon: Layers },
                { name: 'Apache Spark', icon: Workflow },
                { name: 'Cloud Platforms', icon: Cloud }
            ]
        },
        {
            title: t('skills.categories.tools'),
            skills: [
                { name: 'Git', icon: GitBranch },
                { name: 'Docker', icon: Terminal },
                { name: 'AWS / GCP', icon: Cloud },
                { name: 'Airflow', icon: Workflow }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('skills.title')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        {t('skills.subtitle')}
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skillIndex}
                                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                                        >
                                            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                                                <Icon size={20} className="text-primary-600 dark:text-primary-400" />
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Tech Stack */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Also experienced with
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Jupyter', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Kubernetes'].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
