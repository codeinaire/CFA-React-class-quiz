# 17/05/17

Explaining tests. Try to tier explaination from high-level to low level.
Find some components to bring into the app, find these components:
1) progressBar component
2) components for css framework
3) another component that we can bring into the package

## stateless vs stateful components




## Type checking with Flow
What is Flow?? It is helping us to id and validate that we are using the correct type and we have the right props coming through to the component.

Results wouldbe good to have a default message for the flow testing.

Prop types and default props. It's good to let them know the default props so we'll know what data types to feed into the tests and we don't have to hunt it down as it is already in the component.

Default prop types are for when a component doesn't really have any change in the state. Shouhei made a good argument for not putting a default prop type for the multiChoice.

A default prop shouldn't be on a component that changes, but a component that stays the same or such as a default message. Testing the set state is really tricky to do. Jamie uses Enyzme and AirBnB were one of the early adopters of React. They creted an open source library called Enzyme and they have a great development blog to use.

yarn add enzyme --dev
yarn add react-test-renderer --dev

smart and dumb components...
# 16/05/17

the entry point for this app, I think, is index.js. It has this:

`ReactDOM.render(
  <App />,
  document.getElementById('root')
)`

It has the ReactDOM which I think is the virtual DOM and that is rendering the App component that is in another file and that has a bunch of other components that are rendered. It is getting the root element which is a div in the body it goes html>body>div#root> whatever else.

This has to do with bind and this `Therefore it passes functions down into these components that they can call when some data changes, and Todos can update the state accordingly.`

- PURE FUNCTIONS: If you’re unfamiliar with pure functions, they are functions that only reference data they are given and have no side effects.

Challenge!!!!!
0. Finish retry functionality
1. Create css and test files for each component
2. Create a file structure based on components e.g. App folder holds App.js, App.css, App.test.js
3. Create styling for your quiz app
4. In your new test files, run the basic test from App.test.js. Make sure they all pass

M - mongodb
E - express
R - react
N - node

## Structuring project

https://reactjsnews.com/structuring-react-projects

we can bundle together the components for a larger component so it's easier to take them around and reuse them.

docs: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#folder-structure

## TESTING

While Jest provides browser globals such as window thanks to jsdom, they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.
