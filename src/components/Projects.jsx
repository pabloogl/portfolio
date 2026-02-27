import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Load projects from JSON file
        fetch('./projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error loading projects:', error));
    }, []);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('projects.title')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        {t('projects.subtitle')}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Empty State */}
                {projects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">
                            Loading projects...
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
