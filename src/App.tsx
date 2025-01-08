import React from 'react';
import { useTestStore } from './store/testStore';
import { questions } from './data/questions';
import { UserInfoForm } from './components/UserInfoForm';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';
import './styles/custom.css';

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
    <div className="page-container flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="page-title text-center mb-8">下头测试！！！</h1>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;