## Absolute Path Implementation

This repo supports the usage of absolute paths for file and folder creation. By configuring the project with absolute paths, you can specify the exact location where the feature files and folders should be created.

## Pre-commit Husky for linting

Have included Pre-commit Husky as part of the project setup. This ensures that before every commit, the code is automatically checked for any ESLint errors or code style violations. This helps maintain a consistent code quality throughout the project and minimizes the chances of introducing bugs or issues.

## React Native Vector Icons

Have integrated React Native Vector Icons into the project. This library provides a wide range of customizable vector icons that can be easily used in your app. Icons play a vital role in enhancing the user interface and providing intuitive visual cues. With React Native Vector Icons, you have access to a vast collection of icons to choose from and can easily customize their size, color, and style to match your app's design requirements.

## Feature Files and Folders Creator

This script automates the creation of files and folders for a feature in a project. It helps in scaffolding new features and organizing them in the project structure.

## Installation

1. Clone the repository or download the script file.
2. Make sure you have Node.js installed on your machine.
3. Open a terminal or command prompt and navigate to the directory where the script file is located.

## Usage

To create files and folders for a new feature, run the following command:

node script.js [featureName]

## You will be prompted to choose which files to create for the feature:

Service file: This creates a service file for the feature.
Actions file: This creates an actions file for the feature.
Reducer file: This creates a reducer file for the feature.
Simply answer y or n (case-insensitive) for each prompt.

## Example

Let's say we want to create files and folders for a feature called "userManagement". We can run the following command:

node script.js userManagement

The script will guide us through the prompts to select which files to create. Once completed, the necessary files and folders will be generated in the project structure.

## Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License
This script is released under the MIT License.




