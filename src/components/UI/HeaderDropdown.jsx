import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../data/languages";

export default function HeaderDropdown({
  currentLanguage,
  handleChangeLanguage,
  onClose,
}) {
  const { t } = useTranslation("global");

  return (
    <div className="lg:absolute lg:top-14 lg:right-5 mt-2 bg-base-200 border border-gray-200 rounded-lg shadow-lg w-32 z-50">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleChangeLanguage(lang.code)}
          className={`flex items-center justify-between w-full text-left px-4 py-2 rounded hover:bg-accent ${
            currentLanguage === lang.code ? "bg-accent" : ""
          }`}
        >
          <p>{lang.code}</p>
          <img
            src={lang.flag}
            alt={lang.code}
            className="inline ml-2"
            width={20}
            height={20}
          />
        </button>
      ))}
    </div>
  );
}
