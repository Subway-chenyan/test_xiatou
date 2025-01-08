import React from 'react';
import { useTestStore } from '../store/testStore';
import { calculateResult, getResultDescription } from '../data/questions';

export const ResultCard: React.FC = () => {
  const { moralScore, actionScore, userInfo, resetTest } = useTestStore();
  
  const title = calculateResult(moralScore, actionScore, userInfo?.gender || 'other');
  const description = getResultDescription(title);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center w-full">测试结果</h2>
      <div className="space-y-4 w-full max-w-md">
        <div>
          <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        
        <div className="space-y-2 w-full">
          <div className="flex justify-between items-center">
            <span>道德分数:</span>
            <span>{moralScore}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>行动分数:</span>
            <span>{actionScore}</span>
          </div>
        </div>
        
        <div className="flex justify-center w-full">
          <button
            onClick={resetTest}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            重新测试
          </button>
        </div>
      </div>
    </div>
  );
};