import { v4 as uuid } from "uuid";
import { Component, GUID, HandlerFn } from "[crkt-core]";
import { Identity } from "./components/Identity";
import { isNil, map, uniq } from 'nanoutils';

export class ObjectComponent implements Component {
  inputs = ['default']
  outputs = ['default']
  _inNodes = {
    'default': new Identity()
  }
  _outNodes = {
    'default': new Identity()
  }
  _handlers = {}
  _components = {}

  selectNode(name) {
    // console.log('selectNode',name);
    let [componentName, nodeName = 'default' ] = name.split('.', 2);
    if (componentName == 'in') return [ 'default', this._inNodes[nodeName]];
    if (componentName == 'out') return [ 'default', this._outNodes[nodeName]];
    return [nodeName, this._components[componentName]];
  }

  constructor(config: object) {
    const { components, connections = [], inputs = [], outputs = []} = config;
    this._components = components;
    inputs.forEach((name) => { this._inNodes[name] = new Identity(); });
    outputs.forEach(name => { this._outNodes[name] = new Identity(); });
    this.inputs = uniq([
      ...this.inputs,
      ...inputs
    ]);
    this.outputs = uniq([
      ...this.outputs,
      ...outputs
    ]);
    map(([from, to]) => {
      const [_o, portOut='out'] = from.split('.');
      const [_i, portIn='in'] = to.split('.');
      const [nodeNameOut, compOut] = this.selectNode(from);
      const [nodeNameIn, compIn] = this.selectNode(to);
      const send = 
        nodeNameIn == 'default' 
        ? v => compIn.send(v)
        : v => compIn.send(nodeNameIn,v)
      compOut.on(nodeNameOut, send);
    }, connections);
  }

  send(port: string | any, value?: any): void {
    if (isNil(value)) {
      value = port;
      port = 'default';
    }
    this._inNodes[port].send(value);
  }

  on(port: String | HandlerFn, handler?: HandlerFn): GUID {
    if (isNil(handler)) {
      handler = (port as HandlerFn);
      port = 'default';
    }
    let id: GUID = this._outNodes[(port as string)].on(handler);
    this._handlers[id] = port;
    return id;
  }
  
  off(id: GUID) {
    let port = this._handlers[id];
    this._outNodes[port].off(id);
    delete this._handlers[id];
  }
}
