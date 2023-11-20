import {appStore} from "../../stores/appStore.tsx";


export default function TopBar() {
    const { currentDomain } = appStore(state => state);

    return(
        <div className="h-4rem w-screen flex flex-row bg-black-alpha-70 text-white">
            {currentDomain}
        </div>
    )
}