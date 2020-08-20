import { CognitoUserPool } from "amazon-cognito-identity-js";
// npm i amazon-cognito-identity-js3

const poolData = {
  UserPoolId: "ap-south-1_ferS7YnAr",
  ClientId: "r5l4mpudf69n2lm101jjpmpl8",
};

export default new CognitoUserPool(poolData);
