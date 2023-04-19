import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {isUserLoggedGuard} from "../../middleware/guard";
import Loader from "../loader/Loader";

const ProtectedRoutes = ({
                             isAllowed = isUserLoggedGuard(),
                             redirectPath = "/connexion",
                             children,
                         }) => {
    const [isVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAllowed) {
            navigate(redirectPath);
            return;
        }
        setIsVerified(true);
    }, [isAllowed, navigate, redirectPath]);

    return isVerified ? children : <Loader/>;
};
export default ProtectedRoutes;
