# JS Institute README file

## JavaScript

JS is an interpreted language.

JS is a high-level language (i.e. relatively easy to understand for people and separating us from the hardware details).

The interpreter is the js engine built into the browser.

We can also execute JS code with node.JS.

Most modern JS engines use the _Just in time compilation technique (JIT compilation)_ which consist in compiling code fragments during the execution of the program.

> The success of a program depends on the quality of the instructions. Precise and unambiguous instructions.

> Someone who develops must know exactly what they want to achieve and how they wan to achieve it.

**client-side** programming is loaded together with the page in the browser, on the user's side, and the interpreter which is a part of the web browser allows for its execution.

95% of web pages worldwide embed JS code within them.
from the beginning (1995 by Brendan Eich) web pages uses JS on the client-side to add interactivity and dynamically change the content.


Disadvantages
- JS is limited in functionality by the fact that browsers, for security reasons, run script code in a sandbox environment which doesn't allow for access to local files and resources.
- the code is not compiled: everyone can see our solution in an easy-to-read form and use it without our permission to write their own program.

Advantages
- active and supportive community
- huge number of ready-to-use libraries. The language its easy to learn, and allows us to focus on the job instead of fighting with the syntax.
- Doesn't require expensive tools to work with it.
- _dynamic typing characteristic of JS_: we can store data of any type in a variable.

## Development tools

In most cases other programming languages requires a compiler/interpreter and a code editor.

JS only needs a code editor, an interpreter and a debugger.

here are some online development environment (known as playground) used as training and testing platforms.

- [JSFiddle](https://jsfiddle.net/)
- [CodePen](https://codepen.io/open)
- [jsBin](https://jsbin.com/)
- [Plunker](https://plnkr.co/)

Depending on the level of sophistication, the complexity of the project, or environment for which we write our programs (client-side, server-side, mobile), other tools may also be good:

- package managers -> enabling the management of libraries (containing ready-made solutions that we can use in our programs) or components of the development environment (e.g npm oor yarn).
- task runners and module bundlers -> to automate the process of sw development and merge the resulting code from many files and libraries.
- testing frameworks -> allows for automatic testing of the correctness of our program in search of potential errors (e.g. mocha, jasmine or jets)
- security analyzers -> used to control the security of our solution (e.g. snyk, RetireJS or OWASP Dependency check)

## Interpreter

> The **Interpreter** functions as a runtime environment for our program

The interpreter checks whether we have made any formal errors, for example, making a typo in the name of a function or forgetting to close a parenthesis, and then it executes the program instruction by instruction.

The choice of JS interpreter will depend on which platform we write our software. for example, if we want to write a simple server-side app, we will choose **node.js** environment. In case of the client-side, our interpreter will simply be the web browser you already have installed.

### Debugger

a debugger is a tool that allows you to slow down or even halt the execution of a program, run instructions step by step, and look at and analyze the state of the program at any given moment.

all modern web browsers are equipped with developer tools, we have a debugger.

How to enable developer tools. try the following key combinations:

- macOS
command + option + i
---

### HTML
**HyperText Markup Language** is a set of tags used to describe the structure of a website. It allows us to give a page the format of a document containing sections, headers, paragraphs. lists, and the like.

#### `script` tag
The JS code to be executed by the browsers on the page must be attached to the `<script>` and `</script>` tags, but is only recommended when the code is short. Another approach is to use the `src` attribute to point to a separate file that contains the JS code.

HTML is read line by line by the browser, and script tags are executed right at the moment when the browsers parses the `script`tag.

usually `<script></script>` tags are inserted in the page header between `<head>` and `</head>` tags.

we can use the next attributes:

- `defer`: means that the script should be executed after the whole page is loaded.
- `async`: means that the script will be executed immediately, but in parallel to parsing the rest of the page.
- `src`: to indicate a separate JS file that will be attached.

### CSS
**Cascading Style Sheets**, is a language used together with HTML to describe the appearance fo a page and its elements.

> HTML describes structure
> CSS describes presentation

que es js
diferencia lenguaje inter y compi

> Entering `about:blank` in the address bar of your browser will generate and load a minimal blank HTML page into the current tab.

> In a browser, the path to open a local file must bre preceded byt: file:///
> The rest of the string is the path to the file on our local computer that we want to open in the browser.

> The basic toolkit needed to effectively develop JS code consist of two elements: code editor, interpreter.

