import { Article, EventImage } from '../types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Getting Started with React 18: Hooks & Concurrent Rendering',
    slug: 'getting-started-react-18',
    excerpt: 'Explore the powerful features of React 18 including Hooks API and concurrent rendering for faster UIs.',
    content: `<h2>Introduction to React 18</h2>
<p>React 18 brings groundbreaking improvements to web development. In this comprehensive tutorial, we'll explore the new features and best practices that will help you build faster, more responsive applications.</p>

<h2>Understanding React Hooks</h2>
<p>Hooks allow you to use state and other React features in functional components. They make your code more reusable, easier to understand, and more maintainable.</p>

<pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;</code></pre>

<h2>Concurrent Rendering</h2>
<p>React 18 introduces concurrent rendering, which allows React to interrupt a long-running render to handle a more urgent update. This makes your applications feel faster and more responsive.</p>

<p>Some key benefits include:</p>
<ul>
  <li>Better performance on slow devices</li>
  <li>Improved user experience during long renders</li>
  <li>Automatic batching of updates</li>
</ul>

<h2>Conclusion</h2>
<p>React 18 is a major step forward for the React ecosystem. With these new features, you can build faster, more responsive applications that your users will love.</p>`,
    author: 'Alex Chen',
    date: '2024-03-25',
    readingTime: 8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    category: 'TECH_HUB',
    tags: [
      { id: 't1', name: 'WebDev', category: 'TECH_HUB', slug: 'webdev', color: 'blue' },
      { id: 't2', name: 'React', category: 'TECH_HUB', slug: 'react', color: 'blue' },
    ],
    likes: 342,
  },
  {
    id: '2',
    title: 'My Campus Life: Balancing Code & Coffee',
    slug: 'campus-life-balancing-code',
    excerpt: 'A student\'s perspective on managing demanding coursework, side projects, and social life in tech school.',
    content: `<h2>The First Semester Struggle</h2>
<p>When I first entered tech school, I thought I could handle everything. Little did I know about the challenges ahead. Between lectures, assignments, and my passion for building projects, finding balance seemed impossible.</p>

<h2>Finding My Rhythm</h2>
<p>The key to success is not working harder, but working smarter. Here are some strategies that helped me:</p>

<h3>Time Management</h3>
<p>I started using the Pomodoro Technique: 25 minutes of focused work, followed by 5-minute breaks. This simple method increased my productivity significantly.</p>

<h3>Community Over Competition</h3>
<p>Joining study groups and hackathons taught me that collaboration is more valuable than individual achievement. Some of my best learning experiences came from working with classmates.</p>

<h3>Mental Health Matters</h3>
<p>I learned to prioritize sleep, exercise, and time with friends. A healthy mind leads to better code.</p>

<h2>Lessons Learned</h2>
<p>Campus life in tech is demanding but rewarding. The key is finding your balance and remembering that the journey matters as much as the destination.</p>`,
    author: 'Jordan Smith',
    date: '2024-03-20',
    readingTime: 6,
    featured: true,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    category: 'CAMPUS_PULSE',
    tags: [
      { id: 't3', name: 'StudentLife', category: 'CAMPUS_PULSE', slug: 'student-life', color: 'green' },
    ],
    likes: 128,
  },
  {
    id: '3',
    title: 'Behind the Scenes: Making of Our Tech Conference',
    slug: 'behind-the-scenes-tech-conference',
    excerpt: 'See the hard work and planning that goes into organizing a successful tech conference.',
    content: `<h2>From Idea to Reality</h2>
<p>Six months of planning went into making our annual tech conference happen. From venue selection to speaker coordination, every detail mattered.</p>

<h2>The Planning Phase</h2>
<p>It all started with a simple question: "What if we created a space where tech enthusiasts could come together?" What followed was months of planning, coordination, and problem-solving.</p>

<h3>Finding the Perfect Venue</h3>
<p>We visited 15 different locations before finding one that met all our requirements. The venue needed to be spacious, accessible, and inspire creativity.</p>

<h3>Speaker Selection</h3>
<p>Reaching out to industry leaders was intimidating, but the response was overwhelming. We had speakers from leading tech companies sharing their experiences and insights.</p>

<h2>The Day of the Event</h2>
<p>Despite the challenges, seeing hundreds of tech enthusiasts gathered together made it all worthwhile. The energy, connections, and learning opportunities were beyond our expectations.</p>

<h2>Reflections</h2>
<p>Organizing this conference taught me that great things come from great teamwork. It wasn't just about the event; it was about building a community.</p>`,
    author: 'Maria Garcia',
    date: '2024-03-15',
    readingTime: 5,
    featured: true,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    category: 'THE_JOURNAL',
    tags: [
      { id: 't4', name: 'EventHighlights', category: 'THE_JOURNAL', slug: 'event-highlights', color: 'red' },
    ],
    likes: 256,
  },
];

export const MOCK_IMAGES: EventImage[] = [
  {
    id: 'img1',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
    title: 'Annual Tech Conference 2024',
    date: '2024-03-15',
    height: 600,
    width: 800,
    caption: 'Keynote speakers sharing insights on future technology trends and innovations',
  },
  {
    id: 'img2',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
    title: 'Campus Hackathon 2024',
    date: '2024-03-10',
    height: 600,
    width: 800,
    caption: 'Teams collaborating on innovative solutions during the 24-hour hackathon challenge',
  },
  {
    id: 'img3',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
    title: 'Graduation Ceremony 2024',
    date: '2024-03-05',
    height: 600,
    width: 800,
    caption: 'Celebrating the achievements and milestones of the graduating class',
  },
];