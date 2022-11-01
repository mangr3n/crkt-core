type HandlerFn = (value: any) => void;
type ComponentFn = (value: any, next: NextFn) => void;
type NextFn = (value: any) => void;
type GUID = string;

export interface Component {
  inputs: string[];
  outputs: string[];
  send: (port: string | any, value?: any | void) => void;
  on: (port: string | HandlerFn, handler?: HandlerFn | void) => GUID;
  off: (id: GUID) => void;
}
