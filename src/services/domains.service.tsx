import {api} from "./apis/api.ts";
import {CreateNewDomainTypes} from "../types/dominioTypes.ts";

export default function DomainsService() {


    const getDomains = (idDomain?: number) => {
        return api.get(`dominio/${idDomain || ''}`)
    };

    const createNewDomain = (data: CreateNewDomainTypes) => {
        return api.post('/dominio', data)
    }

    return {
        getDomains,
        createNewDomain
    }
}