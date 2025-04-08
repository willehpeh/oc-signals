import { Task } from '../models/task';

export const DUMMY_TASKS: Task[] = [
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    title: 'Complete Project Proposal',
    description: 'Draft and finalize the project proposal document for client review',
    subtasks: [
      { title: 'Research client background', completed: true },
      { title: 'Outline proposal structure', completed: true },
      { title: 'Write first draft', completed: false },
      { title: 'Review with team', completed: false }
    ],
    completed: false
  },
  {
    id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
    title: 'Update Website Content',
    description: 'Refresh the content on the company website to reflect new services',
    subtasks: [
      { title: 'Audit current content', completed: true },
      { title: 'Create new copy', completed: false },
      { title: 'Update images', completed: false }
    ],
    completed: false
  },
  {
    id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
    title: 'Prepare Monthly Report',
    description: 'Compile data and prepare the monthly performance report',
    subtasks: [
      { title: 'Gather analytics data', completed: true },
      { title: 'Create data visualizations', completed: true },
      { title: 'Write executive summary', completed: true },
      { title: 'Format document', completed: true }
    ],
    completed: true
  },
  {
    id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
    title: 'Plan Team Building Event',
    description: 'Organize a team building activity for the department',
    subtasks: [
      { title: 'Research venue options', completed: true },
      { title: 'Create budget', completed: true },
      { title: 'Send invitations', completed: false },
      { title: 'Arrange catering', completed: false }
    ],
    completed: false
  },
  {
    id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t',
    title: 'Implement New Feature',
    description: 'Develop and test the new user authentication feature',
    subtasks: [
      { title: 'Design database schema', completed: true },
      { title: 'Write backend code', completed: true },
      { title: 'Create frontend components', completed: true },
      { title: 'Write unit tests', completed: false },
      { title: 'Conduct integration testing', completed: false }
    ],
    completed: false
  },
  {
    id: '6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u',
    title: 'Review Budget',
    description: 'Review and adjust the quarterly budget allocation',
    subtasks: [
      { title: 'Analyze previous expenses', completed: true },
      { title: 'Identify cost-saving opportunities', completed: true },
      { title: 'Update budget spreadsheet', completed: true },
      { title: 'Present to management', completed: true }
    ],
    completed: true
  }
];
