import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import Works from "../pages/Works";
import TaskList from "../pages/Tasks/TaskList";
import WorkList from "../pages/Works/WorkList";
import TaskActionList from "../pages/Tasks/TaskActionList";

const AppRouter = ({ routes }) => {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />}>
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/tasks/:id" element={<TaskActionList />} />
              </Route>
              <Route path="/works" element={<Works />}>
                <Route path="/works" element={<WorkList />} />
                {/* <Route path="/works/:id" element={<TaskActionList />} /> */}
              </Route>
            </Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
