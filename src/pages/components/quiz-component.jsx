import crypto from 'crypto';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const AnswerSequence = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
}

const QuizComponent = ({ name, answers = [], correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answerIndex, setAnswerIndex] = useState(-1);
  const [result, setResult] = useState('');
  const hashCode = generateMD5(name);

  const handleAnswerChange = (event, index) => {
    setResult('');
    setSelectedAnswer(event.target.value);
    setAnswerIndex(index)
  };

  const checkAnswer = () => {
    if (selectedAnswer === correctAnswer) {
      setResult('回答正确！🎉');
    } else {
      setResult('回答错误，请再试一次。');
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 m-12 border rounded-md shadow-md">
      <h2 className="py-2 text-2xl font-bold mb-4 flex items-center justify-center">
        <span role="img" aria-label="question mark" className="mr-2">
          <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-500 h-7 w-7" />
        </span>
        <span>是时候做个测验了！</span>
      </h2>
      <legend class="text-base font-semibold leading-6">{name}</legend>
      <div class="mt-6 space-y-4">
        {
          answers.map((answer, index) => <div key={index} class="flex items-center gap-x-3">
            <input
              value={answer}
              checked={selectedAnswer === answer}
              onChange={(e) => handleAnswerChange(e, index)}
              id={`${hashCode}-${index}`}
              name={name}
              type="radio"
              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor={`${hashCode}-${index}`} class="block text-sm font-medium leading-6">{AnswerSequence[index]}：{answer}</label>
          </div>)
        }
      </div>
      <div className="mt-4 text-right">
        <button onClick={checkAnswer} className="px-3 py-1.5 bg-blue-500 text-white rounded-md">
          检查答案
        </button>
      </div>
      {result && (
        <div className={`mt-4 text-lg font-semibold ${result.includes('正确') ? 'text-green-500' : 'text-red-500'}`}>
          当前答案 {AnswerSequence[answerIndex] || '未选择'}，{result}
        </div>
      )}
    </div>
  );
};

function generateMD5(input) {
  return crypto.createHash('md5').update(input).digest('hex');
}

export default QuizComponent;
