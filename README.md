<p align="center"><img src="https://github.com/reachvivek/Skyfall/blob/master/assets/img/cloud.png" width="200" height="200"></p>

<h1 align="center">SKYFALL #CodeStreet'20 (American Express) </H1>
<p align="center">
   <a target="_blank" href="https://codestreet-2020.hackerearth.com/">
        <img src="https://img.shields.io/badge/Challenge-HackerEarth-green.svg?style=for-the-badge&logo=hackerearth" />
   </a>
</p>

<h1 align="center">About</H1>

Skyfall has been made to ensure that existing **Password Managers and 3rd Party Data Management** use-cases are more reliable, dependable and truly secure. The objective is to give the netizens a **Credentials Manager Application Interface** which has a **serverless architecture** and can be deployed locally to their very own personal cloud account. For a concrete scope of this project, I have utilised and deployed the backend on AWS Platform.
> **Note:** This is ```Not An Open Source Project``` and is intended to be shared only with ```HackerEarth Officials``` & respective organizers of ```#codestreet20 American Express``` for Validation of my Idea Subission and Evaluation Purposes. Please check this link below to better understand the license agreement of this repository: <a target="_blank" href="https://choosealicense.com/no-permission/">
          <p align="center"> <strong>About Proprietary Code & Repository | GitHub</strong> </p> </a> 

## Why Skyfall 💬
1. Once Skyfall has been deployed on a system, the independent user has complete **ownership** of the application.

2. Skyfall has a serverless architecture:

     * Our prime focus is on user's **security** and **privacy**. The passwords are securely stored without the intervention of any third-party applications and this **prevents dataleaks** from occuring.
     * It is highly **reliable**.
     * Requires **very low maintenance**.
     * It is **highly scalable** - if many people want to use the same account to store passwords.
3. Doesn't require any subscription:

    * It is available **free** of cost for students/people having AWS Free Tier account.
    * For rest of the users, there is **minimal payment** for AWS account which is equivalent to a meal from one of your favourite burger joints.

## Getting Started

### Deploying Skyfall

#### Dependencies Used 🔍
* SpringBoot
* DynamoDB
* Passay
* AWS KMS

## High Level Design 📋 [Click here](HLD.md)

## Steps 
## 1. Deploying Skyfall's Backend ☁️
Clone Skyfall to your workspace. In the application, the Maven pom.xml file and a SAM template have been included. The easiest way to deploy Backend would be to use the SAM CLI.

