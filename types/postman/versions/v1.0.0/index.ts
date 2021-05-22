export type Variable = any | any | any;

export type VariableList = Variable[];

export type Description = {
    content?: string;
    "type"?: string;
    version?: any;
} | string | null;

export type Url = {
    raw?: string;
    protocol?: string;
    host?: string | string[];
    path?: string | (string | {
        "type"?: string;
        value?: string;
    })[];
    port?: string;
    query?: {
        key?: string | null;
        value?: string | null;
        disabled?: boolean;
        description?: Description;
    }[];
    hash?: string;
    variable?: Variable[];
} | string;

export interface Script {
    id?: string;
    "type"?: string;
    exec?: string[] | string;
    src?: Url;
    name?: string;
}

export interface Event {
    id?: string;
    listen: string;
    script?: Script;
    disabled?: boolean;
}

export type EventList = Event[] | null;

export interface Auth {
    key: string;
    value?: any;
    "type"?: string;
}

export interface Auth {
    "type": "apikey" | "awsv4" | "basic" | "bearer" | "digest" | "edgegrid" | "hawk" | "noauth" | "oauth1" | "oauth2" | "ntlm";
    noauth?: any;
    apikey?: Auth[];
    awsv4?: Auth[];
    basic?: Auth[];
    bearer?: Auth[];
    digest?: Auth[];
    edgegrid?: Auth[];
    hawk?: Auth[];
    ntlm?: Auth[];
    oauth1?: Auth[];
    oauth2?: Auth[];
}

export type ProtocolProfileBehavior = object;

export interface Folder {
    id: string;
    name: string;
    description: string;
    order: string[];
    folders_order?: string[];
    collection_id?: string;
    collection?: string;
    variables?: VariableList;
    events?: EventList;
    auth?: null | Auth;
    protocolProfileBehavior?: ProtocolProfileBehavior;
}

export type Request = any | any;

export type CurrentAuthHelper = string | null;

export type HelperAttributes = null | string | {} | {
    id: "apikey";
    [key: string]: any;
} | {
    id: "awsSigV4";
    [key: string]: any;
} | {
    id: "digest";
    [key: string]: any;
} | {
    id: "edgegrid";
    [key: string]: any;
} | {
    id: "hawk";
    [key: string]: any;
} | {
    id: "ntlm";
} | {
    id: "basic";
    [key: string]: any;
} | {
    id: "bearer";
    [key: string]: any;
} | {
    id: "oAuth1";
    [key: string]: any;
} | {
    id: "oAuth2";
    [key: string]: any;
};

export type PreRequestScript = string | null;

export type Tests = string | null;

export interface  {
    id: string;
    name: string;
    description?: string | null;
    variables?: VariableList | null;
    order: string[];
    folders_order?: string[];
    folders?: Folder[];
    timestamp?: number;
    requests: Request[];
    events?: EventList;
    auth?: null | Auth;
    protocolProfileBehavior?: ProtocolProfileBehavior;
}