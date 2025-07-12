import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "../../utils/routes";
import { useDispatch } from "react-redux";
import { setProfile } from "../../features/profile/profileSlice";

function Layout() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [referralId, setReferralId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && dispatch(setProfile(user));
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const refId = queryParams.get("ref");

    refId
      ? localStorage.setItem("referralId", refId) && setReferralId(refId)
      : localStorage.getItem("referralId") &&
        setReferralId(localStorage.getItem("referralId"));
  }, [location]);


  return (
    <Routes>
      {[
        ...routes.infoPages,
        ...routes.shopPages,
        ...routes.userTools,
        ...routes.securityPages,
        routes.sneakersPage,
        routes.buyPage,
      ].map(({ id, path, element }) => {
        return <Route key={id} path={path} element={element} />;
      })}
    </Routes>
  );
}

export default Layout;
