import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@headlessui/react'

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    useEffect(() => {
        document.body.dir = i18n.dir()
    }, [i18n, i18n.language]);

    return (
        <div className="w-fit">
            <Select name="language" aria-label="language" className="form-select appearance-none block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-primary focus:outline-none data-[hover]:shadow data-[focus]:bg-blue-100 cursor-pointer"
                onChange={changeLanguage}
                value={i18n.language}>
                <option value="en">🇺🇸 English</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
            </Select>
        </div>
    );
};

export default LanguageSwitcher;