Before proceeding, make sure you have the [AWS CLI](https://aws.amazon.com/cli/) installed and configured with a set of AWS credentials, and the [SAM CLI](https://github.com/awslabs/aws-sam-cli).
Using a shell, navigate to the folder containing the Backend application:

```
$ cd ~/{workspace}/Skyfall/Backend
```

To build Backend Application:
```
./mvnw package
```

If you already have maven installed locally use:
```
mvn package
````

To deploy:
* Clean and rebuild the code as a shaded jar, not as a Backend jar.
```
./mvnw clean package
```
* Create an S3 bucket to hold the application code. This bucket name must be unique across S3, so adjust for your use in the next two steps.
```
aws s3 mb s3://SkyfallBackend-lambda
```
Instead of SkyfallBackend-lambda create your own unique name.

* Copy the jar file to the S3 bucket and update the information into a SAM template.
```
aws cloudformation package --template-file template.yml --output-template-file target/output-template.yml --s3-bucket SkyfallBackend-lambda
```
* Deploy a Cloudformation stack from the SAM template. We must provide the --capabilities to allow the deploy to succeed because SAM will be creating IAM roles and policies needed to allow the API Gateway to execute the Lambda function.
```
aws cloudformation deploy --template-file target/output-template.yml --stack-name skyfallbackend-lambda --capabilities CAPABILITY_IAM
```
* Describe the stack, which will display the URL of the API in the outputs.
```
aws cloudformation describe-stacks --stack-name skyfallbackend-lambda
```
"OutputValue": "https://andhfldf.execute-api.us-east-2.amazonaws.com/Stage/ping". You will get unique urls like shown.


## Running Locally and Testing
To build and run from a packaged jar locally:
```
./mvnw spring-boot:run
```
## With Docker
To build the image, first build the application, then build the docker image
```
mvn package -Dboot
docker build -t skyfallbackend-lambda
```
## Running with Docker
```
docker run --name skyfallbackend-lambda -p 8080:8080 -d skyfallbackend-lambda
```
## With SAM
```
$ mvn clean package
$ sam local start-api --template template.yml
```

## Testing Locally
Testing can be done using any of the following:
* curl
* by opening the url in web browser
* postman or any similar tools can be used.
Local URL will be like
```
http://localhost:8080/(skyfall-apis)
```

## API documentation and Testing with Swagger UI 🔨 [Click Here](SkyfallSwagger.md)

## 2. Deploying the Frontend App (built on NextJS) 🔼

Clone this repository:

	git clone https://github.com/reachvivek/Skyfall 
 
Install dependencies:

	cd Frontend
	yarn  # or npm install
 npm i amazon-cognito-identity-js3

Start it by doing the following:

	npm run dev or #yarn dev
	

If you navigate to `http://localhost:3000/ you will be navigated to /home. Kudos! 👍

You have your API server running at `{get it from your deployed aws platform [.../Stage]}`

## 3. Installation of Skyfall Mobile Application 
:point_down: Here is the link to the APK file

[![ App](https://img.shields.io/badge/CurbC19-APK-dodgerblue.svg?style=for-the-badge&logo=android)](https://drive.google.com/file/d/1_NDIx2A2p0mH7ciO6Vjh_f2rWBpw_RnU/view?usp=sharing)

```
Note: You need to disable the "Play Protect" feature from Settings of your "Google Play Store"!
```
### App Walkthrough | Running 'Skyfall' For The First Time 
#### > Dashboard UI 
We focused on the principle of _Minimalism_. Built this up on Google’s Material Design Library which helps the UI look easy and seamless keeping and all in all adds up to enhancing the app’s design / user interface experience. Why don't you see for yourself?
<table style="width:100%">
  <tr>
    <th>Dashboard (1/3)</th>
    <th>Dashboard (2/3)</th>
    <th>Dashboard (3/3)
  </tr>
  <tr>
    <td><img src="https://github.com/reachvivek/Curb-C19/blob/master/walkthrough/20200415_052953.gif"/></td>  
    <td><img src="https://github.com/reachvivek/Curb-C19/blob/master/walkthrough/20200415_060044.gif"/></td>
    <td><img src="https://github.com/reachvivek/Curb-C19/blob/master/walkthrough/20200415_055602.gif"/></td> 
  </tr>
</table>

#### > Key Features 
Can't appearances be deceptive? That's what we thought! So here's an insight into some few extra dives that this app manages to pull of which also makes it fully fledged in its own way. Also, didn't you love the _Night Mode_ ? **Well, _Suit yourself_...**
<table style="width:100%">
  <tr>
    <th>Paginated Information</th>
    <th>Search FAQs | Toggle Between Night Mode / Light Mode</th>
    <th>Curated Helpline Numbers
  </tr>
  <tr>
    <td><img src="https://github.com/reachvivek/Curb-C19/blob/master/walkthrough/20200415_072359.gif"/></td> 
    <td><img src="https://github.com/reachvivek/Curb-C19/blob/master/walkthrough/20200415_062008.gif"/></td>  
    <td><img src="https://github.com/reachvivek/Curb-C19/blob/master/walkthrough/20200415_062632.gif"/></td>
  </tr>
</table>

#### > Proposed Features
There are also a few certain things we are proposing as an idea after considering some of the recent **activities and violations** of the lockdown protocol in day light during this pandemic hour. What do you think? _Do let us know..._
<table style="width:100%">
  <tr>
    <th>Request To Go Out</th>
    <th>Report Violation</th>
    <th>AI Chatbot
  </tr>
  <tr>
    <td><img src="https://github.com/reachvivek/Curb-C19/blob/master/walkthrough/20200415_072909.gif"/></td> 
    <td><img src="https://github.com/reachvivek/Curb-C19/blob/master/walkthrough/20200415_073947.gif"/></td>  
    <td><img src="https://github.com/reachvivek/Curb-C19/blob/master/walkthrough/20200415_055303.gif"/></td>
  </tr>
</table>

#### Wait, this isn't done yet! There are many more features as well...
Good News! Because, All it takes... is a minute. Take your time and check it out below... Won't you?

[![Walkthrough](https://img.shields.io/badge/CurbC19Walkthrough-GoPro-blue.svg?style=flat&logo=youtube)](https://tinyurl.com/nomaddemo)

## Built With
<p align="left">
	<a target="_blank" href="https://kotlinlang.org/">
        <img src="https://img.shields.io/badge/Kotlin-orange.svg?style=for-the-badge&logo=kotlin" />
	</a>
</p>
<p align="center">
   <a target="_blank" href="https://firebase.google.com/">
        <img src="https://img.shields.io/badge/Firebase-red.svg?style=flat&logo=firebase" />
	</a>
   <a target="_blank" href="https://material.io/design/">
        <img src="https://img.shields.io/badge/MaterialDesign-purple.svg?style=flat&logo=materialdesign" />
	</a>
   <a target="_blank" href="https://developers.google.com/places/web-service/intro">
        <img src="https://img.shields.io/badge/GoogleMaps&Places-API-darkyellow.svg?style=flat&logo=maps" />
	</a>
   <a target="_blank" href="https://developer.android.com/reference/org/json/JSONObject">
        <img src="https://img.shields.io/badge/JSON-cyan.svg?style=flat&logo=material" />
	</a>
</p>

> - [Coroutines](https://kotlinlang.org/docs/reference/coroutines-overview.html) - The new way of writing asynchronous, non-blocking code
> - [LiveData](https://developer.android.com/topic/libraries/architecture/livedata) - Data objects that notify views when the underlying database changes.
> - [Flow](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-flow/) - A cold asynchronous data stream that sequentially emits values and completes normally or with an exception.
> - [Android Architecture Components](https://developer.android.com/topic/libraries/architecture) - Collection of libraries that help you design robust, testable, and maintainable apps.
> - [ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel) - Stores UI-related data that isn't destroyed on UI changes. 
> - [ViewBinding](https://developer.android.com/topic/libraries/view-binding) - Generates a binding class for each XML layout file present in that module and allows you to more easily write code that interacts with views.
> - [Koin](https://start.insert-koin.io/) - Dependency Injection Framework (Kotlin)
> - [Retrofit](https://square.github.io/retrofit/) - A type-safe HTTP client for Android and Java.
> - [Moshi](https://github.com/square/moshi) - A modern JSON library for Kotlin and Java.
> - [Moshi Converter](https://github.com/square/retrofit/tree/master/retrofit-converters/moshi) - A Converter which uses Moshi for serialization to and from JSON.
> - [WorkManager](https://developer.android.com/topic/libraries/architecture/workmanager) - The WorkManager API makes it easy to schedule deferrable, asynchronous tasks that are expected to run even if the app exits or device restarts.


## Team: Roger That
<table style="width:100%; height:100px; margin-left:10px;">
  <tr>
    <th>
 <img src="https://github.com/reachvivek/Curb-C19/blob/master/app/src/main/res/drawable/vivek.jpg"width="245" height="240"/>
  </tr>
  <tr>
    <td>
       <a target="_blank" href="https://www.linkedin.com/in/vivek-kumar-singh-b088a9157">
          <p align="center"> 
             <strong>VIVEK KUMAR SINGH</strong> 
          </p> 
       </a>
	    <p align="center" style="font-size:10px">FULL STACK DEVELOPMENT</p> <p align="center">WEB | ANDROID | iOS</p>
     </td>
  </tr>
</table>

<p align="center"><strong>Reach us at nomadforks@gmail.com for any queries</strong></p>

## Acknowledgement and Accreditations
> We sincerely thank and appreciate **#CODE19INDIA Hackathon Officials, MOTWANI JADEJA FOUNDATION** and all the respective **HackerEarth Official Body** who carried out this venture by extending their support at this dark hour of Pandemic. We feel really invigorated being a part of this 72 Hours Hackathon, to be able to connect and innovate with solutions for a better tomorrow against a greater cause which is still at stake and we will be striving to persevere and come up with all we can to help placate this issue.
_Looking forward to a better tomorrow..._  

## Area/Theme:

### Cyber Security

### Solution

A Full Stack Solution (includes Chrome Extension and a Mobile App) with the following functionalities:
1. Credentials Management (CRUD Operations)
2. Users Management (Using Cognito) 
3. AWS Serverless Application with Swagger UI (Complete Backend) 
4. Suggestions to make User's Credentials Strong.   
5. Syncs across any device. 

## Attachments (Also attested on the submission page of the HackerEarth Challenge)

<a target="_blank" href="https://www.tinyurl.com/nomadpitch">
  <p align="left"> <strong>Pitching Curb C-19 | YouTube</strong></p> 
</a>

<a target="_blank" href="https://www.canva.com/design/DAD5F-bf_2s/T3ulRrpBLmK1Uc0R3hpbKQ/view?utm_content=DAD5F-bf_2s&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#6">
  <p align="left"> <strong>Curb C-19 | Presentation </strong></p>
</a>

# [NextJS Material Kit](https://demos.creative-tim.com/nextjs-material-kit?ref=njsmk-readme) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/share?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnextjs-material-kit%2Fcomponents&text=NextJS%20Material%20Kit&via=Creative%20Tim&hashtags=nextjs%20%23creativetim%20%23materialdesign)


 ![version](https://img.shields.io/badge/version-1.1.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/nextjs-material-kit.svg?maxAge=2592000)](https://github.com/creativetimofficial/nextjs-material-kit/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/nextjs-material-kit.svg?maxAge=2592000)](https://github.com/creativetimofficial/nextjs-material-kit/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)


![Product Presentation Image](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/nextjs-material-kit/nextjs-material-kit.jpg)

**[NextJS Material Kit](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme)** is a Free Material-UI Kit with a fresh, new design inspired by Google's material design and is was developed using [NextJS](https://nextjs.org/?ref=creativetim), starting from [this starter project](https://github.com/mui-org/material-ui/tree/master/examples/nextjs) by [Material-UI](https://material-ui.com/?ref=creativetim) and [Material Kit React](https://www.creative-tim.com/product/material-kit-react?ref=njsmk-readme) by Creative Tim. You asked for it, so we built it. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components. Along with the restyling of the Material-UI elements, you will find three fully-coded example pages, to help you design your NextJS project.

**[NextJS Material Kit](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme)** makes use of light, surface and movement. It uses a deliberate color choice, edge-to-edge imagery and large scale typography. The general layout resembles sheets of paper following multiple different layers, so that the depth and order is obvious. The navigation stays mainly on the left and the actions on the right.

This new design has elements that have been the result of research regarding ink and paper and the way objects and materials interact in real life. The result is a beautiful and consistent set of elements that can get you started with your next project. NextJS Material Kit is a great tool if you are looking to create a web presence for your web application and need to be consistent, leaving the impression of visually similar elements. It is also a great resource in its own right, looking gorgeous and helping you build your web pages.

**[NextJS Material Kit](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme)** was built with the help of [nextjs](https://nextjs.org/?ref=creativetim) and it uses a framework built by our friends from **[Material-UI](https://material-ui.com/?ref=creativetim)**, who did an amazing job creating the backbone for the material effects, animations, ripples and transitions. Big thanks to this team for the effort and forward thinking they put into it.


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/material-kit?ref=njsmk-readme)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/nextjs_logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-readme)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/vue-material-kit?ref=njsmk-readme)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/react-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/material-kit-react?ref=njsmk-readme)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/react-native-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/material-kit-react-native?ref=njsmk-readme)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/figma-logo.jpg?raw=true" width="60" height="60" />](https://demos.creative-tim.com/material-kit-figma/presentation.html?ref=njsmk-readme)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/wordpress-logo.jpg?raw=true" width="60" height="60" />](https://themeisle.com/themes/hestia/?ref=creativetim)[<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/photoshop-logo.jpg" width="60" height="60" />](https://github.com/creativetimofficial/material-kit/tree/photoshop)[<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/sketch-logo.jpg" width="60" height="60" />](https://github.com/creativetimofficial/material-kit/tree/sketch)



| React Native | Figma | WordPress | NextJS |
| ---  | --- | --- | --- |
| [![Material Kit React Native](https://github.com/creativetimofficial/public-assets/blob/master/material-kit-react-native/opt_mkrn_thumbnail.jpg?raw=true)](https://www.creative-tim.com/product/material-kit-react-native?ref=njsmk-readme) | [![Material Kit Figma](https://github.com/creativetimofficial/public-assets/blob/master/material-kit-figma/material-kit-figma.jpg?raw=true)](https://demos.creative-tim.com/material-kit-figma/presentation.html?ref=njsmk-readme) | [![Material Kit WordPress](https://github.com/creativetimofficial/public-assets/blob/master/material-kit-wordpress/opt_smd_thumbnail.jpg?raw=true)](https://themeisle.com/themes/hestia/?ref=creativetim)  | [![NextJS Material Kit](https://github.com/creativetimofficial/public-assets/blob/master/nextjs-material-kit/nextjs-material-kit.jpg?raw=true)](https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-readme)


| HTML | React | Vue |
| --- | --- | --- |
| [![Material Kit  HTML](https://github.com/creativetimofficial/public-assets/blob/master/material-kit/material-kit.jpeg?raw=true)](https://www.creative-tim.com/product/material-kit?ref=njsmk-readme)  | [![Material Kit React](https://github.com/creativetimofficial/public-assets/blob/master/material-kit-react/material-kit-react.jpeg?raw=true)](https://www.creative-tim.com/product/material-kit-react?ref=njsmk-readme)  | [![Vue Material Kit](https://github.com/creativetimofficial/public-assets/blob/master/vue-material-kit/vue-material-kit.jpeg?raw=true)](https://www.creative-tim.com/product/vue-material-kit?ref=njsmk-readme)

## Demo

| Buttons | Inputs | Navbars  |
| --- | --- | ---  |
| [![Buttons](https://github.com/creativetimofficial/public-assets/blob/master/nextjs-material-kit/buttons.png?raw=true)](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme)  | [![Inputs](https://github.com/creativetimofficial/public-assets/blob/master/nextjs-material-kit/inputs.png?raw=true)](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme)  | [![Navbar](https://github.com/creativetimofficial/public-assets/blob/master/nextjs-material-kit/navbars.png?raw=true)](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme)  

| Login Page | Landing Page | Profile Page  |
| --- | --- | ---  |
| [![Login Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/nextjs-material-kit/login-page.png)](https://demos.creative-tim.com/nextjs-material-kit/login?ref=njsmk-readme)  | [![Landing Page](https://github.com/creativetimofficial/public-assets/blob/master/nextjs-material-kit/landing-page.png?raw=true)](https://demos.creative-tim.com/nextjs-material-kit/landing?ref=njsmk-readme)  | [![Profile Page](https://github.com/creativetimofficial/public-assets/blob/master/nextjs-material-kit/profile-page.png?raw=true)](https://demos.creative-tim.com/nextjs-material-kit/profile?ref=njsmk-readme)  

[View More](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme)


## Quick start

- [Download from Github](https://github.com/creativetimofficial/nextjs-material-kit/archive/master.zip).
- Clone the repo: `git clone https://github.com/reachvivek/Skyfall.git`.
- `npm i nextjs-material-kit`


## Documentation
The documentation for the NextJS Material Kit is hosted at our [website](https://demos.creative-tim.com/nextjs-material-kit/documentation/tutorial?ref=njsmk-readme).


## File Structure
Within the download you'll find the following directories and files:

```
Skyfall/Frontend
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── next.config.js
├── package.json
├── Documentation
│   ├── assets
│   └── tutorial-components.html
├── assets
│   ├── css
│   ├── img
│   │   ├── examples
│   │   └── faces
│   ├── jss
│   │   ├── nextjs-material-kit
│   │   │   ├── components
│   │   │   └── pages
│   │   │       ├── componentsSections
│   │   │       └── landingPageSections
│   │   └── nextjs-material-kit.js
│   └── scss
│       ├── core
│       │   ├── mixins
│       │   └── variables
│       ├── plugins
│       └── nextjs-material-kit.scss
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
│   ├── components.js
│   ├── index.js
│   ├── landingpage.js
│   ├── loginpage.js
│   └── profilepage.js
├── components
│   ├── Badge
│   │   └── Badge.js
│   ├── Card
│   │   ├── Card.js
│   │   ├── CardBody.js
│   │   ├── CardFooter.js
│   │   └── CardHeader.js
│   ├── Clearfix
│   │   └── Clearfix.js
│   ├── CustomButtons
│   │   └── Button.js
│   ├── CustomDropdown
│   │   └── CustomDropdown.js
│   ├── CustomInput
│   │   └── CustomInput.js
│   ├── CustomLinearProgress
│   │   └── CustomLinearProgress.js
│   ├── CustomTabs
│   │   └── CustomTabs.js
│   ├── Footer
│   │   └── Footer.js
│   ├── Grid
│   │   ├── GridContainer.js
│   │   └── GridItem.js
│   ├── Header
│   │   ├── Header.js
│   │   └── HeaderLinks.js
│   ├── InfoArea
│   │   └── InfoArea.js
│   ├── NavPills
│   │   └── NavPills.js
│   ├── PageChange
│   │   └── PageChange.js
│   ├── Pagination
│   │   └── Pagination.js
│   ├── Parallax
│   │   └── Parallax.js
│   ├── Snackbar
│   │   └── SnackbarContent.js
│   └── Typography
│       ├── Danger.js
│       ├── Info.js
│       ├── Muted.js
│       ├── Primary.js
│       ├── Quote.js
│       ├── Small.js
│       ├── Success.js
│       └── Warning.js
└── pages-sections
    ├── Components-Sections
    │   ├── SectionBasics.js
    │   ├── SectionCarousel.js
    │   ├── SectionCompletedExamples.js
    │   ├── SectionDownload.js
    │   ├── SectionExamples.js
    │   ├── SectionJavascript.js
    │   ├── SectionLogin.js
    │   ├── SectionNavbars.js
    │   ├── SectionNotifications.js
    │   ├── SectionPills.js
    │   ├── SectionTabs.js
    │   └── SectionTypography.js
    └── LandingPage-Sections
        ├── ProductSection.js
        ├── TeamSection.js
        └── WorkSection.js
```


## Browser Support

At present, Skyfall officially aims to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">



## Resources
- Demo: <https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme>
- Download Page: <https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-readme>
- Documentation: <https://demos.creative-tim.com/nextjs-material-kit/documentation/tutorial?ref=njsmk-readme>
- License Agreement: <https://www.creative-tim.com/license?ref=njsmk-readme>
- Support: <https://www.creative-tim.com/contact-us?ref=njsmk-readme>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/nextjs-material-kit/issues)


## Useful Links

- [Free Products](https://www.creative-tim.com/templates/free?direction=desc&sort=created_at&ref=njsmk-readme) from Creative Tim
- [Premium Products](https://www.creative-tim.com/templates/premium?direction=desc&sort=created_at&ref=njsmk-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/templates/react?direction=desc&sort=created_at&ref=njsmk-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref=njsmk-readme)

### Let's Connect?

LinkedIn: <https://www.linkedin.com/in/vivek-kumar-singh-b088a9157/>

GitHub: <https://www.github.com/reachvivek>

Instagram: <https://www.instagram.com/rogerthatvivek>
