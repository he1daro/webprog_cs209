import { useState, useEffect } from 'react';

function Footer() {
    const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

    useEffect(() => {
        const systemData = {
            userAgent: navigator.userAgent,
            platform: navigator.platform
        };

        localStorage.setItem('userSystemData', JSON.stringify(systemData));

        const savedDataString = localStorage.getItem('userSystemData');
        const parsedInfo = JSON.parse(savedDataString);

        if (parsedInfo) {
            setSysInfo({
                os: parsedInfo.platform,
                browser: parsedInfo.userAgent
            });
        }
    }, []);

    return (
        <footer className="border-t border-slate-200 dark:border-slate-700 py-4 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 text-sm">
            <p className="m-0 text-center text-slate-500 dark:text-slate-400">Львів 2026</p>
            
            {sysInfo.os && sysInfo.browser && (
                <p className="m-0 text-center text-xs mt-2 text-slate-500 dark:text-slate-400">
                    ОС: {sysInfo.os} | Браузер: {sysInfo.browser}
                </p>
            )}
        </footer>
    );
}

export default Footer;