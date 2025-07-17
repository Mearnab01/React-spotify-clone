import {
  Music,
  TrendingUp,
  RefreshCw,
  Headphones,
  HelpCircle,
} from "lucide-react";

const Error = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl">
    <div className="relative mb-6">
      <Music className="text-6xl text-purple-500 opacity-20" size={64} />
    </div>

    <h2 className="text-2xl font-bold text-white mb-2">No Songs Found</h2>

    <p className="text-gray-400 max-w-md mb-6">
      We couldn't find any songs matching your search. Try different keywords or
      browse our collection.
    </p>

    <div className="flex gap-4">
      <button className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all">
        <TrendingUp size={18} />
        Explore Trending
      </button>
      <button className="flex items-center gap-2 px-6 py-2 border border-gray-600 hover:border-gray-500 text-gray-300 rounded-full font-medium transition-all">
        <RefreshCw size={18} />
        Try Again
      </button>
    </div>

    <div className="mt-8 text-xs text-gray-500 flex items-center">
      <Headphones size={14} className="mr-1" />
      <span className="mr-2">Need help?</span>
      <a href="#" className="text-purple-400 hover:underline flex items-center">
        <HelpCircle size={14} className="mr-1" />
        Contact Support
      </a>
    </div>
  </div>
);

export default Error;
