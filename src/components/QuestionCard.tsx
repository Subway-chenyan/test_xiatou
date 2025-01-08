import React from 'react';
import { Question } from '../types';
import { useTestStore } from '../store/testStore';
import { ProgressBar } from './ProgressBar';

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const { setAnswer, answers, previousQuestion } = useTestStore();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
      <ProgressBar />
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setAnswer(question.id, option.moralScore, option.actionScore)}
            className={`w-full p-3 text-left rounded-lg transition-colors ${
              answers[question.id]?.moralScore === option.moralScore && 
              answers[question.id]?.actionScore === option.actionScore
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={previousQuestion}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← 返回上一题
        </button>
      </div>
    </div>
  );
};