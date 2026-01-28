import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();

    const contactLinks = [
        {
            icon: Mail,
            label: t('contact.email'),
            value: 'pablo@example.com',
            href: 'mailto:pablo@example.com',
            color: 'bg-red-500 hover:bg-red-600'
        },
        {
            icon: Github,
            label: t('contact.github'),
            value: 'github.com/pabloogl',
            href: 'https://github.com/pabloogl',
            color: 'bg-gray-800 hover:bg-gray-900'
        },
        {
            icon: Linkedin,
            label: t('contact.linkedin'),
            value: 'linkedin.com/in/pablo',
            href: 'https://linkedin.com/in/pablo',
            color: 'bg-blue-600 hover:bg-blue-700'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('contact.title')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        {t('contact.subtitle')}
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {contactLinks.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <a
                                key={index}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transform hover:-translate-y-2"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className={`p-4 ${contact.color} text-white rounded-full transition-colors`}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                            {contact.label}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                                            {contact.value}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
                    <Send size={48} className="mx-auto mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-2">Let's Work Together</h3>
                    <p className="text-primary-100 mb-6">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <a
                        href="mailto:pablo@example.com"
                        className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Send Message
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Pablo. Built with React, Vite & Tailwind CSS.
                </p>
            </div>
        </section>
    );
};

export default Contact;
