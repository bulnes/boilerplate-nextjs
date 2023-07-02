module.exports = function (plop) {
  // Component generator
  plop.setGenerator('component', {
    description: 'application component structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: './plop-templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: './plop-templates/components/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: './plop-templates/components/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: './plop-templates/components/test.tsx.hbs'
      }
    ]
  });
};
