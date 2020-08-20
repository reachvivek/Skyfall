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

## High Level Design 📜  [Click here](HLD.md)

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


## Team Name: Roger That
<table style="margin: 0px auto;" align="center">
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
	    <p align="center" style="font-size:10px">FULL STACK DEVELOPER</p> <p align="center">SRMIST - IN</p>
     </td>
  </tr>
</table>

<p align="center"><strong>Reach out to me at vs1913@srmist.edu.in or rogerthatvivek@gmail.com for any queries</strong></p>

## Acknowledgement and Accreditations
> I sincerely thank and appreciate **#CODESTREET'20 #HackerEarth Officials, all the panel members of American Express** and all the respective **Tech Enthusiasts** who volunteered in carrying out this venture by extending their support at this dark hour of Pandemic. I feel really invigorated being a part of this 24 Hours Hackathon, to be able to connect and innovate with solutions for a better and safer tomorrow.
_Looking forward to a better tomorrow..._  

## Area/Theme:

### Cyber Security

### Solution

A Full Stack Solution (includes Chrome Extension and a Mobile App) with the following components:
1. Backend Application with Swagger UI (Complete Backend). 
2. Frontend Web App using NextJs (Skyfall Interface). 
3. Skyfall - Mobile Application (using Native Coding in Android Studio).   
5. Chrome Extension - For Cross Platform Suppor (Syncs/Autofills/Suggests Secure Creds). 

## Attachments (Also attested on the submission page of the HackerEarth Challenge)

<a target="_blank" href="https://codestreet-2020.hackerearth.com/challenges/hackathon/american-express-codestreet20/dashboard/7a0f8c9/idea/published/skyfall-2/">
  <p align="left"> <strong>Skyfall | Idea Attachment </strong></p>
</a>


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
- MaterialUIStarter Kit: <https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme>
