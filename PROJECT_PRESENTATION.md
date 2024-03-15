# ✨ SoC Hackathon Week 6 - Erin Smith ✨

## 👋 Intro

Hiya, I'm Erin! I'm originally from Sydney, Australia and now live in Liverpool, UK. I used to be an art director for film & television - I would make films, people would watch them, and that was that. Now I'm transitioning into tech to make things that people can actually interact with - like this kata!

## 📖 My Kata Scenario

Adam Aardvark is fed up of being chosen first in class. His teacher always picks on students in alphabetical order by the first letter of their last name - and with a last name like that, Adam has no chance! He thinks a better way to alphabetically order the class would be by the last letter of their first names, so he can sit comfortably in the middle.

Write a function that takes in an array of names and returns an array where the names are sorted in alphabetical order by first name in reverse - the last letter of each first name takes priority, then the second last letter, and so on.

## 🎯 MVPS

### MVP 1

Sort an array of strings in alphabetical order by the final letter in each string, e.g. <br> `[ 'Neal', 'Peter', 'Elizabeth', 'Sara', 'Kate' ]` <br> returns -> <br> `[ 'Sara', 'Kate', 'Elizabeth', 'Neal', 'Peter' ]` <br> Note: Arrays containing multiple identical names will not be provided as arguments.

### MVP 2

Sort an array of first and last names in alphabetical order by the final letter of the first name, e.g. <br> `[ 'Jessica Day', 'Nicholas Miller', 'Paul Genzlinger', 'Winston Schmidt', 'Sam Sweeney' ]` <br> returns -> <br> `[ 'Jessica Day', 'Paul Genzlinger', 'Sam Sweeney', 'Winston Schmidt', 'Nicholas Miller' ]` <br> Note: Arrays containing multiple identical first names will not be provided as arguments.

### MVP 3

Sort an array of first and last names in alphabetical order by the final letter of the first name. If two or more first names are identical, those names should be ordered alphabetically by the last letter of the last name, e.g. <br> `[ 'Jessica Day', 'Nicholas Miller', 'Cecelia Parekh', 'Winston Schmidt', 'Winston Bishop' ]` <br> returns -> <br> `[ 'Jessica Day', 'Cecelia Parekh', 'Winston Bishop', 'Winston Schmidt', 'Nicholas Miller' ]` <br> Note: Arrays containing multiple identical first and last names will not be provided as arguments.

## 🧪 List of Tests

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

| Test Case | Test Description                                                                                   | Input                                                                                     | Expected Result                                                                           |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1         | An array of one name                                                                               | [ 'Jessica Day' ]                                                                         | [ 'Jessica Day' ]                                                                         |
| 2         | An array of two names in the correct order                                                         | [ 'Jessica Day', 'Cecelia Parekh' ]                                                       | [ 'Jessica Day', 'Cecelia Parekh' ]                                                       |
| 3         | An array of two names in an incorrect order                                                        | [ 'Nicholas Miller', 'Jessica Day' ]                                                      | [ 'Jessica Day', 'Nicholas Miller' ]                                                      |
| 4         | An array of five names in an incorrect order                                                       | [ 'Jessica Day', 'Nicholas Miller', 'Paul Genzlinger', 'Winston Schmidt', 'Sam Sweeney' ] | [ 'Jessica Day', 'Paul Genzlinger', 'Sam Sweeney', 'Winston Schmidt', 'Nicholas Miller' ] |
| 5         | An array of five names with two first names that have the same last letter                         | [ 'Jessica Day', 'Nicholas Miller', 'Cecelia Parekh', 'Winston Schmidt', 'Sam Sweeney' ]  | [ 'Jessica Day', 'Cecelia Parekh', 'Sam Sweeney', 'Winston Schmidt', 'Nicholas Miller' ]  |
| 6         | An array of five names with two sets of first names that have the same last letter                 | [ 'Jessica Day', 'Abby Day', 'Cecelia Parekh', 'Aly Nelson', 'Sam Sweeney' ]              | [ 'Jessica Day', 'Cecelia Parekh', 'Sam Sweeney', 'Abby Day', 'Aly Nelson' ]              |
| 7         | An array of five names with two first names that have the same two last letters                    | [ 'Aria Day', 'Nicholas Miller', 'Cecelia Parekh', 'Winston Schmidt', 'Sam Sweeney' ]     | [ 'Cecelia Parekh', 'Aria Day', 'Sam Sweeney', 'Winston Schmidt', 'Nicholas Miller' ]     |
| 8         | An array of five names with two first names that have all the same letters except the first letter | [ 'Jessica Day', 'Mason Miller', 'Jason Genzlinger', 'Winston Schmidt', 'Sam Sweeney' ]   | [ 'Jessica Day', 'Sam Sweeney', 'Jason Genzlinger', 'Mason Miller', 'Winston Schmidt' ]   |

