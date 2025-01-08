import React, { useState } from 'react';
import { useTestStore } from '../store/testStore';
import { UserInfo } from '../types';

export const UserInfoForm: React.FC = () => {
  const [formData, setFormData] = useState<UserInfo>({
    name: '',
    gender: 'other',
    age: 18
  });
  
  const { setUserInfo } = useTestStore();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo(formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6">个人信息</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">姓名</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">性别</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value as UserInfo['gender'] })}
          >
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="other">其他</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">年龄</label>
          <input
            type="number"
            min="1"
            max="120"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          开始测试
        </button>
      </div>
    </form>
  );
};