# Do You Know Blue (DYKB)?

## Context

Evan Weinberg had a great lesson idea about students creating rules for a computer to tell if a color is blue or not based on RGB values -  [Lesson Here](http://evanweinberg.com/2013/04/19/students-thinking-like-computer-scientists/). Then Dan Meyer & Dave Major made a website for it - [Here's their post about it](https://blog.mrmeyer.com/2013/great-lessons-evan-weinbergs-do-you-know-blue/). At some point the website disappeared, so I recreated it and now I use it to introduce RGB.

Students start by categorizing colors as blue or not, then use RGB representation to create colors and predict colors, then use Hexadecimal to create colors and predict colors.

## The Stages

**Part 1**: Just asks 'is this blue?'. This is the hook to start asking how a _computer_ would answer this question

**Part 2**: Use the sliders to try and create the random color. Once the RGB values are within 10 of the actual RGB values, it will let you choose a new color.

**Part 3**: Given 3 RGB values, predict whether or not the given color will be blue. Some other fun questions: If it's not blue, what color will it be? Will it be a lighter shade, or a darker shade? How could you tell it was blue, and is that enough to guarantee _any_ color with this rule will be blue?

**Part 4**: Same as Part 2, but with Hexadecimal

**Part 5**: Same as Part 3, but with Hexadecimal

## Further Developments

The real goal from the original lesson was asking students to write rules that let them predict whether or not a color would be blue (like B > 128 && R < 128 && G < 128) - you can see this in Evan's original blog post. The original DYKB website had a neat crowdsourced feature where students could categorize different colors as blue or not blue, then write some rules that a computer would use to test against the user inputs and see how well they matched. In other words, we could create human-generated training data, then write a ruleset for our computer to test against the training data. If I had time / motivation, I'd add this feature - the ability to take the data from Part 1 and use that as training data for students to 'test' their rules on and see if they can get a computer to predict if a color is blue or not.
