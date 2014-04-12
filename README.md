miniModal
=========

A small modal tool for intercepting hyperlinks and capturing names and email adresses.

This tool is very simple and not very complex.  A couple things to keep in mind.  This tool when called through to your pageg (see the test file). Will look for an 'img' tag, inside an 'a' tag, inside a 'p' tag... It sets the img to be a source for interception.  Then when it is clicked it prompts a modal window.  The window (a form), will have a name field and an email field.  It has very basic handling. Your form will need a target set in the action parameter.  It has unique classes and ids and uses data parameters to stay out of the way of other things that are functioning on your page.

This first iteration is "as is".  No bells and whistles.  In the next interation I will have customization added to set up the forms in a more meaningful way.  Also I will allow for collor changes.  Right now there is none of that.


