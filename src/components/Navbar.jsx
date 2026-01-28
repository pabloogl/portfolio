import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true); // Default to dark mode
    const [showLangMenu, setShowLangMenu] = useState(false);

    useEffect(() => {
        // Check localStorage, default to dark mode if not set
        const savedMode = localStorage.getItem('darkMode');
        const isDark = savedMode === null ? true : savedMode === 'true';
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save the default if not already saved
        if (savedMode === null) {
            localStorage.setItem('darkMode', 'true');
        }
    }, []);


    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLangMenu(false);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'es', name: 'Español', flag: '🇪🇸' }
    ];

    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

    const navLinks = [
        { key: 'home', href: '#home' },
        { key: 'skills', href: '#skills' },
        { key: 'projects', href: '#projects' },
        { key: 'contact', href: '#contact' }
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-2xl font-bold text-gradient">
                            Portfolio
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a
                                key={link.key}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                            >
                                {t(`nav.${link.key}`)}
                            </a>
                        ))}
                    </div>

                    {/* Right side controls */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setShowLangMenu(!showLangMenu)}
                                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <Globe size={20} />
                                <span className="text-sm">{currentLang.flag}</span>
                            </button>

                            {showLangMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                                    {languages.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3 ${i18n.language === lang.code ? 'bg-gray-50 dark:bg-gray-700' : ''
                                                }`}
                                        >
                                            <span>{lang.flag}</span>
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map(link => (
                            <a
                                key={link.key}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                {t(`nav.${link.key}`)}
                            </a>
                        ))}

                        {/* Mobile Language Selector */}
                        <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                            <div className="text-sm text-gray-500 dark:text-gray-400 px-3 py-2">
                                Language / Idioma / Sprache
                            </div>
                            {languages.map(lang => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        changeLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-3 py-2 text-left rounded-lg flex items-center space-x-3 ${i18n.language === lang.code
                                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    <span>{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
