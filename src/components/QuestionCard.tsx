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
    <div className="card p-8">
      <ProgressBar />
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">{question.text}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = answers[question.id]?.moralScore === option.moralScore && 
                           answers[question.id]?.actionScore === option.actionScore;
          return (
            <button
              key={index}
              onClick={() => setAnswer(question.id, option.moralScore, option.actionScore)}
              className={`option-button w-full p-4 text-left rounded-xl transition-all
                ${isSelected 
                  ? 'bg-blue-500 text-white selected-option shadow-lg' 
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {option.text}
            </button>
          );
        })}
      </div>
      <div className="mt-8 flex justify-between">
        <button
          onClick={previousQuestion}
          className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 
                   transition-colors hover:bg-gray-100 rounded-lg flex items-center gap-2"
        >
          <span>←</span>
          <span>返回上一题</span>
        </button>
      </div>
    </div>
  );
};