import { WithStyles, withStyles } from "material-ui/styles";
import * as React from "react";
import BoxesList from "../components/BoxesList";
import Header from "../components/Header";

const decorate = withStyles((theme: any) => ({
  control: {
    padding: theme.spacing.unit * 2
  },
  paper: {
    height: 140,
    width: 100
  },
  root: {
    flexGrow: 1
  }
}));

const c = class extends React.Component<WithStyles<"root">> {
  public render() {
    return (
      <div>
        <Header />
        <BoxesList />
      </div>
    );
  }
};

const App = decorate<{}>(c as React.ComponentType<WithStyles<"root">>);

export default App;
