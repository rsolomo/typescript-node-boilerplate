# typescript-node-boilerplate

This is a boilerplate project for getting a TypeScript project setup in a NodeJS environment.

## Usage

```bash
git clone --depth 1 https://github.com/rsolomo/typescript-node-boilerplate.git
cd typescript-node-boilerplate
rm -rf .git
# Replace PROJECT_NAME with a real project name
find . -type f -exec sed -i "s/typescript-node-boilerplate/PROJECT_NAME/g" {} \;
npm install
```
