import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', ({ request }) => {
    return HttpResponse.json({
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'moderator' }
      ],
      pagination: {
        page: 1,
        limit: 10,
        total: 3
      }
    });
  }),

  http.post('/api/users', ({ request }) => {
    return HttpResponse.json({
      message: 'User created successfully',
      user: {
        id: 4,
        name: 'New User',
        email: 'newuser@example.com',
        role: 'user',
        createdAt: new Date().toISOString()
      }
    }, { status: 201 });
  }),

  http.get('/api/projects', ({ request }) => {
    return HttpResponse.json({
      projects: [
        {
          id: 1,
          name: 'E-commerce Mobile App',
          description: 'Full-stack mobile application with React Native',
          technologies: ['React Native', 'Node.js', 'MongoDB'],
          status: 'completed'
        },
        {
          id: 2,
          name: 'Social Media Dashboard',
          description: 'Real-time analytics dashboard with WebSocket integration',
          technologies: ['Flutter', 'Firebase', 'WebSocket'],
          status: 'in-progress'
        }
      ]
    });
  }),

  http.get('/api/stats', ({ request }) => {
    return HttpResponse.json({
      metrics: {
        totalProjects: 15,
        mobileApps: 8,
        apiEndpoints: 45,
        databaseQueries: 120,
        avgResponseTime: 180
      },
      languages: {
        JavaScript: 85,
        TypeScript: 80,
        Dart: 75,
        Python: 70,
        SQL: 65
      }
    });
  })
];