import {AppLayoutContainerBase} from "../utils/themes";

const AppLayout = ({children}) => {
    return (
        <div className={AppLayoutContainerBase}>
            {children}
        </div>
    )
}

export default AppLayout