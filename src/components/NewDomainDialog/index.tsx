import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {useForm, SubmitHandler, Controller} from "react-hook-form"
import {classNames} from "primereact/utils";
import {InputText} from "primereact/inputtext";
import {CreateNewDomainTypes} from "../../types/dominioTypes.ts";
import { Messages } from 'primereact/messages';
import {useRef, useState} from "react";
import DomainsService from "../../services/domains.service.tsx";
import {AxiosError} from "axios";

type Props = {
    visible: boolean,
    onHide: () => void
}
export default function NewDomainDialog({ visible = false , onHide }: Props) {
    const msgs = useRef<Messages>(null);
    const [loading, setLoading] = useState(false);
    const { createNewDomain } = DomainsService();

    const {
        control,
        handleSubmit,
        reset,
    } = useForm<CreateNewDomainTypes>();
    function onClose() {
        reset();
        onHide();
    }
    const showMessage = (severity: 'warn' | 'error' | 'success', summary: string, message: string) => {
        msgs.current?.show({ sticky: true, severity: severity, summary: summary, detail: message, closable: false, life: 3000 });
    }
    const clearMessages = () => msgs.current?.clear();
    const onSubmit: SubmitHandler<CreateNewDomainTypes> = (data) => {
        setLoading(true);
        createNewDomain(data).then((resp) => {
            showMessage('success', 'Sucesso', resp.data.message);
            setTimeout(() => {
                clearMessages();
                onClose();
            }, 2000)
        }).catch((erro: AxiosError<{message: string}>) => {
            showMessage('error', 'Falha', erro.response!.data.message || 'Falha na operação')
        }).finally(() => setLoading(false));
    }

    const footerContent = (
        <div className="flex flex-row w-full justify-content-end">
            {/*<Button label="Cancelar" icon="pi pi-times" onClick={onHide} className="p-button-text" type="button" />*/}
            <Button label="Salvar" icon="pi pi-check" className="bg-blue-400 text-white" autoFocus type="submit" loading={loading} />
        </div>
    );
    return(
        <Dialog
            header="Novo Domínio"
            className="text-color" closeIcon={<i className="pi pi-times text-color"></i>}
            visible={visible} style={{ width: '50vw' }}
            onHide={onClose}>
            <Messages ref={msgs} />
            <form className="m-0 w-full p-2 formgrid grid" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="descricao"
                    control={control}
                    rules={{ required: 'Campo obrigatório' }}
                    render={({ field, fieldState }) => (
                        <>
                            <span className="p-float-label field col">
                                <InputText
                                    id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error, 'w-full': true })}
                                    onChange={(e) => field.onChange(e.target.value)} />
                                <label htmlFor={field.name}>Nome Domínio</label>
                            </span>
                            {/*{getFormErrorMessage(field.name)}*/}
                        </>
                    )}
                />
                {footerContent}
            </form>
        </Dialog>
    )
}