import React from 'react';
import { questions } from '../data/questions';
import { useTestStore } from '../store/testStore';

export const ProgressBar: React.FC = () => {
  const { currentQuestionIndex } = useTestStore();
  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};