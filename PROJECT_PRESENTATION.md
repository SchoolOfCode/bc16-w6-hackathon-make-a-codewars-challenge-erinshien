# ✨ SoC Hackathon Week 6 - Erin Smith ✨

## 👋 Intro

Hiya, I'm Erin! I'm originally from Sydney, Australia and now live in Liverpool, UK. I used to be an art director for film & television - I would make things, people would watch them, and that was that. Now I'm transitioning into tech to make things that people can actually interact with - like this kata!

## 🎯 MVPS

### MVP 1

Sort an array of strings in alphabetical order by the final letter in each string, e.g. <br> `[ 'Neal', 'Peter', 'Elizabeth', 'Sara', 'Kate' ]` <br> returns -> <br> `[ 'Sara', 'Kate', 'Elizabeth', 'Neal', 'Peter' ]` <br> Arrays containing multiple identical names will not be provided as arguments.

### MVP 2

Sort an array of first and last names in alphabetical order by the final letter of the first name. If two or more first names are identical, those names should be ordered alphabetically by the last letter of the last name, e.g. <br> `[ 'Jessica Day', 'Nicholas Miller', 'Cecelia Parekh', 'Winston Schmidt', 'Winston Bishop' ]` <br> returns -> <br> `[ 'Jessica Day', 'Cecelia Parekh', 'Winston Bishop', 'Winston Schmidt', 'Nicholas Miller' ]`

## 📖 My Kata Scenario

Adam Aardvark is fed up of being chosen first in class. His teacher always picks on students in alphabetical order by the first letter of their last name - and with a last name like that, Adam has no chance! He thinks a better way to alphabetically order the class would be by the last letter of their first names, so he can sit comfortably in the middle.

Write a function that takes in an array of names and returns an array where the names are sorted in alphabetical order in reverse - the last letter of each name takes priority, then the second last letter, and so on.

## List of Tests

### MVP 1

| Test Case | Test Description                                                                             | Input                                             | Expected Result                                   |
| --------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| 1         | An array of one name                                                                         | [ 'Neal' ]                                        | [ 'Neal' ]                                        |
| 2         | An array of two names in the correct order                                                   | [ 'Neal', 'Peter' ]                               | [ 'Neal', 'Peter' ]                               |
| 3         | An array of two names in an incorrect order                                                  | [ 'Peter', 'Neal' ]                               | [ 'Neal', 'Peter' ]                               |
| 4         | An array of five names in an incorrect order                                                 | [ 'Neal', 'Peter', 'Elizabeth', 'Sara', 'Kate' ]  | [ 'Sara', 'Kate', 'Elizabeth', 'Neal', 'Peter' ]  |
| 5         | An array of five names with two names that have the same last letter                         | [ 'Neal', 'Peter', 'Elizabeth', 'Sara', 'Diana' ] | [ 'Diana', 'Sara', 'Elizabeth', 'Neal', 'Peter' ] |
| 6         | An array of five names with two sets of names that have the same last letter                 | [ 'Neal', 'Kate', 'Mozzie', 'Sara', 'Diana' ]     | [ 'Diana', 'Sara', 'Mozzie', 'Kate', 'Neal' ]     |
| 7         | An array of five names with two names that have the same two last letters                    | [ 'Neal', 'Peter', 'Rodger', 'Sara', 'Diana' ]    | [ 'Diana', 'Sara', 'Neal', 'Rodger', 'Peter' ]    |
| 8         | An array of five names with two names that have all the same letters except the first letter | [ 'Nora', 'Dora', 'Peter', 'Elizabeth', 'Sara' ]  | [ 'Sara', 'Dora', 'Nora', 'Elizabeth', 'Peter' ]  |

### MVP 2

## ✏️ The Plan

### Setup

- Install Vitest as a dev dependency ✅
- Set up NPM `test` script ✅
- Reread the Vitest docs to familiarise myself with them again

### Plan

- Narrow down a kata idea ✅
- Write the kata scenario ✅
- Distill my MVP ✅

### Build

**MVP 1**

- Write my kata scenario in a comment in `main.js` (include an exported function skeleton) ✅
- Import vitest and my function into `main.test.js` ✅
- Create a list of different inputs that could test for all edge cases ✅
- Write a test for each of the items in my list of inputs
- Temporarily add a working implementation to the solution function in `main.js`
- Check that the tests fail before implementation and pass when the function is coded correctly
- Remove the solution code
- Celebrate completing MVP 1!

**MVP 2**

- Create a list of different inputs that could test for all edge cases of my more complex kata problem
- Write a test for each of the items in my list of inputs
- Temporarily add a working implementation to the solution function in `main.js`
- Check that the tests fail before implementation and pass when the function is coded correctly
- Remove the solution code
- Celebrate completing MVP 2!!

### Deploy

- Polish my presentation markdown file
- Share my repo link in the Hackathon Channel
- Upload my kata to Codewars

## 💭 Reflections

### Successes

### Improvements
