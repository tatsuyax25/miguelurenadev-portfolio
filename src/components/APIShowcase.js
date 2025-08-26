export default function APIShowcase() {
  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/contact',
      description: 'Send contact form emails via Nodemailer with validation',
      request: `{
  "name": "John Doe",
  "email": "john@example.com", 
  "subject": "Inquiry",
  "message": "Hello!"
}`,
      response: `{
  "message": "Message sent successfully!"
}`
    },
    {
      method: 'GET',
      endpoint: '/api/movies?q={query}',
      description: 'Movie search with trending algorithm (Cinema Search project)',
      response: `{
  "results": [
    {
      "title": "Movie Title",
      "trending": 85,
      "year": 2024,
      "poster": "image_url"
    }
  ]
}`
    }
  ];

  return (
    <section className="py-8">
      <h3 className="text-2xl font-bold mb-6 text-center">API Endpoints I&apos;ve Built</h3>
      <div className="max-w-4xl mx-auto space-y-6">
        {apiEndpoints.map((api, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                api.method === 'GET' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}>
                {api.method}
              </span>
              <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm font-mono">
                {api.endpoint}
              </code>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{api.description}</p>
            
            {api.request && (
              <details className="mb-3">
                <summary className="cursor-pointer text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                  Request Body
                </summary>
                <pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-xs mt-2 overflow-x-auto">
                  <code>{api.request}</code>
                </pre>
              </details>
            )}
            
            <details>
              <summary className="cursor-pointer text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                Response
              </summary>
              <pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-xs mt-2 overflow-x-auto">
                <code>{api.response}</code>
              </pre>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}