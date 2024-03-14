Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

# SoC Hackathon Week 6 - Erin Smith

## MVPS

### MVP 1

Sort an array of strings in alphabetical order by the final letter in each string, e.g. `[ 'Neal', 'Peter', 'Elizabeth', 'Sara', 'Kate' ]` returns -> `[ 'Sara', 'Kate', 'Elizabeth', 'Neal', 'Peter' ]` Arrays containing multiple identical names will not be provided as arguments.

### MVP 2

Sort an array of first and last names in alphabetical order by the final letter of the first name. If two or more first names are identical, those names should be ordered alphabetically by the last letter of the last name, e.g. `[ 'Jessica Day', 'Nicholas Miller', 'Cecelia Parekh', 'Winston Schmidt', 'Winston Bishop' ]` returns -> `[ 'Jessica Day', 'Cecelia Parekh', 'Winston Bishop', 'Winston Schmidt', 'Nicholas Miller' ]`

## My Kata Scenario

Adam Aardvark is fed up of being chosen first in class. His teacher always picks on students in alphabetical order by the first letter of their last name - and with a last name like that, Adam has no chance! He thinks a better way to alphabetically order the class would be by the last letter of their first names, so he can sit comfortably in the middle.

Write a function that takes in an array of names and returns an array where the names are sorted in alphabetical order in reverse - the last letter takes priority, then the second last letter, and so on.

## The Plan

### Setup

- Install Vitest as a dev dependency ✅
- Set up NPM `test` script ✅
- Reread the Vitest docs to familiarise myself with them again

### Plan

- Narrow down a kata idea ✅
- Write the kata scenario ✅
- Distill my MVP ✅

### Build

- Write my kata scenario in a comment in `main.js` (include an exported function skeleton)
- Create a list of different inputs that could test for all edge cases for MVP 1
- Import vitest and my function into `main.test.js`
- Write a test for each of the items in my list of inputs
- Temporarily add a working implementation to the solution function in `main.js`
- Check that the tests fail before implementation and pass when the function is coded correctly
- Remove the solution code

### Deploy

- Polish my presentation markdown file
- Share my repo link in the Hackathon Channel
- Upload my kata to Codewars
