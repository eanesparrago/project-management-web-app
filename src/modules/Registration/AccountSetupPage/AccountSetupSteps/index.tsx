import { Steps } from "antd";

import { useAppSelector } from "app/hooks";
import {
  selectRegistrationStage,
  RegistrationStage,
} from "../../registrationSlice";

const { Step } = Steps;

interface AccountSetupStepsProps {
  className?: string;
}

function getCurrentStep(registrationStage: RegistrationStage): number {
  switch (registrationStage) {
    case "accountInfo":
      return 0;

    case "aboutYourself":
    case "mainObjective":
      return 1;

    case "firstProject":
    case "projectTasks":
    case "taskGroupings":
      return 2;

    default:
      throw new Error("Unreachable code");
  }
}

function AccountSetupSteps({ className }: AccountSetupStepsProps) {
  const registrationStage = useAppSelector(selectRegistrationStage);

  const currentStep = getCurrentStep(registrationStage);

  return (
    <Steps size="small" className={className} current={currentStep}>
      <Step title="About You" />
      <Step title="About Your Work" />
      <Step title="Setup Your First Project" />
    </Steps>
  );
}

export default AccountSetupSteps;
