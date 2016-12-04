
Assignment 6 - Events
===

Implementation details
---

The assignment required listening for five different types of events. The events that I chose to listen for are as follows:

1. Mouse wheel movement - text is resized when the mouse wheel is scrolled over it
2. Click Events - click events are used to show and hide elements on the page and to change the innerHTML inside a div on the page
3. Keypress - key release events are used inside a text box to change the text on the page using innerText
4. Window Resize - window resize events are used to change the dimensions of a box displayed on the page
5. Mouseover events - used to change the background color of an HTML element on the page

## Technical Achievement

For this project's technical achievement section, I decided to implement some CSS animations. Previously I had no experience with animating things with CSS, so I figured it would be a good idea to give it a try on this project. 

The animations play when the hidden elements on the page are shown / hid. For instance the alert box at the top will animate out, and the hidden button will animate in. Code for this can be seen in [scripts.js](http://cs4241-a6-arthurlockman.herokuapp.com/scripts.js).

## Assignment Instructions


You are now skilled in the art of sending data from client to server and vice-versa.

Now, to really move into Web 2.0 land, your web-pages should become more interactive, responding to user input and other events in various ways.

Luckily modern browsers implement a huge number of Events you can leverage while designing your site.

In this assignment, you will experiment with a number of events and techniques for manipulating HTML on the client side.


### Assignment details

Do the following to complete this assignment:

1. Clone the [starting project code](https://github.com/cs4241-16b/A6-Events). **DO NOT FORK THE REPO and DO NOT MAKE IT PUBLIC.** This is not an extension of previous projects, though you are free to re-use code. 
2. One goal of this project is to experiment with Events: 
    * Add listeners for five different types of events.
    * Don't choose randomly from the MDN events list. Choose something cohesive.
    * To show your work, add a bulleted list to your README explaining what event you used and how. A simple example:
        * "`click`: Used on the Tweet divs, the `click` event un-hides a menu div"
    * One of the events **must** be set with `onclick` rather than `addEventListener`. Think about why you might want to use one over the other, since `addEventListener` can essentially do the same as `onclick` if you specify tell it to use the `click` event. Documentation for `onclick` is [here on MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
3. A second goal of this project is to become familiar with several methods of manipulating the DOM:
    * One of your events should hide an element, using the `display` CSS property.
    * One of your events should reveal a hidden element.
    * At least one of the events should modify the DOM using `innerText`
    * At least one of the events should modify the DOM using `innerHTML` -- learn the difference between this and `innerText`.
4. Deploy your project to Heroku.
    * Ensure that your project has the proper naming scheme (`cs4241-a6-yourGitHubUsername`) so we can find it.
5. The project will be graded against the following rubric (120 total):
    * 100: Fulfilling the requirements above
    * 10: Good theming and layout
    * 10: Technical Achievement: Have fun here! Check out advanced resources for some ideas. Don't forget to include an explanation of your achievement on your page.
6. Include a README.md describing your technical achievement to recieve credit. 
    * Your README.md should be served when an attempt to access `<your-url>/README.md` is made.
    * Pay attention to capitalization of your filename -- it matters on git/heroku. Be sure to test that the readme is accessible from heroku.