import { Route, Switch } from "wouter";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={AllProjects} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;