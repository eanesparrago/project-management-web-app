import AccountInfoStage from "./AccountInfoStage";
import AboutYourselfStage from "./AboutYourselfStage";
import MainObjectiveStage from "./MainObjectiveStage";
import FirstProjectStage from "./FirstProjectStage";
import ProjectTasksStage from "./ProjectTasksStage";
import TaskGroupingsStage from "./TaskGroupingsStage";

import { useAppSelector } from "app/hooks";
import { selectRegistrationStage } from "../../registrationSlice";

function AccountSetupForm() {
  const registartionStage = useAppSelector(selectRegistrationStage);

  function getCurrentForm() {
    switch (registartionStage) {
      case "accountInfo":
        return <AccountInfoStage />;

      case "aboutYourself":
        return <AboutYourselfStage />;

      case "mainObjective":
        return <MainObjectiveStage />;

      case "firstProject":
        return <FirstProjectStage />;

      case "projectTasks":
        return <ProjectTasksStage />;

      case "taskGroupings":
        return <TaskGroupingsStage />;
    }
  }

  return <>{getCurrentForm()}</>;
}

export default AccountSetupForm;
