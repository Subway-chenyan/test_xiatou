import React from 'react';
import { useTestStore } from './store/testStore';
import { questions } from './data/questions';
import { UserInfoForm } from './components/UserInfoForm';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';

function App() {
  const { currentQuestionIndex, userInfo } = useTestStore();
  
  const renderContent = () => {
    if (!userInfo) {
      return <UserInfoForm />;
    }
    
    if (currentQuestionIndex >= questions.length) {
      return <ResultCard />;
    }
    
    return <QuestionCard question={questions[currentQuestionIndex]} />;
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">下头测试！！！</h1>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;