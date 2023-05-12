module.exports = {
  root: true,
  extends: 'eslint:recommended',
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/semi': 'off',
    curly: 'warn',
    eqeqeq: 'warn',
    'no-throw-literal': 'warn',
    semi: 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'indent': [2, 4, { SwitchCase: 1 }], // 缩进
        'eqeqeq': 0, // 要求使用 === 和 !==
        'semi': [2, 'never'],// 要求或禁止使用分号代替 ASI
        'quotes': [2, 'single', 'avoid-escape'], // 强制使用一致的反勾号、双引号或单引号
        'no-undef': 2,// 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'no-undef-init': 2, // 禁止将变量初始化为 undefined
        'one-var': [0, 'always'], // 强制函数中的变量要么一起声明要么分开声明
        'arrow-parens': 0, // 要求箭头函数的参数使用圆括号
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: false
            }
        ],
        'no-prototype-builtins': 0,
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        'comma-dangle': [2, 'never'],
        //  #去掉代码结尾的分号
        'prettier.semi': 0,
        // 禁止在return、throw、continue 和 break语句之后出现不可达代码
        'no-case-declarations': 0, // 不允许在 case 子句中使用词法声明
        'no-mixed-spaces-and-tabs': 0, // 不允许空格和 tab 混合缩进
        'eslint-disable-next-line': 0,
        'generator-star-spacing': 0, // 强制 generator 函数中 * 号周围使用一致的空格
        // allow debugger during development
        'no-console': 'off',
        'no-extra-parens': 1,//禁止不必要的括号
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-unused-expressions': 0, // 禁止出现未使用过的表达式,
        "max-len": ["error", { "code": 80 }],
        "quote-props": ["error", "as-needed"]
  },
  ignorePatterns: ['**/*.d.ts']
}
