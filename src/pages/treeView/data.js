const data = [
  {
    id: 1,
    name: "🚀 Getting Started",
    parent: true,
    children: [
      {
        id: 2,
        name: "Project Setup",
        children: [
          {
            id: 3,
            name: "Dependencies",
          },
          {
            id: 4,
            name: "Configuration",
          },
        ],
      },
      {
        id: 5,
        name: "Project Structure",
        children: [
          {
            id: 6,
            name: "Images",
          },
          {
            id: 7,
            name: "Styles",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "⚙️ Setup & Deployment",
    parent: true,
    children: [
      {
        id: 8,
        name: "Build",
      },
      {
        id: 9,
        name: "Deploy",
        children: [
          {
            id: 10,
            name: "Netlify",
          },
          {
            id: 11,
            name: "Vercel",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "📚 Documentation",
    parent: true,
    children: [
      {
        id: 11,
        name: "Overview",
        children: [
          {
            id: 12,
            name: "Installation",
          },
          {
            id: 13,
            name: "Usage",
          },
        ],
      },
      {
        id: 12,
        name: "Installation",
      },
    ],
  },
  {
    id: 13,
    name: "💻 Contributing",
    parent: true,
    children: [
      {
        id: 14,
        name: "Contributors",
        children: [
          {
            id: 15,
            name: "Overview",
          },
          {
            id: 16,
            name: "Code of Conduct",
          },
        ],
      },
      {
        id: 15,
        name: "Code of Conduct",
      },
    ],
  },
  {
    id: 16,
    name: "🔧 Legal",
    parent: true,
    children: [
      {
        id: 17,
        name: "Privacy Policy",
      },
      {
        id: 18,
        name: "Terms of Service",
      },
    ],
  },
];

export default data;
