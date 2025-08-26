import { useState, useEffect } from 'react';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch('https://api.github.com/users/tatsuyax25')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('GitHub API error:', err));
  }, []);

  if (!mounted || !stats) return <div className="text-center py-2">Loading GitHub stats...</div>;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <h3 className="text-lg font-bold mb-3 text-center">GitHub Activity</h3>
      
      <div className="grid grid-cols-4 gap-3 text-center">
        <div>
          <div className="text-lg font-bold text-blue-500">{stats.public_repos}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Repos</div>
        </div>
        <div>
          <div className="text-lg font-bold text-green-500">{stats.followers}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Followers</div>
        </div>
        <div>
          <div className="text-lg font-bold text-purple-500">{stats.following}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Following</div>
        </div>
        <div>
          <div className="text-lg font-bold text-orange-500">{new Date(stats.created_at).getFullYear()}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Since</div>
        </div>
      </div>
    </div>
  );
}