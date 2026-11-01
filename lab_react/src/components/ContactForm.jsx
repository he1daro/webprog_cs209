import { useState, useEffect } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []); 

    if (!isOpen) {
        return null; 
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-2xl w-11/12 max-w-md relative transition-colors duration-300">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl font-bold leading-none"
                >
                    &times;
                </button>
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                    Зворотний зв'язок
                </h3>
                <form action="https://formspree.io/f/mqppyeqn" method="POST" className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Ім'я:</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-3 py-2" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email:</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-3 py-2" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Номер телефону:</label>
                        <input type="tel" id="phone" name="phone" required className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-3 py-2" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Повідомлення:</label>
                        <textarea id="message" name="message" rows="4" required className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-3 py-2"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors">
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;