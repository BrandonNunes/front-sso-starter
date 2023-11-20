
export interface AplicacaoTypes {
    id: number;
    nomeApp: string;
    ativo?: boolean;
    logo?: string;
    dominioId: number;
    licencaId?: number;
    usuarios?: any[]
}

export interface CreateNewAplicacaoTypes {
    nomeApp: string;
    ativo?: boolean;
    logo?: string;
    dominioId: number;
    licencaId?: number;
}