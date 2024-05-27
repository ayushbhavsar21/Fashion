import React, { useState, useRef } from 'react';
import './App.css';

export function Translator() {
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [inputError, setInputError] = useState(false);
  const [selectOptions, setSelectOptions] = useState({
    from: 'en',
    to: 'hi',
  });
  const selectToRef = useRef(null);

  const supportedLanguages = {
    hi: 'Hindi',
    bn: 'Bengali',
    mr: 'Marathi',
    pa: 'Punjabi',
  };

  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  const handleTranslation = () => {
    let text = fromText.trim();
    let translateTo = selectToRef.current.value;
    if (!text) {
      setToText('');
      return;
    }

    if (text.length > 750) {
      setInputError(true);
      return;
    } else {
      setInputError(false);
    }

    setToText('Translating...');

    let apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${selectOptions.from}|${translateTo}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.responseData && data.responseData.translatedText) {
          setToText(data.responseData.translatedText);
        } else {
          setToText('Translation not available');
        }
      })
      .catch((error) => {
        console.error('Translation error:', error);
        setToText('Error during translation');
      });
  };

  return (
    <div className="app-container">
      <p className="title">Unlock Communication in Every Language</p>
      <div className="translator-container">
        <div className="text-input">
          <textarea
            spellCheck="false"
            className="from-text"
            placeholder="Enter text"
            value={fromText}
            onChange={(e) => { setFromText(e.target.value); setInputError(false); }}
          ></textarea>
          <textarea
            spellCheck="false"
            readOnly
            className="to-text"
            placeholder="Translation"
            value={toText}
          ></textarea>
        </div>

        <div className="controls">
          <select
            className="language-select"
            value={selectOptions.to}
            onChange={(e) => setSelectOptions({ ...selectOptions, to: e.target.value })}
            ref={selectToRef}
          >
            {Object.keys(supportedLanguages).map((lang) => (
              <option key={lang} value={lang}>
                {supportedLanguages[lang]}
              </option>
            ))}
          </select>
        </div>

        <button
          className="translate-button"
          onClick={handleTranslation}
        >
          Translate Text
        </button>
        {inputError && (
          <p className="error-message">
            Please enter up to 750 characters for translation.
          </p>
        )}
      </div>
    </div>
  );
}

export const translateText = async (text, from = 'en', to = 'mr') => {
    let apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.responseData && data.responseData.translatedText) {
        return data.responseData.translatedText;
      } else {
        return 'Translation not available';
      }
    } catch (error) {
      console.error('Translation error:', error);
      return 'Error during translation';
    }
  };
  
