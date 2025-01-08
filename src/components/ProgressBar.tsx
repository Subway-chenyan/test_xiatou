import React from 'react';
import { useTestStore } from '../store/testStore';
import { questions } from '../data/questions';

export const ProgressBar: React.FC = () => {
  const { currentQuestionIndex } = useTestStore();
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>进度</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};