
const config = (plop) => {
  plop.setGenerator('Component', {
    description: 'Generating Component',
    prompts: [
      {
        type: 'input',
        name: 'folderName',
        message: 'What is the name of your component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{folderName}}/index.tsx',
        templateFile: 'plop-templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{folderName}}/styles.ts',
        templateFile: 'plop-templates/styles.hbs',
      },
    ],
  });

  plop.setGenerator('Container', {
    description: 'Generating Container',
    prompts: [
      {
        type: 'input',
        name: 'folderName',
        message: 'What is the name of your container?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/containers/{{folderName}}/index.tsx',
        templateFile: 'plop-templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{folderName}}/styles.ts',
        templateFile: 'plop-templates/styles.hbs',
      },
    ],
  });
};

module.exports = config;
