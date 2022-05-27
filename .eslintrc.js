module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "semi": ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
        "react/prop-types": [0],
        "react/react-in-jsx-scope": "off",
    },
};
