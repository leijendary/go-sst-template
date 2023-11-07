import { Cognito, StackContext } from "sst/constructs";

export default function AdminAuthStack({ stack }: StackContext) {
  const auth = new Cognito(stack, "admin", {
    cdk: {
      userPool: {
        selfSignUpEnabled: false,
      },
    },
    login: ["email"],
  });

  stack.addOutputs({
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });

  return { auth };
}
