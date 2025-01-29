module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',  // Configura babel-jest para transformar los archivos JS
    },
    moduleFileExtensions: ['js', 'json', 'node'],
    testEnvironment: 'node',
  };
  