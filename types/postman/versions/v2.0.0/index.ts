export type Description = {
    content?: string;
    "type"?: string;
    version?: any;
} | string | null;

export type CollectionVersion = {
    major: number;
    minor: number;
    patch: number;
    identifier?: string;
    meta?: any;
} | string;

export interface Information {
    name: string;
    _postman_id?: string;
    description?: Description;
    version?: CollectionVersion;
    schema: string;
}

export type Variable = any | any | any;

export type VariableList = Variable[];

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

export type EventList = Event[];

export interface Auth {
    "type": "apikey" | "awsv4" | "basic" | "bearer" | "digest" | "edgegrid" | "hawk" | "ntlm" | "noauth" | "oauth1" | "oauth2";
    noauth?: any;
    apikey?: object;
    awsv4?: object;
    basic?: object;
    bearer?: object;
    digest?: object;
    edgegrid?: object;
    hawk?: object;
    ntlm?: object;
    oauth1?: object;
    oauth2?: object;
}

export interface ProxyConfig {
    match?: string;
    host?: string;
    port?: number;
    tunnel?: boolean;
    disabled?: boolean;
}

export interface Certificate {
    name?: string;
    matches?: string[];
    key?: {
        src?: any;
    };
    cert?: {
        src?: any;
    };
    passphrase?: string;
}

export interface Header {
    key: string;
    value: string;
    disabled?: boolean;
    description?: Description;
}

export type HeaderList = Header[];

export type Request = {
    url?: Url;
    auth?: null | Auth;
    proxy?: ProxyConfig;
    certificate?: Certificate;
    method?: ("GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "COPY" | "HEAD" | "OPTIONS" | "LINK" | "UNLINK" | "PURGE" | "LOCK" | "UNLOCK" | "PROPFIND" | "VIEW") | string;
    description?: Description;
    header?: HeaderList | string;
    body?: {
        mode?: "raw" | "urlencoded" | "formdata" | "file" | "graphql";
        raw?: string;
        graphql?: object;
        urlencoded?: {
            key: string;
            value?: string;
            disabled?: boolean;
            description?: Description;
        }[];
        formdata?: ({
            key: string;
            value?: string;
            disabled?: boolean;
            "type"?: "text";
            contentType?: string;
            description?: Description;
        } | {
            key: string;
            src?: any | string | null;
            disabled?: boolean;
            "type"?: "file";
            contentType?: string;
            description?: Description;
        })[];
        file?: {
            src?: string | null;
            content?: string;
        };
        options?: object;
        disabled?: boolean;
    } | null;
} | string;

export interface Cookie {
    domain: string;
    expires?: string | null;
    maxAge?: string;
    hostOnly?: boolean;
    httpOnly?: boolean;
    name?: string;
    path: string;
    secure?: boolean;
    session?: boolean;
    value?: string;
    extensions?: any;
}

export interface Response {
    id?: string;
    originalRequest?: Request;
    responseTime?: null | string | number;
    timings?: object | null;
    header?: (Header | string)[] | string | null;
    cookie?: Cookie[];
    body?: null | string;
    status?: string;
    code?: number;
}

export type ProtocolProfileBehavior = object;

export interface Item {
    id?: string;
    name?: string;
    description?: Description;
    variable?: VariableList;
    event?: EventList;
    request: Request;
    response?: Response[];
    protocolProfileBehavior?: ProtocolProfileBehavior;
}

export interface Folder {
    name?: string;
    description?: Description;
    variable?: VariableList;
    item: (Item | Folder)[];
    event?: EventList;
    auth?: null | Auth;
    protocolProfileBehavior?: ProtocolProfileBehavior;
}

export type CertificateList = Certificate[];

export type CertificateList = Cookie[];

export interface  {
    info: Information;
    item: (Item | Folder)[];
    event?: EventList;
    variable?: VariableList;
    auth?: null | Auth;
    protocolProfileBehavior?: ProtocolProfileBehavior;
}