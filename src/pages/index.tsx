import type { NextPage } from 'next';
import ChatInterface from '../components/chat/ChatInterface';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow h-20">
        <div className="max-w-4xl mx-auto h-full px-4 flex items-center">
          <h1 className="text-3xl font-bold text-gray-900">ConsensAI</h1>
        </div>
      </header>
      <main className="h-[calc(100vh-80px)]">
        <ChatInterface />
      </main>
    </div>
  );
};

export default Home;