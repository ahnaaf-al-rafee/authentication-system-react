### Create a full functional Authentication app using React and Firebase!

view the live app https://ahnaaf-al-rafee.github.io/authentication-system-react/

Installed packages 👇
`yarn add firebase` & `yarn add react-firebaseui`

**Note: use firebaseUi to create awesome buttons without hard coding! It also setups ReCaptcha built in!!!**

## use this `uiConfig` object 👇

\*\*
uiConfig = {
signInFlow: "popup",
signInOptions: [
firebase.auth.GoogleAuthProvider.PROVIDER_ID,
firebase.auth.FacebookAuthProvider.PROVIDER_ID,
firebase.auth.TwitterAuthProvider.PROVIDER_ID,
firebase.auth.GithubAuthProvider.PROVIDER_ID,
firebase.auth.EmailAuthProvider.PROVIDER_ID,
firebase.auth.PhoneAuthProvider.PROVIDER_ID,
],
callbacks: {
signInSuccess: () => false,
},
};

\*\*

### How to deploy in Github pages 🤔

run `yarn add gh-pages`

in the `package.json` update 👇
`"homepage": "username.github.io/projectName"`

in the `debug` script:

`"predeploy" : "yarn build",`
`"deploy" : "gh-pages -d build"`
