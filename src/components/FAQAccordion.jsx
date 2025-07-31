import React, { useState } from "react";
import { ChevronDown, Sun, Moon } from "lucide-react";

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [isDarkMode, setIsDarkMode] = useState(true);

  const faqData = [
    {
      id: 1,
      question: "Q1. Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 2,
      question: "Q2. Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 3,
      question: "Q3. Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      question: "Q4. Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 5,
      question: "Q5. Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
          }`}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}>
            Frequently asked questions
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg border transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200 shadow-sm"
              }`}>
              {/* Question Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200 ${
                  isDarkMode
                    ? "text-white hover:bg-gray-750"
                    : "text-gray-800 hover:bg-gray-50"
                }`}>
                <span className="text-lg font-medium pr-4">
                  {item.question}
                </span>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.has(item.id) ? "rotate-180" : "rotate-0"
                  }`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isDarkMode
                        ? "bg-cyan-400 text-gray-900"
                        : "bg-blue-100 text-blue-600"
                    }`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(item.id)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <div
                  className={`px-6 pb-5 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                  <div
                    className={`pt-2 border-t transition-colors duration-300 ${
                      isDarkMode ? "border-gray-700" : "border-gray-200"
                    }`}>
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Version Preview */}
        <div className="mt-16 lg:hidden">
          <h2
            className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}>
            Mobile Preview
          </h2>
          <div className="space-y-3">
            {faqData.slice(0, 3).map((item) => (
              <div
                key={`mobile-${item.id}`}
                className={`rounded-lg border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200 shadow-sm"
                }`}>
                <button
                  onClick={() => toggleItem(`mobile-${item.id}`)}
                  className={`w-full px-4 py-4 flex items-center justify-between text-left text-sm transition-colors duration-200 ${
                    isDarkMode
                      ? "text-white hover:bg-gray-750"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}>
                  <span className="font-medium pr-3">{item.question}</span>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openItems.has(`mobile-${item.id}`)
                        ? "rotate-180"
                        : "rotate-0"
                    }`}>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isDarkMode
                          ? "bg-cyan-400 text-gray-900"
                          : "bg-blue-100 text-blue-600"
                      }`}>
                      <ChevronDown size={12} />
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(`mobile-${item.id}`)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}>
                  <div
                    className={`px-4 pb-4 text-sm transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    <div
                      className={`pt-2 border-t transition-colors duration-300 ${
                        isDarkMode ? "border-gray-700" : "border-gray-200"
                      }`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
