import ApplicationsService from "../../services/applications.service.tsx";
import {useEffect, useState} from "react";
import {appStore} from "../../stores/appStore.tsx";
import {AplicacaoTypes} from "../../types/aplicacaoTypes.ts";


export default function ApplicationsView() {
    const [ listApplications, setListApplications ] = useState<AplicacaoTypes[]>([]);
    const { getApplicationsByDomain } = ApplicationsService();
    const { currentDomain } = appStore(state => state)

    useEffect(() => {
        if (currentDomain) {
            getApplicationsByDomain(currentDomain).then((resp) => {
                setListApplications(resp.data);
            })
        }
    }, [currentDomain])

    return(
        <div className="w-full h-full flex flex-column">
            {listApplications.map((app) => {
                return <p className="text-black-alpha-90">{app.nomeApp}</p>
            })
            }
        </div>
    )
}