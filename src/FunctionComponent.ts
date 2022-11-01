import { isNil, map, values } from 'nanoutils';
import setAsap from 'setasap';
import { BadPortError } from './errors';
import { v4 as uuid } from 'uuid';
import { Component, ComponentFn, GUID, HandlerFn } from '[crkt-core]';
import { _default } from '.';

export class FunctionComponent implements Component {
  _function;
  _lastValue: any;
  _handlers: Object = {};

  inputs = ['default'];
  outputs = ['default'];


  constructor(funcImpl?: ComponentFn) {
    this._function = funcImpl || ((v, next) => next(v));
  }
  _innerNext(v) {
    map((h) => {
      setAsap(() => h(v));
    }, values(this._handlers));
  }
  send(port: String | any, value?: any): void {
    if (isNil(value)) [port, value] = [null, port];
    if (port && port !== "in" && port !== 'default') throw new BadPortError("input", port);
    this._lastValue = value;
    let next = (v) => this._innerNext(v);
    this._function(value, next);
  }

  on(port: string | any, handler?: HandlerFn): GUID {
    if (isNil(handler)) [handler, port] = [port, null];
    if (port && port !== "out" && port !== 'default') throw new BadPortError("output", port);
    let id = uuid();
    this._handlers[id] = handler;
    if (this._lastValue !== undefined) handler(this._lastValue);
    return id;
  }

  off(id: GUID) {
    delete this._handlers[id];
  }
}
