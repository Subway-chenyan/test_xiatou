import React from 'react';
import { useTestStore } from '../store/testStore';

export const ResultCard: React.FC = () => {
  const { calculateFinalScore, userInfo } = useTestStore();
  const result = calculateFinalScore();

  return (
    <div className="card p-8 result-card">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">测试结果</h2>
      
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-2">亲爱的 {userInfo?.name}</p>
          <p className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 
                      text-transparent bg-clip-text">{result}</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl">
          <p className="text-gray-700 leading-relaxed">
            感谢参与本次测试！记住，这只是一个娱乐性质的测试，不应该影响你的自我评价。
            每个人都是独特的个体，都有自己的闪光点。
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                     rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
                     transform hover:-translate-y-1"
          >
            重新测试
          </button>
        </div>
      </div>
    </div>
  );
};