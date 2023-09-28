import flattenDeep from "lodash/flattenDeep";
import { Route, Routes as ReactRoutes, useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { IconType } from "react-icons";
import MainWithdraw from "../pages/withdraw";
import WithdrawModal from "../components/WithdrawModal";
import ModalLayout from "../layouts/modal.layout";

type IRouteChild = {
  name: string;
  title: string;
  hasSiderLink?: boolean;
  component: () => JSX.Element;
  path: string;
  isPublic?: boolean;
  icon: IconType;
  routes?: Array<IRouteChild>;
};

export type IRoute = {
  layout: () => JSX.Element;
  routes: Array<IRouteChild>;
};

const generateFlattenRoutes = (
  routes?: Array<IRouteChild>
): Array<Omit<IRouteChild, "routes">> => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

export const renderRoutes = (mainRoutes: Array<IRoute>) => {
  const Routes = ({ isAuthorized }: { isAuthorized: boolean }) => {
    const location = useLocation();
    const previousLocation = location.state?.backgroundLocation;

    console.log(previousLocation);

    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);

      return (
        <Route key={index} element={<Layout />}>
          <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
            {subRoutes.map(({ component: Component, path, name }) => {
              return (
                Component &&
                path && <Route key={name} element={<Component />} path={path} />
              );
            })}
          </Route>
        </Route>
      );
    });
    return (
      <div>
        <ReactRoutes location={previousLocation || location}>
          {layouts}
        </ReactRoutes>
        {previousLocation && (
          <ReactRoutes>
            <Route element={<ModalLayout />}>
              <Route path="/withdraw/:step" element={<WithdrawModal />} />
            </Route>
          </ReactRoutes>
        )}
      </div>
    );
  };
  return Routes;
};
