import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  childlen: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { childlen } = props;
  return (
    <>
      <Header />
      {childlen}
    </>
  );
});
