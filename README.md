n real life, you don't write code on a whiteboard. You are able to look things up, consult references or the internet, head down side streets and explore. There are often multiple ways of solving a problem, and you are able to discuss why you chose one way over another. 

 

This exercise is designed to assess your coding and problem-solving style. Since there is no right or wrong answer, we will primarily be looking into how you structure your proposed solution and how you approach the given problems.

Business rules
Nintex is re-designing their product system to give more flexibility to clients on which products to purchase. Following is a table of products we offer:

 

PRODUCT ID	PRODUCT NAME	PRICE
wf	Workflow	$199.99
docgen	Document Generation	$9.99
form	Form	$99.99
 

Also, we currently have these promotion codes:

PROMO CODE	DESCRIPTION
RRD4D32	10% discount for orders above $1000 (pre-discount)
44F4T11	15% discount for orders above $1500 (pre-discount)
FF9543D1	Reduces the docgen price to $8.99 a unit when at least 10 documents are purchased
YYGWKJD	Reduces the form price to $89.99 a unit when at least 1 wf is purchased
For simplicity sake, only one promotion code can be applied at a time.

 

Requirements:
We would like you to implement a single checkout page, where you'll be able to select products, insert a promotion code (if any available), and being shown the payable amount.

Since promotion codes come and go, we want the pricing rules to be as flexible as possible so that could be changed in the future with little notice.

Outcomes examples:
 	 
Products	2x wf
Promotion:	 
Total	$399.98
 	 
Products	6x wf
Promotion:	RRD4D32
Total	$1,079.94
 	 
Products	1x wf, 1x form
Promotion:	YYGWKJD
Total	$289.98
Directions:
Feel free to make any assumptions where required to complete the exercise, unless contrary to what is specified in the business rules and/or requirements
We are not aiming to get a perfect, production ready solution. Only spend enough time to produce a testable and maintainable solution for the requirements given.
We use Javascript ES6 and ReactJS internally and building your sample with these is the easiest way to show us your relevant skills.
We will be focusing our attention on your front-end engineering skills; thus we will be looking into the quality and structure of your JavaScript. Please build a UI that helps to demonstrate that.
Feel free to mock any back-end components (if any required in your design). We won’t be judging any back-end implementation. Feel free to design the data required how you see fit.
We won’t be judging the aesthetics aspect of the UI. Again, we will be more interested in how you structure your style sheets.
 

Your solution should include all source code, including tests, and instructions on how to run your solution.

 

You should consider this project a window that allows us to see how you work and what we might expect from you should you come to work for Nintex.



# nintex-code-test
code test for nintex


Hi There, 
use instructions:

1- clone the repository:
	>git clone git@github.com:desphilboy/nintex-code-test.git

2- install needed packages:
	> cd nintex-code-test
	> npm install

3- test the project:
	> npm run test

4- run the project:
	> npm start

5- see the web page:
	type this url in google chrome: http://localhost:9080/
