module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      requireConfigFile: false, // Babel 설정 파일 요구 비활성화
    },
    rules: {
      // 필요에 따라 여기에 규칙을 추가할 수 있습니다.
    },
  };