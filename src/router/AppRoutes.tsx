import PomodoroTodoScreen from "app/PomodoroTodoScreen";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class AppRouter extends React.Component {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PomodoroTodoScreen />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

// export default function AppRoutes() {
//     return createBrowserRouter([
//         { path: "/", element: }
//     ])
// }
