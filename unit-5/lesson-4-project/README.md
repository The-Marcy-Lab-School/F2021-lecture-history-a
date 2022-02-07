# Lesson 4: Putting it All Together

## Review JS Events
- When the minus button is clicked => decrease the counter on the DOM by 1
- When the plus button is clicked => increase the counter on the DOM by 1
- When the heart button is clicked => creating/adding an `li` with the text of X was liked X times
- When you submit the form => create/add a `p` tag with the text of our comment and append it to `div`

## Why?
- Build a fun, dynamic website from start to finish
- See how to PLAN OUT a project
  - Wireframes
    - plan out every "page"
  - Data Structures
  - Building Interactive Features
    - When <some event> happen <on what element> => Change the DOM <how>?
- Tips, tricks, and strategies for getting debugging!
  - In this lecture, we'll spend less time on events and DOM

## Wheel of Fortune

For this lesson, we're going to build on everything you've learned during this unit by building a simplified version of America's favorite game show: Wheel of Fortune! Here's how it will work. 

1. Your application should choose a random word. You can use the `getRandomWord` function we've included for you (based on the `random-words` npm package.)
2. Display the word to the user using minus to replace each letter. For example, if the word is "horse", you would dispaly "- - - - -".
3. When the user clicks start, reveal any instances of the letters R,S,T,L,N, or E. Using the "horse" example above, we would then display: "_ _ R S E"

4. Via a form input, the user can then guess 3 constanants and one vowel. For example, the user might enter "B C D A" and press enter. You should validate to make sure that they enter a valid inputs. 

5. Finally, allow the user to submit a guess at what the word is, and tell them if they're right or wrong. 

Some notes to help you as you work through the prompt. 

1. We've given you some basic starter files in this directory - feel free to create additional files as needed. 
2. The exact flow/UI is up to you, but try to give you users feedback as much as possible. For example, let them know which letters have already been guessed. 
3. How you organize the project is up to you, but try to keep your functions neatly organized. 

## Bonus

In the real Wheel of Foturne, players can guess as many words as they like during a ten second window. Update your app to:

1. Display a ten second countdown
2. Allow the user to guess during the countdown. If the win, the countdown should stop and they should be alerted that they won.
3. If the timer reaches zero, let them know that they did not win. 

