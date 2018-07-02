// https://eslint.org/docs/user-guide/configuring
// https://blog.csdn.net/helpzp2008/article/details/51507428

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  globals: {
    Vuex: false,
    mapState: false,
    mapGetters: false,
    mapMutations: false,
    mapActions: false
  },
  // required to lint *.vue files
  plugins: ['vue'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js']
      }
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "only-multiline" 當最後一個元素或屬性與閉括號]或}在不同的行時，允許（但不要求）使用拖尾逗號；當在同一行時，禁止使用拖尾逗號。
    'comma-dangle': ['error', 'only-multiline'],
    // 關掉console.log()提示
    'no-console': 0,
    // 呼略定義，但未使用的變數
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^map'
      }
    ],
    'arrow-parens': ['error', 'as-needed']
  }
};
