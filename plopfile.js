const config = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator('Mother File Generator', {
    description: 'To be used to create a component or a container',
    prompts: [
      {
        type: 'list',
        name: 'folderType',
        message: 'What would you like to create?',
        choices: ['containers', 'components'],
      },
      {
        type: 'input',
        name: 'folderName',
        message: 'Name of the folder: ',
      },
      {
        type: 'confirm',
        name: 'memoize',
        message: 'Do you want to memoize your React Node?',
        default: true,
      }
    ],
    //   actions: [
    //     {
    //       type: 'add',
    //       path: 'src/components/{{folderName}}/index.tsx',
    //       templateFile: 'plop-templates/index.hbs',
    //     },
    //     {
    //       type: '',
    //       path: 'src/components/{{folderName}}/styles.ts',
    //       templateFile: 'plop-templates/styles.hbs',
    //     },
    //   ],
    // actions: (data) => {
    //   let actions = [];
    //   if (data.folderType === 'Container')
    //     actions.push({
    //       type: 'add',
    //       path: `src/containers/{{pascalCase folderName}}/index.tsx`,
    //       templateFile: 'plop-templates/index.hbs',
    //     });
    //   else {
    //     actions.push({
    //       type: 'add',
    //       path: `src/components/{{pascalCase folderName}}/index.tsx`,
    //       templateFile: 'plop-templates/index.hbs',
    //     });
    //   }
    //   if (data.requireStyles) {
    //     actions.push({
    //       type: 'add',
    //       path: `src/components/{{pascalCase folderName}}/index.tsx`,
    //       templateFile: 'plop-templates/index.hbs',
    //     });
    //   }
    // },
    actions: (data) => {
      let actions = [];
      actions.push(
        {
          type: 'add',
          path: `src/{{folderType}}/{{pascalCase folderName}}/index.tsx`,
          templateFile: 'plop-templates/index.hbs',
        },
        {
          type: 'add',
          path: `src/{{folderType}}/{{pascalCase folderName}}/styles.ts`,
          templateFile: 'plop-templates/styles.hbs',
        },
      );
      return actions;
    }
  });

  // plop.setGenerator('Container', {
  //   description: 'Generating Container',
  //   prompts: [
  //     {
  //       type: 'input',
  //       name: 'folderName',
  //       message: 'What is the name of your container?',
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: 'add',
  //       path: 'src/containers/{{folderName}}/index.tsx',
  //       templateFile: 'plop-templates/index.hbs',
  //     },
  //     {
  //       type: 'add',
  //       path: 'src/containers/{{folderName}}/styles.ts',
  //       templateFile: 'plop-templates/styles.hbs',
  //     },
  //   ],
  // });
};

module.exports = config;
