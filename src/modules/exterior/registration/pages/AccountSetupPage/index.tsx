import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "app/hooks";
import { resetAccountSetupPage } from "./accountSetupPageSlice";

import Logo from "components/Logo";
import AccountSetupSteps from "./AccountSetupSteps";
import AccountSetupForm from "./AccountSetupForm";
import LogoutButton from "components/LogoutButton";
import { HeaderBlock, PageBlock, MainBlock } from "../../../styles";

function AccountSetupPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetAccountSetupPage());
  }, [dispatch]);

  return (
    <PageBlock>
      <HeaderBlock>
        <ScLogo />

        <ScAccountSetupSteps />

        <ScLogoutButton />
      </HeaderBlock>

      <MainBlock>
        <AccountSetupForm />
      </MainBlock>
    </PageBlock>
  );
}

const ScLogo = styled(Logo)`
  margin-right: 1.5rem;
`;

const ScAccountSetupSteps = styled(AccountSetupSteps)`
  width: 45rem;
`;

const ScLogoutButton = styled(LogoutButton)`
  margin-left: auto;
`;

export default AccountSetupPage;
