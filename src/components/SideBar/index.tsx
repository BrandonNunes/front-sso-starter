import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import {Button} from "primereact/button";
import NewDomainDialog from "../NewDomainDialog";
import DomainsService from "../../services/domains.service.tsx";
import {DomainTypes} from "../../types/dominioTypes.ts";
import {appStore} from "../../stores/appStore.tsx";


export default function SideBar() {
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [listDomains, setListDomains] = useState<DomainTypes[]>([]);
    const { currentDomain, setCurrentDomain } = appStore(state => state);

    const { getDomains } = DomainsService();
    function toggleDialog() {
        setVisibleDialog(state => !state);
    }
    const [selectedDomain, setSelectedDomain] = useState<any | null>(currentDomain);

    const options = [
        {
            name: 'Aplicações',
            route: 'aplicacoes'
        },
        {
            name: 'Usuários',
            route: 'option2'
        },
        {
            name: 'Grupos',
            route: 'option3'
        },
        {
            name: 'Permissões',
            route: 'option2'
        },
    ];
    useEffect(() => {
        getDomains().then((resp) => setListDomains(resp.data))
    }, [visibleDialog])
    return(
        <div className="h-full max-w-16rem shadow-3 bg-black-alpha-60 p-3 flex flex-column">
            <NewDomainDialog visible={visibleDialog} onHide={toggleDialog} />
            <div className="card flex justify-content-center flex-column gap-1 text-sm">
                <Dropdown
                    value={selectedDomain}
                    onChange={(e: DropdownChangeEvent) => {
                        setSelectedDomain(e.value);
                        setCurrentDomain(e.value);
                        localStorage.setItem('domain', e.value);
                    }}
                    options={listDomains}
                    optionLabel="descricao"
                    optionValue="id"
                    emptyMessage="Sem Resultados"
                    placeholder="Selecione" className="w-full md:w-8rem text-sm" />
                <Button severity="secondary" label="Novo Dominio" className="bg-black-alpha-40 text-sm p-2" onClick={toggleDialog} />
            </div>
            {options.map((opt, idx) => (
                <NavLink key={idx} to={opt.route} className={(props) => `p-1 ${props.isActive ? 'text-blue-900' : 'text-white' }`}>{opt.name}</NavLink>
            ))}
        </div>
    )
}