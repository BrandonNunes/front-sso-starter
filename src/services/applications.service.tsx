import {api} from "./apis/api.ts";
import {CreateNewDomainTypes} from "../types/dominioTypes.ts";

export default function ApplicationsService() {


    const getApplicationsByDomain = (idDomain: number) => {
        return api.get(`aplicacao/dominio/${idDomain}`)
    };

    const createNewDomain = (data: CreateNewDomainTypes) => {
        return api.post('/dominio', data)
    }

    return {
        getApplicationsByDomain,
        createNewDomain
    }
}