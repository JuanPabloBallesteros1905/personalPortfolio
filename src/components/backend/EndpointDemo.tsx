import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Copy, Code, Database, Server } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import apiClient from '../../api/client';
import toast from 'react-hot-toast';
import clsx from 'clsx';

interface Endpoint {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  parameters?: Record<string, any>;
  exampleResponse: any;
}

const endpoints: Endpoint[] = [
  {
    id: 'get-users',
    method: 'GET',
    path: '/users',
    description: 'Retrieve all users with pagination',
    exampleResponse: {
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com' }
      ],
      pagination: { page: 1, limit: 10, total: 50 }
    }
  },
  {
    id: 'create-user',
    method: 'POST',
    path: '/users',
    description: 'Create a new user',
    parameters: {
      name: 'string',
      email: 'string',
      role: 'string'
    },
    exampleResponse: {
      message: 'User created successfully',
      user: { id: 4, name: 'New User', email: 'new@example.com' }
    }
  },
  {
    id: 'get-projects',
    method: 'GET',
    path: '/projects',
    description: 'Get all projects',
    exampleResponse: {
      projects: [
        { id: 1, name: 'Mobile App', technologies: ['React Native'] }
      ]
    }
  },
  {
    id: 'get-stats',
    method: 'GET',
    path: '/stats',
    description: 'Get development statistics',
    exampleResponse: {
      metrics: { totalProjects: 15, mobileApps: 8 },
      languages: { JavaScript: 85, TypeScript: 80 }
    }
  }
];

export const EndpointDemo: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint>(endpoints[0]);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleTestEndpoint = async () => {
    setLoading(true);
    try {
      const result = await apiClient.request({
        method: selectedEndpoint.method,
        url: selectedEndpoint.path,
        data: selectedEndpoint.parameters
      });
      setResponse(result.data);
      toast.success('Request completed successfully!');
    } catch (error) {
      toast.error('Request failed. Please try again.');
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateCurlCommand = () => {
    const baseUrl = window.location.origin;
    let command = `curl -X ${selectedEndpoint.method} "${baseUrl}/api${selectedEndpoint.path}"`;
    
    if (selectedEndpoint.parameters) {
      command += ` \\\n  -H "Content-Type: application/json" \\\n  -d '${JSON.stringify(selectedEndpoint.parameters, null, 2)}'`;
    }
    
    return command;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const methodColors = {
    GET: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    POST: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    PUT: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    DELETE: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="space-y-6">
      <Card className="p-6" gradient>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              API Demo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Interactive backend API testing
            </p>
          </div>
        </div>

        {/* Endpoint Selection */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {endpoints.map((endpoint) => (
            <motion.button
              key={endpoint.id}
              onClick={() => setSelectedEndpoint(endpoint)}
              className={clsx(
                'p-4 rounded-lg border text-left transition-all duration-200',
                selectedEndpoint.id === endpoint.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Badge className={methodColors[endpoint.method]} size="sm">
                  {endpoint.method}
                </Badge>
                <code className="text-sm font-mono text-gray-600 dark:text-gray-300">
                  {endpoint.path}
                </code>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {endpoint.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Test Controls */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            onClick={handleTestEndpoint}
            loading={loading}
            className="flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            Test Endpoint
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2"
          >
            <Code className="w-4 h-4" />
            {showCode ? 'Hide' : 'Show'} Code
          </Button>
        </div>

        {/* Code Example */}
        {showCode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6"
          >
            <div className="relative">
              <SyntaxHighlighter
                language="bash"
                style={vscDarkPlus}
                className="rounded-lg"
              >
                {generateCurlCommand()}
              </SyntaxHighlighter>
              <button
                onClick={() => copyToClipboard(generateCurlCommand())}
                className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Response Display */}
        {(response || selectedEndpoint.exampleResponse) && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Response
              </span>
              {response && (
                <Badge variant="success" size="sm">
                  Live
                </Badge>
              )}
            </div>
            <div className="relative">
              <SyntaxHighlighter
                language="json"
                style={vscDarkPlus}
                className="rounded-lg"
              >
                {JSON.stringify(response || selectedEndpoint.exampleResponse, null, 2)}
              </SyntaxHighlighter>
              <button
                onClick={() => copyToClipboard(JSON.stringify(response || selectedEndpoint.exampleResponse, null, 2))}
                className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};