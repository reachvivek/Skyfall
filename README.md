<p align="center"><img src="https://github.com/reachvivek/Skyfall/blob/master/Frontend/assets/img/cloud.png" width="200" height="200"></p>

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

### API documentation and Testing with Swagger UI 🔨 [Click Here](SkyfallSwagger.md)

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

[![ App](https://img.shields.io/badge/Skyfall-APK-dodgerblue.svg?style=for-the-badge&logo=android)](https://drive.google.com/file/d/1_NDIx2A2p0mH7ciO6Vjh_f2rWBpw_RnU/view?usp=sharing)

```
Note: You need to disable the "Play Protect" feature from Settings of your "Google Play Store"!
```

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

## Area/Theme:

### Cyber Security

### Solution

A Full Stack Solution (includes Chrome Extension and a Mobile App) with the following components:
1. Backend Application with Swagger UI (Complete Backend). 
2. Frontend Web App using NextJs (Skyfall Interface). 
3. Skyfall - Mobile Application (using Native Coding in Android Studio).   
5. Chrome Extension - For Cross Platform Suppor (Syncs/Autofills/Suggests Secure Creds). 

## Acknowledgement and Accreditations
> I sincerely thank and appreciate **#CODESTREET'20 #HackerEarth Officials, all the panel members of American Express** and all the respective **Tech Enthusiasts** who volunteered in carrying out this venture by extending their support at this dark hour of Pandemic. I feel really invigorated being a part of this 24 Hours Hackathon, to be able to connect and innovate with solutions for a better and safer tomorrow.
_Looking forward to a better tomorrow..._  


