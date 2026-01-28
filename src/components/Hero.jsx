import { useTranslation } from 'react-i18next';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            {/* Floating shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="space-y-8">
                    {/* Greeting */}
                    <div className="space-y-4">
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
                            {t('hero.greeting')}
                        </p>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                            <span className="block text-gray-900 dark:text-white">Pablo</span>
                            <span className="block text-gradient mt-2">
                                {t('hero.title')}
                            </span>
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t('hero.description')}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <a
                            href="#projects"
                            className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <span>{t('hero.cta_projects')}</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                            {t('hero.cta_contact')}
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <div className="pt-16 animate-bounce">
                        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto flex justify-center">
                            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>
    );
};

export default Hero;
