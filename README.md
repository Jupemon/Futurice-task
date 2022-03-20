# Practice project for Futurice

When i applied for Futurice they gave a task to create an app which renders a bunch of images gotten from an API

## My thinking process

The first thing that crossed my mind is saving the images on the local memory. This would allow the user to make only a single API request.

<br>

I was familiar with `redux-persist` package which allows saving the redux state. In order to use `redux-persist` i needed to use `redux` aswell.

## What i could have done differently

After adding all kinds of packages i started to think maybe i had made it too complicated.
There was no reason to add `redux thunk` for a single API request, i could have also spent time figured out a custom solution instead of using the thunk library.
<br>
There was not really a need to use redux at all, due to the simplicity of the app, i spend a lot of time with configurations when i could have spent that time on building a more simple and elegant solution

## Final thoughts

When i first started out as a developer i imported all the packages i could find. As i have gained more experience i use way less packages and prefer to have more control over my apps.

# How to run it

Clone the repo and run the following:

### `yarn install`

installs all the nececcary dependecies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
