# CaamargoBoilerplate

This is a React Native + Expo app boilerplate. This contains initial pre-configured code.

## What is already configured on this boilerplate:
1. Axios
2. Import alias
3. React Query
4. Restyle theme
5. Base components
6. Expo fonts
7. Safe Area Context
8. React Navigation
9. ESLint
10. EditorConfig
11. Commitlint
12. Husky

## How to create an Expo app using this boilerplate:

1. To create an Expo app, use the command:
```bash
# For yarn users:
yarn create expo-app myApp -t gabrielcaamargo/expo-template-caamargoboilerplate

# For npm users
npm create-expo-app myApp -t gabrielcaamargo/expo-template-caamargoboilerplate
```

2. After started the project, navigate to it on a terminal:
```bash
cd myApp
```

3. Start Husky for commit lint and checking
```bash
npx husky init
```

After the third step, a folder called .husky will be created in the root of the project. Navigate into it, and inside the ```pre-commit``` file, add:
```
echo "Preparing everything to commit:\n"

yarn lint-staged
npx tsc --noEmit
echo "Everything fine.\n"
```

After running these steps, you're good to go!