### MVP 3

| Test Case | Test Description                                                                                                                                     | Input                                                                                        | Expected Result                                                                              |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1         | An array of five names with two first names that are the same                                                                                        | [ 'Jessica Day', 'Nicholas Miller', 'Cecelia Parekh', 'Winston Schmidt', 'Winston Bishop' ]  | [ 'Jessica Day', 'Cecelia Parekh', 'Winston Bishop', 'Winston Schmidt', 'Nicholas Miller' ]  |
| 2         | An array of five names with three first names that are the same, two of which have last names ending in the same letter                              | [ 'Jessica Day', 'Winston Millet', 'Cecelia Parekh', 'Winston Schmidt', 'Winston Bishop' ]   | [ 'Jessica Day', 'Cecelia Parekh', 'Winston Schmidt', 'Winston Millet', 'Winston Bishop' ]   |
| 3         | An array of five names with four first names that are the same, two pairs of which have last names ending in the same letter                         | [ 'Winston Sharp', 'Winston Millet', 'Cecelia Parekh', 'Winston Schmidt', 'Winston Bishop' ] | [ 'Cecelia Parekh', 'Winston Bishop', 'Winston Sharp', 'Winston Schmidt', 'Winston Millet' ] |
| 4         | An array of five names with three first names that are the same, two of which have last names ending in the same two letters                         | [ 'Jessica Day', 'Winston Millet', 'Cecelia Parekh', 'Winston Emmet', 'Winston Bishop' ]     | [ 'Jessica Day', 'Cecelia Parekh', 'Winston Bishop', 'Winston Millet', 'Winston Emmet' ]     |
| 5         | An array of five names with three first names that are the same, two of which have last names that have all the same letters except the first letter | [ 'Jessica Day', 'Winston Calder', 'Cecelia Parekh', 'Winston Balder', 'Winston Bishop' ]    | [ 'Jessica Day', 'Cecelia Parekh', 'Winston Bishop', 'Winston Balder', 'Winston Calder' ]    |

## ✏️ The Plan

### Setup

- Install Vitest as a dev dependency ✅
- Set up NPM `test` script ✅
- Reread the Vitest docs to familiarise myself with them again ✅

### Plan

- Narrow down a kata idea ✅
- Write the kata scenario ✅
- Distill my MVP 1 ✅
- Write the plan for my build phase ✅

### Build

**MVP 1**

- Write my kata scenario in a comment in `main.js` (include an exported function skeleton) ✅
- Import vitest and my function into `main.test.js` ✅
- Create a list of different inputs that could test for all edge cases ✅
- Write a test for each of the items in my list of inputs ✅
- Temporarily add a working implementation to the solution function in `main.js` ✅
- Check that the tests fail before implementation and pass when the function is coded correctly ✅
- Remove the solution code ✅
- Celebrate completing MVP 1! ✅

**MVP 2**

- Create a list of different inputs that could test for all edge cases of my more complex kata problem ✅
- Write a test for each of the items in my list of inputs ✅
- Temporarily add a working implementation to the solution function in `main.js` ✅
- Check that the tests fail before implementation and pass when the function is coded correctly ✅
- Remove the solution code ✅
- Celebrate completing MVP 2!! ✅

**MVP 3**

- Create a list of different inputs that could test for all edge cases of my even more complex kata problem ✅
- Write a test for each of the items in my list of inputs
- Temporarily add a working implementation to the solution function in `main.js`
- Check that the tests fail before implementation and pass when the function is coded correctly
- Remove the solution code
- Celebrate completing MVP 3!!!

### Deploy

- Polish my presentation markdown file
- Share my repo link in the Hackathon Channel
- Upload my kata to Codewars

## 💭 Reflections

### Successes

- I got MVP 1 working sooner than I expected - yay!
- I was able to solve my MVP 1 kata myself, and then put my solution through Chat GPT to refactor in order to test different solution methods
- I managed to achieve MVP 2 and come up with a way to organise my two MVPs into two separate katas, with a second test set available to those who choose to attempt my MVP 2 kata

### Improvements

- As my MVPs grew in complexity, the possible test cases expanded exponentially, I found myself struggling to think of all possible boundaries. Next time I will try to document more of my process of coming up with test boundaries to make it easier to visualise the boundaries and possible test cases, maybe with a Google jamboard or even on paper.
- After writing the tests for MVP 2, I found it quite difficult to solve it and this took up a lot of time. I got carried away writing the tests because it felt like the easiest part, when really I should have been taking a TDD approach and writing one test, writing my solution, refactoring, and then moving on to the next test.
- I got excited about my first idea and ran with it, when I should have take more time to brainstorm, work through my Disney ideation rooms, and considered all posibilities - I probably could have come up with a better, more creative and unique idea that way.
